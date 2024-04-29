import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";


const AddCraftItem = () => {
    const {user}  = useContext(AuthContext)
    console.log(user);
    const handleData = e => {
        e.preventDefault()
        const item =e.target;
        const image = item.image.value;
        const item_name =item.item_name.value;
        const subcategory_name =item.subcategory_name.value;
        const short_description =item.short_description.value;
        const price = item.price.value;
        const rating = item.rating.value;
        const customization=item.customization.value;
        const processing_time =item.processing_time.value;
        const stockStatus = item.stockStatus.value;
        const user_name=user.displayName
        ;
        const user_email=user.email;
        const result={image,item_name,subcategory_name,short_description,price,rating,customization,processing_time,stockStatus,user_name,user_email}
        console.log(result);
        fetch('http://localhost:5000/artCraft',{
            method:'POST',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(result)
        })
        .then(res => res.json())
        .then(data => {
            // form.reset()
            console.log(data);
            if (data.acknowledged) {
                swal({
                  title: "Good job!",
                  text: "You successfully added!",
                  icon: "success",
                  button: "Done!",
                })
                
               
                
            }
            
        })
    }
    return (
        <div className="mt-32">
              <Helmet>
    <title>addcrafitem</title>
  </Helmet>
            <h1 className="font-bold text-4xl md:text-5xl  text-center pb-4">Add Your data</h1>
              <form onSubmit={handleData} className="font-[sans-serif] m-6 max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-10 mt-6">
      <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Photo URL</label>
          <input type="text" name="image" placeholder="Enter photo url" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        {/* Remaining input fields and buttons */}
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Item Name</label>
          <input type="text" name="item_name" placeholder="Enter item name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
      </div>

      {/*  */}

      <div className="grid sm:grid-cols-2 gap-10 mt-10">
      <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">SubCategory Name</label>

          <select name="subcategory_name"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          >
            <option value="">Select an option</option>
            <option value="Card Making ">Card Making</option>
            <option value="Scrapbooking">Scrapbooking</option>
            <option value="Paper Quilling & origami">Paper Quilling & origami</option>
            <option value="Glass Painting">Glass Painting</option>
            <option value="Lampworking">Lampworking</option>
            <option value="Glass Dying & Staining">Glass Dying & Staining</option>
            {/* Add more options as needed */}

          </select>
          {/* <input type="text" placeholder="Enter first name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" /> */}
        
        </div>

          {/* Remaining input fields and buttons */}
          <div className="relative flex items-center ">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Stock</label>
          <select name="stockStatus"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          >
            <option value="">Select an option</option>
            <option value="Made to Order">Made to Order</option>
            <option value="In Stock">In Stock</option>
            {/* Add more options as needed */}

          </select>
          {/* <input type="hidden" name="item_name" value="$( '#select option:selected' ).val()"></input> */}



          {/* <input type="text" name="stock" placeholder="Enter first name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" /> */}
          
        </div>
        
      </div>

    {/*  */}
    <div className="grid sm:grid-cols-2 gap-10 mt-10">
      <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Price</label>
          <input type="number" name="price" placeholder="Enter price $" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        {/* Remaining input fields and buttons */}
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Rating</label>
          <input type="number" name="rating" placeholder="Enter rating number" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
         
        </div>
      </div>
    {/*  */}

    {/*  */}
    <div className="grid sm:grid-cols-2 gap-10 mt-10">
      <div className="relative flex items-center">
      <select name="customization"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>
            {/* Add more options as needed */}

          </select>
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Customization</label>
          {/* <input type="text" placeholder="Enter first name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" /> */}
          
        </div>
        {/* Remaining input fields and buttons */}
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Processing Time</label>
          <input type="text" name="processing_time" placeholder="Enter processing time" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
      </div>
    {/*  */}

    {/*  */}
    
    {/*  */}
    {/*  */}
    <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">User name</label>
          <input type="text" name="user_name" placeholder="Enter name" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
    {/*  */}
    {/*  */}
    <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Email</label>
          <input type="email"  name="user_email" placeholder="Enter your mail" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
    {/*  */}
    <div className="relative flex items-center mt-10">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Description</label>
          <input type="text" name="short_description" placeholder="write short description" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
      <input type="submit" value="Submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600" />
    </form>
        </div>
    );
};

export default AddCraftItem;