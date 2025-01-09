import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addMonths } from "date-fns";
import "react-datepicker/dist/react-datepicker.css"; // Ensure this CSS file is imported
import Image from "next/image";
import QuantityDrop from "./QuantityDrop";
import ProductDrop from "./ProductDrop";
import { usePathname } from "next/navigation";

const Qutations = () => {
  const [selected, setSelected] = useState(null); // Track selected div
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [textColor, setTextColor] = useState("#7B8A93"); // Default color
  const [isFormValid, setIsFormValid] = useState(false); // To track form validation

  const handleClick = (id) => {
    setSelected(id); // Set the clicked div as selected
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      setShowCalendar(false);
      setTextColor("#000000");
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    console.log("Form validation status:", isFormValid);
  }, [isFormValid]);

  useEffect(() => {
    const isValid =
      pickupLocation.trim() !== "" &&
      dropLocation.trim() !== "" &&
      selected !== null &&
      endDate !== null;

    setIsFormValid(isValid);
  }, [pickupLocation, dropLocation, selected, endDate]);
  console.log("Pickup Location:", pickupLocation);
  console.log("Drop Location:", dropLocation);
  console.log("Selected Vehicle:", selected);
  console.log("End Date:", endDate);

  const pathname = usePathname();

  // Conditional Rendering based on Pathnamedss

  return (
    <div className="max-w-[1050px] xl:max-w-[1320px] bg-white rounded-lg -mt-3 sm:-mt-[23px] w-full py-8 px-3 md:px-[30px] flex flex-col gap-[10px] font-poppins mx-auto">
      <p className="text-black text-lg sm:text-xl font-bold leading-[150%] ">
        {pathname === "/part-load"
          ? "On the part load freight quotations"
          : "On the full truck load freight quotations"}
      </p>
      {/* all input and drop down divs are here */}
      <div className="flex max-md:flex-col items-center gap-8 md:gap-0 pt-[27px] border-t-2 border-[#DEE2E6]">
        <div className="!pl-0 quotationmaindivstyle">
          <p className="text-black font-bold leading-[110%]">
            Location<span className="text-[#F22]">*</span>
          </p>
          <div className="flex gap-[5px] py-[14px] pl-2 xl:pl-5 items-center quotationsdivstyle">
            <Image
              width={24}
              height={24}
              src="/img/locationimg.png"
              alt="location"
            />
            <input
              type="text"
              placeholder="Pickup location*"
              className="quotationsinputstyle"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          <div className="flex gap-[5px] py-[14px] pl-2 xl:pl-5 items-center mt-1 quotationsdivstyle">
            <Image
              width={24}
              height={24}
              src="/img/locationimg.png"
              alt="location"
            />
            <input
              type="text"
              placeholder="Drop location*"
              className="quotationsinputstyle"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
            />
          </div>
        </div>
        {/* select vehicle type div */}
        <div className="quotationmaindivstyle">
          <p className="text-black font-bold leading-[110%]">
            Select vehicle type <span className="text-[#F22]">*</span>
          </p>

          <div className="flex gap-7 sm:gap-14 md:gap-3 lg:gap-6 md:justify-center">
            <div
              className={`group max-md:w-full flex flex-col bg-[#EFF7FD] pt-6 md:pt-[7px] pb-[15px] pl-1 xl:pl-[31px] pr-1 xl:pr-[22.85px] rounded-lg items-center 
    ${
      selected === 1
        ? "bg-[RGB(56_182_255)] text-white"
        : "hover:bg-[RGB(56_182_255)]"
    }`}
              onClick={() => handleClick(1)}
            >
              <svg
                className="w-[100px] md:w-[40px] xl:w-[61px] h-[50px] xl:h-[61px]"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <path
                  d="M40.25 7.69H2.75V40.19H40.25V7.69Z"
                  stroke={selected === 1 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.25 20.19H50.25L57.75 27.69V40.19H40.25V20.19Z"
                  stroke={selected === 1 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 52.69C17.4518 52.69 20.25 49.8918 20.25 46.44C20.25 42.9882 17.4518 40.19 14 40.19C10.5482 40.19 7.75 42.9882 7.75 46.44C7.75 49.8918 10.5482 52.69 14 52.69Z"
                  stroke={selected === 1 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.5 52.69C49.9518 52.69 52.75 49.8918 52.75 46.44C52.75 42.9882 49.9518 40.19 46.5 40.19C43.0482 40.19 40.25 42.9882 40.25 46.44C40.25 49.8918 43.0482 52.69 46.5 52.69Z"
                  stroke={selected === 1 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <mask
                  id="mask0_9_927"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="12"
                  width="23"
                  height="23"
                >
                  <path
                    d="M31.1323 12.9841H9.95581V34.1606H31.1323V12.9841Z"
                    fill={selected === 1 ? "#FFFFFF" : "#38B6FF"}
                  />
                </mask>
                <g mask="url(#mask0_9_927)">
                  <path
                    d="M20.1139 13.1825C19.9815 13.3149 19.8823 14.0097 19.8823 14.7046V15.995L18.9227 15.3333C18.3933 14.9362 17.7315 14.6384 17.4337 14.6384C16.4411 14.6384 16.9374 15.7965 18.3933 16.8884L19.8823 17.9803V20.1311C19.8823 22.3149 19.8823 22.3149 19.1543 21.8517C18.7242 21.587 17.8639 21.0575 17.2021 20.6605C16.0771 19.9987 15.9778 19.7671 15.8455 18.1127C15.68 16.0943 15.5146 15.7965 14.7536 16.0612C14.4227 16.1936 14.2573 16.723 14.2573 17.5833V18.9068L13.1323 18.245C12.1396 17.6495 12.0073 17.6495 11.5771 18.1458C11.2131 18.609 11.2462 18.7745 11.9411 19.3039C12.4043 19.6347 12.8675 19.9325 13.033 19.9325C13.6286 19.9325 13.1653 20.5612 12.272 20.9252C11.6764 21.1899 11.2793 21.587 11.2793 21.9509C11.2793 22.745 11.8418 22.745 13.7278 21.9178L15.2499 21.2892L17.0698 22.348C18.0624 22.9436 18.8896 23.473 18.8896 23.5722C18.8896 23.6715 18.0624 24.2009 17.0698 24.7965L15.2499 25.8553L13.7278 25.2267C11.8418 24.3995 11.2793 24.3995 11.2793 25.1936C11.2793 25.5575 11.6764 25.9546 12.272 26.2193C13.1653 26.5833 13.6286 27.212 13.033 27.212C12.8675 27.212 12.4043 27.5097 11.9411 27.8406C11.2462 28.37 11.2131 28.5355 11.5771 28.9987C12.0073 29.495 12.1396 29.495 13.1323 28.8995L14.2573 28.2377V29.5612C14.2573 30.4215 14.4227 30.9509 14.7536 31.0833C15.5146 31.348 15.68 31.0502 15.8455 29.0318C15.9778 27.3774 16.0771 27.1458 17.2021 26.484C17.8639 26.087 18.7242 25.5575 19.1543 25.2928C19.8823 24.8296 19.8823 24.8296 19.8823 27.0134V29.1642L18.3933 30.2561C16.9374 31.348 16.4411 32.5061 17.4337 32.5061C17.7315 32.5061 18.3933 32.2083 18.8896 31.8443L19.8492 31.1495L19.9484 32.5722C20.0808 34.5575 21.0073 34.5575 21.1396 32.5722L21.2389 31.1495L22.1984 31.8443C22.6948 32.2083 23.3565 32.5061 23.6543 32.5061C24.647 32.5061 24.1506 31.348 22.6948 30.2561L21.2058 29.1642V27.0134V24.8296L22.4631 25.5906C25.2095 27.245 25.1764 27.245 25.1764 28.5024C25.1764 30.3222 25.5073 31.2156 26.1359 31.1164C26.533 31.0171 26.6653 30.62 26.6653 29.5943C26.6653 28.8333 26.6984 28.2046 26.7315 28.2046C26.7646 28.2046 27.294 28.5024 27.9227 28.8664C28.9484 29.495 29.0808 29.495 29.5109 28.9987C29.8749 28.5355 29.8418 28.37 29.147 27.8406C28.6837 27.5097 28.2205 27.212 28.0881 27.212C27.4595 27.212 27.9227 26.5833 28.8161 26.2193C29.4117 25.9546 29.8087 25.5575 29.8087 25.1936C29.8087 24.3995 29.2462 24.3995 27.3602 25.2267L25.8381 25.8553L24.0183 24.7965C23.0256 24.2009 22.1984 23.6715 22.1984 23.5722C22.1984 23.473 23.0256 22.9436 24.0183 22.348L25.8381 21.2892L27.3602 21.9178C29.2462 22.745 29.8087 22.745 29.8087 21.9509C29.8087 21.587 29.4117 21.1899 28.8161 20.9252C27.9227 20.5612 27.4595 19.9325 28.0881 19.9325C28.2205 19.9325 28.6837 19.6347 29.147 19.3039C29.8418 18.7745 29.8749 18.609 29.5109 18.1458C29.0808 17.6495 28.9484 17.6495 27.9227 18.2781C27.294 18.6421 26.7646 18.9399 26.7315 18.9399C26.6653 18.9399 26.6984 18.3443 26.7646 17.6164C26.8639 16.5906 26.7646 16.2597 26.3345 16.0943C25.5403 15.7965 25.1764 16.4914 25.1764 18.3443C25.1764 19.7671 25.0771 19.9325 23.9521 20.6274C23.2573 21.0575 22.3639 21.587 21.9668 21.8517C21.2058 22.3149 21.2058 22.3149 21.2058 20.1311V17.9803L22.6948 16.8884C24.1506 15.7965 24.647 14.6384 23.6543 14.6384C23.3565 14.6384 22.6948 14.9362 22.1984 15.3002L21.2389 15.995L21.1396 14.6053C21.0403 13.2818 20.6102 12.6862 20.1139 13.1825Z"
                    fill={selected === 1 ? "#FFFFFF" : "#38B6FF"}
                    stroke={selected === 1 ? "#FFFFFF" : "#38B6FF"}
                  />
                </g>
              </svg>
              <p
                className={`text-base md:text-sm font-medium leading-[150%] text-center group-hover:text-white  
    ${selected === 1 ? "text-white" : "text-[#7C7C7C]"}`}
              >
                Chiller
              </p>
              <p
                className={`text-base sm:text-lg md:text-xs lg:text-sm font-bold leading-[150%] mt-[7px] text-center whitespace-nowrap group-hover:text-white 
    ${selected === 1 ? "text-white" : "text-[#7C7C7C]"}`}
              >
                (+5° to 20°)
              </p>
            </div>

            <div
              className={`group max-md:w-full flex flex-col bg-[#EFF7FD] pt-6 md:pt-[7px] pb-[15px] pl-1 xl:pl-[31px] pr-1 xl:pr-[22.85px] rounded-lg items-center 
    ${
      selected === 2
        ? "bg-[RGB(56_182_255)] text-white"
        : "hover:bg-[RGB(56_182_255)]"
    }`}
              onClick={() => handleClick(2)}
            >
              <svg
                className="w-[100px] md:w-[40px] xl:w-[61px] h-[50px] xl:h-[61px] group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <path
                  d="M40.25 7.69H2.75V40.19H40.25V7.69Z"
                  stroke={selected === 2 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.25 20.19H50.25L57.75 27.69V40.19H40.25V20.19Z"
                  stroke={selected === 2 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 52.69C17.4518 52.69 20.25 49.8918 20.25 46.44C20.25 42.9882 17.4518 40.19 14 40.19C10.5482 40.19 7.75 42.9882 7.75 46.44C7.75 49.8918 10.5482 52.69 14 52.69Z"
                  stroke={selected === 2 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.5 52.69C49.9518 52.69 52.75 49.8918 52.75 46.44C52.75 42.9882 49.9518 40.19 46.5 40.19C43.0482 40.19 40.25 42.9882 40.25 46.44C40.25 49.8918 43.0482 52.69 46.5 52.69Z"
                  stroke={selected === 2 ? "#FFFFFF" : "#38B6FF"} // Change stroke based on selection
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <mask
                  id="mask0_9_927"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="12"
                  width="23"
                  height="23"
                >
                  <path
                    d="M31.1323 12.9841H9.95581V34.1606H31.1323V12.9841Z"
                    fill={selected === 2 ? "#FFFFFF" : "#38B6FF"}
                  />
                </mask>
                <g mask="url(#mask0_9_927)">
                  <path
                    d="M20.1139 13.1825C19.9815 13.3149 19.8823 14.0097 19.8823 14.7046V15.995L18.9227 15.3333C18.3933 14.9362 17.7315 14.6384 17.4337 14.6384C16.4411 14.6384 16.9374 15.7965 18.3933 16.8884L19.8823 17.9803V20.1311C19.8823 22.3149 19.8823 22.3149 19.1543 21.8517C18.7242 21.587 17.8639 21.0575 17.2021 20.6605C16.0771 19.9987 15.9778 19.7671 15.8455 18.1127C15.68 16.0943 15.5146 15.7965 14.7536 16.0612C14.4227 16.1936 14.2573 16.723 14.2573 17.5833V18.9068L13.1323 18.245C12.1396 17.6495 12.0073 17.6495 11.5771 18.1458C11.2131 18.609 11.2462 18.7745 11.9411 19.3039C12.4043 19.6347 12.8675 19.9325 13.033 19.9325C13.6286 19.9325 13.1653 20.5612 12.272 20.9252C11.6764 21.1899 11.2793 21.587 11.2793 21.9509C11.2793 22.745 11.8418 22.745 13.7278 21.9178L15.2499 21.2892L17.0698 22.348C18.0624 22.9436 18.8896 23.473 18.8896 23.5722C18.8896 23.6715 18.0624 24.2009 17.0698 24.7965L15.2499 25.8553L13.7278 25.2267C11.8418 24.3995 11.2793 24.3995 11.2793 25.1936C11.2793 25.5575 11.6764 25.9546 12.272 26.2193C13.1653 26.5833 13.6286 27.212 13.033 27.212C12.8675 27.212 12.4043 27.5097 11.9411 27.8406C11.2462 28.37 11.2131 28.5355 11.5771 28.9987C12.0073 29.495 12.1396 29.495 13.1323 28.8995L14.2573 28.2377V29.5612C14.2573 30.4215 14.4227 30.9509 14.7536 31.0833C15.5146 31.348 15.68 31.0502 15.8455 29.0318C15.9778 27.3774 16.0771 27.1458 17.2021 26.484C17.8639 26.087 18.7242 25.5575 19.1543 25.2928C19.8823 24.8296 19.8823 24.8296 19.8823 27.0134V29.1642L18.3933 30.2561C16.9374 31.348 16.4411 32.5061 17.4337 32.5061C17.7315 32.5061 18.3933 32.2083 18.8896 31.8443L19.8492 31.1495L19.9484 32.5722C20.0808 34.5575 21.0073 34.5575 21.1396 32.5722L21.2389 31.1495L22.1984 31.8443C22.6948 32.2083 23.3565 32.5061 23.6543 32.5061C24.647 32.5061 24.1506 31.348 22.6948 30.2561L21.2058 29.1642V27.0134V24.8296L22.4631 25.5906C25.2095 27.245 25.1764 27.245 25.1764 28.5024C25.1764 30.3222 25.5073 31.2156 26.1359 31.1164C26.533 31.0171 26.6653 30.62 26.6653 29.5943C26.6653 28.8333 26.6984 28.2046 26.7315 28.2046C26.7646 28.2046 27.294 28.5024 27.9227 28.8664C28.9484 29.495 29.0808 29.495 29.5109 28.9987C29.8749 28.5355 29.8418 28.37 29.147 27.8406C28.6837 27.5097 28.2205 27.212 28.0881 27.212C27.4595 27.212 27.9227 26.5833 28.8161 26.2193C29.4117 25.9546 29.8087 25.5575 29.8087 25.1936C29.8087 24.3995 29.2462 24.3995 27.3602 25.2267L25.8381 25.8553L24.0183 24.7965C23.0256 24.2009 22.1984 23.6715 22.1984 23.5722C22.1984 23.473 23.0256 22.9436 24.0183 22.348L25.8381 21.2892L27.3602 21.9178C29.2462 22.745 29.8087 22.745 29.8087 21.9509C29.8087 21.587 29.4117 21.1899 28.8161 20.9252C27.9227 20.5612 27.4595 19.9325 28.0881 19.9325C28.2205 19.9325 28.6837 19.6347 29.147 19.3039C29.8418 18.7745 29.8749 18.609 29.5109 18.1458C29.0808 17.6495 28.9484 17.6495 27.9227 18.2781C27.294 18.6421 26.7646 18.9399 26.7315 18.9399C26.6653 18.9399 26.6984 18.3443 26.7646 17.6164C26.8639 16.5906 26.7646 16.2597 26.3345 16.0943C25.5403 15.7965 25.1764 16.4914 25.1764 18.3443C25.1764 19.7671 25.0771 19.9325 23.9521 20.6274C23.2573 21.0575 22.3639 21.587 21.9668 21.8517C21.2058 22.3149 21.2058 22.3149 21.2058 20.1311V17.9803L22.6948 16.8884C24.1506 15.7965 24.647 14.6384 23.6543 14.6384C23.3565 14.6384 22.6948 14.9362 22.1984 15.3002L21.2389 15.995L21.1396 14.6053C21.0403 13.2818 20.6102 12.6862 20.1139 13.1825Z"
                    fill={selected === 2 ? "#FFFFFF" : "#38B6FF"}
                    stroke={selected === 2 ? "#FFFFFF" : "#38B6FF"}
                  />
                </g>
              </svg>
              <p
                className={`text-base md:text-sm font-medium leading-[150%] text-center group-hover:text-white  
    ${selected === 2 ? "text-white" : "text-[#7C7C7C]"}`}
              >
                Chiller
              </p>
              <p
                className={`text-base sm:text-lg md:text-xs lg:text-sm font-bold leading-[150%] mt-[7px] text-center whitespace-nowrap group-hover:text-white 
    ${selected === 2 ? "text-white" : "text-[#7C7C7C]"}`}
              >
                (+5° to 20°)
              </p>
            </div>
          </div>
        </div>
        <div className="quotationmaindivstyle">
          <p className="text-black font-bold leading-[110%]">
            Package details <span className="text-[#F22]">*</span>
          </p>
          <QuantityDrop quantity="Quantity of load*" />
          <ProductDrop />
        </div>
        <div className="!pr-0 quotationmaindivstyle">
          <p className="text-black font-bold leading-[110%]">
            Pickup date<span className="text-[#F22]">*</span>
          </p>
          <div className="relative">
            <div className="flex gap-3 xl:gap-[5px] py-[13px] pl-2 xl:pl-5  items-center quotationsdivstyle">
              <Image
                width={24}
                height={24}
                src="/img/calender.png"
                alt="calender.png"
              />
              <p
                className="text-sm font-medium leading-normal cursor-pointer"
                style={{ color: textColor }}
                onClick={toggleCalendar}
              >
                {endDate?.toLocaleDateString() || "DD-MM-YYYY"}
              </p>
            </div>
            {showCalendar && (
              <div className="absolute z-10 bg-white shadow-lg p-3 rounded-md">
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  minDate={new Date()}
                  maxDate={addMonths(new Date(), 5)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  showDisabledMonthNavigation
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              if (isFormValid) {
                console.log("Form submitted successfully!");
                // Add your form submission logic here
              } else {
                console.log("Form is invalid");
              }
            }}
            disabled={!isFormValid}
            className={`flex gap-[5px] py-[10px] sm:py-[14px] xl:py-[15px] justify-center quotationsdivstyle text-white text-lg font-bold leading-[155%] ${
              isFormValid
                ? "!bg-[#007CFF] cursor-pointer "
                : " !bg-[#519ef1] cursor-not-allowed "
            }`}
          >
            Get estimation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qutations;
