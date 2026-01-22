import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setActive(window.scrollY > 150);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

        // Build menu classes: desktop shows as flex, mobile uses hidden/block and an overlay when open.
        const desktopPosition = active ? 'top-0 opacity-100' : '-top-10 opacity-0';

        const menuClassName = [
            open ? 'block' : 'hidden',
            'md:flex',
            'absolute md:static left-4 right-4 top-20 md:top-auto',
            'bg-red-900/95 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none',
            'shadow-md md:shadow-none z-50 md:z-auto',
            'flex flex-col md:flex-row gap-3 md:gap-6',
            'transition-all duration-200',
        ].join(' ').replace(/\s+/g, ' ').trim();

        // Close on ESC when menu is open
        useEffect(() => {
            if (!open) return;
            const onKey = (e) => {
                if (e.key === 'Escape') setOpen(false);
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
        }, [open]);

    return (
        <div className={`navbar py-5 md:py-7 flex items-center justify-between relative`}> 
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white rounded-md">
                    Portofolio
                </h1>
            </div>

            <button
                className="md:hidden p-2 rounded-md bg-red-700 hover:bg-red-800 text-white"
                aria-controls="primary-navigation"
                aria-expanded={open}
                aria-label={open ? 'Tutup menu' : 'Buka menu'}
                onClick={() => setOpen((s) => !s)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* backdrop closes menu on mobile */}
            {open && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}

            <ul id="primary-navigation" className={`${menuClassName} ${active ? desktopPosition : ''}`} role="menu" aria-hidden={!open && undefined}>
                <li>
                    <a href="#beranda" onClick={() => setOpen(false)} role="menuitem" className="sm:text-lg text-base font-bold block py-3 px-3 md:py-0 md:px-4">
                        Beranda
                    </a>
                </li>
                <li>
                    <a href="#tentang" onClick={() => setOpen(false)} role="menuitem" className="sm:text-lg text-base font-bold block py-3 px-3 md:py-0 md:px-4">
                        Tentang
                    </a>
                </li>
                <li>
                    <a href="#proyek" onClick={() => setOpen(false)} role="menuitem" className="sm:text-lg text-base font-bold block py-3 px-3 md:py-0 md:px-4">
                        Proyek
                    </a>
                </li>
                <li>
                    <a href="#kontak" onClick={() => setOpen(false)} role="menuitem" className="sm:text-lg text-base font-bold block py-3 px-3 md:py-0 md:px-4">
                        Kontak
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;