import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function PracticePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-[#774936] py-16 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ПРАКТИКА АДВОКАТА ПО УГОЛОВНЫМ ДЕЛАМ</h1>
          <p className="text-lg">Профессиональная защита по различным категориям уголовных дел</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-6">СПЕЦИАЛИЗАЦИЯ И ОПЫТ</h2>
              <p className="text-lg text-gray-700 mb-6">
                Как адвокат с многолетним опытом, я специализируюсь на различных категориях уголовных дел.
                За более чем 28 лет адвокатской практики я успешно защищал интересы клиентов по сложным делам
                различных категорий.
              </p>
              <p className="text-lg text-gray-700">
                Моя работа строится на глубоком анализе материалов дела, тщательной подготовке правовой позиции
                и применении всех законных механизмов защиты для достижения наилучшего результата.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Результаты работы:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Прекращение уголовных дел на стадии доследственной проверки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Изменение квалификации на менее тяжкую статью</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Снижение сроков наказания и получение условного срока</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Оправдательные приговоры и прекращение дел за отсутствием состава преступления</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span className="text-gray-700">Успешное обжалование незаконных действий должностных лиц</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-10">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">НАПРАВЛЕНИЯ ПРАКТИКИ</h2>
          </div>

          <div className="space-y-8">
            {/* Area 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Преступления против личности</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Убийство (ст. 105 УК РФ)</li>
                  <li>Причинение тяжкого вреда здоровью (ст. 111 УК РФ)</li>
                  <li>Причинение средней тяжести вреда здоровью (ст. 112 УК РФ)</li>
                  <li>Причинение легкого вреда здоровью (ст. 115 УК РФ)</li>
                  <li>Побои (ст. 116 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Истязание (ст. 117 УК РФ)</li>
                  <li>Угроза убийством (ст. 119 УК РФ)</li>
                  <li>Похищение человека (ст. 126 УК РФ)</li>
                  <li>Незаконное лишение свободы (ст. 127 УК РФ)</li>
                  <li>Клевета (ст. 128.1 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Изнасилование (ст. 131 УК РФ)</li>
                  <li>Насильственные действия сексуального характера (ст. 132 УК РФ)</li>
                  <li>Нарушение неприкосновенности жилища (ст. 139 УК РФ)</li>
                  <li>Нарушение неприкосновенности частной жизни (ст. 137 УК РФ)</li>
                </ul>
              </div>
            </div>

            {/* Area 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Преступления в сфере экономики</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Кража (ст. 158 УК РФ)</li>
                  <li>Мошенничество (ст. 159 УК РФ)</li>
                  <li>Мошенничество в сфере компьютерной информации (ст. 159.6 УК РФ)</li>
                  <li>Присвоение или растрата (ст. 160 УК РФ)</li>
                  <li>Грабеж (ст. 161 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Разбой (ст. 162 УК РФ)</li>
                  <li>Вымогательство (ст. 163 УК РФ)</li>
                  <li>Незаконное предпринимательство (ст. 171 УК РФ)</li>
                  <li>Легализация (отмывание) денежных средств (ст. 174 УК РФ)</li>
                  <li>Незаконное получение кредита (ст. 176 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Уклонение от уплаты налогов (ст. 198-199 УК РФ)</li>
                  <li>Злоупотребление полномочиями (ст. 201 УК РФ)</li>
                  <li>Коммерческий подкуп (ст. 204 УК РФ)</li>
                  <li>Фальсификация документов (ст. 327 УК РФ)</li>
                </ul>
              </div>
            </div>

            {/* Area 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Преступления в сфере общественной безопасности</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Террористический акт (ст. 205 УК РФ)</li>
                  <li>Заведомо ложное сообщение об акте терроризма (ст. 207 УК РФ)</li>
                  <li>Хулиганство (ст. 213 УК РФ)</li>
                  <li>Вандализм (ст. 214 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Незаконный оборот оружия (ст. 222 УК РФ)</li>
                  <li>Незаконный оборот наркотиков (ст. 228-228.4 УК РФ)</li>
                  <li>Сбыт наркотических средств (ст. 228.1 УК РФ)</li>
                  <li>Организация преступного сообщества (ст. 210 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Нарушение правил безопасности (ст. 215-219 УК РФ)</li>
                  <li>Нарушение правил дорожного движения (ст. 264 УК РФ)</li>
                  <li>Организация незаконной миграции (ст. 322.1 УК РФ)</li>
                </ul>
              </div>
            </div>

            {/* Area 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Преступления против государственной власти</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Злоупотребление должностными полномочиями (ст. 285 УК РФ)</li>
                  <li>Превышение должностных полномочий (ст. 286 УК РФ)</li>
                  <li>Получение взятки (ст. 290 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Дача взятки (ст. 291 УК РФ)</li>
                  <li>Посредничество во взяточничестве (ст. 291.1 УК РФ)</li>
                  <li>Служебный подлог (ст. 292 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Халатность (ст. 293 УК РФ)</li>
                  <li>Воспрепятствование осуществлению правосудия (ст. 294 УК РФ)</li>
                  <li>Заведомо ложный донос (ст. 306 УК РФ)</li>
                </ul>
              </div>
            </div>

            {/* Area 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Преступления в сфере компьютерной информации</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Неправомерный доступ к компьютерной информации (ст. 272 УК РФ)</li>
                  <li>Создание, использование и распространение вредоносных программ (ст. 273 УК РФ)</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Нарушение правил эксплуатации средств хранения, обработки или передачи информации (ст. 274 УК РФ)</li>
                  <li>Неправомерное воздействие на критическую информационную инфраструктуру (ст. 274.1 УК РФ)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-10">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">ПОДХОД К ЗАЩИТЕ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#774936] text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-[#774936] mb-3">Анализ дела</h3>
              <p className="text-gray-700">
                Тщательное изучение материалов дела, поиск процессуальных нарушений, анализ доказательств,
                выявление слабых мест в позиции обвинения и определение стратегии защиты.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#774936] text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-[#774936] mb-3">Сбор доказательств</h3>
              <p className="text-gray-700">
                Активный сбор дополнительных доказательств, направление адвокатских запросов, поиск свидетелей,
                привлечение экспертов, подготовка экспертиз и получение заключений специалистов.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#774936] text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-[#774936] mb-3">Правовая позиция</h3>
              <p className="text-gray-700">
                Формирование эффективной правовой позиции, разработка линии защиты, подготовка обоснованных ходатайств,
                представление доказательств и аргументов в защиту интересов клиента.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-[#774936] text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">НУЖНА ПРОФЕССИОНАЛЬНАЯ ЗАЩИТА?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Если вы или ваши близкие столкнулись с уголовным преследованием, необходимо незамедлительно
            обратиться к опытному адвокату. Помните, что своевременное вмешательство адвоката может
            кардинально изменить ход дела в вашу пользу.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="tel:+79081328866" className="inline-block bg-[#c68b59] hover:bg-[#c68b59]/90 text-white py-3 px-8 rounded-full font-medium">
              Позвонить сейчас
            </Link>
            <Link href="/price" className="inline-block bg-white text-[#774936] hover:bg-gray-100 py-3 px-8 rounded-full font-medium">
              Узнать стоимость услуг
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
