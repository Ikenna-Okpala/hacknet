"use client";
import React, {useEffect} from "react";
import Link from "next/link";

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
                        <img style={{position: 'absolute', zIndex: 1, top: '500px'}} src="/logo.svg"  width={960} height={2820} />
                        <img style={{position: 'absolute', zIndex: 0, top: '0', left: '0', width: '100vw', height: '100vh'}} src ="/images/backgrounds/treesbg.png"/>
                        </nav>
                </main>

                
        );
}


