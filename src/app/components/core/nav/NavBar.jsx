import NavbarClient from "./NavBarClient";
import BrandLogo from "../../Logo";
import Link from "../../Link";
import MiniNavbar from "./MiniNavBar";

const Navbar = () => {
  const email = "shoaib.newversion@gmail.com";

  return (
    <>
      <MiniNavbar />
      <nav className="bg-accent p-4">
        <div className="hidden md:flex items-center justify-between max-w mx-auto">
          <Link
            href={`mailto:${email}`}
            className="text-black text-xl w-1/3 hover:text-blue-950 transition-colors"
            aria-label={`Email me at ${email}`} // Accessible name for email link
          >
            {email}
          </Link>
          <div className="w-1/3 flex justify-center">
            <Link href={"/"}>
              <BrandLogo />
            </Link>
          </div>
          <div className="flex space-x-4 w-1/3 justify-end">
            <Link
              href={"/cv"}
              className="bg-primary text-secondary px-4 py-2 rounded-lg transition-colors hover:bg-secondary hover:text-primary font-semibold"
              aria-label="View my CV" // Accessible name for CV link
            >
              My CV
            </Link>
            <Link
              href={"/"}
              className="bg-primary text-secondary px-4 py-2 rounded-lg transition-colors hover:bg-secondary hover:text-primary font-semibold"
              aria-label="Hire me" // Accessible name for Hire link
            >
              Hire Me!
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <NavbarClient email={email} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
