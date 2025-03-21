import Header from '@/components/Header';
import UsefulLinks from '@/components/UsefulLinks';
import Footer from '@/components/Footer';

export default function HelpfulPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-bold text-[#774936] mb-8">ПОЛЕЗНОЕ</h1>
          <p className="text-gray-700 mb-8">
            На этой странице вы найдете полезные ссылки на официальные сайты государственных органов
            и другую информацию, которая может быть полезна при решении правовых вопросов.
          </p>
        </div>
      </div>
      <UsefulLinks />
      <Footer />
    </main>
  );
}
