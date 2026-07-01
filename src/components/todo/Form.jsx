

const Form = ({todoTitle, setTodoTitle, todoList, setTodoList}) => {
    const submitFormHandler = (e) => {
        e.preventDefault()
        if (!todoTitle.trim()) return alert("Enter currect value")

        const newTodo = {
            id: Date.now() + "",
            title: todoTitle,
            isCompleted: false
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle("")

    }
    return (
        <div>
            <form onSubmit={submitFormHandler} className="flex gap-3">
                <input
                    value={todoTitle}
                    // onChange={(e) => handleInputChange(e.target.value)}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    autoComplete='off'
                    type="text"
                    placeholder="Enter a new todo..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <button
                    type="submit"
                    className="px-5 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form
