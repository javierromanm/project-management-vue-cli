<script setup>
import {ref} from 'vue'
import api from '@axios'
import { useRouter } from 'vue-router'
import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout.vue'

const router = useRouter()

let email = ref(null)
let password = ref(null)

const login = async () => {
    try {
        const response = await api.post('/api/login', {
            email: email.value,
            password: password.value
        })
        const token = response.data.token
        localStorage.setItem('userToken', token)
        router.push({
            name: 'clients.index'
        })
    } catch (error) {
        console.error('Error login', error)
    }
}
</script>

<template>
    <AuthenticatedLayout>
        <div class="flex flex-col justify-center">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 class="font-bold text-center text-2xl mb-5">Login</h1>  
                <div class="bg-white shadow border border-gray-200 w-full rounded-lg divide-y divide-gray-200">
                    <div class="px-5 py-7">
                        <form @submit.prevent="login">
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input v-model="email" type="email" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input v-model="password" type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span class="inline-block mr-2">Login</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>