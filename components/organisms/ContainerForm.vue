<script setup lang="ts">
import { highSchools, classes, baccalaureates } from "~/server/api/content";
const { data, refresh } = await useFetch('/api/form')
console.log(data.value)

const contentClasses = [
  {
    question: 'En quelle classe es-tu ?',
    answers : classes,
  },
  {
    question: 'Type de bac',
    answers : baccalaureates,
  }
]

const contentCards = [
  {name : 'Classes', content: contentClasses, value: data.value, isOpen: true},
  {name: 'Spécialités'},
  {name: 'Notes'}
]
</script>

<template>
  <section class="container-form">
    <Wrapper class="gap-[16px] flex flex-col">
      <CardInformative
          v-for="(item, i) in contentCards"
         :key="i"
         :name="item.name"
         :is-open="item?.isOpen"
         :content="item?.content"
          :value="item?.value"
      />
    </Wrapper>
  </section>
</template>

<style scoped>

</style>