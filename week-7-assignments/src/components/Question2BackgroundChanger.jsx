import React, { useState } from "react";

function Question2BackgroundChanger() {
  const [selectedBg, setSelectedBg] = useState("");
  const colors = [
    {
      colorName: "Red",
      className: "bg-red-600",
    },
    {
      colorName: "Yellow",
      className: "bg-yellow-400",
    },
    {
      colorName: "Black",
      className: "bg-black",
    },
    {
      colorName: "Purple",
      className: "bg-purple-600",
    },
    {
      colorName: "Green",
      className: "bg-green-600",
    },
    {
      colorName: "Blue",
      className: "bg-blue-600",
    },
    {
      colorName: "Default",
      className: "bg-white",
    },
  ];
  return (
    <div className={`h-screen w-full ${selectedBg} flex justify-center items-end`}>
        <div className="flex gap-3 m-5">

        {colors.map(color=><ColorButton key={color.className} colorName={color.colorName} clsName={color.className} setSelectedBg={setSelectedBg}/>)}
        </div>

    </div>
  );
}


function ColorButton({colorName,clsName,setSelectedBg}) {
    let textColor = ""
    if(colorName==="Black"){
        textColor = "text-white"
    }
  return (
    // <div>{colorName},{clsName}</div>
    <div className={`${clsName} w-30 h-12 px-6 py-3 text-center border-2 border-slate-700 rounded-3xl ${textColor} flex items-center`} onClick={()=>setSelectedBg(clsName)}>
        <p>{colorName}</p>
    </div>
  )
}


export default Question2BackgroundChanger;
