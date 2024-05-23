import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArticleInterface, ARTICLES} from "../data/articles.ts";


export interface articlesState {
    articles: ArticleInterface[]
    contentLength: number
    articlesCount: number
}

const initialState: articlesState = {
    articles: ARTICLES,
    contentLength: ARTICLES.reduce((sum, current)=>sum+current.content.length, 0),
    articlesCount: ARTICLES.length
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<{ id: number, value: string }>) => {
            const articleIndex = state.articles.findIndex(el => el.id === action.payload.id)
            const article = state.articles
            article[articleIndex].comments.unshift(action.payload.value)
            state.articles = article
        },
        addArticle: (state, action: PayloadAction<{ title: string, description: string, content: string }>) => {
            state.articles.unshift({
                id: state.articles.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                content: action.payload.content,
                comments: []
            })
            state.articlesCount += 1
            state.contentLength += action.payload.content.length
        },
    }
})

export default articlesSlice.reducer
export const articlesActions = articlesSlice.actions