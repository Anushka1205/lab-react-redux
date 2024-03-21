import React, { useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count > 0 ? state.count - 1 : 0 }
    default:
      return state
  }
}

function App() {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button className='buttn' onClick={() => dispatch({ type: 'INCREMENT' })}>Like</button>
      <button className='buttn' onClick={() => dispatch({ type: 'DECREMENT' })}>Unlike</button>
    </>
  )
}

export default App
