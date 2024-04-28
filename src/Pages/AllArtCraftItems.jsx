
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const AllArtCraftItems = () => {
    const data =useLoaderData()


    console.log(data);
    return (
        <div className="overflow-x-auto mt-20">
            <h1 className="text-center font-bold text-5xl pt-4 pb-6 text-gray-400"><Typewriter words={['All Item & Craft Items Table']} /></h1>
        <table className="min-w-full bg-white font-[sans-serif]">
            <thead className="bg-gray-700 whitespace-nowrap">
                <tr>
                    <th className="pl-6 w-8">
                        <input id="checkbox" type="checkbox" className="hidden peer" />
                        <label className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                            </svg>
                        </label>
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Subcategory
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Rating
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Details
                    </th>
                </tr>
            </thead>
            {data.map(item => (
                <tbody key={item._id} className="whitespace-nowrap">
                    <tr className="even:bg-blue-50">
                        <td className="pl-6 w-8">
                            <input id="checkbox1" type="checkbox" className="hidden peer" />
                            <label className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                    <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                                </svg>
                            </label>
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {item.item_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {item.subcategory_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {item.price}
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {item.rating}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Link to={`/detailscard/${item._id}`}>
                          <button className="px-2 py-1 text-xs font-semibold leading-tight text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View Details</button>
                          </Link>
                            {/* <button className="px-2 py-1 ml-2 text-xs font-semibold leading-tight text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button> */}
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    </div>
    );
};

export default AllArtCraftItems;