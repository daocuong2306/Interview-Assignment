
import { createBrowserRouter } from "react-router-dom";
import TableUser from "./page/TableUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TableUser />,
    },
]);