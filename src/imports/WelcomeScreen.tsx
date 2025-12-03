import svgPaths from "./svg-3xbs1pxtax";
import imgUntitledDesign323 from "figma:asset/d584a1d4bfa4613a70f670a091e9ebba693ac2a4.png";

function TimeDate() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[128px]" data-name="Time & Date">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#171d1b] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">9:30</p>
      </div>
    </div>
  );
}

function Wifi() {
  return (
    <div className="mr-[-2px] relative shrink-0 size-[16px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Wifi">
          <path d={svgPaths.p2d055200} fill="var(--fill-0, #171D1B)" id="signal" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="mr-[-2px] relative shrink-0 size-[16px]" data-name="Signal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Signal">
          <path d={svgPaths.p2e7699c0} fill="var(--fill-0, #171D1B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WiFiNetwork() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[2px] py-0 relative shrink-0" data-name="Wi-Fi Network">
      <Wifi />
      <Signal />
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Battery">
          <path d={svgPaths.p2d647c00} fill="var(--fill-0, #171D1B)" id="Base" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[52px] items-center relative shrink-0" data-name="Battery">
      <Battery />
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Status Icons">
      <WiFiNetwork />
      <Battery1 />
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute left-1/2 size-[24px] top-[8px] translate-x-[-50%]" data-name="Camera">
      <div className="absolute bg-[#2e2e2e] left-1/2 rounded-[100px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Camera" />
    </div>
  );
}

function Status() {
  return (
    <div className="absolute box-border content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[390px]" data-name="Status">
      <TimeDate />
      <StatusIcons />
      <Camera />
    </div>
  );
}

function IconTasks() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / tasks">
      <div className="absolute bg-[#666666] inset-1/4 rounded-[1px]" data-name="fill" />
    </div>
  );
}

function IconHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / home">
          <g id="fill">
            <path d={svgPaths.p3c6311f0} fill="var(--fill-0, #666666)" />
            <path clipRule="evenodd" d={svgPaths.p1d743df2} fill="var(--fill-0, #666666)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / back">
          <path d={svgPaths.p2f9d9cc0} fill="var(--fill-0, #666666)" id="fill" />
        </g>
      </svg>
    </div>
  );
}

function ComponentHomeIndicator() {
  return (
    <div className="absolute box-border content-stretch flex gap-[58px] items-center justify-center left-1/2 overflow-clip p-[11px] top-[822px] translate-x-[-50%] w-[390px]" data-name="Component / Home Indicator">
      <IconTasks />
      <IconHome />
      <IconBack />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[56.217px] left-px top-[40px] w-[389px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 389 57">
        <g id="Frame 1695">
          <path d={svgPaths.p3d4f0680} fill="var(--fill-0, #424242)" id="arrow_back" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[25.909px] left-[6px] top-[7px] w-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="Group 302">
          <path d={svgPaths.pcf8f500} fill="var(--fill-0, #5F5F5F)" id="Vector 1 (Stroke)" />
          <path d={svgPaths.p21676700} fill="var(--fill-0, #5F5F5F)" id="Ellipse 5 (Stroke)" />
          <path d={svgPaths.p4269c00} fill="var(--fill-0, #5F5F5F)" id="Ellipse 6" />
          <path d={svgPaths.p28da0200} fill="var(--fill-0, #5F5F5F)" id="Ellipse 7" />
        </g>
      </svg>
    </div>
  );
}

function IconGrid() {
  return (
    <div className="bg-violet-100 overflow-clip relative rounded-[200px] shrink-0 size-[40px]" data-name="Icon-grid">
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#323232] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{`Share how you've been feeling lately`}</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22px]">{`Just 2-3 minutes of reflection `}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <IconGrid />
      <Frame4 />
    </div>
  );
}

function DeviceMobileCamera() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="DeviceMobileCamera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="DeviceMobileCamera">
          <path d={svgPaths.p297f7480} fill="var(--fill-0, #5F5F5F)" id="Vector" />
          <g id="Waveform">
            <path d={svgPaths.p18d4bc80} fill="var(--fill-0, #5F5F5F)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGrid1() {
  return (
    <div className="bg-violet-100 overflow-clip relative rounded-[200px] shrink-0 size-[40px]" data-name="Icon-grid">
      <DeviceMobileCamera />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#323232] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Let us listen to your emotional patterns</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22px]">Less than 2 minutes of speaking naturally</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <IconGrid1 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-px px-[16px] py-[24px] top-[422px] w-[389px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] items-start left-[calc(50%+0.5px)] px-[16px] py-[32px] top-[251px] translate-x-[-50%] w-[389px]">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323232] text-[28px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[36px]">Your wellness journey begins here</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[18px] w-full">
        <p className="leading-[28px]">Assessment will occur in two phases</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-violet-600 box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 p-[12px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] top-[738px] translate-x-[-50%] w-[358px]" data-name="Button">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`I'm Ready to Start`}</p>
    </div>
  );
}

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Welcome Screen">
      <div className="absolute bg-gradient-to-r from-[#ddd6fe] from-[2.668%] h-[251px] left-0 to-[#cabfff] to-[98.596%] top-0 w-[390px]" />
      <div className="absolute h-[241px] left-[-54px] opacity-30 top-[10px] w-[455px]" data-name="Untitled design (32) 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[312.58%] left-[-6.2%] max-w-none top-[-122.68%] w-[233.33%]" src={imgUntitledDesign323} />
        </div>
      </div>
      <div className="absolute h-[230px] left-[calc(25%+8.5px)] top-[-6px] w-[314px]" data-name="Untitled design (32) 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[241.72%] left-[-137.75%] max-w-none top-[-13.45%] w-[249%]" src={imgUntitledDesign323} />
        </div>
      </div>
      <Status />
      <ComponentHomeIndicator />
      <Frame />
      <Frame3 />
      <Frame5 />
      <button onClick={onStart} className="absolute bg-violet-600 box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 p-[12px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] top-[738px] translate-x-[-50%] w-[358px] cursor-pointer hover:bg-[#6d28d9] transition-colors" data-name="Button">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`I'm Ready to Start`}</p>
      </button>
    </div>
  );
}