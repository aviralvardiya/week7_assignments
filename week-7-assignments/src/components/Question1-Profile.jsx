import React from "react";

function Question1Profile() {
  const profile = {
    background:
      "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    profilePhoto:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Rajesh Pandey",
    age: 32,
    location: "Gorakhpur",
    metrics: [
      { metricName: "Followers", valueInK: 80 },
      { metricName: "Likes", valueInK: 803 },
      { metricName: "Photos", valueInK: 1.4 },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border-2 border-slate-200 w-96">
        
          <img className="w-full h-48 object-cover" src={profile.background} alt="" />
        
        
          <img className="w-20 h-20 border-2 rounded-full object-cover object-top absolute" src={profile.profilePhoto} alt="" />
        
        <div className="pb-4 pt-12 text-center">

        <div className="flex gap-1 items-center">
          <h2 className="font-bold">{profile.name}</h2>
          <p className="font-normal text-gray-500 text-sm">{profile.age}</p>
        </div>
        <p className="text-gray-500">{profile.location}</p>
        </div>
        <div className="flex w-full justify-around py-4 border-t-2 border-slate-200">
          {profile.metrics.map((metric) => (
            <div key={metric.metricName} className="text-center">
              <h3 className="font-bold">{metric.valueInK} K</h3>
              <p className="font-normal text-gray-500 text-xs">{metric.metricName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question1Profile;
