import {  useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initial visible items
  const [menu] = useMenu()
  const polularMenu = menu.filter(item => item.category === "popular")

  // const [menu, setMenu] = useState([]);
  // Fetch menu data
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  // Handle toggle between "View More" and "Show Less"
  const handleToggle = () => {
    if (visibleCount === 3) {
      setVisibleCount(menu.length); // Show all items
    } else {
      setVisibleCount(3); // Collapse back to 3 items
    }
  };

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className="mt-4">
        <hr className="my-5" />
        <h1 className="text-center md:text-4xl text-2xl font-[arial] font-semibold my-2">
          Popular Menu
        </h1>
      </section>

      {/* Menu items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2 cursor-pointer">
        <AnimatePresence>
          {polularMenu.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item._id}
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MenuItems item={item}></MenuItems>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More / Show Less Button */}
      {menu.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleToggle}
            className="px-5 py-2 text-white rounded-lg bg-gray-800 cursor-pointer"
          >
            {visibleCount === 3 ? "View More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularMenu;




// import { useEffect, useState } from "react";
// import MenuItems from "../MenuItems/MenuItems";

// const PopularMenu = () => {
//   const [menu, setMenu] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(3); // Initial visible items

//   // Fetch menu data
//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const popularItems = data.filter((item) => item.category === "popular");
//         setMenu(popularItems);
//       });
//   }, []);

//   // Handle toggle between "View More" and "Show Less"
//   const handleToggle = () => {
//     if (visibleCount === 3) {
//       setVisibleCount(menu.length); // Show all items
//     } 
//     else {
//       setVisibleCount(3); // Collapse back to 3 items
//     }
//   };

//   return (
//     <div>
    
//       <section className="mt-4">
//       <hr />
//         <h1 className="text-center md:text-4xl text-2xl font-[arial] font-semibold my-2">
//           Popular Menu
//         </h1>
        
//       </section>
      

//       {/* Menu items */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2 cursor-pointer">
//         {
//         menu.slice(0, visibleCount).map((item) => (
//           <MenuItems key={item._id} item={item}></MenuItems>
//         ))
//         }
//       </div>

//       {/* View More / Show Less Button */}
//       {
//         menu.length > 3 && (
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={handleToggle}
//             className="px-5 py-2 text-white rounded-lg bg-gray-800 cursor-pointer"
//           >
//             {visibleCount === 3 ? "View More" : "Show Less"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopularMenu;
