<template>
  <section>
    <a :href="urlPerso">Lien</a>
    <input v-model="checkboxValue" type="checkbox" name="checkbox" id="" />
    <p :style="{ color: checkboxValue ? 'red' : 'black' }">Un paragraphe</p>
    <p :class="{ changed: checkboxValue }">Un autre paragraphe</p>

    <input :type="passwordInputType" />
    <label for="show-password">Afficher / masquer le mot de passe</label>
    <input v-model="showPassword" type="checkbox" name="show-password" id="show-password" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      urlPerso: 'https://truc.com',
      checkboxValue: false,
      showPassword: false
    }
  },
  computed: {
    // Cette computed retourne "text" ou "password" en fonction de
    // la valeur de "showPassword"
    passwordInputType: function () {
      // méthode longue
      if (this.showPassword) {
        return 'text'
      } else {
        return 'password'
      }
      // méthode courte (ternaire)
      // return this.showPassword ? 'text' : 'password'
    }
  }
}
</script>
<style scoped>
.changed {
  color: red;
  text-transform: uppercase;
  background: black;
}
</style>
