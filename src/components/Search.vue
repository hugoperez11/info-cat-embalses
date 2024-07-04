<!-- <script setup></script>

<template>
  <div class="container">
    <DataTable
      :value="customers"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column field="name" header="Name" style="width: 25%"></Column>
      <Column field="country.name" header="Country" style="width: 25%"></Column>
      <Column field="company" header="Company" style="width: 25%"></Column>
      <Column
        field="representative.name"
        header="Representative"
        style="width: 25%"
      ></Column>
    </DataTable>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vw;
  width: 100%;
  background-color: #bde3ff;
}
</style> -->

<script setup>
import { ref } from "vue";

const customers = ref([
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },
  {
    dia: { name: "04/07/24" },
    estacion: { name: "Embalse 1" },
    nivelabsoluto: "150200",
    porcentaje: { name: "75%" },
    vol: { name: "75510" },
  },

  // Agrega más datos según sea necesario
]);
</script>

<template>
  <div class="container">
    <DataTable
      :value="customers"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column field="dia.name" header="Día" style="width: 25%"></Column>
      <Column
        field="estacion.name"
        header="Estación"
        style="width: 25%"
      ></Column>
      <Column
        field="nivelabsoluto"
        header="Nivel absoluto"
        style="width: 25%"
      ></Column>
      <Column
        field="porcentaje.name"
        header="Porcentaje de volumen"
        style="width: 25%"
      ></Column>
      <Column
        field="vol.name"
        header="Volumen total"
        style="width: 25%"
      ></Column>
    </DataTable>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Cambiado de vw a vh para una mejor altura relativa */
  width: 100%;
  background-color: #bde3ff;
}
</style>
