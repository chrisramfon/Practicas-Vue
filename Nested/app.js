
Vue.createApp({
    
})
.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The single', 'The curious', 'The addict']
        }
    }
})
    .component('plan', {
        template: '#plan-template',
        props: { name: String, required: true }
    })
    .mount('#app')