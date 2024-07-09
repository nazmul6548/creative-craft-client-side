import { Helmet } from "react-helmet-async";
import RecentNews from "./RecentNews";
import Slider from "./Slider";
import WebsiteInfo from "./WebsiteInfo";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ArtCard from "./ArtCard";
import { Typewriter } from 'react-simple-typewriter';
import NewData from "./NewData";
import { motion, useScroll } from "framer-motion"
// import './Home.css'
const Home = () => {
    const artCrafts =useLoaderData()
    const [art,setArt]=useState(artCrafts)
    console.log(art);

    const { scrollYProgress } = useScroll()
    
     
    return (
        <div>
        
             <Helmet>
    <title>Home</title>
  </Helmet>
              <div className="mt-20">
            <Slider></Slider>

            </div>
          


  <div className="mt-10">
  <h1 className="text-center font-bold text-5xl pb-5"><Typewriter words={['Crafts Items']} /></h1>
  <p className="text-center md:w-3/4 m-auto pt-4 pb-6">Art & Crafts is an expansive domain encompassing a wide range of creative activities, from traditional handicrafts to contemporary art forms. It involves the use of various materials, techniques, and skills to produce visually appealing and meaningful works</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {
      //  <h1> card : {artCrafts.length}</h1>
       art.slice(0,6).map(artcard => <ArtCard key={art._id} art={art} artcard={artcard} setArt={setArt}></ArtCard>)
     }
    </div>
  </div>


            <div className="text-center flex justify-center">
            <RecentNews></RecentNews>
            </div>
            <div>
            <h1 className="text-4xl md:text-5xl text-center pb-5 font-bold">Collection Data</h1>
            <p className="text-center w-full md:w-3/4 m-auto">Explore a world of creativity and craftsmanship with ours diverse collection of art and craft items. From handmade jewelry to intricately designed ceramics, our curated selection showcases the talent and passion of artisans from around the globe. </p>
            <NewData></NewData>
            </div>
            <WebsiteInfo></WebsiteInfo>
            {/* <motion.div className="fixed top-0 left-0 right-0 h-4 z-40 bg-blue-500" style={{ scaleX: scrollYProgress }} /> */}
{/*  */}
<div className="fixed  bottom-2 right-4 z-50">
                <svg className="progress-ring" width="50" height="50">
                    <circle
                        className="progress-ring__circle-bg"
                        stroke="lightgray"
                        strokeWidth="4"
                        fill="transparent"
                        r="22"
                        cx="25"
                        cy="25"
                    />
                    <motion.circle
                        className="progress-ring__circle"
                        stroke="red"
                        strokeWidth="6"
                        fill="transparent"
                        r="22"
                        cx="25"
                        cy="25"
                        style={{
                            pathLength: scrollYProgress,
                        }}
                    />
                </svg>
            </div>
{/*  */}
            <ScrollRestoration/>
        </div>
    );
};

export default Home;