import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Aviso() {
  return (
    <Container>
      <SectionTitle title="Avisos" />
      <div data-aos="zoom-in">
        <div className="sliderAv">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation
            pagination
            modules={[Navigation, Pagination, Autoplay]}
            loop
          >
            <SwiperSlide>
              <img
                src="https://images.prismic.io/sitesaae/9b79e8b6-0fff-4f7d-8b6d-4bde7caddd23_cadastro.jpg?auto=compress,format"
                alt="Logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.prismic.io/sitesaae/9b79e8b6-0fff-4f7d-8b6d-4bde7caddd23_cadastro.jpg?auto=compress,format"
                alt="Logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.prismic.io/sitesaae/9b79e8b6-0fff-4f7d-8b6d-4bde7caddd23_cadastro.jpg?auto=compress,format"
                alt="Logo"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default Aviso;
