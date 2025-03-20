
import PortionIcon from '../../../public/icons/portion-icon.svg'

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  cardBgColor: string; // Color de fondo dinámico
  portionBgColor: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image, cardBgColor, portionBgColor }) => {

  return (
    <>

      <div
        className="product-card"
        style={{ backgroundColor: cardBgColor }}
      >
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
          <div className='product-footer'>
            <div className='portions' style={{ backgroundColor: portionBgColor }}>
              <PortionIcon width={10} height={10} />
              <p>10</p>
            </div>
            <p className="product-price">${price}</p>
          </div>
        </div>
        <div
        className="product-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      </div>
    </>
  );
};