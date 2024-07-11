import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const ArtCard = ({setArt,artcard,art}) => {
    const {price,item_name,image,short_description,_id} =artcard
    return (
        <Fade cascade>
          <div>
            <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
  <div className="flex items-center gap-2 px-6">
    <h3 className="text-2xl text-[#333] font-extrabold flex-1">{item_name}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] shrink-0" viewBox="0 0 64 64">
      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
    </svg>
  </div>
  <img src={image} className="w-full my-6" alt="Backlit Keyboard" />
  <div className="px-6">
    <p className="text-sm text-gray-500">{short_description}</p>
    <div className="mt-10 flex items-center flex-wrap gap-4">
      <h3 className="text-xl text-[#333] font-bold flex-1">${price}</h3>
     <Link to={`detailscard/${_id}`}>
     <button type="button" className="px-6 py-2.5 rounded text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">View Details</button>
     </Link>
    </div>
  </div>
</div>
<ScrollRestoration></ScrollRestoration>
        </div>
        </Fade>
    );
};

export default ArtCard;