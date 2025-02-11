import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../utils/animations';


const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <TextContent
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
          <Greeting>Merhaba, ben</Greeting>
          <Name>Hüseyin</Name>
          <Title>Bilgisayar Mühendisi</Title>
          <Description>
          Yazılım geliştirme ve teknolojiye tutkuyla bağlıyım. Yeni şeyler öğrenmeye ve kendimi geliştirmeye devam ediyorum.
          </Description>
            <ButtonGroup>
              <PrimaryButton href="#projects">Projelerimi Gör</PrimaryButton>
              <SecondaryButton href="#contact">İletişime Geç</SecondaryButton>
            </ButtonGroup>
          </TextContent>

          <ImageContent
            variants={slideIn('right')}
            initial="initial"
            animate="animate"
          >
            <HeroImage src="/117.png" alt="Profile" />
          </ImageContent>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  margin-top: 70px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  max-width: 600px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.gradient};
  color: white;
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export default Hero;