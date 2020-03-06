import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$dispatch = function(eventName, data) {
    let parent = this.$parent
    while (parent) {
        parent.$emit(eventName, data)
        parent = parent.$parent
    }
}

Vue.prototype.$broadcast = function(eventName, data) {
    broadcast.call(this, eventName, data)
}

function broadcast(eventName, data) {
    this.$children.forEach(child => {
        child.$emit(eventName, data)
        if (child.$children.length) {
            broadcast.call(child, eventName, data)
        }
    })
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')