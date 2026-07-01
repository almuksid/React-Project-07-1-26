import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const ListDisplay = ({ todoList, setTodoList }) => {
    const deleteHandler = (todoId) => {
        const newTodo = todoList.filter(todo => todo.id !== todoId)
        setTodoList(newTodo)
    }
    const checkHandler = (todoId) => {
        const newTodo = todoList.map((todo) => {
            if (todo.id === todoId) {
                return ({ ...todo, isCompleted: !todo.isCompleted })
            }
            return ({ ...todo })
        })
        setTodoList(newTodo)
    }



    return (
        <div>
            <div className="mt-6 todoListDisplay">
                {todoList.map((todo) => (
                    <div key={todo.id} className="flex items-center justify-between bg-white shadow-md rounded-lg px-4 py-3 mb-3">
                        <div className="flex items-center gap-3">
                            <input onClick={() => checkHandler(todo.id)} type="checkbox" checked={todo.isCompleted} readOnly className="w-5 h-5" />

                            <span
                                className={`text-lg ${todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
                                {todo.title}
                            </span>
                        </div>
                        <button onClick={() => editHandler(todo.id)} className="flex text-2xl text-yellow-800 hover:text-yellow-1000 ">
                            <CiEdit />
                        </button>
                        <button onClick={() => deleteHandler(todo.id)} className="flex text-2xl text-red-500 hover:text-red-700 ">
                            <MdDelete />
                        </button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListDisplay
