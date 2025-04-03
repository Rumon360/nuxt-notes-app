<template>
  <div class="flex flex-col gap-10 w-full">
    <Logo />
    <div>
      <h1 class="font-medium text-xl">Log in to your account</h1>
      <p class="font-medium text-sm mt-1 text-foreground-light">
        Don't have an account?
        <NuxtLink to="/register">
          <span class="text-primary cursor-pointer font-semibold mr-0.5">
            Register
          </span>
        </NuxtLink>
        now.
      </p>
    </div>
    <form @submit.prevent="handleSubmit" class="space-y-10">
      <div class="flex flex-col gap-4">
        <div class="space-y-1">
          <label class="text-sm block" for="email">Email</label>
          <input
            required
            v-model="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            class="input"
          />
        </div>
        <div class="space-y-1">
          <label class="text-sm block" for="password">Password</label>
          <input
            required
            v-model="password"
            name="password"
            type="password"
            placeholder="*********"
            class="input"
          />
        </div>
        <div
          v-if="error"
          class="bg-error/10 p-4 text-error rounded-md text-sm font-medium"
        >
          {{ error }}
        </div>
      </div>

      <div>
        <button
          class="cursor-pointer bg-primary text-zinc-900 font-semibold px-4 py-2 text-sm rounded-full w-full"
        >
          Login <span class="ml-1">→</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";

const email = ref("");
const password = ref("");
const error = ref(null);
const isLoading = ref(false);

const handleSubmit = async () => {
  error.value = null;
  isLoading.value = true;

  try {
    const response = await $fetch("/api/login", {
      method: "post",
      body: { email: email.value, password: password.value },
    });

    if (response.success === false) {
      error.value = response.message || "Something went wrong";
    } else {
      toast.success(response.message);
      navigateTo("/");
    }
  } catch (err) {
    error.value = err.response._data.message || "Something went wrong";
  } finally {
    isLoading.value = false;
  }
};
</script>
