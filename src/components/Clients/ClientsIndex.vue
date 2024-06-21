<script setup>
    import { ref, onMounted } from 'vue'
    import api from '@axios'
    import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout.vue'
    
    const clients = ref([])

    const fetchClients = async () => {
        try {
            const token = localStorage.getItem('userToken')
            const response = await api.get('/api/clients', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            clients.value = response.data.clients
        } catch (error) {
            console.error('Error fetching clients', error)
            clients.value = []
        }
    }

    onMounted(fetchClients)
</script>

<template>
    <AuthenticatedLayout>
        <h1 class="text-2xl font-bold text-gray-900 my-3">List of clients</h1>
        <div class="flex justify-end mb-3">
            <router-link
                :to="{name: 'clients.create'}"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">
            Create client
            </router-link>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Id
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Last name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Telephone
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Observations
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client in clients.data" :key="client.id" class="bg-gray-100 border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <router-link
                                        :to="{ name: 'clients.edit', params:{id: client.id}}"
                                        class="bg-blue-400 text-white rounded py-1 px-2 text-xs hover:bg-blue-500">
                                        Edit
                                    </router-link>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ client.id }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ client.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ client.last_name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ client.email }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ client.telephone }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ client.observations }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>  