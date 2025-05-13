<template>
  <form
    @submit.prevent="handleSubmit"
    class="card card-body shadow-sm p-4 mb-4"
  >
    <div class="row g-3">
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.rut"
          placeholder="RUT"
          required
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.nombre"
          placeholder="Nombre"
          required
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.apellido"
          placeholder="Apellido"
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.direccion"
          placeholder="Dirección"
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.fono"
          placeholder="Teléfono"
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.fecha_nacimiemto"
          type="date"
          required
        />
      </div>
      <div class="col-md-6 d-flex align-items-end">
        <button class="btn btn-primary w-100" type="submit">
          {{ user.id ? "Actualizar Usuario" : "Crear Usuario" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { ref, watch } from "vue";
  const props = defineProps(["modelValue"]);
  const emit = defineEmits(["submit"]);

  const user = ref({
    rut: "",
    nombre: "",
    apellido: "",
    direccion: "",
    fono: "",
    fecha_nacimiemto: "",
  });

  watch(
    () => props.modelValue,
    (newVal) => {
      if (newVal) {
        user.value = { ...newVal };
        if (user.value.fecha_nacimiemto) {
          user.value.fecha_nacimiemto =
            user.value.fecha_nacimiemto.split("T")[0];
        }
      }
    },
    { immediate: true }
  );

  function handleSubmit() {
    emit("submit", { ...user.value });
    user.value = {
      rut: "",
      nombre: "",
      apellido: "",
      direccion: "",
      fono: "",
      fecha_nacimiemto: "",
    };
  }
</script>
