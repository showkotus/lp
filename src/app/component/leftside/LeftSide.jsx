import React from "react";

const LeftSide = () => {
  return (
    <div className="mr-1 ml-1">
      <div>
        <label htmlFor="" className="mx-2 text-xl text-white">
          Dept
        </label>
        <input type="text" className="bg-blue-200 rounded-md" />
      </div>
      <div className="flex">
        <select className="select select-bordered  bg-green-100 w-[200px] btn-xs ">
          <option>all</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button className="btn btn-xs">bulk print</button>
      </div>
      <div className="flex justify-between">
        <div className="">
          <label className="label p-0">
            <span className="label-text m-0 p-0">Admission No</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input btn-xs m-0 p-0"
            size="18"
          />
        </div>
        <div className="">
          <label className="label p-0">
            <span className="label-text">Admission No</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input btn-xs"
            size="18"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <label className="label p-0">
            <span className="label-text m-0 p-0">Bill No</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input btn-xs m-0 p-0"
            size="16"
          />
        </div>
        <div className="">
          <label className="label p-0">
            <span className="label-text">Branch</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input btn-xs"
            size="16"
          />
        </div>
        <div className="mt-4">
          <p className="text-[6px]">Tot ID</p>
          <p>1</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[100px] h-[50vh] items-center justify-center mt-1">
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
          <input
            type="text"
            className="mb-2 w-[100px] bg-blue-500 rounded-lg text-center"
            placeholder="D123456"
          />
        </div>
        <div className="ml-2 mt-1">
          <div>
            <input
              type="text"
              className="mb-2 w-[200px] bg-blue-500 rounded-lg text-center"
              placeholder="IMMUNOLGY"
            />
            <input
              type="text"
              className="mb-2 w-[200px] bg-blue-500 rounded-lg text-center"
              placeholder="Clinical Pathology Urine"
            />
            <input
              type="text"
              className="mb-2 w-[200px] bg-blue-500 rounded-lg text-center"
              placeholder="BIOCHEMISTRY"
            />
            <input
              type="text"
              className="mb-2 w-[200px] bg-blue-500 rounded-lg text-center"
              placeholder="HEMATOLOGY"
            />
          </div>
          <div>
            <div className="">
              <table className="">
                {/* head */}
                <thead>
                  <tr>
                    <th>Machine</th>
                    <th>result</th>
                    <th>Entry Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>ATEL</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
