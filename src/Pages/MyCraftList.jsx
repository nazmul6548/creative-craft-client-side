import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/AuthProvider";
import MyCardDesign from "../Component/MyCardDesign";
import { Helmet } from "react-helmet-async";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
//   const [short,setShort] = useState();
//   const [value,setvalue] =useState(true)

const [filteredItems, setFilteredItems] = useState([]);
  const [customization, setCustomization] = useState(null);
  console.log(user.email);



  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/artCraft/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);

          console.log(data);
          setFilteredItems(data);
        });
    }
  }, [user]);






const handleFilter = (customization) => {
 
    const filtered = item.filter((items) => items.customization === customization);
    setFilteredItems(filtered);
    setCustomization(customization);
  };

  return (
    <div className="mt-20">
          <Helmet>
    <title>myCraftList</title>
  </Helmet>
      <h1 className="text-center text-5xl font-bold pt-5 pb-5">
        My Art&Crafts
      </h1>

      <div className="flex justify-center items-center">
        {/*  */}
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Customization short by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            

            <li>
              <button onClick={() => handleFilter("yes")}>Yes</button>
            </li>
            <li>
              <button onClick={() => handleFilter("No")}>No</button>
            </li>
            
          </ul>
        </div>
        {/*  */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8  gap-10">
      {
            filteredItems.map(p=><MyCardDesign key={item._id}  item={item} setItem={setItem}  p={p}></MyCardDesign>)
            
        }
      </div>
    </div>
  );
};

export default MyCraftList;
