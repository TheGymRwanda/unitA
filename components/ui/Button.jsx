import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
const Button = ({ children, link = "#", target, size = "normal" }) => {
  const buttonStyle = classNames(
    "bg-white text-black flex w-fit px-8.75 lg:px-12 gap-6 group",
    {
      "py-4 text-xl sm:text-3xl leading-7.5 -tracking-stretch sm:leading-9.5 rounded-5xl":
        size === "large",
      "py-3 text-lg sm:text-2xl md:-tracking-stretch rounded-4xl leading-6.75 md:leading-7.5":
        size !== "large",
    }
  );
  return (
    <Link href={link} target={target}>
      <div className={buttonStyle}>
        {children}
        <Image
          src={"/icons/arrow.svg"}
          width={28}
          height={28}
          alt="arrow"
          className="group-hover:rotate-45 transition-transform"
        />
      </div>
    </Link>
  );
};

export default Button;
