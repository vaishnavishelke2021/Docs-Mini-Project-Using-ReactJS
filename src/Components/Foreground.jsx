import Card from "./Card";
import data from "../mockdata.json";

function Foreground() {
  return (
    <div className="w-full h-screen fixed z-20 flex px-4 py-2">
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Foreground;
