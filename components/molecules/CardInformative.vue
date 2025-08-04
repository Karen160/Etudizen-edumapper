<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: false,
    default: () => []
  },
  status: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<template>
<div class="card-informative">
  <p>{{name}}</p>
</div>
</template>