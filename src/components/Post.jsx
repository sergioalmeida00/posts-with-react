import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, content, publishedAt}){  
  const [comments,setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix:true
  })

  function handleCreateNewComment(event){
    event.preventDefault()
    setComments([...comments,newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event){
    event.target.setCustomValidity('Esse Campor é obrigatório!')
    console.log(event.setCustomValidity)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.authorUrl}
           />
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>
        <time title={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map( line => {
            if(line.type === 'paragraph'){
              return <p key={Math.random()}> {line.content} </p>
            }else if(line.type === 'link'){
              return <p key={Math.random()}><a href='#'> {line.content} </a></p>
            }
          })
        }
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback </strong>

        <textarea 
          placeholder='Deixe um comentário'
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button> 
        </footer>
      </form>
      <div className={styles.commentList}>

        {
          comments.map( comment => (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
          ))
        }
        
      </div>

    </article>
  )
}
