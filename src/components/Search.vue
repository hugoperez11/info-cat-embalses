<script setup>
import { ref, onMounted } from "vue";

// Propiedad reactiva para almacenar los datos de la tabla
const customers = ref([]);

// Función para cargar datos desde el archivo JSON
const loadData = async () => {
  const response = await fetch("/data.json");
  customers.value = await response.json();
};

// Cargar datos cuando el componente es montado
onMounted(loadData);
</script>

<template>
  <div class="table-container">
    <DataTable
      :value="customers"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10]"
      tableStyle="min-width: 50rem"
      class="custom-datatable"
    >
      <Column field="dia" header="Día" style="width: 20%"></Column>
      <Column field="estaci" header="Estación" style="width: 20%"></Column>
      <Column
        field="nivell_absolut"
        header="Nivel absoluto"
        style="width: 20%"
      ></Column>
      <Column
        field="percentatge_volum_embassat"
        header="Porcentaje de volumen"
        style="width: 20%"
      ></Column>
      <Column
        field="volum_embassat"
        header="Volumen total"
        style="width: 20%"
      ></Column>
    </DataTable>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(122vh - 150px); /* Ajusta según el tamaño del header y footer */
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #bde3ff;
  overflow: auto; /* Permitir desplazamiento si el contenido excede la altura */
}

.custom-datatable .p-datatable {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-datatable .p-datatable-header,
.custom-datatable .p-datatable-footer {
  background-color: #007ad9;
  color: white;
  border-radius: 10px 10px 0 0;
}

.custom-datatable .p-datatable-thead > tr > th {
  background-color: #007ad9;
  color: white;
  text-align: left;
  padding: 10px;
}

.custom-datatable .p-datatable-tbody > tr > td {
  text-align: left;
  padding: 12px 8px;
  border-bottom: 1px solid #e0e0e0;
}

.custom-datatable .p-datatable-tbody > tr:nth-child(even) > td {
  background-color: #f9f9f9;
}

.custom-datatable .p-datatable-tbody > tr:hover > td {
  background-color: #f1f1f1;
}

.custom-datatable .p-paginator {
  background-color: #007ad9;
  color: white;
  border-top: none;
  border-radius: 0 0 10px 10px;
}

.custom-datatable .p-paginator .p-paginator-current,
.custom-datatable .p-paginator .p-paginator-icon,
.custom-datatable .p-paginator .p-paginator-page,
.custom-datatable .p-paginator .p-paginator-first,
.custom-datatable .p-paginator .p-paginator-last,
.custom-datatable .p-paginator .p-paginator-next,
.custom-datatable .p-paginator .p-paginator-prev {
  color: white;
}
</style>
