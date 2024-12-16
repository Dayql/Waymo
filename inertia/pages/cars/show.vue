<script lang="ts" setup>
import { Head } from '@inertiajs/vue3'

const { vm } = defineProps<{
  vm: {
    id: string
    brand: string
    model: string
    year: number
    plate: string
    location: { lat: number; lon: number }
    speed: string
    createdAt: string | null
  }
}>()
</script>

<template>
  <Head :title="`${vm.brand} ${vm.model}`" />

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Détails de la voiture</h1>

    <!-- Carte des détails -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-4">
        <h2 class="text-xl font-semibold mb-4 text-gray-700">
          {{ vm.brand }} {{ vm.model }} ({{ vm.year }})
        </h2>
        <div class="text-gray-600">
          <p><strong>ID :</strong> {{ vm.id }}</p>
          <p><strong>Plaque :</strong> {{ vm.plate }}</p>
          <p><strong>Latitude :</strong> {{ vm.location.lat }}</p>
          <p><strong>Longitude :</strong> {{ vm.location.lon }}</p>
          <p><strong>Vitesse :</strong> {{ vm.speed }}</p>
          <p v-if="vm.createdAt"><strong>Date de création :</strong> {{ vm.createdAt }}</p>
        </div>
      </div>
    </div>

    <!-- Bouton retour -->
    <div class="mt-6">
      <button
        @click="$router.back()"
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
      >
        Retour
      </button>
    </div>
  </div>
</template>
