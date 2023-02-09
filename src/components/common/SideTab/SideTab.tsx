import { SideTabProps } from "./SideTab.type";
import Image from "next/image";

export const SideTab = (props: SideTabProps) => {
  const { iconName, className, title, onClick, isClicked } = props;

  return (
    <div
      className={`z-10 absolute
        ${className}`}
      onClick={() => {onClick && onClick()}}
    >
      <div className={
        `bg-slate-800 border-2 rounded-md p-2  cursor-pointer h-fit w-28 flex flex-col items-end justify-center hover:shadow-md transition-all
         ${isClicked ? "border-orange-500 hover:shadow-orange-500" : "border-gray-200 hover:shadow-gray-200"}`
        }>
        <Image
          src={`/images/${iconName}.svg`}
          alt="iconName"
          width={40}
          height={40}
          className="my-1"
        />
        <p className="text-center">{title}</p>
      </div>
    </div>
  );
};

export default SideTab;
