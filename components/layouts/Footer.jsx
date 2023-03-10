import Link from "next/link";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper size="small">
      <div className="flex flex-col gap-13 md:gap-0 md:flex-row justify-between md:mt-42 mt-10.2 md:mb-31.25 mb-8 md:text-7.5 text-xl leading-7.5 md:leading-9.5 -tracking-stretch">
        <ul className="space-y-2.5">
          <li>Ape Unit GmbH</li>
          <li>Waldemarstraße 38,</li>
          <li>W10999 Berlin</li>
        </ul>
        <ul className="space-y-2.5">
          <li>
            <Link href="https://twitter.com/apeunit" target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/apeunit/" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/apeunit/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
        <p>
          <Link href="https://apeunit.com/impressum.txt" target="_blank">
            Impressum
          </Link>
          /
          <span>
            <Link href="https://apeunit.com/datenschutz.txt" target="_blank">
              Privacy
            </Link>
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
