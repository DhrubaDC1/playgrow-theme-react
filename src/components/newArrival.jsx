const NewArrival = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 w-full">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%]">
        <p className="text-[28px]">NEW ARRIVAL</p>
        <p className="text-[18px] text-gray-500">
          Consectetur adipiscing elit ut aliquam duis convalli convalli tellus
          id interdum ve.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] py-10">
          <img src="/assets/na_1.jpg" alt="" srcset="" />
          <p className="text-[13px] text-gray-500">CARRIAGE</p>
          <p className="text-[20px]">Baby Lether Carriage</p>
          <p className="text-[16px] pt-2 text-gray-500">$320.00</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] py-10">
          <img src="/assets/na_2.jpg" alt="" srcset="" />
          <p className="text-[13px] text-gray-500">CARRIAGE</p>
          <p className="text-[20px]">White Carriage</p>
          <div className="flex flex-row gap-2">
            <p className="text-[16px] pt-2 text-gray-300 line-through">
              $190.00
            </p>
            <p className="text-[16px] pt-2 text-gray-500">$190.00</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] pb-10">
          <img src="/assets/na_3.jpg" alt="" srcset="" />
          <p className="text-[13px] text-gray-500">CARRIAGE</p>
          <p className="text-[20px]">Brown Lether Carriage</p>
          <p className="text-[16px] pt-2 text-gray-500">$420.00</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] py-10">
          <img src="/assets/na_4.jpg" alt="" srcset="" />
          <p className="text-[13px] text-gray-500">CARRIAGE</p>
          <p className="text-[20px]">Baby Grey Carriage</p>
          <p className="text-[16px] pt-2 text-gray-500">$320.00</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
