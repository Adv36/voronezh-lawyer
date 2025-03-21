import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function PricePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-[#774936] py-16 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">СТОИМОСТЬ УСЛУГ АДВОКАТА</h1>
          <p className="text-lg">Информация о расценках на юридические услуги в уголовных делах</p>
        </div>
      </div>

      {/* Price Principles */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-8">ОСНОВНЫЕ ПРИНЦИПЫ ЦЕНООБРАЗОВАНИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Размер стоимость услуг адвоката по уголовным делам в каждом конкретном случае различен и зависит от множества факторов:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">•</span>
                  <span>В какой стадии находится расследование или рассмотрение дела</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">•</span>
                  <span>Позиция подзащитного</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">•</span>
                  <span>Место производства следствия или рассмотрения дела в суде (г. Воронеж, или другой субъект РФ)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">•</span>
                  <span>Количество обвиняемых (подсудимых) по делу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">•</span>
                  <span>Количество следственных действий или судебных заседаний и др.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Важная информация:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Первая консультация по телефону - <span className="font-semibold">бесплатно</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Узнать точную стоимость юридических услуг можно после встречи с адвокатом или консультации по телефону</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Договор оформляется в письменном виде с обязательной выдачей чека (квитанции)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Оплата возможна в рассрочку или помесячно, в наличной или безналичной форме</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">В среднем общим ориентиром может служить <span className="font-semibold">15 000 руб. за день занятости адвоката</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">РАСЦЕНКИ НА УСЛУГИ</h2>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="p-6 bg-[#774936] text-white">
              <h3 className="text-xl font-bold">Консультации</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">Услуга</th>
                    <th className="p-4 border-b">Стоимость (₽)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Первая консультация по телефону</td>
                    <td className="p-4 border-b font-medium">Бесплатно</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Консультация при личной встрече</td>
                    <td className="p-4 border-b">3 000 руб.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="p-6 bg-[#774936] text-white">
              <h3 className="text-xl font-bold">Для подозреваемого (обвиняемого)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">Услуга</th>
                    <th className="p-4 border-b">Стоимость (₽)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">«Предварительное соглашение» (ознакомление с материалами дела, беседа с подзащитным (в том числе и посещение его в СИЗО), консультация доверителя с разъяснением перспектив расследования, необходимых действий для защиты и т.д.)</td>
                    <td className="p-4 border-b">от 20 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Участие уголовного адвоката на предварительном следствии</td>
                    <td className="p-4 border-b">от 70 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Участие адвоката в ходе дознания</td>
                    <td className="p-4 border-b">от 50 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Участие адвоката в суде первой инстанции</td>
                    <td className="p-4 border-b">от 70 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Участие адвоката в суде апелляционной, кассационной инстанции</td>
                    <td className="p-4 border-b">от 25 000 руб.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="p-6 bg-[#774936] text-white">
              <h3 className="text-xl font-bold">Для потерпевшего</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">Услуга</th>
                    <th className="p-4 border-b">Стоимость (₽)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Представление интересов потерпевшего в ходе предварительного следствия</td>
                    <td className="p-4 border-b">от 50 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Представление интересов потерпевшего в суде первой инстанции</td>
                    <td className="p-4 border-b">от 25 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Представление интересов в ходе «доследственной проверки», обжалование постановление об отказе в возбуждении уголовного дела</td>
                    <td className="p-4 border-b">от 30 000 руб.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="p-6 bg-[#774936] text-white">
              <h3 className="text-xl font-bold">Для свидетеля</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">Услуга</th>
                    <th className="p-4 border-b">Стоимость (₽)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Участие в производстве допроса или иного следственного действия</td>
                    <td className="p-4 border-b">от 15 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Подготовка ходатайства (жалобы)</td>
                    <td className="p-4 border-b">от 7 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Оказание юридической помощи при «доследственной проверке»</td>
                    <td className="p-4 border-b">от 25 000 руб.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 bg-[#774936] text-white">
              <h3 className="text-xl font-bold">Другие виды услуг</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">Услуга</th>
                    <th className="p-4 border-b">Стоимость (₽)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Срочный выезд адвоката днем</td>
                    <td className="p-4 border-b">от 15 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Срочный выезд адвоката ночью</td>
                    <td className="p-4 border-b">от 25 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Подготовка и подача адвокатского запроса</td>
                    <td className="p-4 border-b">от 7 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Получить копию приговора суда</td>
                    <td className="p-4 border-b">от 10 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Участие в переговорах с противоположной стороной (потерпевшим, представителем потерпевшего, обвиняемым, его защитником)</td>
                    <td className="p-4 border-b">от 10 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Подготовка заявления о возбуждении уголовного дела</td>
                    <td className="p-4 border-b">от 7 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Подготовка искового заявления в уголовном деле</td>
                    <td className="p-4 border-b">от 14 000 руб.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b">Посещение следственного изолятора</td>
                    <td className="p-4 border-b">от 14 000 руб.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Почасовая оплата</td>
                    <td className="p-4 border-b">8 000 руб.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 text-center font-medium">
              Также возможен вариант помесячной оплаты или почасовой (8 000 руб.)
            </p>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-6">ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ</h2>
            <p className="text-lg text-gray-700 mb-6">
              Указанные расценки являются ориентировочными. Для получения точной информации о стоимости услуг
              по вашему делу необходима личная консультация.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              В своей работе я придерживаюсь принципа, что любая правовая проблема имеет разумное решение.
              Моя цель — предоставить вам качественную юридическую помощь по справедливой цене.
            </p>
            <Link href="#consult" className="inline-block bg-[#c68b59] hover:bg-[#c68b59]/90 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-[#e8e3e0]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-center text-[#774936] mb-6">ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#774936] mb-4">Контактная информация:</h3>
                <p className="flex items-center mb-4">
                  <span className="w-6 h-6 mr-3 flex items-center justify-center bg-[#774936]/10 rounded-full">
                    <Image
                      src="https://ext.same-assets.com/615341754/136602673.svg"
                      alt="Phone"
                      width={18}
                      height={18}
                      priority
                    />
                  </span>
                  <a href="tel:+79081328866" className="text-gray-700 hover:text-[#c68b59]">+7 (908) 132-88-66</a>
                </p>
                <p className="flex items-center mb-4">
                  <span className="w-6 h-6 mr-3 flex items-center justify-center bg-[#774936]/10 rounded-full">
                    <Image
                      src="https://ext.same-assets.com/615341754/3844288638.svg"
                      alt="Email"
                      width={18}
                      height={18}
                      priority
                    />
                  </span>
                  <a href="mailto:ripinsky@list.ru" className="text-gray-700 hover:text-[#c68b59]">ripinsky@list.ru</a>
                </p>
                <p className="flex items-center mb-4">
                  <span className="w-6 h-6 mr-3 flex items-center justify-center bg-[#774936]/10 rounded-full">
                    <Image
                      src="https://ext.same-assets.com/615341754/10197464.svg"
                      alt="WhatsApp"
                      width={18}
                      height={18}
                      priority
                    />
                  </span>
                  <a href="https://wa.me/79081328866" className="text-gray-700 hover:text-[#c68b59]">WhatsApp</a>
                </p>
                <p className="flex items-center">
                  <span className="w-6 h-6 mr-3 flex items-center justify-center bg-[#774936]/10 rounded-full">
                    <Image
                      src="https://ext.same-assets.com/615341754/1653797195.svg"
                      alt="Telegram"
                      width={18}
                      height={18}
                      priority
                    />
                  </span>
                  <a href="https://t.me/+79081328866" className="text-gray-700 hover:text-[#c68b59]">Telegram</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#774936] mb-4">Адрес офиса:</h3>
                <p className="text-gray-700 mb-4">
                  г. Воронеж, ул. Ф. Энгельса, 48
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">Режим работы:</span> Пн-Пт с 9:00 до 18:00
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Срочные консультации:</span> 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
