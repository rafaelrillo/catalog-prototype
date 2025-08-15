# 🔗 Integración Figma ↔ Storybook

## Overview

Esta guía configura la integración bidireccional entre Figma y Storybook para mantener sincronizados el diseño y el código del Design System.

---

## 🚀 Setup Inicial

### 1. Storybook Deployed
**Prerequisito**: Tu Storybook debe estar deployado y accesible públicamente.

**URLs esperadas:**
- **Production**: `https://tu-design-system.netlify.app`
- **Staging**: `https://staging-branch.netlify.app`

### 2. Figma File Setup
**Prerequisito**: El archivo de Figma debe tener:
- ✅ Variables configuradas con design tokens
- ✅ Components Button y ProductCard creados
- ✅ Pages organizadas (Tokens, Components, Examples)

---

## 🔌 Plugin: Storybook Connect

### Instalación
1. **Figma** → **Plugins** → **Browse plugins**
2. **Buscar**: "Storybook Connect" 
3. **Install** plugin oficial

### Configuración
1. **Abrir plugin** en tu archivo de Figma
2. **Connect URL**: `https://tu-design-system.netlify.app`
3. **Test connection** para verificar acceso

### Uso del Plugin
- **Browse stories**: Ver todos los components de Storybook
- **Link frames**: Conectar componentes de Figma con stories
- **Sync updates**: Recibir notificaciones de cambios

---

## 🔌 Plugin: story.to.design

### Instalación
1. **Chrome/Edge**: Instalar extensión "story.to.design"
2. **Firefox**: Buscar addon equivalente

### Configuración
1. **Visitar** tu Storybook deployado
2. **Click** en la extensión
3. **Connect** con tu cuenta de Figma
4. **Authorize** permisos necesarios

### Uso
1. **En Storybook**: Navega a cualquier story
2. **Click** extensión story.to.design
3. **"Send to Figma"**: Exporta component como frame
4. **Figma se abre** automáticamente con el component

---

## 🔄 Workflow de Sincronización

### Figma → Storybook (Design-first)

**1. Diseñar en Figma**
```
1. Crear/actualizar component en Figma
2. Usar Variables para consistency
3. Documentar specs en Description
4. Crear ejemplos en Examples page
```

**2. Handoff a Desarrollo**
```
1. Generate Figma link
2. Export specs (CSS, measurements)
3. Communicate via Slack/email
4. Include Storybook story name/location
```

**3. Desarrollo implementa**
```
1. Create/update React component
2. Use design tokens from SCSS
3. Create/update Storybook story
4. Deploy to staging/production
```

**4. Validación**
```
1. Designer reviews deployed component
2. Compare with Figma using plugins
3. Iterate if needed
4. Approve for production
```

### Storybook → Figma (Code-first)

**1. Desarrollo actualiza**
```
1. Update design tokens in SCSS
2. Update React components
3. Update Storybook stories
4. Deploy changes
```

**2. Sync a Figma**
```
1. Use story.to.design extension
2. Export updated components to Figma
3. Update Figma Variables if needed
4. Maintain component library
```

**3. Designer valida**
```
1. Review imported components
2. Ensure consistency with Variables
3. Update examples if needed
4. Communicate any issues
```

---

## 📋 Integration Checklist

### Initial Setup
- [ ] **Storybook deployed** y accesible públicamente
- [ ] **Figma file** configurado con Variables y Components
- [ ] **Plugins instalados** (Storybook Connect + story.to.design)
- [ ] **Conexiones establecidas** entre herramientas
- [ ] **Test sync** realizado exitosamente

### Weekly Sync Process
- [ ] **Review design tokens** por cambios
- [ ] **Sync new components** Figma → Storybook
- [ ] **Update component library** con nuevas versiones
- [ ] **Cross-reference** consistency entre platforms
- [ ] **Document changes** en changelog

### Component Release Process
- [ ] **Design approved** en Figma
- [ ] **Code implemented** siguiendo specs
- [ ] **Story created** en Storybook
- [ ] **Cross-platform validation** realizada
- [ ] **Documentation updated** en ambos lados
- [ ] **Team notified** del nuevo component

---

## 🛠️ Advanced Integration

### API Integration (Opcional)

**Figma API + Storybook**
- Automatizar export de design tokens
- Sync cambios de Variables automáticamente
- Generate component code desde Figma specs

**Tools recomendadas:**
- **Figma Tokens Studio**: Para token management
- **Figma API**: Para automation
- **GitHub Actions**: Para CI/CD integration

### Token Sync Automation

**Setup automation para:**
1. **Figma Variables** → **SCSS variables**
2. **Color updates** sync automático
3. **Spacing/Typography** changes sync
4. **Version control** para design tokens

---

## 📊 Monitoring & Maintenance

### KPIs a trackear
- **Sync frequency**: Cuánto tiempo entre design y code
- **Consistency score**: % match entre Figma y Storybook  
- **Component coverage**: Components en ambas platforms
- **Token accuracy**: Design tokens matching exacto

### Maintenance Tasks

**Semanal:**
- [ ] Verify all components sync correctly
- [ ] Check for token discrepancies  
- [ ] Update plugin versions if needed
- [ ] Review any broken connections

**Mensual:**
- [ ] Audit complete design system consistency
- [ ] Update integration documentation
- [ ] Evaluate new plugins/tools
- [ ] Optimize workflow based on team feedback

---

## 🚨 Troubleshooting

### Plugin No Conecta
**Problema**: Storybook Connect no puede acceder
**Solución**:
- Verificar URL de Storybook es pública
- Check que no hay authentication requerida
- Verificar CORS settings en deploy

### Components No Sync
**Problema**: story.to.design no exporta correctly
**Solución**:
- Refresh Figma browser tab
- Re-authorize extension permissions
- Check network connectivity

### Token Mismatch
**Problema**: Colores/spacing no coinciden
**Solución**:
- Audit design tokens en ambas platforms
- Use exact hex values
- Verify variable naming consistency

### Performance Issues
**Problema**: Plugins lentos or crash
**Solución**:
- Close other Figma files
- Refresh browser/Figma app
- Check available RAM/resources

---

## 📚 Resources

### Documentation
- **Figma API**: [developers.figma.com](https://www.figma.com/developers)
- **Storybook Docs**: [storybook.js.org](https://storybook.js.org/)
- **Design Tokens**: [design-tokens.github.io](https://design-tokens.github.io/)

### Community
- **Figma Community**: Design system templates
- **Storybook Discord**: Technical support
- **Design Systems Slack**: Best practices

### Tools
- **Figma Tokens Studio**: [figmatokens.com](https://tokens.studio/)
- **Style Dictionary**: [amzn.github.io/style-dictionary](https://amzn.github.io/style-dictionary/)
- **Design Tokens W3C**: [design-tokens.github.io/community-group](https://design-tokens.github.io/community-group/)

---

## 🎯 Next Steps

### Phase 1: Basic Integration (Current)
- ✅ Manual sync process established
- ✅ Plugins configured and working
- ✅ Team trained on workflow

### Phase 2: Semi-Automation (Future)
- [ ] Automated token export/import
- [ ] CI/CD integration for updates
- [ ] Slack notifications for changes

### Phase 3: Full Automation (Future)
- [ ] API-driven synchronization
- [ ] Auto-generated code from designs
- [ ] Version control integration

---

**Última actualización**: [FECHA-ACTUAL]  
**Responsable**: Design System Team  
**Storybook URL**: [AGREGAR-URL-CUANDO-DEPLOYADO]