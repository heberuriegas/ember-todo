Todos.Router.map(function(){
  this.resource('todos', { path: '/' }, function(){
    this.route('active');
    this.route('completed');
  })
});

Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  },
  heyho: function() {
    alert("Accept changes 3!");
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('todos');
  }
})

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    var todos = this.modelFor('todos');
    return todos.store.filter('todo', function(todo){
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    return this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    var todos = this.modelFor('todos');
    return todos.store.filter('todo', function(todo){
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    return this.render('todos/index', {controller: controller});
  }
})