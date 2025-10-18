# 🚀 Guia Rápido - SafeGreen Landing Page

## ⚡ Início Rápido (3 passos)

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Executar em desenvolvimento
```bash
npm run dev
```

### 3️⃣ Abrir no navegador
```
http://localhost:3000
```

---

## 📸 Substituir Imagens

**IMPORTANTE:** Substitua os placeholders antes do deploy!

### Onde colocar as imagens:
```
public/images/
├── hero.jpg          ← Imagem principal (1600×900px)
├── testi-1.jpg       ← Depoimento 1 (600×800px)
├── testi-2.jpg       ← Depoimento 2
├── testi-3.jpg       ← Depoimento 3
├── testi-4.jpg       ← Depoimento 4
├── testi-5.jpg       ← Depoimento 5
├── result-1.jpg      ← Resultado 1 (800×1000px)
├── result-2.jpg      ← Resultado 2
├── result-3.jpg      ← Resultado 3
├── result-4.jpg      ← Resultado 4
└── result-5.jpg      ← Resultado 5
```

📖 **Detalhes completos:** Veja `public/images/README.md`

---

## 🎨 Personalização Rápida

### Alterar cores:
Edite `tailwind.config.ts` → seção `colors`

### Alterar textos:
- **Título principal:** `components/Hero.tsx` (linha ~37)
- **CTAs:** `components/CTASection.tsx` e `components/Hero.tsx`
- **Timer:** `components/TopbarCountdown.tsx` (linha ~14 para duração)

---

## 📦 Build para Produção

```bash
npm run build
npm start
```

---

## 🌐 Deploy

### Vercel (Mais fácil):
1. Push para GitHub
2. Conectar no https://vercel.com
3. Deploy automático ✅

### Netlify:
1. Push para GitHub
2. Conectar no https://netlify.com
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## ✅ Checklist Pré-Deploy

- [ ] Substituir TODAS as 11 imagens
- [ ] Testar em mobile e desktop
- [ ] Configurar domínio personalizado
- [ ] Adicionar Google Analytics (opcional)
- [ ] Testar contador regressivo
- [ ] Verificar links do rodapé

---

## 🆘 Problemas Comuns

### Build falha:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Imagens não aparecem:
- Verifique se estão em `public/images/`
- Nomes dos arquivos devem ser exatamente como listado acima
- Formato: `.jpg`, `.png` ou `.webp`

### Timer não funciona:
- Verifique localStorage no navegador (deve ter `sg_endTimestamp`)
- Limpe cache: Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)

---

## 📚 Documentação Completa

Para informações detalhadas, consulte:
- **README.md** - Documentação completa
- **public/images/README.md** - Guia de imagens

---

**Desenvolvido para Lucas Tyldy © 2025**

🟢 **Acesso Liberado - Comece Agora!**
