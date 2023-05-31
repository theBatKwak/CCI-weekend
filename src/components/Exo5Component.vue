<template>
  <div>
    <!--(todo, index) dans le v-for pour récupérer l'index et l'envoyer en paramètre-->
    <p v-for="(todo, index) in todos" :key="todo" @click="removeTodo(index)">{{ todo }}</p>
  </div>
  <form @submit.prevent="addTodo">
    <div>
      <label for="tache">Ajouter une tâche</label>
      <input v-model="todoText" type="text" id="tache" />
    </div>
    <button type="submit">Envoyer</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
      todoText: ''
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push(this.todoText)
      // On réinitialise le texte pour vider le champ
      this.todoText = ''
    },
    removeTodo: function (index) {
      /**
       * Splice retire 1 ou plusieurs éléments d'un tableau
       * premier paramètre : l'index
       * 2e paramètre : le nombre d'éléments à supprimer
       */
      this.todos.splice(index, 1)
    }
  }
}
</script>
