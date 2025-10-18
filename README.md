# 🟢 SafeGreen - Landing Page Freebet

Landing page responsiva de alta conversão para o grupo SafeGreen (Freebet), construída com Next.js 13, TypeScript e Tailwind CSS.

## 🎯 Características

- ⏱️ **Contador regressivo** com persistência em localStorage (cria urgência FOMO)
- 🎨 **Design moderno** com paleta neon verde (#00FF00) sobre fundo escuro
- 📱 **100% Responsivo** - mobile-first design
- 🎠 **Carrosséis interativos** para depoimentos e resultados usando Swiper
- ⚡ **Performance otimizada** com lazy loading e imagens responsivas
- ♿ **Acessível** com suporte a leitores de tela e navegação por teclado
- 🔒 **SEO otimizado** com meta tags e OpenGraph

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone ou navegue até o diretório do projeto:**
   ```bash
   cd project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:3000
   ```

5. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Estrutura do Projeto

```
project/
├── app/
│   ├── globals.css          # Estilos globais + Tailwind + fontes
│   ├── layout.tsx            # Layout raiz com metadata
│   └── page.tsx              # Página principal (home)
├── components/
│   ├── TopbarCountdown.tsx   # Barra superior com timer
│   ├── Hero.tsx              # Seção hero principal
│   ├── CTASection.tsx        # Seção de call-to-action repetível
│   ├── CTAForm.tsx           # Formulário de captura de leads
│   ├── TestimonialCarousel.tsx # Carrossel de depoimentos
│   ├── ResultsCarousel.tsx   # Carrossel de resultados
│   └── Footer.tsx            # Rodapé com disclaimers legais
├── public/
│   └── images/               # Imagens da landing page
│       └── README.md         # Instruções para substituir imagens
├── tailwind.config.ts        # Configuração do Tailwind (cores SafeGreen)
├── package.json
└── README.md                 # Este arquivo
```

## 🎨 Identidade Visual

### Paleta de Cores

- **SafeGreen:** `#00FF00` (verde neon) - cor primária/CTA
- **Dark 900:** `#02040a` - fundo principal
- **Preto:** `#000000` - elementos de contraste
- **Branco:** `#FFFFFF` - texto principal

### Tipografia

- **Display (Títulos):** Anton - pesada, condensada, uppercase
- **Subtítulos/Body:** Poppins - 400 (regular), 600 (semibold), 700 (bold)
- Carregadas via Google Fonts

### Hierarquia Tipográfica

- **H1 Hero:** 84px (desktop) → 56px (tablet) → 36px (mobile)
- **H2 Seções:** 48px → 36px → 28px
- **Body:** 16px
- **Small/CTA:** 14px

## 🖼️ Substituindo as Imagens

**IMPORTANTE:** O projeto possui placeholders para imagens. Você DEVE substituir pelos arquivos reais.

### Imagens Necessárias:

1. **hero.jpg** (1600×900px) - Imagem principal do hero
2. **testi-1.jpg a testi-5.jpg** (600×800px) - Screenshots de depoimentos
3. **result-1.jpg a result-5.jpg** (800×1000px) - Screenshots de resultados

📖 **Leia as instruções detalhadas em:** `public/images/README.md`

### Dicas para Imagens:

- Use formato WebP para melhor compressão
- Comprima as imagens (TinyPNG, Squoosh)
- Mantenha qualidade acima de 80%
- Use fontes livres de direitos (Pexels, Unsplash)

## ⚙️ Funcionalidades Técnicas

### Contador Regressivo (TopbarCountdown)

- Inicia em 10 minutos
- Persiste o tempo restante em `localStorage` (chave: `sg_endTimestamp`)
- Ao chegar em 00:00, reinicia automaticamente para 10:00
- Animação de "pulse" a cada segundo

### Carrosséis (Swiper)

**Testimonials:**
- Autoplay: 4s por slide
- Desktop: 3 visíveis | Mobile: 1
- Navegação: setas + dots + teclado (←/→)
- Pause no hover

**Results:**
- Autoplay: 5s por slide
- Círculo verde SVG overlay com label de valor (+30k)
- Mesmas opções de navegação

### CTAs e Formulário

- Botão verde neon com hover effect (scale + glow)
- Scroll suave para formulário ao clicar
- Formulário com validação HTML5
- Feedback visual ao enviar (ícone check)
- Data attributes para tracking GTM

### Acessibilidade

- Todos os botões com `aria-label`
- Carrosséis com `role="region"` e `aria-roledescription`
- Suporte a `prefers-reduced-motion`
- Contraste adequado (WCAG AA)
- Navegação por teclado

## 🔧 Customização

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  safegreen: '#00FF00', // Sua cor primária
  'dark-900': '#02040a', // Fundo
  // ...
}
```

### Alterar Textos

Principais textos estão em português nos componentes:

- **Hero título:** "ACESSO LIBERADO"
- **Hero subtítulo:** "Receba entradas diárias pra buscar um retorno alto, sem risco algum."
- **CTA:** "QUERO FORRAR AGORA ➜"

Edite diretamente em `components/Hero.tsx`, `components/CTASection.tsx`, etc.

### Alterar Timer

Em `components/TopbarCountdown.tsx`, linha 14:

```typescript
endTimestamp = Date.now() + 10 * 60 * 1000; // 10 minutos
```

Altere `10` para o número de minutos desejado.

## 📊 SEO e Meta Tags

Configurados em `app/layout.tsx`:

- Title: "SafeGreen - Grupo de Freebet | Acesso Liberado"
- Description otimizada para conversão
- OpenGraph tags para compartilhamento social
- Theme color verde (#00FF00)
- Idioma: pt-BR

### Melhorias Recomendadas:

- [ ] Adicionar og:image (criar imagem 1200×630px)
- [ ] Configurar Google Analytics / Tag Manager
- [ ] Adicionar pixels de conversão (Meta, TikTok)
- [ ] Implementar sitemap.xml
- [ ] Configurar robots.txt

## 🚨 Avisos Legais

O projeto inclui disclaimers no rodapé:

- "Jogue com responsabilidade"
- "Isso não é investimento"
- "+18"
- Aviso sobre leis locais

**IMPORTANTE:**
- Apostas esportivas são reguladas em muitos países
- Verifique as leis locais antes de promover apostas
- Use o site apenas para fins legais e éticos
- Obtenha permissão para usar depoimentos/screenshots de clientes

## 🛠️ Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento (porta 3000)
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Lint com ESLint
npm run typecheck  # Verificação de tipos TypeScript
```

## 📦 Dependências Principais

- **Next.js 13.5.1** - Framework React
- **React 18.2.0** - Biblioteca UI
- **TypeScript 5.2.2** - Tipagem estática
- **Tailwind CSS 3.3.3** - Utility-first CSS
- **Swiper 12.0.2** - Biblioteca de carrosséis
- **Lucide React 0.446.0** - Ícones

## 🌐 Deploy

### Vercel (Recomendado)

1. Push para GitHub/GitLab
2. Conecte no Vercel: https://vercel.com
3. Deploy automático

### Outras Plataformas

- **Netlify:** Funciona out-of-the-box
- **Railway:** Suporta Next.js
- **AWS / DigitalOcean:** Requer configuração de Node.js

### Variáveis de Ambiente (se necessário)

Crie `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 📝 Checklist Pré-Lançamento

- [ ] Substituir TODAS as imagens placeholders
- [ ] Testar em mobile, tablet e desktop
- [ ] Verificar todos os links (Política de Privacidade, Termos)
- [ ] Configurar analytics (GA4, GTM)
- [ ] Testar formulário de captura de leads
- [ ] Verificar tempo de carregamento (< 3s)
- [ ] Testar em diferentes navegadores (Chrome, Safari, Firefox)
- [ ] Revisar todos os textos (typos, gramática)
- [ ] Configurar domínio personalizado
- [ ] Configurar SSL (HTTPS)
- [ ] Testar contador regressivo em múltiplas sessões
- [ ] Adicionar favicon e app icons

## 🤝 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação do Next.js: https://nextjs.org/docs
2. Leia os comentários no código
3. Consulte o README das imagens: `public/images/README.md`

## 📄 Licença

Este projeto foi criado para Lucas Tyldy © 2025. Todos os direitos reservados.

---

**Desenvolvido com ❤️ e ⚡ por Claude Code**

🟢 **SafeGreen - Acesso Liberado para o Sucesso!**
