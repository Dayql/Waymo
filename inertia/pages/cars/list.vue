<script lang="ts" setup>
import { Head, router } from '@inertiajs/vue3'
import { ref } from 'vue'

const { vm, activePage } = defineProps<{
  vm: {
    cars: {
      id: string
      brand: string
      model: string
      year: number
      plate: string
    }[]
  }
  activePage: number
}>()


const isFetching = ref(false)


function onPageChange(page: number) {
  router.visit(`/cars?page=${page}`, { preserveScroll: true })
}


function fetchCars() {
  isFetching.value = true
  router.visit('/cars/fetch', {
    method: 'post',
    preserveScroll: true,
    onFinish: () => {
      isFetching.value = false
    },
  })
}
</script>

<template>
  <Head title="Liste des voitures" />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Liste des voitures</h1>

    <div class="mb-4">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400"
        :disabled="isFetching"
        @click="fetchCars"
      >
        {{ isFetching ? 'Chargement...' : 'Rafraîchir les données' }}
      </button>
    </div>

    <!-- Tableau des voitures -->
    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr class="bg-gray-100 text-left text-gray-800 text-sm uppercase font-medium">
            <th class="px-6 py-3 border-b border-gray-200">ID</th>
            <th class="px-6 py-3 border-b border-gray-200">Marque</th>
            <th class="px-6 py-3 border-b border-gray-200">Modèle</th>
            <th class="px-6 py-3 border-b border-gray-200">Année</th>
            <th class="px-6 py-3 border-b border-gray-200">Plaque</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in vm.cars" :key="car.id" class="hover:bg-gray-100 text-gray-700 text-sm">
            <td class="px-6 py-4 border-b border-gray-200">{{ car.id }}</td>
            <td class="px-6 py-4 border-b border-gray-200">{{ car.brand }}</td>
            <td class="px-6 py-4 border-b border-gray-200">{{ car.model }}</td>
            <td class="px-6 py-4 border-b border-gray-200">{{ car.year }}</td>
            <td class="px-6 py-4 border-b border-gray-200">{{ car.plate }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-6">
      <button
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-300"
        :disabled="activePage <= 1"
        @click="onPageChange(activePage - 1)"
      >
        Précédent
      </button>
      <button
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
        @click="onPageChange(activePage + 1)"
      >
        Suivant
      </button>
    </div>
  </div>
</template>
