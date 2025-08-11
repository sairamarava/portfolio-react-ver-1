import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.module.css';

const Hero = () => {
  const [text] = useTypewriter("AI & Web Development Expertise");

  return (
    <section className="hero" id="home">
      <h1 className="hero-title">{text}</h1>
      <p className="hero-subtitle">
        Transforming ideas into exceptional digital experiences with
        cutting-edge technology and creative solutions.
      </p>
      <a href="#contact" className="btn"><span>Hire Me</span></a>
    </section>
  );
};

export default Hero;