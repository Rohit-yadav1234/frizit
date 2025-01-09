const LogisticMap = ({ data2 }) => {
  return (
    <div className="bg-[rgba(23,119,208,0.10)] pb-6 pt-[34px]">
      <div className="flex justify-center items-center gap-6 sm:gap-[40px] flex-col  md:flex-row">
        {data2.map((items, index) => (
          <div
            key={index}
            className="md:max-w-[416px] w-full bg-white cursor-pointer hover:bg-[#47BDFF] duration-300 rounded-[8px] border group border-[rgba(0,0,0,0.15)] flex gap-5 justify-between items-center py-[10px] px-3 md:px-[26px]"
          >
            <div className="flex flex-col gap-4 md:gap-[24px]">
              <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[30px] bg-[#47BDFF]   group-hover:bg-white">
                {items.truck}
              </div>
              <p className="text-black font-poppins text-base md:text-lg font-bold leading-[111.1%] group-hover:text-white flex items-center gap-[5px]">
                {items.name}
                {items.img}
              </p>
            </div>
            {items.man}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogisticMap;
