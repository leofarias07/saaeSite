import Image from 'next/image';

import { IoLocationOutline, IoShareSocialSharp } from 'react-icons/io5';
import {
  BsFillHouseDoorFill,
  BsFillTelephoneFill,
  BsLink45Deg
} from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Container } from './styles';
import logoImg from '../../assets/logobranca.png';

function Footer() {
  return (
    <Container>
      <main className="container">
        <div className="logoFooter">
          <Image src={logoImg} alt="Logo" />
        </div>
        <div className="endRedes">
          <h1>
            <IoLocationOutline font-size={20} />
            Localização
          </h1>
          <strong>
            <BsFillHouseDoorFill font-size={18} />
            Praça Magalhães de Almeida, 191, centro. <br /> CEP:
            65.606.060/Caxias - MA
            <br /> <BsFillTelephoneFill font-size={18} />
            115
          </strong>
          <span>
            {' '}
            <BsLink45Deg /> http://saae.caxias.ma.gov.br/
          </span>
        </div>

        <div className="sociais">
          <h1>
            {' '}
            <IoShareSocialSharp size={30} />
            Redes Sociais
          </h1>
          <span>
            <FaInstagram size={60} />
            <FaWhatsapp size={60} />
            <FaFacebookSquare size={60} />
          </span>
        </div>
      </main>
      <div className="creditos">
        <p>2017 © SAAE Todos os direitos reservados</p>
        <span>Developer: Leonardo Farias</span>
      </div>
    </Container>
  );
}

export default Footer;
