import { motion, px } from "motion/react";
import bannerTeam1 from "../../assets/banner/office-team-1.jpg";
import bannerTeam2 from "../../assets/banner/office-team2.jpg";
import bannerTeam3 from "../../assets/banner/icon-top-banner.png";
import bannerTeam4 from "../../assets/banner/icon-bottom-banner.png";
const Banner = () => {
	return (
		<div>
			<div className='hero bg-base-200 h-[600px]'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='flex-1 '>
						<div className='flex relative'>
							<motion.img
								animate={{ y: [100, 50, 100] }}
								transition={{ duration: 5, repeat: Infinity }}
								src={bannerTeam1}
								className='max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px]  border-b-[6px] border-blue-600 shadow-2xl'
							/>
							<motion.img
								animate={{ y: [100,30] }}
								transition={{ duration: 5, repeat: Infinity, delay: 1 }}
								src={bannerTeam3}
								className='max-w-sm  shadow-2xl h-20 w-28 absolute top-[25px] left-[377px]'
							/>
						</div>
						<div className='flex '>
							<motion.img
								animate={{ y: [100, 50, 100] }}
								transition={{ duration: 5, repeat: Infinity, delay: 3 }}
								src={bannerTeam4}
								className='max-w-sm  shadow-2xl h-14 ml-10 mt-16'
							/>
							<motion.img
								animate={{ x: [50, 100, 50] }}
								transition={{ duration: 10, repeat: Infinity, delay: 2 }}
								src={bannerTeam2}
								className='max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px]  border-b-[6px] border-blue-600  shadow-2xl '
							/>
						</div>
					</div>
					<div className='flex-1'>
						<motion.h1
							animate={{ x: 80 }}
							transition={{
								duration: 2,
								delay: 1,
								ease: "easeOut",
								repeat: Infinity,
							}}
							className='text-5xl font-bold'>
							The 
							
							<motion.span
								animate={{ color: ["#9BB1FF", "#E2FDFF", "#C1121F"] }}
								transition={{
									duration: 2,
									repeat: Infinity,
								}}>
								{" "}
								Easiest Way
							</motion.span>{" "}
							to Get Your New Job
						</motion.h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
