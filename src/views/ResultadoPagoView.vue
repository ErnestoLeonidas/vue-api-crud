<template>
  <div class="card card-body shadow p-4 text-center">
    <h2 class="mb-4">Resultado del Pago</h2>
    <p v-if="estado === 'exitoso'" class="text-success">
      ✅ Pago exitoso por <strong>${{ monto }}</strong> <br />
      Concepto: {{ descripcion }}
    </p>
    <p v-else class="text-danger">
      ❌ El pago ha fallado.
    </p>
    <router-link to="/" class="btn btn-outline-primary mt-3">Volver al inicio</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const estado = route.query.estado;
const monto = route.query.monto;
const descripcion = route.query.descripcion;
</script>