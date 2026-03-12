import { Shield, Wifi, Home, Users, Award, Headphones } from "lucide-react";
import { Link } from "wouter";

const WA = "https://wa.me/258848699933";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <title>Sobre a Technologio24/v — Starlink e Segurança em Moçambique</title>
      <meta name="description" content="Somos especialistas em Starlink, segurança eletrônica e automação residencial em Moçambique. Conheça a nossa história e missão." />

      <div className="bg-[#0a1628] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm mb-6">
                <Award className="w-4 h-4" /> Empresa de Tecnologia em Moçambique
              </div>
              <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Sobre a<br />
                <span className="text-blue-400">Nelvy LDA</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A Nelvy LDA é especialista em Informática, instalação de Starlink, segurança eletrônica e automação residencial, oferecendo soluções modernas para casas e empresas em Moçambique.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Todos os serviços são realizados mediante levantamento técnico e proposta de cotação personalizada. A nossa equipa de técnicos certificados garante instalações de qualidade com suporte contínuo.
              </p>
              <p className="text-gray-400 leading-relaxed mt-2">
                📧 nelvy.geral@gmail.com
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900/30 rounded-2xl p-6 text-center border border-blue-800/40">
                <div className="text-4xl font-extrabold text-white mb-1">200+</div>
                <div className="text-blue-300 text-sm">Clientes Satisfeitos</div>
              </div>
              <div className="bg-blue-900/30 rounded-2xl p-6 text-center border border-blue-800/40">
                <div className="text-4xl font-extrabold text-white mb-1">500+</div>
                <div className="text-blue-300 text-sm">Instalações Realizadas</div>
              </div>
              <div className="bg-blue-900/30 rounded-2xl p-6 text-center border border-blue-800/40">
                <div className="text-4xl font-extrabold text-white mb-1">5+</div>
                <div className="text-blue-300 text-sm">Anos de Experiência</div>
              </div>
              <div className="bg-blue-900/30 rounded-2xl p-6 text-center border border-blue-800/40">
                <div className="text-4xl font-extrabold text-white mb-1">24/7</div>
                <div className="text-blue-300 text-sm">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">A Nossa Missão</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
              Conectar Moçambique ao mundo através de tecnologia de ponta, garantindo segurança e inovação para cada lar e empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Wifi,
                title: "Conectividade",
                desc: "Levamos internet de alta velocidade via satélite a qualquer ponto de Moçambique, mesmo às zonas mais remotas.",
                color: "bg-blue-500",
              },
              {
                icon: Shield,
                title: "Segurança",
                desc: "Protegemos o que mais importa com câmeras, alarmes e vedações elétricas de última geração.",
                color: "bg-indigo-500",
              },
              {
                icon: Home,
                title: "Automação",
                desc: "Transformamos casas em lares inteligentes com portões automáticos, controlo de acesso e sistemas integrados.",
                color: "bg-teal-500",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0a1628] to-[#0056b3] rounded-3xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Users, label: "Equipa Certificada", desc: "Técnicos com formação especializada" },
                { icon: Award, label: "Qualidade Garantida", desc: "Materiais e mão-de-obra com garantia" },
                { icon: Headphones, label: "Suporte Contínuo", desc: "Sempre disponíveis após a instalação" },
              ].map((f) => (
                <div key={f.label} className="text-white">
                  <f.icon className="w-10 h-10 mx-auto mb-3 text-blue-300" />
                  <h3 className="font-bold mb-1">{f.label}</h3>
                  <p className="text-blue-200 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Pronto para Começar?</h2>
            <p className="text-gray-500 mb-6">Contacte-nos hoje e receba uma proposta personalizada</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`${WA}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os vossos serviços")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                Falar no WhatsApp
              </a>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                Ver Contactos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
