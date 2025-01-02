import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GoogleMap from '../GoogleMap/GoogleMap';
import PhoneIcon from '../../../public/icons/phone.svg';
import WhatsappIcon from '../../../public/icons/whatsapp.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Image
        src="/images/logo.png"
        alt="Logo de mi sitio"
        width={100}
        height={100}
      />
      <div className='location-container'>
        <div className='map'>
          <GoogleMap />
        </div>
        <div className='info'>
          <h2>Direccion:</h2>
          <p>Gral. Lamadrid 1200</p>
          <h2>Telefono:</h2>
          <p>381-999999</p>
        </div>
      </div>
      <div className='contact-container'>
        <a
          href="tel:+1234567890"
          className="contact-btn"
        >
        <PhoneIcon width={30} height={30}  />
        </a>
        <a
          href="https://wa.me/1234567890?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <WhatsappIcon width={30} height={30} />
        </a>
        <a
          href="https://www.instagram.com/popacakes/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <InstagramIcon width={30} height={30} />
        </a>
      </div>
      <div className='horarios'>
        <h2>Horario de atencion</h2>
        <p>Lunes a Viernes</p>
        <p>10:30 - 21:00</p>
        <p>Sabados y Domingos</p>
        <p>10:00 - 14:00</p>
      </div>
      <div>
        <Link href="https://google.com" className='studio-link'>made by Gloton Studio</Link>
      </div>
    </footer>
  );
};

export default Footer;