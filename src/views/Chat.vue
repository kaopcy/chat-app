<template>
    <div class="Chat" :class="$store.getters.mobile ? 'mobile' : 'desktop' ">
        <ChatModule class="chat-module" v-if="!$store.getters.mobile"/>
        <UserModule class="user-module" @click="onClickUser()"/>
    </div>
    
</template>

<script>
import ChatModule from '../components/Chat_module.vue'
import UserModule from '../components/User_module.vue'
import { useRouter } from 'vue-router'

export default {
    name: 'Chat',
    components:{ ChatModule , UserModule},

    setup(){
        const hi = 'asdasdasd'
        const router = useRouter()
        const onClickUser = ()=>{
            router.push({ name: 'Chat_mobile' , params: {id: hi }})
        }

        return { onClickUser }
    }

}
</script>

<style lang="scss" scoped>
.Chat{
    display: flex;
    margin-top: 2.5rem;
}
.mobile{
    justify-content: center;
    
}
.desktop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .user-module{
        order: 1;
        flex: 1;
    }
    .chat-module{
        order: 2;
        flex: 2;
    }
}
</style>