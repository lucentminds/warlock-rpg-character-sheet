'use strict';
import https from 'https';
import fs from 'fs';
import fsp from 'fs/promises';

const PUBLIC_DIR = './public';
let n_requests = 0;

// Create the HTTPS server
const server = https.createServer({
   // Add your SSL/TLS certificate and key here
   // Replace 'cert.pem' and 'key.pem' with your actual file names
   key: fs.readFileSync('./ssl/lifecorp_internal_crt.key'),
   cert: fs.readFileSync('./ssl/lifecorp_internal_crt_trusted_chain.crt'),
}, (req, res) => {
   try {
      handle_request( req, res );
   } catch (err) {
      console.error('Error handling request:', err);
      res.writeHead( 500, { 'Content-Type': 'text/plain' } );
      res.end( 'Internal Server Error' );
   }
});

async function handle_request( req, res ) {

   const c_ipaddr = req.socket.remoteAddress;
   const c_method = req.method;

   n_requests++;
   console.log(`Https ${c_method} ${n_requests} from ${c_ipaddr}: ${req.url}`);

   const c_local_file = get_local_file( req.url );
   const c_local_file_path = PUBLIC_DIR + c_local_file;
   let l_file_exists = false;

   try {
      await fsp.access( c_local_file_path, fs.constants.F_OK );
      l_file_exists = true;
   } catch (err) {
      l_file_exists = false;
   }

   if ( !l_file_exists ) {
      res.writeHead( 404, { 'Content-Type': 'text/plain' } );
      return res.end( 'Not Found' );
   }

   const c_ext = c_local_file.split('.').pop().toLowerCase();
   const c_content_type = get_content_type( c_ext );
   const file_content = await fsp.readFile( c_local_file_path, 'utf-8' );

   res.writeHead( 200, { 'Content-Type': c_content_type } );
   res.end( file_content );
}// /handle_request()

// Convert the requested URL to a local file path.
function get_local_file( c_url ) {
   let c_local_file = c_url;
   if ( c_local_file === '/' ) {
      c_local_file = '/index.html';
   }
   return c_local_file;
}// /get_local_file()

function get_content_type( c_ext ) {
   switch ( c_ext ) {
   case 'html':
      return 'text/html';
   case 'css':
      return 'text/css';
   case 'js':
      return 'application/javascript';
   case 'png':
      return 'image/png';
   case 'jpg':
   case 'jpeg':
      return 'image/jpeg';
   default:
      return 'text/plain';
      break;
   }
}// /get_content_type()




const HOST = '0.0.0.0'
const PORT = 8888
server.listen( PORT, HOST, () => {
   console.log(`HTTPS server is running at https://${HOST}:${PORT}`);
});