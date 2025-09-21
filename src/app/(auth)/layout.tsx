import '../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="animated-gradient-bg flex min-h-full items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}
