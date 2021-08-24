<template>
    <div class="bg"></div>
    <div class="auth" ref="auth" v-if="!$store.getters.mobile">
        <div class="close" :class="isRight? 'clicked':''" @click="emit('close')"></div>
        
        <form @submit.prevent="">
            <h1>Sign In</h1>
            <input type="text" class="username" placeholder="Username">
            <input type="text" class="password" placeholder="Password">
            <button class="login btn">login</button>
        </form>
        <form @submit.prevent="">
            <h1>Create Account</h1>
            <input type="text" class="username" placeholder="Username">
            <input type="text" class="password" placeholder="Password">
            <button class="register btn">register</button>
        </form>
        <div class="panel" :class="isRight? 'right':'left'">
            <div class="panel-info panel-right"  v-if="isRight" >
                <h1 class="text">Don't have account?</h1>
                <button ref="toggleBtn" @click="isRight = !isRight">signup</button>
            </div>
            <div class="panel-info panel-left"  v-if="!isRight">
                <h1 class="text">Already have account?</h1>
                <h2 class="text">let enjoy!</h2>
                <button ref="toggleBtn" @click="isRight = !isRight">signIn</button>
            </div>
        </div>
    </div>

    <div class="auth" v-if="$store.getters.mobile">
        <div class="close" :class="isRight? 'clicked':''" @click="emit('close')"></div>
        <form @submit.prevent="" v-if="isRight">
            <h1>Sign In</h1>
            <input type="text" class="username" placeholder="Username">
            <input type="text" class="password" placeholder="Password">
            <button class="login btn">login</button>
            <button @click="isRight = !isRight">signup</button>
        </form>
        <form @submit.prevent="" v-if="!isRight">
            <h1>Create Account</h1>
            <input type="text" class="username" placeholder="Username" v-model="userData.name">
            <input type="password" class="password" placeholder="Password" v-model="userData.password">
            <input type="password" class="password" placeholder="ConfirmPassword">
            <input type="text" class="password" placeholder="Email" v-model="userData.email">
            <button class="register btn">register</button>
            <button  @click="isRight = !isRight">signup</button>
        </form>
    </div>
</template>

<script>
import { ref , onMounted, reactive } from 'vue' 
import store from '../store'
export default {
    name: 'Login_modal',
    emits: ['close'],
    setup(_ , { emit }) {
        const isRight = ref(true)
        const $store = store
        const auth = ref(null)
        onMounted(()=>{
            if( !$store.getters.mobile )
            auth.value.classList.add('right-panel')
        })

        const userData = reactive({
            name: '',
            email: '',
            password: '',
        })

        return { emit , isRight , auth , userData} 
    } 
}
</script>

<style lang="scss" scoped>

.bg{
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0000009c;
    z-index: 19;
    transform: translate( 0, 0);
}
.close {
    cursor: pointer;
    z-index: 1000;
    position: absolute;
    transform: translateX(50%);
    right: 7%;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.4;
    transition: .5s ;
    &:hover {
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    &.clicked{
        right: 93%;
    }
}
button{
    margin-top: 1rem;
    font-family:  'Roboto Mono' , monospace;
    cursor: pointer;
    padding: .4rem 2rem;
    border-radius: 20px;
    background-color: rgb(255, 83, 83);
    color: #fff;
    border: none;
    transition: .5s;
    &:hover{
        padding: .6rem 2.2rem;
    }
}
.auth{
    animation: fade .2s ease-in-out;
    @keyframes fade {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100%;
        }
    }
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: 90vw;
    max-width: 1000px;
    height: 70vh;
    position: fixed;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
    form{
        width: 100%;
        height: 100%;
        z-index: 21;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            &:active{
                outline: 2px solid #000;
            }
            font-family: 'Roboto Mono', monospace;
            margin: .5rem;
            font-size: 1.1rem;
            padding: 5px 10px;
            outline: none;
            border: none;
            border-radius: 10px;
            background-color: rgb(199, 199, 199);
        }
        
    }
    .btn{
        margin-top: 1rem;
        font-family:  'Roboto Mono' , monospace;
        cursor: pointer;
        padding: .4rem 2rem;
        border-radius: 20px;
        background-color: rgb(255, 83, 83);
        color: #fff;
        border: none;
        transition: .5s;
        &:hover{
            padding: .6rem 2.2rem;
        }
        .login-btn{
            
        }
        .register-btn{
    
        }
    }
    .panel{
        width: 50%;
        z-index: 22;
        height: 100%;
        position: absolute;
        transition: transform .5s ease-in-out;
        top: 0;
        left: 0;
        background-color: #242424;
        display: flex;
        justify-content: center;
        .panel-info{
            position: relative;
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            z-index: 23;
            .text{
                text-align: center;
            }
            &.panel-right{
                // transform: translateX(100%);
                // animation: inandout .5s ease-in-out ;
            }
            &.panel-left{
                // animation: inandout .5s ease-in-out reverse;
            }
            
        }
    }
    .right{
        transform: translateX(100%);
    }
    .left{
        transform: translateX(0%);
    }

    @keyframes inandout {
        0%{
            transform: translateX(0%);
        }
        100%{
            transform: translateX(100%);
        }
    }
}
</style>