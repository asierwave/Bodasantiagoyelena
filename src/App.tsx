import { useState, useRef, FormEvent, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import imgFrame2 from "./assets/fotoprincipal.jpeg";
import imgFrame3 from "./assets/fotoiglesia.jpeg";

const GOOGLE_MAPS_ADDRESS = "P.º de la Virgen del Puerto, 4, Centro, 28013 Madrid";

const WHATSAPP_URL_SANTI = "https://wa.me/34637101282";
const WHATSAPP_URL_ELENA = "https://wa.me/34619593934";
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwO6glO7G3i3ikg_HVs_5A3a-F5bJmhGZ6UBLChFc6ch_uoVblv--mcX1AgtJRtigUIVw/exec";

// ID de la carpeta de Google Drive que contiene las imágenes del carrousel
// Para obtenerlo: abre la carpeta en Google Drive y copia el ID de la URL
// URL ejemplo: https://drive.google.com/drive/folders/1ABC123XYZ... -> el ID es "1ABC123XYZ..."
const GOOGLE_DRIVE_FOLDER_ID = "1gDPI8Dqg2Xwxhc_m5PcwOhf37HCwi";

// Importar imágenes explícitamente

import img14 from "./assets/carousel/IMG-20251216-WA0061.jpg";
import img15 from "./assets/carousel/IMG-20251216-WA0063.jpg";
import img16 from "./assets/carousel/IMG-20251216-WA0065.jpg";
import img17 from "./assets/carousel/IMG-20251216-WA0067.jpg";
import img19 from "./assets/carousel/IMG-20251216-WA0071.jpg";
import img20 from "./assets/carousel/IMG-20251216-WA0073.jpg";
import img21 from "./assets/carousel/IMG-20251216-WA0075.jpg";
import img22 from "./assets/carousel/IMG-20251216-WA0077.jpg";
import img23 from "./assets/carousel/IMG-20251216-WA0079.jpg";
import img24 from "./assets/carousel/IMG-20251216-WA0081.jpg";
import img25 from "./assets/carousel/IMG-20251216-WA0083.jpg";
import img26 from "./assets/carousel/IMG-20251216-WA0085.jpg";
import img27 from "./assets/carousel/IMG-20251216-WA0087.jpg";
import img28 from "./assets/carousel/IMG-20251216-WA0089.jpg";
import img35 from "./assets/carousel/santiagosanta.jpeg";

//Si añades nuevas fotos al carousel, esta sería la 35, la siguiente la img36
//import img35 from "./assets/carousel/NOMBREDELARCHIVO.EXTENSION";


// Reemplazar FALLBACK_IMAGES por el array de imports

//También tendrías que añadir la nueva imagen importada al array de aquí abajo
//,img35 en el ejemplo que ponemos arriba

const FALLBACK_IMAGES = [
  img14, img15, img16, img17, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img35
];

function AnimatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

const scrollToSection = (sectionId: string) => {
  // Primero cierra el menú
  setIsMenuOpen(false);

  // Espera un tick para que React cierre el menú y desbloquee scroll
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 50); // 50ms es suficiente
};


  return (
    <div ref={ref} className="box-border content-stretch flex flex-col h-[100vh] items-center justify-between overflow-clip pb-0 pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute bg-[rgba(242,221,242,0.28)] inset-0"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.28, 0.6]) }}
        />
        <motion.img 
          alt="" 
          className="absolute max-w-none object-50%-50% object-cover size-full" 
          src={imgFrame2}
          style={{ scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1]) }}
        />
        {/* Degradado para opacar ligeramente la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      <div className="bg-[#000000] relative shrink-0 w-full z-10 pt-[4px]" style={isMenuOpen ? { background:'#f5f5f540', position: 'sticky', top: 0 } : !isMenuOpen ? { background: '#f5f5f540'} : undefined}>
        <div className="flex flex-row items-center p-[0px]">
          {/* Desktop Menu */}
         <div className="hidden md:flex box-border content-stretch flex-wrap items-center justify-between gap-auto lg:gap-5 px-[20px] py-[8px] relative w-full h-fit">

            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] lg:text-[28px] text-[#f5f5f5]/60 text-center">E&S</p>
            </div>
            <div 
              className="cursor-pointer group"
              onClick={() => scrollToSection("carousel")}
            >
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[15px] lg:text-[16px] text-[#f5f5f5] text-center transition-all duration-300 group-hover:underline">Nuestros momentos</p>
            </div>
            <div 
              className="cursor-pointer group"
              onClick={() => scrollToSection("ceremonia")}
            >
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[15px] lg:text-[16px] text-[#f5f5f5] text-center transition-all duration-300 group-hover:underline">La ceremonia</p>
            </div>
            <div 
              className="cursor-pointer group"
              onClick={() => scrollToSection("rsvp")}
            >
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[15px] lg:text-[16px] text-[#f5f5f5] text-center transition-all duration-300 group-hover:underline">Confirma tu asistencia</p>
            </div>
            <div className="flex gap-2 items-center">
              <a 
                href={WHATSAPP_URL_SANTI}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#452746] box-border content-stretch flex flex-row gap-[6px] items-center justify-center overflow-clip px-[20px] lg:px-[24px] py-[8px] lg:py-[10px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#5a3358] transition-colors"
                title="Mensaje a Santi"
              >
                <MessageCircle size={16} className="text-neutral-100" />
                <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] lg:text-[14px] text-neutral-100 text-center">Santi</p>
              </a>
              <a 
                href={WHATSAPP_URL_ELENA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#452746] box-border content-stretch flex flex-row gap-[6px] items-center justify-center overflow-clip px-[20px] lg:px-[24px] py-[8px] lg:py-[10px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#5a3358] transition-colors"
                title="Mensaje a Elena"
              >
                <MessageCircle size={16} className="text-neutral-100" />
                <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] lg:text-[14px] text-neutral-100 text-center">Elena</p>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden flex items-center justify-between px-[20px] relative w-full ${isMenuOpen ? 'py-[8px]': 'py-[8px]'}`}>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative">
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[22px] text-[#f5f5f5] text-center">E&S</p>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#452746] hover:bg-[#452746]/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#f5f5f5]   z-50"
            >
              <div className="flex flex-col gap-3 px-[20px] py-[16px]">
       <div 
  className="flex content-stretch flex-col gap-[4px] items-center relative py-2 cursor-pointer"
  onClick={() => {
    setIsMenuOpen(false);       // 1. Cierra el menú
    scrollToSection("carousel"); // 2. Hace scroll al ancla
  }}
>
  <p className="text-[16px] text-black text-center">Nuestros momentos</p>
</div>

                <div 
                  className="flex content-stretch flex-col gap-[4px] items-center relative py-2 cursor-pointer"
                  onClick={() => scrollToSection("ceremonia")}
                >
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[16px] text-black text-center">La ceremonia</p>
                </div>
                <div 
                  className="flex content-stretch flex-col gap-[4px] items-center relative py-2 cursor-pointer"
                  onClick={() => scrollToSection("rsvp")}
                >
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[16px] text-black text-center">Confirma tu asistencia</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href={WHATSAPP_URL_SANTI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#452746] box-border content-stretch flex flex-row gap-[8px] items-center justify-center overflow-clip px-[32px] py-[10px] relative rounded-[4px] cursor-pointer hover:bg-[#5a3358] transition-colors"
                  >
                    <MessageCircle size={18} className="text-neutral-100" />
                    <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-100 text-center">Mensaje a Santi</p>
                  </a>
                  <a 
                    href={WHATSAPP_URL_ELENA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#452746] box-border content-stretch flex flex-row gap-[8px] items-center justify-center overflow-clip px-[32px] py-[10px] relative rounded-[4px] cursor-pointer hover:bg-[#5a3358] transition-colors"
                  >
                    <MessageCircle size={18} className="text-neutral-100" />
                    <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-100 text-center">Mensaje a Elena</p>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div 
        className="basis-0 content-stretch flex flex-col font-['Roboto_Slab',serif] font-light gap-[12px] grow items-center justify-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[28px] md:text-[40px] lg:text-[48px] px-4 z-[5]"
        style={{ opacity, scale, top: '22vh'}}
      >
        <motion.p 
      
          className="relative shrink-0 text-[#faf7fa] text-center"
          style = {{color: '#f5f5f590'}}
          initial={{ opacity: 0, y: -50, scale: 0 }}
          animate={{ opacity: 1, y: 120, scale: 2.5}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >Elena & Santi</motion.p>
        <motion.p 
          className="relative shrink-0 text-neutral-100 text-center"
          initial={{ opacity: 0, y: -50, scale:0 }}
          animate={{ opacity: 0.6, y: 0, scale: 1.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >11-04-2026</motion.p>
      </motion.div>
    </div>
  );
}

function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Cargar imágenes desde Google Apps Script al montar el componente
  useEffect(() => {
    const fetchImages = async () => {
      // Si el ID de carpeta no está configurado, usar imágenes de respaldo
      if (GOOGLE_DRIVE_FOLDER_ID === "TU_FOLDER_ID_AQUI") {
        console.log("Usando imágenes de respaldo - Google Drive no configurado");
        setCarouselImages(FALLBACK_IMAGES);
        setHasError(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getImages&folderId=${GOOGLE_DRIVE_FOLDER_ID}`);
        const data = await response.json();
        
        if (data.success && data.images && data.images.length > 0) {
          setCarouselImages(data.images);
          setHasError(false);
        } else {
          console.log("No se encontraron imágenes, usando imágenes de respaldo");
          setCarouselImages(FALLBACK_IMAGES);
          setHasError(false);
        }
      } catch (error) {
        console.log("Error al cargar imágenes de Google Drive, usando imágenes de respaldo");
        setCarouselImages(FALLBACK_IMAGES);
        setHasError(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    if (carouselImages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    if (carouselImages.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll cada 12 segundos
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 12000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handlePrevClick = () => {
    setIsAutoPlaying(false);
    prevSlide();
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false);
    nextSlide();
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  // Calcular los índices de las imágenes visibles
  const getVisibleImages = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + carouselImages.length) % carouselImages.length;
      images.push({ index, offset: i });
    }
    return images;
  };

  return (
<motion.div
  id="carousel"
  ref={ref}
  style={{
    overflow:'hidden'
  }}
  className="relative w-full py-[80px] md:py-[120px]
             overflow-x-hidden overflow-y-visible
             z-20 -mb-[60px] md:-mb-[100px]
             bg-[#452746] md:bg-gradient-to-b md:from-white md:via-[#faf7fa] md:to-white"
>


      {/* Estado de carga */}
      {isLoading && (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#faf7fa]/20 border-t-[#faf7fa] rounded-full animate-spin" />
            <p className="font-['Roboto_Slab',serif] text-[#452746] text-[18px] md:text-[20px]">
              Cargando fotos...
            </p>
          </div>
        </div>
      )}

      {/* Carrousel - se muestra cuando no está cargando y hay imágenes */}
      {!isLoading && carouselImages.length > 0 && (
        <>
          <div className="relative w-full h-[400px] md:h-[600px]">
            {/* Contenedor de imágenes */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false} mode="popLayout">
                {getVisibleImages().map(({ index, offset }) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{
                      x: `${offset * 100}%`,
                      scale: offset === 0 ? 1 : 0.85,
                      opacity: 1,
                      zIndex: offset === 0 ? 10 : 5,
                    }}
                    animate={{
                      x: `${offset * 100}%`,
                      scale: offset === 0 ? 1 : 0.85,
                      opacity: 1,
                      zIndex: offset === 0 ? 10 : 5,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      width: offset === 0 ? '90%' : '75%',
                      maxWidth: offset === 0 ? '60%' : '100px',
                    }}
                    className="md:block hidden"
                  >
                    <div 
                      className="relative w-full h-[600px] rounded-[16px] overflow-hidden shadow-2xl"
                      style={{
                        filter: offset === 0 ? 'none' : 'brightness(0.7)',
                      }}
                    >
                      <img
                        src={carouselImages[index]}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div 
                      className="absolute inset-0 from-transparent via-transparent to-black/20"/>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Vista móvil */}
               <div className="md:hidden relative w-full h-[400px] flex items-center justify-center"
               style={{
                width:'80%'
               }}>
  <AnimatePresence initial={false} mode="popLayout">
    {getVisibleImages().map(({ index, offset }) => (
      <motion.div
        key={index}
        className="absolute"
        initial={{
          x: `${offset * 90}%`,
          scale: offset === 0 ? 1 : 0.8,
          opacity: offset === 0 ? 1 : 0.5,
          zIndex: offset === 0 ? 10 : 5,
        }}
        animate={{
          x: `${offset * 90}%`,
          scale: offset === 0 ? 1 : 0.8,
          opacity: offset === 0 ? 1 : 0.5,
          zIndex: offset === 0 ? 10 : 5,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: offset === 0 ? '100%' : '80%',
          height: '90%',
        }}
      >
        <div 
          className="relative w-full h-full rounded-[12px] overflow-hidden shadow-xl"
          style={{
            filter: offset === 0 ? 'none' : 'brightness(0.6)',
          }}
        >
          <img
            src={carouselImages[index]}
            alt={`Foto ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

            </div>

            {/* Botones de navegación */}
            <motion.button
              onClick={handlePrevClick}
              className="absolute left-[10px] md:left-[40px] top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#452746]" />
            </motion.button>

            <motion.button
              onClick={handleNextClick}
              className="absolute right-[10px] md:right-[40px] top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#452746]" />
            </motion.button>

            {/* Indicadores de posición */}
            <div style={{
    top: window.innerWidth >= 768 ? '620px' : '400px',
  }} className="absolute left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    goToSlide(index);
                  }}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir a foto ${index + 1}`}
                >
                  <motion.div
                    className="rounded-full"
                    animate={{
                      width: currentIndex === index ? '32px' : '8px',
                      height: '8px',
                      backgroundColor: currentIndex === index ? '#faf7fa' : 'rgba(100, 100, 100, 0.7)',
                    }}
                 
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Texto decorativo */}
          <motion.div
            className="text-center mt-[40px] md:mt-[40px] px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-['Roboto_Slab',serif] font-light italic text-neutral-100 text-[32px] md:text-[44px] lg:text-[50px]">
              Nuestros momentos
            </p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ermita+de+la+Virgen+del+Puerto&destination_place_id=ChIJFZMU8HQoQg0REkK5D53WAU4";

function CeremonySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  const handleNavigate = () => {
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      id="ceremonia"
      ref={ref} 
      className="box-border content-stretch flex flex-col gap-[40px] md:gap-[120px] min-h-[100vh] items-center overflow-clip pb-[40px] md:pb-[20px] pt-[40px] md:pt-[60px] px-0 relative shrink-0 w-full"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <motion.img 
          alt="" 
          className="absolute max-w-none object-50%-50% object-cover size-full opacity-40" 
          src={imgFrame3}
          style={{ scale: imageScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      <div className="bg-gradient-to-b from-[#f5f5f5] relative shrink-0 to-[rgba(245,245,245,0)] w-full z-10">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[30px] md:px-[60px] lg:px-[120px] xl:px-[180px] py-[60px] md:py-[160px] relative w-full">
            <motion.div 
              className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full"
              style={{ y: titleY, opacity: titleOpacity }}
            >
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full">
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[18px] md:text-[24px] lg:text-[28px] text-black text-center px-4">{``}</p>
                </div>
                <p className="font-['Roboto_Slab',serif] font-light italic leading-[normal] relative shrink-0 text-[#452746] text-[52px] md:text-[78px] lg:text-[100px] text-center px-4">La ceremonia</p>
              </div>
            </motion.div>
            <motion.div 
              className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[15px] md:text-[18px] lg:text-[20px] text-black text-center px-4">
                <p className="mb-0">que tendrá lugar en la Ermita de Virgen del Puerto.</p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">P.º de la Virgen del Puerto, 4, Centro, 28013 Madrid.</p>
              </div>
            </motion.div>
       
          </div>
        </div>
      </div>
      <motion.div 
        className="h-[350px] md:h-[550px] overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[calc(100%-40px)] md:w-[calc(100%-120px)] lg:w-[calc(100%-240px)] z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(GOOGLE_MAPS_ADDRESS)}&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[12px]"
        />
      </motion.div>
      <motion.button
        onClick={handleNavigate}
        style={{
          width: '50vw',
          height: 'auto',
          padding: '20px 40px'
        }}
        className="bg-[#452746] box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[32px] py-[10px] md:py-[12px] relative rounded-[4px] shrink-0 z-10 cursor-pointer"
        whileHover={{ scale: 1.05, backgroundColor: "#5a3358" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] text-neutral-100 text-center whitespace-nowrap">Navega hasta allí</p>
      </motion.button>
    </div>
  );
}

function RSVPForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    celiac: false,
    vegetarian: false,
    lactoseIntolerant: false,
    noPreferences: false,
    songSuggestion: "",
  });

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          celiac: formData.celiac,
          vegetarian: formData.vegetarian,
          lactoseIntolerant: formData.lactoseIntolerant,
          noPreferences: formData.noPreferences,
          songSuggestion: formData.songSuggestion,
          timestamp: new Date().toISOString(),
        }),
      });

      // Con mode: "no-cors", no podemos leer la respuesta, pero asumimos que fue exitoso
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast.success("¡Gracias por confirmar tu asistencia!");
      
    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        ref={ref}
        id="rsvp"
        className="relative shrink-0 w-full mt-[0px] md:mt-[0px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-end px-[30px] md:px-[60px] lg:px-[120px] py-[100px] md:py-[200px] relative w-full">
            <motion.div 
              className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[24px] md:text-[32px] lg:text-[38px] text-black text-center px-4">Gracias por confirmar tu asistencia</p>
              <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black/70 text-center px-4 mt-2">¡Te enviaremos un correo de confirmación en breve!</p>
            </motion.div>
            <motion.div 
              className="content-stretch flex flex-col items-center relative shrink-0 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-['Roboto_Slab',serif] font-light italic leading-[normal] relative shrink-0 text-[#452746] text-[60px] md:text-[90px] lg:text-[120px] text-center px-4">¡Te esperamos!</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form ref={ref} id="rsvp" className="relative shrink-0 w-full mt-0 md:mt-0" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-end px-[30px] md:px-[60px] lg:px-[120px] xl:px-[180px] py-[80px] md:py-[100px] relative w-full">
          <motion.div 
            className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <p className="font-['Roboto_Slab',serif] font-light italic leading-[normal] relative shrink-0 text-[#452746] text-[64px] md:text-[100px] lg:text-[130px] text-center px-4">¿Vendrás?</p>
              <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full">
                <p className="font-['Roboto_Slab',serif] font-light leading-[normal] relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black text-center w-full px-4">
                  <span>{`Déjanos aquí tus preferencias `}</span>
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">para que todo vaya de lujo.</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip p-[24px] md:p-[36px] lg:p-[48px] relative rounded-[12px] shadow-lg shrink-0 w-full max-w-[700px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-[12px] w-full">
              <motion.div 
                className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(69, 39, 70, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="box-border content-stretch flex gap-[8px] items-center px-[14px] md:px-[16px] py-[10px] md:py-[12px] relative w-full bg-transparent border-none outline-none font-['Roboto_Slab',serif] font-light leading-[normal] not-italic text-[15px] md:text-[16px] lg:text-[17px] text-black placeholder:text-black/50"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(69, 39, 70, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="email"
                    placeholder="Tu mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="box-border content-stretch flex gap-[8px] items-center px-[14px] md:px-[16px] py-[10px] md:py-[12px] relative w-full bg-transparent border-none outline-none font-['Roboto_Slab',serif] font-light leading-[normal] not-italic text-[15px] md:text-[16px] lg:text-[17px] text-black placeholder:text-black/50"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(69, 39, 70, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="box-border content-stretch flex gap-[8px] items-center px-[14px] md:px-[16px] py-[10px] md:py-[12px] relative w-full bg-transparent border-none outline-none font-['Roboto_Slab',serif] font-light leading-[normal] not-italic text-[15px] md:text-[16px] lg:text-[17px] text-black placeholder:text-black/50"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-[12px] w-full">
              <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative rounded-[6px] shrink-0">
                <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black">
                  <span>{`Marca la casilla `}</span>
                  <span className="[text-underline-position:from-font] decoration-solid underline">con tus preferencias</span>
                </p>
              </div>
              <motion.div 
                className="content-stretch flex gap-[12px] items-center relative shrink-0 cursor-pointer"
                onClick={() => setFormData({ ...formData, celiac: !formData.celiac })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative rounded-[4px] shrink-0 size-[22px] md:size-[24px]"
                  animate={{ backgroundColor: formData.celiac ? "#452746" : "#f5f5f5" }}
                  transition={{ duration: 0.3 }}
                >
                  <div aria-hidden="true" className="absolute border-3 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[5px]" />
                </motion.div>
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] md:px-[14px] py-[8px] md:py-[10px] relative rounded-[6px] shrink-0">
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black whitespace-nowrap">Dieta Celiaca</p>
                </div>
              </motion.div>
              <motion.div 
                className="content-stretch flex gap-[12px] items-center relative shrink-0 cursor-pointer"
                onClick={() => setFormData({ ...formData, vegetarian: !formData.vegetarian })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative rounded-[4px] shrink-0 size-[22px] md:size-[24px]"
                  animate={{ backgroundColor: formData.vegetarian ? "#452746" : "#f5f5f5" }}
                  transition={{ duration: 0.3 }}
                >
                  <div aria-hidden="true" className="absolute border-3 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[5px]" />
                </motion.div>
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] md:px-[14px] py-[8px] md:py-[10px] relative rounded-[6px] shrink-0">
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black whitespace-nowrap">Dieta Vegetariana</p>
                </div>
              </motion.div>
              <motion.div 
                className="content-stretch flex gap-[12px] items-center relative shrink-0 cursor-pointer"
                onClick={() => setFormData({ ...formData, lactoseIntolerant: !formData.lactoseIntolerant })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative rounded-[4px] shrink-0 size-[22px] md:size-[24px]"
                  animate={{ backgroundColor: formData.lactoseIntolerant ? "#452746" : "#f5f5f5" }}
                  transition={{ duration: 0.3 }}
                >
                  <div aria-hidden="true" className="absolute border-3 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[5px]" />
                </motion.div>
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] md:px-[14px] py-[8px] md:py-[10px] relative rounded-[6px] shrink-0">
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black whitespace-nowrap">Intolerancia a la lactosa</p>
                </div>
              </motion.div>
              <motion.div 
                className="content-stretch flex gap-[12px] items-center relative shrink-0 cursor-pointer"
                onClick={() => setFormData({ ...formData, noPreferences: !formData.noPreferences })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative rounded-[4px] shrink-0 size-[22px] md:size-[24px]"
                  animate={{ backgroundColor: formData.noPreferences ? "#452746" : "#f5f5f5" }}
                  transition={{ duration: 0.3 }}
                >
                  <div aria-hidden="true" className="absolute border-3 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[5px]" />
                </motion.div>
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] md:px-[14px] py-[8px] md:py-[10px] relative rounded-[6px] shrink-0">
                  <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black whitespace-nowrap">Sin preferencias</p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-[12px] w-full">
              <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative rounded-[6px] shrink-0">
                <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] lg:text-[17px] text-black">
                  <span>{`Sugerencia de canción `}</span>
                  <span className="[text-underline-position:from-font] decoration-solid underline">para la ceremonia</span>
                  <span className="text-black/50 italic ml-1">(Opcional)</span>
                </p>
              </div>
              <motion.div 
                className="bg-neutral-50 relative rounded-[6px] shrink-0 w-full"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(69, 39, 70, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    placeholder="Nombre de la canción"
                    value={formData.songSuggestion}
                    onChange={(e) => setFormData({ ...formData, songSuggestion: e.target.value })}
                    className="box-border content-stretch flex gap-[8px] items-center px-[14px] md:px-[16px] py-[10px] md:py-[12px] relative w-full bg-transparent border-none outline-none font-['Roboto_Slab',serif] font-light leading-[normal] not-italic text-[15px] md:text-[16px] lg:text-[17px] text-black placeholder:text-black/50"
                  />
                </div>
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#452746] relative rounded-[4px] shrink-0 w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? "#452746" : "#5a3358" }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[32px] py-[10px] md:py-[12px] relative w-full">
                  <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[15px] md:text-[16px] text-neutral-100 text-nowrap whitespace-pre">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </p>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <motion.div 
      className="bg-[#fcfcfc] box-border content-stretch flex items-center justify-center px-[30px] md:px-[60px] py-[20px] relative shrink-0 w-full mt-[40px] md:mt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0">
        <p className="font-['Roboto_Slab',serif] font-light leading-[normal] not-italic relative shrink-0 text-[24px] md:text-[28px] text-black text-center">E&S 2026</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white">
      <AnimatedHeader />
      <PhotoCarousel />
      <CeremonySection />
      <RSVPForm />
      <Footer />
    </div>
  );
}