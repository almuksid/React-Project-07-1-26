

const ResetList = ({ setTodoList }) => {
    // const resetHandler = (todoId) => {
    //     setTodoList([])
    // }
    return (
        <div>
            <div className="resetTodo flex justify-center mt-4">
                {/* <button onClick={resetHandler} className="text-red-500 hover:text-red-700"> Reset Todo </button> */}

                <button onClick={() => setTodoList([])} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    Reset Todo
                </button>
            </div>
        </div>
    )
}

export default ResetList
