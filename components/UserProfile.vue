<template>
  <div class="fixed top-4 right-4 z-50">
    <div class="relative" ref="menuContainer">
      <!-- Avatar Button -->
      <button
        @click="toggleMenu"
        class="flex items-center space-x-2 p-2 bg-zinc-800 text-white rounded-full shadow-md hover:bg-zinc-700 cursor-pointer"
      >
        <img
          src="https://nuxt.com/assets/design-kit/icon-green.svg"
          alt="User Avatar"
          class="w-8 h-8 rounded-full"
        />
      </button>

      <!-- Dropdown Menu with Animation -->
      <transition name="fade-slide">
        <div
          v-if="menuOpen"
          @click.stop
          class="absolute right-0 mt-2 w-48 bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
        >
          <div class="p-3 text-foreground-light text-sm">
            {{ user.email }}
          </div>
          <button
            @click="logout"
            class="w-full cursor-pointer text-left p-3 text-error bg-error/10 hover:bg-error/30 transition-colors ease-in-out font-semibold text-sm"
          >
            Logout
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const user = ref({ email: "user@example.com" });
const menuContainer = ref(null);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const logout = () => {
  console.log("Logging out...");
};

const handleClickOutside = (event) => {
  if (menuContainer.value && !menuContainer.value.contains(event.target)) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
