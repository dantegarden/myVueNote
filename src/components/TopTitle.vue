<template>
  <input v-bind:value="activeNoteTitle" v-on:input="editTitle" class="top-title ng-pristine ng-valid ng-touched" maxlength="250" tabindex="-1" type="text">
</template>
<script>
  export default {
    computed:{
      activeNoteTitle(){
        return this.$store.getters.activeNote.title
      }
    },
    methods: {
      editTitle(e){
        this.$store.dispatch('editTitle', e.target.value)
      }
    }
  }
</script>
<style>
  input.top-title {
    padding: 19px 0;
    padding-left: 10px;
    height: 22px;
    line-height: 22px;
  }
  .top-title {
    padding-left: 10px;
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: 0 none;
    font-size: 18px;
    color: #393939;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }
</style>
