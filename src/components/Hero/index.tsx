import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infor } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RGB</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infor>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 199,00
        </p>
        <Button type="button" title="Adicionar ao carrinho" variant="primary">
          Adicionar ao carrinho
        </Button>
      </Infor>
    </div>
  </Banner>
)

export default Hero
