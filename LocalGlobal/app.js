let PlanComponent = {
    template: '#plan-template',
    props: { name: String, required: true }
}

let PlanPickerComponent = {
    components: { plan: PlanComponent },
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The single', 'The curious', 'The addict']
        }
    }
}

Vue.createApp({
    components: { planpicker: PlanPickerComponent }
})
    .mount('#app')