import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";
import ParticlesBg from "particles-bg";
// import "./style.css";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

  const handleData = (e) => {
    e.preventDefault();
    const item = e.target;
    const image = item.image.value;
    const item_name = item.item_name.value;
    const subcategory_name = item.subcategory_name.value;
    const short_description = item.short_description.value;
    const price = item.price.value;
    const rating = item.rating.value;
    const customization = item.customization.value;
    const processing_time = item.processing_time.value;
    const stockStatus = item.stockStatus.value;
    const user_name = user.displayName;
    const user_email = user.email;

    const result = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      user_name,
      user_email
    };

    fetch('https://art-and-craft-server-eta.vercel.app/artCraft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          swal({
            title: "Good job!",
            text: "You successfully added!",
            icon: "success",
            button: "Done!",
          }).then(() => {
            e.target.reset();
          });
        }
      });
  };

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }

  return (
    <div className="mt-32">
      <Helmet>
        <title>Add Craft Item</title>
      </Helmet>
      <h1 className="font-bold text-4xl md:text-5xl text-center pb-4">Add Your Craft Item</h1>
      <form onSubmit={handleData} className="font-[sans-serif] m-6 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-10 mt-6">
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Photo URL</label>
            <input type="text" name="image" placeholder="Enter photo url" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Item Name</label>
            <input type="text" name="item_name" placeholder="Enter item name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">SubCategory Name</label>
            <select name="subcategory_name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none">
              <option value="">Select an option</option>
              <option value="Card Making">Card Making</option>
              <option value="Scrapbooking">Scrapbooking</option>
              <option value="Paper Quilling & Origami">Paper Quilling & Origami</option>
              <option value="Glass Painting">Glass Painting</option>
              <option value="Lampworking">Lampworking</option>
              <option value="Glass Dying & Staining">Glass Dying & Staining</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Stock</label>
            <select name="stockStatus" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none">
              <option value="">Select an option</option>
              <option value="Made to Order">Made to Order</option>
              <option value="In Stock">In Stock</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Price</label>
            <input type="number" name="price" placeholder="Enter price $" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Rating</label>
            <input type="number" name="rating" placeholder="Enter rating number" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Customization</label>
            <select name="customization" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none">
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Processing Time</label>
            <input type="text" name="processing_time" placeholder="Enter processing time" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          </div>
        </div>
        <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">User name</label>
          <input type="text" name="user_name" placeholder="Enter name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>
        <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Email</label>
          <input type="email" name="user_email" placeholder="Enter your mail" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>
        <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Description</label>
          <input type="text" name="short_description" placeholder="write short description" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>
        <input type="submit" value="Submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600" />
      </form>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
};

export default AddCraftItem;