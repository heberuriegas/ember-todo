Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  },
  cancel: function(evt){
    alert(1);
    controller = this.get('controller')
    controller.send('heyho');
    alert(2);
  }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);