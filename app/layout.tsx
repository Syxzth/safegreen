import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'SafeGreen - Grupo de Freebet | Acesso Liberado',
  description:
    'Receba entradas diárias pra buscar um retorno alto, sem risco algum. Últimas vagas disponíveis para o grupo SafeGreen.',
  keywords:
    'freebet, apostas esportivas, grupo de apostas, SafeGreen, entradas diárias',
  openGraph: {
    title: 'SafeGreen - Grupo de Freebet | Acesso Liberado',
    description:
      'Receba entradas diárias pra buscar um retorno alto, sem risco algum.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00FF00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1821406055141586');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1821406055141586&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </head>

      <body>{children}</body>
    </html>
  );
}
