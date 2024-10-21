import Image from "next/image";
import profilePic from "@/app/statics/heroPic/profilePic.webp"; // Replace this with the path to your image

const Hero = () => {
  return (
    <section className="w-full py-14  bg-gray-100">
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="mb-6">
          <Image
            src={profilePic}
            alt="Shoaib Akhtar profile picture"
            height={250}
            width={250}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Shoaib Akhtar</h1>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-2xl">
          I&apos;m a web developer with 3 years of experience in building
          modern, responsive websites. I hold a BSCS degree and specialize in
          developing efficient and creative web solutions. Let&apos;s build
          something amazing together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
