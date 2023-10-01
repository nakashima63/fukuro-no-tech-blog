import Image from "next/image";
import IconImage from "../../../public/images/profile_icon.svg";

export const Icon = () => {
  return (
    <div className="flex items-center">
      <Image src={IconImage} alt="profile icon" />
    </div>
  );
};