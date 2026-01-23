import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Carlos Alberto',
        role: 'Diretor da Alpha Logística',
        content: 'A BHSUL organizou nossa rotina fiscal e trouxe clareza para decisões financeiras. O atendimento é rápido e muito técnico.',
        rating: 5
    },
    {
        name: 'Juliana Mendes',
        role: 'Proprietária da JM Tech',
        content: 'Abrir minha empresa com a BHSUL foi simples. Eles explicam tudo com transparência e cuidam de cada etapa.',
        rating: 5
    },
    {
        name: 'Renato Souza',
        role: 'CEO da Prime Invest',
        content: 'Mais do que contabilidade, eles são parceiros estratégicos. O suporte consultivo fez toda a diferença.',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-28 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4 justify-center">
                        Prova Social
                    </div>
                    <h2 className="section-title text-center">
                        Empresas que confiam na <span className="text-accent">BHSUL</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Relacionamentos de longo prazo construídos com confiança, transparência e resultados.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.name} className="bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-1 text-amber-400 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <Quote className="text-accent/30 mb-4" size={32} />
                            <p className="text-text-dim leading-relaxed mb-6">
                                “{t.content}”
                            </p>
                            <div className="border-t border-gray-200/60 pt-4">
                                <p className="font-semibold text-primary">{t.name}</p>
                                <p className="text-xs uppercase tracking-[0.25em] text-text-dim">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
