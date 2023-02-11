import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ValdineiJunior.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Valdinei Junior</strong>
                            <time title="11 de maio as 11e13" dateTime="2022-05-11-- 08:00:38">Cerca de uma hora atraz</time>
                        </div>
                        <button title="deletar comentario">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}