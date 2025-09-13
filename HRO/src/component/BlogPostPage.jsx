import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  CalendarDays, 
  Clock, 
  User, 
  Heart, 
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowRight,
  Tag,
  Eye
} from "lucide-react"

// Sample posts data (same as in BlogNewsPage)
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
  content: `
    <p>In a remarkable display of community outreach, our recent health camp initiative successfully reached over 1,200 villagers across remote regions of Nepal. This comprehensive program brought essential healthcare services directly to communities that often struggle to access basic medical care.</p>
    
    <h2>Breaking Down Healthcare Barriers</h2>
    <p>Many of the villages we visited are located hours away from the nearest healthcare facility. For families living in these remote areas, accessing medical care often means taking time off work, spending money on transportation, and traveling long distances with sick family members.</p>
    
    <p>Our mobile health camps eliminate these barriers by bringing qualified medical professionals, essential medicines, and health education programs directly to the community's doorstep.</p>
    
    <h2>Services Provided</h2>
    <p>Each health camp offered a comprehensive range of services including:</p>
    <ul>
      <li>General health checkups and consultations</li>
      <li>Blood pressure and diabetes screening</li>
      <li>Eye examinations and vision testing</li>
      <li>Vaccination programs for children</li>
      <li>Maternal and child health services</li>
      <li>Distribution of essential medicines</li>
      <li>Health education workshops</li>
    </ul>
    
    <h2>Community Impact</h2>
    <p>The response from community members was overwhelmingly positive. Many participants shared that this was their first comprehensive health checkup in years. Early detection of health issues allowed us to provide immediate treatment and referrals where necessary.</p>
    
    <p>Beyond immediate medical care, our health education sessions empowered community members with knowledge about preventive care, nutrition, and hygiene practices that will benefit them long after our camp concluded.</p>
    
    <h2>Looking Forward</h2>
    <p>The success of this initiative reinforces our commitment to bringing healthcare access to underserved communities. We're already planning follow-up camps and working to establish more permanent healthcare solutions in these regions.</p>
    
    <p>With continued support from our donors and partners, we aim to expand this program to reach even more communities in need. Every person deserves access to quality healthcare, regardless of where they live.</p>
  `
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
    content: `
        <p>Nepal is a land of incredible diversity—from bustling urban centers to the most remote mountain villages. Each community faces unique challenges, but one thing remains constant: when we come together, we can make a lasting impact.</p>
        
        <h2>The Power of Collective Action</h2>
        <p>Lasting change doesn’t happen overnight, and it rarely happens in isolation. By bringing together local leaders, volunteers, and international supporters, we create an ecosystem where everyone contributes to progress.</p>
        
        <p>From clean water initiatives in the Terai to education programs in rural highlands, our projects demonstrate the power of partnerships. Local communities provide knowledge of their unique needs, while organizations and donors bring resources, expertise, and support.</p>
        
        <h2>Stories of Change</h2>
        <ul>
        <li><strong>Water Projects:</strong> Villagers no longer walk for hours to fetch water. This has freed children—especially girls—to attend school more regularly.</li>
        <li><strong>Healthcare Access:</strong> Community-run health posts are reducing preventable diseases and empowering families to seek timely medical care.</li>
        <li><strong>Women’s Empowerment:</strong> Training and microfinance opportunities are giving women tools to start businesses and improve family income.</li>
        </ul>
        
        <h2>Partnerships that Last</h2>
        <p>Our work across Nepal is not about quick fixes. It’s about creating systems that communities can sustain on their own. This is why we invest heavily in training, capacity building, and leadership development.</p>
        
        <p>Partnerships ensure that our projects continue long after the initial support is gone, fostering resilience and independence among the people we serve.</p>
        
        <h2>A Shared Responsibility</h2>
        <p>Whether you’re a local volunteer, an international donor, or simply someone who shares our vision, your involvement matters. Together, we can help people across Nepal build healthier, stronger, and more hopeful futures.</p>
    `
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
    content: `
        <p>Education is the foundation of opportunity. Yet, millions of children across the globe—and far too many in Nepal—are denied access to quality learning because of poverty, gender inequality, or geographic isolation.</p>
        
        <h2>Barriers Children Face</h2>
        <p>Many children in rural areas must walk hours each day just to reach school. Others stay home to support their families or care for younger siblings. Girls, in particular, often face cultural barriers that limit their right to education.</p>
        
        <h2>Our Approach</h2>
        <p>We believe that every child deserves a chance to learn, dream, and succeed. To make this vision a reality, we focus on:</p>
        <ul>
        <li>Building and renovating schools in rural villages</li>
        <li>Providing scholarships and school supplies for underprivileged children</li>
        <li>Training teachers to deliver engaging and inclusive lessons</li>
        <li>Supporting digital education initiatives for remote learning</li>
        </ul>
        
        <h2>Impact on Communities</h2>
        <p>When children receive an education, the benefits ripple outward. Families see improved economic stability, communities become more informed, and entire generations are lifted out of poverty.</p>
        
        <p>In particular, educating girls has shown transformative results—delaying marriage, reducing maternal health risks, and empowering women to become leaders in their communities.</p>
        
        <h2>Building a Brighter Tomorrow</h2>
        <p>By breaking down barriers to education, we are laying the groundwork for a more equitable and prosperous Nepal. Every classroom built, every book provided, and every child encouraged to learn brings us one step closer to this vision.</p>
        
        <p>Together, we can ensure that every child has the opportunity to build a brighter tomorrow.</p>
    `
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
    content: `
        <p>Every small effort adds up to meaningful change. Over the past few months, our team has launched targeted interventions across Nepal to improve access to healthcare, education, and sustainable livelihoods. These initiatives highlight how focused action can transform the lives of individuals and entire communities.</p>

        <h2>Why Targeted Interventions Matter</h2>
        <p>When resources are limited, it is crucial to direct support where it will have the most impact. By listening to communities and identifying their most urgent needs, we ensure that each intervention brings immediate and long-term benefits.</p>

        <h2>Highlights from Recent Initiatives</h2>
        <ul>
        <li><strong>Healthcare Outreach:</strong> Mobile medical camps provided consultations and medicines to families in remote areas.</li>
        <li><strong>Education Access:</strong> Scholarship programs helped children from low-income families continue their studies.</li>
        <li><strong>Livelihood Training:</strong> Skill-building workshops empowered women and youth to start small businesses.</li>
        <li><strong>Disaster Relief:</strong> Emergency aid supported flood-affected households with food, shelter, and hygiene kits.</li>
        </ul>

        <h2>Community Voices</h2>
        <p>Many community members shared how these programs directly changed their lives. Parents expressed relief at being able to send their children to school, while farmers shared stories of improved crop yields after receiving agricultural training.</p>

        <h2>The Road Ahead</h2>
        <p>Making a difference isn’t about one big action—it’s about a thousand small, consistent steps. With the continued support of partners, donors, and volunteers, we are committed to expanding these interventions and reaching even more people in need.</p>

        <p>Each life we touch brings us closer to a world where everyone has the opportunity to thrive.</p>
    `
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
    content: `
        <p>Behind every challenge lies an opportunity to innovate and build better systems. Our mission is not just to respond to crises but to solve problems at their root. This requires strategic planning, deep community engagement, and sustainable solutions that last beyond short-term interventions.</p>

        <h2>Understanding the Root Causes</h2>
        <p>Too often, humanitarian programs address only the symptoms of larger issues. We take a different approach by digging deeper into the systemic causes of poverty, inequality, and lack of access to essential services.</p>

        <p>By conducting thorough assessments and working closely with local communities, we identify the barriers that perpetuate hardship—and design solutions to remove them.</p>

        <h2>Our Strategic Approach</h2>
        <ul>
        <li><strong>Research & Analysis:</strong> Gathering data to understand the scale and scope of problems.</li>
        <li><strong>Community Involvement:</strong> Engaging local voices to ensure solutions fit cultural and social contexts.</li>
        <li><strong>Sustainability:</strong> Building programs that communities can maintain long after external support ends.</li>
        <li><strong>Innovation:</strong> Leveraging technology and new ideas to maximize impact.</li>
        </ul>

        <h2>Success Stories</h2>
        <p>From clean water systems that continue to function years after installation, to educational programs that empower children to break cycles of poverty, our approach has consistently proven effective.</p>

        <h2>Looking Ahead</h2>
        <p>Solving problems is not a one-time event—it’s a continuous mission. With each project, we refine our strategies, learn from challenges, and build stronger foundations for lasting change.</p>

        <p>We invite our supporters and partners to join us in this mission, because together, we can transform complex challenges into opportunities for growth and resilience.</p>
    `
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
    content: `
        <p>Compassion is more than a feeling—it’s a catalyst for action. Our programs are built on empathy and designed to transform lives in meaningful, measurable ways. From healthcare and education to livelihoods and disaster response, compassionate causes fuel every step of our journey.</p>

        <h2>The Power of Compassion</h2>
        <p>When programs are rooted in empathy, they go beyond immediate relief to foster dignity, hope, and resilience. Compassion motivates us to listen, to care, and to design interventions that respond to both urgent and long-term needs.</p>

        <h2>Programs That Make a Difference</h2>
        <ul>
        <li><strong>Healthcare:</strong> Free clinics and mobile health camps bring medical services to underserved communities.</li>
        <li><strong>Education:</strong> Scholarships, school supplies, and digital learning tools are opening doors for children.</li>
        <li><strong>Community Development:</strong> Livelihood projects and women’s empowerment programs are lifting families out of poverty.</li>
        <li><strong>Emergency Relief:</strong> Swift responses to floods, earthquakes, and other disasters provide safety and stability in times of crisis.</li>
        </ul>

        <h2>Stories of Transformation</h2>
        <p>Every life touched by our programs tells a story of transformation. Children who once struggled to attend school are now thriving in classrooms. Families once burdened by illness now have access to reliable healthcare. Communities once vulnerable to disasters are now better prepared and resilient.</p>

        <h2>A Future Built on Compassion</h2>
        <p>As we look ahead, we are committed to expanding our compassionate causes to reach more communities. We believe that by embedding empathy in every program, we can create a future where hope and opportunity are within reach for all.</p>
        
        <p>Because when compassion drives action, transformation becomes inevitable.</p>
    `
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
    content: `
        <p>Orphaned children face some of the most difficult challenges in society, often growing up without the resources and support systems that every child deserves. To bridge this gap, Human Relief Organization Nepal has launched a comprehensive orphan support program aimed at nurturing not only the present needs but also the future potential of these children.</p>

        <h2>A Holistic Approach</h2>
        <p>Our program goes beyond providing temporary relief. It is designed to create a stable, supportive environment where orphaned children can thrive academically, physically, and emotionally.</p>

        <h2>Core Areas of Support</h2>
        <ul>
        <li><strong>Education:</strong> Full scholarships, school supplies, and tutoring support to ensure consistent learning opportunities.</li>
        <li><strong>Healthcare:</strong> Regular checkups, vaccinations, and access to nutrition programs for overall well-being.</li>
        <li><strong>Life Skills Training:</strong> Guidance in leadership, communication, and practical skills to prepare children for adulthood.</li>
        <li><strong>Emotional Support:</strong> Counseling services and mentorship programs to build resilience and self-confidence.</li>
        </ul>

        <h2>Transforming Lives</h2>
        <p>Already, hundreds of children have joined the program, and the impact has been profound. Many have returned to school after years of absence, while others are excelling academically and dreaming bigger than ever before.</p>

        <h2>The Future We Envision</h2>
        <p>We believe that every orphan deserves more than just survival—they deserve the chance to build fulfilling lives and contribute positively to society. By addressing their needs holistically, we are empowering futures and creating a generation that can rise above adversity.</p>
        
        <p>With the continued support of our donors and partners, we aim to expand this program to reach thousands more children across Nepal.</p>
    `
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
    content: `
        <p>Communities are strongest when people come together with the shared goal of creating better lives. Across Nepal, we are witnessing countless stories of resilience, cooperation, and inspiration that showcase how collective action transforms challenges into opportunities.</p>

        <h2>Stories of Hope</h2>
        <p>From families rebuilding after floods to women starting new businesses through microfinance, every story highlights the incredible power of determination and support.</p>

        <h2>Helping Hands, Lasting Impact</h2>
        <ul>
        <li><strong>Community Savings Groups:</strong> Neighbors pooling resources to fund small enterprises and emergencies.</li>
        <li><strong>Youth Leadership:</strong> Young people leading clean-up drives, literacy programs, and environmental initiatives.</li>
        <li><strong>Volunteer Networks:</strong> Local volunteers offering skills and time to strengthen their communities.</li>
        </ul>

        <h2>A Collective Spirit</h2>
        <p>Change is never the result of one person alone—it is the product of communities working together. By inspiring and helping one another, communities across Nepal are proving that better lives can be built from the ground up.</p>

        <p>Every act of kindness and every shared effort adds to a brighter, more sustainable future.</p>
    `
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
    content: `
        <p>Behind every successful initiative lies the generosity of people who care. Our latest fundraising campaigns have helped us expand our programs and empower more communities across Nepal. From healthcare to education, each donation directly fuels projects that change lives.</p>

        <h2>Innovative Fundraising Approaches</h2>
        <p>To reach a broader audience, we have introduced a variety of fundraising models, including online platforms, community events, and corporate partnerships. These approaches allow supporters from around the world to contribute easily and transparently.</p>

        <h2>Where Funds Go</h2>
        <ul>
        <li>Providing scholarships and educational resources for underprivileged children</li>
        <li>Supporting healthcare camps and mobile medical services</li>
        <li>Funding emergency relief kits during disasters</li>
        <li>Investing in livelihood programs that foster independence</li>
        </ul>

        <h2>Empowering Communities</h2>
        <p>Every contribution—big or small—helps create tangible results. Families gain access to clean water, children return to classrooms, and entire villages become more resilient in the face of challenges.</p>

        <p>Fundraising is more than collecting money; it is about building trust, creating partnerships, and empowering people to live healthier, happier lives.</p>

        <h2>A Call to Action</h2>
        <p>As our programs grow, so does the need for sustainable funding. We invite supporters to join hands with us, knowing that every rupee raised is an investment in the future of Nepal.</p>
    `
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
    content: `
        <p>Kindness is one of the most powerful forces in the world. Even the smallest act—like sharing a smile, offering help, or donating a meal—can spark a ripple effect that transforms lives far beyond what we imagine.</p>

        <h2>The Ripple Effect of Compassion</h2>
        <p>When one person chooses kindness, it inspires others to do the same. A single gesture can travel through communities, uplifting spirits, fostering trust, and creating a culture of care.</p>

        <h2>Everyday Acts That Matter</h2>
        <ul>
        <li>Helping a neighbor carry heavy groceries</li>
        <li>Listening to someone in distress without judgment</li>
        <li>Volunteering time at a local shelter</li>
        <li>Donating clothes, food, or school supplies to families in need</li>
        </ul>

        <h2>Real-Life Impact</h2>
        <p>In villages where our volunteers serve, we’ve seen children return to school because someone provided uniforms, or families recover after disasters because neighbors shared food. These small actions add up to massive changes in people’s lives.</p>

        <h2>Changing the World Together</h2>
        <p>Kindness is contagious. By choosing to act with compassion, we can build a world where care and generosity are the norm rather than the exception.</p>

        <p>Every act of kindness counts. Together, they can change the world.</p>
    `
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
    content: `
        <p>Access to clean water is not just a health issue—it is an education issue. In many rural parts of Nepal, children, especially girls, spend hours each day fetching water. This daily burden robs them of valuable time that could be spent in the classroom.</p>

        <h2>Breaking the Cycle</h2>
        <p>When clean water sources are available close to home, children are freed from this exhausting task. Attendance improves dramatically, and teachers report better concentration and academic performance.</p>

        <h2>Health and Learning Go Hand in Hand</h2>
        <p>Clean water reduces the risk of waterborne diseases, which often keep children out of school. With fewer illnesses, children can attend classes regularly and focus on their studies.</p>

        <h2>Wider Community Impact</h2>
        <p>Beyond classrooms, water access transforms entire communities. Parents can devote more time to livelihoods, and schools can implement hygiene programs, creating healthier learning environments.</p>

        <h2>Investing in Education Through Water</h2>
        <p>Every water project is an investment in education. By ensuring children have both time and good health, we are building the foundation for a brighter future.</p>
    `
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
    content: `
        <p>Severe floods have displaced thousands of families across Nepal, leaving many without food, shelter, or clean water. In response, our Emergency Relief Fund has been activated to provide immediate assistance to those most affected.</p>

        <h2>Rapid Response in Action</h2>
        <p>Our teams were among the first on the ground, distributing essential supplies such as food kits, hygiene packs, and temporary shelter materials. These items are critical in helping families survive the first days of displacement.</p>

        <h2>What’s Included in Relief Kits</h2>
        <ul>
        <li>Rice, lentils, and cooking oil for basic meals</li>
        <li>Clean drinking water and purification tablets</li>
        <li>Soap, sanitary pads, and hygiene essentials</li>
        <li>Blankets and tarpaulins for temporary shelter</li>
        </ul>

        <h2>Voices from the Field</h2>
        <p>Families expressed deep gratitude for the immediate support, sharing that these supplies brought not only relief but also hope in a time of great uncertainty.</p>

        <h2>Looking Ahead</h2>
        <p>While immediate needs are being addressed, long-term recovery will require rebuilding homes, restoring livelihoods, and ensuring children can return to school. Our organization is committed to staying with communities every step of the way.</p>
    `
    },
  // Add more posts as needed...
]

function ShareButton({ url, title }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-900">Share:</span>
      <div className="flex items-center gap-1">
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-amber-200 p-2 text-amber-600 transition hover:bg-amber-50"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-amber-200 p-2 text-amber-600 transition hover:bg-amber-50"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-amber-200 p-2 text-amber-600 transition hover:bg-amber-50"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <button
          onClick={handleCopy}
          className="rounded-lg border border-amber-200 p-2 text-amber-600 transition hover:bg-amber-50"
          aria-label="Copy link"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      {copied && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xs text-green-600"
        >
          Copied!
        </motion.span>
      )}
    </div>
  )
}

function RelatedPosts({ currentPostId, category }) {
  const relatedPosts = POSTS
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3)
  
  const navigate = useNavigate()
  
  if (relatedPosts.length === 0) return null
  
  return (
    <section className="mt-12 border-t border-amber-100 pt-8">
      <h3 className="mb-6 text-xl font-semibold text-zinc-900">Related Posts</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer overflow-hidden rounded-xl border border-amber-100 bg-white transition hover:shadow-lg"
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="h-36 w-full object-cover transition duration-300 group-hover:opacity-95"
            />
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-zinc-500">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                <span>{post.readTime} min read</span>
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-amber-600 transition">
                {post.title}
              </h4>
              <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function NewsletterCTA() {
  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="px-6 py-8 text-center sm:px-8">
        <h3 className="text-2xl font-semibold text-zinc-900">Stay Updated with Our Impact</h3>
        <p className="mt-2 text-zinc-500">
          Get monthly stories of transformation delivered to your inbox
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = new FormData(form)
            const email = data.get("email")
            alert(`Subscribed: ${email}`)
            form.reset()
          }}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-amber-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:max-w-xs"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([])
  
  useEffect(() => {
    // Extract headings from content
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    const h2Elements = tempDiv.querySelectorAll('h2')
    const extractedHeadings = Array.from(h2Elements).map((h2, index) => ({
      id: `heading-${index}`,
      text: h2.textContent,
      level: 2
    }))
    setHeadings(extractedHeadings)
  }, [content])
  
  if (headings.length === 0) return null
  
  return (
    <div className="rounded-xl border border-amber-100 bg-white p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900">
        <Bookmark className="h-5 w-5 text-amber-600" />
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="block text-sm text-zinc-600 transition hover:text-amber-600"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default function BlogPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10)
  const [hasLiked, setHasLiked] = useState(false)
  const [views] = useState(Math.floor(Math.random() * 500) + 100)
  
  const post = POSTS.find(p => p.id === id)
  
  const handleGoBack = () => {
    navigate('/blog')
  }
  
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1)
      setHasLiked(true)
    }
  }
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }
  
  // If post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen bg-amber-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Post Not Found</h1>
          <p className="text-zinc-500 mb-4">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </button>
        </div>
      </div>
    )
  }
  
  const currentUrl = window.location.href
  
  return (
    <div className="min-h-screen bg-amber-50/30  mt-14 md:mt-22">
      {/* Navigation Bar */}
      {/* <nav className="border-b border-amber-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 transition hover:text-amber-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </button>
        </div>
      </nav>
       */}
      <div className="mx-auto max-w-8xl px-4 py-8 ">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Hero Image */}
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-amber-600">
                    <Bookmark className="h-3.5 w-3.5" />
                    {post.type === "news" ? "News" : "Blog"}
                  </span>
                </div>
              </div>
              
              {/* Article Header */}
              <header className="border-b border-amber-100 p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-1 ">
                    <CalendarDays className="h-4 w-4 text-amber-600" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</time>
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300" />
                  <span className="inline-flex items-center gap-1">
                    <User className="h-4 w-4 text-amber-600 " />
                    {post.author}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-600" />
                    {post.readTime} min read
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300" />
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-4 w-4 text-amber-600" />
                    {views} views
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold text-zinc-900 sm:text-4xl lg:text-3xl leading-tight">
                  {post.title}
                </h1>
                
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-amber-600" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleLike}
                      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
                        hasLiked
                          ? 'border-red-200 bg-red-50 text-red-600'
                          : 'border-amber-200 bg-white text-amber-600 hover:bg-amber-50'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
                      {likes}
                    </button>
                    
                    <button
                      onClick={handleBookmark}
                      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
                        isBookmarked
                          ? 'border-blue-200 bg-blue-50 text-blue-600'
                          : 'border-amber-200 bg-white text-amber-600 hover:bg-amber-50'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      {isBookmarked ? 'Saved' : 'Save'}
                    </button>
                  </div>
                  
                  <ShareButton url={currentUrl} title={post.title} />
                </div>
              </header>
              
              {/* Article Content */}
              <div className="prose prose-amber max-w-none p-6 sm:p-8">
                <div 
                  className="prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600 prose-strong:text-zinc-900"
                  dangerouslySetInnerHTML={{ __html: post.content || `
                    <p>This is where the full content of "${post.title}" would appear. The article would provide detailed information about ${post.excerpt.toLowerCase()}</p>
                    
                    <h2>Introduction</h2>
                    <p>This blog post explores the important topic mentioned in the title. Our team has gathered insights and experiences to share with our community.</p>
                    
                    <h2>Key Insights</h2>
                    <p>Through our work in the field, we've learned valuable lessons that we want to share with our supporters and the broader community.</p>
                    
                    <h2>Impact and Results</h2>
                    <p>The results of our efforts have been encouraging, showing positive changes in the communities we serve.</p>
                    
                    <h2>Looking Forward</h2>
                    <p>We remain committed to continuing this important work and expanding our impact in the future.</p>
                  ` }}
                />
              </div>
              
              {/* Author Bio */}
              <footer className="border-t border-amber-100 bg-amber-50/50 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900">{post.author}</h4>
                    <p className="mt-1 text-sm text-zinc-500">
                      Dedicated to creating positive change in communities across Nepal through compassionate action and sustainable programs.
                    </p>
                  </div>
                </div>
              </footer>
            </article>
            
            {/* Related Posts */}
            <RelatedPosts currentPostId={post.id} category={post.category} />
            
            {/* Newsletter CTA */}
            <NewsletterCTA />
          </main>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Sticky Table of Contents */}
            <div className="sticky top-24">
              <TableOfContents content={post.content || ''} />
              
              {/* Quick Actions */}
              <div className="mt-6 rounded-xl border border-amber-100 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-zinc-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to='/donate'>
                    <button className="w-full rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500 mb-3">
                        Donate to This Cause
                    </button>
                  </Link>
                  <Link to='/volunteer'>
                  <button className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-50">
                    Volunteer With Us
                  </button>
                  </Link>
                  
                </div>
              </div>
              
              {/* Category Info */}
              <div className="mt-6 rounded-xl border border-amber-100 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">Category</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-600">
                  <Tag className="h-4 w-4" />
                  {post.category}
                </span>
                <p className="mt-3 text-sm text-zinc-500">
                  Explore more posts in the {post.category.toLowerCase()} category to learn about our ongoing work in this area.
                </p>
                <button
                  onClick={() => navigate(`/blog?category=${post.category}`)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-500"
                >
                  View all {post.category} posts
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}