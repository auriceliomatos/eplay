import { Imagem, Titulo, Preco } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import banner from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo> Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5 </Titulo>
        <Preco>
          De <span>R$ 299,90</span> <br />
          por R$ 249,90
        </Preco>
      </div>
      <Button type="link" to="/produto" title="Comprar">
        aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
