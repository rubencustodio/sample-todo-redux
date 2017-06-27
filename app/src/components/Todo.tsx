import * as React from 'react'
import PropTypes from 'prop-types';

/*const Todo = ({ onClick, completed, text}) => (

  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>

)*/

class Todo extends React.Component<any, undefined> {


  public render() {
    return (
      <li 
        onClick={this.props.onClick} 
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}
      >
        {this.props.text}
      </li>
    )
  }
}


export default Todo