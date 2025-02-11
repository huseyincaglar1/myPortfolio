import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { socialData } from '../../data/socialData';
import emailjs from '@emailjs/browser';

// EmailJS yapılandırması
emailjs.init("sTiIguiz0azLwVlb_"); // Mevcut public key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: socialData.email,
    };

    try {
      const result = await emailjs.send(
        'service_mry9np2',  // EmailJS servisinden aldığım yeni service ID
        'template_vii32jd', // template ID
        templateParams
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Mesaj gönderilemedi');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>İletişime Geç</Title>
        <ContactContent>
          <ContactInfo>
            <InfoText>
            Teknolojiye olan merakımla sürekli kendimi geliştirmeye devam ediyorum. 
            İşbirliği yapmak veya fikir alışverişinde bulunmak için benimle iletişime geçebilirsiniz.
            </InfoText>
            <ContactDetails>
              <DetailItem>
                <FiMail />
                <span>{socialData.email}</span>
              </DetailItem>
              <DetailItem>
                <FiPhone />
                <span>{socialData.phone}</span>
              </DetailItem>
            </ContactDetails>
            <SocialLinks>
              {socialData.social.map(({ id, url, icon: Icon }) => (
                <SocialLink key={id} href={url} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </SocialLink>
              ))}
              <ResumeButton href={socialData.resume.url} target="_blank" rel="noopener noreferrer">
                <FiDownload /> {socialData.resume.label}
              </ResumeButton>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {status.message && (
              <StatusMessage $type={status.type}>
                {status.message}
              </StatusMessage>
            )}
            <FormGroup>
              <Label>İsim</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>E-posta</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Mesaj</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Gönderiliyor...' : 'Gönder'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
`;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text}CC;
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.gradient};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  text-align: center;
  background: ${({ $type, theme }) =>
    $type === 'success' ? theme.success + '20' : theme.error + '20'};
  color: ${({ $type, theme }) =>
    $type === 'success' ? theme.success : theme.error};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.gradient};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.7 : 0.9)};
  }
`;

export default Contact;