
<template>
  <div>
    <h3
      v-if="!shouldDisplayForm"
      @click="shouldDisplayForm = !shouldDisplayForm"
      class="text-lg font-medium text-gray-300 border text-center"
    >
      Add New Ticket
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div>
          <input type="text" placeholder="Title" v-model="newTodo.title" class="px-2 w-full" />
        </div>
        <div class="py-2">
          <textarea
            type="text"
            placeholder="Description"
            v-model="newTodo.description"
            class="p-2 w-full"
          />
        </div>
        <div class="flex justify-between">
          <button type="submit" class="border px-4 text-white">Submit</button>
          <button type="button" @click="resetForm" class="border px-4 text-white">Cancel</button>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useTodo from '../store/useTodo'
import { type Todo, TodoStatus } from '../types'

interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()

const shouldDisplayForm = ref(false)
const showRequiredMessage = ref(false)

const { addNewTodo } = useTodo()

const newTodo = reactive<Omit<Todo, 'id'>>({
  title: '',
  description: '',
  status: props.status
})

const resetForm = () => {
  shouldDisplayForm.value = false
  newTodo.title = ''
  newTodo.description = ''
  showRequiredMessage.value = false
}

const handleOnSubmit = () => {
  if (newTodo.title.trim() === '' || newTodo.description.trim() === '') {
    showRequiredMessage.value = true
    return
  }

  addNewTodo({
    id: Math.random(),
    ...newTodo
  })
  resetForm()
}
</script>