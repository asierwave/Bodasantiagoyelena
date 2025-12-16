import imgFrame2 from "figma:asset/ba2569d1aa3effa6179d2bd463c121f6c7928d4f.png";
import imgMapMakerSilver from "figma:asset/a88fcf0c665b88fe04f6f097fe8eb5b563d79e51.png";
import imgFrame3 from "figma:asset/06f492bf9cf2e2abba2d5b4ae86aff3572851f51.png";

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">{`~S & L~`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-center relative shrink-0">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">La ceremonia</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-center relative shrink-0">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">Confirma tu asistencia</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[80px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Contacta con los novios</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f5eff5] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[24px] relative w-full">
          <Frame7 />
          <Frame9 />
          <Frame10 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Migra_Italic:Extralight_Italic',sans-serif] gap-[16px] grow italic items-center justify-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[100px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#faf7fa]">{`~Santiago & Laura~`}</p>
      <p className="relative shrink-0 text-neutral-100">12-07-2025</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1080px] items-center justify-between overflow-clip pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(242,221,242,0.28)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2} />
      </div>
      <Frame19 />
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[80px] text-black text-center text-nowrap whitespace-pre">{`Os queremos invtar a `}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame12 />
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#452746] text-[240px] text-nowrap whitespace-pre">La ceremonia</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">que tendrá lugar en la Ermita de Virgen del Puerto.</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Paseo de la Virgen del Puerto 32. Madrid 28005.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[80px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Navegar hasta allí</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] relative shrink-0 to-[rgba(245,245,245,0)] w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[320px] relative w-full">
          <Frame21 />
          <Frame11 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[80px] items-start left-0 overflow-clip rounded-[16px] top-0">
      <div className="relative shrink-0 size-[1919px]" data-name="🌎 Map Maker:  (Silver)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMapMakerSilver} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[693px] overflow-clip relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[40px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Navega hasta allí</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[240px] h-[1893px] items-center overflow-clip pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame3} />
        <div className="absolute inset-0" />
      </div>
      <Frame23 />
      <Frame16 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[0px] text-[40px] text-black text-center w-full">
        <span>{`Déjanos aquí tus preferencias `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">para que todo vaya de lujo.</span>
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#452746] text-[240px] text-nowrap whitespace-pre">¿Vendrás?</p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-neutral-50 relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Tu nombre</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-neutral-50 relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Tu mail</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-neutral-50 relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Tu teléfono</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start px-0 py-[16px] relative shrink-0 w-[381px]">
      <Frame3 />
      <Frame6 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-0 py-[16px] relative rounded-[8px] shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">
        <span>{`Marca la casilla `}</span>
        <span className="[text-underline-position:from-font] decoration-solid underline">con tus preferencias</span>
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#452746] relative rounded-[4px] shrink-0 size-[35.5px]">
      <div aria-hidden="true" className="absolute border-4 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[8px] shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Dieta Celiaca</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#452746] relative rounded-[4px] shrink-0 size-[35.5px]">
      <div aria-hidden="true" className="absolute border-4 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[8px] shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Dieta Vegetariana</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-end relative shrink-0">
      <Frame30 />
      <Frame33 />
      <Frame36 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-center pb-0 pt-[40px] px-[80px] relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame14 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#452746] relative rounded-[4px] shrink-0 size-[35.5px]">
      <div aria-hidden="true" className="absolute border-4 border-neutral-50 border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[8px] shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre">Marca esta casilla si traerás algún invitado</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(245,245,245,0.28)] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[80px] py-[40px] relative w-full">
          <Frame37 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#452746] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[40px] py-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Enviar</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0">
      <Frame17 />
      <Frame20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-end px-[40px] py-[400px] relative w-full">
          <Frame27 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">{`~S & L~ 2026`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center justify-between px-[40px] py-[24px] relative shrink-0 w-[1840px]">
      <Frame41 />
    </div>
  );
}

export default function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame1 />
      <Frame4 />
      <Frame />
      <Frame42 />
    </div>
  );
}