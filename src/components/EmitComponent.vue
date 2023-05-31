<template>
  <section>
    <form @submit.prevent="envoyer">
      <label for="email">Email</label>
      <input v-model="email" type="text" id="email" />

      <label for="password">Mot de passe</label>
      <input v-model="password" type="password" id="password" />

      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    envoyer: function () {
      this.$emit('jerome', { email: this.email, password: this.password })
    }
  }
}
</script>
