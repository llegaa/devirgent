import style from "./Header.module.scss"
import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {SearchContext} from "../../context/searchContext.tsx";
export function Header() {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    return(
        <div className={style.container}>
            <NavLink to='/'><img src={logo} alt="Логотип"/></NavLink>
            <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <NavLink to="/createarticle">Создать статью</NavLink>
        </div>
    )
}