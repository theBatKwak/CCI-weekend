<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ prix }} €</p>
    <input v-model="quantity" type="number" />
    <button @click="addToCart">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    prix: Number
  },
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('addToCart', { title: this.title, prix: this.prix, quantity: this.quantity })
    }
  }
}
</script>

<style></style>
