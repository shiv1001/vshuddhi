import React from 'react';
import styled from 'styled-components';
import { RiMoneyDollarCircleFill, RiHeartPulseLine } from 'react-icons/ri';
import { MdPiano } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Rythm</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiMoneyDollarCircleFill />}
            title="Hip Hop"
            desc="Pushing the Limits of Logical Lyricism in a Lucid state of mind. "
          />
          <ServiceItem
            icon={<MdPiano />}
            title="Acoustics"
            desc="We are nothing but vibrations, What's better then strings to create a Universe"
          />
          <ServiceItem
            icon={<RiHeartPulseLine />}
            title="Psy"
            desc="Words create the Ilusion of self, step into the world of musical psychosis."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
