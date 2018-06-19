/**
 * Created by HELP on 2018/6/15.
 */
/*
 mapGetters获取数据状态state之后，将数据提交到getters,
 获取数据新状态之后，返回更新视图
 */

export default{
  notes: state => state.notes,
  activeNote: state => state.activeNote
}
