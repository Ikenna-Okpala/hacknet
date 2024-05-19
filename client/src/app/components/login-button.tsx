"use client";

import Image from "next/image";

type Props = {
  width: number;
  height: number;
  onClick: () => void;
};
export default function LoginButton({ width, height, onClick }: Props) {
  return (
    <div className="flex flex-row justify-evenly w-full">
      <Image
        src={"/login-button.svg"}
        alt={"login button"}
        priority
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
}
