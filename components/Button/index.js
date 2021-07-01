import styles from './index.module.css'

function Button(props) {
  return <a className = {styles.button} href = {`https://api.whatsapp.com/send?phone=55${props.number}`}>
{props.children}
  </a>
}

export default Button;