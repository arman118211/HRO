"use client"

import { useMemo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate,Link } from "react-router-dom"
import { Search, CalendarDays, Newspaper, ArrowRight, Filter, Bookmark, Flame, Clock } from "lucide-react"

// Color palette (4 total): amber (primary), white, zinc-900 (headings), zinc-500 (muted).
// Sections: Hero, Featured, Search & Filters, Posts Grid, Newsletter CTA, Pagination.

const POSTS = [
  {
    id: "1",
    type: "news",
    title: "Community Health Camp Reaches 1,200 Villagers",
    excerpt: "Our recent outreach delivered free checkups, medicines, and health education to underserved communities.",
    date: "2025-08-12",
    author: "NGO Staff",
    image: "/community-health-camp.png",
    tags: ["Health", "Outreach"],
    category: "Health",
    featured: true,
    readTime: 5,
  },
  {
    id: "2",
    type: "blog",
    title: "Together, We Can Help People Across Nepal",
    excerpt: "Exploring how collective action and community partnerships are creating lasting change throughout Nepal's diverse regions.",
    date: "2025-08-10",
    author: "HRO Nepal Team",
    image: "/f.png",
    tags: ["Nepal", "Community", "Partnership"],
    category: "Community",
    featured: false,
    readTime: 6,
  },
  {
    id: "3",
    type: "blog",
    title: "Education for Every Child, A Brighter Tomorrow",
    excerpt: "Breaking down barriers to education and ensuring every child has access to quality learning opportunities.",
    date: "2025-08-05",
    author: "Education Team",
    image: "/HRO-2-img-v2.png",
    tags: ["Education", "Children", "Future"],
    category: "Education",
    featured: false,
    readTime: 7,
  },
  {
    id: "4",
    type: "news",
    title: "Let's Make a Difference in the Lives of People",
    excerpt: "Recent initiatives showcase how targeted interventions are improving quality of life in underserved communities.",
    date: "2025-08-01",
    author: "Field Coordinators",
    image: "/hro-1-1.png",
    tags: ["Impact", "Lives", "Change"],
    category: "Impact",
    featured: false,
    readTime: 5,
  },
  {
    id: "5",
    type: "blog",
    title: "On a Mission to Solve Problems",
    excerpt: "Our strategic approach to identifying root causes and implementing sustainable solutions in challenging environments.",
    date: "2025-07-28",
    author: "Strategy Team",
    image: "/HRO-2-img-41.png",
    tags: ["Mission", "Solutions", "Strategy"],
    category: "Impact",
    featured: false,
    readTime: 8,
  },
  {
    id: "6",
    type: "blog",
    title: "Transforming Lives Through Compassionate Causes",
    excerpt: "How empathy-driven programs are creating meaningful change in health, education, and community development.",
    date: "2025-07-25",
    author: "Program Directors",
    image: "/hr2.png",
    tags: ["Compassion", "Transformation", "Programs"],
    category: "Health",
    featured: false,
    readTime: 6,
  },
  {
    id: "7",
    type: "news",
    title: "Empowering Futures: Human Relief Organization Nepal's Comprehensive Orphan Support Program",
    excerpt: "Launching a holistic support system providing education, healthcare, and life skills training for orphaned children across Nepal.",
    date: "2025-07-20",
    author: "HRO Nepal",
    image: "/org-1.png",
    tags: ["Orphans", "Support", "Nepal", "Future"],
    category: "Education",
    featured: false,
    readTime: 9,
  },
  {
    id: "8",
    type: "blog",
    title: "Inspiring & Helping: Building Better Lives",
    excerpt: "Stories of hope and transformation as communities work together to overcome challenges and build sustainable futures.",
    date: "2025-07-15",
    author: "Community Liaisons",
    image: "/org-3.png",
    tags: ["Inspiration", "Help", "Better Lives"],
    category: "Community",
    featured: false,
    readTime: 5,
  },
  {
    id: "9",
    type: "news",
    title: "Fundraising for the People's Causes: Empowering Lives with HRO Nepal",
    excerpt: "New fundraising initiatives are expanding our reach and impact, directly empowering communities across Nepal.",
    date: "2025-07-10",
    author: "Fundraising Team",
    image: "/d.png",
    tags: ["Fundraising", "Empowerment", "HRO Nepal"],
    category: "Impact",
    featured: false,
    readTime: 4,
  },
  {
    id: "10",
    type: "blog",
    title: "How Small Acts of Kindness Can Change the World",
    excerpt: "Exploring the ripple effect of individual compassionate actions and how they create waves of positive change.",
    date: "2025-07-05",
    author: "Volunteer Coordinators",
    image: "/cause-15.jpg",
    tags: ["Kindness", "Change", "World", "Compassion"],
    category: "Community",
    featured: false,
    readTime: 6,
  },
  {
    id: "11",
    type: "blog",
    title: "How Clean Water Transforms Education",
    excerpt: "When children aren't walking miles for water, attendance rises and classrooms thrive.",
    date: "2025-07-01",
    author: "Aisha Khan",
    image: "/hr4.png",
    tags: ["Water", "Education"],
    category: "Water",
    featured: false,
    readTime: 6,
  },
  {
    id: "12",
    type: "news",
    title: "Emergency Relief Fund Activated After Floods",
    excerpt: "Rapid response teams are distributing food kits and hygiene supplies in affected regions.",
    date: "2025-06-28",
    author: "NGO Staff",
    image: "/emergency-relief-program-hero-image.png",
    tags: ["Relief", "Disaster"],
    category: "Relief",
    featured: false,
    readTime: 4,
  },
  {
    id: "13",
    type: "blog",
    title: "Empowering Women Entrepreneurs",
    excerpt: "Microgrants and mentorship are helping women start sustainable businesses in rural areas.",
    date: "2025-06-25",
    author: "Priya Sharma",
    image: "/p1.png",
    tags: ["Livelihoods", "Women"],
    category: "Livelihoods",
    featured: false,
    readTime: 7,
  },
  {
    id: "14",
    type: "blog",
    title: "The Power of Local Volunteers",
    excerpt: "Volunteers are the backbone of our programs—learn how they lead change from within.",
    date: "2025-06-09",
    author: "Jonathan Lee",
    image: "/hr5.png",
    tags: ["Community", "Impact"],
    category: "Community",
    featured: false,
    readTime: 5,
  },
  
]

const UNIQUE_CATEGORIES = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))].sort((a, b) =>
  a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b),
)
const TYPES = ["All", "News", "Blog"]

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
          <Icon className="h-5 w-5 text-amber-600" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-pretty text-xl font-semibold text-zinc-900 md:text-2xl">{title}</h2>
          {subtitle ? <p className="text-sm text-zinc-500">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  )
}

function FeaturedCard({ post }) {
  const navigate = useNavigate()
  
  if (!post) return null
  
  const handleReadClick = () => {
    navigate(`/blog/${post.id}`)
  }
  
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-2xl bg-white"
    >
      <div className="relative">
        <img
          src={"https://en-media.thebetterindia.com/uploads/2017/04/Untitled-design9.jpg" || "/placeholder.svg"}
          alt="Featured story visual"
          className="h-64 w-full object-cover sm:h-80 md:h-[22rem] "
        />
      </div>

      <div className="p-5 sm:p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </span>
          <span className="h-1 w-1 rounded-full bg-zinc-500/40" />
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-500/40" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4 text-amber-600" aria-hidden="true" /> {post.readTime} min read
          </span>
        </div>

        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-balance text-2xl font-semibold text-zinc-900 md:text-3xl">{post.title}</h3>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-500/95 px-3 py-1 text-xs font-medium text-white">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Featured
          </span>
        </div>

        <p className="mb-5 text-pretty text-zinc-500">{post.excerpt}</p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                #{t}
              </span>
            ))}
          </div>

          <button
            onClick={handleReadClick}
            className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Read story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function SelectTabs({ value, onChange, options, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{label}</span>
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => {
          const active = value === opt
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={[
                "rounded-full px-3 py-1 text-xs font-medium transition",
                active ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-600 hover:bg-amber-100",
              ].join(" ")}
              aria-pressed={active}
              aria-label={`${label}: ${opt}`}
              type="button"
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SearchAndFilters({ search, setSearch, category, setCategory, type, setType, sort, setSort, total }) {
  return (
    <div className="rounded-xl border border-amber-100 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-amber-200 bg-white px-3 py-2 ">
          <Search className="h-5 w-5 text-amber-600" aria-hidden="true" />
          <label htmlFor="blog-search" className="sr-only">
            Search posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, tags, or summary..."
            className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
            aria-label="Search posts"
          />
          <span className="text-xs text-zinc-500">{total} results</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-2 py-2">
            <Filter className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <SelectTabs value={category} onChange={setCategory} options={UNIQUE_CATEGORIES} label="Category" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-2 py-2">
            <Newspaper className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <SelectTabs value={type} onChange={setType} options={TYPES} label="Type" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-2 py-2">
            <span className="text-sm text-zinc-500">Sort</span>
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-md border border-amber-200 bg-white px-2 py-1 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Sort"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

function PostCard({ post }) {
  const navigate = useNavigate()
  
  const handleReadClick = () => {
    navigate(`/blog/${post.id}`)
  }
  
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl border border-amber-100 bg-white"
    >
      <div className="relative">
        <img
          src={post.image || "/placeholder.svg"}
          alt="Post image"
          className="h-44 w-full object-cover transition duration-300 group-hover:opacity-95 sm:h-48"
        />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-medium text-amber-600">
            <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
            {post.type === "news" ? "News" : "Blog"}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </span>
          <span className="h-1 w-1 rounded-full bg-zinc-500/40" />
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-500/40" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4 text-amber-600" aria-hidden="true" />
            {post.readTime} min
          </span>
        </div>

        <h3 className="mb-1 text-base font-semibold text-zinc-900">
          <button onClick={handleReadClick} className="hover:underline text-left">
            {post.title}
          </button>
        </h3>
        <p className="text-sm text-zinc-500">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-600">
                #{t}
              </span>
            ))}
          </div>
          <button onClick={handleReadClick} className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:underline">
            Read <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function NewsletterCTA() {
  return (
    <section className="overflow-hidden rounded-2xl border border-amber-100 bg-white">
      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:gap-8 sm:p-8">
        <div>
          <h3 className="text-pretty text-2xl font-semibold text-zinc-900">Get impact stories in your inbox</h3>
          <p className="mt-1 text-zinc-500">
            Subscribe to our monthly newsletter for the latest news and field updates.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              const email = data.get("email")
              // eslint-disable-next-line no-alert
              alert(`Subscribed: ${email}`)
              form.reset()
            }}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.org"
              className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:max-w-xs"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="relative">
          <img
            src="/children-reading-newsletter.png"
            alt="Newsletter illustration"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-amber-100 bg-white p-10 text-center">
      <Newspaper className="mb-3 h-8 w-8 text-amber-600" aria-hidden="true" />
      <h4 className="text-lg font-semibold text-zinc-900">No posts found</h4>
      <p className="mt-1 max-w-md text-sm text-zinc-500">
        Try adjusting your search or filters to find relevant stories and updates.
      </p>
    </div>
  )
}

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null
  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-sm text-zinc-900 disabled:opacity-50"
        type="button"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1
        const active = p === page
        return (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={[
              "rounded-lg px-3 py-1.5 text-sm transition",
              active ? "bg-amber-600 text-white" : "border border-amber-200 bg-white text-zinc-900 hover:bg-amber-50",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
            type="button"
          >
            {p}
          </button>
        )
      })}
      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-sm text-zinc-900 disabled:opacity-50"
        type="button"
      >
        Next
      </button>
    </nav>
  )
}

export default function BlogNewsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [type, setType] = useState("All")
  const [sort, setSort] = useState("newest")
  const [page, setPage] = useState(1)
  const pageSize = 6

  const featured = useMemo(() => POSTS.find((p) => p.featured) ?? null, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = POSTS.filter((p) => !p.featured)

    if (category !== "All") list = list.filter((p) => p.category === category)
    if (type !== "All") list = list.filter((p) => (type === "News" ? p.type === "news" : p.type === "blog"))

    if (q) {
      list = list.filter((p) => {
        const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase()
        return hay.includes(q)
      })
    }

    list.sort((a, b) => (sort === "newest" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)))

    return list
  }, [search, category, type, sort])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page])

  useEffect(() => {
    setPage(1)
  }, [search, category, type, sort])

  return (
    <main>
      {/* Hero */}
      <header className="relative overflow-hidden bg-amber-50  mt-12 md:mt-25">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-amber-600">
                <Newspaper className="h-4 w-4" aria-hidden="true" />
                Blog & News
              </div>
              <h1 className="text-balance text-3xl font-bold text-zinc-900 sm:text-4xl">
                Stories of impact and timely updates
              </h1>
              <p className="mt-2 max-w-2xl text-pretty text-zinc-500">
                Follow our work across health, education, water, and livelihoods as we partner with communities.
              </p>
            </div>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Donate
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:py-12">
        {/* Featured */}
        <section className="space-y-4">
          <SectionHeader icon={Flame} title="Featured story" subtitle="A highlight from the field" />
          <FeaturedCard post={featured} />
        </section>

        {/* Search & Filters */}
        <section className="space-y-4">
          <SectionHeader icon={Search} title="Search and filter" subtitle="Find stories by topic, type, or keywords" />
          <SearchAndFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            type={type}
            setType={setType}
            sort={sort}
            setSort={setSort}
            total={filtered.length}
          />
        </section>

        {/* Posts Grid */}
        <section className="space-y-4">
          <SectionHeader icon={CalendarDays} title="Latest posts" subtitle="Browse our most recent updates" />
          {paged.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence initial={false}>
                {paged.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="space-y-4">
          <SectionHeader icon={Bookmark} title="Stay in the loop" subtitle="Monthly newsletter—no spam, ever" />
          <NewsletterCTA />
        </section>

        {/* Pagination */}
        <section className="flex items-center justify-center">
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </section>
      </div>
    </main>
  )
}