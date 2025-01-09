import Image from "next/image";
import React, { useState } from "react";
import { inputform } from "./common/Helper";

const Franchise = () => {
  const [float, setFloat] = useState(null);
  const [inputValue, setInputValue] = useState(""); // State for input value
  const stateToCityMap = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    Delhi: ["New Delhi", "Dwarka", "Saket"],
  };

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(stateToCityMap[state] || []);
  };

  return (
    <div className="bg-[rgba(23,119,208,0.10)] md:pt-[52px] pt-5 relative  sm:px-4 px-2 z-10 ">
      <div className="max-w-[1349px] w-full mx-auto  ">
        <div className="lg:pb-[57.18px] md:pb-[45px] sm:pb-[35px] pb-[25px]  -z-10">
          <p className="text-[#1777D0]  font-poppins  lg:text-5xl md:text-4xl  sm:text-2xl text-xl  font-bold  leading-[120%]  z-20 sm:mb-[12px] mb-[8px]  ">
            Franchise Relation
          </p>

          <Image src="/img/line.png" width="218" height="7" alt="underline" />

          <p className="text-[#595959]  font-poppins lg:text-[26px] md:text-[22px] sm:text-lg text-sm md:font-bold  font-medium leading-[120%]  lg:mt-[46.14px] md:mt-[35px] sm:mt-[25px] mt-[15px] ">
            Looking to increase utilization of your reefer vehicles or cold
            store? Contact us to earn more. If you are looking for better
            investment return, contact us to know more.
          </p>
        </div>

        <div className=" lg:gap-[24px] md:gap-[18px] gap-[14px] max-lg:items-center grid lg:grid-cols-2 grid-cols-1  pb-[30px]  ">
          <Image
            src="/img/franchise-relation.png"
            width="636"
            height="530"
            alt="franchise"
            className=" max-h-[530px] max-lg:max-h-[250px] h-full max-lg:max-w-[536px] w-full mx-auto max-sm:h-[200px]  "
          />

          <form className=" w-[100%]">
            <div class="relative">
              <input
                type="text"
                placeholder=""
                class="!w-[100%] border-b-[1px] border-[#000] md:pt-[17px] pt-3 md:pb-[13px] pb-2  h-[46px] ms:px-[10px] p-2 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit   lg:mb-[25px] sm:mb-[15px] mb-[10px]  "
              />
              <label
                for="username"
                class="absolute text-xs left-2 text-[#9CA3AF] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
              >
                Name *
              </label>
            </div>

            <div class="relative">
              <input
                type="number"
                placeholder=""
                class="!w-[100%] border-b-[1px] border-[#000]   md:pt-[17px] pt-3 md:pb-[13px] pb-2  h-[46px] ms:px-[10px] p-2  focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit  lg:mb-[25px] sm:mb-[15px] mb-[10px]  "
              />
              <label
                for="username"
                class="absolute text-xs left-2 text-[#9CA3AF] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
              >
                Contact number *
              </label>
            </div>

            <div className="w-full mx-auto">
              {/* State Dropdown */}
              <div className="relative">
                <select
                  id="state"
                  onChange={handleStateChange}
                  value={selectedState}
                  className="w-full border-b-[1px] border-[#000] text-[#9CA3AF] cursor-pointer pt-3 pb-2 px-2 bg-transparent text-sm peer focus:border-blue-700 transition-colors focus:outline-none  lg:mb-[25px] sm:mb-[15px] mb-[10px]  "
                >
                  <option value="" disabled>
                    Select State *
                  </option>
                  {Object.keys(stateToCityMap).map((state) => (
                    <option key={state} value={state} className="text-black">
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Dropdown */}
              <div className="relative">
                <select
                  id="city"
                  className={`w-full border-b-[1px] border-[#000] text-[#9CA3AF] cursor-pointer pt-3 pb-2 px-2 bg-transparent text-sm peer focus:border-blue-700 transition-colors focus:outline-none  lg:mb-[25px] sm:mb-[15px] mb-[10px]  `}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city} className="text-black">
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              className="w-[100%] bg-transparent outline-none border-b-[1px] !text-black border-[#000] resize-none md:h-[72px] h-14 py-[12px] sm:px-[10px] px-2  text-[17px] font-normal leading-[150%] lg:mb-[37px] md:mb-[30px] mb-[15px]  "
              placeholder="Message *"
              name=""
              id=""
            ></textarea>

            <button className="bg-[#1777D0] rounded-md  opacity-[0.5] text-white font-Poppins sm:text-[17px] text-sm font-bold leading-[150%] lg:h-[54px] md:h-[45px] h-[35px]  px-[10px] w-[100%]">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>

      <p className=" absolute -z-20 text-white font-poppins top-0  max-md:hidden text-center w-[99%] xl:text-[110px] lg:text-[80px] text-[60px]   font-bold leading-[150px] tracking-[1px] ">
        Franchise Relation
      </p>
    </div>
  );
};

export default Franchise;
