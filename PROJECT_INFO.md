# 📊 Informações do Projeto - SafeGreen Landing Page

## 🎯 Visão Geral

**Nome:** SafeGreen Landing Page
**Tipo:** Landing page de alta conversão (Presell)
**Objetivo:** Captura de leads para grupo de Freebet
**Público-alvo:** Apostadores esportivos (18+)
**Idioma:** Português (Brasil)

---

## 🏗️ Tecnologias Utilizadas

### Core
- **Next.js 13.5.1** - Framework React com SSR/SSG
- **React 18.2.0** - Biblioteca para interfaces
- **TypeScript 5.2.2** - Tipagem estática
- **Tailwind CSS 3.3.3** - Framework CSS utility-first

### Bibliotecas UI
- **Swiper 12.0.2** - Carrosséis interativos
- **Lucide React 0.446.0** - Ícones SVG otimizados
- **Radix UI** - Componentes acessíveis (não utilizados ativamente na landing)

### Fontes
- **Anton** - Display (títulos grandes)
- **Poppins** - Body text
- Carregadas via Google Fonts

---

## 📐 Estrutura de Componentes

### Hierarquia:
```
app/page.tsx (Página Principal)
├── TopbarCountdown (Barra de urgência + timer)
├── Hero (Seção principal)
├── CTASection (Call-to-action repetível)
├── TestimonialCarousel (Carrossel de depoimentos)
├── CTASection (Repetido)
├── ResultsCarousel (Carrossel de resultados)
├── CTAForm (Formulário de captura)
└── Footer (Rodapé legal)
```

### Responsabilidades:

**TopbarCountdown:**
- Timer regressivo de 10 minutos
- Persistência em localStorage
- Auto-reset ao atingir zero
- Mensagem de escassez (FOMO)

**Hero:**
- Título impactante
- Proposta de valor
- CTA principal
- Elementos decorativos (screenshots flutuantes)

**CTASection:**
- Botão de ação repetível
- Scroll suave para formulário
- Mensagem de escassez adicional

**TestimonialCarousel:**
- 5 slides de depoimentos
- Autoplay 4s
- Navegação: setas + dots + teclado

**ResultsCarousel:**
- 5 slides de resultados
- Overlay com círculo verde + valor
- Autoplay 5s
- Legendas com data e valor

**CTAForm:**
- Input de e-mail com validação
- Botão de envio
- Feedback visual (ícone check)
- Badges de confiança

**Footer:**
- Links importantes
- Redes sociais
- Disclaimers legais (+18, responsabilidade)
- Copyright

---

## 🎨 Design System

### Cores Primárias:
```css
--safegreen: #00FF00    /* Verde neon - CTA, destaques */
--dark-900: #02040a     /* Fundo escuro principal */
--black: #000000        /* Elementos de contraste */
--white: #FFFFFF        /* Textos principais */
```

### Tipografia:
```css
/* Display (Títulos) */
font-family: 'Anton', sans-serif;
font-size: 84px → 56px → 36px (desktop → tablet → mobile)
text-transform: uppercase;
letter-spacing: -1px;

/* Body */
font-family: 'Poppins', sans-serif;
font-size: 16px;
font-weight: 400 | 600 | 700;
line-height: 1.5;
```

### Espaçamento:
Sistema base 8px:
- Pequeno: 8px, 16px, 24px
- Médio: 32px, 48px, 64px
- Grande: 96px, 128px

### Efeitos:
```css
/* Glow verde */
text-shadow: 0 6px 18px rgba(0,255,0,0.12), 0 10px 40px rgba(0,255,0,0.06);
box-shadow: 0 8px 30px rgba(0,255,0,0.25);

/* Hover CTA */
transform: translateY(-2px) scale(1.03);
box-shadow: 0 16px 50px rgba(0,255,0,0.35);
```

---

## 📱 Responsividade

### Breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Ajustes por dispositivo:

**Topbar:**
- Mobile: altura 48px, texto menor, timer vertical
- Desktop: altura 56px, layout horizontal

**Hero:**
- Mobile: título 36px, padding reduzido, elementos decorativos ocultos
- Desktop: título 84px, elementos flutuantes visíveis

**Carrosséis:**
- Mobile: 1 slide visível
- Tablet: 2 slides
- Desktop: 3 slides centralizados

---

## ⚡ Performance

### Métricas de Build:
- **Tamanho da página:** 34.5 kB
- **First Load JS:** 114 kB
- **Renderização:** Static HTML (SSG)

### Otimizações:
- ✅ Lazy loading de imagens
- ✅ Fontes carregadas de forma assíncrona
- ✅ CSS minificado e purgado
- ✅ JavaScript code splitting
- ✅ Static Generation (geração estática)

### Recomendações futuras:
- [ ] Converter imagens para WebP
- [ ] Implementar srcset para imagens responsivas
- [ ] Adicionar Service Worker (PWA)
- [ ] Implementar Image Optimization do Next.js

---

## ♿ Acessibilidade

### Implementações:
- ✅ Semântica HTML5 (header, main, section, footer)
- ✅ Atributos ARIA (labels, roles, live regions)
- ✅ Navegação por teclado (carrosséis, formulário)
- ✅ Contraste adequado (WCAG AA)
- ✅ Suporte a prefers-reduced-motion
- ✅ Formulário com labels apropriados
- ✅ Focus visível em elementos interativos

### Testes recomendados:
- [ ] Lighthouse Accessibility Score
- [ ] Navegação apenas com teclado
- [ ] Leitores de tela (NVDA, VoiceOver)
- [ ] Teste de contraste

---

## 🔒 Segurança

### Boas práticas implementadas:
- ✅ Validação de formulário HTML5
- ✅ HTTPS obrigatório (em produção)
- ✅ Sem armazenamento de dados sensíveis
- ✅ LocalStorage usado apenas para timer (não sensível)

### Recomendações de produção:
- [ ] Implementar CSRF protection no backend
- [ ] Rate limiting para formulário
- [ ] Sanitização de inputs no backend
- [ ] Headers de segurança (CSP, X-Frame-Options)

---

## 📊 Conversão & Marketing

### Elementos de conversão:
1. **Escassez:** "98% das vagas esgotadas"
2. **Urgência:** Contador regressivo
3. **Prova social:** Carrossel de depoimentos
4. **Prova de resultado:** Screenshots de ganhos
5. **CTAs repetidos:** Múltiplas oportunidades de conversão
6. **Simplicidade:** Apenas um campo (e-mail)

### Pontos de conversão:
- Hero CTA
- Pós-depoimentos CTA
- Formulário final (principal)

### KPIs a monitorar:
- Taxa de conversão (%)
- Taxa de rejeição
- Tempo na página
- Scroll depth
- Cliques em CTAs

---

## 🧪 Testes

### Testes manuais necessários:
- [ ] Formulário submete corretamente
- [ ] Timer persiste após refresh
- [ ] Carrosséis funcionam em todos os dispositivos
- [ ] Layout não quebra em diferentes resoluções
- [ ] Todos os links funcionam
- [ ] Imagens carregam corretamente

### Navegadores para testar:
- Chrome (desktop + mobile)
- Safari (iOS)
- Firefox
- Edge

---

## 🚀 Melhorias Futuras

### Fase 2 (curto prazo):
- [ ] Integração com backend (API de captura)
- [ ] Implementar tracking de eventos (GTM)
- [ ] A/B testing de headlines
- [ ] Adicionar mais depoimentos
- [ ] Pixel de conversão (Meta, TikTok)

### Fase 3 (médio prazo):
- [ ] Dashboard de analytics interno
- [ ] Teste A/B de cores de CTA
- [ ] Chat ao vivo (WhatsApp, Intercom)
- [ ] Vídeo explicativo no hero
- [ ] FAQ section

### Fase 4 (longo prazo):
- [ ] Multi-idioma (Inglês, Espanhol)
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light mode toggle
- [ ] Animações avançadas (Framer Motion)

---

## 📝 Notas de Desenvolvimento

### Decisões técnicas:

**Por que Next.js?**
- SEO otimizado nativamente
- Performance excepcional (SSG)
- Developer experience superior
- Deploy fácil (Vercel)

**Por que Tailwind?**
- Desenvolvimento rápido
- Bundle size pequeno (purge)
- Consistência de design
- Responsividade simplificada

**Por que Swiper?**
- Biblioteca madura e testada
- Performance em mobile
- Suporte a gestos touch
- Altamente customizável

### Alternativas consideradas:

**Framework:**
- ❌ Create React App (sem SSR)
- ❌ Gatsby (mais complexo)
- ✅ Next.js (escolhido)

**Carrossel:**
- ❌ Slick Slider (jQuery dependência)
- ❌ React Slick (performance)
- ✅ Swiper (escolhido)

---

## 📞 Contatos e Recursos

### Documentação:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Swiper: https://swiperjs.com/react

### Suporte:
- Repositório: [GitHub link]
- Issues: [GitHub issues]
- E-mail: [contato]

---

## 📄 Licença e Copyright

**Copyright © 2025 Lucas Tyldy**
Todos os direitos reservados.

Este projeto é proprietário e confidencial.
Não distribuir ou reproduzir sem autorização.

---

**Última atualização:** 10 de Outubro de 2025
**Versão:** 1.0.0
**Status:** ✅ Produção Ready

🟢 **SafeGreen - Desenvolvido para Converter!**
