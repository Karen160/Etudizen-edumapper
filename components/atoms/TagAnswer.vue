<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: false,
    default: false
  }
})

const {isSelected} = props

const onClick = () => {
console.log('click')
}

const classNames = computed(() => {
  return ['tag-answer', {'is-selected' : isSelected}]
})
</script>

<template>
<li :class="classNames">
  <button @click="onClick">
    {{name}}
  </button>

</li>
</template>

<style scoped>

</style>