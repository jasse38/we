import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send, Mail } from "lucide-react";

const WA1 = "https://wa.me/258848699933";
const WA2 = "https://wa.me/258877201231";

export default function Contacto() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Mensagem do site:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`;
    window.open(`${WA1}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <title>Contacto — Technologio24/v | Starlink Moçambique</title>
      <meta name="description" content="Entre em contacto connosco pelo WhatsApp ou telefone para instalação de Starlink e segurança eletrônica em Moçambique." />

      <div className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Contacto</h1>
          <p className="text-gray-400 text-lg">Estamos prontos para ajudar — fale connosco agora</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fale Connosco</h2>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <p className="text-green-700 font-semibold text-sm mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp — Suporte Técnico
                  </p>
                  <div className="space-y-2">
                    <a
                      href={WA1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-xl transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +258 84 869 9933
                    </a>
                    <a
                      href={WA2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-xl transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +258 87 720 1231
                    </a>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                  <p className="text-blue-700 font-semibold text-sm mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telefone — Marcações de Instalação
                  </p>
                  <a href="tel:+258877201231" className="flex items-center gap-3 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                    <Phone className="w-5 h-5" /> +258 87 720 1231
                  </a>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                  <p className="text-blue-700 font-semibold text-sm mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telefone — Venda de Kits e Acessórios
                  </p>
                  <a href="tel:+258857592248" className="flex items-center gap-3 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                    <Phone className="w-5 h-5" /> +258 85 759 2248
                  </a>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                  <p className="text-blue-700 font-semibold text-sm mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </p>
                  <a href="mailto:nelvy.geral@gmail.com" className="flex items-center gap-3 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                    <Mail className="w-5 h-5" /> nelvy.geral@gmail.com
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Localização</p>
                      <p className="text-gray-500 text-sm">Moçambique — Cobertura Nacional</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Horário de Atendimento</p>
                      <p className="text-gray-500 text-sm">Segunda a Sábado — 7h às 20h</p>
                      <p className="text-gray-500 text-sm">WhatsApp — 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl overflow-hidden h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7652474.866505384!2d29.07!3d-18.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a30f6c8da7e9843%3A0x4b3b123d9de2c8e0!2sMo%C3%A7ambique!5e0!3m2!1spt!2smz!4v1699999999999"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Moçambique"
                />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Pedido de Orçamento</h2>
                <p className="text-gray-500 text-sm mb-6">Preencha o formulário e entraremos em contacto via WhatsApp.</p>

                {sent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                    <p className="text-gray-500 text-sm">O WhatsApp foi aberto com a sua mensagem. Entraremos em contacto em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                      <input
                        required
                        type="text"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="O seu nome"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número de Telefone *</label>
                      <input
                        required
                        type="tel"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        placeholder="+258 8X XXX XXXX"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email (opcional)</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@exemplo.com"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem / Serviço Pretendido *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        placeholder="Descreva o serviço que precisa (ex: instalação de Starlink, câmeras de segurança, etc.)"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Enviar pelo WhatsApp
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Ao enviar, será redirecionado para o WhatsApp com a sua mensagem pré-preenchida.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
