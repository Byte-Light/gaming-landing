import Wrapper from "./containers/layouts/Wrapper";
import Logo from "./Logo";
import MoveToTop from "./MoveToTop";
import Navigation from "./Navigation";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Top Section */}
      <div className="pt-6 border-b border-dark-700">
        <Wrapper className="flex items-center justify-between">
          <Logo />
          <MoveToTop />
        </Wrapper>
      </div>

      {/* Middle Section with Navigation and Socials */}
      <Wrapper className="py-8">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between">
          <Navigation
            listClassName="flex gap-6 text-sm font-medium sm:flex-row"
            itemClassName="hover:text-primary transition duration-300"
            buttonClassName="hidden"
          />
          <Socials className="flex gap-6 text-3xl sm:justify-end" itemClassName="hover:text-primary transition duration-300" />
        </div>
      </Wrapper>

      {/* Bottom Section with Copyright */}
      <Wrapper className="pt-4 pb-6 text-center text-xs sm:text-sm text-dark-700">
        <p className="text-inherit">
          Copyright © 2025 |{" "}
          <a
            href="#home"
            aria-label="Go to top of the page"
            className="link hover:text-primary transition duration-300"
          >
            Bytelight
          </a>{" "}
          | yeamin
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
