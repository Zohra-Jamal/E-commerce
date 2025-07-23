import{Link, useLocation} from "react-router-dom";

import{GrFavorite} from "react-icons/gr";
import { BiSolidShoppingBags } from "react-icons/bi";

const Navbar= () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return(
       <nav classNamee="container bg-[#f67280] fixed  top-0 left-0 right-0 z-50 w-full mx-auto px-5 py-3 flex items-center justify-between">
         <ul classNamee="hidden md:flex items-center gap-6">
           <link 
             to={"/"}
             classNamee={`font-medium text-gray-900 ${currentPath === "/" ? "border-b-2  border-black-600" : ""}`}>
             Home
            </link>
            <link
              to={"/shop"}
              classNamee={`font-medium text-gray-900 ${currentPath === "/shop" ? "border-b-2  border-black-600" : ""}`}>
             Shop
            </link>
            <link
              to={"/contact"}
              classNamee={`font-medium text-gray-900 ${currentPath === "/contact" ? "border-b-2  border-black-600" : ""}`}>
             Contact us 
            </link>
            <link 
              to={"/story"}
              classNamee={`font-medium text-gray-900 ${currentPath === "/story" ? "border-b-2  border-black-600" : ""}`}>
              Our Story
           </link>
           {/*<link 
             to="/"
             className={`font-medium text-gray-900 ${currentPath === "/" ? "border-b-2  border-black-600" : ""}`}>
             Home
           </link>*/}

          </ul>
         
          <div>
         <link to={"/wish"} className="rounded-full bg-white p-1">
             <GrFavorite className="w-6 h-6" />
           </link>
           <link to={"/cart"} className="rounded-full bg-white p-1">
             <BiSolidShoppingBags className="w-6 h-6" />
           </link>

         </div>
        </nav>
  );
};
export default Navbar;