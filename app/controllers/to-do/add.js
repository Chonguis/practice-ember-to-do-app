import Ember from 'ember';

export default Ember.Controller.extend({

  // La lógica de este route to-do, será escrita aquí en el controller. Por ejemplo,
  // es en actions donde estarán todas las funciones que son llamadas desde el template.
  // En este caso addToDo y deleteToDo.

  actions: {
    //Al darle click al botón en el template, se llama esta función.
    addToDo(){
      //Primero, atrapo lo que el usuario escribió en el input gracias al value
      //toDoItem que está atado como atributo al input.
      var toDoItem = this.get('toDoItem');
      //Una vez atrapado el valor que estaba en el input, se crea un record. Los records
      //serán guardados en firebase. El record es enviado como un objeto.
      var toDoItemRecord = this.store.createRecord('to-do', {
        name: toDoItem
      });
      //Para salvar oficialmente el record:
      toDoItemRecord.save();
    }
  }

});
