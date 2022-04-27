import Link from 'next/link';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <ul>
              <li>
                <Link href="about">about</Link>
              </li>
              <li>
                <Link href="portfolio">portfolio</Link>
              </li>
              <li>
                <Link href="contact">contact</Link>
              </li>
            </ul>
          </div>
          <p>&copy; 2022 Scott Duller </p>
        </nav>
      </header>
    </div>
  );
};

export default Footer;
