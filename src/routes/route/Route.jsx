import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://taste-haven-server-nazmulhasan18.vercel.app/chefs"),
   },
]);

export default router;
