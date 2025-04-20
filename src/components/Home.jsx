import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[100vh] flex justify-center items-center text-white' id='hero'>
  <div className='text-center px-4 backdrop-blur-sm rounded-3xl'>
    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
      Hi, I'm <span className='text-yellow-200'>Archit</span>
    </h1>
    <p className='mt-4 text-xl'>
      I'm passionate about data analytics—extracting meaningful insights from data to drive informed decisions.<br />
      I also love to build scalable and optimized web application systems.
    </p>
  </div>
</div>

			<Footer/>
		</div>	
	);
}

export default Home;