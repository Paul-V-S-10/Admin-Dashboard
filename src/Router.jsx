import { createBrowserRouter } from "react-router-dom";
import MainAdmin from "./Admin/MainAdmin";
import SideBar from "./Admin/SideBar/SideBar";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainAdmin />,
        children: [
            {
                path: "/",
                element: <SideBar/>
            }
        ],
    }
])