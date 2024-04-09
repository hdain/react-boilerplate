import Footer from './footer.jsx';
import Header from './header.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="flex h-[calc(100vh-74px)] flex-col items-center justify-center pt-50">
        {children}
      </main>

      <Footer />
    </>
  );
}
