import '../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="animated-gradient-bg h-full">
        <div className="flex min-h-screen items-center justify-center p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
