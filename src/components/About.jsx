import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
  👨‍💻 Hi, I'm Archit Gupta, an Engineering Student 🎓 with a passion for Data Analyst tools and also building both dynamic front-end interfaces and robust back-end systems. I specialize in full-stack development using the MEAN and MERN stacks 🚀, and I have a strong foundation in Data Analyst ,Data Structures & Algorithms (DSA) with C++ and efficient data handling using SQL.  

  <br />  
  ✍️ Beyond coding, I'm deeply passionate about fitness 💪 and capturing moments through photography 📸. Whether it's building scalable applications or embracing an active lifestyle, I love pushing my limits and exploring new possibilities.  
</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1Y5xPMj0Gy_xq_R5SHCInDDUOw2NsD2qf/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;