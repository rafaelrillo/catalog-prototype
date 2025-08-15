import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, type ProductCategory } from './ProductCard';

// Mock data realistas para productos de repostería
const mockProducts = {
  tortas: [
    {
      name: 'Torta Red Velvet',
      description: 'Deliciosa torta de terciopelo rojo con frosting de queso crema',
      price: 25000,
      image: 'https://picsum.photos/300/300?random=1',
      portions: 8,
    },
    {
      name: 'Torta Chocolate',
      description: 'Torta húmeda de chocolate con ganache y frutos rojos',
      price: 22000,
      image: 'https://picsum.photos/300/300?random=2',
      portions: 10,
    },
    {
      name: 'Torta de Limón',
      description: 'Torta esponjosa con crema de limón y merengue italiano',
      price: 20000,
      image: 'https://picsum.photos/300/300?random=3',
      portions: 6,
    },
  ],
  tartas: [
    {
      name: 'Tarta de Frutas',
      description: 'Base crocante con crema pastelera y frutas de estación',
      price: 18000,
      image: 'https://picsum.photos/300/300?random=4',
      portions: 8,
    },
    {
      name: 'Tarta de Manzana',
      description: 'Clásica tarta con manzanas acaneladas y masa quebrada',
      price: 16000,
      image: 'https://picsum.photos/300/300?random=5',
      portions: 6,
    },
  ],
  brownies: [
    {
      name: 'Brownie Clásico',
      description: 'Brownie denso con nueces y chips de chocolate',
      price: 8000,
      image: 'https://picsum.photos/300/300?random=6',
      portions: 12,
    },
    {
      name: 'Brownie Oreo',
      description: 'Brownie con galletas Oreo y frosting de vainilla',
      price: 9500,
      image: 'https://picsum.photos/300/300?random=7',
      portions: 9,
    },
  ],
  cheesecakes: [
    {
      name: 'Cheesecake Frutos Rojos',
      description: 'Cremoso cheesecake con salsa de frutos del bosque',
      price: 24000,
      image: 'https://picsum.photos/300/300?random=8',
      portions: 8,
    },
    {
      name: 'Cheesecake Dulce de Leche',
      description: 'Cheesecake argentino con dulce de leche y base de vainillas',
      price: 26000,
      image: 'https://picsum.photos/300/300?random=9',
      portions: 10,
    },
  ],
  alfajores: [
    {
      name: 'Alfajores de Maicena',
      description: 'Tradicionales alfajores con dulce de leche y coco',
      price: 3500,
      image: 'https://picsum.photos/300/300?random=10',
      portions: 6,
    },
    {
      name: 'Alfajores de Chocolate',
      description: 'Alfajores bañados en chocolate con dulce de leche',
      price: 4200,
      image: 'https://picsum.photos/300/300?random=11',
      portions: 4,
    },
  ],
  otros: [
    {
      name: 'Macarons Franceses',
      description: 'Delicados macarons en sabores variados',
      price: 12000,
      image: 'https://picsum.photos/300/300?random=12',
      portions: 12,
    },
    {
      name: 'Cupcakes Decorados',
      description: 'Cupcakes con buttercream y decoraciones temáticas',
      price: 6500,
      image: 'https://picsum.photos/300/300?random=13',
      portions: 6,
    },
  ],
};

const meta: Meta<typeof ProductCard.Root> = {
  title: 'Components/ProductCard',
  component: ProductCard.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente ProductCard refactorizado para usar design tokens. Mantiene toda la funcionalidad original pero ahora usa el sistema de tokens para colores, spacing y tipografía.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: { type: 'select' },
      options: ['tortas', 'tartas', 'brownies', 'cheesecakes', 'alfajores', 'otros'],
      description: 'Categoría del producto que determina los colores',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica
export const Default: Story = {
  args: {
    category: 'tortas',
  },
  render: (args) => {
    const product = mockProducts.tortas[0];
    return (
      <ProductCard.Root category={args.category}>
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category={args.category}>
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
          index={0}
          categoryIndex={0}
        />
      </ProductCard.Root>
    );
  },
};

// Stories por categoría
export const Tortas: Story = {
  render: () => {
    const product = mockProducts.tortas[0];
    return (
      <ProductCard.Root category="tortas">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="tortas">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

export const Tartas: Story = {
  render: () => {
    const product = mockProducts.tartas[0];
    return (
      <ProductCard.Root category="tartas">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="tartas">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

export const Brownies: Story = {
  render: () => {
    const product = mockProducts.brownies[0];
    return (
      <ProductCard.Root category="brownies">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="brownies">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

export const Cheesecakes: Story = {
  render: () => {
    const product = mockProducts.cheesecakes[0];
    return (
      <ProductCard.Root category="cheesecakes">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="cheesecakes">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

export const Alfajores: Story = {
  render: () => {
    const product = mockProducts.alfajores[0];
    return (
      <ProductCard.Root category="alfajores">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="alfajores">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

export const Otros: Story = {
  render: () => {
    const product = mockProducts.otros[0];
    return (
      <ProductCard.Root category="otros">
        <ProductCard.Details>
          <ProductCard.Name name={product.name} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="otros">
              <p className="portion-number">{product.portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={product.price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={product.image}
          productName={product.name}
        />
      </ProductCard.Root>
    );
  },
};

// Story mostrando todas las categorías
export const AllCategories: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '24px', 
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '12px',
      maxWidth: '1200px'
    }}>
      {(Object.keys(mockProducts) as ProductCategory[]).map((category) => {
        const product = mockProducts[category][0];
        return (
          <div key={category} style={{ textAlign: 'center' }}>
            <h4 style={{ 
              margin: '0 0 16px', 
              color: '#374151', 
              fontSize: '16px', 
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>
              {category}
            </h4>
            <ProductCard.Root category={category}>
              <ProductCard.Details>
                <ProductCard.Name name={product.name} />
                <ProductCard.Description description={product.description} />
                <ProductCard.Footer>
                  <ProductCard.Portion category={category}>
                    <p className="portion-number">{product.portions}</p>
                  </ProductCard.Portion>
                  <ProductCard.Price price={product.price} />
                </ProductCard.Footer>
              </ProductCard.Details>
              <ProductCard.Image
                image={product.image}
                productName={product.name}
              />
            </ProductCard.Root>
          </div>
        );
      })}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vista completa de todas las categorías de productos con sus respectivos colores de design tokens.',
      },
    },
  },
};

// Story con productos variados
export const ProductVariety: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '12px',
      maxWidth: '400px'
    }}>
      <ProductCard.Root category="tortas">
        <ProductCard.Details>
          <ProductCard.Name name={mockProducts.tortas[1].name} />
          <ProductCard.Description description={mockProducts.tortas[1].description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="tortas">
              <p className="portion-number">{mockProducts.tortas[1].portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={mockProducts.tortas[1].price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={mockProducts.tortas[1].image}
          productName={mockProducts.tortas[1].name}
        />
      </ProductCard.Root>

      <ProductCard.Root category="brownies">
        <ProductCard.Details>
          <ProductCard.Name name={mockProducts.brownies[1].name} />
          <ProductCard.Description description={mockProducts.brownies[1].description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="brownies">
              <p className="portion-number">{mockProducts.brownies[1].portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={mockProducts.brownies[1].price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={mockProducts.brownies[1].image}
          productName={mockProducts.brownies[1].name}
        />
      </ProductCard.Root>

      <ProductCard.Root category="alfajores">
        <ProductCard.Details>
          <ProductCard.Name name={mockProducts.alfajores[1].name} />
          <ProductCard.Description description={mockProducts.alfajores[1].description} />
          <ProductCard.Footer>
            <ProductCard.Portion category="alfajores">
              <p className="portion-number">{mockProducts.alfajores[1].portions}</p>
            </ProductCard.Portion>
            <ProductCard.Price price={mockProducts.alfajores[1].price} />
          </ProductCard.Footer>
        </ProductCard.Details>
        <ProductCard.Image
          image={mockProducts.alfajores[1].image}
          productName={mockProducts.alfajores[1].name}
        />
      </ProductCard.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de variedad de productos mostrando diferentes categorías y precios.',
      },
    },
  },
};