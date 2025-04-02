<script setup>
const route = useRoute();
</script>

<template>
  <div
    class="w-full h-full lg:min-h-[calc(100vh-2rem)] bg-zinc-800 flex items-center p-12 rounded-lg"
  >
    <LoginForm v-if="route.path === '/login'" />
    <RegisterForm v-if="route.path === '/register'" />
  </div>
</template>
