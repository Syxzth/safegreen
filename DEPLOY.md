# 🚀 Guia de Deploy - SafeGreen Landing Page

Este documento contém instruções detalhadas para fazer deploy da landing page SafeGreen em diferentes plataformas.

---

## 📋 Pré-requisitos

Antes de fazer deploy, certifique-se de:

- ✅ Todas as 11 imagens foram substituídas em `public/images/`
- ✅ Textos revisados e sem erros de ortografia
- ✅ Build local funcionando: `npm run build`
- ✅ Links do rodapé atualizados (Política de Privacidade, Termos de Uso)
- ✅ Código versionado no Git/GitHub

---

## 1️⃣ Deploy na Vercel (Recomendado)

### Por que Vercel?
- ✅ Otimizado para Next.js
- ✅ Deploy automático a cada push
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Preview URLs para cada branch

### Passos:

#### A. Pelo GitHub:

1. **Push para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SafeGreen landing page"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/safegreen-landing.git
   git push -u origin main
   ```

2. **Conectar na Vercel:**
   - Acesse https://vercel.com
   - Clique em "Add New Project"
   - Importe seu repositório GitHub
   - Framework: Next.js (detectado automaticamente)
   - Clique em "Deploy"

3. **Configurar variáveis de ambiente:**
   - No dashboard do projeto → Settings → Environment Variables
   - Adicione:
     ```
     NEXT_PUBLIC_SITE_URL = https://seu-dominio.vercel.app
     ```

4. **Domínio customizado (opcional):**
   - Settings → Domains
   - Adicione seu domínio
   - Configure DNS conforme instruções

#### B. Via CLI:

```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções no terminal.

---

## 2️⃣ Deploy na Netlify

### Passos:

1. **Build otimizado:**

   Crie `netlify.toml` na raiz do projeto:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy via Git:**
   - Push para GitHub/GitLab
   - Acesse https://netlify.com
   - New site from Git
   - Selecione seu repositório
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Deploy site

3. **Configurar variáveis:**
   - Site settings → Environment variables
   - Adicione `NEXT_PUBLIC_SITE_URL`

4. **Domínio:**
   - Domain settings → Add custom domain

---

## 3️⃣ Deploy em VPS (DigitalOcean, AWS, etc.)

### Requisitos:
- Node.js 18+ instalado
- PM2 para gerenciar processo
- Nginx como reverse proxy

### Passos:

#### A. Preparar servidor:

```bash
# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt-get install nginx
```

#### B. Deploy do projeto:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/safegreen-landing.git
cd safegreen-landing

# Instalar dependências
npm install

# Criar .env.local
nano .env.local
# Adicione: NEXT_PUBLIC_SITE_URL=https://seu-dominio.com

# Build
npm run build

# Iniciar com PM2
pm2 start npm --name "safegreen" -- start
pm2 save
pm2 startup
```

#### C. Configurar Nginx:

```bash
sudo nano /etc/nginx/sites-available/safegreen
```

Adicione:
```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ativar site:
```bash
sudo ln -s /etc/nginx/sites-available/safegreen /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### D. SSL com Certbot:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

---

## 4️⃣ Deploy na Railway

### Passos:

1. **Acesse:** https://railway.app
2. **New Project** → Deploy from GitHub
3. Selecione seu repositório
4. Railway detecta Next.js automaticamente
5. Adicione variável: `NEXT_PUBLIC_SITE_URL`
6. Deploy acontece automaticamente

---

## 🌐 Configuração de Domínio

### Comprar domínio:
- Registro.br (Brasil)
- Namecheap
- GoDaddy
- Google Domains

### Apontar DNS:

#### Para Vercel:
```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

#### Para Netlify:
```
Tipo: A
Nome: @
Valor: [IP fornecido pela Netlify]

Tipo: CNAME
Nome: www
Valor: [subdomain].netlify.app
```

---

## 📊 Analytics e Tracking

### Google Analytics 4:

1. Crie propriedade em https://analytics.google.com
2. Adicione ao `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Adicione ao `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
     `}
   </Script>
   ```

### Google Tag Manager:

Semelhante ao GA4, mas use:
```tsx
<Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
  `}
</Script>
```

---

## 🔒 Segurança

### Headers de Segurança:

Adicione ao `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## ⚡ Performance

### Otimizações pré-deploy:

1. **Comprimir imagens:**
   ```bash
   npm install -g @squoosh/cli
   squoosh-cli --webp auto public/images/*.jpg
   ```

2. **Analisar bundle:**
   ```bash
   npm install -D @next/bundle-analyzer
   ```

3. **Lighthouse CI:**
   - Teste performance: https://pagespeed.web.dev/

---

## 🐛 Troubleshooting

### Build falha na plataforma:

**Problema:** Erro de build no deploy

**Solução:**
1. Teste localmente: `npm run build`
2. Verifique Node version: `engines` no `package.json`
3. Limpe cache da plataforma

### Imagens não carregam:

**Problema:** Imagens retornam 404

**Solução:**
1. Verifique estrutura: `public/images/[nome-exato].jpg`
2. Case-sensitive: `hero.jpg` ≠ `Hero.jpg`
3. Re-deploy após adicionar imagens

### Timer não persiste:

**Problema:** Contador reseta ao recarregar

**Solução:**
- localStorage deve estar habilitado
- Teste em modo anônimo/privado do navegador

---

## 📱 Testes Pré-Produção

- [ ] Teste em Chrome, Safari, Firefox
- [ ] Teste mobile (iOS e Android)
- [ ] Verifique todos os links
- [ ] Teste formulário de e-mail
- [ ] Contador regressivo funciona
- [ ] Carrosséis funcionam (setas, dots, keyboard)
- [ ] Performance > 90 no Lighthouse
- [ ] SEO > 95 no Lighthouse
- [ ] Accessibility > 90

---

## 🎉 Pós-Deploy

1. **Monitore:**
   - Google Analytics
   - Erros no console do navegador
   - Performance metrics

2. **Backup:**
   - Configure backups automáticos
   - Mantenha código no Git

3. **Atualizações:**
   - Atualize dependências regularmente
   - `npm outdated`
   - `npm update`

---

**Desenvolvido para Lucas Tyldy © 2025**

🟢 **SafeGreen - Deploy com Sucesso!**
