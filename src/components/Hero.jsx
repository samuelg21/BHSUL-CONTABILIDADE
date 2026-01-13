import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative bg-gray-900 text-white pt-48 pb-24 md:py-48">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
            ></div>

            <div className="container-custom relative z-20 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Soluções Contábeis para <br className="hidden md:block" />
                    <span className="text-primary-light">Impulsionar seu Negócio</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                    Na BHSUL, oferecemos assessoria completa para garantir a saúde financeira da sua empresa. Confiança, transparência e resultados.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <a href="#contact" className="btn-primary">
                        Falar com um Especialista
                    </a>
                    <a href="#services" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out text-center">
                        Nossos Serviços
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
