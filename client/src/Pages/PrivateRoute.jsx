import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../Components/Auth/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
        <div className="flex justify-center items-center mt-6">
           
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
  

  if (user) return children;

  return (
    
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>

  ); // কোন পেইজে ঢুকতে চেয়েছি সেটি location.pathname এ থাকবে, যাতে লগ-ইন করার পর সেই পেইজে রি-ডাইরেক্ট করা যায়
};

export default PrivateRoute;
