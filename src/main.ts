import './assets/main.css'

import { createApp } from 'vue'
import Minesweeper from './components/Minesweeper.vue'

const app = createApp(Minesweeper)

app.mount('#app')
