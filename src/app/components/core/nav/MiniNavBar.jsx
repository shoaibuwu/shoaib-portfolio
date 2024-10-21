import footerData from "@/app/Data/footerData";
import Link from "../../Link";

const MiniNavbar = () => {
  return (
    <div className="hidden md:flex justify-end space-x-6 p-2 mr-8">
      {footerData.map(({ href, icon: Icon, label }, index) => (
        <Link
          key={href} // Use href as the key for uniqueness
          href={href}
          aria-label={label} // Add aria-label for accessibility
        >
          <Icon size={18} className="hover:text-red-950" />
        </Link>
      ))}
    </div>
  );
};

export default MiniNavbar;
