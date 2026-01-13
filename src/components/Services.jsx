import React from 'react';
import { FileText, Calculator, Users, TrendingUp, ShieldCheck, Briefcase } from 'lucide-react';

const services = [
    {
        icon: <Briefcase size={32} />,
        title: "Abertura de Empresas",
        description: "Assessoria completa para regularização e abertura do seu negócio com agilidade."
    },
    {
        icon: <Users size={32} />,
        title: "Departamento Pessoal",
        description: "Gestão de folha de pagamento, admissões, rescisões e e-Social."
    },
    {
        icon: <FileText size={32} />,
        title: "Departamento Tributário",
        description: "Apuração de impostos e planejamento tributário eficiente para sua empresa."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Nossos Serviços</h2>
                    <p className="section-subtitle">
                        Soluções completas e personalizadas para atender todas as necessidades da sua empresa.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-primary group"
                        >
                            <div className="text-primary mb-4 md:mb-6 p-3 md:p-4 bg-blue-50 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{service.title}</h3>
                            <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
