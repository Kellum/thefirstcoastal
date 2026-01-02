'use client';

interface ProjectHeaderProps {
  clientLogo?: string;
  clientName: string;
  title: string;
  description: string;
  completedDate?: string;
  projectUrl?: string;
}

export default function ProjectHeader({
  clientLogo,
  clientName,
  title,
  description,
  completedDate,
  projectUrl
}: ProjectHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12">
      {/* Client Logo */}
      {clientLogo && (
        <div className="mb-8 flex justify-center">
          <div className="max-w-xs w-auto max-h-32 bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <img
              src={clientLogo}
              alt={`${clientName} logo`}
              className="max-w-full max-h-20 w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Client Name */}
      <p className="text-sm uppercase tracking-wider text-[#5D878C] font-medium mb-4">
        {clientName}
      </p>

      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#222326] mb-6">
        {title}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
        {description && description.length > 400
          ? `${description.substring(0, 400)}...`
          : description}
      </p>

      {/* Meta Info */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
        {completedDate && (
          <time dateTime={completedDate}>
            Completed {new Date(completedDate).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </time>
        )}
        {projectUrl && completedDate && <span>•</span>}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5D878C] hover:text-[#4A6C70] transition-colors inline-flex items-center gap-1"
          >
            View Live Site
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
