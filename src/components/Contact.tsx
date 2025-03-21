"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, we would send the data to a server
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="consult" className="py-16 bg-[#774936] text-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-10">
          <div className="w-8 h-0.5 bg-white mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase">КОНТАКТЫ</h2>
        </div>

        <div className="text-xl font-bold text-[#e9b872] mb-4">
          Звоните, пишите! Я сразу отвечу и помогу решить Вашу проблему
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact info */}
          <div>
            <h3 className="font-medium mb-2">Рипинский Анатолий Анатольевич</h3>

            <div className="mb-4">
              <p className="font-semibold mb-1">Телефон:</p>
              <div className="flex items-center">
                <a href="tel:+79081328866" className="text-[#e9b872] hover:text-[#e9b872]/80 text-xl font-bold">
                  +7 (908) 132-88-66
                </a>
                <div className="flex ml-2 space-x-2">
                  <Link href="tel:+79081328866">
                    <Image
                      src="https://ext.same-assets.com/615341754/136602673.svg"
                      alt="Phone"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                  <Link href="https://wa.me/79081328866">
                    <Image
                      src="https://ext.same-assets.com/615341754/10197464.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                  <Link href="https://t.me/+79081328866">
                    <Image
                      src="https://ext.same-assets.com/615341754/1653797195.svg"
                      alt="Telegram"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-1">E-mail:</p>
              <a href="mailto:ripinsky@list.ru" className="text-[#e9b872] hover:text-[#e9b872]/80">
                ripinsky@list.ru
              </a>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-1">Адрес офиса:</p>
              <p className="mb-1">г. Воронеж, ул. Ф. Энгельса, 48</p>
            </div>

            <div className="flex flex-col w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9050d542e71c9c6d7e2fd9d54df4acd5c6e1f1c4a8c85a56e43db20b37e6aae4&amp;source=constructor"
                width="100%"
                height="300"
                frameBorder="0"
                className="rounded-lg"
                title="Адрес офиса на карте"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Отправьте сообщение</h3>

              {submitted ? (
                <div className="bg-[#e9b872]/20 p-4 rounded-lg text-white">
                  <p className="font-medium">Спасибо за обращение!</p>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 text-sm">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#e9b872]"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 text-sm">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#e9b872]"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#e9b872]"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 text-sm">Сообщение</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#e9b872]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e9b872] hover:bg-[#e9b872]/90 text-[#774936] font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
