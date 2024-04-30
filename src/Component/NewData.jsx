import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const NewData = () => {
    // const data = useLoaderData()
    // console.log(data);


    const [dataa, setDataa] = useState([]);
  

  useEffect(() => {
    fetch(`https://art-and-craft-server-eta.vercel.app/subCat`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataa(data);
        
      });
  }, []);

    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          

            {
                dataa.map(e=><Card key={e._id} e={e}></Card>)
            }
            


        </div>
    );
};

export default NewData;