import Link from "../../Link";
import footerData from "@/app/Data/footerData";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:justify-between md:items-start">
        {/* Contact Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <Link
                href="mailto:shoaib.newversion@gmail.com"
                className="hover:text-accent transition-colors"
              >
                shoaib.newversion@gmail.com
              </Link>
            </li>
            <li>
              Phone:{" "}
              <Link
                href="tel:+923217578436"
                className="hover:text-accent transition-colors"
              >
                +92 321 7578436
              </Link>
            </li>
            <li>Location: Farid Town, Sahiwal, Punjab, Pakistan</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            {footerData.map(({ href, icon: Icon, label }, index) => (
              <Link
                key={href} // Use href as the key for uniqueness
                href={href}
                aria-label={label} // Add aria-label for accessibility
              >
                <Icon size={24} className="hover:text-red-950" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © {new Date().getFullYear()} Shoaib Akhtar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
