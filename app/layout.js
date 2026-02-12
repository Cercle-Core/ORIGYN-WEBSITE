import './globals.css';

export const metadata = {
  title: 'ORIGYN | Simulation-Driven Intelligence',
  description:
    'Build, test, deploy, and monitor predictive models, digital twins, and real-time control systems.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
