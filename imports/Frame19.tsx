import imgFrame2 from "figma:asset/ba2569d1aa3effa6179d2bd463c121f6c7928d4f.png";
import imgMapMakerSilver from "figma:asset/a88fcf0c665b88fe04f6f097fe8eb5b563d79e51.png";
import imgFrame3 from "figma:asset/06f492bf9cf2e2abba2d5b4ae86aff3572851f51.png";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">{`~S & L~`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-center relative shrink-0">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">La ceremonia</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-center relative shrink-0">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-nowrap whitespace-pre">Confirma tu asistencia</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[80px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Contacta con los novios</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5eff5] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[24px] relative w-full">
          <Frame6 />
          <Frame8 />
          <Frame9 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
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
      <Frame12 />
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[80px] text-black text-center text-nowrap whitespace-pre">{`Os queremos invtar a `}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame11 />
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#452746] text-[240px] text-nowrap whitespace-pre">La ceremonia</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[40px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">que tendrá lugar en la Ermita de Virgen del Puerto.</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Paseo de la Virgen del Puerto 32. Madrid 28005.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[80px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Navegar hasta allí</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] relative shrink-0 to-[rgba(245,245,245,0)] w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[320px] relative w-full">
          <Frame13 />
          <Frame10 />
          <Frame5 />
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

function Frame15() {
  return (
    <div className="h-[693px] overflow-clip relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#452746] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[40px] py-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-neutral-100 text-nowrap whitespace-pre">Navega hasta allí</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[240px] h-[1893px] items-center overflow-clip pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame3} />
        <div className="absolute inset-0" />
      </div>
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[80px] text-black text-center text-nowrap whitespace-pre">Gracias por confirmar tu asistencia</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['Migra_Italic:Extralight_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#452746] text-[240px] text-nowrap whitespace-pre">¡Te esperamos!</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-end px-[40px] py-[400px] relative w-full">
          <Frame18 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <p className="font-['Migra:Extralight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-black text-nowrap whitespace-pre">{`~S & L~ 2026`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center justify-between px-[40px] py-[24px] relative shrink-0 w-[1840px]">
      <Frame21 />
    </div>
  );
}

export default function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame1 />
      <Frame3 />
      <Frame />
      <Frame22 />
    </div>
  );
}