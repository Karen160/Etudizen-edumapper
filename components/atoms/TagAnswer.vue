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

const {isSelected} = toRefs(props)
const _isSelected = ref(isSelected.value)

const onClick = () => {
console.log('click')
}

const classNames = computed(() => {
  return ['tag-answer rounded-full px-4 py-2 border', {'bg-neutral-100 border-black' : isSelected, 'border-transparent bg-neutral-100 hover:border-black': !isSelected}]
})
</script>

<template>
<li :class="classNames">
  <button @click="onClick">
    {{name}}
  </button>
</li>
</template>