// import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

function Card({ data }) {
  return (
    <div className="w-[11.7rem] h-[15rem] rounded-[2rem] relative bg-zinc-800/60 px-5 py-7 my-5 mx-5 overflow-hidden">
      <span className="text-white/60">
        <FaFileLines />
      </span>
      <p className="text-white/90 font-normal tracking-[0.3px] leading-4 text-[13px] mt-5">
        {data.desc}
      </p>
      <div className="absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between px-4 mb-4">
          <p className="text-[13.5px]  text-zinc-200/60 font-normal">
            {data.fileSize}
          </p>
          <span className="text-xl  text-zinc-200/30">
            {data.close ? <IoIosCloseCircle /> : <MdDownloadForOffline />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-700"
            } text-white/90 py-[9px] text-center text-sm font-normal`}
          >
            <p>{data.tag.tagTitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
