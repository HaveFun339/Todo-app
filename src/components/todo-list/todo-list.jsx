import React from 'react'
import { TodoItem } from '../todo-item'

export const TodoList = ({currentFilteredTodos}) => {
  return (
    <>
    {currentFilteredTodos.map((todo, index) => (
      <TodoItem key={index} index={index} todo={todo}/>
    ))}</>
  )
}
