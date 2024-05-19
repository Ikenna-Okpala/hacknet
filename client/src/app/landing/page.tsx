"use client";
import React, {useEffect} from "react";

export default function Loading(){

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/home";
        }, 5000);
        
        return () => clearTimeout(timer);
    }, []);

        return (
                <main className="flex flex-col justify-between items-center w-screen h-screen pt-12 pb-16">
                    <nav className="flex flex-col items-center space-y-8">
                        <img style={{position: 'absolute', zIndex: 1, top: '150px'}} src="/logo.svg"  width={160} height={490} />
                        <img style={{position: 'absolute', zIndex: 0, top: '0px'}} src ="/images/backgrounds/treesbg.png" width={1400} height={1300} />
                    </nav>
                </main>
        );
}


