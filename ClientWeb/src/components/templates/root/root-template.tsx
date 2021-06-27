import { ReactElement } from 'react'
import styles from './root-template.module.scss'

export interface RootTemplateProps {
  header: ReactElement
  children: React.ReactElement
  footer: ReactElement
}

export const RootTemplate = (props: RootTemplateProps) => {
  return (
    <div className={styles['root-container']}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.footer}>{props.footer}</div>
    </div>
  )
}
