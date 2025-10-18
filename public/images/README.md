# Instruções para Imagens - SafeGreen Landing Page

Este diretório contém os placeholders para as imagens da landing page. Substitua cada arquivo por suas imagens reais conforme as especificações abaixo.

## Lista de Imagens Necessárias

### 1. Hero (Imagem Principal)
- **Arquivo:** `hero.jpg`
- **Dimensões recomendadas:** 1600×900px (ou maior)
- **Formato:** JPG, WebP
- **Descrição:** Imagem de alta qualidade mostrando uma pessoa confiante/feliz com elementos visuais relacionados a apostas, dinheiro, sucesso. Pode incluir sobreposição de prints de tela de resultados.
- **Exemplo:** Pessoa sorrindo + elementos gráficos de dinheiro, gráficos em alta, ícones de futebol/esportes.

### 2. Depoimentos (Screenshots de Mensagens)
Você precisa de 5 imagens de depoimentos:

- **Arquivos:** `testi-1.jpg`, `testi-2.jpg`, `testi-3.jpg`, `testi-4.jpg`, `testi-5.jpg`
- **Dimensões recomendadas:** 600×800px (formato retrato)
- **Formato:** JPG, PNG, WebP
- **Descrição:** Screenshots de mensagens de WhatsApp, Telegram ou Instagram mostrando depoimentos de clientes satisfeitos. Deve incluir mensagens autênticas de agradecimento, feedback positivo, resultados alcançados.
- **Dicas:**
  - Blur/censure informações pessoais (nomes completos, números de telefone)
  - Mantenha legível o conteúdo da mensagem
  - Prefira capturas com emojis positivos e linguagem entusiasta

### 3. Resultados (Screenshots de Apostas Ganhas)
Você precisa de 5 imagens de resultados:

- **Arquivos:** `result-1.jpg`, `result-2.jpg`, `result-3.jpg`, `result-4.jpg`, `result-5.jpg`
- **Dimensões recomendadas:** 800×1000px
- **Formato:** JPG, PNG, WebP
- **Descrição:** Screenshots de contas de apostas mostrando apostas vencedoras, saldos, comprovantes de ganhos. A interface do componente adiciona automaticamente um círculo verde com o valor destacado (ex: +30k).
- **Dicas:**
  - Use screenshots reais de plataformas de apostas
  - Destaque valores altos de ganhos (R$ 15.000+)
  - Inclua informações como data, tipo de aposta, odds

## Otimização de Imagens

Para melhor performance, recomendamos:

1. **Converter para WebP:**
   ```bash
   # Usando cwebp (instale via: brew install webp ou apt-get install webp)
   cwebp -q 85 hero.jpg -o hero.webp
   ```

2. **Criar versões responsivas:**
   - Desktop: tamanho original
   - Tablet: 50-70% do tamanho original
   - Mobile: 30-40% do tamanho original

3. **Compressão:**
   - Use ferramentas como TinyPNG, Squoosh, ou ImageOptim
   - Mantenha qualidade acima de 80%

## Estrutura Final

```
public/
└── images/
    ├── hero.jpg (e hero.webp)
    ├── testi-1.jpg (e testi-1.webp)
    ├── testi-2.jpg (e testi-2.webp)
    ├── testi-3.jpg (e testi-3.webp)
    ├── testi-4.jpg (e testi-4.webp)
    ├── testi-5.jpg (e testi-5.webp)
    ├── result-1.jpg (e result-1.webp)
    ├── result-2.jpg (e result-2.webp)
    ├── result-3.jpg (e result-3.webp)
    ├── result-4.jpg (e result-4.webp)
    ├── result-5.jpg (e result-5.webp)
    └── README.md (este arquivo)
```

## Fontes de Imagens Gratuitas

Caso precise de imagens de stock temporárias:

- **Pexels:** https://www.pexels.com/pt-br/
- **Unsplash:** https://unsplash.com/
- **Pixabay:** https://pixabay.com/

**Termos de busca úteis:**
- "business success"
- "sports betting"
- "phone screen"
- "money success"
- "happy person phone"

## Importante

⚠️ **Atenção Legal:**
- Use apenas imagens com direitos de uso apropriados
- Se usar screenshots reais de clientes, obtenha permissão
- Blur/censure informações pessoais sensíveis
- Respeite as diretrizes das plataformas de apostas

## Próximos Passos

Após adicionar todas as imagens:

1. Teste a página localmente: `npm run dev`
2. Verifique se todas as imagens carregam corretamente
3. Teste em diferentes dispositivos (mobile, tablet, desktop)
4. Verifique o tempo de carregamento e otimize se necessário
