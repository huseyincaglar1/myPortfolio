import React from 'react';
import { FiCode, FiDatabase, FiSmartphone, FiBarChart, FiTool } from 'react-icons/fi';

export const skillsData = {
  categories: [
    {
      id: 1,
      title: "Frontend Geliştirme",
      icon: FiCode,
      skills: [
        { name: "React.js", level: "Orta Seviye" },
        { name: "HTML5 & CSS3", level: "Başlangıç Seviye" },
        { name: "Tailwind CSS", level: "Başlangıç Seviye" }
      ]
    },
    {
      id: 2,
      title: "Backend Geliştirme",
      icon: FiDatabase,
      skills: [
        { name: "Node.js", level: "Orta Seviye" },
        { name: "Flask", level: "Orta Seviye" },
        { name: "PostgreSQL", level: "Başlangıç Seviye" }
      ]
    },
    {
      id: 3,
      title: "Mobil Geliştirme",
      icon: FiSmartphone,
      skills: [
        { name: "Flutter", level: "Orta Seviye" },
        { name: "React Native", level: "Başlangıç Seviye" }
      ]
    },
    {
      id: 4,
      title: "Veri Bilimi & Modelleme",
      icon: FiBarChart,
      skills: [
        { name: "Python", level: "Orta Seviye" },
        { name: "Pandas & NumPy", level: "Orta Seviye" },
        { name: "TensorFlow & PyTorch", level: "Orta Seviye" },
        { name: "Makine Öğrenmesi", level: "Orta Seviye" }
      ]
    },
    {
      id: 5,
      title: "Araçlar & Teknolojiler",
      icon: FiTool,
      skills: [
        { name: "Git & GitHub", level: "Orta Seviye" },
        { name: "Firebase", level: "Orta Seviye" },
        { name: "Postman", level: "Orta Seviye" },
      ]
    }
  ]
};