import { Header } from "./components/Header/index";
import { Sidebar } from "./components/Sidebar/index";
import { Post } from "./components/PostUser/index";

import styles from './App.module.css'

import './global.css';


function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
        <Post />
      </main>
    </div>
    </>
  )
}

export default App
