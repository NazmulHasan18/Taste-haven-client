import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home/Home";
import ChefDetails from "../../pages/chefDetails/ChefDetails/ChefDetails";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://taste-haven-server-nazmulhasan18.vercel.app/chefs"),
         },
         {
            path: "/details/:id",
            element: <ChefDetails></ChefDetails>,
            loader: ({ params }) =>
               fetch(`https://taste-haven-server-nazmulhasan18.vercel.app/chefs/${params.id}`),
         },
      ],
   },
]);

export default router;
