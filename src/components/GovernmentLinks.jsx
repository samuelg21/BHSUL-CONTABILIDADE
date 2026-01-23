import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const links = [
    {
        name: 'Gov.br',
        description: 'Portal oficial de servicos do governo federal.',
        url: 'https://www.gov.br/'
    },
    {
        name: 'Receita Federal',
        description: 'Emissao de documentos e consultas fiscais.',
        url: 'https://www.gov.br/receitafederal/pt-br'
    },
    {
        name: 'e-CAC',
        description: 'Centro Virtual de Atendimento da Receita Federal.',
        url: 'https://cav.receita.fazenda.gov.br/'
    },
    {
        name: 'Simples Nacional',
        description: 'Consultas e orientacoes para o regime simplificado.',
        url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/'
    },
    {
        name: 'eSocial',
        description: 'Informacoes e obrigacoes trabalhistas digitais.',
        url: 'https://www.gov.br/esocial/pt-br'
    },
    {
        name: 'INSS',
        description: 'Servicos e informacoes previdenciarias oficiais.',
        url: 'https://www.gov.br/inss/pt-br'
    },
    {
        name: 'FGTS',
        description: 'Consultas e informacoes do FGTS.',
        url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/'
    },
    {
        name: 'Sintegra',
        description: 'Consulta de cadastro de contribuintes.',
        url: 'http://www.sintegra.gov.br/'
    },
    {
        name: 'Portal do Empreendedor',
        description: 'MEI, formalizacao e servicos relacionados.',
        url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor'
    }
];

const GovernmentLinks = () => {
    return (
        <section className="py-24 section-muted">
            <div className="container-custom">
                <div className="mb-14 text-left">
                    <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                        Links oficiais
                    </div>
                    <h2 className="section-title text-left">
                        Acesso rapido a fontes <span className="text-accent">confiaveis</span>
                    </h2>
                    <p className="section-subtitle">
                        Reunimos os principais portais do governo para consultas e servicos essenciais.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-surface p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                        >
                            <div className="bg-accent/10 text-accent p-3 rounded-xl">
                                <ShieldCheck size={22} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-primary">{link.name}</h3>
                                    <ExternalLink size={14} className="text-text-dim group-hover:text-accent transition-colors" />
                                </div>
                                <p className="text-sm text-text-dim leading-relaxed mt-1">{link.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernmentLinks;
