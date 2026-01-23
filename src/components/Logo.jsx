import React from 'react';
import logoIconUrl from '../assets/logo-icon.svg';

const Logo = ({ className = "", showText = true, tone = "dark" }) => {
    const nameClass = tone === 'light' ? 'text-accent' : 'text-accent';
    const subtitleClass = tone === 'light' ? 'text-white/70' : 'text-text-dim';

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src={logoIconUrl}
                alt="BHSUL Contabilidade"
                className="h-full w-auto object-contain"
            />
            {showText && (
                <div className="leading-none">
                    <div className={`${nameClass} font-bold text-2xl md:text-3xl tracking-[0.02em] font-poppins`}>
                        BHSUL
                    </div>
                    <div className={`${subtitleClass} text-xs md:text-sm tracking-[0.18em] mt-1 font-inter`}>
                        CONTABILIDADE
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logo;
