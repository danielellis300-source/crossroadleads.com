// Central business data. Edit here and every page updates.

export const site = {
  name: 'Crossroad Leads',
  domain: 'crossroadleads.com',
  url: 'https://crossroadleads.com',
  tagline: 'Websites & Local SEO for Indianapolis Businesses',
  description:
    'Crossroad Leads builds fast, custom websites and local SEO campaigns that turn Indianapolis-area searches into phone calls. Based in Indy, serving all of Central Indiana.',
  phone: '(317) 537-0940',
  phoneHref: 'tel:+13175370940',
  email: 'crossroadleads@gmail.com',
  founder: 'Daniel Ellis',
  region: 'Indianapolis, IN',
  web3formsKey: 'cef21901-5653-4ba7-a345-f6b058c6a137',
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  headline: string;
  intro: string;
  features: { title: string; text: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-design',
    name: 'Website Design',
    short: 'Custom, lightning-fast websites built to rank and convert. No bloated templates, no page builders.',
    icon: 'monitor',
    headline: 'Custom Websites Built to Get You Calls',
    intro:
      'Your website is your hardest-working salesperson. It never sleeps, never takes a day off, and is usually the first impression a customer gets. Every site I build is hand-coded for speed, designed for phones first, and structured so Google understands exactly what you do and where you do it.',
    features: [
      { title: 'Hand-coded, not templated', text: 'No WordPress plugin bloat or drag-and-drop builders. Clean code that loads in under a second and scores 90+ on Google PageSpeed.' },
      { title: 'Mobile-first design', text: 'Most local searches happen on a phone. Every layout is designed for thumbs first, then scaled up to desktop.' },
      { title: 'Built-in SEO structure', text: 'Proper headings, schema markup, meta tags, sitemaps, and internal linking are baked in from day one, not bolted on later.' },
      { title: 'Conversion-focused layout', text: 'Click-to-call buttons, short quote forms, and clear calls to action on every page, so visitors become leads.' },
      { title: 'City & service pages', text: 'Dedicated pages for each service and each city you serve, so you show up when people search "your service + their town."' },
      { title: 'You own everything', text: 'Your domain, your code, your content. If you ever leave, you take it all with you. No hostage situations.' },
    ],
    outcomes: ['Sub-1-second load times', '90+ PageSpeed scores', 'Click-to-call on every page', 'Lead forms that hit your inbox instantly'],
    faqs: [
      { q: 'How long does a new website take?', a: 'Most small-business sites launch in 2–4 weeks depending on how many pages you need and how quickly content and feedback come back.' },
      { q: 'Can you redesign my existing website?', a: 'Yes. I can rebuild your current site from scratch while preserving any rankings you already have by carrying over URLs and setting up proper redirects.' },
      { q: 'Do I need to write the content?', a: 'No. I write the content for you based on a short interview about your business. You review and approve everything before launch.' },
      { q: 'Will I be able to make edits?', a: 'Edits are included in every care plan: just text or email what you want changed. Most updates are done within one business day.' },
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    short: 'Rank on page one and in the Google map pack when Indy customers search for what you do.',
    icon: 'target',
    headline: 'Local SEO That Puts You on Page One',
    intro:
      'Ranking on the first page of Google is what got me hooked on this work. Local SEO is the process of making your business the obvious answer when someone in Indianapolis, Carmel, Greenwood, or anywhere in between searches for your service. It is part technical, part content, and part reputation, and I handle all three.',
    features: [
      { title: 'Google Business Profile optimization', text: 'Categories, services, photos, posts, and Q&A tuned so you compete in the map pack, where most local clicks happen.' },
      { title: 'Keyword & competitor research', text: 'I find the exact phrases your customers type and see what the businesses outranking you are doing right.' },
      { title: 'On-page optimization', text: 'Titles, headings, content, schema, and internal links tuned page by page for the searches that matter.' },
      { title: 'Citations & NAP consistency', text: 'Your name, address, and phone listed accurately on the directories Google trusts.' },
      { title: 'Content that ranks', text: 'Helpful blog posts and service-area pages that answer real customer questions and build authority over time.' },
      { title: 'Monthly reporting', text: 'Plain-English reports showing rankings, traffic, and calls. No vanity metrics, no jargon.' },
    ],
    outcomes: ['Map pack visibility', 'Rankings for "service + city" searches', 'More organic calls & form leads', 'Clear monthly reports'],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Most local businesses see meaningful movement in 3–6 months. Less competitive niches and suburbs can move faster; competitive Indianapolis keywords take longer.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No honest SEO can guarantee a specific ranking. Google controls that. What I guarantee is transparent work, monthly reporting, and a strategy built on what is actually working in your market.' },
      { q: 'Do I need a new website for SEO?', a: 'Not always. I can run SEO on your existing site if it is technically sound. If it is slow or poorly structured, a rebuild is often the fastest path to rankings.' },
      { q: 'Are there long-term contracts?', a: 'No. SEO plans are month-to-month. I would rather earn your business every month than lock you in.' },
    ],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Gen & Call Tracking',
    short: 'Landing pages, lead funnels, and call tracking so you know exactly where every customer came from.',
    icon: 'zap',
    headline: 'Lead Generation & Call Tracking',
    intro:
      'Traffic is nice. Phone calls pay the bills. Lead generation is about turning visitors into conversations, and call tracking tells you which pages, keywords, and campaigns are actually making the phone ring, so you can do more of what works and stop paying for what does not.',
    features: [
      { title: 'High-converting landing pages', text: 'Focused, single-purpose pages for specific services or promotions, built to turn clicks into calls and form fills.' },
      { title: 'Call tracking numbers', text: 'Unique tracking numbers by source (website, Google Business Profile, ads) that forward to your phone, so you know where every call came from.' },
      { title: 'Form & lead routing', text: 'Leads delivered instantly to your email or phone with every detail you need to follow up fast.' },
      { title: 'Conversion tracking', text: 'Analytics set up to track calls, forms, and clicks, not just page views.' },
      { title: 'A/B testing', text: 'Headlines, buttons, and offers tested against each other so conversion rates climb over time.' },
      { title: 'Lead reporting', text: 'A simple monthly breakdown: how many leads, from where, and what they cost you.' },
    ],
    outcomes: ['Know where every call comes from', 'Higher conversion rates', 'Faster lead follow-up', 'Data-driven decisions'],
    faqs: [
      { q: 'Will call tracking mess up my phone number on Google?', a: 'No, when done correctly. Your main number stays as the primary number on your Google Business Profile and citations; tracking numbers are used strategically so your NAP consistency is protected.' },
      { q: 'Do the calls still come to my cell?', a: 'Yes. Tracking numbers simply forward to whatever phone you already use. Your customers will not notice a difference.' },
      { q: 'Can I hear call recordings?', a: 'Call recording is optional and can be enabled so you can review lead quality and train staff, with proper disclosure.' },
    ],
  },
  {
    slug: 'hosting-maintenance',
    name: 'Hosting & Maintenance',
    short: 'Fast, secure hosting with unlimited small edits. Your site stays updated, backed up, and online.',
    icon: 'shield',
    headline: 'Website Hosting & Maintenance Plans',
    intro:
      'A website is not a one-and-done project. It needs secure hosting, regular updates, and someone to call when you want to change your hours or add a new service. Care plans take that entire job off your plate for one flat monthly price.',
    features: [
      { title: 'Global edge hosting', text: 'Your site is served from a worldwide edge network, so it loads fast for everyone and stays up even under heavy traffic.' },
      { title: 'Free SSL & security', text: 'HTTPS, DDoS protection, and security headers included. No plugins to hack, no database to breach.' },
      { title: 'Content edits included', text: 'Text changes, photo swaps, new team members, updated hours: just send a message and it gets done.' },
      { title: 'Uptime monitoring', text: 'If your site ever goes down, I know about it before your customers do.' },
      { title: 'Version-controlled backups', text: 'Every change is saved in version history, so any mistake can be rolled back in seconds.' },
      { title: 'Local, real-person support', text: 'You get a direct line to me, an Indy local, not a ticket queue or an overseas call center.' },
    ],
    outcomes: ['99.9%+ uptime', 'Edits within 1 business day', 'Zero plugin updates to worry about', 'One flat monthly price'],
    faqs: [
      { q: 'Can you host a site you did not build?', a: 'For WordPress and similar platforms I will review it first. In many cases a rebuild onto a faster static setup is cheaper long-term than maintaining an aging site.' },
      { q: 'What counts as a "small edit"?', a: 'Text changes, image swaps, adding a review, updating hours or prices, and similar tasks. New pages or major redesigns are quoted separately.' },
      { q: 'Is there a contract?', a: 'Care plans are month-to-month. Cancel anytime and you keep your website files and domain.' },
    ],
  },
];

export const pricing = [
  {
    name: 'Starter',
    tag: 'Get online right',
    setup: 997,
    monthly: 99,
    featured: false,
    blurb: 'A professional, fast website for new and small businesses that need a strong online foundation.',
    features: [
      'Custom 5-page website',
      'Mobile-first, 90+ PageSpeed',
      'Click-to-call & lead form',
      'Basic on-page SEO + schema',
      'Google Business Profile setup',
      'Hosting, SSL & monitoring',
      'Small edits included',
    ],
  },
  {
    name: 'Growth',
    tag: 'Most popular',
    setup: 1997,
    monthly: 299,
    featured: true,
    blurb: 'For businesses ready to compete for page-one rankings across multiple Indy-area cities.',
    features: [
      'Everything in Starter',
      'Up to 15 pages',
      'Up to 6 city / service-area pages',
      'Monthly local SEO campaign',
      'Google Business Profile optimization',
      'Call tracking setup',
      '1 blog post per month',
      'Monthly performance report',
    ],
  },
  {
    name: 'Dominate',
    tag: 'Own your market',
    setup: 3497,
    monthly: 599,
    featured: false,
    blurb: 'Aggressive growth for competitive industries that want to own the map pack across Central Indiana.',
    features: [
      'Everything in Growth',
      'Unlimited pages',
      'All 12 Indy-area city pages',
      'Advanced SEO + link building',
      'Lead-gen landing pages',
      'A/B testing & conversion tuning',
      '2 blog posts per month',
      'Priority same-day support',
    ],
  },
];

export const guarantees = [
  { title: 'No long-term contracts', text: 'Every monthly plan is month-to-month. Stay because it works, not because you are stuck.' },
  { title: 'You own your website', text: 'Your domain, code, and content belong to you. Leave anytime and take it all with you.' },
  { title: '90+ speed score or I fix it', text: 'Every site I build is tuned to score 90+ on Google PageSpeed mobile. If it does not, I keep working on it at no charge.' },
  { title: 'Straight answers', text: 'Plain-English reports and honest advice, even when the honest answer is "you do not need that."' },
];

export const process = [
  { step: '01', title: 'Free Audit', text: 'I review your current site, Google presence, and top local competitors, then show you exactly where the opportunities are.' },
  { step: '02', title: 'Game Plan', text: 'You get a clear plan with pages, keywords, and target cities, plus a fixed price. No surprises.' },
  { step: '03', title: 'Build & Launch', text: 'I design, write, and build your site, then launch it with SEO, tracking, and lead forms wired up.' },
  { step: '04', title: 'Grow', text: 'Monthly SEO, content, and conversion improvements keep pushing your rankings and your call volume up.' },
];

export type City = {
  slug: string;
  name: string;
  county: string;
  headline: string;
  intro: string;
  local: string;
  strategy: string;
  areas: string[];
  industries: string[];
  nearby: string[];
};

export const cities: City[] = [
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    county: 'Marion County',
    headline: 'Indianapolis Web Design & SEO',
    intro:
      'Indianapolis is home base. I grew up here, and I know that "Indy" is really dozens of distinct communities, from Broad Ripple to Fountain Square to the far southside. Customers here search hyper-locally, and the businesses that win are the ones whose websites speak to those neighborhoods directly.',
    local:
      'Competition in Indianapolis is real. For most service keywords you are going up against established companies, franchise networks, and national lead-gen sites buying their way into the results. Ranking here requires a technically clean website, a well-optimized Google Business Profile, and content that proves you actually serve the neighborhoods you claim.',
    strategy:
      'For Indianapolis businesses I typically build a strong core city page backed by neighborhood-level content, aggressive Google Business Profile work, and a review strategy. Downtown and northside searches behave differently than southside and westside searches, so we target accordingly.',
    areas: ['Downtown', 'Broad Ripple', 'Fountain Square', 'Irvington', 'Mass Ave', 'Castleton', 'Nora', 'Southport', 'Meridian-Kessler', 'Speedway'],
    industries: ['Home services & contractors', 'Restaurants & food trucks', 'Law firms', 'Auto repair', 'Salons & barbers', 'Medical & dental'],
    nearby: ['lawrence', 'carmel', 'greenwood', 'avon'],
  },
  {
    slug: 'carmel',
    name: 'Carmel',
    county: 'Hamilton County',
    headline: 'Carmel, IN Web Design & SEO',
    intro:
      'Carmel customers expect polish. This is a city of roundabouts, the Arts & Design District, and the Carmel City Center, and its residents are quick to judge a business by its website. A slow, dated site does not just lose rankings in Carmel. It loses trust.',
    local:
      'Many Carmel searches come from high-intent, higher-budget customers: homeowners planning remodels, families choosing dentists and pediatricians, professionals looking for financial and legal services. They compare two or three options carefully, so your site needs to look premium and answer questions before they are asked.',
    strategy:
      'In Carmel I focus on premium design, strong trust signals, and detailed service pages. Map pack competition is stiff along the US-31 and Keystone corridors, so Google Business Profile optimization and steady review growth are a priority.',
    areas: ['Arts & Design District', 'Carmel City Center', 'Clay Terrace', 'West Clay', 'Old Town Carmel', 'Home Place'],
    industries: ['Remodelers & builders', 'Dentists & orthodontists', 'Financial advisors', 'Boutique fitness', 'Landscaping', 'Real estate'],
    nearby: ['westfield', 'fishers', 'zionsville', 'indianapolis'],
  },
  {
    slug: 'fishers',
    name: 'Fishers',
    county: 'Hamilton County',
    headline: 'Fishers, IN Web Design & SEO',
    intro:
      'Fishers has grown from a quiet town into one of the fastest-growing cities in Indiana, with a startup-friendly reputation and a younger, tech-savvy population. People here find businesses on their phones, read reviews, and book online, often all in the same five minutes.',
    local:
      'With constant new construction and new residents moving in, Fishers is full of customers who do not have a "go-to" plumber, dentist, or contractor yet. They are searching Google to find one. Being visible at that moment is one of the best growth opportunities in Central Indiana.',
    strategy:
      'For Fishers businesses I emphasize mobile speed, online booking or instant quote forms, and content targeting new-resident searches. We also capture overlapping Geist and Nickel Plate District searches where it makes sense.',
    areas: ['Nickel Plate District', 'Geist', 'Saxony', 'Britton Falls', 'Hamilton Proper', 'Fall Creek'],
    industries: ['HVAC & plumbing', 'Pediatric & family health', 'Fitness studios', 'Pet services', 'Cleaning services', 'Tech & professional services'],
    nearby: ['noblesville', 'carmel', 'lawrence', 'westfield'],
  },
  {
    slug: 'noblesville',
    name: 'Noblesville',
    county: 'Hamilton County',
    headline: 'Noblesville, IN Web Design & SEO',
    intro:
      'Noblesville blends small-town character with serious growth. The historic courthouse square is still the heart of downtown, but new neighborhoods keep spreading out toward Morse Reservoir and beyond. Businesses here serve both longtime locals and a steady stream of new families.',
    local:
      'Noblesville customers value local and personal, but they still start with a Google search. Many local businesses here still have outdated sites or none at all, so a modern, well-optimized website can leapfrog competitors faster than in more saturated markets.',
    strategy:
      'In Noblesville I lean into local identity: real photos, community involvement, and "Noblesville-owned" messaging, paired with solid technical SEO. It is a market where a strong site and Google Business Profile can take over page one relatively quickly.',
    areas: ['Downtown Square', 'Morse Reservoir', 'Hamilton Town Center', 'Sagamore', 'Potter\'s Bridge', 'Noble West'],
    industries: ['Roofing & exteriors', 'Boutiques & retail', 'Restaurants & breweries', 'Auto services', 'Lawn care', 'Event venues'],
    nearby: ['westfield', 'fishers', 'carmel', 'greenfield'],
  },
  {
    slug: 'westfield',
    name: 'Westfield',
    county: 'Hamilton County',
    headline: 'Westfield, IN Web Design & SEO',
    intro:
      'Westfield is known for Grand Park, one of the largest youth sports complexes in the country, and for growth that has turned farmland into neighborhoods almost overnight. That means a constant flow of new residents and weekend visitors searching for local businesses.',
    local:
      'Westfield search behavior has two sides: residents looking for home services and family businesses, and visiting sports families looking for food, lodging, and things to do near Grand Park. If your business serves either group, there is search demand you can capture.',
    strategy:
      'For Westfield businesses I build targeted pages around the searches that actually happen here, whether that is "near Grand Park" visitor traffic or new-homeowner service searches along the US-31 corridor.',
    areas: ['Grand Park', 'Downtown Westfield', 'Chatham Hills', 'Bridgewater', 'Viking Meadows', 'Springmill Trails'],
    industries: ['Restaurants & hospitality', 'Sports training', 'Home builders & trades', 'Family dentistry', 'Daycare & tutoring', 'Pool & outdoor living'],
    nearby: ['carmel', 'noblesville', 'zionsville', 'fishers'],
  },
  {
    slug: 'zionsville',
    name: 'Zionsville',
    county: 'Boone County',
    headline: 'Zionsville, IN Web Design & SEO',
    intro:
      'Zionsville\'s brick-paved Main Street sets the tone: charming, established, and particular about quality. It is a community where reputation travels fast and customers expect businesses to look as good online as they do in person.',
    local:
      'Zionsville is smaller than its neighbors, which means fewer searches but often less competition and higher-value customers. Businesses here can win page one with focused, well-crafted local pages that most competitors have not bothered to build.',
    strategy:
      'In Zionsville I focus on elegant, story-driven design and precise local targeting, including nearby Whitestown searches where it makes sense. Quality over quantity: a handful of excellent pages that rank and convert.',
    areas: ['Village / Main Street', 'Royal Run', 'Stonegate', 'Whitestown border', 'Holliday Farms', 'Austin Oaks'],
    industries: ['Boutiques & specialty retail', 'Interior design', 'Custom builders', 'Equestrian services', 'Wellness & spas', 'Professional services'],
    nearby: ['carmel', 'westfield', 'brownsburg', 'indianapolis'],
  },
  {
    slug: 'greenwood',
    name: 'Greenwood',
    county: 'Johnson County',
    headline: 'Greenwood, IN Web Design & SEO',
    intro:
      'Greenwood is the southside\'s commercial hub, anchored by Greenwood Park Mall and the busy US-31 and I-65 corridors, with a revitalized Old Town that keeps the community feel alive. It is one of the most important markets for any business serving south of Indianapolis.',
    local:
      'Southside customers are loyal once you earn them, but they find you on Google first. Many Greenwood businesses compete with Indianapolis-based companies for the same searches, so a strong local presence that says "we are right here" is a real advantage.',
    strategy:
      'For Greenwood I pair a dedicated city page with Johnson County-wide content, covering Bargersville, Whiteland, and Center Grove searches, plus Google Business Profile optimization to win the southside map pack.',
    areas: ['Old Town Greenwood', 'Center Grove', 'Greenwood Park Mall area', 'Smith Valley', 'County Line Road', 'Bargersville border'],
    industries: ['Auto repair & dealers', 'Home services', 'Restaurants', 'Chiropractors & therapy', 'Insurance agencies', 'Fitness'],
    nearby: ['indianapolis', 'plainfield', 'greenfield', 'avon'],
  },
  {
    slug: 'avon',
    name: 'Avon',
    county: 'Hendricks County',
    headline: 'Avon, IN Web Design & SEO',
    intro:
      'Avon has become the commercial center of Hendricks County, with the US-36 / Rockville Road corridor lined with shops, restaurants, and service businesses. Family-focused neighborhoods and highly rated schools keep drawing new residents to the westside.',
    local:
      'Avon customers often search with "near me" intent while on the go along US-36. Businesses that show up in the map pack with strong reviews and a fast mobile site capture a big share of those calls, while those that do not are invisible.',
    strategy:
      'For Avon I focus on map pack visibility, mobile speed, and westside content that also captures Danville and Washington Township searches, building a Hendricks County presence instead of a single-city one.',
    areas: ['US-36 / Rockville Rd corridor', 'Washington Township', 'Avon Town Hall area', 'Prestwick', 'Ronald Reagan Pkwy', 'Danville border'],
    industries: ['Restaurants & franchises', 'Home improvement', 'Pediatric & family care', 'Auto services', 'Pet grooming', 'Real estate'],
    nearby: ['plainfield', 'brownsburg', 'indianapolis', 'zionsville'],
  },
  {
    slug: 'plainfield',
    name: 'Plainfield',
    county: 'Hendricks County',
    headline: 'Plainfield, IN Web Design & SEO',
    intro:
      'Plainfield sits right next to Indianapolis International Airport and is one of the biggest logistics and distribution hubs in the Midwest. Alongside that industrial muscle is a growing residential community with strong local businesses around the Perry Crossing area and historic downtown.',
    local:
      'Plainfield has a unique split: B2B searches from logistics, trucking, and industrial companies, and B2C searches from a growing population of families. Both groups are underserved by local websites, which creates opportunity for the businesses that get it right.',
    strategy:
      'Whether you sell to warehouses or to homeowners, I build Plainfield sites that speak directly to your buyer. B2B pages focus on capabilities and credibility; B2C pages focus on speed, reviews, and click-to-call.',
    areas: ['Shops at Perry Crossing', 'Historic Downtown', 'Airport / logistics corridor', 'Saratoga', 'Clarks Creek', 'Guilford Township'],
    industries: ['Trucking & logistics', 'Industrial services', 'Home services', 'Restaurants', 'Daycare', 'Fitness & recreation'],
    nearby: ['avon', 'brownsburg', 'greenwood', 'indianapolis'],
  },
  {
    slug: 'brownsburg',
    name: 'Brownsburg',
    county: 'Hendricks County',
    headline: 'Brownsburg, IN Web Design & SEO',
    intro:
      'Brownsburg has deep racing roots, with Lucas Oil Indianapolis Raceway Park right next door, and a strong, tight-knit community feel. As the town keeps growing along the I-74 and SR-267 corridors, more locals are searching online for the services they used to find by word of mouth.',
    local:
      'Word of mouth still matters in Brownsburg, but these days it happens through Google reviews and local Facebook groups. A business with a modern site and a steady stream of reviews earns the recommendation before anyone even asks.',
    strategy:
      'For Brownsburg I combine community-focused messaging with practical local SEO: a strong city page, review generation, and content that captures nearby Pittsboro and Lizton searches.',
    areas: ['Downtown Brownsburg', 'Arbuckle Acres', 'SR-267 corridor', 'Northfield', 'Lincoln Township', 'Pittsboro border'],
    industries: ['Auto & motorsports', 'Contractors & trades', 'Restaurants', 'Salons', 'Family medicine', 'Landscaping'],
    nearby: ['avon', 'zionsville', 'plainfield', 'indianapolis'],
  },
  {
    slug: 'lawrence',
    name: 'Lawrence',
    county: 'Marion County',
    headline: 'Lawrence, IN Web Design & SEO',
    intro:
      'Lawrence, on Indianapolis\'s northeast side, is built around the former Fort Benjamin Harrison, now home to Fort Harrison State Park and a revitalized mix of neighborhoods, offices, and local shops. It is a diverse, established community that often gets lumped in with "Indianapolis" online.',
    local:
      'Because many directories and competitors treat Lawrence as just part of Indy, businesses that explicitly target Lawrence searches face less competition than they would citywide. That is an easy win most companies leave on the table.',
    strategy:
      'In Lawrence I build pages that call out the community by name, including Fort Harrison, Oaklandon, and the Pendleton Pike corridor, so Google and customers both know you are the local choice.',
    areas: ['Fort Ben / Fort Harrison', 'Oaklandon', 'Pendleton Pike corridor', 'Lawrence Township', 'Geist south', 'Castleton border'],
    industries: ['Home services', 'Auto repair', 'Restaurants', 'Child care', 'Health clinics', 'Churches & nonprofits'],
    nearby: ['indianapolis', 'fishers', 'greenfield', 'carmel'],
  },
  {
    slug: 'greenfield',
    name: 'Greenfield',
    county: 'Hancock County',
    headline: 'Greenfield, IN Web Design & SEO',
    intro:
      'Greenfield, the Hancock County seat and hometown of poet James Whitcomb Riley, pairs a historic downtown with steady growth along the US-40 and I-70 corridors. It is the gateway to Indy\'s east side and a community that strongly supports local businesses.',
    local:
      'Greenfield customers prefer to hire local, but many still end up calling Indianapolis companies simply because those companies show up on Google first. A well-built local website flips that script and keeps Hancock County customers with Hancock County businesses.',
    strategy:
      'For Greenfield I build city and county-level pages that also capture McCordsville, New Palestine, and Fortville searches, plus Google Business Profile work to win the eastside map pack.',
    areas: ['Historic Downtown', 'Riley Home area', 'US-40 corridor', 'Pennsy Trail', 'New Palestine border', 'McCordsville border'],
    industries: ['Home services', 'Agriculture & equipment', 'Restaurants', 'Auto services', 'Healthcare', 'Retail'],
    nearby: ['lawrence', 'noblesville', 'greenwood', 'indianapolis'],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
