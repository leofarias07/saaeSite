import Link from 'next/link';
import { Container } from './styles';

interface CardNoticiaProps {
  img: string;
  title: string;
  slug: string;
}

function CardNoticia({ img, title, slug }: CardNoticiaProps) {
  return (
    <Container data-aos="fade-up">
      <div className="cardNoticia">
        <Link href={`/noticias/${slug}`}>
          <a>
            <div className="imgNoticia">
              <img src={img} alt="" />
            </div>
            <div>
              <h1>{title}</h1>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default CardNoticia;
