<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()
    const routeName = ref(route.name)

    const routerLinkClass="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    const routerLinkClassActive="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-100 items-center justify-center hover:bg-gray-900 hover:text-white"
</script>

<template>
    <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
      <a href="#" class="p-2 mr-4 inline-flex items-center">        
        <span class="text-xl text-white font-bold tracking-wide"
          >Project Management App</span
        >
      </a>
      <button
        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i class="material-icons">menu</i>
      </button>
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
            <router-link
                to="/"
                :class="routeName === 'home' ? routerLinkClassActive : routerLinkClass">
                Home
            </router-link>
            <router-link
                to="/clients"
                :class="routeName === 'clients.index' ? routerLinkClassActive : routerLinkClass">
                Clients
            </router-link>
            <router-link
                to="/login"
                :class="routeName === 'login' ? routerLinkClassActive : routerLinkClass">
                Login
            </router-link>       
        </div>
      </div>
    </nav>

    <main class="p-5">
        <slot />
    </main>
</template>