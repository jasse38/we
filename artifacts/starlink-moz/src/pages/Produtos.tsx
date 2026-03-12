import { Wifi, ArrowRight } from "lucide-react";

const WA = "https://wa.me/258848699933";

const products = [
  {
    name: "Starlink Mini V4",
    price: "18.000 MT",
    desc: "Compacto, portátil e fácil de instalar. Ideal para uso residencial e viagens. Velocidade de download até 100 Mbps.",
    img: "/WhatsApp_Image_2026-03-11_at_01.05.08_1773327612280.jpeg",
    features: ["Compacto e portátil", "Instalação simples", "Até 100 Mbps", "Baixa latência"],
    waMsg: "Olá! Quero comprar o Starlink Mini V4 por 18.000 MT",
  },
  {
    name: "Starlink V4 Grande",
    price: "25.500 MT",
    desc: "Alta performance para residências e empresas. Internet ultra-rápida e estável com velocidades até 268 Mbps.",
    img: "/WhatsApp_Image_2026-03-11_at_01.05.07_(1)_1773327612280.jpeg",
    features: ["Alta velocidade", "Até 268 Mbps", "Para casas e empresas", "Resistente ao vento"],
    waMsg: "Olá! Quero comprar o Starlink V4 Grande por 25.500 MT",
  },
  {
    name: "Starlink V4 (3ª Geração)",
    price: "32.000 MT",
    desc: "A geração mais avançada de Starlink. Ultra-rápido, estável e disponível em zonas mais remotas de Moçambique.",
    img: "/WhatsApp_Image_2026-03-11_at_01.05.07_(2)_1773327612280.jpeg",
    features: ["3ª Geração", "Máxima estabilidade", "Zonas remotas", "Internet ilimitada"],
    waMsg: "Olá! Quero comprar o Starlink V4 3ª Geração por 32.000 MT",
  },
  {
    name: "Suporte Articulado Starlink Mini",
    price: "4.500 MT",
    desc: "Suporte articulado para o Starlink Mini. Garante instalação prática e ajuste preciso para melhor receção do sinal.",
    img: "/WhatsApp_Image_2026-03-11_at_01.05.09_1773327612280.jpeg",
    features: ["Ajuste preciso", "Instalação fácil", "Melhor sinal", "Material resistente"],
    waMsg: "Olá! Quero comprar o Suporte Articulado Starlink Mini por 4.500 MT",
  },
];

export default function Produtos() {
  return (
    <div className="min-h-screen">
      <title>Produtos Starlink em Moçambique — Technologio24/v</title>
      <meta name="description" content="Compre Starlink Mini V4 e Starlink V4 Grande em Moçambique. Melhor preço com instalação profissional." />

      <div className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm mb-4">
            <Wifi className="w-4 h-4" /> Internet via Satélite
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-3">Produtos Starlink</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A internet via satélite mais rápida e estável do mundo — disponível agora em Moçambique
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.name} className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="h-60 overflow-hidden bg-gray-50">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-extrabold text-blue-600">{p.price}</div>
                    <a
                      href={`${WA}?text=${encodeURIComponent(p.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-white text-center">
            <Wifi className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-extrabold mb-2">Recarga Mensal Starlink</h2>
            <p className="text-blue-100 mb-4">Renove a sua internet com facilidade e rapidez</p>
            <div className="text-4xl font-extrabold mb-6">1.990 MT<span className="text-xl font-normal text-blue-200">/mês</span></div>
            <a
              href={`${WA}?text=${encodeURIComponent("Olá! Quero renovar a minha internet Starlink — 1.990 MT/mês")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Renovar Internet <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
