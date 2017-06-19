import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    deleteToDo(id){
      this.store.findRecord('to-do', id).then(function(todo){
        todo.destroyRecord();
      });
    }

  }

    //La función deleteToDo es llamada cuando se aprieta la X. Esta tiene un parámetro
    //desde el helper todo.id así que se le pasa el parámetro de id a la función.
    //Para borrar un record, primero se encuentra el record, con el type y el id,
    //y luego se destruye. Se puede llamar deleteRecord y save o destroyRecord
    //que hace ambas.
});
