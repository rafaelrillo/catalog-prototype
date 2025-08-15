# 🎨 Guía Completa: Figma + Storybook Integration

## 🎯 Objetivo
Conectar tu Storybook deployado con Figma para workflow completo de design-development.

---

## 🔗 Método 1: Plugin Storybook en Figma

### **Paso 1: Instalar Plugin en Figma**
1. **Abrir Figma** → Ir a cualquier file
2. **Menu → Plugins → Browse all plugins**
3. **Buscar**: "Storybook Connect"
4. **Instalar** el plugin oficial de Storybook
5. **Run plugin** desde Menu → Plugins → Storybook Connect

### **Paso 2: Conectar tu Storybook**
En el plugin:
1. **Enter Storybook URL**: 
   ```
   https://catalog-prototype-storybook.vercel.app
   ```
2. **Click "Connect"**
3. El plugin listará todas tus stories automáticamente

### **Paso 3: Linking Components**
1. **Seleccionar component** en Figma (ej: un botón)
2. **En plugin**: Elegir story correspondiente (ej: "Button/Primary")
3. **Click "Link"**
4. ✅ Component ahora está conectado

### **Resultado:**
- Ver code de cualquier component desde Figma
- Compare visual Figma vs implemented component
- Links directos a stories específicas

---

## 🎨 Método 2: Ver Figma EN Storybook (Addon Designs)

### Ya configurado en tu proyecto:
```json
// .storybook/main.ts
addons: [
  "@storybook/addon-designs"  // ✅ Ya instalado
]
```

### **Paso 1: Crear Design en Figma**
1. **Crear file** en Figma con tus components
2. **Diseñar Button** component (Primary/Secondary/Ghost)
3. **Diseñar ProductCard** con las 6 categorías
4. **Get sharing link** de cada frame

### **Paso 2: Agregar Links a Stories**
```typescript
// src/components/Button/Button.stories.tsx
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR-FILE-ID/YOUR-FILE?node-id=XXX',
    },
  },
};
```

### **Resultado:**
- Tab "Design" aparece en cada story
- Ver Figma design junto al component implementado
- Compare side-by-side

---

## 🎨 Método 3: Figma Variables (Design Tokens)

### **Crear Variables en Figma:**

#### Variables de Color:
```
🎨 Product Categories:
├── Tortas/Light: #E67792
├── Tortas/Main: #EB1951
├── Tartas/Light: #A6BFB1
├── Tartas/Main: #5A9272
├── Brownies/Light: #F19C32
├── Brownies/Main: #C57512
├── Cheesecakes/Light: #F8C8DC
├── Cheesecakes/Main: #E91E63
├── Alfajores/Light: #C680CC
├── Alfajores/Main: #AA17B6
├── Otros/Light: #FFEB3B
└── Otros/Main: #F57F17

🎨 Neutrals:
├── White: #FFFFFF
├── Black: #000000
├── Gray-50: #F9FAFB
├── Gray-100: #F3F4F6
└── ... (más grays)

🎨 Semantic:
├── Success/Main: #10B981
├── Warning/Main: #F59E0B
├── Error/Main: #EF4444
└── Info/Main: #3B82F6
```

#### Variables de Spacing:
```
📏 Spacing:
├── xs: 4px
├── sm: 8px
├── md: 16px
├── lg: 24px
├── xl: 32px
├── 2xl: 48px
└── 3xl: 64px
```

### **Setup en Figma:**
1. **File → Libraries → Create variable collection**
2. **Name**: "Design System Tokens"
3. **Add variables** usando los valores exactos arriba
4. **Publish library** para reutilizar

---

## 🚀 Workflow Completo

### **Para Diseñadores:**

#### **1. Diseñar en Figma**
- Usar Variables para colors/spacing
- Crear components con Auto Layout
- Seguir naming conventions (Button/Primary, etc.)

#### **2. Conectar con Storybook**
- Usar plugin para ver implementation
- Comparar design vs code
- Reportar diferencias

#### **3. Handoff Process**
- Share Figma links con developers
- Add specs usando Figma Variables
- Use plugin para QA visual

### **Para Developers:**

#### **1. Implementation**
- Usar design tokens de Storybook
- Seguir specs de Figma Variables
- Mantener consistency

#### **2. Verification**
- Add Figma links a stories
- Compare side-by-side en Storybook
- Update stories cuando cambie design

---

## 📋 Quick Setup Checklist

### **En Figma:**
- [ ] Install "Storybook Connect" plugin
- [ ] Connect to: `https://catalog-prototype-storybook.vercel.app`
- [ ] Create Variable collections con tus design tokens
- [ ] Design components usando las Variables
- [ ] Get sharing links de cada component

### **En Storybook:**
- [ ] ✅ @storybook/addon-designs ya instalado
- [ ] Add Figma URLs a stories parameters
- [ ] Deploy updated stories
- [ ] Verify Design tab appears

### **Workflow:**
- [ ] Designer creates/updates en Figma
- [ ] Designer shares links con developers
- [ ] Developer adds links a stories
- [ ] Both verify implementation matches design

---

## 🔧 Example Story with Figma Integration

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component con design tokens implementados.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ABC123/Design-System?node-id=123:456',
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ABC123/Design-System?node-id=123:789',
    },
  },
};
```

---

## 🎯 Próximos Pasos

### **Inmediatos (Hoy):**
1. **Install plugin** en Figma
2. **Connect** tu Storybook URL
3. **Test** el link functionality

### **Esta Semana:**
1. **Create Variables** en Figma con tus design tokens
2. **Design components** usando las Variables
3. **Add Figma URLs** a tus stories existentes

### **Futuro:**
1. **Automate** token sync con Figma API
2. **Setup** visual regression testing
3. **Integrate** con design system workflow

---

## 🆘 Troubleshooting

### **Plugin no conecta:**
- Verificar que Storybook URL es pública
- Try direct story URL: `https://catalog-prototype-storybook.vercel.app/?path=/story/design-system-button--primary`

### **Design tab no aparece:**
- Verificar addon instalado en .storybook/main.ts
- Check story parameters format
- Redeploy Storybook

### **Variables no sincronizando:**
- Manual sync por ahora
- Future: API integration posible

---

**🎨 Ready to connect your Design System with Figma!**

**Start with**: Install plugin → Connect URL → Link first component