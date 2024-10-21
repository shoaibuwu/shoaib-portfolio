import Nlink from "next/link";

const Link = ({ href, children, ...props }) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const isEmail = href.startsWith("mailto:");
  const isPhone = href.startsWith("tel:");

  if (isExternal || isEmail || isPhone) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Nlink href={href} {...props}>
      {children}
    </Nlink>
  );
};

export default Link;
