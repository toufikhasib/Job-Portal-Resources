import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Register from "../page/register/Register";
import SignIn from "../page/signIn/SignIn";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <h1>not page</h1>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path:"/login",
				element:<SignIn></SignIn>
			}
		],
	},
]);

export default router;
