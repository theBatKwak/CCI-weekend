<template>
  <main>
    <h1>Home</h1>
    <InputComponent
      id="prenom"
      @updated="handleInput"
      label="Prénom"
      initial-value=""
      placeholder="Votre prénom"
    />
    <p>Prénom dans le parent :{{ prenom }}</p>
    <EmitComponent @jerome="faireUnTruc" />
  </main>
</template>

<script>
import EmitComponent from '../components/EmitComponent.vue'
import InputComponent from '../components/InputComponent.vue'
export default {
  components: {
    EmitComponent,
    InputComponent
  },
  data() {
    return {
      prenom: ''
    }
  },
  methods: {
    faireUnTruc: function (data) {
      console.log('Formulaire validé : ', data)
    },
    // méthode appelée quand l'enfant emit "updated"
    handleInput: function (valeur) {
      // On assigne la valeur reçue de l'enfant à la data "prenom"
      this.prenom = valeur
    }
  }
}
</script>
