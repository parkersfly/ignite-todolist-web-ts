import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonType){
  return(
    <button 
    className={styles.button}
    {...props}
    >
    {title}
    <PlusCircle size={16}/>
    </button>
  )
}