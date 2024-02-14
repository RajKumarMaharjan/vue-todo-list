<template>
  <div className="flex gap-4">
    <TodoGroup :status="TodoStatus.Pending" />
    <TodoGroup :status="TodoStatus.InProgress" />
    <TodoGroup :status="TodoStatus.Completed" />
  </div>
</template>

<script setup lang="ts">
import TodoGroup from './TodoGroup.vue';
import { TodoStatus } from '../types'; 

</script>


