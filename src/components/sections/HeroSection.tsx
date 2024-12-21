import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/hero.png";

const HeroSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="relative bg-black bg-opacity-50"
      height="h-screen"
      sectionId="top"
    >
      <div className="flex h-full flex-col items-center justify-center space-y-8 text-center text-white">
        <p className="text-4xl font-extrabold tracking-wide md:text-5xl">
          AVAILABLE NOW
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <button
            aria-label="Go to Steam page"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            BUY STEAM
          </button>
          <button
            aria-label="Go to Epic Store page"
            className="rounded-full bg-gradient-to-r from-green-500 to-teal-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            BUY EPIC
          </button>
        </div>
      </div>
    </ImageSection>
  );
};

export default HeroSection;
