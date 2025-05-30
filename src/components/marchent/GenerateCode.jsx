import { useState } from "react";
import generateCode from "../../api/generatecode";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { TbClockHour9 } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import "./../../input.css";

const GenerateCode = ({ closeSidebar }) => {
  const [merchant, setMerchant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [lifespan, setLifespan] = useState("");
  const [batchName, setBatchName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // const currentDate = new Date(); // Get the current date

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      merchant,
      quantity: parseInt(quantity),
      lifespan,
      batchName,
    };
    const res = await generateCode(data);
    // console.log(res);
    if (res.code === 201) {
      closeSidebar();
      setMerchant("");
      setQuantity(1);
      setLifespan("");
    }
  };

  return (
    <div className="flex bg-secondary justify-center items-center h-screen overflow-y-auto py-5 relative">
      <div
        className="h-full flex justify-center flex-col
       px-8 rounded-lg w-96 bg-secondary"
      >
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold mb-5">Create Piper Accounts</p>
        </div>
        <button className="absolute top-0 end-0 p-2" onClick={closeSidebar}>
          <IoClose className="text-2xl" />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="merchant"
            >
              Batch Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdOutlineCalendarMonth className="text-2xl" />
              </div>
              <input
                type="text"
                id="input-group-1"
                value={batchName}
                autoComplete="off"
                onChange={(e) => setBatchName(e.target.value)}
                className="bg-black border border-gray-300 text-white-100 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="batch 1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="merchant"
            >
              Merchant Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaRegUserCircle className="text-2xl" />
              </div>
              <input
                type="text"
                value={merchant}
                autoComplete="off"
                onChange={(e) => setMerchant(e.target.value)}
                id="input-group-1"
                className="bg-black border border-gray-300 text-white-100 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="merchant name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="quantity"
            >
              Account Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <LuTicket className="text-2xl" />
              </div>
              <input
                type="number"
                value={quantity}
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                id="input-group-1"
                className="no-spinner bg-black border border-gray-300 text-white-100 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-5 py-2.5"
                placeholder="Add Quantity"
              />
            </div>
            <div
              className={
                quantity > 100
                  ? "text-expired text-md flex gap-2 mt-1 "
                  : "text-md flex gap-2 mt-1 "
              }
            >
              <CiCircleInfo className="text-2xl" />
              <p>The Maximum numbers for creating account is 100</p>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="lifespan"
            >
              Lifespan
            </label>
            <div className="relative mb-6 bg-secondary">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white w-full border border-gray-300 bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                <TbClockHour9 className="text-2xl" />
                <p className="text-right w-full">{lifespan}</p>
              </button>

              {isOpen && (
                <div
                  id="dropdown"
                  className="z-10 bg-black divide-y bg-black border border-white rounded-md shadow w-full absolute bottom-full "
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
                    <li
                      onClick={() => {
                        setLifespan("1month");
                        toggleDropdown();
                      }}
                      className="hover:text-primary cursor-pointer"
                    >
                      <p className="font-medium px-4 py-2">1 Month</p>
                    </li>
                    <li
                      onClick={() => {
                        setLifespan("3months");
                        toggleDropdown();
                      }}
                      className="hover:text-primary cursor-pointer"
                    >
                      <p className="font-medium px-4 py-2">3 Months</p>
                    </li>
                    <li
                      onClick={() => {
                        setLifespan("6months");
                        toggleDropdown();
                      }}
                      className="hover:text-primary cursor-pointer"
                    >
                      <p className="font-medium px-4 py-2">6 Months</p>
                    </li>
                    <li
                      onClick={() => {
                        setLifespan("12year");
                        toggleDropdown();
                      }}
                      className="hover:text-primary cursor-pointer"
                    >
                      <p className="font-medium px-4 py-2">12 Months</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-black p-2 rounded-md
             transition duration-200 hover:text-primary hover:bg-black hover:border hover:border-primary"
          >
            Generate Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateCode;
