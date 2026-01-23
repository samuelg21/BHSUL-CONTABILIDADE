import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-16 border-t border-white/5">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <h3 className="text-white text-xl font-semibold">BHSUL Contabilidade</h3>
                        <p className="text-white/70 leading-relaxed">
                            Contabilidade consultiva para empresas que buscam segurança, clareza e crescimento sustentável.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/bhsulcontabilidade?igsh=ZmkxZWVoMG0xc2t4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href="https://wa.me/553173000415"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-[0.3em] text-accent mb-6">Navegação</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
                            <li><a href="#mission" className="hover:text-white transition-colors">Empresa</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#acesso-rapido" className="hover:text-white transition-colors">Acesso rápido</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-[0.3em] text-accent mb-6">Especialidades</h4>
                        <ul className="space-y-3 text-white/70">
                            <li>Contabilidade Empresarial</li>
                            <li>Assessoria Financeira</li>
                            <li>BPO Financeiro</li>
                            <li>Abertura de Empresas</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-[0.3em] text-accent mb-6">Atendimento</h4>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent" />
                                <a
                                    href="https://maps.google.com/?q=Rua%20Desembargador%20Mario%20Mattos,%20528/201%20-%20Serra%2FBH"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Rua Desembargador Mario Mattos, 528/201 - Serra/BH
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-accent" />
                                <a href="tel:+553173000415" className="hover:text-white transition-colors">
                                    (31) 7300-0415
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-accent" />
                                <a href="mailto:bhsul@bhsul.com.br" className="hover:text-white transition-colors">
                                    bhsul@bhsul.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-left text-white/50 text-sm">
                    &copy; {new Date().getFullYear()} BHSUL Contabilidade. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
