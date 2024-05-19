"use client";
import Image from 'next/image';
import React from 'react';

export default function Home() {
    const handleProfileClick = () => {
        console.log("Profile button clicked");
    }

    // create custom functions for the other buttons


    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center relative">
          <nav className="absolute top-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/profile.png" alt="Profile" width={64} height={64} />
            </button>
          </nav>
          <nav className="absolute top-4 right-4">
            <button className="p-0 border-none bg-none">
              <Image src="/connections.png" alt="Connections" width={64} height={64} />
            </button>
          </nav>
          <nav className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end space-y-2">
            <div className="text-black">Party:</div>
            <div className="text-black">x</div>
            <div className="text-black">y</div>
            <div className="text-black">z</div>
            <button className="p-0 border-none bg-none">
              <Image src="/invite.png" alt="Invite" width={64} height={64} />
            </button>
            <button className="p-0 border-none bg-none">
              <Image src="/disband.png" alt="Disband" width={64} height={64} />
            </button>
          </nav>
          <nav className="flex flex-col items-center space-y-8">
            <Image src="/animation.gif" alt="Fun background animation" width={400} height={300} />
            <button className="p-0 border-none bg-none">
              <Image src="/join_hackathon.png" alt="Join a Hackathon" width={192} height={64} />
            </button>
          </nav>
          <nav className="absolute bottom-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/judge_hackathon.png" alt="Judge A Hackathon" width={192} height={64} />
            </button>
          </nav>
          <nav className="absolute bottom-4 right-4">
            <button className="p-0 border-none bg-none">
              <Image src="/settings.png" alt="Settings" width={192} height={64} />
            </button>
          </nav>
        </main>
      );
    }