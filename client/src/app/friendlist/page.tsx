"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function FriendList() {
    return (
        <main className="flex flex-col justify-between items-center w-screen h-screen pt-12 pb-16">
            <nav className="absolute top-4 left-4">
                <Link href={"/home"} >
                    <Image src="/images/buttons/back.png" className="p-0 bg-transparent border-0" alt="Back" width={150} height={150} layout="fixed" onClick={()=>{handleBack()}}/>
                </Link>
            </nav>
            <nav className="absolute top-4 right-4">
                <Link href={"/addfriends"}>
                    <Image src="/images/buttons/addfriends.png" className="p-0 bg-transparent border-0" alt="Add Friends" width={150} height={150} layout="fixed"/>
                </Link>
                {/* <Link href={"/friendrequests"}>
                    <Image src="/images/buttons/friendrequests.png" className="p-0 bg-transparent border-0" alt="Friend Requests" width={150} height={150} layout="fixed"/>
                </Link> */}
            </nav>
        </main>
        
        
    );
}