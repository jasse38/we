import { Link } from "wouter";
import { ArrowRight, Wifi, Shield, Home as HomeIcon, Star, CheckCircle, Phone } from "lucide-react";

const WA1 = "https://wa.me/258848699933";
const WA2 = "https://wa.me/258877201231";

function HeroSection() {
  return (
    <section className="hero-gradient tech-grid min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1628]/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponível em todo Moçambique
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Internet Starlink e<br />
            <span className="gradient-text">Sistemas de Segurança</span><br />
            Profissional
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Instalação rápida e suporte técnico especializado em Moçambique. Cobrimos casas e empresas com internet via satélite, câmeras, alarmes e automação residencial.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/produtos" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30">
              <Wifi className="w-5 h-5" />
              Comprar Starlink
            </Link>
            <Link href="/servicos" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all">
              <HomeIcon className="w-5 h-5" />
              Solicitar Instalação
            </Link>
            <a
              href={WA1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { label: "Clientes", value: "200+" },
              { label: "Instalações", value: "500+" },
              { label: "Suporte", value: "24/7" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:block overflow-hidden">
        <img
          src="/WhatsApp_Image_2026-03-11_at_01.05.07_(2)_1773327612280.jpeg"
          alt="Instalação Starlink em Moçambique"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </section>
  );
}

function ServicesHighlight() {
  const services = [
    { icon: Wifi, label: "Internet Starlink", desc: "Cobertura satélite em zonas remotas" },
    { icon: Shield, label: "Câmeras de Segurança", desc: "Monitoramento 24/7 profissional" },
    { icon: HomeIcon, label: "Automação Residencial", desc: "Portões, alarmes e controlo de acesso" },
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Os Nossos Serviços</h2>
          <p className="text-gray-500 mt-2">Soluções completas de tecnologia para a sua casa e empresa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.label} className="card-hover bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const wa1 = `${WA1}?text=Olá! Quero comprar o Starlink Mini V4 por 18.000 MT`;
  const wa2 = `${WA1}?text=Olá! Quero comprar o Starlink V4 Grande por 25.500 MT`;
  return (
    <section className="section-alt py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Produtos Starlink</h2>
          <p className="text-gray-500 mt-2">Internet via satélite de alta velocidade — disponível agora em Moçambique</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              name: "Starlink Mini V4",
              price: "18.000 MT",
              desc: "Compacto, portátil e fácil de instalar. Ideal para uso residencial e viagens.",
              img: "/WhatsApp_Image_2026-03-11_at_01.05.08_1773327612280.jpeg",
              link: wa1,
            },
            {
              name: "Starlink V4 Grande",
              price: "25.500 MT",
              desc: "Alta performance para residências e empresas. Internet ultra-rápida e estável.",
              img: "/WhatsApp_Image_2026-03-11_at_01.05.07_(1)_1773327612280.jpeg",
              link: wa2,
            },
          ].map((p) => (
            <div key={p.name} className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-52 overflow-hidden bg-gray-100">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
                <div className="text-2xl font-extrabold text-blue-600 mb-4">{p.price}</div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center transition-colors"
                >
                  Comprar pelo WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/produtos" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
            Ver todos os produtos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InstallationProcess() {
  const steps = [
    { n: "1", label: "Contacto pelo WhatsApp", desc: "Fale connosco e explique a sua necessidade" },
    { n: "2", label: "Levantamento técnico", desc: "Nossa equipe avalia o local gratuitamente" },
    { n: "3", label: "Cotação personalizada", desc: "Receba uma proposta detalhada e transparente" },
    { n: "4", label: "Instalação profissional", desc: "Técnicos certificados realizam a instalação" },
    { n: "5", label: "Suporte técnico", desc: "Acompanhamento contínuo após a instalação" },
  ];
  return (
    <section className="bg-[#0a1628] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-white">Como Funciona</h2>
          <p className="text-gray-400 mt-2">Processo simples e transparente do contacto à instalação</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-800 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-4 border-4 border-blue-900">
                  {s.n}
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{s.label}</h3>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WA1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Iniciar Agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function RechargeSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 tech-grid" />
          <div className="relative z-10">
            <Wifi className="w-14 h-14 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-extrabold mb-2">Recarga Mensal Starlink</h2>
            <p className="text-blue-100 mb-4">Mantenha a sua internet activa com renovação rápida</p>
            <div className="text-5xl font-extrabold mb-6">1.990 MT<span className="text-2xl font-normal text-blue-100">/mês</span></div>
            <a
              href={`${WA1}?text=Olá! Quero renovar a minha internet Starlink — 1.990 MT`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Renovar Internet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { icon: CheckCircle, label: "Técnicos Certificados", desc: "Equipa especializada com anos de experiência" },
    { icon: Star, label: "Melhor Preço", desc: "Preços competitivos e transparentes sem surpresas" },
    { icon: Phone, label: "Suporte 24/7", desc: "Sempre disponíveis para resolver qualquer problema" },
    { icon: Shield, label: "Garantia de Qualidade", desc: "Materiais e mão-de-obra com garantia incluída" },
  ];
  return (
    <section className="section-alt py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Por Que Nos Escolher?</h2>
          <p className="text-gray-500 mt-2">Referência em tecnologia e segurança em Moçambique</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.label} className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <r.icon className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">{r.label}</h3>
              <p className="text-gray-500 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <title>Technologio24/v — Starlink e Segurança Eletrônica em Moçambique</title>
      <meta name="description" content="Instalação profissional de Starlink, câmeras de segurança, alarmes e automação residencial em Moçambique. Contacte-nos pelo WhatsApp." />
      <HeroSection />
      <ServicesHighlight />
      <ProductsPreview />
      <InstallationProcess />
      <RechargeSection />
      <WhyUs />
    </>
  );
}
