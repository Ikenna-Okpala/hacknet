import Image from "next/image";
import React from "react";

export default async function FriendList() {
  // create custom functions for the buttons

  return (
    // <main className="min-h-screen bg-white flex flex-col items-center justify-center relative">
    //     <nav className="absolute top-4 left-4">
    //         <button className="p-0 border-none bg-none">
    //             <Image src="/back.png" alt="Back" width={64} height={64} />
    //         </button>
    //     </nav>
    //     <nav className="absolute top-4 right-4">
    //         <button className="p-0 border-none bg-none">
    //             <Image src="/connections.png" alt="Back" width={64} height={64} />
    //         </button>
    //     </nav>
    // </main>

    <div className="flex flex-col w-screen h-screen px-5">
      <div className="flex flex-row justify-between">
        <Image
          src={"/images/buttons/back.png"}
          alt="back button"
          width={210}
          height={20}
        />
        <Image
          src={"/images/buttons/addfriends.png"}
          alt="add friends button"
          width={300}
          height={68}
        />
      </div>
      <div className="flex flex-col w-full h-full px-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-1/3">
            <Image
              src={"/images/profile_icon/Profile_grey.png"}
              alt="profile pic"
              width={70}
              height={70}
            />

            <span>Ikenna</span>
          </div>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}
