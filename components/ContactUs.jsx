import Image from "next/image";
import { inputcontact } from "./common/Helper";
import { useState } from "react";

const ContactUs = () => {

       const [isOpen, setIsOpen] = useState(false);
       const [selectedOption, setSelectedOption] = useState(
         "Service Of Interest *"
       );

       const options = [
         "Web Development",
         "Mobile App Development",
         "UI/UX Design",
         "Digital Marketing",
       ];

       const toggleDropdown = () => {
         setIsOpen(!isOpen);
       };

       const handleOptionSelect = (option) => {
         setSelectedOption(option);
         setIsOpen(false);
       };

  return (
    <div className=" md:pt-[60px] sm:pt-10  pt-6   pb-[25px] relative z-20 sm:px-4 px-2 ">
      <div className="max-w-[1320px] w-full mx-auto lg:px-[12px] ">
        <div className="lg:pb-[57.18px] md:pb-[45px] sm:pb-[35px] pb-[25px] ">
          <p className="text-[#1777D0]  font-poppins  lg:text-5xl md:text-4xl  sm:text-2xl text-xl  font-bold  leading-[120%]  !z-50 sm:mb-[12px] mb-[8px]  ">
            Contact Us
          </p>

          <Image src="/img/line.png" width="218" height="7" alt="underline" />
        </div>

        <div className=" lg:gap-[24px] md:gap-[18px] gap-[14px]  grid lg:grid-cols-2 grid-cols-1 items-start  ">
          <div className="flex flex-col lg:gap-[23px] md:gap-[18px] sm:gap-[14px]  ">
            <p className="text-[#595959]  font-poppins lg:text-[36px] md:text-[26px] sm:text-xl text-lg font-bold  !leading-[150%]  ">
              Chat with our support team to learn more
            </p>

            <p className="max-w-[583px] w-full text-[#7B8A93] md:text-lg font-poppins sm:text-base text-sm  font-normal !leading-[200%]  ">
              If you have any questions regarding our products, need a quote, or
              seek further information, please feel free to get in touch. Our
              team is dedicated to listening to your needs and collaborating
              with you to ensure a seamless experience. You can reach via
              filling your details in here or by logging on to our newly
              launching app. Our courteous representatives are standing by,
              ready to provide the assistance you require We sincerely value
              your trust and the chance to serve you.
            </p>
          </div>

          <form className="w-[100%] ">
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
                type="email"
                placeholder=""
                class="!w-[100%] border-b-[1px] border-[#000]   md:pt-[17px] pt-3 md:pb-[13px] pb-2  h-[46px] ms:px-[10px] p-2  focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit  lg:mb-[25px] sm:mb-[15px] mb-[10px]  "
              />
              <label
                for="username"
                class="absolute text-xs left-2 text-[#9CA3AF] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
              >
                Email *
              </label>
            </div>

            <div className="relative w-full mx-auto">
              {/* Dropdown Button */}
              <div
                onClick={toggleDropdown}
                className="flex justify-between items-center border-b-[1px] border-[#000] cursor-pointer md:pt-[17px] pt-3 md:pb-[13px] pb-2 h-[46px] px-2 focus-within:border-blue-700 transition-colors   lg:mb-[25px] sm:mb-[15px] mb-[10px] "
              >
                <span className="text-sm text-[#9CA3AF] peer-placeholder-shown:text-[#000]">
                  {selectedOption}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="absolute left-0 top-10 right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md z-10">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className="px-4 py-2 text-sm hover:bg-blue-700 hover:text-white cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div class="relative">
              <input
                type="email"
                placeholder=""
                class="!w-[100%] border-b-[1px] border-[#000]   md:pt-[17px] pt-3 md:pb-[13px] pb-2  h-[46px] ms:px-[10px] p-2  focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit  lg:mb-[25px] sm:mb-[15px] mb-[10px]  "
              />
              <label
                for="username"
                class="absolute text-xs left-2 text-[#9CA3AF] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
              >
                Subject *
              </label>
            </div>

            <textarea
              className="w-[100%] bg-transparent outline-none border-b-[1px] !text-black border-[#000] resize-none md:h-[72px] h-14 py-[12px] sm:px-[10px] px-2  text-[17px] font-normal leading-[150%] lg:mb-[30px] md:mb-[30px] mb-[15px]  "
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

      <p className=" absolute -z-10 text-[#E9EBEC] font-poppins top-0 overflow-hidden  whitespace-nowrap -ml-9 text-center w-[99%] xl:text-[110px] lg:text-[80px] text-[60px]   font-bold leading-[150px] tracking-[1px] ">
        Contact Us
      </p>

      <div className="p-4 max-w-md mx-auto"></div>
    </div>
  );
};

export default ContactUs;
