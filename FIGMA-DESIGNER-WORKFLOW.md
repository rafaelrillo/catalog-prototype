# 🎨 Workflow Figma + Storybook - Guía para Diseñadores

## 🎯 Tu Storybook con Figma Integration está LISTO!

**URL actualizada**: https://catalog-prototype-storybook.vercel.app

---

## 🚀 Setup Inicial (15 minutos)

### **Paso 1: Instalar Plugin en Figma**
1. **Abrir Figma** → Cualquier archivo
2. **Menu → Plugins → Browse all plugins**
3. **Buscar**: "Storybook Connect"
4. **Install** plugin oficial
5. **Run plugin**: Menu → Plugins → Storybook Connect

### **Paso 2: Conectar tu Storybook**
```
Plugin → Enter URL:
https://catalog-prototype-storybook.vercel.app

Click "Connect" → ✅ Ver lista de stories
```

### **Paso 3: Test de Conexión**
- Plugin debe mostrar: "Introduction", "Design Tokens", "Colors", "Button", "ProductCard"
- Click cualquier story → se abre en nueva pestaña
- ✅ **Conexión exitosa!**

---

## 🎨 Workflow: Design → Development

### **🎯 Para Diseñar Componentes Nuevos:**

#### **1. Crear Variables en Figma**
```
📁 Nuevo file → Variables panel → + Create collection

Nombre: "Catalog Design System"

🎨 Variables de Color:
├── Tortas-Light: #E67792
├── Tortas-Main: #EB1951
├── Tartas-Light: #A6BFB1
├── Tartas-Main: #5A9272
├── Brownies-Light: #F19C32
├── Brownies-Main: #C57512
├── Cheesecakes-Light: #F8C8DC
├── Cheesecakes-Main: #E91E63
├── Alfajores-Light: #C680CC
├── Alfajores-Main: #AA17B6
├── Otros-Light: #FFEB3B
└── Otros-Main: #F57F17

📏 Variables de Spacing:
├── xs: 4px
├── sm: 8px
├── md: 16px
├── lg: 24px
├── xl: 32px
├── 2xl: 48px
└── 3xl: 64px
```

#### **2. Diseñar con Variables**
- **Usar Variables** para todos los colores y spacing
- **Auto Layout** para componentes responsive
- **Component variants** para estados (hover, disabled, etc.)
- **Naming consistency**: Button/Primary, Button/Secondary, etc.

#### **3. Specs & Handoff**
```
📋 Para cada component:
1. Get shareable link del frame
2. Add annotations con Variables usadas
3. Document estados y interactions
4. Share link con developers
```

---

## 🔗 Workflow: Link Components

### **Conectar Figma Design con Storybook:**

#### **Método 1: Plugin Storybook Connect**
```
1. Select component en Figma
2. Open Storybook Connect plugin
3. Choose corresponding story
4. Click "Link"
5. ✅ Component linked!
```

#### **Método 2: Share Links para Developers**
```
1. Select frame en Figma
2. Share → Copy link
3. Send to developer:
   "Design: https://figma.com/file/ABC123..."
4. Developer adds link to story
5. ✅ Design tab appears en Storybook
```

---

## 👀 Workflow: Review Implementation

### **Ver Code desde Figma:**
```
1. Select linked component
2. Plugin → "View in Storybook"
3. Compare design vs implementation
4. Report differences si hay
```

### **Ver Design desde Storybook:**
```
1. Open story en Storybook
2. Click "Design" tab (aparece si link existe)
3. Ver Figma design junto al component
4. Compare side-by-side
```

---

## 🎯 Componentes Listos para Linking

### **Button Component:**
```
🔘 Button Stories disponibles:
├── Primary ← Link tu Button/Primary design
├── Secondary ← Link tu Button/Secondary design
├── Ghost ← Link tu Button/Ghost design
├── Small/Medium/Large ← Link size variants
├── Disabled ← Link disabled state
└── All Variants ← Link component overview
```

### **ProductCard Component:**
```
🍰 ProductCard Stories:
├── Tortas variant ← Link design con #E67792/#EB1951
├── Tartas variant ← Link design con #A6BFB1/#5A9272
├── Brownies variant ← Link design con #F19C32/#C57512
├── Cheesecakes variant ← Link design con #F8C8DC/#E91E63
├── Alfajores variant ← Link design con #C680CC/#AA17B6
└── Otros variant ← Link design con #FFEB3B/#F57F17
```

---

## 📋 Daily Workflow

### **🌅 Morning Setup:**
```
1. Open Figma file
2. Run Storybook Connect plugin
3. Verify connection con Storybook URL
4. Check for new stories from developers
```

### **🎨 Durante Design:**
```
1. Use Variables para consistency
2. Create component variants siguiendo naming conventions
3. Test interactions y states
4. Generate shareable links
```

### **🤝 Handoff Process:**
```
1. Share Figma links con developers
2. Add specs usando Variables
3. Use plugin para QA visual
4. Iterate based on implementation feedback
```

### **📊 Review & QA:**
```
1. Use plugin to compare design vs code
2. Report visual differences
3. Verify responsive behavior
4. Check accessibility (A11y tab en Storybook)
```

---

## 🛠️ Tools Setup Summary

### **✅ Ya Configurado:**
- **Storybook**: Deployed con Figma integration
- **Addon Designs**: Enables Design tab en stories
- **Design Tokens**: 64+ tokens implementados
- **Components**: Button, ProductCard ready para linking

### **🎯 Para Configurar:**
- **Figma Variables**: Create collection con design tokens
- **Plugin Installation**: Storybook Connect
- **Component Designs**: Create usando Variables
- **Link Components**: Connect designs con stories

---

## 🚨 Troubleshooting

### **Plugin no conecta:**
```
❌ "Connection failed"
✅ Verify URL: https://catalog-prototype-storybook.vercel.app
✅ Check internet connection
✅ Try refresh plugin
```

### **Design tab no aparece:**
```
❌ No "Design" tab en story
✅ Verify developer added Figma URL to story
✅ Check URL format: https://figma.com/file/...
✅ Try refresh Storybook page
```

### **Variables not syncing:**
```
❌ Colors different between Figma/Storybook
✅ Manual sync required (no auto-sync yet)
✅ Copy hex values exactly from Variables
✅ Inform developers of changes
```

---

## 🎯 Quick Start Checklist

### **Today (15 min):**
- [ ] Install Storybook Connect plugin
- [ ] Connect to Storybook URL
- [ ] Test linking with existing Button story

### **This Week:**
- [ ] Create Variables collection con design tokens
- [ ] Design Button component usando Variables
- [ ] Design ProductCard variants para 6 categorías
- [ ] Link all designs con Storybook stories

### **Ongoing:**
- [ ] Use Variables para todos new designs
- [ ] Share links con developers for new components
- [ ] Review implementations using plugin
- [ ] Maintain design-code consistency

---

## 🎉 Success State

### **Cuando todo funciona:**
✅ **Plugin connects** to Storybook instantly  
✅ **Design tab** appears en all linked stories  
✅ **Variables** mantienen consistency Figma↔Code  
✅ **Workflow** smooth entre design y development  
✅ **Team** using single source of truth  

---

## 📞 Support

### **Si necesitas ayuda:**
- **Plugin issues**: Restart Figma, reinstall plugin
- **Connection problems**: Verify Storybook URL
- **Design differences**: Use plugin para compare
- **Variables questions**: Check implementation en Storybook Design Tokens page

### **Resources:**
- **Your Storybook**: https://catalog-prototype-storybook.vercel.app
- **Design Tokens**: Check Colors y Design Tokens pages
- **Plugin docs**: Storybook.js.org addon documentation

---

**🎨 Ready to create amazing designs with perfect implementation!**

**Start with**: Plugin installation → URL connection → First component link