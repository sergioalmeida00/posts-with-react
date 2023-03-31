import styles from './Sidebar.module.css'
export function SideBar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
      />

      <div className={styles.profile}>
        <img 
        className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/26006753?v=4" 
        />
        <strong>Sérgio Almeida</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}