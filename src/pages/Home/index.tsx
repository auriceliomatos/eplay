import Banner from '../../components/Banneer'
import ProductsList from '../../components/ProductsList'
import Games from '../../models/Games'
import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Games[] = [
  {
    id: 1,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: resident,
    infos: ['-5%', 'R$ 290,00']
  },
  {
    id: 2,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: starWars,
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 3,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'ps5',
    image: zelda,
    infos: ['-5%', 'R$ 290,00']
  },
  {
    id: 4,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: diablo,
    infos: ['-5%', 'R$ 290,00']
  }
]

const emBreve: Games[] = [
  {
    id: 5,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: resident,
    infos: ['-5%', 'R$ 290,00']
  },
  {
    id: 6,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: starWars,
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 7,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'ps5',
    image: zelda,
    infos: ['-5%', 'R$ 290,00']
  },
  {
    id: 8,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    title: 'GTA V',
    system: 'windows',
    image: diablo,
    infos: ['-5%', 'R$ 290,00']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
