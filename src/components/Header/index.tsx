/* eslint-disable jsx-a11y/anchor-is-valid */

import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import { Container } from './styles';

import logoImg from '../../assets/logobranca.png';

function Header({ setMenuIsVisible }): JSX.Element {
  return (
    <Container>
      <section>
        <div>
          <Image src={logoImg} alt="Logo" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="http://143.0.52.162:5656/servicosweb/home.jsf">
            Agência Virtual
          </a>
          <a href="/noticias">Notícias</a>
          <a href="#">Institucional</a>
        </nav>
      </section>

      <section>
        <RiMenu3Fill
          size={40}
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </section>
    </Container>
  );
}
export default Header;
