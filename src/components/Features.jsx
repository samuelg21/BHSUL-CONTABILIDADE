import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
    "Atendimento Personalizado",
    "Equipe Qualificada",
    "Tecnologia de Ponta",
    "Agilidade nos Processos",
    "Segurança da Informação",
    "Compromisso com Prazos"
];

const Features = () => {
    return (
        <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a BHSUL?</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Mais do que um escritório de contabilidade, somos parceiros do seu negócio. Entendemos os desafios do empreendedorismo e trabalhamos para simplificar a burocracia.
                        </p>
                        <a href="#contact" className="inline-block bg-white text-primary-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                            Conheça nossos diferenciais
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <CheckCircle className="text-primary-light flex-shrink-0" size={24} />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
