import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="testes"
          image="//placeholder-item.com/320x320"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="testes"
          image="//placeholder-imagem.com/320x320"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="testes"
          image="//placeholder-imagem.com/320x320"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="testes"
          image="//placeholder-imagem.com/320x320"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
