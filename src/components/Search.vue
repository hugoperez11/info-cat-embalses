<script setup></script>

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
</style>
