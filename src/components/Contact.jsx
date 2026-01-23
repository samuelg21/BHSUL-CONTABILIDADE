import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-28 section-soft">
            <div className="container-custom">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                            Contato
                        </div>
                        <h2 className="section-title text-left">
                            Vamos conversar sobre a sua contabilidade?
                        </h2>
                        <p className="text-lg text-text-dim leading-relaxed max-w-xl">
                            Fale com um especialista e receba um diagnóstico rápido do seu negócio. Atendimento ágil,
                            humano e sem complicação.
                        </p>
                        <a
                            href="https://wa.me/553173000415"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary mt-8 w-full sm:w-auto"
                        >
                            Falar com um Especialista
                        </a>
                    </div>

                    <div className="space-y-6">
                        <a
                            href="https://wa.me/553173000415"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-accent/30 hover:shadow-md transition-all"
                        >
                            <div className="bg-accent/10 text-accent p-3 rounded-xl">
                                <Phone size={22} />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">WhatsApp</p>
                                <span className="text-text-dim">(31) 7300-0415</span>
                            </div>
                        </a>
                        <a
                            href="mailto:bhsul@bhsul.com.br"
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-accent/30 hover:shadow-md transition-all"
                        >
                            <div className="bg-accent/10 text-accent p-3 rounded-xl">
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">E-mail</p>
                                <span className="text-text-dim">bhsul@bhsul.com.br</span>
                            </div>
                        </a>
                        <a
                            href="https://maps.google.com/?q=Rua%20Desembargador%20Mario%20Mattos,%20528/201%20-%20Serra%2FBH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-accent/30 hover:shadow-md transition-all"
                        >
                            <div className="bg-accent/10 text-accent p-3 rounded-xl">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Endereço</p>
                                <span className="text-text-dim">Rua Desembargador Mario Mattos, 528/201 - Serra/BH</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
