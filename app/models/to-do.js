import DS from 'ember-data';

//Aquí se hace el schema de los records. La propiedad name va a coger
//un string como valor. El string será lo que el usuario escribe en el input.

export default DS.Model.extend({
  name: DS.attr('string')
});
