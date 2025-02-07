import { Imagem, Titulo, Preco } from './styles'
import banner from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Titulo> Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5 </Titulo>
      <Preco>
        De <span>R$ 299,90</span> <br />
        por R$ 249,90
      </Preco>
    </div>
  </Imagem>
)

export default Banner
