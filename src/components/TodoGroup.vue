
<template>
    <div className="bg-gray-600 py-4 px-6 cursor-grab w-[300px]">
        <h3 class="text-2xl text-gray-900 font-medium">{{ groupLabel[props.status] }}</h3>
        <draggable :list="todoList" group="todo" itemKey="id" @change="onDraggableChange" class="h-[200px]">
         <template #item="{ element: todo }">
            <ul>
            <li className="bg-white p-2 my-2 text-lg text-gray-400">
                {{ todo.title }}
                {{ todo.status }}
                 <span class="cursor-default float-end" @click="deleteTodo(todo)">&times;</span>
                <div className="text-sm">
                    {{ todo.description }}
                </div>
            </li>
        </ul>
         </template>
        </draggable>
      <div class="cursor-pointer">
        <CreateTodo :status="props.status"/>
      </div>
    </div>
</template>


<script setup lang="ts">
import { TodoStatus } from '../types';
import useTodo from '../store/useTodo'
import draggable from 'vuedraggable'
import  CreateTodo from './CreateTodo.vue';

interface Props {
    status: TodoStatus;
}

const props = defineProps<Props>();

const { getTodoByStatus, deleteTodo, updateTodo } = useTodo();
const todoList = getTodoByStatus(props.status)

const groupLabel = {
    [TodoStatus.Pending]: "Pending",
    [TodoStatus.InProgress]: "In Progress",
    [TodoStatus.Completed]: "Completed",
} 

const onDraggableChange = (payload: any) => {
    if(payload?.added?.element) {
        updateTodo(payload?.added?.element, props.status)
    }
}
</script>
