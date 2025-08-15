# 🛠️ Troubleshooting Guide - Design System

## 🚨 Problemas Comunes y Soluciones

### 📁 Índice Rápido
1. [Storybook Issues](#storybook-issues)
2. [Next.js Build Errors](#nextjs-build-errors)  
3. [TypeScript Errors](#typescript-errors)
4. [SCSS/CSS Problems](#scsscss-problems)
5. [Component Import Issues](#component-import-issues)
6. [Performance Issues](#performance-issues)
7. [Deploy Problems](#deploy-problems)

---

## 🎨 Storybook Issues

### ❌ "Storybook no inicia" 
**Error**: `Error: Cannot find module '@storybook/react'`

**Solución**:
```bash
# Reinstalar dependencias de Storybook
npm ci
npm run storybook
```

**Solución alternativa**:
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run storybook
```

### ❌ "Stories no cargan / Sidebar vacío"
**Error**: Stories no aparecen en el sidebar

**Solución**:
1. **Verificar paths en `.storybook/main.ts`**:
```typescript
stories: [
  "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
],
```

2. **Verificar nombres de archivos**:
- Deben terminar en `.stories.tsx`
- Estar en carpetas correctas (`src/stories/`, `src/components/`)

3. **Restart Storybook**:
```bash
# Parar (Ctrl+C) y reiniciar
npm run storybook
```

### ❌ "Addons no funcionan"
**Error**: A11y, Controls, o otros addons no aparecen

**Solución**:
1. **Verificar instalación**:
```bash
npm list @storybook/addon-a11y
npm install @storybook/addon-a11y --save-dev
```

2. **Verificar configuración en `.storybook/main.ts`**:
```typescript
addons: [
  "@storybook/addon-docs",
  "@storybook/addon-a11y",
  // otros addons
],
```

### ❌ "Design tokens no se aplican"
**Error**: Components no usan colores del design system

**Solución**:
1. **Verificar import en `.storybook/preview.ts`**:
```typescript
import '../src/styles/global.scss';
```

2. **Verificar CSS custom properties**:
```scss
// En component .scss
background-color: var(--color-tortas-light);
// NO hardcoded: background-color: #E67792;
```

---

## ⚛️ Next.js Build Errors

### ❌ "Build fails con TypeScript errors"
**Error**: `Type 'X' is not assignable to type 'Y'`

**Solución**:
1. **Excluir archivos de Storybook**:
```typescript
// next.config.ts
eslint: {
  ignoreDuringBuilds: false,
  dirs: ['src/pages', 'src/components', 'src/utils', 'src/hooks'],
},
```

2. **Verificar ESLint ignore**:
```javascript
// eslint.config.mjs
ignores: [
  "**/*.stories.tsx",
  "**/*.stories.ts", 
  "src/stories/**",
  ".storybook/**"
],
```

### ❌ "Module not found errors"
**Error**: `Cannot resolve module '@/components/Button'`

**Solución**:
1. **Verificar tsconfig paths**:
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2. **Verificar export structure**:
```typescript
// src/components/Button/index.ts
export { Button, type ButtonProps } from './Button';
export { default } from './Button';
```

### ❌ "SCSS compilation errors"
**Error**: Sass warnings o errors durante build

**Solución**:
1. **Warnings de @import (no críticos)**:
```bash
# Estos warnings son normales y no afectan funcionalidad:
# "Sass @import rules are deprecated"
```

2. **Errores de variables**:
```scss
// Verificar que design-tokens.scss se importa primero
@import './design-tokens';
@import './base/variables';
```

---

## 📝 TypeScript Errors

### ❌ "Property 'X' does not exist"
**Error**: Props no reconocidas en components

**Solución**:
1. **Verificar interface exports**:
```typescript
// Component.tsx
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  // otras props
}

export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // component
};
```

2. **Verificar imports**:
```typescript
// Usar import correcto
import { Button, type ButtonProps } from '@/components/Button';
```

### ❌ "Cannot find name 'ProductCategory'"
**Error**: Types no encontrados

**Solución**:
```typescript
// Verificar export de types
export type ProductCategory = 'tortas' | 'tartas' | 'brownies' | 'cheesecakes' | 'alfajores' | 'otros';

// Import correcto
import type { ProductCategory } from '@/components/ProductCard/ProductCard';
```

### ❌ "Object is possibly 'undefined'"
**Error**: Strict null checks

**Solución**:
```typescript
// Usar optional chaining
const color = category?.colors?.main ?? '#000000';

// O type guards
if (category && category.colors) {
  const color = category.colors.main;
}
```

---

## 🎨 SCSS/CSS Problems

### ❌ "CSS custom properties no funcionan"
**Error**: `var(--color-tortas-main)` no se aplica

**Solución**:
1. **Verificar import order**:
```scss
// global.scss - ORDEN IMPORTANTE
@import './design-tokens';        // PRIMERO
@import './base/variables';       // SEGUNDO
@import './base/mixins';          // TERCERO
```

2. **Verificar scope**:
```scss
// design-tokens.scss
:root {
  --color-tortas-main: #EB1951;
}
```

### ❌ "Mixins no disponibles"
**Error**: `@include category-background() not found`

**Solución**:
```scss
// Component .scss
@import '../../styles/design-tokens';  // REQUERIDO para mixins

.component {
  @include category-background('tortas', 'main');
}
```

### ❌ "Estilos no se aplican en production"
**Error**: Styles funcionan en dev pero no en build

**Solución**:
1. **Verificar CSS modules naming**:
```typescript
// Component.tsx
import styles from './Component.module.scss';

<div className={styles.button}>  // ✅ Correcto
<div className="button">         // ❌ No funciona con CSS modules
```

2. **Verificar purge/tree-shaking**:
```scss
// Usar classes que se referencian en JS
.button--primary {  // ✅ Referenciado en component
  // styles
}

.unused-class {     // ❌ Puede ser eliminado
  // styles
}
```

---

## 📦 Component Import Issues

### ❌ "Button not found / undefined"
**Error**: `import { Button } from '@/components/Button'` fails

**Solución**:
1. **Verificar index.ts files**:
```typescript
// src/components/Button/index.ts
export { Button, type ButtonProps } from './Button';
export { default } from './Button';

// src/components/index.ts
export { Button } from './Button';
export { ProductCard } from './ProductCard';
```

2. **Verificar file extensions**:
```bash
# Archivos deben existir:
src/components/Button/Button.tsx       ✅
src/components/Button/index.ts         ✅
src/components/index.ts                ✅
```

### ❌ "ProductCard props error"
**Error**: Legacy props (`cardBgColor`) no reconocidas

**Solución**:
1. **Actualizar a nueva API**:
```typescript
// ❌ API antigua
<ProductCard.Root cardBgColor="#E67792" portionBgColor="#EB1951">

// ✅ API nueva
<ProductCard.Root category="tortas">
<ProductCard.Portion category="tortas">
```

2. **Usar category mapper**:
```typescript
import { mapCategoryToDesignSystem } from '@/utils/categoryMapper';

const designSystemCategory = mapCategoryToDesignSystem(cmsCategory.name);
```

---

## ⚡ Performance Issues

### ❌ "Storybook carga muy lento"
**Error**: >10 segundos para cargar

**Solución**:
1. **Optimizar bundle**:
```javascript
// .storybook/main.ts
viteFinal: async (config) => {
  config.build = {
    ...config.build,
    chunkSizeWarningLimit: 1600,
  };
  return config;
},
```

2. **Lazy load stories**:
```typescript
// Para stories pesadas
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### ❌ "Next.js build muy lento"
**Error**: Build toma >5 minutos

**Solución**:
1. **Verificar imports**:
```typescript
// ❌ Evitar imports completos
import * as React from 'react';

// ✅ Usar imports específicos
import { useState, useEffect } from 'react';
```

2. **Optimizar SCSS**:
```scss
// ❌ Evitar imports innecesarios
@import '../../../styles/all-components';

// ✅ Importar solo lo necesario
@import '../../styles/design-tokens';
```

---

## 🚀 Deploy Problems

### ❌ "Netlify build fails"
**Error**: Build process fails en deploy

**Solución**:
1. **Verificar Node version**:
```toml
# netlify.toml
[build.environment]
  NODE_VERSION = "18"
```

2. **Verificar build command**:
```toml
# netlify.toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"
```

### ❌ "404 en rutas de Storybook"
**Error**: URLs específicas dan 404

**Solución**:
```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### ❌ "Estilos no cargan en producción"
**Error**: CSS no se aplica en deploy

**Solución**:
1. **Verificar static assets**:
```bash
# Verificar que carpeta assets/ existe en build
ls storybook-static/assets/
```

2. **Verificar headers**:
```toml
# netlify.toml
[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🔄 Recovery Commands

### "Resetear todo desde cero"
```bash
# Limpiar completamente
rm -rf node_modules package-lock.json .next storybook-static

# Reinstalar
npm install

# Testear
npm run build
npm run build-storybook
npm run storybook
```

### "Regenerar TypeScript types"
```bash
# Limpiar cache de TypeScript
rm -rf .next/types
npx tsc --noEmit

# Regenerar
npm run dev  # O npm run build
```

### "Resetear configuración"
```bash
# Backup de archivos de config
cp .storybook/main.ts .storybook/main.ts.backup
cp next.config.ts next.config.ts.backup
cp eslint.config.mjs eslint.config.mjs.backup

# Restaurar desde git
git checkout HEAD -- .storybook/main.ts
git checkout HEAD -- next.config.ts
git checkout HEAD -- eslint.config.mjs
```

---

## 📞 Getting Help

### Debug Information to Collect
1. **Error message completo**
2. **Node version**: `node --version`
3. **NPM version**: `npm --version`
4. **Operating system**: macOS/Windows/Linux
5. **Browser**: Chrome/Firefox/Safari + version
6. **Steps to reproduce**

### Useful Debug Commands
```bash
# Verificar instalación
npm list --depth=0

# Verificar builds
npm run build 2>&1 | tee build.log
npm run build-storybook 2>&1 | tee storybook-build.log

# Verificar TypeScript
npx tsc --noEmit --pretty

# Verificar ESLint
npx eslint . --ext .ts,.tsx
```

### Where to Get Help
- **GitHub Issues**: Para bugs y feature requests
- **Storybook Docs**: [storybook.js.org](https://storybook.js.org)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Team Slack**: #design-system channel

---

**💡 Pro Tip**: Mantén este archivo actualizado cuando encuentres y resuelvas nuevos problemas!

---

**Last updated**: [FECHA-ACTUAL]  
**Maintained by**: Design System Team