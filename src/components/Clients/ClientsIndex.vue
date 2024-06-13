<script setup>
    import { ref, onMounted } from 'vue'
    import api from '@axios'
    const clients = ref([])

    const fetchClients = async() => {
        try {
            const response = await api.get('/api/clients')
            clients.value = response.data.clients
        } catch (error) {
            console.error('Error fetching items', error)
            clients.value = []
        }
    }

    onMounted(fetchClients)
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Observations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients.data" :key="client.id">
                <td>{{ client.id }}</td>
                <td>{{ client.name }}</td>
                <td>{{ client.last_name }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.telephone }}</td>
                <td>{{ client.observations }}</td>
            </tr>
        </tbody>
    </table>
</template>  