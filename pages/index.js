import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import BottomButton from '../components/BottomButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roady Metais</title>
        <meta name="description" content="Industria e comércio de metais sanitários. Fale agora com um de nossos representantes" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div style = {{position: 'absolute', top: 10, left: '5%'}} >
          <Image src = "/logo.png" width = {90} height = {40} />
        </div>
      <main className={styles.main}>
       
       <Button number = "15997905611" >SOROCABA/LITORAL NORTE</Button>
       <Button number = "11987446694" >ZONA NORTE/GUARULHOS</Button>
       <Button number = "13996576965" >LITORAL SUL</Button>
       <Button number = "11988216194" >ALTO TIETE</Button>
       <Button number = "11995343699" >ABCD PAULISTA</Button>
       <Button number = "11981276336" >ZONA OESTE/ ZONA SUL</Button>
       <Button number = "11964467543" >ZONA LESTE</Button>

       <BottomButton/>
      </main>

    </div>
  )
}
