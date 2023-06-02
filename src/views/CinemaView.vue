<template>
    <h1>Cinema</h1>

    <p>Nombre de film favoris: {{ favoris.length }}</p>

    <FilmCard v-for="filmData in films" :key="filmData.id" :film="filmData"></FilmCard>
</template>
  
<script>
import FilmCard from '../components/FilmCard.vue';
import { useCinemaStore } from '../stores/cinema.js'
import { mapState } from 'pinia'

  export default {
    data() {
      return {
        blabla: "test"
      }
    },
    components: { 
        FilmCard
     },
    methods: {
        fetchFilms: function () {
          const cinemaStore = useCinemaStore();
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdkODdjZjE5MmVhZjg4ZWY0NWIwMWQzZjVhOWJhZCIsInN1YiI6IjY0Nzk4ZjA2MGUyOWEyMDBkY2JhMTQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._eRV0WALSsmoMvolijRlK20UbkLDilqJF541Mr_OoKg'
                }
                };

        fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
        .then(response => response.json())
        .then(response => cinemaStore.ajouterfilms(response.results))
        .catch(err => console.error(err));
        }
    },
    created() {
        this.fetchFilms()
    },
    computed: {
      // va créer des computed pour les valeurs du state
      ...mapState(useCinemaStore, ['favoris', 'films'])
    }
  }
</script>
  