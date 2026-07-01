# 1. Adding Local Storage in React
```jsx
    const [todoList, setTodoList] = useState(() => {
        const data = localStorage.getItem("todos");

        if (!data) {
            return [];
        }

        return JSON.parse(data);
    });

    localStorage.setItem("todos", JSON.stringify(todoList))
```