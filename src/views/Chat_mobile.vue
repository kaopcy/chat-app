<template>
  <Chat/>
</template>

<script>
import Chat from '../components/Chat_module.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
export default {
    name: 'Chat_mobile',
    components:{ Chat, },
    setup() {
        const route = useRoute()
        onMounted(() => {
            console.log(route.params.id);  
        })
        return {  }
    }
}
</script>

<style>

</style>