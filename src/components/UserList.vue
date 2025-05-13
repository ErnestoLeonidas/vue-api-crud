<template>
  <table class="table table-striped table-bordered">
    <thead class="table-dark">
      <tr>
        <th>RUT</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Dirección</th>
        <th>Fono</th>
        <th>Fecha Nacimiento</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.rut }}</td>
        <td>{{ user.nombre }}</td>
        <td>{{ user.apellido }}</td>
        <td>{{ user.direccion }}</td>
        <td>{{ user.fono }}</td>
        <td>{{ new Date(user.fecha_nacimiemto).toLocaleDateString() }}</td>
        <td>
          <button
            class="btn btn-sm btn-warning me-2"
            @click="$emit('edit', user)"
          >
            ✏️ Editar
          </button>
          <button
            class="btn btn-sm btn-danger"
            @click="confirmarEliminacion(user.id)"
          >
            🗑️ Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import Swal from "sweetalert2";
  const props = defineProps(["users"]);
  const emit = defineEmits(["edit", "delete"]);

  function confirmarEliminacion(id) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        emit("delete", id);
        Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
      }
    });
  }
</script>
