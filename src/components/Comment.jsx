import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  return(
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
            <button onClick={handleDeleteComment} title='Deletar Comentario'>Deletar</button>
          </header>
          <p> {content} </p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>Aplaudir<span>{likeCount}</span> </button>
        </footer>
      </div>
    </div>
  )
}