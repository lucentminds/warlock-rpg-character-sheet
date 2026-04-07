'use strict';

class Character {

   _attributes = null;

   _keys = [];




   constructor( o_props = {} ) {
      const o_attrs = this.constructor.attributes;
      this._attributes = o_attrs;
      this._keys = Object.keys( o_attrs );
      this._keys.sort();
      this._keys.forEach( ( k ) => {
         if( Object.hasOwn( o_props, k ) ) {
            this._attributes[ k ] = o_props[ k ];
         }

         const c_get_attr = `get_${k}_attribute`;
         const c_set_attr = `set_${k}_attribute`;
         
         Object.defineProperty( this, k, {
            get: () => {
               const value = this._attributes[k];
               if( Reflect.has( this, c_get_attr ) ){
                  return this[c_get_attr]( value );
               }
               return value;
            },// /get()

            set: ( value ) => {
               if( Reflect.has( this, c_set_attr ) ){
                  this[c_set_attr]( value );
               }
               else{
                  this._attributes[k] = value;
               }
               // this._is_dirty = true;
               // this.on_property_set( k, value );
            },// /set()
         });
      });


   }// /constructor()

   get keys(){
      return this._keys;
   }// /get keys()

   static get attributes(){
      return {
         background: '',
         career: '',
         career_advances_mark_higher: false,
         career_advances_mark_lower: false,
         career_skills: '',
         careers_past: '',
         community: '',
         luck: '',
         name: '',
         possesions: '',

         skill_appraise: '',
         skill_athletics: '',
         skill_bargain: '',
         skill_blunt: '',
         skill_brawling: '',
         skill_command: '',
         skill_crossbow: '',
         skill_diplomacy: '',
         skill_disguise: '',
         skill_dodge: '',
         skill_endurance: '',
         skill_history: '',
         skill_incantation: '',
         skill_intimidate: '',
         skill_language: '',
         skill_large_blade: '',
         skill_lie: '',
         skill_medicine: '',
         skill_navigation: '',
         skill_ostler: '',
         skill_persuasion: '',
         skill_pole_arm: '',
         skill_repair: '',
         skill_sleight_of_hand: '',
         skill_small_blade: '',
         skill_spot: '',
         skill_stealth: '',
         skill_streetwise: '',
         skill_survival: '',
         skill_swimming: '',
         skill_thrown: '',

         spells: '',
         stamina: '',
         traits: '',
         weapons: '',
      };
   }// /static get attributes()

   toJSON(){
      const o_props = {};

      this.keys.forEach(( c_attr )=>{
         o_props[ c_attr ] = this._attributes[ c_attr ];
      });

      return o_props;
   }// /toJSON()
}// /Character{}

export default Character;
