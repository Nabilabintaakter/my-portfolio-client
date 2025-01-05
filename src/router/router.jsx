import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/projects/:id",
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:5000/projects/${params.id}`)
            },
        ]
    },
]);