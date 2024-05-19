import Image from 'next/image';
import React from 'react';

export default async function FriendList() {
    // create custom functions for the buttons

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center relative">
            <nav className="absolute top-4 left-4">
                <button className="p-0 border-none bg-none">
                    <Image src="/back.png" alt="Back" width={64} height={64} />
                </button>
            </nav>
            <nav className="absolute top-4 right-4">
                <button className="p-0 border-none bg-none">
                    <Image src="/connections.png" alt="Back" width={64} height={64} />
                </button>
            </nav>
            <nav className=>

            </nav>

        </main>
    );
}