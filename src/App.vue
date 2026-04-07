<template>
  <character-sheet></character-sheet>
</template>

<script>
// @ is an alias to /src
'use strict';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import CharacterSheet from '@/components/character-sheet.vue';

export default {
   name: 'App',
   components: {
      CharacterSheet,
   },// /components{}

   data (){
      return {
      };
   },// /data()

   computed:{
      ...mapGetters([
      ]),
   }, // /computed{}

   methods: {
      ...mapActions([
      ]),
   },// methods{}

   mounted (){
   },// /mounted()
};
</script>

<style>
   body
   {
      background-color: #cccccc !important;
   }

   .debug
   {
      font-size: 0.8em;
      white-space: pre;
      opacity: 0.5;
   }
</style>
