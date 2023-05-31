<template>
  <div>
    <p>{{ title }}</p>
    <p>Note presse : {{ note }} / 10</p>
    <p>Moyenne des spectateurs: {{ moyenne }} / 10</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    note: Number,
    viewerNotes: [Number]
  },
  computed: {
    moyenne: function () {
      if (!this.viewerNotes) {
        return 0
      }
      let somme = 0
      this.viewerNotes.forEach((note) => {
        somme += note
      })
      return somme / this.viewerNotes.length
    }
  }
}
</script>
