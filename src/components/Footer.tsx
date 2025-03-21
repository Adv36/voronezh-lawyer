"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-gray-600">
            <p>
              {currentYear} © воронежадвокат.рф - сайт адвоката по уголовным делам Рипинского Анатолия Анатольевича.
            </p>
            <p>
              Любое копирование материалов с обязательным указанием источника и ссылки вида воронежадвокат.рф
            </p>
          </div>

          <nav className="flex space-x-4 md:space-x-6 text-sm">
            <Link href="/services" className="text-[#774936] hover:text-[#c68b59] transition-colors">
              УСЛУГИ
            </Link>
            <Link href="/price" className="text-[#774936] hover:text-[#c68b59] transition-colors">
              ЦЕНЫ
            </Link>
            <Link href="/practice" className="text-[#774936] hover:text-[#c68b59] transition-colors">
              ПРАКТИКА
            </Link>
            <Link href="/helpful" className="text-[#774936] hover:text-[#c68b59] transition-colors">
              ПОЛЕЗНОЕ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
