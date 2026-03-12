import { Wifi, Camera, Bell, Flame, Zap, DoorOpen, BarChart2, Lock, Home, ArrowRight } from "lucide-react";

const WA = "https://wa.me/258848699933";

const services = [
  {
    icon: Wifi,
    name: "Instalação de Starlink",
    desc: "Instalação profissional do kit Starlink com suporte incluído. Cobrimos toda a área de Moçambique.",
    price: "6.500 MT",
    priceNote: "inclui acessórios e consumíveis",
    color: "bg-blue-500",
    waMsg: "Olá! Quero solicitar instalação de Starlink — 6.500 MT",
  },
  {
    icon: Camera,
    name: "Instalação de Câmeras de Segurança",
    desc: "Câmeras HD e IP com gravação contínua 24/7. Acesso remoto pelo telemóvel.",
    price: "2.500 MT",
    priceNote: "por câmera instalada",
    color: "bg-indigo-500",
    waMsg: "Olá! Quero solicitar instalação de câmeras de segurança — 2.500 MT por câmera",
  },
  {
    icon: Bell,
    name: "Alarmes de Intrusão",
    desc: "Sistemas de alarme perimetral e interior com sirene e notificação imediata no telemóvel.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-orange-500",
    waMsg: "Olá! Quero solicitar instalação de alarme de intrusão",
  },
  {
    icon: Flame,
    name: "Alarmes de Incêndio",
    desc: "Detetores de fumo, calor e sirenes. Sistemas certificados para residências e empresas.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-red-500",
    waMsg: "Olá! Quero solicitar instalação de alarme de incêndio",
  },
  {
    icon: Zap,
    name: "Vedação Elétrica",
    desc: "Cercas elétricas de alta segurança para proteção do seu terreno e propriedade.",
    price: "Sob cotação",
    priceNote: "por metro linear",
    color: "bg-yellow-500",
    waMsg: "Olá! Quero solicitar instalação de vedação elétrica",
  },
  {
    icon: DoorOpen,
    name: "Portões Automáticos",
    desc: "Automatização de portões deslizantes e de batente com controlo remoto e por telemóvel.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-teal-500",
    waMsg: "Olá! Quero solicitar instalação de portão automático",
  },
  {
    icon: BarChart2,
    name: "Cancelas Automáticas",
    desc: "Cancelas para estacionamentos, condomínios e empresas com controlo de acesso integrado.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-purple-500",
    waMsg: "Olá! Quero solicitar instalação de cancela automática",
  },
  {
    icon: Lock,
    name: "Controlo de Acesso",
    desc: "Sistemas biométricos, por cartão RFID e facial para controlo de entradas.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-cyan-500",
    waMsg: "Olá! Quero solicitar sistema de controlo de acesso",
  },
  {
    icon: Home,
    name: "Automação de Residências",
    desc: "Casa inteligente: controlo de luzes, persianas, climatização e segurança pelo telemóvel.",
    price: "Sob cotação",
    priceNote: "levantamento técnico necessário",
    color: "bg-green-500",
    waMsg: "Olá! Quero saber mais sobre automação residencial",
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen">
      <title>Serviços de Segurança Eletrônica e Starlink — Moçambique | Technologio24/v</title>
      <meta name="description" content="Câmeras de segurança, alarmes, portões automáticos e instalação Starlink em Moçambique. Orçamento gratuito." />

      <div className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Os Nossos Serviços</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Serviços completos de segurança eletrônica e tecnologia para residências e empresas em Moçambique
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h2>
                <p className="text-gray-500 text-sm mb-4 flex-1">{s.desc}</p>
                <div className="mb-4">
                  <div className="text-xl font-extrabold text-blue-600">{s.price}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.priceNote}</div>
                </div>
                <a
                  href={`${WA}?text=${encodeURIComponent(s.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Solicitar Serviço
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-[#0a1628] rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-2">Precisa de um Orçamento?</h2>
            <p className="text-gray-400 mb-6">Todos os serviços são realizados mediante levantamento técnico e proposta de cotação personalizada.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`${WA}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para instalação")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                Pedir Orçamento <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+258877201231"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-colors"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
