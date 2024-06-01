import Card from "./Card";
import data from "../mockdata.json";
import { useRef } from "react";

function Foreground() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="w-full h-screen fixed z-20 flex px-4 py-2">
      {data.map((item) => (
        <Card data={item} key={item.id} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
