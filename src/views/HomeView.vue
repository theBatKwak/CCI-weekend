<template>
  <main>
    <h1>Home</h1>
    <EmitComponent @jerome="faireUnTruc" />
  </main>
</template>

<script>
import EmitComponent from '../components/EmitComponent.vue'
export default {
  components: {
    EmitComponent
  },
  methods: {
    faireUnTruc: function (data) {
      console.log('Formulaire validé : ', data)
    }
  }
}
</script>
