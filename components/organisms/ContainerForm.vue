<script setup lang="ts">
const { data, refresh } = await useFetch('/api/form')
console.log(data.value)
</script>

<template>
  <section class="container-form">
    <Wrapper>
      <CardInformative name="CardInformative" />
    </Wrapper>
  </section>
</template>

<style scoped>

</style>