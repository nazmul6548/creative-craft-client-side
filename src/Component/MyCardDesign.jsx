import swal from "sweetalert";
import { Link, ScrollRestoration } from "react-router-dom";

const MyCardDesign = ({p,item,setItem,setFilteredItems,filteredItems }) => {
    const {_id,image,short_description,stockStatus,customization,rating,price,subcategory_name,item_name}=p
    const handleDelete = _id =>{
        console.log(_id);
    //   
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
           
       
            fetch(`https://art-and-craft-server-eta.vercel.app/artCraft/${_id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
               console.log("delete confirm");
            swal("'WoW' You successfully deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
            
            const reminder =filteredItems.filter(cof=> cof._id !== _id)
            setFilteredItems(reminder);
           
         
           }

        )
        }
        
    }
      );
    // 
    }
    return (
        <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
  <img src={image} className="w-full rounded-lg" />
  <div className="px-4 my-6 text-center">
    <h3 className="text-lg font-semibold">{subcategory_name}</h3>
    <p className="mt-2 text-sm text-gray-400">{short_description}</p>
    
        <div className="text-left mt-5">
        <li>Item name :{item_name}</li>
        <li>Price :{price}</li>
        <li>Rating :{rating}</li>
        <li>customization :{customization}</li>
        <li>Stock :{stockStatus}</li>
        </div>
    
    <Link to={`/updatecraft/${_id}`}>
    <button type="button"
      className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      onClick={() => {}}
    >
      Update
    </button></Link>
    <button onClick={() => handleDelete(_id)} type="button"
      className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      
    >
      Delete
    </button>
  </div>
  <ScrollRestoration/>
</div>

    );
};

export default MyCardDesign;