var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
var moment = require('moment');

var TodoApp = require('TodoApp')

describe('TodoApp', () =>{
  it ('should exist',() => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    var timestamp = moment().unix();

    expect(todoApp.state.todos[0].text).toBe(todoText);

    //expectt createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });


  it('should toggle completed value when handleToggle called', () =>{
    var todoData ={
      id: 11,
      text: 'test features',
      completed:false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp=TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});
    //check that todos first item has completed value of false
    //call handletoggle with 11
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    var completedTime = moment().unix();
    expect(todoApp.state.todos[0].completed).toBe(true);

    //expect completedat to be a number
    expect(todoApp.state.todos[0].completedAt).toBe(completedTime);

  });
  it('should remove completedAt when toggled true to false', ()=>{
    var todoData ={
      id: 11,
      text: 'test features',
      completed:true,
      createdAt: 0,
      completedAt: 5555
    };
    var todoApp=TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
  //test that when toggle from true to false completedAt gets removed
});
