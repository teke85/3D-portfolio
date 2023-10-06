import styled from 'styled-components';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import LatestTechnologies from './components/LatestTechnologies';
import OurVision from './components/OurVision';
import Services from './components/Services';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #000;
`;

function App() {
  return (
    <Container>
      <Hero />
      <OurVision />
      <Services />
      <LatestTechnologies />
      <GetStarted />
      <Contact />
      <Faqs />
      <Footer />
    </Container>
  );
}

export default App;
