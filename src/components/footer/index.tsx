import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link href="#">FPS</Link>
          </li>
          <li>
            <Link href="#">Estrategia</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} &copy; Game Store. Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
