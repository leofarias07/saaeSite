import Link from 'next/link';
import { Container } from './styles';

interface NoticiaItemProps {
  img: string;
  title: string;
  slug: string;
}

function NoticiaItem({ title, img, slug }: NoticiaItemProps): JSX.Element {
  return (
    <Container>
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

export default NoticiaItem;
