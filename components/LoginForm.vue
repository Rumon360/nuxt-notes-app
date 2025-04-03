<template>
  <div class="flex flex-col gap-10 w-full">
    <Logo />
    <div>
      <h1 class="font-medium text-xl">Sign up for a free account</h1>
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
    <form class="space-y-10">
      <div class="flex flex-col gap-4">
        <div class="space-y-1">
          <label class="text-sm block" for="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            class="border border-zinc-600 rounded-md w-full px-2 py-1 text-sm"
          />
        </div>
        <div class="space-y-1">
          <label class="text-sm block" for="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="*********"
            class="border border-zinc-600 rounded-md w-full px-2 py-1 text-sm"
          />
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
