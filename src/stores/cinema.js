import { defineStore } from 'pinia'

export const useCinemaStore = defineStore('cinema', {
  // Là où on stocke les données
  // Equivalent de "data" dans un composant
  state: () => {
    return {
      favoris: [],
      films: []
    }
  },
  // Là où on modifie le state
  // Equivalent de "methods" dans un composant
  actions: {
    ajouterAuxFavoris: function (film) {
        let index = this.favoris.findIndex(function (element) {
            return element === film;
        });
        // Si notre index est plus grand que -1, on l'enlève
        if (index > -1) {
            this.favoris.splice(index, 1);
        } else {
            // Sinon, on le rajoute
            this.favoris.push(film);
        }
        
    },
    ajouterfilms: function (films) {
        this.films = films
    }
  },

  // Là où on récupères des données calculées
  // Equivalent de "computed" dans un composant
  getters: {
  }
})
