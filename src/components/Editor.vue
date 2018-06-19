<template>
  <div id="note-editor" class="file-detail note">
    <div class="title">
      <top-title></top-title>
    </div>
    <div class="content-container" v-bind:style="{height: contentHeight + 'px'}">
      <note-detail></note-detail>
    </div>
  </div>
</template>

<script>
  import TopTitle from './TopTitle'
  import NoteDetail from './NoteDetail'

  export default {
    computed: {
      contentHeight: function(){
        return document.body.clientHeight  - 44
      }
    },
    components:{
      TopTitle,
      NoteDetail
    }
  }
</script>

<style type="text/css">
  #note-editor {
    height: 100%;
    margin-left: 380px;
  }

  #note-editor textarea {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .title {
    margin-right: 90px;
  }
  .file-detail .hd .title {
    flex-grow: 1;
  }
  .file-detail .content-container {
    position: relative;
    flex-grow: 1;
  }
</style>
