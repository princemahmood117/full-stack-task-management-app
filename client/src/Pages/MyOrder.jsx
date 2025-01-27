import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Auth/AuthProvider";
import { Triangle } from "react-loader-spinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyOrder = () => {
  const { user, loading } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL}/my-order/${user?.email}`
    );
    setOrder(data);
    // getData()
    // console.log(object);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_URL}/order/${id}`
      );
      if (data.deletedCount > 0) {
        toast.success("Item deleted successfully");
        getData();
      }
    } catch (error) {
      toast.error(error.message);
    }
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
    <div>
      <Helmet>
        <title>My orders</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3 mt-10">
          <h2 className="text-lg font-medium ">My Orders</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {order.length} Orders
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-500  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                      >
                        Status
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right ">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 ">
                    {order.map((food) => (
                      <tr key={food._id}>
                        <td className="px-4 py-4 text-sm   whitespace-nowrap font-[roboto]">
                          {food.name}
                        </td>
  
                        <td className="px-4 py-4 text-sm font-[roboto] whitespace-nowrap">
                          ${food.price}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p className="font-[roboto]">
                              {food.category}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              food.status === "Pending" &&
                              "bg-yellow-100/60 text-yellow-500"
                            } ${
                              food.status === "In Progress" &&
                              "bg-blue-100/60 text-blue-500"
                            } 
                          ${
                            food.status === "Delivered" &&
                            "bg-emerald-100/60 text-emerald-500"
                          } 
                          
                          ${
                            food.status === "Rejected" &&
                            "bg-red-100/60 text-red-500"
                          }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                food.status === "Pending" && "bg-yellow-500"
                              } ${
                                food.status === "In Progress" && "bg-blue-500"
                              } ${
                                food.status === "Complete" && "bg-green-500"
                              } ${
                                food.status === "Complete" && "bg-green-500"
                              } ${food.status === "Rejected" && "bg-red-500"} `}
                            ></span>
                            <h2 className="text-sm font-normal ">
                              {food.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(food._id)}
                            title="Delete Item"
                            className=" transition-colors cursor-pointer duration-200 hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrder;
