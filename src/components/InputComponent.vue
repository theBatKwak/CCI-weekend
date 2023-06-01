<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input v-model="inputValue" @input="changed" type="text" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script>
/**
 * Je veux :
 * // PROPS
 * - donner un id à mon composant
 * - donner un label
 * - donner un placeholder
 * - donner une valeur initiale
 * - définir un texte d'erreur
 *
 * // EMIT
 * - recevoir une valeur saisie
 */

export default {
  props: {
    id: String,
    label: String,
    initialValue: String,
    errorMessage: String,
    placeholder: String
  },
  data() {
    return {
      // à sa création la variable prend
      // la valeur de la props "initialValue"
      inputValue: this.initialValue
    }
  },
  methods: {
    /**
     * Cette méthode est appelée à chaque fois qu'on tape un
     * caractère dans l'input
     */
    changed: function (event) {
      this.$emit('updated', event.target.value)
    }
  }
}
</script>
