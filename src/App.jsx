import {  Header} from "./components/Header"
import { Post } from "./components/Post"
import styles from './App.module.css'
import './global.css'
import { SideBar } from "./components/Sidebar"

const posts = [
  {
    id:1,
    author:{
      authorUrl:'https://avatars.githubusercontent.com/u/26006753?v=4',
      name:'Sérgio Almeida',
      role:'Web Develop'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'}
    ],
    publishedAt:new Date('2023-03-31 18:00:00')
  },
  {
    id:2,
    author:{
      authorUrl:'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      name:'Jhon Doe',
      role:'QA'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'}
    ],
    publishedAt:new Date('2023-04-01 18:00:00')
  },
]

function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map( post => (
            <Post
            key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
