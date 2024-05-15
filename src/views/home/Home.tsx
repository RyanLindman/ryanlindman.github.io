import { Container } from '@mui/material'
import PaperContent from './PaperContent'
import Greeting from '../../components/Greeting'
import './Home.css'
import Footer from '../../components/Footer'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Container
        disableGutters
        className="home-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Greeting />
        <PaperContent />
        <Footer />
      </Container>
    </>
  )
}

export default Home
