<template>
  <UserForm :modelValue="selectedUser" @submit="handleSubmit" />
  <UserList :users="users" @edit="editUser" @delete="deleteUser" />
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import userService from "../services/userService";
  import UserForm from "../components/UserForm.vue";
  import UserList from "../components/UserList.vue";

  const users = ref([]);
  const selectedUser = ref(null);

  async function fetchUsers() {
    const res = await userService.getAll();
    users.value = res.data;
  }

  function editUser(user) {
    selectedUser.value = user;
  }

  async function handleSubmit(user) {
    if (user.id) {
      await userService.update(user.id, user);
    } else {
      await userService.create(user);
    }
    selectedUser.value = null;
    fetchUsers();
  }

  async function deleteUser(id) {
    await userService.delete(id);
    fetchUsers();
  }

  onMounted(fetchUsers);
</script>
