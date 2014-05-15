window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
/*
Ember.onerror = function(error) {
  caught = error; 
  Em.$.ajax('/report-error', 'POST', {
     stack: error.stack,
     otherInformation: 'whatever app state you want to provide'
  });
};
*/