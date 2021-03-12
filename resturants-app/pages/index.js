import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

    </div>
  )
}


export const getStaticProps = async () => {
  try {
    const res = await axios.get('https://localhost:1337/resturants');

    const resturants = res.data;

    console.log(resturants)
    return {
      resturants
    }
  } catch (error) {
    return {
      error
    }
  }
}

