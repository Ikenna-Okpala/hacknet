"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "../hooks/hooks";
import Link from 'next/link';

export default function FriendList() {
  // create custom functions for the buttons
    const { user, updateUser } = useUser(); //to fetch user information
    const user_id = user.id

    console.log("user_id")


  
  const friends = [
    {
        "users": {
            "id": "d0ec67aa-ce65-448a-a08f-908884f74cab",
            "name": "Mikey",
            "email": "ken13@gmail.com",
            "number_of_hackathons": 0,
            "member_since": "2024-05-19T17:05:59.397Z",
            "isJudge": false,
            "jobStatus": "Student",
            "profilePicture": "/images/profile_icon/Profile_grey.png"
        },
        "friendslist": {
            "user_id": "d0ec67aa-ce65-448a-a08f-908884f74cab",
            "friend_id": "9f0f2afd-6cab-494e-bfcf-0a1f35dcf11a"
        }
    },
    {
        "users": {
            "id": "7b9e53b9-5c0d-4e3a-a6f9-ff4fc5c89acf",
            "name": "Lucy",
            "email": "lucy_hikes@outlook.com",
            "number_of_hackathons": 3,
            "member_since": "2023-12-10T12:00:00.000Z",
            "isJudge": true,
            "jobStatus": "Professional",
            "profilePicture": "/images/profile_icon/Profile_grey.png"
        },
        "friendslist": {
            "user_id": "7b9e53b9-5c0d-4e3a-a6f9-ff4fc5c89acf",
            "friend_id": "d0ec67aa-ce65-448a-a08f-908884f74cab"
        }
    },
    {
        "users": {
            "id": "a3cdcf1d-6c16-4736-921f-ba14b9f4726c",
            "name": "Ethan",
            "email": "ethan_123@yahoo.com",
            "number_of_hackathons": 2,
            "member_since": "2024-03-29T08:30:25.703Z",
            "isJudge": false,
            "jobStatus": "Freelancer",
            "profilePicture": "/images/profile_icon/Profile_grey.png"
        },
        "friendslist": {
            "user_id": "a3cdcf1d-6c16-4736-921f-ba14b9f4726c",
            "friend_id": "7b9e53b9-5c0d-4e3a-a6f9-ff4fc5c89acf"
        }
    }
]

  const handleDelete = (id: string) => {
    // Logic to delete friend with the given id
    console.log(`Delete friend with ID: ${id}`);
  };

return (
    <div className="flex flex-col w-screen h-screen px-5">
        <div className="flex flex-row justify-between pb-10 px-">
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
        {/* friendlist table flex flex-col w-full h-full px-5*/}
        <ul className="flex flex-col w-full space-y-10">
            {friends.map((item) => (
                <li key={item.users.id} className="flex flex-row justify-between px-6"> {/* Unique key for each row */}
                    <div className="flex flex-row w-1/3 items-center">
                        <Image
                            src={item.users.profilePicture}
                            alt="profile pic"
                            width={70}
                            height={70}
                            layout="fixed"
                        />
                        <span className="ml-4 pl-4 tracking-wider text-nice-yellow text-2xl font-bold ">{item.users.name}</span> {/* Display user name */}
                    </div>
                    <div>
                        <Image
                            src={"/images/buttons/delete.png"}
                            alt="delete button"
                            width={150}
                            height={50}
                            onClick={() => handleDelete(item.users.id)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
}
