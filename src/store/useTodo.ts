import  { TodoStatus, type Todo } from "@/types";
import { computed, reactive } from "vue";

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.InProgress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}

const MaxTodo = 1

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
       const todos = todoStore[todo.status];
       if(todos.length <= MaxTodo ){
        todos.push(todo);
       }else {
        alert("Maximum number of todo-list reached")
       }
    }

    const deleteTodo = (todoDelete: Todo) => {
        todoStore[todoDelete.status] = todoStore[todoDelete.status].filter((todo) => todo.id !== todoDelete.id)
    }

   return { getTodoByStatus, addNewTodo, deleteTodo, updateTodo }
}