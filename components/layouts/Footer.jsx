import Link from "next/link";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper size="small">
      <div className="flex flex-col gap-13 lg:gap-0 lg:flex-row justify-between xl:mt-39.75 lg:mt-41.25 mt-26 lg:mb-26 mb-8 text-7.5">
        <ul className="space-y-0.25">
          <li>Ape Unit GmbH</li>
          <li>Waldemarstraße 38,</li>
          <li>W10999 Berlin</li>
        </ul>
        <ul className="space-y-0.25">
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
              href="https://de.linkedin.com/company/ape-unit"
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
