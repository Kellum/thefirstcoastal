export default function ColorsTest() {
  return (
    <div className="min-h-screen p-12">
      <h1 className="text-4xl font-bold mb-8 text-[#222326]">Color Test Page</h1>

      <div className="space-y-8">
        {/* Coastal Teal */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#222326]">Coastal Teal</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="h-24 bg-[#F0F4F5] flex items-center justify-center text-xs">50</div>
            <div className="h-24 bg-coastal-100 flex items-center justify-center text-xs">100</div>
            <div className="h-24 bg-coastal-300 flex items-center justify-center text-xs text-white">300</div>
            <div className="h-24 bg-[#F0F4F5]0 flex items-center justify-center text-xs text-white">500</div>
            <div className="h-24 bg-coastal-700 flex items-center justify-center text-xs text-white">700</div>
            <div className="h-24 bg-coastal flex items-center justify-center text-xs text-white">DEFAULT</div>
          </div>
        </div>

        {/* Other Colors */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#222326]">Brand Colors</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="h-24 bg-charcoal flex items-center justify-center text-white font-bold">Charcoal</div>
            <div className="h-24 bg-slate-gray flex items-center justify-center text-white font-bold">Slate Gray</div>
            <div className="h-24 bg-sand flex items-center justify-center text-[#222326] font-bold">Sand</div>
            <div className="h-24 bg-cream flex items-center justify-center text-[#222326] font-bold">Cream</div>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#222326]">Button Styles</h2>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
              Primary CTA
            </button>
            <button className="px-8 py-4 bg-sand text-[#222326] rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
              Secondary CTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
