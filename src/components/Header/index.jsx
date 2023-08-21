import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  // set the default type to the value accepted by props 
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    // if the user pressed 'enter', add the todos
    if (keyCode !== 13) return
    // we cannot add a empty todo, if the user add an empty todo, alert him that and prevent him from adding
    if (target.value.trim() === '') {
      alert('任务名称不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }

    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
