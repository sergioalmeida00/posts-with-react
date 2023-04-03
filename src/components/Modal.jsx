import styles from './Modal.module.css'

export function Modal({onShowModal,onDelete, children}){
  
  return(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <footer>
          <button className={styles.cancel} onClick={() => onShowModal(false)}>Cancelar</button>
          <button className={styles.delete} onClick={onDelete} >Sim, excluir</button>
        </footer>
      </div>
    </div>
  )
}