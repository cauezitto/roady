import styles from './index.module.css'

function Button(props) {
  return <a className = {styles.button} href = "https://api.whatsapp.com/send?phone=5511935055515" >
      SOU DE OUTRA REGIÃO
  </a>
}

export default Button;