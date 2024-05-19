import Image from "next/image";
import LoginButton from "../components/login-button";
import SignupButton from "../components/signup-button";

export default function AuthHome() {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen pt-12 pb-16">
      <Image
        src={"/logo.svg"}
        alt="hacknet logo"
        priority
        width={700}
        height={150}
      />

      <div className="flex flex-row justify-evenly w-full">
        <LoginButton width={400} height={206} />
        <SignupButton width={400} height={206} />
      </div>
    </div>
  );
}
