import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component base para el design system. Utiliza design tokens para mantener consistencia visual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: 'Variante visual del botón',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del botón',
    },
    hasIcon: {
      control: { type: 'boolean' },
      description: 'Si el botón incluye un icono (añade spacing)',
    },
    children: {
      control: { type: 'text' },
      description: 'Contenido del botón',
    },
    onClick: {
      action: 'clicked',
      description: 'Función que se ejecuta al hacer click',
    },
  },
  args: {
    children: 'Button',
    onClick: () => console.log('Button clicked!'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories por variante
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YOUR-FILE-ID/Design-System?node-id=BUTTON-PRIMARY-NODE',
      allowFullscreen: true,
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YOUR-FILE-ID/Design-System?node-id=BUTTON-SECONDARY-NODE',
      allowFullscreen: true,
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Stories por tamaño
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Estados especiales
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    hasIcon: true,
    children: (
      <>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Button with Icon
      </>
    ),
  },
};

// Story combinada mostrando todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '16px', 
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '8px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Primary</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Secondary</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px', color: '#374151', fontSize: '14px', fontWeight: '600' }}>Ghost</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button variant="ghost" size="sm">Small</Button>
          <Button variant="ghost" size="md">Medium</Button>
          <Button variant="ghost" size="lg">Large</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vista completa de todas las variantes y tamaños del componente Button.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YOUR-FILE-ID/Design-System?node-id=BUTTON-ALL-VARIANTS-NODE',
      allowFullscreen: true,
    },
  },
};