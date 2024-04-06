import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {  textVariant } from "../utils/motion";

{/*
const downloadCV = () => {
// window.location.href +
  const cvUrl = "https://drive.google.com/file/d/1Et7knqayOkc77UaxwMZXfoQJBtXjD404/view?usp=sharing"; // Replace with your CV file path
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "resume.pdf"; // Set the downloaded file name
  link.click();
 }*/
}
 
 
 const Feedbacks = () => {
 
  return (
   <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
     className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
    >
     <motion.div variants={textVariant()}>
 
      <p className={styles.sectionSubText}>Download My CV</p>
 
      <h2 className={styles.sectionHeadText}>Resume.</h2>
 
     </motion.div>
 
      
    
     <div className="relative duration-500 
      hover:-rotate-0  
      group [transform:rotate3d(1_,-1,_1,_60deg)]
      border border-sky-900 border-4  
      overflow-hidden rounded-2xl 
      relative h-96 w-64 bg-sky-800
       p-5 flex flex-col 
       items-start gap-4">
        
         <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
 
         <div className="text-gray-50">
          <span className="font-bold text-5xl"> Jr </span>
          <p className="text-xs">Web Developer</p>
         </div>
 
         <button className="duration-300 
         hover:bg-sky-900 border 
         hover:text-gray-50 
         bg-gray-50 font-semibold 
         text-sky-800 px-3 py-2 
         flex flex-row items-center
          gap-3"
          onClick={"https://drive.google.com/file/d/1Et7knqayOkc77UaxwMZXfoQJBtXjD404/view?usp=sharing"}>Download CV 
          <svg className="w-6 h-6 fill-current"
           height="100" 
           preserveAspectRatio="xMidYMid meet" 
           viewBox="0 0 100 100" 
           width="100" x="0" 
           xmlns="http://www.w3.org/2000/svg" y="0">
 
        <path 
        d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" 
        fill-rule="evenodd">
        </path>
 
        </svg>
 
         </button>
 
         <svg
         className="group-hover:scale-125 
         duration-500 absolute -bottom-0.5 
         -right-20 w-48 
         h-48 z-10 
         -my-2  
         fill-gray-50 
         stroke-sky-900" 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 64 64">
 
          <path 
          data-name="layer1" 
          d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" 
          stroke-miterlimit="10" 
          stroke-width="5"></path></svg>
 
 
         <svg 
         className="group-hover:scale-125 
         duration-200 absolute 
         -bottom-0.5 
         -right-20 
         w-48 h-48 
         z-10 -my-2  
         fill-gray-50 
         stroke-sky-700" 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 64 64">
          <path 
          data-name="layer1" 
          d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" 
          stroke-miterlimit="10" 
          stroke-width="2">
 
           </path></svg>
 
     </div>
 
    </div>
 
     
 
 
     {/*
 
     {testimonials.map((testimonial, index) => (
 
      <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
 
     ))}
 
     */}
 
    </div>
 
      
        
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
