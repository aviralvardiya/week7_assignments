import React, { useEffect, useState } from "react";

function Question5GitHubApi() {
  const [profile, setProfile] = useState();

  async function getProfileDetails(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const myProf = await response.json();
    return myProf;
  }

  useEffect(() => {
    const initProfile = async () => {
      const prof = await getProfileDetails("hiteshchoudhary");
      setProfile(prof);
      console.log(prof);
    };

    initProfile();
  }, []);

  return (
    <div>
      {profile && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center border-2 border-slate-200 w-96">
            <img
              className="w-full min-h-48 object-cover"
              src={
                "https://w0.peakpx.com/wallpaper/715/353/HD-wallpaper-github-violet-logo-violet-brickwall-github-logo-social-networks-github-neon-logo-github.jpg"
              }
              alt=""
            />

            <img
              className="w-20 h-20 border-2 rounded-full object-cover object-top absolute"
              src={profile.avatar_url}
              alt=""
            />

            <div className="pb-4 pt-12 text-center">
              <div className="flex gap-1 items-center justify-center">
                <h2 className="font-bold">{profile.name}</h2>
              </div>
              <p className="text-gray-500 px-3">{profile.bio}</p>
            </div>
            <div className="flex w-full justify-around py-4 border-t-2 border-slate-200">
              <div className="text-center">
                <h3 className="font-bold">{profile.followers}</h3>
                <p className="font-normal text-gray-500 text-xs">Followers</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">{profile.following}</h3>
                <p className="font-normal text-gray-500 text-xs">Following</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question5GitHubApi;
