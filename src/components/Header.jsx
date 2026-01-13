import React, { useState } from 'react';
import { Menu, X, User, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Início', href: '#home' },
        { name: 'Nossa Empresa', href: '#mission' },
        { name: 'Serviços', href: '#services' },
        { name: 'Imposto de Renda', href: '#ir' },
        { name: 'Informativo', href: '#info' },
        { name: 'Localização', href: '#footer' },
        { name: 'Contato', href: '#footer' },
    ];

    return (
        <header className="fixed w-full z-50 bg-white shadow-md transition-all duration-300">
            {/* Main Navbar */}
            <div className="container-custom flex justify-between items-center py-2 md:py-3">
                {/* Logo */}
                <div className="shrink-0">
                    <Logo className="h-12 md:h-24 w-auto py-1" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 hover:text-primary focus:outline-none p-2"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
                    <div className="flex flex-col px-6 py-8 space-y-6 text-center">
                        {navItems.filter(item => !['Imposto de Renda', 'Informativo', 'Localização'].includes(item.name)).map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary font-medium text-xl py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}


                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
