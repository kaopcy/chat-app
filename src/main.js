import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome , faCommentDots , faSignInAlt , faBars , faVideo , faCamera , faForward , faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'
import store from './store'
library.add( faHome , faCommentDots , faSignInAlt , faBars , faVideo , faCamera , faForward , faUserCircle , faFacebook )

createApp(App).use(store).use(router).component('fa' , FontAwesomeIcon).mount('#app')
