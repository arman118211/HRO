// Reusable section header
export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center"
  return (
    <div className={`flex flex-col ${alignClass} gap-3`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          <span className="h-2 w-2 rounded-full bg-foreground" aria-hidden />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-pretty text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}
