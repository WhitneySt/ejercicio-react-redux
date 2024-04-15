import React from 'react'
import AddTodo from '../components/AddTodo'
import ListTodo from '../components/ListTodo'

const AppRouter = () => {
  return (
      <div>
          <AddTodo />
          <ListTodo/>
    </div>
  )
}

export default AppRouter