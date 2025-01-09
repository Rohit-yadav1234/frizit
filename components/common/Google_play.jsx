import Image from "next/image";
import Link from "next/link";

const GooglePlay = () => {
  return (
    <div className="bg-[url(/img/bg.png)] w-full bg-cover bg-center bg-no-repeat px-4">
      <div className="max-w-[1203px] w-full mx-auto flex lg:flex-row flex-col-reverse items-center  justify-between gap-3 py-5">
        <div className="flex flex-col gap-5 lg:gap-[40px] pb-0 md:pb-[43px]">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-[#212529] font-poppins text-[25px] md:text-[48px] font-bold leading-[120%]">
              Get Frizit COLD CHAIN <br />
              <span className="font-light">App Now!</span>
            </p>
            <p className="text-[#595959] font-poppins text-base md:text-xl font-light leading-[150%]  text-center lg:max-w-[470px] w-full">
              Welcome to FRIZIT – your all-in-one solution for simplifying cold
              supply chain management!
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-[24px]">
            <Link href="https://play.google.com/store/apps/details?id=com.firzit">
              <Image
                className=" w-[180px] h-[53px] md:w-[230px] md:h-[67px]"
                src="/img/google_play.png"
                alt="google-play"
                width={230}
                height={67}
              />
            </Link>
            <div className="flex flex-col gap-[9px] items-center">
              <Image
                className="size-[100px] md:size-[120px] "
                src="/img/qr.png"
                alt="qr-img"
                width={120}
                height={120}
              />
              <p className="text-[#7B8A93] font-poppins text-base font-normal leading-[120%]">
                Scan to download our app!
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src="/img/phone.png" width={420} height={472} alt="i-phone" />
        </div>
      </div>
    </div>
  );
};

export default GooglePlay;
