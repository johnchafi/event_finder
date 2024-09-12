
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col ">
      <main
       className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        {children}
      </main>
    </div>
  );
}