import Image from 'next/image';
import Link from 'next/link';
import { GoogleMap, Icon } from '@/components';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>
        <Image
          src="/images/logo2.png"
          alt="Logo de mi sitio"
          width={99}
          height={41}
        />
        <div className='contact-container'>
          <a
            href="tel:+1234567890"
            className="contact-btn"
          >
            <Icon name='phone' />
          </a>
          <a
            href="https://wa.me/1234567890?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <Icon name='whatsapp' />
          </a>
          <a
            href="https://www.instagram.com/popacakes/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >            
            <Icon name='instagram' />
          </a>
        </div>

      </div>
      <div className='map'>
        <GoogleMap />
      </div>
      <div>

        <div className='info'>
          <p>Gral. Lamadrid 1200 | YB</p>
        </div>
        <div className='line-footer'></div>

        <div className='horarios'>
          <div>
            <p>Lunes a Viernes</p>
            <p>Sabados y Domingos</p>
          </div>
          <div>
            <p>10:30 - 21:00</p>
            <p>10:00 - 14:00</p>
          </div>
        </div>
        <div>
        </div>
        <Link href="https://google.com" className='studio-link'>made by <span>Gloton Studio</span></Link>
      </div>
    </footer>
  );
};
