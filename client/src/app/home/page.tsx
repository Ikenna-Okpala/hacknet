"use client";
import exp from 'constants';
import Image from 'next/image';
import React from 'react';
//import {getRepository} from 'typeorm';
import {hackathons} from '../../../../server/src/db/schema';
import { start } from 'repl';
//import { insert } from 'drizzle-orm';
import db from '../../../../server/src/db/db.config';

export default function Home() {
    const handleProfileClick = () => {
        console.log("Profile button clicked");
    }

    const [loading, setLoading] = React.useState(false);

    const listOfThemes = ["Theme 1", "Theme 2", "Theme 3", "Theme 4", "Theme 5", "Theme 6", "Theme 7", "Theme 8", "Theme 9", "Theme 10"];
    // create custom functions for the other buttons

    async function handleJoinAHackathonClick() {
        console.log("Join a Hackathon button clicked");
        setLoading(true);
        const selectedTheme = listOfThemes[Math.floor(Math.random() * listOfThemes.length)];
        await db.insert(hackathons).values({
            theme : selectedTheme,
            startTime : new Date(),
            endTime : new Date(),
            max_participants : 10,
            experience_level : 'Beginner',
        }).returning();
        setLoading(false);
        console.log("Hackathon created");
    }

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center relative">
          <nav className="absolute top-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/profile_icon/Profile1.png" alt="Profile" width={64} height={64} />
            </button>
          </nav>
          <nav className="absolute top-4 right-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/connections.png" alt="Connections" width={64} height={64} />
            </button>
          </nav>
          <nav className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end space-y-2">
            <div className="text-black">Party:</div>
            <div className="text-black">x</div>
            <div className="text-black">y</div>
            <div className="text-black">z</div>
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/invite.png" alt="Invite" width={64} height={64} />
            </button>
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/disband.png" alt="Disband" width={64} height={64} />
            </button>
          </nav>
          <nav className="flex flex-col items-center space-y-8">
            <Image src="/animations/SquirrelAnimation.gif" alt="Fun background animation" width={400} height={300} />
            <button className="p-0 border-none bg-none" onClick={handleJoinAHackathonClick}>
              <Image src="/images/buttons/joinahackathon.png" alt="Join a Hackathon" width={192} height={64} />
            </button>
          </nav>
          <nav className="absolute bottom-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/judgeahackathon.png" alt="Judge A Hackathon" width={192} height={64} />
            </button>
          </nav>
          <nav className="absolute bottom-4 right-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/setting.png" alt="Settings" width={192} height={64} />
            </button>
          </nav>
        </main>
      );
    }