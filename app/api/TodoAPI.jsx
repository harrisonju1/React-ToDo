var $ = require('jQuery');

module.exports={
  setTodos: function(todos){
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos)); //turn array into string
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos); //parse converts string into an array
    }catch(e){

    }

    return $.isArray(todos) ? todos:[];
  }
};
