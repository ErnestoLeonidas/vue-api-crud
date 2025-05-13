<template>
  <div class="card card-body shadow p-4">
    <h2 class="mb-4">Simulación de pago con Webpay</h2>
    <form @submit.prevent="redirigirWebpay">
      <div class="mb-3">
        <label class="form-label">Monto</label>
        <input v-model="amount" type="number" class="form-control" required />
      </div>
      <button class="btn btn-success">Pagar ahora</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  // Variables de entorno
  const token = "SIMULATED_TOKEN_WS"; // token fijo o simulado por backend
  const webpayFormUrl = import.meta.env.VITE_TBK_FORM_URL;

  const amount = ref(10000);

  function redirigirWebpay() {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = webpayFormUrl;

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token_ws";
    input.value = token;
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();
  }
</script>
