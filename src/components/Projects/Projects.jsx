import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Title>Projeler</Title>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectLinks>
                  <ProjectLink href={project.githubLink} target="_blank" title="GitHub">
                    <FiGithub />
                  </ProjectLink>
                  {project.liveLink && (
                    <ProjectLink href={project.liveLink} target="_blank" title="Canlı Demo">
                      <FiExternalLink />
                    </ProjectLink>
                  )}
                  {project.pdfLinks && project.pdfLinks.map((pdfLink, index) => (
                    <ProjectLink key={index} href={pdfLink} target="_blank" title={`Detaylar ${index + 1}`}>
                      <FiFileText />
                    </ProjectLink>
                  ))}
                </ProjectLinks>
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Features>
                  {project.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </Features>
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechStack>
              </ProjectInfo>
              <ProjectFooter>
                <FooterLink href={project.githubLink} target="_blank">
                  <FiGithub /> GitHub
                </FooterLink>
                {project.liveLink && (
                  <FooterLink href={project.liveLink} target="_blank">
                    <FiExternalLink /> Demo
                  </FooterLink>
                )}
                {project.pdfLinks && project.pdfLinks.map((pdfLink, index) => (
                  <FooterLink key={index} href={pdfLink} target="_blank">
                    <FiFileText /> {project.id === 4 ? `Detaylar ${index + 1}` : 'Detaylar'}
                  </FooterLink>
                ))}
              </ProjectFooter>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: ${({ theme }) => theme.card};
    transition: transform 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    div {
      opacity: 1;
    }
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectImage}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex: 1;

  > * {
    width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.primary}20;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 1rem;
`;

const Features = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}CC;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechItem = styled.span`
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border}30;
  margin-top: auto;
  background: ${({ theme }) => theme.card};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.background};
  }

  svg {
    font-size: 1.2rem;
  }
`;

export default Projects;