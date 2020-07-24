import {createStore} from 'redux';

const contador = document.getElementById('contador');
const decrementar = document.getElementById('decrementar');
const incrementar = document.getElementById('incrementar');

const INITIAL_STATE = {
  counter: 0
};

function counterApp( state = INITIAL_STATE, action) {
  console.log( state, action );

  switch( action.type ){
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }

    default:
      return state;
  }
}

const store = createStore(counterApp);
store.subscribe( () => {
  const state = store.getState();
  console.log( 'state changed', state )

  contador.innerText = state.counter;
});

incrementar.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decrementar.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});