"use client";
import exp from "constants";
import Image from "next/image";
import React, { useCallback } from "react";
import axios from "axios";
//import { Link } from 'react-router-dom';
import Popup from "../styles/popup";
import PartyQueue from "../styles/partyQueue";
import HackathonQueuePopUp from "../styles/hackathonQueuePopUp";
//import {getRepository} from 'typeorm';
import { hackathons } from "../../../../server/src/db/schema";
import { start } from "repl";
//import { insert } from 'drizzle-orm';
import db from "../../../../server/src/db/db.config";
import { HACKATHON_CREATE } from "../utils/constants";
import FileDownload from "js-file-download";
import Link from "next/link";

export default function Home() {
  async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  async function downloadFile(filename: string) {
    const response = await axios.get(
      `http://localhost:3000/download/${filename}`,
      {
        responseType: "blob",
      }
    );

    FileDownload(response.data, filename);
  }

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  const [loading, setLoading] = React.useState(false);

  const [isQueuePopUpOpen, setQueuePopUpOpen] = React.useState(false);
  const [isPartyInvitePopUpOpen, setPartyInvitePopUpOpen] =
    React.useState(false);

  const listOfThemes = [
    "Chaos",
    "Magic",
    "Chicken",
    "Cooked",
    "Global Cooling",
    "In the Air",
    "Deep Breath",
    "Aqua",
    "20's",
    "Medicine",
  ];
  // create custom functions for the other buttons

  async function handleJoinAHackathonClick() {
    console.log("Join a Hackathon button clicked");
    window.open("localhost:3000/login", "_self");
    setQueuePopUpOpen(true);
    setLoading(true);
    const selectedTheme =
      listOfThemes[Math.floor(Math.random() * listOfThemes.length)];
    const data = {
      theme: selectedTheme,
      startTime: new Date(),
      endTime: new Date(),
      max_participants: 10,
      experience_level: "Beginner",
    };
    await axios.post(HACKATHON_CREATE, data);
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

  const handleClosePartyInvitePopUp = useCallback(() => {
    setPartyInvitePopUpOpen(false);
  }, []);

  return (
    <main className="flex flex-col justify-between items-center w-screen h-screen pt-12 pb-16">
      <nav className="flex flex-col items-center space-y-8">
        <img
          style={{
            position: "absolute",
            zIndex: 0,
            top: "0px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="/images/backgrounds/treesbg.png"
          alt="background"
          // width={1400}
          // height={1300}
        />
      </nav>

      <nav className="absolute -top-9 left-4">
        <button className="p-0 border-none bg-none">
          <Image
            src="/images/buttons/profile.png"
            alt="Profile"
            width={200}
            height={200}
          />
        </button>
      </nav>

      {/* jacki did this so if smths wrong it's here lol */}
      <nav className="absolute top-3 right-4">
        <Link href={"/friendlist"}>
          <button className="p-0 border-none bg-none">
            <Image
              src="/images/buttons/connections.png"
              alt="Connections"
              width={300}
              height={300}
            />
          </button>
        </Link>
      </nav>

      <nav className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end space-y-2">
        <button
          className="p-0 border-none bg-none"
          onClick={handlePartyInvitePopUp}
        >
          <Image
            src="/images/buttons/invite.png"
            alt="Invite"
            width={200}
            height={200}
          />
        </button>
        <Popup isOpen={isPartyInvitePopUpOpen} onClose={handlePartyInvitePopUp}>
          <PartyQueue />
        </Popup>
        <button className="p-0 border-none bg-none">
          <Image
            src="/images/buttons/disband.png"
            alt="Disband"
            width={200}
            height={200}
          />
        </button>
      </nav>
      <nav className="flex flex-col items-center space-y-8">
        <Image
          src="/animations/SquirrelAnimation.gif"
          alt="Fun background animation"
          width={400}
          height={300}
        />
        <button
          className="p-0 border-none bg-none"
          onClick={handleJoinAHackathonClick}
        >
          <Image
            style={{ position: "absolute", zIndex: 1, top: "250px" }}
            src="/images/buttons/joinahackathon.png"
            alt="Join a Hackathon"
            width={400}
            height={400}
          />
        </button>
        <Popup isOpen={isQueuePopUpOpen} onClose={handleClosePartyInvitePopUp}>
          <HackathonQueuePopUp />
        </Popup>
      </nav>
      <nav className="absolute bottom-4 left-4">
        <button className="p-0 border-none bg-none">
          <Image
            src="/images/buttons/judgeahackathon.png"
            alt="Judge A Hackathon"
            width={300}
            height={300}
          />
        </button>
      </nav>
    </main>
  );
}
