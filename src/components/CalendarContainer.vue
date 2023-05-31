<template>
  <section>
    <p>Sélectionnez vos dates d'arrivée et de départ</p>
    <VDatePicker v-model.range="dateRange" mode="dateTime" color="teal" />
    <p>Date d'arrivée: {{ dateRange.start }}</p>
    <p>Date de départ : {{ dateRange.end }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dateRange: {
        start: new Date(),
        end: new Date()
      }
    }
  }
}
/**
 * Créer un formulaire de réservation de chambre
 * d'hôtel.
 *
 * Avec v-calendar : sélectionner une date d'arrivée
 * et de départ
 *
 * Afficher dynamiquement dans des paragraphes à part
 * les dates d'arrivées et de départ
 */
</script>
