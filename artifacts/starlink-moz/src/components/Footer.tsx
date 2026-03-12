import { Link } from "wouter";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070f1e] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="mb-4">
              <img src="/logo.jpeg" alt="Nelvy LDA" className="h-12 w-auto rounded-md bg-white px-2 py-1" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Especialistas em instalação de Starlink, segurança eletrônica e automação residencial em Moçambique.
            </p>
            <div className="flex items-center gap-1 mt-3 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Moçambique</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Início" },
                { href: "/produtos", label: "Produtos Starlink" },
                { href: "/servicos", label: "Serviços" },
                { href: "/galeria", label: "Galeria" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/contacto", label: "Contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Instalação de Starlink</li>
              <li>Câmeras de Segurança</li>
              <li>Alarmes de Intrusão</li>
              <li>Alarmes de Incêndio</li>
              <li>Portões Automáticos</li>
              <li>Automação Residencial</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">WhatsApp / Suporte</p>
                <a href="https://wa.me/258848699933" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  +258 84 869 9933
                </a>
                <a href="https://wa.me/258877201231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  +258 87 720 1231
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Marcações / Instalações</p>
                <a href="tel:+258877201231" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  +258 87 720 1231
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Venda de Kits</p>
                <a href="tel:+258857592248" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  +258 85 759 2248
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Email</p>
                <a href="mailto:nelvy.geral@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  nelvy.geral@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            Serviços mediante levantamento técnico e proposta de cotação personalizada.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} Nelvy LDA — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
