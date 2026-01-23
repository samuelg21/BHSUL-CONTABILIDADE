import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const Mission = () => {
    return (
        <section id="mission" className="py-28 section-soft">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl z-10 group">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                                alt="Equipe da BHSUL"
                                className="w-full h-full object-cover aspect-4/5 transform group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white z-20">
                                <p className="text-4xl font-semibold mb-1">30+ anos</p>
                                <p className="text-sm uppercase tracking-[0.3em] text-white/80">Atuação sólida</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl z-0"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl z-0"></div>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-4">
                                Sobre a BHSUL
                            </div>
                            <h2 className="section-title text-left mb-6">
                                Contabilidade que combina <span className="text-accent">pessoas</span>, dados e estratégia.
                            </h2>
                            <p className="text-lg text-text-dim leading-relaxed">
                                Somos uma contabilidade consultiva em Belo Horizonte. Entregamos clareza, organização e
                                segurança fiscal para empresários que precisam tomar decisões com confiança.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                                <div className="bg-accent/5 w-12 h-12 rounded-2xl flex items-center justify-center text-accent mb-4">
                                    <Shield size={22} />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Confiança e transparência</h4>
                                <p className="text-sm text-text-dim leading-relaxed">Processos claros, relatórios objetivos e previsibilidade.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                                <div className="bg-accent/5 w-12 h-12 rounded-2xl flex items-center justify-center text-accent mb-4">
                                    <Award size={22} />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Excelência técnica</h4>
                                <p className="text-sm text-text-dim leading-relaxed">Atualização constante e domínio das normas vigentes.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                                <div className="bg-accent/5 w-12 h-12 rounded-2xl flex items-center justify-center text-accent mb-4">
                                    <Target size={22} />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Foco em resultados</h4>
                                <p className="text-sm text-text-dim leading-relaxed">Estratégias para reduzir custos e proteger o caixa.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                                <div className="bg-accent/5 w-12 h-12 rounded-2xl flex items-center justify-center text-accent mb-4">
                                    <Users size={22} />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Atendimento humano</h4>
                                <p className="text-sm text-text-dim leading-relaxed">Especialistas disponíveis para orientar decisões.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
