import { Button, Dialog } from "@headlessui/react";
import Image from "next/image";
import { Flagicon } from "./common/Icon";
import Link from "next/link";

export default function Mymodal({ open, close, isOpen }) {
  return (
    <>
      <Link
        onClick={open}
        className="text-[#595959] text-base font-poppins font-bold hover:text-[#1777d0]"
        href="#"
      >
        CUSTOMER LOGIN
      </Link>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none rounded-lg"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 ht-[calc(100%-140px)] sm:h-[calc(100%-200px)] rounded-lg  w-screen overflow-y-auto self-center px-4">
          <div className="max-w-[815px] relative flex-col-reverse gap-10  lg:gap-0 lg:flex-row w-full flex mx-auto justify-between shadow-md items-center rounded-lg bg-white overflow-auto">
            <div
              onClick={close}
              className="flex absolute top-5 right-5 justify-end cursor-pointer"
            >
              <Image
                src="/img/modalcross.png"
                alt="modal image"
                width={32}
                height={32}
              />
            </div>
            {/* Left Section */}
            <div className="max-w-[407px] w-full flex flex-col items-center gap-6 justify-center">
              <div>
                <Image
                  className="w-[100px] h-[34px] sm:w-[140px] sm:h-[44px] md:w-[179px] md:h-[62px] "
                  src="/img/logo.png"
                  alt="modal image"
                  width={179}
                  height={62}
                />
              </div>
              <div>
                <Image
                  className="max-sm:max-w-[200px] "
                  src="/img/modallogin.png"
                  alt="modal image"
                  width={367}
                  height={294}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="max-w-none lg:max-w-[407px]   bg-[url(/img/modalbg.png)] bg-no-repeat bg-center  bg-cover rounded-lg w-full p-3 lg:p-[20px_20px_28px_32px] ">
              <div className=" flex justify-center mt-8 md:mt-12 lg:mt-[98px]">
                <p className="max-w-[181px] w-full text-black text-center font-poppins font-medium leading-[106%] text-base sm:text-lg md:text-xl lg:text-2xl">
                  Sign in with phone number
                </p>
              </div>
              <div className="flex justify-center flex-col items-center   mt-8 md:mt-12 lg:mt-[94px] ">
                {/* input div  */}
                <div className="max-w-[257px] w-full p-2  sm:py-[15px] sm:px-5 rounded-lg bg-white flex items-center gap-[5px] ">
                  <Flagicon />
                  <p className="text-[#21242A] font-poppins font-bold text-base leading-[150%] ">
                    +91
                  </p>
                  <input
                    placeholder="Enter your phone no."
                    className="w-full placeholder:text-[#7B8A93] placeholder:font-medium placeholder:text-sm outline-none [appearance:textfield]"
                    type="number"
                    maxLength="10"
                    onInput={(e) => {
                      e.target.value = e.target.value.slice(0, 10);
                    }}
                  />
                </div>
                {/* button div  */}
                <button className="max-w-full  sm:max-w-[257px] w-full h-10 flex justify-center items-center sm:h-[60px] opacity-[0.5] rounded-lg bg-[#007CFF] text-white text-center font-poppins text-lg font-bold leading-[333%] mt-[30px] ">
                  Sign in
                </button>
              </div>

              <p className="w-full text-black text-center font-poppins text-xs leading-[166%] mt-8 sm:mt-12 md:mt-[100px] lg:mt-[135px] ">
                By signing, you agree to our{" "}
                <span className="!text-[#0D6EFD]">Terms of conditions </span>{" "}
                and
                <span className="!text-[#0D6EFD]">Privacy policy </span>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
