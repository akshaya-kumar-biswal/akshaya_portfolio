import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesSection = () => (
  <ServicesItemsStyles>
    <div className="container">
      <SectionTitle subheading="What i will do for you" heading="Services" />
      <div className="services__allItems">
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="portfolio website"
          desc="Portfolio website provides professional information about an individual or a company."
        />
        <ServicesSectionItem
          icon={<MdCode />}
          title="ecommerce website"
          desc="E-Commerce websites are online portals that facilitate online transactions of goods and services."
        />
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="blog website"
          desc="To share information about a given topic and become an expert in an industry. "
        />
      </div>
    </div>
  </ServicesItemsStyles>
);

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default ServicesSection;
