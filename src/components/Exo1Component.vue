<template>
  <section>
    <div>
      <label for="checkbox">Afficher le texte</label>
      <input v-model="showText" type="checkbox" name="checkbox" id="checkbox" />
    </div>
    <p v-if="showText">Le texte est affiché</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      // Cette valeur décide si le texte est affiché
      showText: false
    }
  }
}
</script>
<style></style>
