import React from 'react';
import { BadgeCheck, ShieldCheck, Headset, LineChart } from 'lucide-react';

const Features = () => {
    const items = [
        {
            title: 'Compliance e segurança',
            description: 'Rotinas auditáveis, calendário fiscal e controle de obrigações.',
            icon: <ShieldCheck size={22} />
        },
        {
            title: 'Atendimento consultivo',
            description: 'Especialistas disponíveis para orientar decisões e reduzir riscos.',
            icon: <Headset size={22} />
        },
        {
            title: 'Gestão orientada a dados',
            description: 'Relatórios claros para apoiar crescimento e previsibilidade.',
            icon: <LineChart size={22} />
        },
        {
            title: 'Credibilidade no mercado',
            description: 'Décadas de atuação e relacionamento próximo com empresários.',
            icon: <BadgeCheck size={22} />
        }
    ];

    const badges = ['CRC Regular', 'LGPD', 'Processos Padronizados', 'Atendimento Local'];

    return (
        <section className="py-24 section-soft">
            <div className="container-custom">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                            Diferenciais
                        </div>
                        <h2 className="section-title text-left">
                            Confiança, método e tecnologia para sua contabilidade funcionar de verdade.
                        </h2>
                        <p className="text-lg text-text-dim leading-relaxed max-w-xl">
                            Nossa atuação combina processos rigorosos e atendimento humano para gerar tranquilidade
                            fiscal e clareza financeira.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {badges.map((badge) => (
                                <span key={badge} className="px-4 py-2 rounded-full bg-white text-xs uppercase tracking-[0.25em] text-text-dim border border-gray-200">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {items.map((item) => (
                            <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="bg-accent/10 text-accent w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-text-dim leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
