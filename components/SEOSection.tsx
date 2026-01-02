'use client';

interface SEOSectionProps {
  seoMetrics?: {
    beforeScreenshot?: any;
    afterScreenshot?: any;
    improvements?: string[];
  };
  beforeUrl?: string;
  afterUrl?: string;
}

export default function SEOSection({ seoMetrics, beforeUrl, afterUrl }: SEOSectionProps) {
  if (!seoMetrics && !beforeUrl && !afterUrl) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">SEO metrics coming soon</p>
      </div>
    );
  }

  const improvements = seoMetrics?.improvements || [];

  return (
    <div className="space-y-12">
      {/* Before & After Comparison */}
      {(beforeUrl || afterUrl) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          {beforeUrl && (
            <div>
              <h3 className="text-lg font-semibold text-[#222326] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold">
                  Before
                </span>
                Before SEO
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <img
                  src={beforeUrl}
                  alt="Before SEO metrics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* After */}
          {afterUrl && (
            <div>
              <h3 className="text-lg font-semibold text-[#222326] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm font-bold">
                  After
                </span>
                After SEO
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <img
                  src={afterUrl}
                  alt="After SEO metrics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Key Improvements */}
      {improvements.length > 0 && (
        <div className="bg-gradient-to-br from-[#F0F4F5] to-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#222326] mb-6 text-center">
            Key Improvements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {improvements.map((improvement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5D878C] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{improvement}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
