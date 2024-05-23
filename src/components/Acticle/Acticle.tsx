import style from "./Acticle.module.scss"
import {ArticleInterface} from "../../data/articles.ts";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {articlesActions} from "../../store/articlesSlice.ts";
import {RootState} from "../../store/store.ts";
import close from "../../assets/close.svg"
import {Input} from "../Input/Input.tsx";

interface ArticleProps {
    id: number
    onClick: ()=>void
}
export function Article({ id, onClick }: ArticleProps) {
    const [commentValue, setCommentValue] = useState("")
    const articles = useSelector((s: RootState) => s.articles)
    const [data, setData] = useState<ArticleInterface | undefined>(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(articles.articles)
        console.log(id)
        if (id !== undefined) {
            setData(articles.articles.find(el=> el.id===id))
        }
    }, [id, articles])

    const sendComment = () => {
        if (data && commentValue) {
            dispatch(articlesActions.addComment({ id: data.id, value: commentValue }))
            setCommentValue("")
        }
    };
    const sentCommentEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            if (data && commentValue) {
                dispatch(articlesActions.addComment({ id: data.id, value: commentValue }))
                setCommentValue("")
            }
        }
    };


    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div onClick={onClick} className={style.background}></div>
            <div className={style.window}>
                <img onClick={onClick} className={style.close} src={close}/>
                <div className={style.title}>{data?.title ?? ''}</div>
                <div className={style.descriptionTitle}>Описание</div>
                <div className={style.description}>{data.description}</div>
                <div className={style.text}>{data.content}</div>
                <div className={style.descriptionTitle}>Комментарии</div>
                <div className={style.input}>
                    <Input error={false} onKeyUp={(e)=>sentCommentEnter(e)}
                        placeholder="Напишите комментарий..."
                        value={commentValue}
                        onChange={(e) => setCommentValue(e.target.value)}
                    />
                    <button onClick={sendComment}>Отправить</button>
                </div>
                {data.comments &&
                    data.comments.map((el, index) => <div key={index} className={style.comment}>{el}</div>)}
            </div>
        </>
    );
}