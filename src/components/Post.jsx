import styles from "./Post.module.css"
import { Comment } from "./Comment"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ValdineiJunior.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Valdinei Junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio as 11e13" dateTime="2022-05-11-- 08:00:38">Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifolio.</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto nlw rocketseat</a></p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>

                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}