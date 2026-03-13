// ══════════════════════════════════════════════
// CAREER DATABASE
// ══════════════════════════════════════════════
const CAREERS = [
  {id:'swe',emoji:'💻',name:'Software Engineer',category:'Technology',tags:['technology'],ws:['remote','flexible'],mot:['money','autonomy','creativity'],time:['fast','standard'],desc:'Build web & mobile apps -- the backbone of the digital world.',salary:{e:'$70,000',m:'$120,000',s:'$180,000+'},phases:[
    {label:'Foundation',title:'Core Fundamentals',dur:'0-6 Months',ms:['Learn HTML, CSS & JavaScript basics','Master Git version control','Build 3 beginner projects (todo app, portfolio, weather app)','Choose a framework: React or Vue'],skills:['HTML5','CSS3','JavaScript','Git','Terminal'],res:['freeCodeCamp.org','The Odin Project','CS50 by Harvard (free)','JavaScript.info']},
    {label:'Core Skills',title:'Backend + Databases',dur:'6-18 Months',ms:['Learn Node.js or Python','Build REST APIs & work with SQL/MongoDB','Deploy your first full-stack app to Vercel','Complete a CRUD project end-to-end'],skills:['Node.js','Python','PostgreSQL','REST APIs','Docker basics'],res:['Full Stack Open (Helsinki University)','Udemy -- Web Developer Bootcamp','MongoDB University','Postman docs']},
    {label:'Experience',title:'Real-World Projects',dur:'18 Months-3 Years',ms:['Contribute to open-source on GitHub','Land first internship or junior dev role','Build a SaaS side project','Pass your first technical interview'],skills:['React','TypeScript','AWS basics','CI/CD','Agile'],res:['LeetCode (200+ problems)','System Design Primer (GitHub)','Fireship.io (YouTube)','Neetcode.io']},
    {label:'Specialisation',title:'Mid-Level Mastery',dur:'3-5 Years',ms:['Specialise in frontend, backend or cloud','Lead a feature end-to-end','Mentor junior developers','Earn a cloud cert (AWS/GCP/Azure)'],skills:['Microservices','Kubernetes','GraphQL','System Design','Security'],res:['AWS Certified Developer course','Designing Data-Intensive Applications (book)','The Pragmatic Programmer','Martin Fowler blog']},
    {label:'Leadership',title:'Staff / Senior Engineer',dur:'5+ Years',ms:['Reach Senior or Staff Engineer','Architect systems at scale','Build and lead an engineering team','Consider founding a startup'],skills:['Architecture','Leadership','Technical Strategy','Hiring','Mentoring'],res:['Staff Engineer (book)','LeadDev.com','Lennys Newsletter','Shreyas Doshi frameworks']}
  ]},
  {id:'ds',emoji:'📊',name:'Data Scientist / ML Engineer',category:'Technology',tags:['technology','science'],ws:['remote','flexible'],mot:['money','creativity','impact'],time:['standard','specialist'],desc:'Extract insights from data and build intelligent systems.',salary:{e:'$75,000',m:'$130,000',s:'$200,000+'},phases:[
    {label:'Foundation',title:'Math & Python Basics',dur:'0-6 Months',ms:['Learn Python thoroughly','Study statistics and linear algebra','Complete Kaggle beginner courses','Visualise datasets with pandas & matplotlib'],skills:['Python','Statistics','Pandas','NumPy','Data Viz'],res:['Python for Everybody (Coursera)','StatQuest (YouTube)','Kaggle Learn','Khan Academy Statistics']},
    {label:'Core Skills',title:'Machine Learning',dur:'6-18 Months',ms:['Learn supervised & unsupervised learning','Build classification and regression models','Complete Andrew Ng ML course','Enter a Kaggle competition'],skills:['Scikit-learn','Machine Learning','Feature Engineering','Model Evaluation','SQL'],res:['ML by Andrew Ng (Coursera)','Hands-On ML (Geron book)','fast.ai','Kaggle competitions']},
    {label:'Experience',title:'Deep Learning & NLP',dur:'18 Months-3 Years',ms:['Master neural networks with PyTorch','Build a CV or NLP project','Land first data science role','Contribute to ML research'],skills:['TensorFlow','PyTorch','NLP','Computer Vision','Cloud ML'],res:['Deep Learning Specialisation (deeplearning.ai)','Hugging Face tutorials','Papers With Code','Towards Data Science']},
    {label:'Specialisation',title:'MLOps & Production AI',dur:'3-5 Years',ms:['Deploy ML models to production','Build data pipelines with Airflow/Spark','Specialise in LLMs or computer vision','Publish research or tech blog posts'],skills:['MLOps','Apache Spark','Airflow','Docker','A/B Testing'],res:['MLOps Zoomcamp (free)','Made With ML','Google ML Crash Course','The Data Engineering Cookbook']},
    {label:'Leadership',title:'Principal DS / AI Lead',dur:'5+ Years',ms:['Lead an AI/ML team','Drive data strategy across org','Present AI findings to C-suite','Consider founding an AI company'],skills:['Leadership','AI Strategy','Research Direction','Stakeholder Communication','Ethics'],res:['AI Alignment Forum','Arxiv preprints','MIT Technology Review','DeepMind Research Blog']}
  ]},
  {id:'cyber',emoji:'🔐',name:'Cybersecurity Analyst',category:'Technology',tags:['technology'],ws:['remote','office','flexible'],mot:['money','stability','autonomy'],time:['fast','standard'],desc:'Defend systems, hunt threats, and protect digital infrastructure.',salary:{e:'$65,000',m:'$110,000',s:'$160,000+'},phases:[
    {label:'Foundation',title:'Networking & OS Basics',dur:'0-6 Months',ms:['Learn TCP/IP, DNS, HTTP fundamentals','Get comfortable with Linux CLI','Install and use Kali Linux','Set up a home lab with VirtualBox'],skills:['Networking','Linux','TCP/IP','VMs','Scripting'],res:['Professor Messer Security+','TryHackMe (beginner)','NetworkChuck YouTube','Cybrary.it']},
    {label:'Core Skills',title:'Security Fundamentals',dur:'6-18 Months',ms:['Earn CompTIA Security+ certification','Understand OWASP Top 10','Practice on TryHackMe and HackTheBox','Learn Python or Bash scripting'],skills:['CompTIA Security+','OWASP','Pen Testing basics','SIEM tools','Python'],res:['CompTIA Security+ Guide','HackTheBox Academy','OWASP.org','Web App Hackers Handbook']},
    {label:'Experience',title:'SOC Analyst Role',dur:'18 Months-3 Years',ms:['Land a Tier 1 SOC analyst role','Investigate real security incidents','Earn CEH or eJPT certification','Participate in bug bounty programs'],skills:['Splunk','Wireshark','Metasploit','Incident Response','Threat Intel'],res:['Splunk Free Training','eLearnSecurity courses','HackerOne','SANS Reading Room']},
    {label:'Specialisation',title:'Advanced Red/Blue Team',dur:'3-5 Years',ms:['Earn OSCP certification','Specialise in cloud security or malware analysis','Build custom security tools','Present at DEF CON or BSides'],skills:['OSCP','Red Team Ops','Malware Analysis','Cloud Security','Reverse Engineering'],res:['Offensive Security (OSCP)','PortSwigger Web Academy','MalwareTech blog','SANS GIAC certs']},
    {label:'Leadership',title:'CISO / Security Architect',dur:'5+ Years',ms:['Lead a security team or SOC','Define organisational security policy','Manage compliance (SOC 2, ISO 27001)','Advise boards on cyber risk'],skills:['Leadership','GRC','Risk Management','Compliance','Strategy'],res:['CISSP certification','ISACA resources','Gartner security research','Dark Reading']}
  ]},
  {id:'ux',emoji:'🎨',name:'UX/UI Designer',category:'Design & Creative',tags:['arts','technology'],ws:['remote','flexible'],mot:['creativity','autonomy','impact'],time:['fast','standard'],desc:'Shape how people experience digital products through design.',salary:{e:'$55,000',m:'$95,000',s:'$145,000+'},phases:[
    {label:'Foundation',title:'Design Principles',dur:'0-6 Months',ms:['Learn Figma from scratch','Study typography, colour theory, grids','Complete Google UX Design Certificate','Redesign 3 existing apps for practice'],skills:['Figma','Typography','Colour Theory','Wireframing','Prototyping'],res:['Google UX Design Cert (Coursera)','Figma official tutorials','Refactoring UI (book)','Mobbin.com']},
    {label:'Core Skills',title:'UX Research & Process',dur:'6-18 Months',ms:['Learn UX research methods','Build 3 case studies for portfolio','Master component libraries & design systems','Learn basic HTML/CSS for dev handoff'],skills:['User Research','Usability Testing','Design Systems','IA','HTML/CSS basics'],res:['Nielsen Norman Group articles','UX Collective on Medium','Maze.co','Laws of UX']},
    {label:'Experience',title:'First Design Role',dur:'18 Months-3 Years',ms:['Land junior UX role at startup or agency','Collaborate with engineers and PMs','Run end-to-end design sprints','Present designs to stakeholders'],skills:['Design Sprints','Collaboration','A/B Testing','Accessibility (WCAG)','Motion basics'],res:['Sprint (Jake Knapp book)','Design of Everyday Things','Principle for motion','Figma Community']},
    {label:'Specialisation',title:'Senior Designer',dur:'3-5 Years',ms:['Own the design of an entire product','Build and maintain a design system','Mentor junior designers','Specialise in motion or 3D design'],skills:['Motion Design','Design Leadership','3D (Spline)','Strategic Thinking','Systems Thinking'],res:['Figma Config talks','Lottie Files','Spline 3D tool','Dribbble']},
    {label:'Leadership',title:'Design Director',dur:'5+ Years',ms:['Lead a design team of 5-20+ people','Set design vision for the company','Contribute to product strategy','Build and hire top design talent'],skills:['Design Leadership','Brand Strategy','Hiring','Product Vision','Business Acumen'],res:['Design Leadership Handbook','The Making of a Manager (Zhuo)','First Round Review','IDEO design thinking']}
  ]},
  {id:'pm',emoji:'🗺️',name:'Product Manager',category:'Business',tags:['technology','business'],ws:['office','flexible'],mot:['money','impact','autonomy'],time:['standard'],desc:'Define strategy, lead cross-functional teams, and ship great products.',salary:{e:'$80,000',m:'$130,000',s:'$200,000+'},phases:[
    {label:'Foundation',title:'PM Fundamentals',dur:'0-6 Months',ms:['Read Inspired by Marty Cagan','Learn product frameworks (OKRs, JTBD)','Take a PM course (Reforge or Product School)','Shadow a PM for a week'],skills:['Product Thinking','OKRs','User Stories','Wireframing','Stakeholder Mgmt'],res:['Inspired (Marty Cagan)','Reforge programs','Lennys Podcast','Product School free resources']},
    {label:'Core Skills',title:'Analytics & Execution',dur:'6-18 Months',ms:['Learn SQL for product analytics','Define and track key metrics','Run end-to-end feature launch','Write your first PRD'],skills:['SQL','A/B Testing','Roadmapping','PRD Writing','Analytics'],res:['Amplitude Academy','Product Manager HQ','Stratechery blog','Mixpanel University']},
    {label:'Experience',title:'APM or PM Role',dur:'18 Months-3 Years',ms:['Land APM program at tech company','Own a product area end-to-end','Launch a product to 100k+ users','Build cross-functional influence'],skills:['Technical Comms','Go-to-Market','Pricing','Research','Leadership'],res:['Google APM alumni blog','YC Startup School','First Round PM articles','ProductPlan blog']},
    {label:'Specialisation',title:'Senior / Group PM',dur:'3-5 Years',ms:['Manage multiple PMs or large product area','Influence product strategy and roadmap','Speak at product conferences','Build a personal brand in product'],skills:['Product Strategy','Cross-functional Leadership','Narrative Building','Pricing Strategy','OKR setting'],res:['Shreyas Doshi frameworks','Mind the Product blog','Amplitude Benchmark Report','Ravi Mehta PM frameworks']},
    {label:'Leadership',title:'VP of Product / CPO',dur:'5+ Years',ms:['Lead a product organisation of 5-50+ PMs','Define product vision for the company','Report to CEO and influence board','Consider founding a startup'],skills:['Executive Communication','Vision Setting','Hiring','P&L Ownership','Board Presentations'],res:['Lennys Newsletter','Product Leadership (book)','SaaStr talks','The CEO Next Door (book)']}
  ]},
  {id:'doctor',emoji:'🩺',name:'Doctor / Physician',category:'Healthcare',tags:['healthcare','science'],ws:['office','field'],mot:['impact','stability','money'],time:['specialist'],desc:'Diagnose, treat, and prevent illness -- healing people every day.',salary:{e:'$60,000 (residency)',m:'$220,000',s:'$350,000+'},phases:[
    {label:'Foundation',title:'Pre-Med & MCAT',dur:'0-4 Years (Undergrad)',ms:['Complete pre-med coursework (biology, chemistry, physics)','Maintain GPA above 3.5','Shadow physicians in multiple specialties','Ace the MCAT (target 510+)'],skills:['Biology','Chemistry','Physics','Critical Analysis','Medical Terminology'],res:['Khan Academy MCAT prep (free)','Anki flashcards','AAMC official MCAT resources','Princeton Review MCAT']},
    {label:'Core Skills',title:'Medical School (Years 1-2)',dur:'2 Years',ms:['Complete pre-clinical sciences (anatomy, physiology, pharm)','Pass USMLE Step 1','Begin clinical rotations','Join a research lab'],skills:['Anatomy','Physiology','Pharmacology','Pathology','Clinical Skills'],res:['First Aid for USMLE Step 1','Sketchy Medical','Pathoma','Anki medical decks']},
    {label:'Experience',title:'Clinical Rotations & Residency',dur:'2-7 Years',ms:['Complete core clinical rotations','Pass USMLE Step 2 and 3','Match into residency in chosen specialty','Complete 3-7 year residency training'],skills:['Clinical Diagnosis','Patient Communication','Procedural Skills','EMR Systems','Evidence-Based Medicine'],res:['UpToDate clinical database','Osmosis medical education','MDCalc','NEJM & The Lancet']},
    {label:'Specialisation',title:'Fellowship',dur:'1-3 Years',ms:['Choose subspecialty (cardiology, oncology, etc.)','Complete fellowship training','Begin publishing research','Obtain board certification'],skills:['Subspecialty Procedures','Research','Board Certification','Teaching'],res:['Specialty society guidelines','PubMed','UpToDate updates','Grand Rounds']},
    {label:'Leadership',title:'Attending Physician / Chief',dur:'10+ Years',ms:['Practise as fully licensed attending','Build a long-term patient panel','Consider academic medicine or hospital leadership','Lead a department'],skills:['Clinical Excellence','Medical Leadership','Research/Teaching','Policy','Practice Management'],res:['AMA resources','Hospital admin courses','Physician Leadership Journal','Doximity']}
  ]},
  {id:'lawyer',emoji:'⚖️',name:'Lawyer / Advocate',category:'Law & Government',tags:['law','business'],ws:['office'],mot:['money','impact','stability'],time:['specialist'],desc:'Argue cases, draft contracts, and protect clients through legal expertise.',salary:{e:'$75,000',m:'$150,000',s:'$400,000+'},phases:[
    {label:'Foundation',title:'Pre-Law & LSAT',dur:'0-4 Years (Undergrad)',ms:['Study political science, English, or philosophy','Develop strong writing and debate skills','Score 170+ on the LSAT','Intern at a law firm or legal aid clinic'],skills:['Critical Thinking','Writing','Research','LSAT Prep','Public Speaking'],res:['Khan Academy LSAT (free)','Official PrepTest materials','NALP student resources','LSAC.org']},
    {label:'Core Skills',title:'Law School (JD)',dur:'3 Years',ms:['Complete 1L: Contracts, Torts, Property, Civ Pro','Write for Law Review or Moot Court','Land a summer associate position','Specialise in your area of law by 3L'],skills:['Legal Research (Westlaw)','Legal Writing','Case Analysis','Oral Argument','Negotiation'],res:['Westlaw & LexisNexis (via law school)','Getting to Maybe (book)','Barbri bar prep','Bloomberg Law']},
    {label:'Experience',title:'Bar Exam & First Role',dur:'1-3 Years',ms:['Pass the Bar Exam','Join BigLaw, boutique, or public interest firm','Bill 2,000+ hours/year in BigLaw','Build a solid client foundation'],skills:['Contract Drafting','Litigation','Client Counselling','Due Diligence','Legal Strategy'],res:['NALP job directory','Vault Guide to Law Firms','Above the Law blog','BigLaw Investor podcast']},
    {label:'Specialisation',title:'Mid-Level Associate',dur:'3-6 Years',ms:['Deepen expertise in chosen practice area','Lead projects and supervise junior associates','Develop client relationships','Consider lateral move to in-house or government'],skills:['Practice Area Mastery','Business Development','People Management','Negotiation Strategy','Client Relations'],res:['American Bar Association resources','Legal 500 directory','Harvard Law executive ed','Client management tools']},
    {label:'Leadership',title:'Partner / General Counsel',dur:'7+ Years',ms:['Make partner at law firm','Or become General Counsel of a company','Build book of business worth $2M+','Influence legal precedent or policy'],skills:['Partnership','Business Development','Law Firm Management','GC Role','Board Advisory'],res:['ACC (Association of Corporate Counsel)','General Counsel Magazine','Law Firm Management resources','Legal Week Intelligence']}
  ]},
  {id:'scientist',emoji:'🔬',name:'Research Scientist',category:'Healthcare & Sciences',tags:['science'],ws:['office','field'],mot:['impact','creativity','stability'],time:['specialist'],desc:'Push the boundaries of human knowledge through experiments and discovery.',salary:{e:'$55,000',m:'$95,000',s:'$145,000+'},phases:[
    {label:'Foundation',title:'Undergraduate Science',dur:'0-4 Years',ms:['Complete BSc in Biology, Chemistry or Physics','Join a research lab as undergrad researcher','Present at undergraduate research symposium','Develop lab skills and coding (R/Python)'],skills:['Lab Techniques','Scientific Writing','Data Analysis','Research Ethics','Statistics'],res:['PubMed research articles','Nature & Science journals','Khan Academy science','R/Python for data']},
    {label:'Core Skills',title:'PhD Programme',dur:'4-6 Years',ms:['Secure funded PhD position','Pass qualifying exams','Publish 2+ first-author papers','Defend your doctoral dissertation'],skills:['Experimental Design','Statistical Analysis','Grant Writing','Peer Review','Advanced Lab'],res:['NIH grant writing resources','Nature Careers articles','Thesis Whisperer blog','R/Python for science']},
    {label:'Experience',title:'Postdoctoral Research',dur:'2-4 Years',ms:['Join a leading research group as postdoc','Publish high-impact papers','Apply for independent grants','Build international collaborations'],skills:['Independent Research','Grant Acquisition','Mentoring','Science Communication','Networking'],res:['NIH RePORTER','Science Careers journal','Academic job market resources','Cold Spring Harbor Protocols']},
    {label:'Specialisation',title:'Independent Researcher / PI',dur:'5-10 Years',ms:['Land tenure-track faculty or industry scientist role','Establish independent research programme','Win major research grants','Publish landmark papers'],skills:['Lab Management','Grant Portfolio','Teaching','Supervision','Science Policy'],res:['NIH funding opportunities','Scientific American','eLife open-access journal','Society for Neuroscience']},
    {label:'Leadership',title:'Full Professor / Research Director',dur:'10+ Years',ms:['Achieve Full Professor with tenure','Direct a large research institute','Win national or international prizes','Influence science policy and funding'],skills:['Scientific Leadership','Policy Advocacy','Interdisciplinary Collaboration','Commercialisation'],res:['National Academies of Sciences','Royal Society (UK)','Howard Hughes Medical Institute','Nobel Prize lectures']}
  ]},
  {id:'teacher',emoji:'📚',name:'Teacher / Professor',category:'Education',tags:['education','science'],ws:['office'],mot:['impact','stability','creativity'],time:['standard'],desc:'Educate, inspire, and shape the next generation of minds.',salary:{e:'$38,000',m:'$65,000',s:'$110,000+'},phases:[
    {label:'Foundation',title:'Undergraduate + Education Theory',dur:'0-4 Years',ms:['Complete BA/BSc in subject area','Study pedagogy, curriculum design','Complete student teaching placement','Earn teaching credential (QTS/state cert)'],skills:['Pedagogy','Curriculum Design','Classroom Management','Subject Expertise','Assessment'],res:['Visible Learning (Hattie research)','TED-Ed videos','Edutopia','Common Sense Education']},
    {label:'Core Skills',title:'First Teaching Post',dur:'1-3 Years',ms:['Complete probationary/NQT year','Plan and deliver lessons for 120+ students','Manage diverse classroom dynamics','Build parent-teacher relationships'],skills:['Lesson Planning','Differentiated Instruction','Formative Assessment','Parent Communication','SEN Support'],res:['TES (Times Educational Supplement)','Khan Academy teacher tools','ClassDojo','Google Classroom']},
    {label:'Experience',title:'Experienced Practitioner',dur:'3-6 Years',ms:['Earn outstanding lesson observation ratings','Lead a subject or year group','Develop and implement curriculum','Mentor newly qualified teachers'],skills:['Subject Leadership','Data Analysis (outcomes)','CPD Leadership','Report Writing','Coaching'],res:['ResearchEd organisation','The Learning Scientists','Rosenshine Principles','Teach Like a Champion (Lemov)']},
    {label:'Specialisation',title:'Middle Leadership',dur:'5-10 Years',ms:['Become Head of Department or Year Leader','Manage budgets and resources','Lead staff CPD','Drive school improvement initiatives'],skills:['Middle Leadership','Performance Management','Budget Management','Staff Development','Strategic Planning'],res:['NPQML qualification (UK)','ASCD organisation','Harvard GSE resources','Chartered College of Teaching']},
    {label:'Leadership',title:'Headteacher / Dean / Professor',dur:'10+ Years',ms:['Become Headteacher, Principal, or University Professor','Shape school culture and vision','Publish research or educational books','Influence national education policy'],skills:['Strategic Leadership','School Governance','Research Publication','Policy Engagement','Community Leadership'],res:['NPQH qualification (UK)','NAHT association','BERA research association','Harvard Principal Center']}
  ]},
  {id:'pilot',emoji:'✈️',name:'Commercial Pilot',category:'Trades & Skilled Professions',tags:['trades','technology'],ws:['field'],mot:['fame','money','stability'],time:['standard','specialist'],desc:'Command aircraft and transport passengers around the world.',salary:{e:'$45,000 (regional)',m:'$150,000',s:'$350,000+'},phases:[
    {label:'Foundation',title:'Private Pilot Licence (PPL)',dur:'0-1 Year',ms:['Pass aviation medical (Class 1)','Complete 45-70 hours flight time for PPL','Pass PPL theory exams','Fly solo cross-country flight'],skills:['Aerodynamics','Navigation','Radio Communication','Weather Reading','Aircraft Systems'],res:['EASA/FAA training guidelines','Rod Machado Private Pilot Handbook','Sporty\'s online courses','MzeroA YouTube']},
    {label:'Core Skills',title:'Instrument Rating & CPL',dur:'1-3 Years',ms:['Earn Instrument Rating (IR)','Build 200+ total flight hours','Complete Commercial Pilot Licence (CPL)','Pass all ATPL frozen theory exams'],skills:['Instrument Flying','Multi-Engine Rating','Crew Resource Management','Flight Planning','Emergency Procedures'],res:['Jeppesen training materials','PilotEdge ATC simulator','Oxford Aviation Academy notes','Aviation Weather Center']},
    {label:'Experience',title:'Flight Instructor / Hour Building',dur:'2-4 Years',ms:['Become CFI to build hours','Reach 1,500 hours total time','Join regional airline as first officer','Pass airline type rating course'],skills:['Teaching Flying','IFR Ops','Multi-crew Cooperation','SOPs','CRM'],res:['ATP flight school programs','FAA ATP Certificate guide','Airline Pilot Central','AOPA resources']},
    {label:'Specialisation',title:'Airline First Officer',dur:'3-6 Years',ms:['Fly for regional or low-cost carrier','Build jet and PIC hours','Upgrade to Captain at regional airline','Interview for major airline positions'],skills:['Jet Operations','Advanced CRM','Line Operations','International Ops','Check Training'],res:['IATA training programmes','Cockpit Confidential (book)','NBAA resources','CockpitChatter podcast']},
    {label:'Leadership',title:'Captain / Chief Pilot',dur:'8+ Years',ms:['Reach Captain rank at major airline','Upgrade to widebody aircraft (B777, A380)','Become Check or Training Captain','Possibly become Chief Pilot or Director of Ops'],skills:['Command Authority','Training & Standards','Safety Management','Route Planning','Leadership'],res:['ICAO safety management','Flight Safety Foundation','ATC Communications mastery','BALPA']}
  ]},
  {id:'chef',emoji:'👨‍🍳',name:'Chef / Culinary Artist',category:'Trades & Skilled Professions',tags:['trades','arts'],ws:['office','field'],mot:['creativity','fame','autonomy'],time:['standard'],desc:'Master the art of cuisine from classical techniques to innovative gastronomy.',salary:{e:'$30,000',m:'$60,000',s:'$120,000+'},phases:[
    {label:'Foundation',title:'Culinary Basics',dur:'0-1 Year',ms:['Master the five French mother sauces','Learn knife skills and mise en place','Enrol in culinary school or apprenticeship','Work every station in a kitchen'],skills:['Knife Skills','Classical Techniques','Flavour Pairing','Kitchen Safety','Mise en Place'],res:['Escoffier culinary school','Jacques Pepin masterclasses','Salt Fat Acid Heat (book)','Gordon Ramsay MasterClass']},
    {label:'Core Skills',title:'Line Cook → Sous Chef',dur:'1-4 Years',ms:['Work in high-volume or Michelin kitchen','Master a specific cuisine','Learn pastry and baking fundamentals','Understand food cost and kitchen economics'],skills:['Cuisine Specialisation','Menu Development','Food Costing','Pastry','Team Coordination'],res:['On Food and Cooking (McGee book)','Modernist Cuisine series','Chef\'s Table (Netflix)','Auguste Escoffier online']},
    {label:'Experience',title:'Sous Chef',dur:'3-6 Years',ms:['Run kitchen as sous chef','Design seasonal menus','Manage kitchen staff and operations','Stage at a renowned restaurant abroad'],skills:['Menu Design','Kitchen Management','Supplier Relations','Staff Training','Food Photography'],res:['Eater.com','Resy for restaurant intel','StarChefs Rising Stars Awards','Institute of Culinary Education']},
    {label:'Specialisation',title:'Executive Chef',dur:'5-8 Years',ms:['Lead kitchen as Executive Chef','Develop a signature cuisine style','Pursue a Michelin star','Build relationships with food journalists'],skills:['Executive Management','PR & Media','Procurement','Event Catering','Food Science'],res:['Michelin Guide','James Beard Foundation','Worlds 50 Best Restaurants','Gastronom magazine']},
    {label:'Leadership',title:'Restaurant Owner / TV Chef',dur:'8+ Years',ms:['Open your own restaurant','Earn press recognition and possibly a Michelin star','Write a cookbook or host a cooking show','Build a culinary brand or hospitality group'],skills:['Entrepreneurship','Brand Building','Media Presence','Hospitality Management','Investment'],res:['Restaurant Business magazine','The Bear (FX show)','Food & Wine Festival','National Restaurant Association']}
  ]},
  {id:'entrepreneur',emoji:'🚀',name:'Entrepreneur / Startup Founder',category:'Business',tags:['business','technology'],ws:['flexible'],mot:['money','autonomy','fame','impact'],time:['standard','specialist'],desc:'Build companies from zero, create value, and change entire industries.',salary:{e:'$0-$60,000',m:'$100,000+',s:'Unlimited'},phases:[
    {label:'Foundation',title:'Business & Market Literacy',dur:'0-6 Months',ms:['Read Zero to One, The Lean Startup, Rework','Identify a painful problem in a market you know','Talk to 50 potential customers before building','Learn basic financial literacy and unit economics'],skills:['Customer Discovery','Business Model Canvas','Finance basics','Market Research','Storytelling'],res:['Zero to One (Peter Thiel)','The Lean Startup (Eric Ries)','YC Startup School (free)','Paul Graham essays (paulgraham.com)']},
    {label:'Core Skills',title:'MVP & Validation',dur:'6-18 Months',ms:['Build an MVP in under 3 months','Get 10 paying customers before raising money','Launch on Product Hunt or Hacker News','Achieve product-market fit signals'],skills:['Product Development','Sales','Marketing','Fundraising Basics','Hiring'],res:['Indie Hackers community','Product Hunt','AngelList','First Round: "Signs of PMF"']},
    {label:'Experience',title:'Growth & Team Building',dur:'18 Months-3 Years',ms:['Raise pre-seed or seed funding (or bootstrap)','Hire your first 5 employees','Scale to $1M ARR','Build repeatable sales and marketing channels'],skills:['Fundraising','Go-to-Market','Team Building','Culture Setting','Financial Planning'],res:['YC application tips','How to Raise a Seed Round','SaaStr content','Levels.fyi benchmarks']},
    {label:'Specialisation',title:'Scale Phase',dur:'3-5 Years',ms:['Scale to $10M ARR','Build executive team (CTO, CFO, CMO)','Expand to new markets or products','Consider Series A/B fundraising'],skills:['Executive Leadership','M&A','International Expansion','Board Management','Investor Relations'],res:['a16z blog','Sequoia Guides','Patrick Collison interviews','Stripe Atlas resources']},
    {label:'Leadership',title:'Category Leader / Exit',dur:'5+ Years',ms:['Build a $100M+ revenue company','Execute IPO or strategic acquisition','Reinvest as angel or VC','Start again with a new company'],skills:['IPO Readiness','M&A Strategy','Legacy Building','Investor Relations','Angel Investing'],res:['Bill Gurley blog','The Everything Store (biography)','Harvard Business Review','YC alumni networks']}
  ]},
  {id:'journalist',emoji:'📰',name:'Journalist / Investigative Reporter',category:'Education & Social Impact',tags:['education','entertainment','arts'],ws:['flexible','field'],mot:['impact','fame','creativity'],time:['fast','standard'],desc:'Uncover truth, hold power accountable, and inform the public.',salary:{e:'$35,000',m:'$65,000',s:'$120,000+'},phases:[
    {label:'Foundation',title:'Journalism Fundamentals',dur:'0-2 Years',ms:['Complete Journalism or English degree','Write for student newspaper or blog','Learn AP Style and inverted pyramid writing','Build an initial clips portfolio'],skills:['News Writing','AP Style','Interviewing','Research','Ethics'],res:['SPJ Code of Ethics','Poynter journalism training','The Elements of Journalism (book)','ProPublica Institute (free)']},
    {label:'Core Skills',title:'Beat Reporting',dur:'1-3 Years',ms:['Land first newsroom job','Develop a beat (politics, tech, health)','Build a network of sources and contacts','Break your first exclusive story'],skills:['Source Development','Beat Reporting','Multimedia','Data Journalism basics','Social Media'],res:['IRE (Investigative Reporters & Editors)','MuckRock FOIA tools','Datawrapper','NICAR data journalism training']},
    {label:'Experience',title:'Staff Reporter',dur:'2-5 Years',ms:['Move to national or digital-first outlet','Use FOIA requests and public records','Produce a multi-part investigative series','Win a regional or national journalism award'],skills:['Investigative Research','FOIA/FOI Requests','Long-form Writing','Fact-Checking','Legal Awareness'],res:['The Guardian journalism training','Columbia Journalism Review','Nieman Foundation at Harvard','DocumentCloud']},
    {label:'Specialisation',title:'Senior Reporter / Correspondent',dur:'4-8 Years',ms:['Become senior reporter or foreign correspondent','Publish book-length investigations','Develop expertise in a complex topic area','Build a personal newsletter audience'],skills:['Foreign Correspondence','Book Writing','Podcasting','Brand Building','Editorial Judgment'],res:['Foreign Policy magazine','The Atlantic longform','Substack for newsletters','ICIJ']},
    {label:'Leadership',title:'Editor / Bureau Chief / Author',dur:'8+ Years',ms:['Become editor of a major publication','Publish acclaimed book or investigative series','Win Pulitzer Prize or equivalent','Mentor the next generation of journalists'],skills:['Editorial Leadership','Budget & Staff Management','Publishing','Press Freedom Advocacy','Public Speaking'],res:['ASNE (Society of News Editors)','Pulitzer Prize archive','News Leaders Association','Press Freedom Index (RSF)']}
  ]},
  {id:'musician',emoji:'🎵',name:'Musician / Music Producer',category:'Arts, Sports & Entertainment',tags:['arts','entertainment'],ws:['flexible','remote'],mot:['creativity','fame','autonomy'],time:['standard','specialist'],desc:'Create, perform, and produce music that moves people emotionally.',salary:{e:'$25,000',m:'$60,000',s:'Unlimited'},phases:[
    {label:'Foundation',title:'Musical Fundamentals',dur:'0-3 Years',ms:['Master your primary instrument or vocals','Learn music theory (scales, harmony, rhythm)','Record your first original songs at home','Perform at local open mics or venues'],skills:['Instrument Mastery','Music Theory','Ear Training','Home Recording','Performance'],res:['Musictheory.net (free)','Justin Guitar (free)','Rick Beato YouTube','GarageBand or Ableton Lite']},
    {label:'Core Skills',title:'Production & Songwriting',dur:'1-4 Years',ms:['Learn a DAW (Ableton, Logic Pro, FL Studio)','Write and produce 20+ original tracks','Release music on Spotify and Apple Music','Collaborate with other musicians and producers'],skills:['DAW (Ableton/Logic)','Mixing Basics','Songwriting','Music Distribution','Sample Clearance'],res:['Ableton official tutorials','In The Mix YouTube','DistroKid or TuneCore','Splice for sample packs']},
    {label:'Experience',title:'Live Performance & Fan Building',dur:'2-6 Years',ms:['Build a consistent touring/live schedule','Grow to 10,000+ monthly listeners','Land sync licensing deals','License first track commercially'],skills:['Live Performance','Marketing','Sync Licensing','Fan Engagement','Music Business'],res:['Music Gateway for sync','CD Baby','Hypebot music industry news','Music Business Worldwide']},
    {label:'Specialisation',title:'Producer / Signed Artist',dur:'4-8 Years',ms:['Sign with a record label or build indie label','Produce tracks for other established artists','Land a major sync placement (Netflix, brand)','Headline first festival slot'],skills:['Advanced Mixing & Mastering','A&R','Record Label Deals','Music Publishing','Tour Management'],res:['Pro Tools for production','Music Business Nationwide','Grammy Pro (NARAS)','Sound On Sound magazine']},
    {label:'Leadership',title:'Headliner / Label Owner',dur:'8+ Years',ms:['Release critically acclaimed album','Headline major festivals (Glastonbury, Coachella)','Found own record label or production company','Build a lasting musical legacy'],skills:['Label Management','Artist Development','Legacy Building','Global Touring','Brand Partnerships'],res:['Berklee Online courses','SXSW Music Conference','Grammy Museum programs','NPR Tiny Desk']}
  ]},
  {id:'architect',emoji:'🏛️',name:'Architect',category:'Design & Creative',tags:['arts','technology','business'],ws:['office','field'],mot:['creativity','stability','fame'],time:['specialist'],desc:'Design buildings and spaces that shape how people live, work, and gather.',salary:{e:'$55,000',m:'$90,000',s:'$150,000+'},phases:[
    {label:'Foundation',title:'Architecture School',dur:'5 Years',ms:['Earn B.Arch or M.Arch degree','Master AutoCAD and Revit BIM','Build physical and digital design models','Win a design studio competition'],skills:['Technical Drawing','AutoCAD','Revit BIM','SketchUp','Design Thinking'],res:['ArchDaily for inspiration','Dezeen magazine','ArchDaily YouTube','AIA learning resources']},
    {label:'Core Skills',title:'Internship & IDP',dur:'3 Years',ms:['Complete 3,740 hours AXP internship','Work under licensed architect in design','Learn building codes, structural systems, MEP','Develop construction documentation skills'],skills:['Construction Documents','Building Codes','Project Management','Client Communication','Site Visits'],res:['NCARB IDP guides','Architect Licensing guides','Architects Handbook of Professional Practice','Procore']},
    {label:'Experience',title:'ARE Exams & Licensure',dur:'1-2 Years',ms:['Pass all 6 ARE divisions','Earn professional licence','Lead a design project from schematic to construction','Build portfolio to 8-10 strong projects'],skills:['ARE preparation','Practice Management','Specification Writing','LEED basics','Contractor Coordination'],res:['NCARB ARE 5.0 materials','Black Spectacles ARE prep','LEED AP study guide','Ballast Review']},
    {label:'Specialisation',title:'Project Architect',dur:'4-8 Years',ms:['Lead design and delivery of complex projects','Specialise in residential, civic or sustainable design','Earn LEED AP or WELL AP credentials','Enter design competitions'],skills:['Parametric Design (Grasshopper)','Sustainable Design','LEED AP','Project Leadership','Urban Planning'],res:['Grasshopper tutorials','USGBC LEED credentials','Dezeen Awards','Archinect.com']},
    {label:'Leadership',title:'Principal / Design Director',dur:'10+ Years',ms:['Become principal or partner of a firm','Or open your own architecture studio','Win prestigious design awards (Pritzker, AIA)','Teach at a school of architecture'],skills:['Firm Management','Business Development','Brand & Legacy','Public Advocacy','Teaching'],res:['AIA awards archive','World Architecture Festival','Renzo Piano biography','Dezeen Awards']}
  ]},
  {id:'coach',emoji:'🏆',name:'Sports Coach',category:'Arts, Sports & Entertainment',tags:['sports','education'],ws:['field','flexible'],mot:['impact','fame','stability'],time:['standard','specialist'],desc:'Develop athletes, build teams, and lead performance at the highest level.',salary:{e:'$35,000',m:'$80,000',s:'$500,000+'},phases:[
    {label:'Foundation',title:'Sport Background & Coaching Basics',dur:'0-2 Years',ms:['Compete at collegiate or semi-professional level','Earn Level 1 coaching certificate in your sport','Begin volunteering as assistant coach','Study sports science or kinesiology'],skills:['Sport Knowledge','Communication','Training Design','First Aid','Leadership basics'],res:['UK Coaching / NGB certs','NSCA (strength & conditioning)','NSCAA coaching certs','Coursera Sports Management']},
    {label:'Core Skills',title:'Assistant Coaching',dur:'2-5 Years',ms:['Become full-time assistant coach at club or college','Earn Level 2/3 coaching award','Develop video review and analysis skills','Build network with other coaches'],skills:['Tactical Analysis','Video Analysis','Strength & Conditioning','Athlete Psychology','Game Planning'],res:['Hudl video analysis','The Coach U podcast','Pete Carroll coaching philosophy','Functional Patterns']},
    {label:'Experience',title:'Head Coach (Youth / Amateur)',dur:'4-8 Years',ms:['Take head coaching role at high school or amateur club','Win league or regional titles','Develop players who progress to professional level','Build a coaching philosophy and system'],skills:['Head Coach Leadership','Recruitment','Media Communication','Budget Management','Parent/Athlete Relations'],res:['Human Performance Institute','Championship Performance magazine','Positive Coaching Alliance','NACDA collegiate athletics']},
    {label:'Specialisation',title:'Professional / College Coach',dur:'6-12 Years',ms:['Break into professional or college-level coaching','Develop a proven system and track record','Build coaching staff and infrastructure','Work with sports science and analytics teams'],skills:['Professional Coaching','Sports Analytics','Elite Athlete Management','Contract Negotiation','Brand Building'],res:['Sports Reference statistics','MIT Sloan Sports Analytics','Moneyball principles','EliteCoachPodcast']},
    {label:'Leadership',title:'Elite / National Team Coach',dur:'10+ Years',ms:['Coach at top-tier professional or national team','Develop coaching methodology adopted by others','Win championships and cultivate legacy','Transition to GM or Director role if desired'],skills:['Elite Performance','International Strategy','Legacy Building','Media Management','Culture Creation'],res:['ICCE (International Council of Coaching Excellence)','Sport Performance Analysis journal','Coaching Science Abstracts','National federation resources']}
  ]}
];

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const state = { step:1, name:'', education:'', interests:[], workStyle:'', time:'', motivator:'', matches:[], selected:null, fromExplore:false };

// ══════════════════════════════════════════════
// CANVAS PARTICLES
// ══════════════════════════════════════════════
(function(){
  const c = document.getElementById('bgCanvas');
  const ctx = c.getContext('2d');
  let W, H, pts = [];
  function resize(){ W = c.width = innerWidth; H = c.height = innerHeight; }
  resize(); addEventListener('resize', resize);
  for(let i=0;i<100;i++) pts.push({x:Math.random()*1000,y:Math.random()*800,dx:(Math.random()-.5)*.25,dy:(Math.random()-.5)*.25,r:Math.random()*1.2+.3,a:Math.random()*.4+.1});
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(200,245,54,${p.a})`; ctx.fill();
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<90){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(124,91,247,${.07*(1-d/90)})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ══════════════════════════════════════════════
// SCREEN SWITCHING
// ══════════════════════════════════════════════
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ══════════════════════════════════════════════
// QUIZ LOGIC
// ══════════════════════════════════════════════
function goStep(n){
  document.getElementById('step'+state.step).classList.remove('active');
  state.step = n;
  document.getElementById('step'+n).classList.add('active');
  document.getElementById('progFill').style.width = ((n-1)/5*100)+'%';
  document.getElementById('stepCtr').textContent = n+' / 6';
}

// Single-select grids
['eduGrid','wsGrid','timeGrid','motGrid'].forEach(gid=>{
  document.getElementById(gid).querySelectorAll('.opt').forEach(opt=>{
    opt.addEventListener('click',()=>{
      document.getElementById(gid).querySelectorAll('.opt').forEach(o=>o.classList.remove('sel'));
      opt.classList.add('sel');
    });
  });
});

// Multi-select interests
document.getElementById('intGrid').querySelectorAll('.itag').forEach(tag=>{
  tag.addEventListener('click',()=>{
    if(tag.classList.contains('sel')){ tag.classList.remove('sel'); }
    else if(document.querySelectorAll('.itag.sel').length < 3){ tag.classList.add('sel'); }
  });
});

// Next buttons
document.getElementById('n1').addEventListener('click',()=>{
  const v = document.getElementById('nameInput').value.trim();
  if(!v){ document.getElementById('nameInput').style.borderColor='#f536a8'; setTimeout(()=>document.getElementById('nameInput').style.borderColor='',700); return; }
  state.name = v; goStep(2);
});
document.getElementById('n2').addEventListener('click',()=>{ const s=document.querySelector('#eduGrid .sel'); if(!s) return; state.education=s.dataset.v; goStep(3); });
document.getElementById('n3').addEventListener('click',()=>{ const s=[...document.querySelectorAll('.itag.sel')]; if(!s.length) return; state.interests=s.map(t=>t.dataset.v); goStep(4); });
document.getElementById('n4').addEventListener('click',()=>{ const s=document.querySelector('#wsGrid .sel'); if(!s) return; state.workStyle=s.dataset.v; goStep(5); });
document.getElementById('n5').addEventListener('click',()=>{ const s=document.querySelector('#timeGrid .sel'); if(!s) return; state.time=s.dataset.v; goStep(6); });

document.getElementById('submitBtn').addEventListener('click',()=>{
  const s=document.querySelector('#motGrid .sel'); if(!s) return;
  state.motivator=s.dataset.v;
  // Matching algorithm
  const scored = CAREERS.map(c=>{
    let sc=0;
    state.interests.forEach(i=>{ if(c.tags.includes(i)) sc+=15; });
    if(c.ws.includes(state.workStyle)) sc+=18;
    if(c.mot.includes(state.motivator)) sc+=18;
    if(c.time.includes(state.time)) sc+=14;
    sc += Math.random()*6;
    return { c, pct: Math.min(98, Math.max(55, Math.round(sc/100*100))) };
  });
  scored.sort((a,b)=>b.pct-a.pct);
  state.matches = scored.slice(0,6);
  state.fromExplore = false;
  renderMatches();
  show('s-results');
});

document.getElementById('qBackBtn').addEventListener('click',()=>{
  if(state.step===1) show('s-hero'); else goStep(state.step-1);
});

// ══════════════════════════════════════════════
// RENDER MATCHES
// ══════════════════════════════════════════════
function renderMatches(){
  document.getElementById('resName').textContent = state.name || 'Friend';
  const grid = document.getElementById('matchGrid');
  grid.innerHTML='';
  state.matches.forEach((m,i)=>{
    const div = document.createElement('div');
    div.className='mcard';
    div.style.animationDelay=i*.08+'s';
    div.innerHTML=`
      <div class="mpct">▲ ${m.pct}% Match</div>
      <div class="mbar"><div class="mfill" style="width:0%" data-w="${m.pct}%"></div></div>
      <span class="memoji">${m.c.emoji}</span>
      <div class="mname">${m.c.name}</div>
      <span class="mcat">${m.c.category}</span>
      <p class="mdesc">${m.c.desc}</p>
      <span class="mcta">View Roadmap →</span>
    `;
    div.addEventListener('click',()=>{ state.selected=m.c; renderRoadmap(); show('s-roadmap'); });
    grid.appendChild(div);
    setTimeout(()=>{ div.querySelector('.mfill').style.width=m.pct+'%'; }, 120+i*70);
  });
}

// ══════════════════════════════════════════════
// RENDER ROADMAP
// ══════════════════════════════════════════════
function renderRoadmap(){
  const car = state.selected;
  document.getElementById('rmEmoji').textContent = car.emoji;
  document.getElementById('rmTitle').textContent = car.name;
  document.getElementById('salBar').innerHTML=`
    <div class="sal-item"><span class="sal-label">Entry Level</span><span class="sal-val">${car.salary.e}</span></div>
    <div class="sal-div"></div>
    <div class="sal-item"><span class="sal-label">Mid Career</span><span class="sal-val">${car.salary.m}</span></div>
    <div class="sal-div"></div>
    <div class="sal-item"><span class="sal-label">Senior Level</span><span class="sal-val">${car.salary.s}</span></div>
  `;
  const tl = document.getElementById('timeline');
  tl.innerHTML='';
  const saved = JSON.parse(localStorage.getItem('pf-'+car.id)||'{}');
  car.phases.forEach((ph,pi)=>{
    const sec = document.createElement('div');
    sec.className='tphase';
    sec.style.animationDelay=pi*.12+'s';
    sec.innerHTML=`
      <div class="pdot"></div>
      <div class="plabel">${ph.label}</div>
      <div class="pdur">⏱ ${ph.dur}</div>
      <div class="ptitle">${ph.title}</div>
      <ul class="mlist">${ph.ms.map((m,mi)=>{
        const k=pi+'-'+mi, done=saved[k]?'done':'';
        return `<li class="mitem ${done}" data-k="${k}"><span class="mchk">${done?'✓':''}</span><span class="mtxt">${m}</span></li>`;
      }).join('')}</ul>
      <div class="skills-sec"><div class="sec-hd">Skills to Acquire</div><div class="stags">${ph.skills.map(s=>`<span class="stag">${s}</span>`).join('')}</div></div>
      <div class="skills-sec"><div class="sec-hd">Resources</div><ul class="res-list">${ph.res.map(r=>`<li class="res-item">${r}</li>`).join('')}</ul></div>
    `;
    tl.appendChild(sec);
  });
  tl.querySelectorAll('.mitem').forEach(item=>{
    item.addEventListener('click',()=>{
      const done=item.classList.toggle('done');
      item.querySelector('.mchk').textContent=done?'✓':'';
      const p=JSON.parse(localStorage.getItem('pf-'+car.id)||'{}');
      if(done) p[item.dataset.k]=true; else delete p[item.dataset.k];
      localStorage.setItem('pf-'+car.id, JSON.stringify(p));
    });
  });
}

// ══════════════════════════════════════════════
// EXPLORE
// ══════════════════════════════════════════════
function renderExplore(filter=''){
  const b=document.getElementById('cbrowser');
  b.innerHTML='';
  CAREERS.filter(c=>c.name.toLowerCase().includes(filter)||c.category.toLowerCase().includes(filter)).forEach(car=>{
    const div=document.createElement('div');
    div.className='bcard';
    div.innerHTML=`<span class="bcemoji">${car.emoji}</span><div><div class="bcname">${car.name}</div><div class="bccat">${car.category}</div></div>`;
    div.addEventListener('click',()=>{ state.selected=car; renderRoadmap(); show('s-roadmap'); });
    b.appendChild(div);
  });
}
document.getElementById('srchInput').addEventListener('input',e=>renderExplore(e.target.value.trim().toLowerCase()));

// ══════════════════════════════════════════════
// NAV WIRING
// ══════════════════════════════════════════════
document.getElementById('startBtn').addEventListener('click',()=>{
  state.step=1;
  document.querySelectorAll('.qstep').forEach(s=>s.classList.remove('active'));
  document.getElementById('step1').classList.add('active');
  document.getElementById('progFill').style.width='0%';
  document.getElementById('stepCtr').textContent='1 / 6';
  show('s-quiz');
});

document.getElementById('exploreBtn').addEventListener('click',()=>{ renderExplore(); show('s-explore'); });
document.getElementById('expBackBtn').addEventListener('click',()=>show('s-hero'));
document.getElementById('resBackBtn').addEventListener('click',()=>show('s-quiz'));
document.getElementById('rmBackBtn').addEventListener('click',()=>{
  if(state.matches.length && !state.fromExplore) show('s-results');
  else show('s-explore');
});

// Enter key on name input
document.getElementById('nameInput').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('n1').click(); });