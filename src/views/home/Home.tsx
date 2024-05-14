import { Container } from '@mui/material'
import PaperContent from './PaperContent'
import Greeting from '../../components/Greeting'
import './Home.css'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Container
        disableGutters
        className="home-container"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Greeting />
        <PaperContent />
      </Container>
    </>
  )
}

export default Home
