import style from "./ArticleCard.module.scss"
import {ArticleInterface} from "../../data/articles.ts";

interface ArticleCardProps {
    article: ArticleInterface
    onClick: () => void
    articlesCount: number
    contentLength: number
}

export function ArticleCard({article, articlesCount, contentLength, onClick}: ArticleCardProps) {
    return (
        <div onClick={onClick} className={style.container}>
            <div>
                <div className={style.title}>{article.title}</div>
                <div className={style.text}>{article.description}</div>
            </div>
            <table className={style.table}>
                <tr>
                    <th>Статьи</th>
                    <th>Символы в статьях</th>
                    <th>Комментарии</th>
                </tr>
                <tr>
                    <td>{articlesCount}</td>
                    <td>{contentLength}</td>
                    <td>{article.comments.length}</td>
                </tr>
            </table>
        </div>
    )
}