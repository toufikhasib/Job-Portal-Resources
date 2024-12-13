import { Outlet } from "react-router-dom";
import Nav from "../page/shared/Nav";
import Footer from "../page/footer/Footer";

const MainLayout = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<Nav></Nav>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
