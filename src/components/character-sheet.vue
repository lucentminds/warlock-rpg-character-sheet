<template>
   <div class="character-sheet">
      <form class="character-sheet__form">
         <div class="form-row-between">
            <div class="">
               <div class="form-group form-row-start">
                  <label class="" for="name">
                     Name:
                  </label>
                  <input class="form-control form-control-sm" type="text"
                     autofocus="autofocus"
                     placeholder="Name of your character"
                     v-model="character.name"/>
               </div>

               <div class="form-group form-row-start">
                  <label class="" for="community">
                     Community:
                  </label>
                  <input class="form-control form-control-sm" type="text"
                     placeholder=""
                     v-model="character.community"/>
               </div>

               <div class="form-group form-row-start">
                  <label class="" for="career">
                     Career:
                  </label>
                  <input class="form-control form-control-sm" type="text"
                     placeholder=""
                     v-model="character.career"/>
               </div>

               <div class="form-group form-row-start">
                  <label class="" for="career_past">
                     Past Careers:
                  </label>
                  <input class="form-control form-control-sm" type="text"
                     placeholder=""
                     v-model="character.careers_past"/>
               </div>
            </div>

            <div class="form-group character-sheet__background">
               <label class="" for="background">
                  Background
               </label>
               <textarea class="form-control form-control-sm"
                  placeholder=""
                  v-model="character.background"></textarea>
            </div>
         </div>


         <div class="form-row-between mb-3 mt-3">
            <div class="form-group form-row-start">
               <label class="" for="stamina">
                  Stamina:
               </label>
               <input class="form-control form-control-sm" id="stamina"
                  type="text" placeholder=""
                  v-model="character.stamina"/>
            </div>

            <div class="form-group form-row-start">
               <label class="" for="luck">
                  Luck:
               </label>
               <input class="form-control form-control-sm" id="luck"
                  type="text" placeholder=""
                  v-model="character.luck"/>
            </div>
         </div>

         Carrer Advances Mark:
         <div class="form-row-between mb-3">
            <div class="form-check">
               <input class="form-check-input" id="carrer-advances-lower"
                  type="checkbox"
                  v-model="character.career_advances_mark_lower">
               <label class="form-check-label" for="carrer-advances-lower">
                  Lower max. level
               </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" id="carrer-advances-higher"
                  type="checkbox"
                  v-model="character.career_advances_mark_higher">
               <label class="form-check-label" for="carrer-advances-higher">
                  Higher max. level
               </label>
            </div>
         </div>



         Adventuring Skills Level
         <div class="form-row-between">
            <div class="">
               <div class="form-group form-row-start"
                  v-for="skill in fields_skill_column_1" :key="skill">
                  <label class="" :for="`skill_${skill}`">
                     {{ skill_cap_each_word( skill ) }}
                  </label>
                  <input class="form-control form-control-sm"
                     :id="`skill_${skill}`"
                     type="text" placeholder=""
                     v-model="character[skill]"/>
               </div>
            </div>


            <div class="">
               <div class="form-group form-row-start"
                  v-for="skill in fields_skill_column_2" :key="skill">
                  <label class="" :for="`skill_${skill}`">
                     {{ skill_cap_each_word( skill ) }}
                  </label>
                  <input class="form-control form-control-sm"
                     :id="`skill_${skill}`"
                     type="text" placeholder=""
                     v-model="character[skill]"/>
               </div>
            </div>
         </div>


         <div class="form-row-between">
            <div class="form-group">
               <label class="" for="career_skills">
                  Career Skills
               </label>
               <textarea class="form-control form-control-sm"
                  id="career_skills" placeholder=""
                  v-model="character.career_skills"></textarea>
            </div>

            <div class="form-group">
               <label class="" for="weapons">
                  Weapons
               </label>
               <textarea class="form-control form-control-sm"
                  id="weapons" placeholder=""
                  v-model="character.weapons"></textarea>
            </div>
         </div>


         <div class="form-row">
            <div class="form-group">
               <label class="" for="posessions">
                  Posessions
               </label>
               <textarea class="form-control form-control-sm"
                  id="posessions" placeholder=""
                  v-model="character.posessions"></textarea>
            </div>

            <div class="form-group">
               <label class="" for="spells">
                  Spells
               </label>
               <textarea class="form-control form-control-sm"
                  id="spells" placeholder=""
                  v-model="character.spells"></textarea>
            </div>

            <div class="form-group">
               <label class="" for="traits">
                  Traits
               </label>
               <textarea class="form-control form-control-sm"
                  id="traits" placeholder=""
                  v-model="character.traits"></textarea>
            </div>
         </div>
      </form>
      <div class="debug">
         character: {{ character }}
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
'use strict';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Character from '@/lib/character.mjs';


export default {
   emits: [],
   name: 'character-sheet',

   props:{
   },// /props{}

   components: {
   },// /components{}

   data (){
      return {
         character: new Character(),
         char_background: '',
         char_career: '',
         char_career_advances_mark_higher: false,
         char_career_advances_mark_lower: false,
         char_careers_past: '',
         char_community: '',
         char_luck: '',
         char_name: '',
         char_stamina: '',

         char_skill_appraise: '',
         char_skill_athletics: '',
         char_skill_bargain: '',
         char_skill_blunt: '',
         char_skill_brawling: '',
         char_skill_command: '',
         char_skill_crossbow: '',
         char_skill_diplomacy: '',
         char_skill_disguise: '',
         char_skill_dodge: '',
         char_skill_endurance: '',
         char_skill_history: '',
         char_skill_incantation: '',
         char_skill_intimidate: '',
         char_skill_language: '',

         char_skill_large_blade: '',
         char_skill_lie: '',
         char_skill_medicine: '',
         char_skill_navigation: '',
         char_skill_ostler: '',
         char_skill_persuasion: '',
         char_skill_pole_arm: '',
         char_skill_repair: '',
         char_skill_sleight_of_hand: '',
         char_skill_small_blade: '',
         char_skill_spot: '',
         char_skill_stealth: '',
         char_skill_streetwise: '',
         char_skill_survival: '',
         char_skill_swimming: '',
         char_skill_thrown: '',


         fields_skill_column_1: [
            'skill_appraise',
            'skill_athletics',
            'skill_bargain',
            'skill_blunt',
            'skill_brawling',
            'skill_command',
            'skill_crossbow',
            'skill_diplomacy',
            'skill_disguise',
            'skill_dodge',
            'skill_endurance',
            'skill_history',
            'skill_incantation',
            'skill_intimidate',
            'skill_language',
         ],

         fields_skill_column_2: [
            'skill_large_blade',
            'skill_lie',
            'skill_medicine',
            'skill_navigation',
            'skill_ostler',
            'skill_persuasion',
            'skill_pole_arm',
            'skill_repair',
            'skill_sleight_of_hand',
            'skill_small_blade',
            'skill_spot',
            'skill_stealth',
            'skill_streetwise',
            'skill_survival',
            'skill_swimming',
            'skill_thrown',
         ],
      };
   },// /data()

   computed:{
      characterx(){
         return {
            background: this.char_background,
            career: this.char_career,
            career_advances_mark_higher: this.char_career_advances_mark_higher,
            career_advances_mark_lower: this.char_career_advances_mark_lower,
            careers_past: this.char_careers_past,
            community: this.char_community,
            luck: this.char_luck,
            name: this.char_name,
            skill_appraise: this.char_skill_appraise,
            skill_athletics: this.char_skill_athletics,
            skill_bargain: this.char_skill_bargain,
            skill_blunt: this.char_skill_blunt,
            skill_brawling: this.char_skill_brawling,
            skill_command: this.char_skill_command,
            skill_crossbow: this.char_skill_crossbow,
            skill_diplomacy: this.char_skill_diplomacy,
            skill_disguise: this.char_skill_disguise,
            skill_dodge: this.char_skill_dodge,
            skill_endurance: this.char_skill_endurance,
            skill_history: this.char_skill_history,
            skill_incantation: this.char_skill_incantation,
            skill_intimidate: this.char_skill_intimidate,
            skill_language: this.char_skill_language,
            skill_large_blade: this.char_skill_large_blade,
            skill_lie: this.char_skill_lie,
            skill_medicine: this.char_skill_medicine,
            skill_navigation: this.char_skill_navigation,
            skill_ostler: this.char_skill_ostler,
            skill_persuasion: this.char_skill_persuasion,
            skill_pole_arm: this.char_skill_pole_arm,
            skill_repair: this.char_skill_repair,
            skill_sleight_of_hand: this.char_skill_sleight_of_hand,
            skill_small_blade: this.char_skill_small_blade,
            skill_spot: this.char_skill_spot,
            skill_stealth: this.char_skill_stealth,
            skill_streetwise: this.char_skill_streetwise,
            skill_survival: this.char_skill_survival,
            skill_swimming: this.char_skill_swimming,
            skill_thrown: this.char_skill_thrown,
            stamina: this.char_stamina,
         };
      },
      ...mapGetters([
      ]),
   }, // /computed{}

   methods: {
      cap_each_word( c_str ){
         return c_str.replaceAll('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
      },// /cap_each_word()

      skill_cap_each_word( c_str ){
         const c_words = c_str.substring(6);
         return this.cap_each_word( c_words );
      },// /skill_cap_each_word()

      ...mapActions([
      ]),
   },// methods{}

   mounted (){
   },// /mounted()
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label
{
   font-size: 0.875rem;
}

.character-sheet
{
   width: 42em;
   margin: 0 auto;
   background-color: #f3f3f3;
   padding: 0.3em;
   overflow: hidden;
}

.form-group
{
   margin-bottom: 0.3em;
}

.form-row,
.form-row-between,
.form-row-start
{
   display: flex;
   gap: 0.3em;
}

.form-row
{
   justify-content: center;
}

.form-row-between
{
   justify-content: space-between;
   align-items: flex-start;
   /* border: 1px dotted #ff0000; */
}

.form-row-start
{
   /* border: 1px dashed #cccccc; */
   justify-content: flex-start;
   align-items: center;
   flex-wrap: nowrap;
}

.form-row-start label
{
   white-space: nowrap;
}

textarea
{
   width: 15em;
   height: 15em;
}

.character-sheet__background textarea
{
   width: 20em;
   height: 8em;
}

/**
 * Hide the number scroll arrows in number input fields.
 */
/*input[type=number]
{
   -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button
{
   -webkit-appearance: none;
   margin: 0;
}*/


/* Small only */
/*@media screen and (max-width: 767px) {}*/

/* Medium and up */
/*@media screen and (min-width: 768px) {}*/

/* Medium only */
/*@media screen and (min-width: 768px) and (max-width: 991px) {}*/

/* Large and up */
/*@media screen and (min-width: 992px) {}*/

/* Large only */
/*@media screen and (min-width: 992px) and (max-width: 1199px) {}*/

/* X-Large and up */
/*@media screen and (min-width: 1200px) {}*/
</style>
