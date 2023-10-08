import React from "react";

const UperLine = () => {
  return (
    <div>
      <form className="text-[12px] border-4 bg-blue-100">
        <div className="flex justify-between">
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Bill:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="7"
              defaultValue=""
              placeholder="D123456789"
              className="text-red-600 font-semibold"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Sample ID:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="10"
              defaultValue=""
              placeholder="1234567890000"
              className="text-red-600 font-semibold"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Routine Pat:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="lutfar rahman"
              className=""
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <input
              type="text"
              name=""
              id=""
              size="1"
              defaultValue=""
              placeholder="M"
              className="text-center text-red-600 font-semibold"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Age:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="7"
              defaultValue=""
              placeholder="82 Y 00 M 00 D"
              className=""
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Contact No:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="1234567898888"
              className=""
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Ref. By:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="40"
              defaultValue=""
              placeholder="DR. SHOHSG HOSSAIN D.M.F MCH.M.L.O.P"
              className=""
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Sample:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="7"
              defaultValue=""
              placeholder="Blood"
              className=""
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Adm. No:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="7"
              defaultValue=""
              placeholder="N/A"
              className=""
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Bed:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="7"
              defaultValue=""
              placeholder="N/A"
              className=""
            />
          </div>
        </div>
      </form>
      <form className="text-[12px] border-4 bg-blue-100">
        <div className="flex justify-between">
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Bill Date & Time:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Sample Collected:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
              
              className="text-center"
            />
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>

          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Receive at Lab:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
             
              className="text-center"
            />
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Draft Time:{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Varified:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
             
              className="text-center"
            />
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Printed:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
           
              className="text-center"
            />
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Expected Delivery Time:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
          
              className="text-center"
            />
            <input
              type="text"
              name=""
              id=""
              size="12"
              defaultValue=""
              placeholder="31/12/23 12:60 AM"
              className="text-red-600 font-semibold mx-2"
            />
          </div>
          <div className="bg-blue-100 p-1 mr-1">
            <label htmlFor="bill" className="">
              Delivered:{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id=""
              size="14"
           
              className="text-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UperLine;
