import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToDo(){
      var toDoItem = this.get('toDoItem');

      var toDoItemRecord = this.store.createRecord('to-do', {
        name: toDoItem
      });

      toDoItemRecord.save();
    },

    deleteToDo(id){
      this.store.findRecord('to-do', id).then(function(todo){
        todo.destroyRecord();
      });
    }
  }
});
