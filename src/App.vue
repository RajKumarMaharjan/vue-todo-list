<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="bg-black h-screen flex flex-col justify-center align-middle mx-auto items-center">
    <img alt="Vue logo" class="mb-8" src="./assets/logo.svg" width="125" height="125" />
    <div>
      <TodoList/>
    </div>
  </div>
</template>
