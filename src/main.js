import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Stepper from './components/Stepper.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import List from './components/List.vue'
import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
      history: createWebHistory(),
      routes:[
        {
            path:'/',
            component:List
        },
        {
            path:'/form',
            component:Stepper
        }
      ]
})

 
const app =  createApp(App)

app.component('Stepper' , Stepper)
app.component('Step1' , Step1)
app.component('Step2' , Step2)
app.component('Step3' , Step3)
app.component('List', List )
app.use(router);
app.mount('#app')
