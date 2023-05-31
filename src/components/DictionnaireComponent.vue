<template>
  <section>
    <div>
      <label for="recherche">Rechercher</label>
      <input v-model="search" type="text" id="recherche" />
      <p>Il y a {{ wordsLength }} mots de plus de 4 lettres et de moins de 9 lettres</p>
      <p>Résultats de recherche pour : {{ search }}</p>
      <p v-for="result in searchResults" :key="result">{{ result }}</p>
    </div>
    <div>
      <button @click="generatePhrase">Générer une phrase</button>
      <p>{{ generatedPhrase }}</p>
    </div>
  </section>
</template>

<script>
import mots from '../assets/mots.json'
export default {
  data() {
    return {
      search: '',
      mots: mots,
      generatedPhrase: ''
    }
  },
  computed: {
    // Tableau de tous les mots du dictionnaire
    wordsArray: function () {
      return Object.values(this.mots)
    },
    // Retourne les mots qui contiennent le texte
    // saisi dans la data 'search'
    searchResults: function () {
      // Si on a tapé moins de 3 caractères on ne renvoie pas de résultats
      if (this.search.length < 3) {
        return []
      }
      // filtrer les éléments d'un tableau
      return this.wordsArray.filter((word) => {
        // pour chaque 'word' de 'wordsArray'
        // si cette fonction retourne vrai, l'élément reste dans le tableau
        // si cette fonction retourne faux, l'élément n'est pas dans le tableau
        return word.startsWith(this.search)
      })
    },
    // 1 - une computed qui liste les mots de plus de 4 lettres
    // et moins de 9 lettres
    wordByLength: function () {
      return this.wordsArray.filter((word) => {
        // Méthode longue
        if (word.length >= 4 && word.length <= 9) {
          return true
        } else {
          return false
        }
        // Méthode courte
        return word.length >= 4 && word.length <= 9
      })
    },
    // 2 - Une computed qui retourne la longueur de la liste de mots de
    // plus de 4 lettres et moins de 9 lettres
    wordsLength: function () {
      return this.wordByLength.length
    }
  },
  methods: {
    /**
     * 1 - Créer un bouton.
     * 2 - Quand on clique dessus une méthode génère une phrase avec 8
     * mots aléatoires du dictionnaire
     * 3 - Afficher la phrase sous le bouton une fois générée
     */
    generatePhrase: function () {
      let phrase = ''
      for (let i = 0; i < 8; i++) {
        // On boucle 8 fois ces instructions
        // On génère un index aléatoire pour savoir quel mot aller chercher
        // Dans le dictionnaire
        const index = Math.floor(Math.random() * this.wordsArray.length)
        // On ajoute le mot à la phrase + un espace
        phrase = phrase + this.wordsArray[index] + ' '
      }
      // On assigne notre phrase générée à une data pour l'afficher
      this.generatedPhrase = phrase
    }
  }
}
</script>

<style></style>
