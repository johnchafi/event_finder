import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <Header />
      <main
       className="flex-1 bg-black">
        {children}
      </main>
      <Footer />
    </div>
  );
}
