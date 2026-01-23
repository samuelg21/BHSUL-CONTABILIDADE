import React from 'react';
import { Briefcase, FileText, LineChart, Building2, PiggyBank, Calculator, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <LineChart size={28} />,
        title: 'Contabilidade Empresarial',
        description: 'Rotina contábil estruturada, relatórios claros e suporte para decisões estratégicas.'
    },
    {
        icon: <FileText size={28} />,
        title: 'Imposto de Renda',
        description: 'Declarações com segurança, redução de riscos e acompanhamento personalizado.'
    },
    {
        icon: <PiggyBank size={28} />,
        title: 'Assessoria Financeira',
        description: 'Diagnóstico de caixa, indicadores e planos para aumentar a rentabilidade.'
    },
    {
        icon: <Building2 size={28} />,
        title: 'Abertura de Empresas',
        description: 'Abertura rápida com escolha do regime ideal e documentação sem burocracia.'
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Departamento Pessoal',
        description: 'Folha, eSocial e rotinas trabalhistas com precisão e conformidade.'
    },
    {
        icon: <Calculator size={28} />,
        title: 'BPO Financeiro',
        description: 'Gestão financeira terceirizada para foco total no core do negócio.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-28 section-muted">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                            Serviços
                        </div>
                        <h2 className="section-title text-left mb-4">
                            Soluções essenciais para manter sua empresa <span className="text-accent">regular</span> e competitiva.
                        </h2>
                        <p className="text-lg text-text-dim leading-relaxed">
                            Atendemos empresas de diferentes portes com processos claros, tecnologia e atendimento consultivo.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/553173000415"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary group"
                    >
                        Falar com um Especialista
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-surface p-8 rounded-3xl border border-transparent hover:border-accent/10 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="bg-white text-accent w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:border-accent/30">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-dim leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
