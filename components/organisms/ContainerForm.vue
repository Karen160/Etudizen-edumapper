<script setup lang="ts">
import { classes, baccalaureates } from "~/utils/content";
const { data } = await useFetch('/api/form')

const contentClasses = [
  {
    question: 'En quelle classe es-tu ?',
    answers : classes,
    key: 'classes'
  },
  {
    question: 'Type de bac',
    answers : baccalaureates,
    key: 'baccalaureates'
  }
]

const contentCards = [
  {name : 'Classes', content: contentClasses, values: data.value, isOpen: true},
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
          :values="item?.values"
      />
    </Wrapper>
  </section>
</template>

<style scoped>

</style>