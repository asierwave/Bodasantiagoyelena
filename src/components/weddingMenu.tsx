import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Heart, Utensils } from 'lucide-react';

// Si tienes una utilidad para unir clases (clsx/cn) úsala, si no, esto funciona nativo:
const WeddingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={setIsOpen}>
      {/* NOTA: He quitado 'font-serif' para que use la letra de tu proyecto.
         He ajustado los bordes y colores para que coincidan con la estética 
         moderna de tus dependencias (Radix).
      */}
      <DropdownMenu.Trigger asChild>
        <button 
          className={`
            group inline-flex items-center gap-2 px-5 py-2.5
            bg-transparent border border-stone-300
            text-stone-800 text-sm font-medium uppercase tracking-wider
            rounded-md hover:bg-stone-50 hover:border-stone-400
            focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2
            transition-all duration-200
            data-[state=open]:bg-stone-100
          `}
          aria-label="Menú de navegación"
        >
          Inicio
          <ChevronDown 
            className={`
              w-4 h-4 text-stone-500 transition-transform duration-200 
              ${isOpen ? 'rotate-180' : ''}
            `} 
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="
            min-w-[180px] bg-white rounded-md p-1 shadow-lg border border-stone-200
            animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2
            z-50 mt-2
          "
          sideOffset={5}
          align="start"
        >
          {/* Opción 1: Ceremonia */}
          <DropdownMenu.Item 
            className="
              group flex items-center gap-2 px-3 py-2.5 rounded-sm
              text-sm text-stone-700 font-medium cursor-pointer outline-none
              hover:bg-stone-100 focus:bg-stone-100 transition-colors
            "
            // onClick={() => navigate('/ceremonia')}
          >
            <Heart className="w-4 h-4 text-stone-400 group-hover:text-rose-400 transition-colors" />
            <span>Ceremonia</span>
          </DropdownMenu.Item>

          {/* Separador sutil */}
          <DropdownMenu.Separator className="h-px bg-stone-100 my-1" />

          {/* Opción 2: Banquete */}
          <DropdownMenu.Item 
            className="
              group flex items-center gap-2 px-3 py-2.5 rounded-sm
              text-sm text-stone-700 font-medium cursor-pointer outline-none
              hover:bg-stone-100 focus:bg-stone-100 transition-colors
            "
            // onClick={() => navigate('/banquete')}
          >
            <Utensils className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
            <span>Banquete</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default WeddingMenu;