const photos = [
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.07_(2)_1773327612280.jpeg",
    caption: "Instalação Starlink em telhado — Moçambique",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.06_(1)_1773327612280.jpeg",
    caption: "Stock de kits Starlink disponíveis",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.06_1773327612280.jpeg",
    caption: "Kit Starlink completo com acessórios",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.07_(1)_1773327612280.jpeg",
    caption: "Starlink 3ª Geração — 268 Mbps de velocidade",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.07_1773327612280.jpeg",
    caption: "Kit Starlink Mini V4 dentro da caixa",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.08_(1)_1773327612280.jpeg",
    caption: "Starlink Mini com suporte articulado",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.08_1773327612280.jpeg",
    caption: "Antena Starlink Mini com cabos",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.09_(1)_1773327612280.jpeg",
    caption: "Linha completa de produtos Starlink disponíveis",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.09_(2)_1773327612280.jpeg",
    caption: "Starlink Gen 3, Gen 2 e Mini — Preços actualizados",
    cat: "Starlink",
  },
  {
    src: "/WhatsApp_Image_2026-03-11_at_01.05.09_1773327612280.jpeg",
    caption: "Starlink V4 e Starlink Mini — Modelos disponíveis",
    cat: "Starlink",
  },
  {
    src: "/yUeoS_1773327612280.jpg",
    caption: "Portões Automáticos — Instalação profissional",
    cat: "Automação",
  },
  {
    src: "/YznTD_1773327612280.jpg",
    caption: "Instalação de câmeras de segurança — 2.500 MT por câmera",
    cat: "Câmeras",
  },
  {
    src: "/za5T3_1773327612280.jpg",
    caption: "Alarme de incêndio — Instalação técnica",
    cat: "Alarmes",
  },
];

const cats = ["Todos", "Starlink", "Câmeras", "Automação", "Alarmes"];

import { useState } from "react";

export default function Galeria() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen">
      <title>Galeria de Instalações — Starlink e Segurança em Moçambique | Technologio24/v</title>
      <meta name="description" content="Veja as nossas instalações de Starlink, câmeras de segurança e portões automáticos em Moçambique." />

      <div className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Galeria</h1>
          <p className="text-gray-400 text-lg">Os nossos trabalhos de instalação em Moçambique</p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === c
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md card-hover bg-gray-100 aspect-square">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4">
                    <span className="text-xs text-blue-300 font-semibold uppercase tracking-wide">{p.cat}</span>
                    <p className="text-white text-sm mt-0.5">{p.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
