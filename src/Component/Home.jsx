import { Helmet } from "react-helmet-async";
import RecentNews from "./RecentNews";
import Slider from "./Slider";
import WebsiteInfo from "./WebsiteInfo";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ArtCard from "./ArtCard";

const Home = () => {
    const artCrafts =useLoaderData()
    const [art,setArt]=useState(artCrafts)
    console.log(art);
    return (
        <div>
             <Helmet>
    <title>Home</title>
  </Helmet>
              <div className="mt-20">
            <Slider></Slider>

            </div>

  <div className="mt-10">
  <h1 className="text-center font-bold text-5xl pb-5">Art&Crafts</h1>
  <p className="text-center md:w-3/4 m-auto pt-4 pb-6">
Art & Crafts is an expansive domain encompassing a wide range of creative activities, from traditional handicrafts to contemporary art forms. It involves the use of various materials, techniques, and skills to produce visually appealing and meaningful works</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {
      //  <h1> card : {artCrafts.length}</h1>
       art.map(artcard => <ArtCard key={art._id} art={art} artcard={artcard} setArt={setArt}></ArtCard>)
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