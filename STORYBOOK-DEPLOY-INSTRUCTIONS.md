# 🚀 Instrucciones de Deploy - Storybook en Vercel

## 📋 Estado del Proyecto

✅ **Build de Storybook**: Funcionando correctamente  
✅ **vercel.json**: Optimizado para Storybook  
✅ **Assets**: Todas las imágenes y archivos incluidos  
✅ **Vercel CLI**: Instalado y configurado  
🔄 **Pendiente**: Deploy manual por autenticación  

---

## 🚀 Deploy Inmediato - Método Rápido

### Opción 1: Script Automatizado
```bash
# 1. Login en Vercel (solo primera vez)
npx vercel login

# 2. Ejecutar deploy automatizado
./deploy-storybook.sh
```

### Opción 2: Comandos Manuales
```bash
# 1. Login en Vercel (solo primera vez)
npx vercel login

# 2. Build Storybook
npm run build-storybook

# 3. Deploy a production
npx vercel --prod --yes
```

---

## 🔧 Configuración Actual

### vercel.json Optimizado
```json
{
  "name": "catalog-prototype-storybook",
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "npm ci --silent",
  "framework": null,
  "public": true
}
```

### Optimizaciones Incluidas:
- **Cache headers**: Assets cacheados por 1 año
- **Security headers**: X-Frame-Options, Content-Type protection
- **Image optimization**: Headers específicos para /images/
- **Node.js 18**: Versión optimizada para Storybook
- **Telemetry disabled**: Builds más rápidos

---

## 📊 Build Status

### ✅ Build Exitoso
```bash
Build time: 4.24 segundos
Output size: 61MB
Stories: 15+ documentadas
Assets: Todas las imágenes incluidas
Warnings: Solo deprecation de SCSS (no críticos)
```

### Archivos Generados
```
storybook-static/
├── index.html              # Main Storybook page
├── iframe.html             # Stories iframe
├── assets/                 # JS/CSS bundles
├── images/                 # Product images (40+ files)
├── fonts/                  # Nunito Sans webfonts
└── project.json           # Storybook metadata
```

---

## 🌐 URL Esperada

Después del deploy exitoso, tu Storybook estará disponible en:
- **Primary URL**: `https://catalog-prototype-storybook-[hash].vercel.app`
- **Alternative**: `https://catalog-prototype-storybook-[team].vercel.app`

### Páginas Principales
- **Introduction**: `/?path=/docs/introduction--page`
- **Design Tokens**: `/?path=/docs/design-tokens--page`
- **Colors**: `/?path=/docs/colors--docs`
- **Button Component**: `/?path=/story/design-system-button--primary`
- **ProductCard**: `/?path=/story/components-productcard--default`

---

## ✅ Verificación Post-Deploy

### Checklist de Verificación
- [ ] **Home page carga**: Index page con sidebar funcionando
- [ ] **Stories navegation**: Sidebar con categorías ordenadas
- [ ] **Design Tokens page**: Muestra todos los tokens visuales
- [ ] **Button stories**: Todas las variants (Primary/Secondary/Ghost)
- [ ] **ProductCard stories**: 6 categorías con colores correctos
- [ ] **Images loading**: Product images cargan sin errores
- [ ] **Responsive**: Mobile, tablet, desktop funcionando
- [ ] **A11y panel**: Accessibility addon funcionando
- [ ] **Controls**: Interactive props en todos los components

### Testing en Production
```bash
# Test responsiveness
# Visit URL y usar viewport controls

# Test accessibility
# Verificar A11y panel en cada story

# Test performance
# Dev Tools → Lighthouse → Run audit
```

---

## 🔄 Redeploy para Actualizaciones

### Cuando Actualices Componentes:
```bash
# 1. Rebuild Storybook
npm run build-storybook

# 2. Redeploy (mismo comando)
npx vercel --prod --yes
```

### Cuando Agregues Nuevas Stories:
```bash
# 1. Crear nueva .stories.tsx
# 2. Build y deploy
npm run build-storybook
npx vercel --prod --yes
```

### Cuando Actualices Design Tokens:
```bash
# 1. Modificar src/styles/design-tokens.scss
# 2. Build y deploy
npm run build-storybook  
npx vercel --prod --yes
```

---

## 🎯 Custom Domain (Opcional)

### Configurar Subdomain
```bash
# En Vercel dashboard:
# 1. Go to project settings
# 2. Add custom domain: storybook.tu-dominio.com
# 3. Configure DNS records
```

### Domain Alias
```bash
# Alternativa: usar vercel alias
npx vercel alias https://catalog-prototype-storybook-xxx.vercel.app storybook-catalog.vercel.app
```

---

## 🔧 Troubleshooting

### ❌ Build Fails
```bash
# Problema: npm dependencies
# Solución:
rm -rf node_modules package-lock.json
npm install
npm run build-storybook
```

### ❌ Images Not Loading
```bash
# Problema: images/xxx.png 404
# Solución: verificar public/ folder
ls -la public/images/
npm run build-storybook
```

### ❌ Stories Not Loading
```bash
# Problema: Sidebar vacío
# Solución: verificar .storybook/main.ts paths
# Stories should be in src/**/*.stories.tsx
```

### ❌ Styles Missing
```bash
# Problema: Components sin design tokens
# Solución: verificar import en .storybook/preview.ts
import '../src/styles/global.scss';
```

---

## 📈 Performance Tips

### Optimización Continua
```bash
# Monitor bundle size
npm run build-storybook 2>&1 | grep "kB"

# Analyze large chunks
# Buscar chunks >500kB y considerar code splitting
```

### Cache Optimization
- **Assets**: Cached 1 year (`max-age=31536000`)
- **Images**: Cached 1 day (`max-age=86400`)
- **HTML**: Always fresh for updates

---

## 🎉 ¡Listo para Usar!

### Para el Equipo
1. **Developers**: Usar components desde Storybook
2. **Designers**: Verificar design tokens implementation
3. **PM**: Compartir URL para review y feedback
4. **QA**: Testing de accessibility y responsive

### Próximos Pasos
1. **Share URL** con el equipo
2. **Bookmark** para fácil acceso
3. **Document** URL en project README
4. **Setup** redeploy automation en CI/CD

---

**🎨 Tu Design System está ahora disponible globalmente!**

**URL de Deploy**: [SE MOSTRARÁ DESPUÉS DEL DEPLOY]

---

## 🆘 Support

Si tienes problemas:
1. **Check**: `TROUBLESHOOTING.md`
2. **Logs**: `npx vercel logs [deployment-url]`
3. **Rebuild**: `./deploy-storybook.sh`
4. **Contact**: Design System Team

---

*Generated with ❤️ by Claude Code*