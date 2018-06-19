/**
 * Created by HELP on 2018/6/15.
 */
/*
 根级别的 action
 是我们有动作触发之后，dispatch提交的地方
 */

//一般来说将一个文件全部导出，这个文件被看作是一个模块/大对象


export default{

  /*
   actions处理函数接受一个 context 对象
   {
   state,     // 等同于 store.state, 若在模块中则为局部状态
   rootState, // 等同于 store.state, 只存在于模块中
   commit,    // 等同于 store.commit
   dispatch,  // 等同于 store.dispatch
   getters    // 等同于 store.getters
   }
   */
  addNote({commit}){

    commit('ADD_NOTE')
  },
  editNote({commit},text){

    commit('EDIT_NOTE', text)
  },
  editTitle({commit},text){

    commit('EDIT_TITLE', text)
  },
  updateActiveNote({commit,state},note){

    commit('SET_ACTIVE_NOTE',note)
  },
  toggleFavorite({commit,state}){

    commit('TOGGLE_FAVORITE')
  },
  deleteNote({commit,state}){

    commit('DELETE_NOTE')
  }

}
