<template>
    <img :src="posterLien(film.poster_path)" :alt="film.original_title" style="width: 50px;">
    <button @click="ajouterAuxFavoris">Ajouter aux favoris</button>
    <p>{{ film.title }}</p>
    <p>{{ film.vote_average }}/10 calculé sur {{ film.vote_count }} vote(s)</p>
</template>

<script>
import { useCinemaStore } from '../stores/cinema';

export default {
  props: {
    film: Object
  },
  methods: {
    posterLien: function (chemin) {
        return "https://image.tmdb.org/t/p/w500" + chemin;
    },
    ajouterAuxFavoris: function () {
      // On initialise notre store
      const cinemaStore = useCinemaStore();
      // On utilise l'acion du store pour le mettre à jour avec notre film
      cinemaStore.ajouterAuxFavoris(this.film);
    }
  }
}
</script>

<style scoped>

</style>