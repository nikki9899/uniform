import { memo } from "react";

const SocialMediaIcons = (props) => {
  let { name, iconPath ,link } = props.socialMedia;

  return (
    <a
      href={link}
      target="_blank"
      className="text-gray-400 hover:text-gray-900 "
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 25 24"
      >
        <path d={iconPath} />
      </svg>
      <span className="sr-only">{name}</span>
    </a>
  );
};

export default memo(SocialMediaIcons);
