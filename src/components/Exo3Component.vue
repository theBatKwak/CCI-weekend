<template>
  <section>
    <p>Notes par ordre décroissant :</p>
    <p v-for="personne in sortedByNotesDesc" :key="personne.nom">
      {{ personne.nom }} : {{ personne.note }} / 20
    </p>
    <p>Moyenne : {{ moyenne }}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      notes: [
        { nom: 'Hildebert', note: 12 },
        { nom: 'Foulques', note: 8 },
        { nom: 'Bérenger', note: 14 },
        { nom: 'Eudes', note: 9 }
      ]
    }
  },
  computed: {
    sortedByNotesDesc: function () {
      const notesCopy = [...this.notes]
      return notesCopy.sort((a, b) => {
        return b.note - a.note
      })
    },
    moyenne: function () {
      const notesList = []
      let somme = 0
      this.notes.forEach((note) => {
        // On ajoute chaque note au tableau 'notes'
        notesList.push(note.note)
        // On ajoute chaque note au total des notes
        somme = somme + note.note
      })
      return somme / notesList.length
    }
  }
}
</script>
