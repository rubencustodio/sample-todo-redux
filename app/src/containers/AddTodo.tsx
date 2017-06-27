import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo : any = ({dispatch}) => {
  let input

  return (
    <div>
      <h1> Todo App</h1>
      <form
        onSubmit={e => {
          e.preventDefault()

          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input type="text"
          ref={node => {
            input = node
          }}
        />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo