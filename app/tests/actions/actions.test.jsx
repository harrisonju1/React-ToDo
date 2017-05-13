import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text actions', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText:'some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should toggle show completed action', () => {
    var action ={
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action ={
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => { // done lets mocha know it's an asynchronous test
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type:'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text:todoText
      });
      done();
    }).catch(done);
  })

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'antyhing',
      completed: false,
      completedAt: undefined,
      createdAt: '33000'
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type:'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'Anything wel ike',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });
});
