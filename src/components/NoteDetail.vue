<template>
  <div id="wrapper" style="height:100%; width: 100%; overflow: hidden">
    <div class="note-view-wrapper">
      <div class="note-view-frame" style="height: auto;">
        <myeditor :content="activeNoteText" :height="contentHeight" :show-module-name="showModuleName"
                          @change="editNote" ref="editor"></myeditor>
      </div>
    </div>
  </div>
</template>
<script>
  import VueHtml5Editor from 'vue-html5-editor'
  const myeditor = new VueHtml5Editor({
    image: {
      sizeLimit: 512 * 1024,
      compress: true,
    }
  });

  var cpLock = false;

  export default {
    data: function(){
      return {
        showModuleName: false
      }
    },
    mounted: function(){
      window.addEventListener('compositionstart', function(){
        console.log('compositionstart');
        cpLock = true;
      })
      window.addEventListener('compositionend', function(){
        console.log('compositionend');
        cpLock = false;
        if(!cpLock) console.log(this.value);
      })
    },
    computed:{
      contentHeight: function(){
          return document.body.clientHeight  - 44 - 60
      },
      activeNoteText(){
        console.log(this.$store.getters.activeNote)
        return this.$store.getters.activeNote.text
      }
    },
    methods:{
      editNote(data){
          this.$store.dispatch('editNote', data);
      }
    },
    components:{
      myeditor
    }
  }

</script>
<style>
  .note-view-wrapper, .note-view-wrapper *, .note-view-wrapper :after, .note-view-wrapper :before {
    box-sizing: content-box;
  }
  .note-view-wrapper {
    height: 100%;
    min-height: 580px;
    border-top: 1px solid #ccc;
    position: relative;
    overflow: auto;
    background-color: #f6f6f6;
  }
  .note-view-frame {
    box-sizing: border-box;
    width: fit-content;
    min-width: 100%;
    padding: 0;
    margin: 0;
    background-color: #fff;
    min-height: 100%;
    overflow: visible;
    position: relative;
  }
  .note-view {
    min-height: 100%;
    height: auto;
    padding: 20px 10px 50px;
    -webkit-box-sizing: border-box;
    min-width: 100%;
    display: inline-block;
  }
  .note-view {
    outline: none;
    word-wrap: break-word;
    -webkit-line-break: after-white-space;
  }
</style>
