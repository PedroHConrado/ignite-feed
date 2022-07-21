import { Header } from "./components/Header/index";
import { Sidebar } from "./components/Sidebar/index";
import { Post } from "./components/PostUser/index";

import styles from './App.module.css'

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PedroHConrado.png',
      name: 'Pedro Conrado',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no emu portifa. É um'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no emu portifa. É um'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-08 20:00:00'),
  },
]

function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}

export default App
