import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";

const AboutSection = () => {
  return (
    <Section sectionId="about" className="bg-gray-900 py-16">
      <Wrapper className="text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-wide md:text-5xl">
          About Cavon
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Cavon is a 3D rogue-lite dungeon crawler with a retro-inspired look
          and refined gameplay. Dive into an experience that blends nostalgia
          with modern mechanics.
        </p>
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:gap-16">
          <div className="group rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300">
              Discover Items
            </h2>
            <p className="mt-2 text-gray-300">
              Find over 60+ unique items and a multitude of abilities, giving
              you freedom to tackle any challenge your way.
            </p>
          </div>
          <div className="group rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-green-400 group-hover:text-green-300">
              Unlock Upgrades
            </h2>
            <p className="mt-2 text-gray-300">
              Enhance your abilities with upgrades and materials hidden in every
              stage, unlocking endless potential.
            </p>
          </div>
          <div className="group rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300">
              Explore Worlds
            </h2>
            <p className="mt-2 text-gray-300">
              Unearth the secrets of Cavon&apos;s underground society and uncover the
              mysteries hidden within its depths.
            </p>
          </div>
          <div className="group rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-red-400 group-hover:text-red-300">
              Endless Levels
            </h2>
            <p className="mt-2 text-gray-300">
              Dive into an infinite number of levels with ever-changing
              challenges, ensuring no two experiences are alike.
            </p>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
