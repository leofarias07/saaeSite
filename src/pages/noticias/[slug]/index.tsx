import { GetStaticPaths, GetStaticProps } from 'next';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import Header from '../../../components/Header';
import MenuMobile from '../../../components/MenuMobile';

import { getPrismicClient } from '../../../services/prismic';

import { NoticiaContainer } from '../../../styles/NoticiaStyles';
import LoadingScreen from '../../../components/LoadingScreen';

import ContentStyle from './style';

interface NoticiaProps {
  noticia: {
    slug: string;
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    updatedAt: string;
  };
}

export default function Noticia({ noticia }: NoticiaProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <ContentStyle>
      <Head>
        <title>{noticia.title} | SAAE CAXIAS</title>
        <meta name="description" content={noticia.description} />
        <meta property="og:image" content={noticia.thumbnail} />
        <meta property="og:image:secure_url" content={noticia.thumbnail} />
        <meta name="twitter:image" content={noticia.thumbnail} />
        <meta name="twitter:image:src" content={noticia.thumbnail} />
        <meta
          property="og:description"
          content="SERVIÇO AUTÔNOMO DE ÁGUA E ESGOTO DE CAXIAS-MA"
        />
      </Head>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <NoticiaContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <main className="container">
          <section>
            <h1>{noticia.title}</h1>
            <h2>{noticia.description}</h2>
            <div className="time">
              <span> Por Sabrina Sousa </span>
              <time>{noticia.updatedAt}</time>
            </div>
            <div
              className="content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />
          </section>
        </main>
      </NoticiaContainer>
    </ContentStyle>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const noticias = await prismic.query([
    Prismic.predicates.at('document.type', 'noticia')
  ]);

  const paths = noticias.results.map(noticia => ({
    params: {
      slug: noticia.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('noticia', String(slug), {});

  const noticia = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    content: RichText.asHtml(response.data.content),
    thumbnail: response.data.thumbnail.url,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  };

  return {
    props: {
      noticia
    },
    revalidate: 86400
  };
};
