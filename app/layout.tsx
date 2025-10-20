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
        {/* Track4You Pixel */}
        <script
          src="https://track4you.app/a0261592-0146-4e62-890e-03c933ef021b.js"
          defer
        ></script>
      </head>

      <body>{children}</body>
    </html>
  );
}
