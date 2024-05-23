import style from "./MainLayout.module.scss"
import {Header} from "../../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.outlet}>
                <Outlet/>
            </div>
        </div>
    )
}