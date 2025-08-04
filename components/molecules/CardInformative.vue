<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },
  content: {
    type: Array,
    required: false,
    default: () => []
  },
  status: {
    type: String,
    required: false,
    default: 'À compléter'
  }
})

const {isOpen} = toRefs(props)
const isEditing = ref(isOpen.value)
</script>

<template>
<div class="card-informative bg-white rounded-2xl shadow p-5">
  <div class="flex justify-between items-start">
    <template v-if="!isEditing">
      <div>
        <h2 class="text-lg font-semibold text-black">
          {{ name }}
        </h2>
        <span>{{status}}</span>
      </div>
      <button @click="isEditing = true">
        <img src="~/assets/img/pencil.svg" alt="Modifier" />
      </button>
    </template>
    <template v-else>
      <div>
        <div v-for="(item, i) in content" :key="i">
          <h2 class="text-lg font-semibold text-black">
            {{ item?.question }}
          </h2>
          <ul v-for="(tag, j) in item?.answers" :key="j">
            <TagAnswer :name="tag" />
          </ul>
        </div>
      </div>
      <button
          v-if="isEditing"
          @click="isEditing = false"
          class="text-xl text-black"
      >
        <img src="~/assets/img/cross.svg" alt="Fermer" />
      </button>
    </template>


  </div>

</div>
</template>