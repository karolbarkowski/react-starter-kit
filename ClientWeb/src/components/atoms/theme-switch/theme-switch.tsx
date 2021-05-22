import { useEffect } from 'react'
import useLocalStorage from '../../../hooks/use-local-storage'
import styles from './theme-switch.module.scss'

export interface ThemeSwitchProps {}

const LIGHT = 'light'
const DARK = 'dark'

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [storedValue, setStoredValue] = useLocalStorage('theme', '')

  useEffect(() => {
    if (!storedValue) {
      setStoredValue(LIGHT)
    }
    document.body.className = storedValue
  })

  return (
    <div className={styles.themeSwitch}>
      <span
        className={styles.switch + ' ' + (storedValue === LIGHT ? styles.active : '')}
        onClick={() => {
          document.body.className = LIGHT
          setStoredValue(LIGHT)
        }}>
        Light
      </span>
      <span
        className={styles.switch + ' ' + (storedValue === DARK ? styles.active : '')}
        onClick={() => {
          document.body.className = DARK
          setStoredValue(DARK)
        }}>
        Dark
      </span>
    </div>
  )
}
