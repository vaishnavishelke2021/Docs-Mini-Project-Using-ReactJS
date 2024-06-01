import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      id: 1,
      desc: "Upload the design file",
      fileSize: "5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      id: 3,
      desc: "The pdf file of React.JS, covering all the advance points",
      fileSize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "red" },
    },
    {
      id: 2,
      desc: "This is AI project details by MJ",
      fileSize: "20mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download", tagColor: "green" },
    },
  ];

  return (
    <div className="w-full h-screen fixed z-20 flex px-4 py-2">
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Foreground;
