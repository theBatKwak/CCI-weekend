import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  // Là où on stocke les données
  // Equivalent de "data" dans un composant
  state: () => {
    return {
      panier: JSON.parse(localStorage.getItem('panier')) || []
    }
  },

  // Là où on modifie le state
  // Equivalent de "methods" dans un composant
  actions: {
    ajouterAuPanier: function (article) {
      this.panier.push(article)

      // Transforme le tableau "panier" en chaine de caractères
      const panierString = JSON.stringify(this.panier)

      // Stocke la chaine de caractères dans le local storage, à l'entrée "panier"
      localStorage.setItem('panier', panierString)
    }
  },

  // Là où on récupères des données calculées
  // Equivalent de "computed" dans un composant
  getters: {
    total: function () {
      // Si pas d'article, panier à 0€
      if (this.panier.length === 0) {
        return 0
      }
      let somme = 0
      this.panier.forEach((article) => {
        // On ajoute à la somme la quantité d'articles * le prix unitaire
        somme += article.quantity * article.prix
      })
      return somme
    }
  }
})
