Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function(){
      this.set('isEditing', 'true')
    },
    removeTodo: function(){
      this.get('model').destroyRecord();
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    heyho: function() {
      alert("Accept changes 1!");
    }
  },

  isEditing: false,

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});