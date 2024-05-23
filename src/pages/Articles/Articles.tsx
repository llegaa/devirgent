import style from "./Articles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard.tsx";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/searchContext.tsx";
import {ArticleInterface} from "../../data/articles.ts";
import {Article} from "../../components/Acticle/Acticle.tsx";

export function Articles() {
    const {articles, articlesCount, contentLength} = useSelector((s: RootState) => s.articles);
    const [data, setData] = useState<ArticleInterface[]>([])
    const { searchValue } = useContext(SearchContext);
    const [article, setArticle] = useState<number|null>(null)
    useEffect(() => {
        const newMass = articles.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()));
        setData(newMass);
    }, [searchValue, articles])
    return (
        <div className={style.container}>
            {article!==null && <Article onClick={()=>setArticle(null)} id={article}/>}
            {data.map((el) => {
                if (el.title.length > 19) return <ArticleCard articlesCount={articlesCount} contentLength={contentLength} key={el.id} onClick={()=>setArticle(el.id)} article={{...el, title: el.title.slice(0, 19) + "..."}}/>;
                return <ArticleCard articlesCount={articlesCount} contentLength={contentLength} key={el.id} onClick={()=>setArticle(el.id)} article={{...el}}/>;
            })}
        </div>
    );
}