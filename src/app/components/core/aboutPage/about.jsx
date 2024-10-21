import { aboutMeContent, getIcon } from "@/app/Data/aboutData";

const AboutCard = ({
  heading,
  description,
  isLeft,
  isTopMargin,
  isBottomMargin,
}) => (
  <div
    className={`flex items-center w-full max-w-[690px] ${
      isLeft ? "mr-auto" : "ml-auto"
    }`}
  >
    <div
      className={`flex gap-6 items-center bg-neutral-900 text-primary  p-4 rounded-lg w-full
      ${isLeft ? "flex-row" : "flex-row-reverse"} 
      ${isTopMargin ? "mt-10" : ""} 
      ${isBottomMargin ? "mb-10" : ""}
      transform transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl hover:shadow-neutral-800
      hover:-translate-y-2 cursor-pointer
      `}
    >
      <div className="bg-white text-black rounded-full p-3 transform transition-transform duration-300 group-hover:rotate-12">
        {getIcon(heading)}
      </div>
      <div className={`flex-1 ${isLeft ? "text-left" : "text-right"}`}>
        <h3 className="font-bold text-2xl mb-2 transform transition-all duration-300 hover:text-red-500 no-underline">
          {heading}
        </h3>
        <p className="text-base text-gray-300 transition-all duration-300 hover:text-white">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const AboutMe = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-20 ">About me</h2>
      <div className="relative">
        {/* Center divider line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-950 -translate-x-1/2" />

        {/* Cards container */}
        <div className="flex flex-col gap-10">
          {aboutMeContent.map((content, index) => (
            <AboutCard
              key={content.heading}
              {...content}
              isLeft={index % 2 === 0}
              isTopMargin={index === 0} // Top margin only for the first card
              isBottomMargin={index === aboutMeContent.length - 1} // Bottom margin only for the last card
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
