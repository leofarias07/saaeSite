import { Container } from './styles';

interface NoticiaContentProps {
  title: string;
  description: string;
  date: string;
  content: string;
}

function NoticiaContent({
  title,
  description,
  date,
  content
}: NoticiaContentProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <span>{date}</span>
      <p>{content}</p>
    </Container>
  );
}

export default NoticiaContent;
