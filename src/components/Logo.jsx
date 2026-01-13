import React from 'react';

const Logo = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 80"
            className={className}
            aria-label="BHSUL Contabilidade"
        >
            {/* Icon / Symbol */}
            <g transform="translate(10, 10)">
                <rect x="0" y="10" width="15" height="40" rx="2" fill="#2563eb" />
                <rect x="20" y="0" width="15" height="60" rx="2" fill="#1d4ed8" />
                <rect x="40" y="20" width="15" height="30" rx="2" fill="#60a5fa" />

                {/* Connecting line representing growth/support */}
                <path d="M0 55 Q 25 65, 55 55" stroke="#2563eb" strokeWidth="4" fill="none" />
            </g>

            {/* Text: BHSUL */}
            <text x="80" y="50" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#1e293b">
                BHSUL
            </text>

            {/* Text: Contabilidade */}
            <text x="80" y="72" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" letterSpacing="3">
                CONTABILIDADE
            </text>
        </svg>
    );
};

export default Logo;
