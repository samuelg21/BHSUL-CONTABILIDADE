import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Empresa', href: '#mission' },
        { name: 'Serviços', href: '#services' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <header className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-[0_1px_8px_rgba(15,23,42,0.04)] transition-all duration-500">
            <div className="container-custom flex justify-between items-center py-1.5 md:py-2.5">
                <div className="flex-shrink-0 flex items-center">
                    <Logo className="h-10 md:h-12" />
                </div>

                <nav className="hidden lg:flex space-x-7 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-slate-600 hover:text-accent font-medium text-sm transition-all duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <a
                        href="https://wa.me/553173000415"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-accent border border-accent/30 hover:border-accent hover:bg-accent/5 px-4 py-2 rounded-full font-medium text-xs tracking-[0.08em] uppercase transition-all duration-300 flex items-center gap-2"
                    >
                        <Phone size={14} />
                        Especialista
                    </a>
                </nav>

                <nav className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            <div className={`lg:hidden fixed inset-x-0 bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'top-[56px] opacity-100' : '-top-full opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col p-8 space-y-6 text-left">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-900 font-semibold text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/553173000415"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white py-3 rounded-xl font-semibold text-base flex items-center justify-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <Phone size={20} />
                        Falar com um Especialista
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
