export function PageHeader({ title }: { title: string }) {
  return (
    <div data-component="PageHeader" className="group w-full" data-tracking="PageHeader">
      <div className="relative w-full min-h-50 -mt-[2rem] mx-[auto] mb-28 pt-12 px-20 pb-6 flex items-center justify-center hover:no-underline">
        <div className="text-center text-[2.4rem] italic font-bold leading-[1.1] tracking-[-0.48px] text-[#1A1A1A]">
          {title}
        </div>
      </div>
    </div>
  );
}
