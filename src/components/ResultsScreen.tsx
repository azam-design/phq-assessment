import svgPaths from "../imports/svg-3xbs1pxtax";
import imgUntitledDesign323 from "figma:asset/d584a1d4bfa4613a70f670a091e9ebba693ac2a4.png";

interface ResultsScreenProps {
  score: number;
  severity: string;
}

function TimeDate() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[128px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#171d1b] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">9:30</p>
      </div>
    </div>
  );
}

function Wifi() {
  return (
    <div className="mr-[-2px] relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2d055200} fill="var(--fill-0, #171D1B)" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="mr-[-2px] relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2e7699c0} fill="var(--fill-0, #171D1B)" />
        </g>
      </svg>
    </div>
  );
}

function WiFiNetwork() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[2px] py-0 relative shrink-0">
      <Wifi />
      <Signal />
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2d647c00} fill="var(--fill-0, #171D1B)" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[52px] items-center relative shrink-0">
      <Battery />
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <WiFiNetwork />
      <Battery1 />
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute left-1/2 size-[24px] top-[8px] translate-x-[-50%]">
      <div className="absolute bg-[#2e2e2e] left-1/2 rounded-[100px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </div>
  );
}

function Status() {
  return (
    <div className="absolute box-border content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[390px]">
      <TimeDate />
      <StatusIcons />
      <Camera />
    </div>
  );
}

function IconTasks() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute bg-[#666666] inset-1/4 rounded-[1px]" />
    </div>
  );
}

function IconHome() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g>
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
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2f9d9cc0} fill="var(--fill-0, #666666)" />
        </g>
      </svg>
    </div>
  );
}

function ComponentHomeIndicator() {
  return (
    <div className="absolute box-border content-stretch flex gap-[58px] items-center justify-center left-1/2 overflow-clip p-[11px] top-[822px] translate-x-[-50%] w-[390px]">
      <IconTasks />
      <IconHome />
      <IconBack />
    </div>
  );
}

export default function ResultsScreen({ score, severity }: ResultsScreenProps) {
  const getSeverityColor = () => {
    if (score <= 4) return "#10b981"; // green
    if (score <= 9) return "#3b82f6"; // blue
    if (score <= 14) return "#f59e0b"; // amber
    if (score <= 19) return "#f97316"; // orange
    return "#ef4444"; // red
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full">
      <div className="absolute bg-gradient-to-r from-[#ddd6fe] from-[2.668%] h-[251px] left-0 to-[#cabfff] to-[98.596%] top-0 w-[390px]" />
      <div className="absolute h-[241px] left-[-54px] opacity-30 top-[10px] w-[455px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[312.58%] left-[-6.2%] max-w-none top-[-122.68%] w-[233.33%]" src={imgUntitledDesign323} />
        </div>
      </div>
      <div className="absolute h-[230px] left-[calc(25%+8.5px)] top-[-6px] w-[314px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[241.72%] left-[-137.75%] max-w-none top-[-13.45%] w-[249%]" src={imgUntitledDesign323} />
        </div>
      </div>
      <Status />
      <ComponentHomeIndicator />

      {/* Results Card */}
      <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+0.5px)] px-[32px] py-[32px] top-[200px] translate-x-[-50%] w-[358px] bg-white rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]">
        {/* Score circle */}
        <div className="flex flex-col items-center gap-[12px]">
          <div 
            className="flex items-center justify-center size-[120px] rounded-full"
            style={{ backgroundColor: `${getSeverityColor()}20`, border: `3px solid ${getSeverityColor()}` }}
          >
            <div className="flex flex-col items-center">
              <p className="font-['DM_Sans:Bold',sans-serif] text-[48px] leading-[56px]" style={{ color: getSeverityColor() }}>
                {score}
              </p>
              <p className="font-['DM_Sans:Medium',sans-serif] text-[14px] text-[#5f5f5f] leading-[20px]">
                out of 27
              </p>
            </div>
          </div>
        </div>

        {/* Severity label */}
        <div className="flex flex-col items-center gap-[8px]">
          <div 
            className="px-[16px] py-[6px] rounded-[100px]"
            style={{ backgroundColor: `${getSeverityColor()}20` }}
          >
            <p 
              className="font-['DM_Sans:SemiBold',sans-serif] text-[14px] leading-[20px]"
              style={{ color: getSeverityColor() }}
            >
              {severity}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#323232] text-[20px] w-full text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[28px]">Assessment Complete</p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[14px] w-full text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[22px]">
              Your PHQ-9 score indicates {severity.toLowerCase()}. This screening tool is not a diagnosis.
            </p>
          </div>
        </div>
      </div>

      {/* Important notice */}
      <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[16px] px-[20px] py-[16px] top-[560px] w-[358px] bg-[#fef3c7] border-[2px] border-solid border-[#fbbf24] rounded-[12px]">
        <div className="flex items-start gap-[12px] w-full">
          <div className="shrink-0 mt-[2px]">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z" fill="#f59e0b"/>
            </svg>
          </div>
          <div className="flex flex-col flex-1">
            <p className="font-['DM_Sans:SemiBold',sans-serif] text-[14px] text-[#92400e] leading-[20px]">
              Important Notice
            </p>
            <p className="font-['DM_Sans:Regular',sans-serif] text-[13px] text-[#92400e] leading-[18px]">
              Please consult with a healthcare professional for proper evaluation and treatment recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="absolute bg-violet-600 box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 p-[12px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] top-[720px] translate-x-[-50%] w-[358px] cursor-pointer hover:bg-[#6d28d9] transition-colors">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Find Resources
        </p>
      </div>
    </div>
  );
}
