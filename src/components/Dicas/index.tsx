import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function Dicas() {
  return (
    <Container data-aos="fade-left">
      <SectionTitle title="Dicas" />
      <div className="dicas">
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/01970ee8-a3d8-4d5d-b05a-531d7b25c4af_vassoura.png?auto=compress,format"
            alt="Logo"
          />
          <p>Use a vassoura para limpas as áreas externas como calçadas.</p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/5aa6ee68-2034-49d0-9fdb-ce43bd93dc11_carro.png?auto=compress,format"
            alt="Logo"
          />
          <p>Lave o carro ou a moto com o balde, evite usar mangueira.</p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/0971c805-5216-4cce-a4ec-4ac9863f0f79_vaso.png?auto=compress,format"
            alt="Logo"
          />
          <p>
            Mantenha a válvula da privada regulada, ela gasta muita água em um
            único aperto.
          </p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/4c45dea5-3274-4090-b361-97a84da11c8f_Torneira+.png?auto=compress,format"
            alt="Logo"
          />
          <p>
            Ao escovar os dentes, fazer a barba ou ensaboar as mãos, feche a
            torneira.
          </p>
        </div>

        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/05740fe9-a14d-45fb-ba9e-2ba24e67dff7_marquina+de+lavar.png?auto=compress,format"
            alt="Logo"
          />
          <p>
            Se for lavar na maquina, use a carga máxima e reaproveite a água
            para lavar o quintal.
          </p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/fabaae72-a75c-40dd-bf3f-67788f94815c_lou%C3%A7a.png?auto=compress,format"
            alt="Logo"
          />
          <p>Enquanto ensaboa a louça, feche a torneira</p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/5d836621-cd31-4493-b019-6cc0c7e930f5_chuveiro.png?auto=compress,format"
            alt="Logo"
          />
          <p>
            Evite passar horas embaixo do chuveiro, diminua o tempo dos banhos.
          </p>
        </div>
        <div className="cardD">
          <img
            src="https://images.prismic.io/sitesaae/6eabaff4-1f77-4ddb-92f6-a656715a0621_Balde.png?auto=compress,format"
            alt="Logo"
          />
          <p>Use balde ou regador para molhar as plantas.</p>
        </div>
      </div>
    </Container>
  );
}

export default Dicas;
