# ✅ Testing Checklist - Design System

## 📋 Pre-Testing Setup

- [ ] **Dependencies instaladas**: `npm install` ejecutado sin errores
- [ ] **Environment variables**: Archivos `.env.local` y `.env` configurados  
- [ ] **Git status limpio**: No hay cambios uncommitted que puedan interferir

---

## 🎨 Testing de Storybook

### Build & Startup
- [ ] **Storybook dev server**: `npm run storybook` inicia sin errores (puerto 6006)
- [ ] **Storybook build**: `npm run build-storybook` ejecuta exitosamente
- [ ] **Build time**: Build completa en <5 segundos
- [ ] **Static files**: Carpeta `storybook-static/` generada correctamente

### Stories Navigation
- [ ] **Introduction page**: `/?path=/docs/introduction--page` carga y renderiza
- [ ] **Design Tokens page**: `/?path=/docs/design-tokens--page` muestra todos los tokens
- [ ] **Colors page**: `/?path=/docs/colors--docs` renderiza paleta completa
- [ ] **Button stories**: Todas las variants (Primary/Secondary/Ghost) x sizes funcionan
- [ ] **ProductCard stories**: Todas las categorías (6) renderizan correctamente
- [ ] **Sidebar navigation**: Order correcto (Introduction → Design Tokens → Colors → Components)

### Component Testing

#### Button Component
- [ ] **Primary variants**: Small/Medium/Large renderizan con tamaños correctos
- [ ] **Secondary variant**: Background blanco, borde gris, texto oscuro
- [ ] **Ghost variant**: Background transparente, texto gris
- [ ] **Disabled state**: Opacity 0.6, cursor not-allowed
- [ ] **Hover effects**: Transform translateY(-1px), shadow appear
- [ ] **Focus state**: Outline azul visible con keyboard navigation
- [ ] **Icon spacing**: hasIcon prop añade gap correcto
- [ ] **Controls**: Todas las props cambian el component en tiempo real

#### ProductCard Component  
- [ ] **Category colors**: Cada categoría (tortas, tartas, etc.) usa colores correctos
- [ ] **Text truncation**: Nombres y descripciones largas se truncan correctamente
- [ ] **Price formatting**: Precios se muestran en formato pesos argentinos
- [ ] **Portions badge**: Background color coincide con categoría
- [ ] **Image placeholder**: Images placeholder cargan sin errores
- [ ] **Hover effects**: Card se eleva, imagen hace zoom
- [ ] **Responsive**: Component mantiene proporción en diferentes tamaños

### Responsive Testing
- [ ] **Mobile (375px)**: Components se ven bien en viewport mobile
- [ ] **Tablet (768px)**: Layout se adapta correctamente
- [ ] **Desktop (1440px)**: Spacing y proportions son correctas
- [ ] **Viewport controls**: Toolbar de Storybook permite cambiar viewport

### Accessibility Testing
- [ ] **A11y addon active**: Panel de accessibility visible y funcionando
- [ ] **Button accessibility**: Focus visible, keyboard navigation, ARIA labels
- [ ] **ProductCard accessibility**: Alt text en imágenes, semantic HTML
- [ ] **Color contrast**: Todos los colores pasan WCAG AA (4.5:1 ratio mínimo)
- [ ] **Keyboard navigation**: Tab order lógico en todos los components

### Documentation Quality
- [ ] **Code examples**: Todos los code snippets son copiables
- [ ] **Props documentation**: Todas las props están documentadas con types
- [ ] **Usage guidelines**: Do's and don'ts claros para cada component
- [ ] **Visual examples**: "AllVariants" stories muestran overview completo

---

## ⚛️ Testing de Integración Next.js

### Development Server
- [ ] **Dev server**: `npm run dev` inicia sin errores (puerto 3000)
- [ ] **Hot reload**: Cambios en components se reflejan inmediatamente
- [ ] **TypeScript checking**: No hay errores de tipos en dev mode
- [ ] **CSS loading**: Design tokens y styles cargan correctamente

### Production Build
- [ ] **Build success**: `npm run build` completa sin errores
- [ ] **Build time**: Build completa en <2 minutos
- [ ] **Bundle size**: First Load JS <150 kB (actual: ~141 kB)
- [ ] **Static generation**: Pages se generan como static HTML
- [ ] **No TypeScript errors**: Build pasa type checking

### Component Integration
- [ ] **Button import**: `import { Button } from '@/components/Button'` funciona
- [ ] **ProductCard import**: `import { ProductCard } from '@/components/ProductCard'` funciona
- [ ] **Design tokens**: CSS custom properties disponibles globalmente
- [ ] **SCSS compilation**: Archivos .scss compilan sin warnings críticos
- [ ] **CategoryMapper**: Utility functions mapean categorías correctamente

### Functionality Testing
- [ ] **Button clicks**: onClick handlers funcionan en producción
- [ ] **ProductCard rendering**: Cards renderizan con data real
- [ ] **Design tokens usage**: Colores y spacing se aplican correctamente
- [ ] **Responsive behavior**: Components responsive en aplicación real
- [ ] **Image optimization**: Next.js Image component funciona con ProductCard

---

## 📊 Performance Testing

### Bundle Size Analysis
- [ ] **Storybook bundle**: Main chunks <500 kB (warning es aceptable)
- [ ] **Gzip compression**: Archivos comprimidos correctamente
- [ ] **CSS optimization**: Styles minificados en production
- [ ] **Tree shaking**: No hay imports innecesarios en bundle final

### Loading Performance
- [ ] **Storybook first load**: <3 segundos en conexión normal
- [ ] **Subsequent navigation**: <500ms entre stories
- [ ] **Next.js first load**: <2 segundos para página principal  
- [ ] **Component rendering**: Sin lag visible al cambiar props

### Memory Usage
- [ ] **No memory leaks**: DevTools Memory tab estable durante uso
- [ ] **Component cleanup**: useEffect cleanups funcionan correctamente
- [ ] **Image handling**: Imágenes no acumulan memoria excesiva

---

## 🔧 Browser Compatibility

### Modern Browsers (Requerido)
- [ ] **Chrome 100+**: Todas las features funcionan
- [ ] **Firefox 100+**: Layout y interactions correctas
- [ ] **Safari 15+**: CSS Grid, custom properties, y hover states
- [ ] **Edge 100+**: Equivalent a Chrome testing

### CSS Features
- [ ] **CSS Custom Properties**: Variables funcionan en todos los browsers
- [ ] **CSS Grid**: Layout grids renderizan correctamente
- [ ] **Flexbox**: Component layouts usan flexbox sin issues
- [ ] **Border radius**: Rounded corners renderizan suavemente
- [ ] **Box shadows**: Shadows se ven consistentes

### JavaScript Features
- [ ] **ES6+ features**: Arrow functions, destructuring, template literals
- [ ] **React 18**: Concurrent features no causan problemas
- [ ] **TypeScript**: Compiled JS funciona en target browsers

---

## 🎯 User Experience Testing

### Developer Experience
- [ ] **Fast refresh**: Cambios se ven inmediatamente durante development
- [ ] **Error messages**: Errores de TypeScript son claros y útiles
- [ ] **Autocompletion**: IDEs sugieren props correctamente
- [ ] **Import paths**: Relative imports funcionan consistentemente

### Designer Experience
- [ ] **Visual consistency**: Components match design specifications
- [ ] **Interactive states**: Hover, focus, active states intuitivos
- [ ] **Color accuracy**: Hex values match exactly con design tokens
- [ ] **Spacing precision**: Measurements coinciden con especificaciones

### End User Experience
- [ ] **Loading states**: No flash of unstyled content (FOUC)
- [ ] **Smooth animations**: Transitions son suaves, no jankiness
- [ ] **Touch interactions**: Mobile touch targets son apropiados
- [ ] **Accessibility**: Screen readers pueden navegar correctamente

---

## 🚨 Error Handling Testing

### Graceful Degradation
- [ ] **Missing props**: Components manejan props undefined gracefully
- [ ] **Invalid data**: Bad data no causa crashes
- [ ] **Network failures**: Image failures no rompen layout
- [ ] **CSS failures**: Fallback styles funcionan si CSS no carga

### Edge Cases
- [ ] **Very long text**: Truncation funciona con strings extremadamente largos
- [ ] **Empty states**: Components manejan arrays vacíos
- [ ] **Invalid categories**: CategoryMapper tiene fallback seguro
- [ ] **Missing images**: Alt text y placeholders funcionan

---

## ✅ Final Validation

### Pre-Deploy Checklist
- [ ] **All tests pass**: Todo el checklist arriba está ✅
- [ ] **No console errors**: Browser DevTools console limpia
- [ ] **Lighthouse score**: Performance >90, Accessibility >95
- [ ] **Visual regression**: Screenshots match expected results

### Documentation Complete
- [ ] **README updated**: Instructions actualizadas
- [ ] **CHANGELOG**: Cambios documentados
- [ ] **Deploy instructions**: DEPLOY.md funciona correctamente
- [ ] **Team handoff**: Figma guides y integration docs completas

---

## 📈 Success Metrics

### Performance Benchmarks
- **Storybook Build Time**: <5 segundos ✅
- **Next.js Build Time**: <120 segundos ✅  
- **First Load JS**: <150 kB ✅
- **Component Count**: 2 components ✅
- **Token Count**: 50+ design tokens ✅

### Quality Gates
- **TypeScript Errors**: 0 ✅
- **ESLint Errors**: 0 ✅
- **Build Warnings**: Solo deprecation warnings aceptables ✅
- **Accessibility Score**: WCAG AA compliance ✅
- **Browser Coverage**: 95%+ modern browsers ✅

---

**Testing completed by**: [NOMBRE]  
**Date**: [FECHA]  
**Version tested**: 1.0.0  
**Environment**: Development/Staging/Production