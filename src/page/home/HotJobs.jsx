import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/jobs")
			.then((res) => res.json())
			.then((data) => setJobs(data));
	}, []);
	return (
		<div className='py-10'>
			<div className=''>
				<h1 className='text-xl md:text-4xl text-black font-bold text-center'>
					Jobs of the day
				</h1>
				<p className='text-base text-[#000000bd] font-medium text-center'>
					Search and connect with the right candidates faster.
				</p>
			</div>
			<div className=''>
				{jobs.map((job) => (
					<JobCard key={job._id} job={job}></JobCard>
				))}
			</div>
		</div>
	);
};

export default HotJobs;
