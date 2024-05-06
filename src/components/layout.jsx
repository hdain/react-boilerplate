import Footer from './footer.jsx';
import Header from './header.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center pt-50">
        {children}
      </main>

      <Footer />
    </>
  );
}
