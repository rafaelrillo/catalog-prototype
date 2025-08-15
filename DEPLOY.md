# 🚀 Deploy Instructions - Storybook Design System

## Resumen
Este documento contiene todas las instrucciones para hacer deploy del Storybook del Design System en diferentes plataformas.

## ✅ Pre-requisitos

1. **Build exitoso**: El comando `npm run build-storybook` debe ejecutarse sin errores
2. **Carpeta generada**: Debe existir la carpeta `storybook-static/` con los archivos compilados
3. **Archivos de configuración**: `netlify.toml` y `vercel.json` ya están configurados

---

## 🌐 Opciones de Deploy

### 1. Netlify (Recomendado - Gratis)

#### Opción A: Deploy con Git (Automático)
1. **Sube tu código a GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Add Storybook deploy configuration"
   git push origin main
   ```

2. **Conecta en Netlify**
   - Ve a [netlify.com](https://netlify.com) y crea cuenta
   - Click "New site from Git"
   - Selecciona tu repositorio
   - **Build settings** (auto-detectados desde `netlify.toml`):
     - Build command: `npm run build-storybook`
     - Publish directory: `storybook-static`
   - Click "Deploy site"

3. **URL disponible**
   - Netlify te dará una URL como: `https://amazing-name-123456.netlify.app`
   - Puedes cambiar el nombre en Site settings > Domain management

#### Opción B: Deploy Manual
1. **Genera el build**
   ```bash
   npm run build-storybook
   ```

2. **Deploy en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `storybook-static/` al área de deploy
   - Netlify procesará y te dará una URL

---

### 2. Vercel (Alternativa - Gratis)

#### Deploy con Git
1. **Conecta en Vercel**
   - Ve a [vercel.com](https://vercel.com) y crea cuenta
   - Click "New Project"
   - Importa tu repositorio de GitHub
   - **Settings** (auto-detectados desde `vercel.json`):
     - Framework Preset: Other
     - Build Command: `npm run build-storybook`
     - Output Directory: `storybook-static`
   - Click "Deploy"

2. **URL disponible**
   - Vercel te dará una URL como: `https://your-project.vercel.app`

---

### 3. GitHub Pages (Gratis)

1. **Instala gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agrega script al package.json**
   ```json
   {
     "scripts": {
       "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy-storybook
   ```

4. **URL disponible**
   - `https://tu-usuario.github.io/tu-repo/`

---

### 4. Deploy Manual (Cualquier hosting)

1. **Genera build**
   ```bash
   npm run build-storybook
   ```

2. **Sube archivos**
   - Comprime la carpeta `storybook-static/`
   - Sube a tu hosting (cPanel, FTP, etc.)
   - Extrae en la carpeta web root

---

## 🔧 Configuración Post-Deploy

### Custom Domain (Opcional)
- **Netlify**: Site settings > Domain management > Add custom domain
- **Vercel**: Project settings > Domains > Add domain

### HTTPS
- Ambas plataformas incluyen HTTPS automático
- No requiere configuración adicional

### Environment Variables
Si necesitas variables de entorno:
- **Netlify**: Site settings > Environment variables
- **Vercel**: Project settings > Environment Variables

---

## 🚨 Troubleshooting

### Error: "Build failed"
```bash
# Limpia y reinstala dependencias
rm -rf node_modules package-lock.json
npm install
npm run build-storybook
```

### Error: "404 en rutas"
- Verifica que los archivos de configuración (`netlify.toml` o `vercel.json`) estén en el root
- Los redirects están configurados para SPA behavior

### Error: "Assets no cargan"
- Verifica que la carpeta `storybook-static/assets/` se haya generado
- Check que los headers de cache estén configurados

### Error: "Estilos no se aplican"
- Verifica que los archivos `.css` estén en `storybook-static/assets/`
- Check que no hay errores en el build de Sass

---

## 📊 Performance

### Optimizaciones incluidas:
- ✅ Cache headers para assets (1 año)
- ✅ Gzip compression automática
- ✅ Security headers configurados
- ✅ SPA routing optimizado

### Métricas esperadas:
- **First Load**: ~2-3 segundos
- **Subsequent loads**: ~500ms (cached)
- **Lighthouse Score**: 90+ Performance

---

## 🔗 URLs de Ejemplo

Una vez deployado, tendrás URLs como:

- **Netlify**: `https://tu-design-system.netlify.app`
- **Vercel**: `https://tu-design-system.vercel.app`  
- **GitHub Pages**: `https://tu-usuario.github.io/tu-repo`

### URLs importantes:
- **Home**: `/` (Introduction)
- **Design Tokens**: `/?path=/docs/design-tokens--page`
- **Colors**: `/?path=/docs/colors--docs`
- **Button**: `/?path=/docs/design-system-button--docs`
- **ProductCard**: `/?path=/docs/components-productcard--docs`

---

## ✅ Checklist Post-Deploy

- [ ] Storybook carga correctamente
- [ ] Todas las páginas funcionan (Introduction, Design Tokens, Colors, etc.)
- [ ] Los componentes Button y ProductCard se renderizan bien
- [ ] Los estilos se aplican correctamente
- [ ] No hay errores en la consola del browser
- [ ] La navegación entre stories funciona
- [ ] El tema personalizado se ve bien
- [ ] URLs compartibles funcionan correctamente

---

## 🔄 Actualizaciones Futuras

Para actualizar el Storybook deployado:

1. **Con Git** (automático):
   ```bash
   git add .
   git commit -m "Update design system"
   git push
   ```

2. **Manual**:
   ```bash
   npm run build-storybook
   # Re-arrastra carpeta storybook-static a Netlify
   ```

¡Ya tienes todo listo para deploy! 🎉