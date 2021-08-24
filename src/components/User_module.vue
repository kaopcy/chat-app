<template>
    <div class="user">
        <div v-for="(user) in users" :key="user" class="user-list"> 
            <div class="user-info">
                <div class="pic" v-if="user.photoURL">pic</div>
                <fa :icon="['fas' , 'user-circle']" class="icon" v-if="!user.photoURL"/>
                <div class="name">{{user.name}}</div>
            </div>
            <div :class="user.isOnline? 'online' : 'offline' ">{{user.isOnline? 'online' : 'offline'}}</div>
        </div>
    </div>
</template>

<script>
import { reactive  } from 'vue'
export default {
    name: 'User_module',
    setup(){ 
        const users = reactive([
            { name: 'monica' , photoURL: null , isOnline: true  },
            { name: 'Piyachia kaewchum' , photoURL: null , isOnline: true  },
            { name: 'monica' , photoURL: null , isOnline: true  },
            { name: 'monica' , photoURL: null , isOnline: true  },
            { name: 'monica' , photoURL: null , isOnline: true  },
            { name: 'monica' , photoURL: null , isOnline: true  }
        ]) 

        return { users }
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


.user{
    border: 3px solid red;
    width: 100%;
    display: flex;
    font-family: 'Raleway' , sans-serif  ; 
    color: #fff;
    overflow-y: scroll;
    flex-direction: column;
    .user-list{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        .user-info{
            display: flex;
            flex-direction: row;
            align-items: center;
            .pic{
            }
            .icon{
                position: relative;
                font-size: 3rem;
                width: 50px;
                height: 50px;
                padding-right: 1rem;
            }
            .name{
                
            }
        }
        .online{
            background-color: rgb(64, 255, 80);
            color: #fff;
            font-weight: 900;
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }
        .offline{
            background-color: rgb(124, 124, 124);
            color: #fff;
            font-weight: 900;
            padding: 10px 20px;
            border-radius: 20px;
        }
    }
    
}
</style>