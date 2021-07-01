import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-page-img.jpg';

const AboutSection = () => (
  <AboutSectionStyles>
    <div className="container">
      <div className="aboutSection__left">
        <SectionTitle subheading="Let me introduce myself" heading="About Me" />
        <PText>
          I am a developer from Odisha, India. I create professional websites.
        </PText>
        <div className="aboutSection__buttons">
          <Button btnText="Works" btnLink="/projects" />
          <Button btnText="Read More" btnLink="/about" outline />
        </div>
      </div>
      <div className="aboutSection__right">
        <img className="aboutImg" src={AboutImg} alt="Img" />
      </div>
    </div>
  </AboutSectionStyles>
);

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    display: inline-flex;
  }
  .aboutImg {
    height: 300px;
    width: 300px;
    margin: auto;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default AboutSection;
