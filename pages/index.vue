<template>
  <UserProfile />
  <div class="h-full relative w-full p-4 grid gap-8 lg:grid-cols-[350px_1fr]">
    <NotesSidebar />
    <div class="w-full h-full"></div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
