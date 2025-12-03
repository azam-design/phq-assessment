import svgPaths from "../imports/svg-3xbs1pxtax";

interface QuestionScreenProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  selectedAnswer: number;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
  canGoBack: boolean;
  onBackToWelcome: () => void;
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

const answerOptions = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 }
];

export default function QuestionScreen({
  questionNumber,
  totalQuestions,
  questionText,
  selectedAnswer,
  onAnswer,
  onNext,
  onBack,
  canGoBack,
  onBackToWelcome
}: QuestionScreenProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full">
      <Status />
      <ComponentHomeIndicator />
      
      {/* Navigation Bar - PHQ-8 with back arrow */}
      <div className="absolute box-border flex items-center gap-[8px] left-[16px] top-[56px]">
        <button
          onClick={questionNumber === 1 ? onBackToWelcome : onBack}
          className="flex items-center justify-center size-[24px]"
          aria-label="Go back"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#374151" />
          </svg>
        </button>
        <p className="font-['DM_Sans:Medium',sans-serif] text-[20px] text-[#374151] leading-[28px]">
          PHQ-9
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute left-[16px] top-[108px] w-[358px]">
        <div className="bg-[#f3f4f6] h-[6px] rounded-[100px] w-full overflow-hidden">
          <div 
            className="bg-[#7C3AED] h-full rounded-[100px] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question counter */}
      <div className="absolute left-[16px] top-[130px]">
        <p className="font-['DM_Sans:Medium',sans-serif] text-[14px] text-[#5f5f5f]">
          {questionNumber} of {totalQuestions}
        </p>
      </div>

      {/* Question text */}
      <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-[16px] px-0 py-0 top-[168px] w-[358px]">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22px]">{questionNumber === 10 ? "" : "During the past 2 weeks:"}</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#323232] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[28px]">{questionText}</p>
        </div>
      </div>

      {/* Answer options */}
      <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[16px] px-0 py-0 top-[280px] w-[358px]">
        {answerOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full box-border flex items-center gap-[12px] p-[16px] rounded-[12px] border-[2px] border-solid transition-all ${
              selectedAnswer === option.value
                ? 'bg-[#EDE9FE] border-[#7C3AED]'
                : 'bg-white border-[#e5e7eb] hover:border-[#d1d5db]'
            }`}
          >
            <div className={`size-[20px] rounded-full border-[2px] border-solid flex items-center justify-center shrink-0 ${
              selectedAnswer === option.value
                ? 'border-[#7C3AED]'
                : 'border-[#d1d5db]'
            }`}>
              {selectedAnswer === option.value && (
                <div className="size-[10px] rounded-full bg-[#7C3AED]" />
              )}
            </div>
            <p className={`font-['DM_Sans:Medium',sans-serif] text-[16px] leading-[24px] ${
              selectedAnswer === option.value ? 'text-[#323232]' : 'text-[#5f5f5f]'
            }`}>
              {option.label}
            </p>
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute box-border content-stretch flex gap-[12px] items-center justify-between left-[16px] px-0 py-0 top-[700px] w-[358px]">
        {canGoBack && (
          <button
            onClick={onBack}
            className="box-border flex items-center justify-center px-[24px] py-[12px] rounded-[8px] border-[2px] border-solid border-[#e5e7eb] bg-white hover:bg-[#f9fafb] transition-colors"
          >
            <p className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] text-[#323232] leading-[24px]">
              Back
            </p>
          </button>
        )}
        <button
          onClick={onNext}
          disabled={selectedAnswer === -1}
          className={`flex-1 box-border flex items-center justify-center px-[24px] py-[12px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] transition-all ${
            selectedAnswer === -1
              ? 'bg-[#d1d5db] cursor-not-allowed'
              : 'bg-[#7C3AED] hover:bg-[#6d28d9] cursor-pointer'
          }`}
        >
          <p className={`font-['DM_Sans:SemiBold',sans-serif] text-[16px] leading-[24px] ${
            selectedAnswer === -1 ? 'text-[#9ca3af]' : 'text-white'
          }`}>
            Next
          </p>
        </button>
      </div>
    </div>
  );
}