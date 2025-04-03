<template>
  <Toaster
    theme="dark"
    richColors
    position="top-right"
    :toastOptions="{
      style: { background: '#18181b' },
    }"
  />
  <NuxtPage />
</template>

<script lang="ts" setup>
import { Toaster } from "vue-sonner";
</script>
