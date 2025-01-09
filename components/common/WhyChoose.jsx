export default function WhyChoose({ data }) {
  return (
    <div className="bg-[#F8F8F8] px-4 pb-[50px]">
      <div className="flex flex-col gap-4 sm:pt-[30px]  max-w-[1320px] w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] md:gap-y-[50px] gap-4 sm:gap-[30px] lg:gap-y-[62px]">
          {data.map((items, index) => (
            <div
              key={index}
              className="lg:max-w-[556px] w-full flex flex-col gap-6 sm:gap-[30px]"
            >
              {items.icon}
              <div className="flex flex-col gap-[9px]">
                <p className="text-[#212529] font-poppins text-lg md:text-2xl font-bold leading-[120%]">
                  {items.name}
                </p>
                <p className="text-[#212529] font-poppins text-sm sm:text-base font-normal leading-[125%]">
                  {items.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
