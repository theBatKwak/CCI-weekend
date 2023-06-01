<template>
  <section>
    <h1>Boutique</h1>
    <p>Panier : {{ panier }}</p>
    <p>Total panier : {{ total }}</p>
    <ShopArticle
      v-for="article in articles"
      :key="article.title"
      :title="article.title"
      :prix="article.prix"
      @add-to-cart="ajouterAuPanier"
    />
  </section>
</template>

<script>
import ShopArticle from '../components/ShopArticle.vue'
import { mapState } from 'pinia'
import { useShopStore } from '../stores/shop'

export default {
  data() {
    return {
      articles: [
        {
          title: 'Stylo rouge',
          prix: 5
        },
        {
          title: 'Stylo bleu',
          prix: 3
        },
        {
          title: 'Stylo vert',
          prix: 6
        }
      ]
    }
  },
  components: { ShopArticle },
  methods: {
    ajouterAuPanier(article) {
      // on crée une instance du store pour l'utiliser
      const shopStore = useShopStore()
      // on utilise l'action du store pour ajouter un
      // article au panier
      shopStore.ajouterAuPanier(article)
    }
  },
  computed: {
    // va créer des computed pour les valeurs du state
    ...mapState(useShopStore, ['panier', 'total'])
  }
}
</script>
