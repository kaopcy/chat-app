<template>
    <div class="auth">
        <form @submit.prevent="">
            <input type="text" class="username" placeholder="Username">
            <input type="text" class="password" placeholder="Password">
            <div class="btn">
                <button class="login">login</button>
                <button class="register">register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'vue',
    setup() {
        return { } 
    }
}
</script>

<style lang="scss" scoped>
.auth{
    position: relative;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        max-width: 60vw;
        display: flex;
        flex-direction: column;
        .username{
        
        }
        .password{

        }
    }
    .btn{
        display: flex;
        flex-direction: row;
        .login-btn{
            
        }
        .register-btn{
    
        }
    }
}
</style>