import styles from './App.module.css'

import { Input } from './components/Input'
import { Button } from './components/Button'

import logo from './assets/logo.svg'

import './global.css'

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Logotipo do site ToDo" />
      </header>
      <div className={styles.content}>
        <div className={styles.newTask}>
          <Input 
          type="text"
          placeholder="Adicione uma nova tarefa" 
          />
          <Button 
          title="Criar"
          />
        </div>
      </div>
    </div>
  )
}
