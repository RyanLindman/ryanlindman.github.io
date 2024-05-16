import { Container } from '@mui/material'
import PaperContent from './PaperContent'
import Greeting from '../../components/Greeting'
import './Home.css'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import '../../App.css'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <NavigationBar children={undefined} />
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
