import Image from "next/image";
import UperLine from "./component/uper/UperLine";
import LeftSide from "./component/leftside/LeftSide";
import RightSide from "./component/rightside/RightSide";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-around w-full bg-slate-400">
        <div className="w-[8vw]">
          <input
            type="text"
            placeholder="31/31/2023"
            className="bg-green-100 border-2 w-full"
          />
          <input
            type="text"
            placeholder="31/31/2023"
            className="bg-green-100 border-2 w-full"
          />
          <select className="select select-bordered w-full max-w-xs bg-green-100">
            <option>all</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="w-[100vw] rounded-2 border justify-center items-center">
          <UperLine />
        </div>

        <div className="w-1/5">
          <div>
            <button className="btn bg-blue-500 rounded-lg btn-xs m-1 w-20">
              <p className="text-sm text-white ">&#8903;</p>
            </button>
            <button className="btn bg-blue-500  rounded-lg m-1 w-20 btn-xs">
              <p className="text-sm text-white px-2 ">&#8903;</p>
            </button>
          </div>
          <div>
            <button className="btn btn-xs bg-blue-500  rounded-lg mx-1 w-20">
              <p className="text-sm text-white  ">Draft</p>
            </button>
            <button className="btn bg-blue-500  rounded-lg m-1 w-20 btn-xs">
              <p className="text-sm text-white px-2 ">Finalize</p>
            </button>
          </div>
          <div>
            <button className="btn bg-blue-500 rounded-lg m-1 w-20 btn-xs">
              <p className="text-sm text-white px-2">Print</p>
            </button>
            <button className="btn bg-blue-500  rounded-lg m-1 w-20 btn-xs">
              <p className="text-sm text-white px-2">View</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[7vw] bg-blue-200 text-white ">
            <p className="text-center">Report List</p>
            <p className="text-center">&#8811; Pending</p>
            <p className="text-center">&#8811; Printed</p>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[25vw] h-[100vh] bg-slate-400">
          <LeftSide />
        </div>
        <div className="w-[75vw] bg-gray-200 h-[100vh]">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
