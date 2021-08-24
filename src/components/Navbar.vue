<template>
<div class="wrapper">
    <LoginModal @close='closeModal' v-if="isModal"/>

    <div class="sign" v-if="!$store.getters.mobile">KaoChat.</div>
    <div class="back" v-if="$store.getters.mobile" @click="router.back()">Back</div>


    <div class="nav-bar" v-if="!$store.getters.mobile">
        <router-link  v-for="(link) in links" :key="link" :to='{ name: link.to }' class="link" active-class="active">
            <fa :icon="['fas' , link.icon]" class="icon"/> {{link.name}} 
        </router-link>
        <div class="link" @click="openModal">
            <fa :icon="['fas' , 'sign-in-alt']" class="icon"/> Login
        </div>
    </div>
    <fa :icon="['fas' , 'bars']" v-if="$store.getters.mobile" class="nav-icon" :class="isDropDown ? 'dropdown': '' " @click="isDropDown = !isDropDown"/>
    <div class="mobile-nav" :class="isDropDown? 'show' : ''">
        <router-link  v-for="(link) in links" :key="link" :to='{ name: link.to }' class="mobile-link" active-class="active" @click="isDropDown = !isDropDown">
            <fa :icon="['fas' , link.icon]" class="icon" /> {{link.name}} 
        </router-link>
        <div class="mobile-link" @click="openModal">
            <fa :icon="['fas' , 'sign-in-alt']" class="icon"/> Login
        </div>
    </div>
</div>
  
</template>

<script>
import { ref , reactive  } from 'vue'
import { useRouter } from 'vue-router'
import LoginModal from '../components/Login_modal.vue'

export default {
    name: 'Navbar',
    components:{ LoginModal, },
    setup() {
        const navIcon = ref(null)
        const isDropDown = ref(false)
        const router = useRouter()
        const links = reactive([
            { name:'Home' , to: 'Home' , icon: 'home'},
            { name:'Chat' , to: 'Chat' , icon: 'comment-dots'},
        ])

        const clickToLogElement = ()=>{
            console.log(`the naviconelement is:${navIcon.value.textContent}`);
        }

        const isModal = ref(true)
        const openModal = ()=> isModal.value = true
        const closeModal = ()=>isModal.value = false
        
        return { links , clickToLogElement , navIcon , isDropDown , router , closeModal , openModal , isModal}
    }
}
</script>

<style lang="scss" scoped>


.wrapper{
    z-index: 10;
    font-family: 'Roboto Mono', monospace;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .sign{
        margin-left: 2rem;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 800;
        color: #fff;
        @media (max-width: 770px) {
            margin-left: 1rem;
        }
        
    }
    .back{
        margin-left: 2rem;
        margin-top: .6rem;
        font-size: 2rem;
        font-weight: 800;
        padding: 5px 20px;
        border-radius: 20px;
        cursor: pointer;
        background-color: rgb(255, 51, 51);
        color: #fff;
        transition: .5s;
        @media (max-width: 770px) {
            margin-left: 1rem;
        }
        &:hover{
            color: #303030;
            background-color: rgb(255, 0, 0);
        }
    }
}
.nav-bar{
    z-index: 10;
    height: 100%;
    display: flex;
    position: relative;
    background-color: transparent;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    .link{
        cursor: pointer;
        transition: .5s;
        margin: 1rem;
        font-size: 2rem;
        position: relative;
        font-weight: 800;
        @media (max-width: 850px) {
            font-size: 1.5rem;
        }
        @media (max-width: 770px) {
            font-size: 1rem;
        }
        .icon{
            transition: .5s;
            font-size: 1.5rem;
            align-self: center;
            color: #fff;
            margin-right: 0.5rem;
            
        }
       
        display: flex;
        flex-direction: row;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        padding: 5px 30px;
        &:hover{
            color: rgb(95, 255, 180);
            .icon{
                color: rgb(95, 255, 180);
            }
        }
    }
    .active{
        transition: .5s;
        &::after{
            animation: fade .5s;
            transition: .5s;
            position: absolute;
            content: '';
            top: 10%;
            width: 60%;
            height: 100%;
            border-bottom: 0.3rem solid #fff;
        }
    }
}
@keyframes fade {
    0%{
        transform-origin: left;
        transform: scaleX(0);
    }
    100%{
        transform-origin: left;
        transform: scaleX(100%);
    }
}
.nav-icon{
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    transition: .5s;
    &:hover{
        font-size: 3.5rem;
    }
}
.dropdown{
    z-index: 10;
    right: 10rem;
}
.mobile-nav{
    z-index: 10;
    max-width: 10rem;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-bottom-left-radius: 21px;
    transition: .5s ;
    transform: translateX(100%);
    &.show{
        transform: translateX(0%);
    }
    .mobile-link{
        font-size: 1.5rem;
        text-decoration: none;
        padding: 10px;
        .icon{
            font-size: 1.15rem;
        }
        transition: .5s ;
    }
    .active{
        background-color: rgba(115,18,81,1);
        color: #fff;
        border-bottom-left-radius: 0;
        &:last-child{
            border-bottom-left-radius: 20px;
        }
        
    }
}

</style>