import styled from 'styled-components';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100%;
`;

export default Home;