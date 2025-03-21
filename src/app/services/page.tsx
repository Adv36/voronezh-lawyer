import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-[#774936] py-16 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">УСЛУГИ АДВОКАТА ПО УГОЛОВНЫМ ДЕЛАМ</h1>
          <p className="text-lg">Профессиональная юридическая защита интересов граждан и бизнеса на всех стадиях уголовного процесса</p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-8">НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Как адвокат Адвокатской палаты Воронежской области с многолетним опытом работы,
                я предоставляю квалифицированную юридическую помощь на всех стадиях уголовного судопроизводства.
              </p>
              <p className="text-lg text-gray-700">
                Моя задача - обеспечить максимальную защиту Ваших прав и законных интересов в правовом поле.
                Я гарантирую индивидуальный подход к каждому делу и конфиденциальность предоставляемой информации.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Мои преимущества:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span>Большой опыт ведения уголовных дел различной категории сложности (более 28 лет)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span>Постоянное изучение судебной практики и поправок в законодательстве</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span>Доступность 24/7 для консультаций по срочным вопросам</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span>Мобильность и возможность выезда по первому требованию</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c68b59] mr-2">✓</span>
                  <span>Работаю в Воронеже, Воронежской области и других субъектах РФ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Individuals */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">УСЛУГИ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита на стадии доследственной проверки</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Консультирование по вопросам поведения при проверке</li>
                <li>Участие в опросах, составление обращений</li>
                <li>Помощь в сборе и представлении необходимых документов</li>
                <li>Обжалование незаконных действий должностных лиц</li>
                <li>Работа на недопущение возбуждения уголовного дела</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита на стадии предварительного следствия</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Участие во всех следственных действиях</li>
                <li>Помощь при задержании, защита при первом допросе</li>
                <li>Юридическое сопровождение при обысках и выемках</li>
                <li>Работа с доказательственной базой, заявление ходатайств</li>
                <li>Оспаривание избрания/продления меры пресечения</li>
                <li>Помощь в изменении меры пресечения на более мягкую</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита в суде</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Изучение материалов уголовного дела, выработка линии защиты</li>
                <li>Составление ходатайств, жалоб, заявлений</li>
                <li>Полное представительство интересов на судебных заседаниях</li>
                <li>Участие в допросах, исследовании доказательств</li>
                <li>Подготовка подзащитного к вопросам в суде</li>
                <li>Оспаривание недопустимых доказательств</li>
                <li>Выступление в прениях с защитительной речью</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Обжалование приговора и иных судебных решений</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Подготовка и подача апелляционных, кассационных, надзорных жалоб</li>
                <li>Представление интересов во всех инстанциях</li>
                <li>Работа по смягчению приговора, снижению срока наказания</li>
                <li>Обжалование решений о продлении содержания под стражей</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита потерпевших по уголовным делам</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Составление заявления о преступлении</li>
                <li>Контроль за ходом проверки сообщения о преступлении</li>
                <li>Представление интересов потерпевшего на следствии и в суде</li>
                <li>Помощь в обеспечении возмещения вреда</li>
                <li>Подготовка гражданского иска в рамках уголовного дела</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Business */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">УСЛУГИ ДЛЯ БИЗНЕСА</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита при экономических преступлениях</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Защита при обвинении в налоговых преступлениях</li>
                <li>Защита при обвинении в мошенничестве</li>
                <li>Защита при обвинении в незаконном предпринимательстве</li>
                <li>Защита при обвинении в легализации (отмывании) денежных средств</li>
                <li>Защита при обвинении в нарушении авторских прав</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Защита должностных лиц</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Защита при обвинении в должностных преступлениях</li>
                <li>Защита при обвинении в превышении полномочий</li>
                <li>Защита при обвинении в злоупотреблении полномочиями</li>
                <li>Защита при обвинении в коммерческом подкупе</li>
                <li>Защита при обвинении в получении/даче взятки</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#774936] mb-4">Сопровождение при проверках</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Правовое сопровождение при проверках контролирующих органов</li>
                <li>Участие в оперативных мероприятиях (обыск, выемка документов)</li>
                <li>Консультирование сотрудников организации</li>
                <li>Обжалование незаконных действий сотрудников правоохранительных органов</li>
                <li>Подготовка правовой позиции при угрозе уголовного преследования</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-[#774936] text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">НУЖНА ЮРИДИЧЕСКАЯ ПОМОЩЬ?</h2>
          <p className="text-lg mb-8">Вы можете получить бесплатную предварительную консультацию, после которой я смогу предложить эффективную стратегию защиты</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="tel:+79081328866" className="inline-block bg-[#c68b59] hover:bg-[#c68b59]/90 text-white py-3 px-8 rounded-full font-medium">
              Позвонить сейчас
            </Link>
            <Link href="https://wa.me/79081328866" className="inline-block bg-white text-[#774936] hover:bg-gray-100 py-3 px-8 rounded-full font-medium">
              Написать в WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
