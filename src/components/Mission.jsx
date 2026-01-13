import React from 'react';

const Mission = () => {
    return (
        <section id="mission" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="section-title">Sobre a BHSUL</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A BHSUL Serviços Contábeis surgiu da necessidade de prover aos empresários e empresas de BH, principalmente da região centro-sul, um serviço contábil ágil e eficiente que levasse em conta a necessidade individual de cada cliente.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Estamos localizados no bairro Serra, região centro-sul de BH/MG, com sede própria. Estamos preparados para lhe oferecer uma plataforma contábil completa e adaptável às suas necessidades.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                <h4 className="font-bold text-gray-800">Confiança</h4>
                                <p className="text-sm text-gray-500">Transparência em todos os processos.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                <h4 className="font-bold text-gray-800">Experiência</h4>
                                <p className="text-sm text-gray-500">Anos de atuação no mercado.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-full min-h-[300px] md:min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                alt="Equipe de Contabilidade"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                            <div className="absolute bottom-0 left-0 bg-primary/90 text-white p-6 rounded-tr-3xl backdrop-blur-sm shadow-lg">
                                <p className="font-bold text-xl">30+ Anos</p>
                                <p className="text-sm">de excelência</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
