# 🧪 Guía Rápida de Pruebas - Storybook

## 🔍 Prueba Local (AHORA MISMO)

**✅ Storybook corriendo en**: http://localhost:6006/

### Checklist de 5 minutos:
- [ ] **1. Homepage** - Abrir http://localhost:6006/ 
- [ ] **2. Sidebar** - Ver categorías: Introduction, Design Tokens, Colors, etc.
- [ ] **3. Design Tokens** - Click en "Design Tokens" → Ver tokens visuales
- [ ] **4. Colors** - Click en "Colors" → Ver paleta de 6 categorías
- [ ] **5. Button** - Click en "Button" → Probar variants Primary/Secondary/Ghost
- [ ] **6. ProductCard** - Click en "ProductCard" → Ver las 6 categorías de productos
- [ ] **7. Responsive** - Usar controles de viewport (Mobile/Tablet/Desktop)
- [ ] **8. A11y** - Verificar panel de Accessibility funcionando

---

## 🚀 Deploy a Vercel

### Paso 1: Login (solo primera vez)
```bash
npx vercel login
# → Elegir GitHub/Google/Email
# → Seguir autenticación en browser
```

### Paso 2: Deploy
```bash
npm run deploy-storybook
# O manual:
npx vercel --prod --yes
```

### Paso 3: Verificar Deploy
Después del deploy, recibirás una URL como:
- `https://catalog-prototype-storybook-abc123.vercel.app`

---

## ✅ Checklist Post-Deploy

### URLs a probar:
```
□ [URL]/                                    → Homepage
□ [URL]/?path=/docs/introduction--page      → Introduction  
□ [URL]/?path=/docs/design-tokens--page     → Design Tokens
□ [URL]/?path=/docs/colors--docs            → Colors
□ [URL]/?path=/story/design-system-button--primary → Button
□ [URL]/?path=/story/components-productcard--default → ProductCard
```

### Funcionalidad a verificar:
```
□ Sidebar navigation funciona
□ Stories cargan sin errores 404
□ Imágenes de productos cargan correctamente
□ Design tokens se muestran visualmente
□ Controls funcionan (cambiar props en tiempo real)
□ Responsive funciona (Mobile/Tablet/Desktop)
□ A11y panel funciona
□ Performance: carga en <5 segundos
```

---

## 🎯 Testing Específico

### Button Component:
```
□ Variant Primary → Background azul
□ Variant Secondary → Background blanco, borde gris
□ Variant Ghost → Background transparente
□ Size Small → 32px altura
□ Size Medium → 40px altura  
□ Size Large → 48px altura
□ Estado Disabled → Opacity 0.6
□ Hover effects → Transform y shadow
```

### ProductCard Component:
```
□ Categoría Tortas → Rosa (#E67792 / #EB1951)
□ Categoría Tartas → Verde (#A6BFB1 / #5A9272)
□ Categoría Brownies → Naranja (#F19C32 / #C57512)
□ Categoría Cheesecakes → Rosa pastel (#F8C8DC / #E91E63)
□ Categoría Alfajores → Púrpura (#C680CC / #AA17B6)
□ Categoría Otros → Amarillo (#FFEB3B / #F57F17)
□ Precios formato pesos argentinos
□ Imágenes cargan correctamente
```

### Design Tokens:
```
□ Colors section → 6 categorías + neutrals + semantic
□ Spacing section → 7 tokens (4px a 64px)
□ Typography section → Font sizes, weights, line heights
□ Shadows section → 6 niveles de elevación
□ Border radius → 7 variants
```

---

## 🆘 Si algo no funciona:

### Problema: Storybook no carga localmente
```bash
# Solución:
npm run storybook
# Debe mostrar: http://localhost:6006/
```

### Problema: Deploy falla
```bash
# Verificar build:
npm run build-storybook
# Verificar login:
npx vercel whoami
```

### Problema: Stories no aparecen
```bash
# Verificar archivos:
ls src/stories/
ls src/components/Button/
```

### Problema: Imágenes 404
```bash
# Verificar public folder:
ls public/images/
```

---

## 🎉 Success Criteria

**✅ Local working**: Storybook carga en localhost:6006  
**✅ All stories load**: 15+ stories funcionando  
**✅ Design tokens visible**: Colors y tokens renderizando  
**✅ Components interactive**: Controls funcionando  
**✅ Deploy successful**: URL pública funcionando  
**✅ Team ready**: Listo para compartir con equipo  

---

**🎨 ¡Tu Design System está listo!**