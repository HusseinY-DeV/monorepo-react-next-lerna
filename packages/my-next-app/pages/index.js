import styles from '../styles/Home.module.css'
import { Button } from 'components'
export default function Home() {
  return (
    <div className={styles.container}>
      <Button>Hello World</Button>
      <h1>Next app</h1>
    </div>
  )
}
