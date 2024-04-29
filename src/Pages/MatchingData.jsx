import { Link, useLoaderData } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const MatchingData = () => {

    const data = useLoaderData()
    console.log(data);
    return (
       <div className="mt-20">
        <h1 className="text-center  font-bold pb-3 mt-2 text-4xl md:text-5xl ">Matching All Art&Craft</h1>


<div className="grid grid-cols-1 md:grid-cols-3 ">

            
{
    data.map(i=> (
        <div key={i._id} className="mt-20 min-h-screen">


<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
<img src={i.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
<div className="mt-6 mb-2">
<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
<h2 className="text-xl font-semibold tracking-wide">{i.subcategory_name}</h2>
</div>
<p className="dark:text-gray-800">{i.short_description}</p>
<div>
<li>Price : {i.price}</li>
<li>Rating : {i.rating}</li>
<li>Processing Time : {i. processing_time}</li>
<li>Item Name : {i. item_name}</li>
</div>
<Link to={`/detailscard/${i._id}`}><button className="w-full bg-[#2563eb] py-3 rounded-md hover:bg-[#4074e5]">View Details</button></Link>
</div>
</div>
    ))
}
<ScrollRestoration/>
</div>
       </div>
    );
};

export default MatchingData;