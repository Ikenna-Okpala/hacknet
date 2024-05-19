"use client";
import exp from 'constants';
import Image from 'next/image';
import React, { useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from '../styles/popup';
import PartyQueue from '../styles/partyQueue';
import HackathonQueuePopUp from '../styles/hackathonQueuePopUp';
//import {getRepository} from 'typeorm';
import {hackathons} from '../../../../server/src/db/schema';
import { start } from 'repl';
//import { insert } from 'drizzle-orm';
import db from '../../../../server/src/db/db.config';
import { HACKATHON_CREATE } from '../utils/constants';

export default function Home() {
    const handleProfileClick = () => {
        console.log("Profile button clicked");
    }

    const [loading, setLoading] = React.useState(false);

    const [isQueuePopUpOpen, setQueuePopUpOpen] = React.useState(false);
    const [isPartyInvitePopUpOpen, setPartyInvitePopUpOpen] = React.useState(false);

    const listOfThemes = ["Chaos", "Magic", "Chicken", "Cooked", "Global Cooling", "In the Air", "Deep Breath", "Aqua", "20's", "Medicine"];
    // create custom functions for the other buttons

    async function handleJoinAHackathonClick() {
        console.log("Join a Hackathon button clicked");
        setQueuePopUpOpen(true);
        setLoading(true);
        // const selectedTheme = listOfThemes[Math.floor(Math.random() * listOfThemes.length)];
        // const data = {
        //     theme : selectedTheme,
        //     startTime : new Date(),
        //     endTime : new Date(),
        //     max_participants : 10,
        //     experience_level : 'Beginner',
        // }
        // await axios.post(HACKATHON_CREATE, data)
        setLoading(false);
        console.log("Hackathon created");
    }

    async function handlePartyInvitePopUp() {
      console.log("Party Invite button clicked");
      setPartyInvitePopUpOpen(true);
  }

    const handleCloseQueuePopUp = useCallback(() => {
        setQueuePopUpOpen(false);
    }, []);



    return (
        <main className="flex flex-col justify-between items-center w-screen h-screen pt-12 pb-16"
          style={({
            backgroundImage: '/images/backgrounds/Cloudbackgroundanimation.gif',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          })}>
          <nav className="absolute top-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/profile_icon/Profile1.png" alt="Profile" width={64} height={64} />
            </button>
          </nav>
          <nav className="absolute top-4 right-4">
            <Link to="/user/friends">
              <Image src="/images/buttons/connections.png" alt="Connections" width={64} height={64} />
            </Link>
          </nav>
          <nav className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end space-y-2">
            <div className="text-black">Party:</div>
            <div className="text-black">x</div>
            <div className="text-black">y</div>
            <div className="text-black">z</div>
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/invite.png" alt="Invite" width={64} height={64} />
            </button>
            <Popup isOpen={isPartyInvitePopUpOpen} onClose={handlePartyInvitePopUp}> 
              <PartyQueue />
            </Popup>
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/disband.png" alt="Disband" width={64} height={64} />
            </button>
          </nav>
          <nav className="flex flex-col items-center space-y-8">
            <Image src="/animations/SquirrelAnimation.gif" alt="Fun background animation" width={400} height={300} />
            <button className="p-0 border-none bg-none" onClick={handleJoinAHackathonClick}>
              <Image src="/images/buttons/joinahackathon.png" alt="Join a Hackathon" width={192} height={64} />
            </button>
            <Popup isOpen={isQueuePopUpOpen} onClose={handleCloseQueuePopUp}>
              <HackathonQueuePopUp />
            </Popup>
          </nav>
          <nav className="absolute bottom-4 left-4">
            <button className="p-0 border-none bg-none">
              <Image src="/images/buttons/judgeahackathon.png" alt="Judge A Hackathon" width={192} height={64} />
            </button>
          </nav>
        </main>
      );
    }