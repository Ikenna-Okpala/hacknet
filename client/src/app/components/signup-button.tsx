import Image from "next/image";

type Props = {
  width: number;
  height: number;
};
export default function SignupButton({ width, height }: Props) {
  return (
    <div className="flex flex-row justify-evenly w-full">
      <Image
        src={"/signup-button.svg"}
        alt={"signup button"}
        priority
        width={width}
        height={height}
      />
    </div>
  );
}
