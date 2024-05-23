import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {Articles} from "./pages/Articles/Articles.tsx";
import {UserContextProvider} from "./context/searchContext.tsx";
import {CreateArticle} from "./pages/CreateArticle/CreateArticle.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Articles/>
            },
            {
                path: 'createarticle',
                element: <CreateArticle/>
            }
        ]
    },
    {
        path: "*",
        element: <div>Такой страницы не существует</div>
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <UserContextProvider>
                <RouterProvider router={router}/>
            </UserContextProvider>
        </Provider>
    </React.StrictMode>,
)
