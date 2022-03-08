import { ReactNode } from 'react';
import { IoWaterOutline } from 'react-icons/io5';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <div>
        <h1>
          <IoWaterOutline size={25} /> {title}
        </h1>
      </div>
    </Container>
  );
}

export default SectionTitle;
