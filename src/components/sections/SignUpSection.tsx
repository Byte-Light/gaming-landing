import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/hero.png";

const SignUpSection = () => {
  return (
    <ImageSection
      image={heroImage}
      className="relative bg-black bg-opacity-70"
      height="h-[500px]"
      sectionId="sign-up"
    >
      <div className="absolute top-1/2 w-full translate-y-[-50%]">
        <Wrapper className="h-full space-y-8 text-center text-white">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold md:text-5xl">
              Sign Up for Updates
            </h1>
            <p className="mx-auto max-w-lg text-lg md:text-xl">
              Sign up now to get all the latest news about the game and features
              that will be implemented. With your feedback, we can continue to
              enhance the experience for the future of the game and its player
              base.
            </p>
          </div>
          <form action="" className="space-y-4">
            <div className="mx-auto max-w-xl flex flex-col sm:flex-row sm:max-w-lg">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg border-2 border-primary p-4 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                aria-label="Sign up for news and updates"
                className="mt-4 sm:mt-0 sm:ml-4 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </Wrapper>
      </div>
    </ImageSection>
  );
};

export default SignUpSection;
