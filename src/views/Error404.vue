<template>
   <div class="alert alert-danger">
      <i class="fas fa-exclamation-triangle"></i> &nbsp;
      <strong>404 not found</strong> "<em>#{{path}}</em>"
   </div>
</template>

<script>
'use strict';
export default {
   emits: [],
   data (){
      return {
         path: this.$route.path,
      };
   },// /data()
};
</script>
