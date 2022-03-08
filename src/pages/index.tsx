import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Aos from 'aos';

// import WhatsAppWidget from 'react-whatsapp-chat-widget';
import 'react-whatsapp-chat-widget/index.css';

import dynamic from 'next/dynamic';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import { HomeContainer } from '../styles/HomeStyles';

import HomeHero from '../components/HomeHero';

import Noticias from '../components/Noticias';
import { getPrismicClient } from '../services/prismic';
import Footer from '../components/Footer';
import Aviso from '../components/Aviso';
import 'aos/dist/aos.css';
import Dicas from '../components/Dicas';

interface Inoticia {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface HomeProps {
  noticias: Inoticia[];
}

const WhatsAppWidget: any = dynamic(
  () => import('react-whatsapp-chat-widget'),
  { ssr: false }
);

function Home({ noticias }: HomeProps): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <HomeHero />
        <main className="container">
          <Noticias noticias={noticias} />
          <Aviso />
          <Dicas />
        </main>
        <Footer />
      </HomeContainer>
      <WhatsAppWidget
        phoneNo="919884098840"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen
        autoOpenTimer={5000}
        messageBox
        iconSize="60"
        iconColor="white"
        iconBgColor="green"
        headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
        headerIconColor="pink"
        headerTxtColor="black"
        headerBgColor="#0275d8"
        headerTitle="SAAE CAXIAS"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Suporte"
        chatMessage={
          <>
            Olá 👋 <br />
            <br /> Como posso ajudá-lo?
          </>
        }
        footerBgColor="#999"
        btnBgColor="green"
        btnTxtColor="black"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const noticiaResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'noticia')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const noticias = noticiaResponse.results.map(noticia => ({
    slug: noticia.uid,
    title: noticia.data.title,
    description: noticia.data.description,
    thumbnail: noticia.data.thumbnail.url
  }));
  return {
    props: {
      noticias
    },
    revalidate: 86400
  };
};

export default Home;
