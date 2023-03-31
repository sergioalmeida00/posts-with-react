import { useState } from "react"
import {  Header} from "./components/Header"
import { Post } from "./components/Post"
import styles from './App.module.css'
import './global.css'
import { SideBar } from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
