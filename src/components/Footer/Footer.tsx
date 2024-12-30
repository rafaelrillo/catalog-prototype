import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GoogleMap from '../GoogleMap/GoogleMap';
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
          <p>Direccion 1234</p>
          <p>Tel: 381999999</p>
        </div>
      </div>
      <div className='contact-container'>
        <a
          href="tel:+1234567890"
          className="contact-btn"
        >
          <Image
            src="/icons/phone.svg"
            alt="Descripción del ícono"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://wa.me/1234567890?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <Image
            src="/icons/whatsapp.svg"
            alt="Descripción del ícono"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.instagram.com/popacakes/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <Image
            src="/icons/instagram.svg"
            alt="Descripción del ícono"
            width={40}
            height={40}
          /></a>
      </div>
      <div>
        <Link href="https://google.com" className='studio-link'>made by Gocu studio</Link>
      </div>
    </footer>
  );
};

export default Footer;