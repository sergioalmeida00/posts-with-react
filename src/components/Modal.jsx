import styles from './Modal.module.css'

export function Modal({onShowModal,onDelete}){
  
  return(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header>
          <h3>Excluir Comentário</h3>
        </header>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <footer>
          <button className={styles.cancel} onClick={() => onShowModal(false)}>Cancelar</button>
          <button className={styles.delete} onClick={onDelete} >Sim, excluir</button>
        </footer>
      </div>
    </div>
  )
}