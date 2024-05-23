import style from "./Input.module.scss"
import {InputHTMLAttributes} from "react";
import cn from "classnames"
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    error: boolean
}
export function Input({error, ...props}: InputProps) {
    return(
        <input className={cn(style.input, {
            [style.input_error]: error
        })} {...props}/>
    )
}