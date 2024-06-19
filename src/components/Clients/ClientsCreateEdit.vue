<script setup>
    import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout.vue';
    import api from '@axios'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();

    const client = ref([])
    const errors = ref([])

    const storeOrUpdateClient = async () => {
        try {
            const token = localStorage.getItem('userToken')
            const dataClient = {
                email: client.value.email,
                name: client.value.name,
                last_name: client.value.last_name,
                telephone: client.value.telephone,
                observations: client.value.observations
            }

            await api.post('/api/clients', dataClient, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            router.push({name: 'clients.index'})
            
        } catch (error) {
            errors.value = error.response.data.errors
            console.error('Error storing client:', error)
        }
    }
</script>

<template>
    <AuthenticatedLayout>
        <h1 class="text-2xl font-bold text-gray-900 my-3">Create a client</h1>
        <div class="mb-6">
            <input
                v-model="client.name"
                class="border p-2 rounded w-full"
                name="name"
                id="name"
                placeholder="John"
                type="text">
            <div v-if="errors.name"
                v-text="errors.name"
                class="text-red-500 text-xm">
            </div>
        </div>
        <div class="mb-6">
            <input
                v-model="client.last_name"
                class="border p-2 rounded w-full"
                name="last_namename"
                id="last_namename"
                placeholder="Doe"
                type="text">
            <div v-if="errors.last_name"
                v-text="errors.last_name"
                class="text-red-500 text-xm">
            </div>
        </div>
        <div class="mb-6">
            <input
                v-model="client.email"
                class="border p-2 rounded w-full"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                type="email">
            <div v-if="errors.email"
                v-text="errors.email"
                class="text-red-500 text-xm">
            </div>
        </div>
        <div class="mb-6">
            <input
                v-model="client.telephone"
                class="border p-2 rounded w-full"
                name="telephone"
                id="telephone"
                placeholder="1-345-675-434"
                type="text">
            <div v-if="errors.telephone"
                v-text="errors.telephone"
                class="text-red-500 text-xm">
            </div>
        </div>
        <div class="mb-6">
            <textarea
                v-model="client.observations"
                class="border p-2 rounded h-32 w-full"
                name="observations"
                id="observations"
                placeholder="My observations are..."
                cols="30"
                rows="10">
            </textarea>
            <div v-if="errors.observations"
                v-text="errors.observations"
                class="text-red-500 text-xm">
            </div>
        </div>
        <div class="mb-6">
            <button
                @click="storeOrUpdateClient"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">
                Create
            </button>
        </div>
    </AuthenticatedLayout>

</template>