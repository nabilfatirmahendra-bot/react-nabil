const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center border-t border-zinc-700">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-redit-fill ri-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer;