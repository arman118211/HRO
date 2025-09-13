export default function TrustLogos() {
  const logos = [
    { src: "/global-partner-logo.png", alt: "Global Partner" },
    { src: "/world-health-logo.png", alt: "World Health" },
    { src: "/education-alliance-logo.png", alt: "Education Alliance" },
    { src: "/relief-coalition-logo.png", alt: "Relief Coalition" },
  ]
  return (
    <section className="py-12">
      <div className="rounded-xl border bg-card p-6">
        <p className="text-center text-sm text-muted-foreground">Trusted by organizations worldwide</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {logos.map((l, i) => (
            <img key={i} src={l.src || "/placeholder.svg"} alt={l.alt} className="mx-auto h-8 w-auto opacity-80" />
          ))}
        </div>
      </div>
    </section>
  )
}
