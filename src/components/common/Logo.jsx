export default function Logo() {
  return (
    <div className="flex items-center gap-2" data-testid="brand-logo">
        <div className="relative">
        <div className="w-9 h-9 rounded-2xl bg-[#FF2A5F] flex items-center justify-center rotate-[-8deg]">
        <span className="font-display text-white text-lg leading-none">i</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFB800]" />
        </div>
        <span className="font-display text-xl tracking-tight">
        invita<span className="text-[#FF2A5F]">mx</span>
        </span>
    </div>
   
  );
}