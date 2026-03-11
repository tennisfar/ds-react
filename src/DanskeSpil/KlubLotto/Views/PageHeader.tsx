export const PageHeader = ({ children }: { children: any }) => {
  const html = `
<div data-component="PageHeader" class="group w-full" data-tracking="PageHeader">
  <div
    class="relative w-full min-h-50 -mt-[2rem] mx-[auto] mb-28 pt-12 px-20 pb-6 flex items-center justify-center hover:no-underline"
  >
    <div class="text-[#1A1A1A] text-center text-[2.4rem] italic font-bold leading-[1.1] tracking-[-0.48px]">
      ${children}
    </div>
  </div>
</div>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
