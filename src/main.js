import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebookF, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faMagnifyingGlass, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faEye, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTwitter, faFacebookF, faInstagramSquare, faLinkedinIn, faLocationDot, faUserGroup, faCalendar, faClock, faMagnifyingGlass, faEye);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
