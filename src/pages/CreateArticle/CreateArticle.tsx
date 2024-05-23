import style from "./CreateArticle.module.scss"
import {Input} from "../../components/Input/Input.tsx";
import {useState} from "react";
import cn from "classnames";
import {useDispatch} from "react-redux";
import {articlesActions} from "../../store/articlesSlice.ts";
import {useNavigate} from "react-router-dom";

export function CreateArticle() {
    const [validation, setValidation] = useState({title: false, description: false, content: false})
    const [titleValue, setTitleValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [contentValue, setContentValue] = useState("")
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const send = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (titleValue.length === 0) {
            setValidation(prevState => ({...prevState, title: true}))

        }
        if (descriptionValue.length === 0) {
            setValidation(prevState => ({...prevState, description: true}))
        }
        if (contentValue.length === 0) {
            setValidation(prevState => ({...prevState, content: true}))
        }
        if(titleValue.length > 0 && descriptionValue.length > 0 && contentValue.length > 0){
            dispatch(articlesActions.addArticle({title: titleValue, description: descriptionValue, content: contentValue}))
            navigation('/')
        }
    }
    return (
        <form onSubmit={e=>send(e)} className={style.container}>
            <div className={style.title}>Создать статью</div>
            <Input value={titleValue} onChange={e => setTitleValue(e.target.value)} error={validation.title}
                   placeholder="Название"/>
            <Input value={descriptionValue} onChange={e => setDescriptionValue(e.target.value)}
                   error={validation.description} placeholder="Описание"/>
            <textarea value={contentValue} onChange={e => setContentValue(e.target.value)}
                      placeholder="Содержимое статьи" className={cn(style.textarea, {
                [style.textarea_error]: validation.content
            })}/>
            <button className={style.button}>Создать</button>
        </form>
    )
}