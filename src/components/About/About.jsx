import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title>Hakkımda</Title>
        
        <ContentWrapper>
          <AboutContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutText>
              Merhaba! Ben Hüseyin, bilgisayar mühendisliği mezunu bir yazılım geliştiriciyim.  
              Teknolojiye olan ilgimle, farklı alanlarda projeler geliştiriyor ve kendimi sürekli yeniliyorum.  
            </AboutText>
            <AboutText>
              Ağırlıklı olarak Python ile model geliştirme üzerine çalıştım, ancak web ve mobil geliştirme  
              gibi farklı alanlara da ilgi duyuyorum. Yeni teknolojileri keşfetmeye ve farklı yazılım  
              disiplinlerinde deneyim kazanmaya odaklanıyorum.  
            </AboutText>
          </AboutContent>

          <ExperienceSection>
            <SectionTitle>Deneyim</SectionTitle>
            {experienceData.work.map((exp) => (
              <ExperienceCard
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ExperienceHeader>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperiencePeriod>{exp.period}</ExperiencePeriod>
                </ExperienceHeader>
                <CompanyName>{exp.company}</CompanyName>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
                <TechStack>
                  {exp.technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechStack>
              </ExperienceCard>
            ))}
          </ExperienceSection>

          <EducationSection>
            <SectionTitle>Eğitim</SectionTitle>
            {experienceData.education.map((edu) => (
              <EducationCard
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <EducationHeader>
                  <EducationDegree>{edu.degree}</EducationDegree>
                  <EducationPeriod>{edu.period}</EducationPeriod>
                </EducationHeader>
                <SchoolName>{edu.school}</SchoolName>
                <EducationDescription>{edu.description}</EducationDescription>
              </EducationCard>
            ))}
          </EducationSection>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 1.5rem;
`;

const ExperienceSection = styled.div`
  margin-top: 2rem;
`;

const EducationSection = styled.div`
  margin-top: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.secondary};
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 1.5rem;
`;

const ExperienceCard = styled(Card)``;

const EducationCard = styled(Card)``;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ExperienceHeader = styled(CardHeader)``;

const EducationHeader = styled(CardHeader)``;

const ExperienceTitle = styled.h4`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
`;

const EducationDegree = styled.h4`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
`;

const CompanyName = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const SchoolName = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Period = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}99;
`;

const ExperiencePeriod = styled(Period)``;

const EducationPeriod = styled(Period)``;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled(Description)``;

const EducationDescription = styled(Description)``;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.span`
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
`;

export default About;