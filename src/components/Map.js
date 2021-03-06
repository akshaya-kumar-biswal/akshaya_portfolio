import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map3.jpg';
import PText from './PText';

const Map = () => (
  <MapStyles>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">Here is me</h3>
        <PText>Odisha, India</PText>
        <a
          className="map__card__link"
          href="https://www.google.com/maps/place/Brahmapur,+Odisha/@19.2940657,84.7613927,13z/data=!4m13!1m7!3m6!1s0x3a3d500ef1cb60ad:0x5b75778874294ff!2sBrahmapur,+Odisha!3b1!8m2!3d19.3149618!4d84.7940911!3m4!1s0x3a3d500ef1cb60ad:0x5b75778874294ff!8m2!3d19.3149618!4d84.7940911"
          target="_blank"
          rel="noreferrer"
        >
          Open in google map
        </a>
      </div>
    </div>
  </MapStyles>
);

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default Map;
