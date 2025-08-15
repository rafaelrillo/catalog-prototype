import type { Meta, StoryObj } from '@storybook/react';

const IntroductionPage = () => (
  <div style={{ 
    padding: '40px', 
    maxWidth: '800px', 
    margin: '0 auto',
    lineHeight: '1.6',
    color: '#374151'
  }}>
    <div style={{ marginBottom: '48px' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '700', 
        marginBottom: '16px',
        color: '#111827'
      }}>
        Design System - Catálogo de Repostería
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
        Bienvenido al **Design System** del catálogo de repostería. Este sistema proporciona 
        componentes reutilizables, design tokens y patrones de diseño consistentes.
      </p>
      
      <div style={{
        background: '#d1fae5',
        border: '1px solid #10b981',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '24px'
      }}>
        <p style={{ 
          margin: '0', 
          color: '#047857', 
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          ✅ <strong>Auto-Deploy Configurado</strong>: Este Storybook se actualiza automáticamente con cada push a GitHub!
        </p>
      </div>
    </div>

    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '20px',
        color: '#111827'
      }}>
        🚀 Instalación y Uso
      </h2>
      
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px' }}>
        1. Importar Design Tokens
      </h3>
      <div style={{
        background: '#1f2937',
        color: '#f9fafb',
        padding: '16px',
        borderRadius: '6px',
        fontFamily: 'Monaco, Menlo, monospace',
        fontSize: '14px',
        marginBottom: '24px',
        overflow: 'auto'
      }}>
        {`// En tu archivo SCSS principal
@import './src/styles/design-tokens';`}
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px' }}>
        2. Usar Componentes
      </h3>
      <div style={{
        background: '#1f2937',
        color: '#f9fafb',
        padding: '16px',
        borderRadius: '6px',
        fontFamily: 'Monaco, Menlo, monospace',
        fontSize: '14px',
        marginBottom: '24px',
        overflow: 'auto'
      }}>
        {`// Importar componentes
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';

// Usar en tu código
<Button variant="primary" size="md">
  Mi Botón
</Button>

<ProductCard.Root category="tortas">
  <ProductCard.Details>
    <ProductCard.Name name="Torta Red Velvet" />
    <ProductCard.Description description="Deliciosa torta..." />
    <ProductCard.Footer>
      <ProductCard.Portion category="tortas">
        <p className="portion-number">8</p>
      </ProductCard.Portion>
      <ProductCard.Price price={25000} />
    </ProductCard.Footer>
  </ProductCard.Details>
  <ProductCard.Image image="..." productName="..." />
</ProductCard.Root>`}
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px' }}>
        3. Usar Design Tokens
      </h3>
      <div style={{
        background: '#1f2937',
        color: '#f9fafb',
        padding: '16px',
        borderRadius: '6px',
        fontFamily: 'Monaco, Menlo, monospace',
        fontSize: '14px',
        marginBottom: '24px',
        overflow: 'auto'
      }}>
        {`.mi-componente {
  background-color: var(--color-tortas-main);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
}`}
      </div>
    </section>

    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '20px',
        color: '#111827'
      }}>
        🧭 Explorar
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        <a
          href="/?path=/docs/design-tokens--docs"
          style={{
            display: 'block',
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#374151',
            background: '#fff',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>
            🎨 Design Tokens
          </strong>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Colores, spacing, tipografía y más tokens del sistema
          </span>
        </a>

        <a
          href="/?path=/docs/colors--docs"
          style={{
            display: 'block',
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#374151',
            background: '#fff',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>
            🌈 Paleta de Colores
          </strong>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Colores por categorías de productos y paleta completa
          </span>
        </a>

        <a
          href="/?path=/docs/design-system-button--docs"
          style={{
            display: 'block',
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#374151',
            background: '#fff',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>
            🔘 Button
          </strong>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Componente Button base con variants y states
          </span>
        </a>

        <a
          href="/?path=/docs/components-productcard--docs"
          style={{
            display: 'block',
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#374151',
            background: '#fff',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>
            🧁 ProductCard
          </strong>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Cards de productos con categorías y design tokens
          </span>
        </a>
      </div>
    </section>

    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '20px',
        color: '#111827'
      }}>
        🎯 Principios del Design System
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px' 
      }}>
        <div style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '20px',
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#065f46', fontSize: '1.125rem' }}>
            Consistencia
          </h3>
          <p style={{ margin: '0', color: '#047857' }}>
            Todos los componentes siguen los mismos patrones de diseño y utilizan design tokens.
          </p>
        </div>

        <div style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          padding: '20px',
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#1e40af', fontSize: '1.125rem' }}>
            Escalabilidad
          </h3>
          <p style={{ margin: '0', color: '#1d4ed8' }}>
            El sistema está diseñado para crecer. Los tokens permiten cambios globales rápidos.
          </p>
        </div>

        <div style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          padding: '20px',
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#991b1b', fontSize: '1.125rem' }}>
            Accesibilidad
          </h3>
          <p style={{ margin: '0', color: '#dc2626' }}>
            Estados de focus, contrastes adecuados y semántica apropiada en todos los componentes.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '20px',
        color: '#111827'
      }}>
        🍰 Categorías de Productos
      </h2>
      
      <div style={{ 
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <p style={{ margin: '0 0 16px 0' }}>
          El sistema está optimizado para productos de repostería con colores específicos por categoría:
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '12px'
        }}>
          {[
            { name: 'Tortas', colors: ['#E67792', '#EB1951'] },
            { name: 'Tartas', colors: ['#A6BFB1', '#5A9272'] },
            { name: 'Brownies', colors: ['#F19C32', '#C57512'] },
            { name: 'Cheesecakes', colors: ['#F8C8DC', '#E91E63'] },
            { name: 'Alfajores', colors: ['#C680CC', '#AA17B6'] },
            { name: 'Otros', colors: ['#FFEB3B', '#F57F17'] },
          ].map(({ name, colors }) => (
            <div key={name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              background: '#fff',
              borderRadius: '4px',
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: colors[0],
                  borderRadius: '50%',
                  border: '1px solid #e5e7eb',
                }}></div>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: colors[1],
                  borderRadius: '50%',
                  border: '1px solid #e5e7eb',
                }}></div>
              </div>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div style={{
      marginTop: '48px',
      padding: '20px',
      background: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <p style={{ margin: '0', color: '#047857', fontWeight: '500' }}>
        💡 <strong>Tip:</strong> Utiliza siempre los design tokens en lugar de valores hardcodeados 
        para mantener la consistencia del sistema.
      </p>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  render: () => <IntroductionPage />,
};