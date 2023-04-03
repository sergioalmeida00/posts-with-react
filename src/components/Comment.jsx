import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { Modal } from './Modal'

export function Comment({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((prevState) => (prevState + 1))
  }

  function handleShowModal(value){
    setShowModal(value)
  }

  return(
    <>
      {
        showModal && (
        <Modal onShowModal={handleShowModal} onDelete={handleDeleteComment}>
          <>
            <header>
              <h3>Excluir Comentário</h3>
            </header>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
          </>  
        </Modal>
        )
      }
      
       <div className={styles.comment}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/26006753?v=4"
          hasBorder={false}
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Sérgio Almeida</strong>
                <time title='31 de Maio às 09:00h' dateTime='2023-03-31 08:13:30'>Publicado há 1h</time>
              </div>
              <button onClick={handleShowModal} title='Deletar Comentario'>Deletar</button>
            </header>
            <p> {content} </p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>Aplaudir<span>{likeCount}</span> </button>
          </footer>
        </div>
      </div>

    </>

  )
}