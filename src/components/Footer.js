import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const Footer = () => (
  <FooterStyle>
    <div className="container">
      <div className="footer__col1">
        <h1 className="footer__col1__title">Akshaya</h1>
        <PText>
          A web developer from India. I always make websites that have unique
          designs and also has a good performance rate.
        </PText>
      </div>
      <div className="footer__col2">
        <FooterCol
          heading="Important Links"
          links={[
            {
              title: 'Home',
              path: '/',
              type: 'Link',
            },
            {
              type: 'Link',
              title: 'About',
              path: '/about',
            },
            {
              type: 'Link',
              title: 'Projects',
              path: '/projects',
            },
            {
              type: 'Link',
              title: 'Contact',
              path: '/contact',
            },
          ]}
        />
      </div>
      <div className="footer__col3">
        <FooterCol
          heading="Contact Info"
          links={[
            {
              title: '+91 8249189076',
              path: 'tel:+91 8249189076',
            },
            {
              title: 'mail.akshayabiswal@gmail.com',
              path: 'mailto:mail.akshayabiswal@gmail.com',
            },
            {
              title: 'Odisha, India',
              path: 'http://google.com/maps',
            },
          ]}
        />
      </div>
      <div className="footer__col4">
        <FooterCol
          heading="Social Links"
          links={[
            {
              title: 'Facebook',
              path: 'http://facebook.com',
            },
            {
              title: 'Twitter',
              path: 'http://twitter.com',
            },
            {
              title: 'Instagram',
              path: 'http://instagram.com',
            },
          ]}
        />
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <PText>?? 2021 - Akshaya</PText>
      </div>
    </div>
  </FooterStyle>
);

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default Footer;
