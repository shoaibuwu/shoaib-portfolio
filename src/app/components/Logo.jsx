import Image from "next/image";
import BrandLogo from "@/app/statics/brand/logo.svg";
const Logo = () => {
  return (
    <>
      <Image
        src={BrandLogo}
        alt="Shoaib Akhtar Logo"
        height={50}
        width={251}
        priority
        className="mx-auto"
      />
    </>
  );
};

export default Logo;
