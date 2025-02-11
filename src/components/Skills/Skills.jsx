import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <Title>Yetenekler</Title>
        <SkillsGrid>
          {skillsData.categories.map((category) => (
            <SkillCard
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IconWrapper>
                <category.icon />
              </IconWrapper>
              <SkillTitle>{category.title}</SkillTitle>
              <SkillList>
                {category.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.background};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: ${({ theme }) => theme.primary}15;
  }
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary}15;
`;

export default Skills;