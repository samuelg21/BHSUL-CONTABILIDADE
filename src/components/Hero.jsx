import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[70vh] md:min-h-[75vh] flex items-center pt-20 pb-16 overflow-hidden bg-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
                    alt="Equipe de contabilidade em reunião"
                    className="w-full h-full object-cover opacity-35 blur-[1.5px]"
                />
                <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(37,99,235,0.14),transparent_50%)]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-[560px]">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-text-dim mb-5">
                        Contabilidade estratégica para empresas
                    </div>

                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] text-primary">
                        Gestão contábil <span className="text-accent">sólida</span> para crescer com segurança
                    </h1>

                    <p className="text-sm md:text-base text-text-dim leading-relaxed mt-6">
                        Inteligência fiscal, previsibilidade e atendimento consultivo para decisões mais seguras.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-8">
                        <a
                            href="https://wa.me/553173000415"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full sm:w-auto text-base group"
                        >
                            <Phone size={18} />
                            Falar com um Especialista
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="btn-secondary w-full sm:w-auto text-base">
                            Nossos Serviços
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
