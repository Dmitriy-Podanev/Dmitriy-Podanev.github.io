import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './routes/root.css'
import ErrorPage from "./Error/ErrorPage";
import {SideBar} from "./Components/SideBar/sideBar";
import {routers} from "./routes/constants";
import {GeometryCube} from "./Components/ModelDisplay3D/cube";
import TodoList from "./Components/TodoTasks/TodoList/TodoList";
import {Loader} from "./Components/ModelDisplay3D/loader {keyFrame}/loader";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <SideBar listBtn={routers}/>,
        errorElement: <ErrorPage/>,
        children: [

            {
                path: "/",
                element: null,
            },
            {
                path: '/cube',
                element: <GeometryCube/>,
            },
            {
                path: '/smile',
                element: <Loader/>,
            },
            {
                path: 'main/TodoList',
                element: <TodoList/>,

            }
        ]
    },
]);

root.render(
    <RouterProvider router={router}/>
);



