import type { Meta, StoryObj } from '@storybook/react';

// Colores de categorías
const categoryColors = {
  tortas: { light: '#E67792', main: '#EB1951' },
  tartas: { light: '#A6BFB1', main: '#5A9272' },
  brownies: { light: '#F19C32', main: '#C57512' },
  cheesecakes: { light: '#F8C8DC', main: '#E91E63' },
  alfajores: { light: '#C680CC', main: '#AA17B6' },
  otros: { light: '#FFEB3B', main: '#F57F17' },
};

// Colores neutrales
const neutralColors = [
  { name: 'White', value: '#FFFFFF', token: '--color-neutral-white' },
  { name: 'Gray 50', value: '#F9FAFB', token: '--color-neutral-gray-50' },
  { name: 'Gray 100', value: '#F3F4F6', token: '--color-neutral-gray-100' },
  { name: 'Gray 200', value: '#E5E7EB', token: '--color-neutral-gray-200' },
  { name: 'Gray 300', value: '#D1D5DB', token: '--color-neutral-gray-300' },
  { name: 'Gray 400', value: '#9CA3AF', token: '--color-neutral-gray-400' },
  { name: 'Gray 500', value: '#6B7280', token: '--color-neutral-gray-500' },
  { name: 'Gray 600', value: '#4B5563', token: '--color-neutral-gray-600' },
  { name: 'Gray 700', value: '#374151', token: '--color-neutral-gray-700' },
  { name: 'Gray 800', value: '#1F2937', token: '--color-neutral-gray-800' },
  { name: 'Gray 900', value: '#111827', token: '--color-neutral-gray-900' },
  { name: 'Black', value: '#000000', token: '--color-neutral-black' },
];

// Espaciado
const spacing = [
  { name: 'XS', value: '4px', token: '--spacing-xs' },
  { name: 'SM', value: '8px', token: '--spacing-sm' },
  { name: 'MD', value: '16px', token: '--spacing-md' },
  { name: 'LG', value: '24px', token: '--spacing-lg' },
  { name: 'XL', value: '32px', token: '--spacing-xl' },
  { name: '2XL', value: '48px', token: '--spacing-2xl' },
  { name: '3XL', value: '64px', token: '--spacing-3xl' },
];

// Tipografía
const typography = [
  { name: 'XS', value: '12px', token: '--font-size-xs' },
  { name: 'SM', value: '14px', token: '--font-size-sm' },
  { name: 'Base', value: '16px', token: '--font-size-base' },
  { name: 'LG', value: '18px', token: '--font-size-lg' },
  { name: 'XL', value: '20px', token: '--font-size-xl' },
  { name: '2XL', value: '24px', token: '--font-size-2xl' },
  { name: '3XL', value: '30px', token: '--font-size-3xl' },
  { name: '4XL', value: '36px', token: '--font-size-4xl' },
];

// Border radius
const borderRadius = [
  { name: 'None', value: '0px', token: '--border-radius-none' },
  { name: 'SM', value: '4px', token: '--border-radius-sm' },
  { name: 'MD', value: '8px', token: '--border-radius-md' },
  { name: 'LG', value: '12px', token: '--border-radius-lg' },
  { name: 'XL', value: '16px', token: '--border-radius-xl' },
  { name: '2XL', value: '24px', token: '--border-radius-2xl' },
  { name: 'Full', value: '999px', token: '--border-radius-full' },
];

// Sombras
const shadows = [
  { name: 'SM', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', token: '--shadow-sm' },
  { name: 'MD', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', token: '--shadow-md' },
  { name: 'LG', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', token: '--shadow-lg' },
  { name: 'XL', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', token: '--shadow-xl' },
];

const DesignTokensPage = () => (
  <div style={{ 
    padding: '40px', 
    maxWidth: '1200px', 
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
        Design Tokens
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '32px' }}>
        Los **Design Tokens** son los valores fundamentales que definen el sistema visual. 
        Incluyen colores, espaciado, tipografía, y otros valores que garantizan consistencia.
      </p>
    </div>

    {/* Colores de Categorías */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        🍰 Colores por Categoría
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {Object.entries(categoryColors).map(([category, colors]) => (
          <div key={category} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            background: '#f9fafb',
          }}>
            <h3 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#374151',
              textTransform: 'capitalize'
            }}>
              {category}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Light variant */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '6px',
                background: 'white',
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: colors.light,
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  flexShrink: 0,
                }}></div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0', fontWeight: '500', fontSize: '14px', color: '#111827' }}>
                    {category} Light
                  </p>
                  <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '12px', color: '#6b7280' }}>
                    {colors.light}
                  </p>
                  <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '11px', color: '#9ca3af' }}>
                    --color-{category}-light
                  </p>
                </div>
              </div>
              
              {/* Main variant */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '6px',
                background: 'white',
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: colors.main,
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  flexShrink: 0,
                }}></div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0', fontWeight: '500', fontSize: '14px', color: '#111827' }}>
                    {category} Main
                  </p>
                  <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '12px', color: '#6b7280' }}>
                    {colors.main}
                  </p>
                  <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '11px', color: '#9ca3af' }}>
                    --color-{category}-main
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Colores Neutrales */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        ⚫ Colores Neutrales
      </h2>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        background: '#f9fafb',
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '12px' 
        }}>
          {neutralColors.map((color) => (
            <div key={color.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              borderRadius: '6px',
              background: 'white',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: color.value,
                borderRadius: '4px',
                border: color.value === '#FFFFFF' ? '1px solid #e5e7eb' : 'none',
                flexShrink: 0,
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0', fontWeight: '500', fontSize: '14px', color: '#111827' }}>
                  {color.name}
                </p>
                <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '12px', color: '#6b7280' }}>
                  {color.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Espaciado */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        📏 Espaciado
      </h2>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        background: '#f9fafb',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {spacing.map((space) => (
            <div key={space.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px',
              background: 'white',
              borderRadius: '6px',
            }}>
              <div style={{
                background: '#3b82f6',
                height: '16px',
                width: space.value,
                borderRadius: '2px',
                minWidth: space.value,
              }}></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
                <span style={{ fontWeight: '500', color: '#111827', minWidth: '40px' }}>
                  {space.name}
                </span>
                <span style={{ fontFamily: 'Monaco, Menlo, monospace', fontSize: '12px', color: '#6b7280' }}>
                  {space.value}
                </span>
                <span style={{ fontFamily: 'Monaco, Menlo, monospace', fontSize: '11px', color: '#9ca3af' }}>
                  {space.token}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tipografía */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        🔤 Tipografía
      </h2>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        background: '#f9fafb',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {typography.map((font) => (
            <div key={font.name} style={{
              padding: '16px',
              background: 'white',
              borderRadius: '6px',
            }}>
              <p style={{ 
                margin: '0 0 8px 0', 
                fontSize: font.value,
                color: '#111827',
                lineHeight: '1.2'
              }}>
                Texto de ejemplo - {font.name}
              </p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                <span style={{ fontFamily: 'Monaco, Menlo, monospace', color: '#6b7280' }}>
                  {font.value}
                </span>
                <span style={{ fontFamily: 'Monaco, Menlo, monospace', color: '#9ca3af' }}>
                  {font.token}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Border Radius */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        🔲 Border Radius
      </h2>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        background: '#f9fafb',
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px' 
        }}>
          {borderRadius.map((radius) => (
            <div key={radius.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: 'white',
              borderRadius: '6px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: '#3b82f6',
                borderRadius: radius.value,
                border: '1px solid #e5e7eb',
                flexShrink: 0,
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0', fontWeight: '500', fontSize: '14px', color: '#111827' }}>
                  {radius.name}
                </p>
                <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '12px', color: '#6b7280' }}>
                  {radius.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sombras */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        🌫️ Sombras
      </h2>
      
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        background: '#f9fafb',
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {shadows.map((shadow) => (
            <div key={shadow.name} style={{
              padding: '16px',
              background: 'white',
              borderRadius: '6px',
            }}>
              <div style={{
                width: '80px',
                height: '40px',
                background: '#f3f4f6',
                marginBottom: '12px',
                borderRadius: '4px',
                boxShadow: shadow.value,
              }}></div>
              <p style={{ margin: '0 0 4px 0', fontWeight: '500', fontSize: '14px', color: '#111827' }}>
                Shadow {shadow.name}
              </p>
              <p style={{ margin: '0', fontFamily: 'Monaco, Menlo, monospace', fontSize: '11px', color: '#6b7280', wordBreak: 'break-all' }}>
                {shadow.token}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Ejemplo de Uso */}
    <section>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: '600', 
        marginBottom: '24px',
        color: '#111827'
      }}>
        💻 Ejemplo de Uso
      </h2>
      
      <div style={{
        background: '#1f2937',
        color: '#f9fafb',
        padding: '24px',
        borderRadius: '8px',
        fontFamily: 'Monaco, Menlo, monospace',
        fontSize: '14px',
        lineHeight: '1.6',
        overflow: 'auto'
      }}>
        <div style={{ color: '#9ca3af', marginBottom: '12px' }}>
          /* Usando design tokens en CSS */
        </div>
        <div style={{ color: '#60a5fa' }}>.product-card</div>
        <div>{` {`}</div>
        <div style={{ paddingLeft: '16px' }}>
          <div><span style={{ color: '#60a5fa' }}>background-color:</span> <span style={{ color: '#34d399' }}>var(--color-tortas-light)</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>padding:</span> <span style={{ color: '#34d399' }}>var(--spacing-lg)</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>border-radius:</span> <span style={{ color: '#34d399' }}>var(--border-radius-lg)</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>box-shadow:</span> <span style={{ color: '#34d399' }}>var(--shadow-md)</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>font-size:</span> <span style={{ color: '#34d399' }}>var(--font-size-base)</span>;</div>
        </div>
        <div>{`}`}</div>
        
        <div style={{ marginTop: '24px', color: '#9ca3af', marginBottom: '12px' }}>
          /* Usando mixins helper */
        </div>
        <div style={{ color: '#60a5fa' }}>.my-button</div>
        <div>{` {`}</div>
        <div style={{ paddingLeft: '16px' }}>
          <div><span style={{ color: '#60a5fa' }}>@include</span> <span style={{ color: '#34d399' }}>category-background('tortas', 'main')</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>@include</span> <span style={{ color: '#34d399' }}>padding('md')</span>;</div>
          <div><span style={{ color: '#60a5fa' }}>@include</span> <span style={{ color: '#34d399' }}>border-radius('md')</span>;</div>
        </div>
        <div>{`}`}</div>
      </div>
    </section>
  </div>
);

const meta: Meta = {
  title: 'Design Tokens',
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
  render: () => <DesignTokensPage />,
};