import type { Meta, StoryObj } from '@storybook/react';

// Definición de colores del sistema
const categoryColors = {
  tortas: { light: '#E67792', main: '#EB1951' },
  tartas: { light: '#A6BFB1', main: '#5A9272' },
  brownies: { light: '#F19C32', main: '#C57512' },
  cheesecakes: { light: '#F8C8DC', main: '#E91E63' },
  alfajores: { light: '#C680CC', main: '#AA17B6' },
  otros: { light: '#FFEB3B', main: '#F57F17' },
};

const neutralColors = {
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  black: '#000000',
};

const semanticColors = {
  success: { light: '#D1FAE5', main: '#10B981', dark: '#047857' },
  warning: { light: '#FEF3C7', main: '#F59E0B', dark: '#D97706' },
  error: { light: '#FEE2E2', main: '#EF4444', dark: '#DC2626' },
  info: { light: '#DBEAFE', main: '#3B82F6', dark: '#1D4ED8' },
};

// Componente para mostrar una paleta de colores
const ColorSwatch = ({ 
  color, 
  name, 
  cssVar, 
  description 
}: { 
  color: string; 
  name: string; 
  cssVar?: string;
  description?: string;
}) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    minWidth: '160px',
  }}>
    <div
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: color,
        borderRadius: '8px',
        border: color === '#FFFFFF' ? '1px solid #e5e7eb' : 'none',
        marginBottom: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}
    />
    <div style={{ textAlign: 'center' }}>
      <p style={{ 
        margin: '0 0 4px 0', 
        fontWeight: '600', 
        fontSize: '14px',
        color: '#111827'
      }}>
        {name}
      </p>
      <p style={{ 
        margin: '0 0 4px 0', 
        fontFamily: 'Monaco, Menlo, monospace', 
        fontSize: '12px',
        color: '#6b7280'
      }}>
        {color}
      </p>
      {cssVar && (
        <p style={{ 
          margin: '0 0 8px 0', 
          fontFamily: 'Monaco, Menlo, monospace', 
          fontSize: '11px',
          color: '#9ca3af',
          wordBreak: 'break-all'
        }}>
          {cssVar}
        </p>
      )}
      {description && (
        <p style={{ 
          margin: '0', 
          fontSize: '12px',
          color: '#6b7280',
          lineHeight: '1.4'
        }}>
          {description}
        </p>
      )}
    </div>
  </div>
);

// Componente para mostrar ejemplos de uso
const UsageExample = ({ 
  title, 
  correct, 
  incorrect 
}: { 
  title: string; 
  correct: { color: string; text: string; }; 
  incorrect: { color: string; text: string; };
}) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '24px',
  }}>
    <div style={{
      padding: '16px',
      border: '2px solid #10b981',
      borderRadius: '8px',
      background: '#f0fdf4',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
        <span style={{ color: '#10b981', marginRight: '8px', fontSize: '18px' }}>✓</span>
        <strong style={{ color: '#065f46' }}>Correcto</strong>
      </div>
      <div style={{
        padding: '12px',
        backgroundColor: correct.color,
        borderRadius: '4px',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
      }}>
        {correct.text}
      </div>
    </div>
    
    <div style={{
      padding: '16px',
      border: '2px solid #ef4444',
      borderRadius: '8px',
      background: '#fef2f2',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
        <span style={{ color: '#ef4444', marginRight: '8px', fontSize: '18px' }}>✗</span>
        <strong style={{ color: '#991b1b' }}>Incorrecto</strong>
      </div>
      <div style={{
        padding: '12px',
        backgroundColor: incorrect.color,
        borderRadius: '4px',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
      }}>
        {incorrect.text}
      </div>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Paleta completa de colores del design system, incluyendo colores por categorías de productos, neutrales y semánticos.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal mostrando todos los colores
export const AllColors: Story = {
  render: () => (
    <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ margin: '0 0 32px 0', color: '#111827' }}>Paleta Completa de Colores</h2>
      
      {/* Colores por Categoría */}
      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#374151' }}>🍰 Colores por Categoría de Productos</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '20px' 
        }}>
          {Object.entries(categoryColors).map(([category, colors]) => (
            <div key={category}>
              <h4 style={{ 
                margin: '0 0 16px 0', 
                textAlign: 'center', 
                textTransform: 'capitalize',
                color: '#4b5563',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                {category}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ColorSwatch
                  color={colors.light}
                  name="Light"
                  cssVar={`--color-${category}-light`}
                  description="Fondo de cards"
                />
                <ColorSwatch
                  color={colors.main}
                  name="Main"
                  cssVar={`--color-${category}-main`}
                  description="Acentos y detalles"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colores Neutrales */}
      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#374151' }}>⚫ Colores Neutrales</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '16px' 
        }}>
          {Object.entries(neutralColors).map(([name, color]) => (
            <ColorSwatch
              key={name}
              color={color}
              name={name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              cssVar={`--color-neutral-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      {/* Colores Semánticos */}
      <section>
        <h3 style={{ margin: '0 0 24px 0', color: '#374151' }}>🚦 Colores Semánticos</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '20px' 
        }}>
          {Object.entries(semanticColors).map(([type, colors]) => (
            <div key={type}>
              <h4 style={{ 
                margin: '0 0 16px 0', 
                textAlign: 'center', 
                textTransform: 'capitalize',
                color: '#4b5563',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                {type}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <ColorSwatch
                  color={colors.light}
                  name="Light"
                  cssVar={`--color-${type}-light`}
                />
                <ColorSwatch
                  color={colors.main}
                  name="Main"
                  cssVar={`--color-${type}-main`}
                />
                <ColorSwatch
                  color={colors.dark}
                  name="Dark"
                  cssVar={`--color-${type}-dark`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Story mostrando solo colores de categorías
export const CategoryColors: Story = {
  render: () => (
    <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ margin: '0 0 16px 0', color: '#111827' }}>Colores por Categoría</h2>
      <p style={{ margin: '0 0 32px 0', color: '#6b7280', lineHeight: '1.6' }}>
        Cada categoría de producto tiene dos tonos: uno claro para fondos y uno más intenso para acentos.
        Estos colores se aplican automáticamente según la categoría del producto.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px' 
      }}>
        {Object.entries(categoryColors).map(([category, colors]) => (
          <div key={category} style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{ 
              margin: '0 0 16px 0', 
              textTransform: 'capitalize',
              color: '#111827',
              fontSize: '18px',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              {category}
            </h3>
            
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: colors.light,
                  borderRadius: '6px',
                  marginBottom: '8px',
                }}></div>
                <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>Light</p>
                <p style={{ margin: '0', fontSize: '11px', fontFamily: 'Monaco, Menlo, monospace', color: '#9ca3af' }}>
                  {colors.light}
                </p>
              </div>
              
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: colors.main,
                  borderRadius: '6px',
                  marginBottom: '8px',
                }}></div>
                <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>Main</p>
                <p style={{ margin: '0', fontSize: '11px', fontFamily: 'Monaco, Menlo, monospace', color: '#9ca3af' }}>
                  {colors.main}
                </p>
              </div>
            </div>
            
            {/* Ejemplo de ProductCard mini */}
            <div style={{
              background: colors.light,
              padding: '12px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#fff',
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>Producto {category}</div>
                <div style={{ opacity: 0.8 }}>Descripción breve</div>
              </div>
              <div style={{
                background: colors.main,
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                opacity: 0.8,
              }}>
                8 porciones
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Colores específicos para cada categoría de productos de repostería, mostrando cómo se aplicarían en las ProductCards.',
      },
    },
  },
};

// Story con ejemplos de uso correcto e incorrecto
export const UsageGuidelines: Story = {
  render: () => (
    <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ margin: '0 0 16px 0', color: '#111827' }}>Guidelines de Uso</h2>
      <p style={{ margin: '0 0 32px 0', color: '#6b7280', lineHeight: '1.6' }}>
        Ejemplos de cómo usar correctamente los colores del sistema versus uso incorrecto.
      </p>

      <UsageExample
        title="Botones Primarios"
        correct={{ 
          color: '#374151', 
          text: 'Usar colores neutrales para botones principales' 
        }}
        incorrect={{ 
          color: '#E67792', 
          text: 'No usar colores de categoría para botones principales' 
        }}
      />

      <UsageExample
        title="Cards de Productos"
        correct={{ 
          color: '#A6BFB1', 
          text: 'Usar color de categoría como fondo de la card' 
        }}
        incorrect={{ 
          color: '#6b7280', 
          text: 'No usar colores neutrales para fondos de productos' 
        }}
      />

      <UsageExample
        title="Estados de Feedback"
        correct={{ 
          color: '#10b981', 
          text: 'Usar colores semánticos para mensajes de estado' 
        }}
        incorrect={{ 
          color: '#C680CC', 
          text: 'No usar colores de categoría para feedback' 
        }}
      />

      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        marginTop: '32px',
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#111827' }}>Reglas Generales</h3>
        <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#374151', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Colores de categoría:</strong> Solo para ProductCards y elementos relacionados con productos específicos
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Colores neutrales:</strong> Para UI general, botones, textos y elementos de navegación
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Colores semánticos:</strong> Para estados de feedback, alertas y mensajes del sistema
          </li>
          <li>
            <strong>Contraste:</strong> Siempre verificar que haya suficiente contraste para accesibilidad
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Guidelines sobre cuándo y cómo usar cada tipo de color del sistema.',
      },
    },
  },
};