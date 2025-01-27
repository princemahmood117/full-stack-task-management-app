import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";;
// import useMenu from "../hooks/useMenu";
import MenuCard from "./MenuCard";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../Components/Auth/AuthProvider";

const Menu = () => {
  // const [menu] = useMenu();

  const [menu,setMenu] = useState([])

  const {loading} = useContext(AuthContext)

  useEffect(()=> {
    const getMenu = async() =>{
      const {data} = await axios.get(`${import.meta.env.VITE_URL}/menu`)
      setMenu(data)
    }
    getMenu()
  },[])

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

    if (loading) {
      return (
        <div className="flex justify-center items-center">
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#e74c3c"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      );
    }
  return (
    <div className="ml-6 lg:ml-14">
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <div>
        <section className="mt-4">
          
          <h1 className="text-center md:text-4xl text-2xl font-[arial] font-semibold my-2">
            Our Menu
          </h1>
        </section>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-2 cursor-pointer mt-4">
          <AnimatePresence>
            {menu.map((item) => (
              <motion.div
                key={item._id}
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <MenuCard item={item}></MenuCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>        
      </div>
    </div>
  );
};

export default Menu;
