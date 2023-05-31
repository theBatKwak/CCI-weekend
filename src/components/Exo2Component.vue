<template>
  <section>
    <div>
      <label for="nombre1">Nombre 1</label>
      <input v-model="nombre1" type="number" name="nombre1" id="nombre1" />
    </div>
    <div>
      <label for="nombre2">Nombre 2</label>
      <input v-model="nombre2" type="number" name="nombre2" id="nombre2" />
    </div>
    <p>Addition : {{ add }}</p>
    <p>Multiplication : {{ multiply }}</p>
    <p>Exposant : {{ exposant }}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nombre1: 0,
      nombre2: 0
    }
  },
  computed: {
    add: function () {
      return this.nombre1 + this.nombre2
    },
    multiply: function () {
      return this.nombre1 * this.nombre2
    },
    exposant: function () {
      return Math.pow(this.nombre1, this.nombre2)
    }
  }
}
</script>

<style></style>
