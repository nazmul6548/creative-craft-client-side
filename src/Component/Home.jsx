import { Helmet } from "react-helmet-async";
import RecentNews from "./RecentNews";
import Slider from "./Slider";
import WebsiteInfo from "./WebsiteInfo";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ArtCard from "./ArtCard";
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
    const artCrafts =useLoaderData()
    const [art,setArt]=useState(artCrafts)
    console.log(art);

        
    const handleType = ( ) => {
        // access word count number
        // console.log("typing...")
    }     

      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
     
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
  <p className="text-center md:w-3/4 m-auto pt-4 pb-6">
  <Typewriter
            words={['Art & Crafts is an expansive domain', 'encompassing a wide range of creative activities, from traditional' ,'handicrafts to contemporary art forms. It involves the use of various materials,' ,'techniques, and skills to produce visually appealing and meaningful works']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            onLoopDone={handleDone}
            onType={handleType}
          /></p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {
      //  <h1> card : {artCrafts.length}</h1>
       art.slice(0,6).map(artcard => <ArtCard key={art._id} art={art} artcard={artcard} setArt={setArt}></ArtCard>)
     }
    </div>
  </div>


            <div className="">
            <RecentNews></RecentNews>
            </div>
            <WebsiteInfo></WebsiteInfo>
            <ScrollRestoration/>
        </div>
    );
};

export default Home;