import { useState } from "react";
import Route from "../Route/Route";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 backdrop-blur-xl w-full">
      <div className="text-3xl pl-8 py-5 bg-yellow-400 flex flex-col md:hidden">
        <button className="w-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <HiMenuAlt1 />}
        </button>
      </div>
      <ul
        className={`md:flex lg:flex bg-yellow-400 p-2 pl-6 rounded-xl md:rounded-none
                        ${isOpen ? "top-16" : "-top-96"}
                    shadow-xl z-10 md:w-full w-[300px] absolute left-8 duration-1000 md:static`}
      >
        {routes.map((route) => (
          <Route key={route.id} route={route}></Route>
        ))}
      </ul>
      <h1 className="bg-red-900 shadow-2xl rounded-es-lg rounded-ee-lg text-white p-10 text-center font-bold text-3xl">
        Hello World!
      </h1>
    </nav>
  );
};

export default Navbar;
