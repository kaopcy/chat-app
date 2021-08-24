<template>
    <div class="wrapper">
        <div class="text-wrapper" id="text">
            <div v-for="(item) in testContent" 
                :key="item" 
                :class="item.isSend ? 'right' : 'left' " 
                class="content">
                <span>{{item.content}}</span>
            </div>
            <div ref="bottom"></div>
        </div>
        <form @submit.prevent="enterMessage">
            <div class="input">
                <fa :icon="['fas' , 'video']" class="icon video"/>
                <fa :icon="['fas' , 'camera']" class="icon camera"/>
                <input type="text" v-model="text" placeholder="message" ref="inputDOM" @focus="isFocus = true" @blur="isFocus = false">
                <fa :icon="['fas' , 'forward']" class="icon send" @click.prevent="enterMessage"/>
            </div>
        </form>
    </div>
  
</template>

<script>
import { ref , reactive, onMounted, watch, nextTick } from 'vue'

export default {
    setup() {
        const bottom = ref(null)
        const isFocus = ref(null)
        const inputDOM  = ref(null)
        const text = ref('')
        const message = ref('')
        const testContent = reactive([
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: false ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
                {
                    isSend: true ,
                    content: 'Lorem ipsum dolor sit amet.'
                },
            ]  )
        
        const enterMessage = ()=>{
            testContent.push({
                isSend: true,
                content: text.value
            })
            text.value = null
        }
        
        onMounted(() => {
            nextTick(()=>{bottom.value?.scrollIntoView({behavior: 'smooth'})}) 
        })
        
        watch( text , ()=>{  nextTick(()=>{bottom.value?.scrollIntoView({behavior: 'smooth'})})  } , { deep: true} )

        return {  message  , text , enterMessage , inputDOM , testContent , bottom , isFocus}
    },


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

.wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 3px solid red;
    font-family: 'Poppins' ,sans-serif;
    padding: 10px;
    .text-wrapper{
        width: 100%;
        height: 70vh;
        border: 2px solid blue;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        .content{
            display: flex;
            justify-content: flex-end;
            margin: 0.5rem 10px;
            span{
                padding: 10px 10px;
                padding-left: 20px;
                
            }
        }
        .left{
            justify-content: flex-start;   
            span{
                background-color: #fff;
                color: #030303;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }   
        }
        .right{
            justify-content: flex-end;
            span{
                background-color: #303030;
                color: #fff;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            }   
        }
    }
    form{
        .input{
            width: 100%;
            padding: 10px;
            border: none;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            background-color: #25CED1;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            font-size: 20px;
            display: flex;
            flex-direction: row;
            .icon{
                margin: 2px 10px;
                width: 2rem;
                height: 2rem;
                color: #073b4c;
                flex: 1;
                z-index: 2;
            }
            .send{
                transition: .3s;
                &:hover{
                    color: rgb(255, 25, 25);
                    
                }
            }
            input{
                justify-self: center;
                border: none;
                background-color: rgba(255, 255, 255, 0.39);
                padding: 5px;
                padding-left: 10px;
                border-radius: 10px;
                flex: 5;
                z-index: 3;
                transition: .5s;
                &:focus{
                    outline: none;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    flex: 10;

                }
            }
        }
        
    }
    // .text-wrapper{
    //     position: relative;
    //     margin-right: 60px;
    //     margin-bottom: 0;
    //     width: 600px;
    //     height: 500px;
    //     background-color: #fff;
    //     display: flex;
    //     flex-direction: column;
    //     overflow-y: scroll;
    //     padding: 10px 20px;
    //     .content{
    //         display: flex;
    //         justify-content: flex-end;
    //         margin: 0.5rem 10px;
    //         span{
    //             padding: 10px 10px;
    //             padding-left: 20px;
                
    //         }
    //     }
    //     .left{
    //         justify-content: flex-start;   
    //         span{
    //             background-color: #fff;
    //             color: #030303;
    //             box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    //             border-top-right-radius: 20px;
    //             border-bottom-right-radius: 20px;
    //         }   
    //     }
    //     .right{
    //         justify-content: flex-end;
    //         span{
    //             background-color: #303030;
    //             color: #fff;
    //             border-top-left-radius: 20px;
    //             border-bottom-left-radius: 20px;
    //             box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    //         }   
    //     }
        

    // }
    // form{
    //     .input{
    //         width: 100%;
    //         padding: 10px;
    //         border: none;
    //         border-bottom-left-radius: 20px;
    //         border-bottom-right-radius: 20px;
    //         background-color: #25CED1;
    //         box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    //         font-size: 20px;
    //         display: flex;
    //         flex-direction: row;
    //         .icon{
    //             margin: 2px 10px;
    //             width: 2rem;
    //             height: 2rem;
    //             color: #073b4c;
    //             flex: 1;
    //             z-index: 2;
    //         }
    //         .send{
    //             transition: .3s;
    //             &:hover{
    //                 color: rgb(255, 25, 25);
                    
    //             }
    //         }
    //         input{
    //             justify-self: center;
    //             border: none;
    //             background-color: rgba(255, 255, 255, 0.39);
    //             padding: 5px;
    //             padding-left: 10px;
    //             border-radius: 10px;
    //             flex: 5;
    //             z-index: 3;
    //             transition: .5s;
    //             &:focus{
    //                 outline: none;
    //                 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    //                 flex: 10;

    //             }
    //         }
    //     }
        
    // }
}

</style>