import { Container } from '@mui/material'
import PaperContent from './PaperContent'
import Greeting from '../../components/Greeting'
import './Home.css'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../../App.css'
import Breadcrumbs from '../../components/Breadcrumbs'


const socialLinks = [
  {href: "https://www.linkedin.com/in/ryan-lindman-0bb377276/", icon: <LinkedInIcon fontSize='large' /> },
  {href: "https://github.com/RyanLindman", icon: <GitHubIcon fontSize='large' />  }
]


const Home: React.FC = () => {
  return (
    <>
      <NavigationBar children={undefined} />
      <Container disableGutters className="home-container">
        <Greeting />
        <PaperContent />
        <Footer links={socialLinks}>
          <Breadcrumbs />
        </Footer>
      </Container>
    </>
  )
}

export default Home
