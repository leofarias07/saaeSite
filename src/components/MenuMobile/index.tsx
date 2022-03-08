/* eslint-disable jsx-a11y/anchor-is-valid */

import { IoClose } from 'react-icons/io5';
import React, { useEffect } from 'react';
import { Container } from './styles';

interface MenuMonileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMonileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="/">Home</a>
        <a href="#">Agencia Virtual</a>
        <a href="/noticias">Noticias</a>
        <a href="#">Sobre Nós</a>
      </nav>
    </Container>
  );
}
export default MenuMobile;
