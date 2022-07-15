import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/PedroHConrado.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Pedro Conrado</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='12 de Julho ás 17:16' dateTime='2022-07-12 17:16:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋
        </p>
        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlwt</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      
    </article>
  )
}