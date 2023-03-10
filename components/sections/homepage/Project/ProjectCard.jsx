import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "/components/ui";
const ProjectCard = ({ title, description, link, image, width, height }) => {
  return (
    <div className="bg-primary-800 p-4 xl:h-170 w-full space-y-8 lg:p-8 xl:pr-0 xl:grid grid-cols-2 gap-x-5.75 place-items-center xl:pl-12.75 xl:pt-32.75 xl:pb-26.5 rounded-2xl md:rounded-4xl first-of-type:mb-6 md:first-of-type:mb-8 xl:mb-8">
      <div className="bg-transparent mb-8 xl:mb-0">
        <div className="pb-6">
          <h1 className="text-5.75 leading-9 md:text-9.5 -tracking-stretch font-normal md:leading-12.25 text-white">
            {title}
          </h1>
          <p className="text-xl -tracking-stretch leading-7.5 md:text-7.5 md:leading-9.5 text-secondary-400 font-normal">
            {description}
          </p>
        </div>
        <LinkButton target="_blank" link={link}>
          Visit
        </LinkButton>
      </div>
      <Link target="_blank" href={link}>
        <Image
          src={image}
          alt="unit8"
          width={width}
          height={height}
          className="w-full xl:h-102 object-left-top object-cover right-0 rounded-lg"
        />
      </Link>
    </div>
  );
};
export default ProjectCard;
