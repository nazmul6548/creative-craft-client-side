import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const NewData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

            {
                data.map(e=><Card key={e._id} e={e}></Card>)
            }
            








         
                {/* <div   className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-sans mt-4 mx-auto">
                {
                    data.map(t=>(
                        <div key={t._id} className="mt-12" > 
                <img src={t.image} className="w-full rounded-2xl" alt="Hotel" />
                <div className="p-6">
                  <h3 className="text-3xl text-[#333] font-extrabold">{t.subcategory_Name}</h3>
                  <div className="mt-8 flex items-center">
                    <div className="flex flex-col">
                    <h3 className="text-xl text-[#333] font-bold flex-1">{t.key_elements}</h3>
                    <h3 className="text-md text-[#333]  flex-1 mt-5">{t.origins}</h3>
                    </div>
                    <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="fill-[#333]" viewBox="0 0 64 64">
                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                </div>
                    ))
                }
              </div>
          */}
        </div>
    );
};

export default NewData;