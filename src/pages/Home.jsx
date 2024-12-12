import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const role="lab";
  return (
    <div className="min-h-screen p-16">
      {
        role==="doctor"?  <>
        <div className="flex gap-4 mb-14 ">
          <img
            src="https://th.bing.com/th/id/R.2dccd776b3244753340c0d10e9d89e8d?rik=uegYhAEwMjgYlw&pid=ImgRaw&r=0"
            className="h-44 w-44 rounded-full object-cover"
            alt=""
          />
          <p className="text-6xl font-bold tracking-wider text-gray-600">
            Welcome <br /> Dr.Sudip Niraula
          </p>
        </div>
        <div className=" flex  justify-between items-center mb-10 w-[75%] mx-auto">
          <p className="text-2xl font-semibold text-gray-600 ">
            Patients report to be reviewed:
          </p>
          <form>
            <input
              type="text"
              name=""
              placeholder="Search Patient"
              className="border border-black px-4 py-2 text-xl rounded-full "
              id=""
            />
          </form>
        </div>
     
  
     {/* table */}
        <div className=" mx-auto max-w-6xl sm:rounded-lg mt-10 border border-gray-600 p-5">
          <table className="w-full text-center text-gray-600  font-serif">
            <thead className="text-xl">
              <tr>
                <th scope="col" className="px-6 py-2 ">
                  Name
                </th>
                <th scope="col" className="px-6 ">
                  Id
                </th>
                <th scope="col" className="px-6  ">
                  Date
                </th>
              
                
                <th scope="col" className="px-6  ">
                  
                </th>
              </tr>
            </thead>
            <tbody className="text-xl">
            <tr>
                <td className="px-6 py-2 ">Saurab Prasai</td>
                <td className="px-6 py-2  ">23929</td>
                <td className="px-6 py-2 ">2024-12-03</td>
                <td className="px-6 py-2  flex flex-row gap-x-4 justify-center">
                  <Link to={`/patient/${23929}`}
                   
                    className={"cursor-pointer text-blue-600"}
                  >
                    View Details
                  </Link>
                
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 ">Saurab Prasai</td>
                <td className="px-6 py-2  ">23929</td>
                <td className="px-6 py-2 ">2024-12-03</td>
                <td className="px-6 py-2  flex flex-row gap-x-4 justify-center">
                  <Link to={`/patient/${23929}`}
                   
                    className={"cursor-pointer text-blue-600"}
                  >
                    View Details
                  </Link>
                
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 ">Saurab Prasai</td>
                <td className="px-6 py-2  ">23929</td>
                <td className="px-6 py-2 ">2024-12-03</td>
                <td className="px-6 py-2  flex flex-row gap-x-4 justify-center">
                  <Link to={`/patient/${23929}`}
                   
                    className={"cursor-pointer text-blue-600"}
                  >
                    View Details
                  </Link>
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>:<>
        <div className="flex gap-4 mb-14 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2_PB538iK3qB7vzMv-NZq8GL7brl3LxjCQ&s"
            className="h-44 w-44 rounded-full object-cover"
            alt=""
          />
          <p className="text-6xl font-bold tracking-wider text-gray-600">
            Welcome <br /> Mrs.Archa Chhetri
          </p>
          </div>

          <div className="flex items-center justify-center">
            <Link to={'/report-entry'} className="py-2 px-4 rounded-lg text-3xl bg-blue-700 text-white font-semibold ">Perform Report Entry</Link>
          </div>

        </>
      }
    </div>
  );
};

export default Home;
