import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 text-gray-300 py-12 md:pt-16 md:pb-8 text-center md:text-left">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">BHSUL Contabilidade</h3>
                        <p className="mb-6 text-sm leading-relaxed">
                            Comprometidos com a excelência contábil e o sucesso dos nossos clientes. Soluções empresariais completas.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#mission" className="hover:text-primary transition-colors">Nossa Empresa</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#client-area" className="hover:text-primary transition-colors">Área do Cliente</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Fale Conosco</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Serviços</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Abertura de Empresas</li>
                            <li>Departamento Pessoal</li>
                            <li>Departamento Tributário</li>
                            <li>Imposto de Renda</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 className="text-white font-bold mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm inline-block text-left md:block">
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                                <span>Rua Desembargador Mario Mattos,<br />528/201 - Serra/BH</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>(31) 3653-6954</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>bhsul@bhsul.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} BHSUL Contabilidade. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
