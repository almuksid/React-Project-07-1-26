import { useState } from 'react'
import Form from './Form'
import ListDisplay from './ListDisplay'
import ResetList from './ResetList'
// const todoKey = "todoListDisplay"

const Todo = () => {

    const [todoTitle, setTodoTitle] = useState("")


    const [todoList, setTodoList] = useState([
        { id: 1, title: "todo1", isCompleted: true },
        { id: 2, title: "todo2", isCompleted: false },
        { id: 3, title: "todo3", isCompleted: true },
    ])

    // Add data to localStorage inside Todo App



    // const handleInputChange = (value) => {
    //     setTodoTitle(value)
    // }

    return (
        <div className="max-w-md mx-auto mt-10">

            <Form todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} />

            <ListDisplay todoList={todoList} setTodoList={setTodoList} />

            <ResetList setTodoList={setTodoList} />

        </div>
    )
}

export default Todo
