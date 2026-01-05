'use client';

interface ProjectHeaderProps {
  clientLogo?: string;
  clientName: string;
  title: string;
}

export default function ProjectHeader({
  clientLogo,
  clientName,
  title
}: ProjectHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-8">
      {/* Client Logo */}
      {clientLogo && (
        <div className="mb-8 flex justify-center">
          <img
            src={clientLogo}
            alt={`${clientName} logo`}
            className="max-w-xs max-h-32 w-auto h-auto object-contain"
          />
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
    </div>
  );
}
