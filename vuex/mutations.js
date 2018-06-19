/**
 * Created by HELP on 2018/6/15.
 */
/*
 mutations
 是actions里的commit对象(参数)提交的地方,对数据进行处理
 */

/* getters.js最后是给mutations使用的 */
import getters from './getters'

//需要维护的状态
const state={
  /*
   notes:存储note项
   activeNote:当前正在编辑的note项
   */
  notes:[],
  activeNote:{}
};

const mutations={
  //ADD_NOTE添加一个note项
  ADD_NOTE(state){
    const newNote = {
      /*
       title: 标题
       text:默认文字内容
       favorite:收藏
       */
      title: "无标题笔记",  //标题
      text:"", //内容
      favorite:false //收藏
    }

    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_TITLE(state,text){

    state.activeNote.title = text
  },
  EDIT_NOTE(state,text){

    state.activeNote.text = text
  },
  SET_ACTIVE_NOTE(state,note){

    state.activeNote = note
  },
  TOGGLE_FAVORITE(state){

    state.activeNote.favorite = !state.activeNote.favorite
  },
  DELETE_NOTE(state){

    for (var i=0; i<state.notes.length; i++){
      if (state.notes[i] == state.activeNote){
        state.notes.splice(i, 1)
      }
    }
    state.activeNote = state.notes[0]
  }
}

export default{ //这时mutations导出的是一个模块
  state,
  mutations,
  getters
}
