# 🎨 Guía para Diseñadora - Setup del Design System

## ¡Hola! 👋

Esta guía te ayudará a configurar el Design System del catálogo de repostería en Figma. Tendrás acceso a todos los design tokens, componentes y ejemplos para trabajar de manera consistente con el equipo de desarrollo.

---

## 📋 Checklist Rápida

- [ ] **Crear archivo Figma** con el template
- [ ] **Configurar Variables** (colores, spacing, tipografía)
- [ ] **Crear componentes** Button y ProductCard
- [ ] **Conectar con Storybook** deployado
- [ ] **Probar workflow** de sincronización

**⏱️ Tiempo estimado: 45-60 minutos**

---

## 🎯 Paso 1: Crear Archivo Base en Figma

### 1.1 Nuevo Archivo
1. **Abre Figma** y crea un nuevo archivo
2. **Nómbralo**: "Design System - Catálogo de Repostería"
3. **Crea 3 páginas**:
   - 🎨 Design Tokens
   - 🧩 Components  
   - 📱 Examples

### 1.2 Estructura de Páginas
```
🎨 Design Tokens
├── Color Palette
├── Spacing Scale
├── Typography Scale
└── Effects (Shadows, etc.)

🧩 Components
├── Button Component
├── ProductCard Component
└── Future Components

📱 Examples
├── Product Grid Layout
├── Button Collection
└── Category Sections
```

---

## 🌈 Paso 2: Configurar Variables (¡MUY IMPORTANTE!)

### 2.1 Acceder a Variables
1. **Menu principal** → **Libraries** → **Variables** 
2. **Click "Create variable collection"**
3. **Nombre**: "Design System Tokens"

### 2.2 Collections de Variables

#### Collection 1: "Colors"
**Crear las siguientes variables:**

**📁 Category Colors (6 variables)**
```
tortas/light    → #E67792
tortas/main     → #EB1951
tartas/light    → #A6BFB1  
tartas/main     → #5A9272
brownies/light  → #F19C32
brownies/main   → #C57512
cheesecakes/light → #F8C8DC
cheesecakes/main  → #E91E63
alfajores/light   → #C680CC
alfajores/main    → #AA17B6
otros/light       → #FFEB3B
otros/main        → #F57F17
```

**📁 Neutral Colors (12 variables)**
```
neutral/white     → #FFFFFF
neutral/gray-50   → #F9FAFB
neutral/gray-100  → #F3F4F6
neutral/gray-200  → #E5E7EB
neutral/gray-300  → #D1D5DB
neutral/gray-400  → #9CA3AF
neutral/gray-500  → #6B7280
neutral/gray-600  → #4B5563
neutral/gray-700  → #374151
neutral/gray-800  → #1F2937
neutral/gray-900  → #111827
neutral/black     → #000000
```

**📁 Semantic Colors (12 variables)**
```
success/light  → #D1FAE5
success/main   → #10B981
success/dark   → #047857
warning/light  → #FEF3C7
warning/main   → #F59E0B
warning/dark   → #D97706
error/light    → #FEE2E2
error/main     → #EF4444
error/dark     → #DC2626
info/light     → #DBEAFE
info/main      → #3B82F6
info/dark      → #1D4ED8
```

#### Collection 2: "Spacing"
```
spacing/xs   → 4px
spacing/sm   → 8px
spacing/md   → 16px
spacing/lg   → 24px
spacing/xl   → 32px
spacing/2xl  → 48px
spacing/3xl  → 64px
```

#### Collection 3: "Typography"
```
fontSize/xs    → 12px
fontSize/sm    → 14px
fontSize/base  → 16px
fontSize/lg    → 18px
fontSize/xl    → 20px
fontSize/2xl   → 24px
fontSize/3xl   → 30px
fontSize/4xl   → 36px
```

#### Collection 4: "Border Radius"
```
radius/none  → 0px
radius/sm    → 4px
radius/md    → 8px
radius/lg    → 12px
radius/xl    → 16px
radius/2xl   → 24px
radius/full  → 999px
```

### 2.3 Tip de Variables 💡
- **Organiza en folders** para mejor navegación
- **Usa nombres consistentes** con el código
- **Agrega descriptions** para contexto

---

## 🔘 Paso 3: Crear Componente Button

### 3.1 Base del Button
1. **Crea un rectángulo**
2. **Configura propiedades base**:
   - Width: auto (variable)
   - Height: 40px (medium)
   - Fill: `{neutral/gray-800}`
   - Corner radius: `{radius/md}`
   - Padding: `{spacing/sm}` horizontal, `{spacing/lg}` vertical

### 3.2 Agregar Texto
1. **Text layer** con contenido "Button"
2. **Typography**:
   - Font: "Lexend Deca" (o system font)
   - Size: `{fontSize/base}`
   - Weight: 500 (medium)
   - Color: `{neutral/white}`

### 3.3 Crear Component
1. **Selecciona** rectángulo + texto
2. **Create component** (Ctrl/Cmd + Alt + K)
3. **Nombre**: "Button"

### 3.4 Agregar Variants
**En Component properties panel:**

**Property 1: "variant"**
- Type: Variant
- Values: Primary, Secondary, Ghost

**Property 2: "size"** 
- Type: Variant
- Values: Small, Medium, Large

### 3.5 Configurar Variants

**Primary/Small:**
- Fill: `{neutral/gray-800}`
- Text color: `{neutral/white}`
- Height: 32px
- Font size: `{fontSize/sm}`
- Padding: `{spacing/xs}` `{spacing/md}`

**Primary/Medium:**
- Fill: `{neutral/gray-800}`
- Text color: `{neutral/white}`
- Height: 40px
- Font size: `{fontSize/base}`
- Padding: `{spacing/sm}` `{spacing/lg}`

**Primary/Large:**
- Fill: `{neutral/gray-800}`
- Text color: `{neutral/white}`
- Height: 48px  
- Font size: `{fontSize/lg}`
- Padding: `{spacing/md}` `{spacing/xl}`

**Secondary/Medium:**
- Fill: `{neutral/white}`
- Text color: `{neutral/gray-700}`
- Border: 1px `{neutral/gray-300}`
- Height: 40px
- Font size: `{fontSize/base}`
- Padding: `{spacing/sm}` `{spacing/lg}`

**Ghost/Medium:**
- Fill: transparent
- Text color: `{neutral/gray-600}`  
- Border: 1px transparent
- Height: 40px
- Font size: `{fontSize/base}`
- Padding: `{spacing/sm}` `{spacing/lg}`

### 3.6 Estados (hover, active, etc.)
**Crear Interactive Components:**
1. **Default → Hover**: Cambiar fill, agregar drop shadow
2. **Default → Active**: Reducir drop shadow
3. **Default → Disabled**: Opacity 60%

---

## 🧁 Paso 4: Crear Componente ProductCard

### 4.1 Estructura Base
1. **Frame principal**:
   - Width: 330px
   - Height: 117px
   - Fill: `{tortas/light}` (cambiaremos por variable)
   - Corner radius: `{radius/full}`
   - Padding: `{spacing/2xl}` left

### 4.2 Elementos Internos

**Área de Detalles:**
- Width: 180px (fixed)
- Layout: Auto layout vertical
- Gap: `{spacing/xs}`

**Product Name (texto):**
- Font size: `{fontSize/lg}`
- Weight: 500
- Color: `{neutral/white}`
- Line height: 1.25

**Product Description (texto):**
- Font size: `{fontSize/xs}`
- Weight: 300
- Color: `{neutral/white}`
- Line height: 1.5

**Footer (frame):**
- Layout: Auto layout horizontal
- Justify: Space between
- Gap: `{spacing/lg}`

**Portions Badge:**
- Width: 40px
- Height: 18px
- Fill: `{tortas/main}` (variable)
- Corner radius: `{radius/full}`
- Opacity: 50%

**Price (texto):**
- Font size: `{fontSize/sm}`
- Weight: 500
- Color: `{neutral/white}`

**Product Image:**
- Width: 125px
- Height: 125px
- Corner radius: `{radius/full}`
- Border: `{spacing/xs}` solid `{neutral/white}`

### 4.3 Crear Component
1. **Selecciona todo** el frame
2. **Create component**
3. **Nombre**: "ProductCard"

### 4.4 Agregar Property: Category
1. **Component properties**
2. **Add property**: "category"
3. **Type**: Variant
4. **Values**: Tortas, Tartas, Brownies, Cheesecakes, Alfajores, Otros

### 4.5 Configurar Category Variants

**Para cada variant, cambiar:**
- **Background fill** a `{categoria/light}`
- **Portions badge fill** a `{categoria/main}`

Ejemplo:
- **Tortas**: bg `{tortas/light}`, badge `{tortas/main}`
- **Tartas**: bg `{tartas/light}`, badge `{tartas/main}`
- etc.

---

## 📱 Paso 5: Crear Examples

### 5.1 Product Grid
1. **Frame** con auto layout
2. **Grid** de 2x3 ProductCards
3. **Cada card** con categoría diferente
4. **Contenido realista**:
   - "Torta Red Velvet" - Tortas
   - "Tarta de Frutas" - Tartas  
   - "Brownie Clásico" - Brownies
   - "Cheesecake Frutos Rojos" - Cheesecakes
   - "Alfajores de Maicena" - Alfajores
   - "Macarons Franceses" - Otros

### 5.2 Button Collection
1. **Frame** con auto layout vertical
2. **Todos los variants** de Button:
   - Primary/Small: "Pequeño"
   - Primary/Medium: "Mediano"  
   - Primary/Large: "Grande"
   - Secondary/Medium: "Secundario"
   - Ghost/Medium: "Ghost"

### 5.3 Category Section
1. **Frame** con layout vertical
2. **Título** de categoría (ej. "Tortas")
3. **3 ProductCards** de la misma categoría
4. **Button** "Ver más" (Secondary)

---

## 🔗 Paso 6: Conectar con Storybook

### 6.1 Instalar Plugin
1. **Figma menu** → **Plugins**
2. **Browse plugins** → Buscar "Storybook"
3. **Install** "Storybook Connect"

### 6.2 Conectar URL
1. **Abrir plugin** Storybook Connect
2. **URL**: `[URL-DE-TU-STORYBOOK-DEPLOYADO]`
3. **Connect**

### 6.3 Links importantes
- **Introduction**: `/?path=/docs/introduction--page`
- **Design Tokens**: `/?path=/docs/design-tokens--page`  
- **Colors**: `/?path=/docs/colors--docs`
- **Button**: `/?path=/docs/design-system-button--docs`
- **ProductCard**: `/?path=/docs/components-productcard--docs`

---

## 🚀 Paso 7: Workflow de Sincronización

### 7.1 Figma → Desarrollo
1. **Diseñar** nuevo componente en Figma
2. **Documentar** specifications
3. **Compartir** link de Figma con dev
4. **Dev implementa** siguiendo specs
5. **Dev agrega** story a Storybook

### 7.2 Desarrollo → Figma  
1. **Dev actualiza** design tokens
2. **Actualizar** Variables en Figma
3. **Actualizar** componentes usando nuevos tokens
4. **Verificar** consistency con Storybook

---

## 📚 Recursos Útiles

### Figma Resources
- **Variables Guide**: [Variables in Figma](https://help.figma.com/hc/en-us/articles/15339657135383)
- **Components Guide**: [Creating components](https://help.figma.com/hc/en-us/articles/360038662654)
- **Auto Layout**: [Auto layout guide](https://help.figma.com/hc/en-us/articles/360040451373)

### Design System Resources
- **Tokens Guide**: [Design Tokens 101](https://tokens.studio/blog/design-tokens-101)
- **Figma Best Practices**: [Component best practices](https://www.figma.com/best-practices/components-styles-and-shared-libraries/)

### Tu Storybook
- **URL**: `[AGREGAR-URL-CUANDO-ESTE-DEPLOYADO]`
- **GitHub Repo**: `[AGREGAR-LINK-REPO]`

---

## ❓ FAQ / Troubleshooting

### "No puedo crear Variables"
- **Solución**: Asegúrate de tener plan Professional o superior

### "Las Variables no aparecen en componentes"
- **Solución**: Check que estás en el mismo Team/Organization

### "Los colores no coinciden con Storybook"
- **Solución**: Verifica que los hex codes sean exactos

### "Storybook plugin no conecta"
- **Solución**: Verifica que la URL sea correcta y accesible

---

## ✅ Checklist Final

- [ ] **Variables configuradas** (colores, spacing, typography, radius)
- [ ] **Button component** creado con todas las variants
- [ ] **ProductCard component** creado con categorías
- [ ] **Examples página** con layouts reales
- [ ] **Storybook conectado** y funcionando
- [ ] **Workflow entendido** para futuras iteraciones

---

## 🆘 Necesitas Ayuda?

1. **Slack/Email**: [contacto-del-equipo]
2. **Sesión de pair-design**: Podemos hacer setup juntos
3. **Documentación**: Esta guía + recursos en links
4. **Storybook deployed**: Para reference visual

¡Todo listo para que diseñes de manera consistente con el sistema! 🎉

---

**Última actualización**: [FECHA-ACTUAL]  
**Versión del Design System**: 1.0.0