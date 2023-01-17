import classNames from "classnames";
const Wrapper = ({ children, size = "large" }) => {
  const wrapperStyle = classNames("xl:max-w-7xl mx-auto px-5 sm:px-11.5", {
    "xl:px-20 sm:px-11.5": size === "large",
    "lg:px-11.5 1.1xl:px-0": size !== "large",
  });
  return <div className={wrapperStyle}>{children}</div>;
};

export default Wrapper;
