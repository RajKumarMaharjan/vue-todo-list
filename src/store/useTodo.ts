import  { TodoStatus, type Todo } from "@/types";
import { computed, reactive } from "vue";

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.InProgress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}


const defaultValue = {
    [TodoStatus.Pending]: [
        {
            id: 1,
            title: 'Learn Vue.js',
            description: 'Watch and learn',
            status: TodoStatus.Pending
        },
    ],
    [TodoStatus.InProgress]: [],
    [TodoStatus.Completed]: []
}

const todoStore = reactive<TodoStore>(defaultValue);

export default () => {
    
    const getTodoByStatus = (todoStatus: TodoStatus) => {
        return computed(() => todoStore[todoStatus])
    }

    const updateTodo = (todo:Todo, newStatus:TodoStatus) => {
        todo.status = newStatus
    }

    const addNewTodo = (todo: Todo) => {
        todoStore[todo.status].push(todo)
    }

    const deleteTodo = (todoDelete: Todo) => {
        todoStore[todoDelete.status] = todoStore[todoDelete.status].filter((todo) => todo.id !== todoDelete.id)
    }

   return { getTodoByStatus, addNewTodo, deleteTodo, updateTodo }
}