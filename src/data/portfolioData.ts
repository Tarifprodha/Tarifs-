import { 
  PersonalInfo, 
  SkillCategory, 
  ServiceItem, 
  EducationItem, 
  TrainingItem, 
  ProjectItem, 
  CaseStudyItem, 
  ValueCard, 
  TestimonialItem, 
  StatItem 
} from '../types';

import profilePhoto from '../assets/images/taif_profile_photo_1788328356284.jpg';
import aiAutomationImg from '../assets/images/ai_automation_mockup_1788328371609.jpg';
import creativeVideoImg from '../assets/images/creative_video_mockup_1788328387615.jpg';

export const personalInfo: PersonalInfo = {
  fullName: 'MD Taif Mia',
  professionalIdentity: 'AI Agent Expert | AI Specialist | AI Automation Specialist | Graphic Designer | Video Creator | SEO Expert',
  location: 'Gaibandha Sadar, Rangpur, Bangladesh',
  phone: '01786681134',
  facebookName: 'Tarif Prodhan',
  socialUsername: '@expttarif',
  email: 'mtarifprodhan@gmail.com',
  heroBadge: 'AI SPECIALIST FROM BANGLADESH',
  heroHeadline: 'Building Smarter Digital Solutions With',
  heroHighlight: 'AI',
  heroSupportingText: 'AI Agent Expert specializing in AI automation, creative design, video content, AI photo editing and SEO.',
  bio: 'I am an AI Agent Expert and AI Specialist from Bangladesh with a passion for AI automation, digital creativity, graphic design, video creation, AI-powered content creation and SEO. I combine artificial intelligence, automation and creative digital skills to build smarter workflows, engaging content and practical digital solutions for businesses and individuals.',
};

export const rotatingTitles = [
  'AI Agent Expert',
  'AI Automation Specialist',
  'Graphic Designer',
  'AI Video Editor',
  'AI Video Creator',
  'UGC Video Creator',
  'AI Photo Editor',
  'SEO Expert'
];

export const heroFloatingBadges = [
  { text: 'AI AUTOMATION', color: 'blue', x: '-translate-x-12', y: '-translate-y-6', icon: 'Bot' },
  { text: 'GRAPHIC DESIGN', color: 'emerald', x: 'translate-x-14', y: '-translate-y-12', icon: 'Palette' },
  { text: 'VIDEO CREATION', color: 'indigo', x: '-translate-x-16', y: 'translate-y-12', icon: 'Video' },
  { text: 'AI PHOTO EDITING', color: 'cyan', x: 'translate-x-12', y: 'translate-y-16', icon: 'Sparkles' },
  { text: 'SEO', color: 'emerald', x: 'translate-x-0', y: '-translate-y-20', icon: 'TrendingUp' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    icon: 'Bot',
    description: 'Autonomous agents, custom LLM integration, intelligent prompt pipelines, and multi-step n8n automation architectures.',
    badgeColor: 'blue',
    skills: [
      { name: 'AI Agent Development', level: 'Expert', highlight: true },
      { name: 'AI Automation', level: 'Expert', highlight: true },
      { name: 'AI Workflow Automation', level: 'Expert' },
      { name: 'AI Chatbot Solutions', level: 'Expert' },
      { name: 'Prompt Engineering', level: 'Expert' },
      { name: 'n8n Automation', level: 'Expert', highlight: true },
      { name: 'AI Content Generation', level: 'Expert' },
      { name: 'AI Tools Integration', level: 'Expert' },
      { name: 'Business Process Automation', level: 'Expert' },
      { name: 'AI Data Processing', level: 'Expert' },
    ]
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    icon: 'Palette',
    description: 'High-converting social visual assets, Facebook ad creatives, brand collateral, and modern marketing graphics.',
    badgeColor: 'emerald',
    skills: [
      { name: 'Graphic Design', level: 'Advanced', highlight: true },
      { name: 'Social Media Design', level: 'Advanced' },
      { name: 'Facebook Ad Creative', level: 'Advanced', highlight: true },
      { name: 'Banner Design', level: 'Advanced' },
      { name: 'Promotional Design', level: 'Advanced' },
      { name: 'Branding', level: 'Advanced' },
      { name: 'Marketing Creative', level: 'Advanced' },
      { name: 'Visual Content', level: 'Advanced' },
    ]
  },
  {
    id: 'video-content',
    title: 'VIDEO & CONTENT CREATION',
    icon: 'Video',
    description: 'Dynamic short-form video editing, Reels/TikTok storytelling, AI avatars, and viral UGC promotional video production.',
    badgeColor: 'indigo',
    skills: [
      { name: 'Video Editing', level: 'Advanced', highlight: true },
      { name: 'AI Video Editing', level: 'Advanced', highlight: true },
      { name: 'Short-form Video Creation', level: 'Advanced' },
      { name: 'Facebook/Reels Video', level: 'Advanced' },
      { name: 'Advertisement Video', level: 'Advanced' },
      { name: 'UGC Video Creation', level: 'Advanced', highlight: true },
      { name: 'AI UGC Video Creation', level: 'Advanced' },
      { name: 'Product Promotional Video', level: 'Advanced' },
      { name: 'Video Content Creation', level: 'Advanced' },
    ]
  },
  {
    id: 'ai-photo-editing',
    title: 'AI PHOTO EDITING',
    icon: 'Sparkles',
    description: 'Next-gen AI visual generation, clean background replacements, high-fidelity e-commerce product enhancement, and retouching.',
    badgeColor: 'cyan',
    skills: [
      { name: 'AI Photo Editing', level: 'Advanced', highlight: true },
      { name: 'AI Image Generation', level: 'Advanced', highlight: true },
      { name: 'Background Removal', level: 'Advanced' },
      { name: 'Background Replacement', level: 'Advanced' },
      { name: 'Photo Enhancement', level: 'Advanced' },
      { name: 'Product Photo Editing', level: 'Advanced', highlight: true },
      { name: 'Creative Image Editing', level: 'Advanced' },
      { name: 'Social Media Visual Creation', level: 'Advanced' },
    ]
  },
  {
    id: 'seo-digital',
    title: 'SEO & DIGITAL SKILLS',
    icon: 'Search',
    description: 'Organic search optimization, intent-based keyword research, on-page technical tuning, and digital audience growth.',
    badgeColor: 'emerald',
    skills: [
      { name: 'Search Engine Optimization', level: 'Advanced', highlight: true },
      { name: 'Keyword Research', level: 'Advanced' },
      { name: 'On-page SEO', level: 'Advanced', highlight: true },
      { name: 'Content Optimization', level: 'Advanced' },
      { name: 'Digital Marketing', level: 'Advanced' },
      { name: 'Social Media Management', level: 'Advanced' },
      { name: 'E-commerce Digital Solutions', level: 'Advanced' },
    ]
  }
];

export const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'AI Agent Development',
    description: 'Custom intelligent AI agents tailored for handling specific business tasks, conversational workflows, and intelligent decision execution.',
    icon: 'Bot',
    tags: ['Autonomous Agents', 'LLM Chains', 'Custom Tools', 'Task Automation'],
    deliverables: ['Custom system prompt design', 'Tool/API integrations', 'Decision logic nodes', 'Testing & validation report']
  },
  {
    number: '02',
    title: 'AI Automation',
    description: 'End-to-end automation connecting webhooks, data pipelines, and AI models to reduce repetitive tasks and streamline daily operations.',
    icon: 'Cpu',
    tags: ['Workflow Sync', 'API Connectors', 'Time-saving', 'Data Parsing'],
    deliverables: ['Custom workflow diagrams', 'Automated triggers & responses', 'Error handling & fallbacks', 'Deployment documentation']
  },
  {
    number: '03',
    title: 'n8n Workflow Automation',
    description: 'Production-ready n8n canvas nodes linking databases, CRMs, chat channels, and generative AI models with self-hosted flexibility.',
    icon: 'Workflow',
    tags: ['n8n Pipelines', 'Webhook Handlers', 'Multi-app Sync', 'Data Transformation'],
    deliverables: ['Modular n8n JSON nodes', 'Webhook configuration', 'Credential security audit', 'Live run monitoring']
  },
  {
    number: '04',
    title: 'Graphic Design',
    description: 'Clean, visually engaging graphic design for branding, social media promotional campaigns, banner ads, and high-impact digital collateral.',
    icon: 'Palette',
    tags: ['Social Graphics', 'Ad Banners', 'Brand Identity', 'Visual Layouts'],
    deliverables: ['High-res PNG/JPG exports', 'Editable source files', 'Ad platform dimension variations', 'Brand consistency guides']
  },
  {
    number: '05',
    title: 'AI Video Creation',
    description: 'State-of-the-art AI-assisted video production, voice synchronization, dynamic captions, and motion elements for digital campaigns.',
    icon: 'Clapperboard',
    tags: ['AI Scripting', 'Visual Generation', 'Motion Effects', 'Auto-Captions'],
    deliverables: ['Full HD / 4K MP4 renders', 'Custom audio overlays', 'Trendy subtitle animations', 'Multi-aspect ratio formats (9:16, 16:9)']
  },
  {
    number: '06',
    title: 'Video Editing',
    description: 'Fast-paced, hook-driven video editing tailored for YouTube, Facebook, and Instagram to retain audience attention and drive engagement.',
    icon: 'Film',
    tags: ['Pacing & Cuts', 'Color Grading', 'Sound Design', 'B-roll Integration'],
    deliverables: ['Hook optimization', 'Seamless transitions', 'Sound design & mixing', 'Ready-to-upload files']
  },
  {
    number: '07',
    title: 'UGC Video Creation',
    description: 'Authentic user-generated content style video concepts and editing designed specifically for e-commerce products and brand storytelling.',
    icon: 'Smartphone',
    tags: ['Product Demos', 'TikTok/Reels format', 'E-commerce Ads', 'Authentic Aesthetic'],
    deliverables: ['Engaging script structures', 'Relatable visual flow', 'Direct call-to-action cards', 'Ad variants for A/B testing']
  },
  {
    number: '08',
    title: 'AI Photo Editing',
    description: 'Precision AI photo retouching, clean studio background replacements, creative image generation, and e-commerce visual enhancement.',
    icon: 'Sparkles',
    tags: ['Object Removal', 'Studio Lighting Mockup', 'Background Swap', 'High-Res Upscaling'],
    deliverables: ['Transparent PNG cutouts', 'E-commerce white/studio backgrounds', 'Upscaled 4K outputs', 'Color-balanced visuals']
  },
  {
    number: '09',
    title: 'SEO Services',
    description: 'Strategic search engine optimization including high-intent keyword research, technical on-page structure, and content search visibility.',
    icon: 'SearchCheck',
    tags: ['Keyword Mapping', 'On-Page Tags', 'Content Audit', 'SERP Optimization'],
    deliverables: ['Target keyword list', 'Meta title & description matrix', 'Heading hierarchy recommendations', 'Speed & indexing checklist']
  },
  {
    number: '10',
    title: 'Social Media Creative Content',
    description: 'Consistent, conversion-focused creative assets crafted to build brand authority and stand out across Facebook, Instagram, and LinkedIn.',
    icon: 'Share2',
    tags: ['Carousel Posts', 'Feed Aesthetics', 'Promotional Banners', 'Campaign Content'],
    deliverables: ['Monthly post templates', 'Story & Reel cover graphics', 'Engagement-driven layouts', 'Export bundle in organized folders']
  }
];

export const educationList: EducationItem[] = [
  {
    degree: 'HONOURS (Bachelor Degree)',
    institution: 'Gaibandha Government College',
    subject: 'English',
    program: 'Honours',
    status: 'Currently Studying',
    badge: 'Ongoing Academic Degree',
    description: 'Pursuing higher academic studies with focus on analytical communication, structured writing, literature, and advanced English language proficiency.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Palashbari Government College',
    group: 'Arts',
    passingYear: '2025',
    gpa: '5.00',
    status: 'Completed with Highest Grade (GPA 5.00)',
    badge: 'GPA 5.00 (Golden / Top Score)',
    description: 'Demonstrated outstanding academic dedication, analytical humanities coursework, and critical thinking with maximum possible GPA 5.00.'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Narayenpur High School',
    group: 'Science',
    passingYear: '2023',
    gpa: '4.67',
    status: 'Completed with Excellent Grade (GPA 4.67)',
    badge: 'GPA 4.67 (Science Group)',
    description: 'Solid foundation in mathematics, physics, computing principles, and scientific analytical methodology.'
  }
];

export const trainingList: TrainingItem[] = [
  {
    title: 'Graphic Design Training',
    institution: 'E-learning & Earning Ltd.',
    skillsLearned: [
      'Graphic Design Fundamentals',
      'Digital Creative Design & Layouts',
      'Visual Content Creation for Marketing',
      'Advertising & Promotional Assets'
    ],
    type: 'Structured Training',
    statusNote: 'Certificate details available upon request'
  },
  {
    title: 'AI & Automation Specialization',
    institution: 'Self-Learned / Practical Hands-on Learning',
    skillsLearned: [
      'AI Agent Architecture & Tool Calling',
      'AI Automation Workflows (n8n & Webhooks)',
      'Modern AI Productivity & Content Tools',
      'Prompt Engineering & Intelligent Data Processing',
      'AI-powered Digital Solutions for Business'
    ],
    type: 'Practical / Self-Learned',
    statusNote: 'Practical mastery demonstrated through deployed workflows'
  }
];

export const sampleProjects: ProjectItem[] = [
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support Automation',
    category: 'AI & Automation',
    description: 'Intelligent multi-channel AI customer agent workflow built with n8n and AI tools to triage, answer, and route inquiries automatically.',
    longDescription: 'A modern AI automation solution engineered to eliminate customer support delays. The system listens to incoming customer messages, identifies intent, retrieves accurate context from business knowledge bases, and formulates natural, personalized replies with zero human delay.',
    image: aiAutomationImg,
    tags: ['AI Agent', 'n8n', 'Automation', 'Customer Experience'],
    technologies: ['n8n', 'AI LLM API', 'Webhook Trigger', 'PostgreSQL / JSON Store'],
    isSample: true,
    featured: true,
    highlights: [
      'Instant query categorization & response drafting',
      'Seamless fallback to human operator when confidence is low',
      'Reduced manual support ticket backlog significantly'
    ],
    metrics: [
      { label: 'Latency', value: '< 2.5s Response' },
      { label: 'Coverage', value: '24/7 Uptime' },
      { label: 'Classification', value: 'Multi-intent' }
    ]
  },
  {
    id: 'ecommerce-ai-automation',
    title: 'E-commerce AI Automation',
    category: 'n8n Workflows',
    description: 'Automated order notification, abandoned cart follow-up, and inventory sync pipeline integrating AI message personalization.',
    longDescription: 'Designed an automated backend pipeline connecting e-commerce order webhooks to customer notification channels, utilizing AI prompt templates to dynamically tailor re-engagement offers based on customer purchase history.',
    image: aiAutomationImg,
    tags: ['E-commerce', 'n8n Automation', 'AI Personalization'],
    technologies: ['n8n Workflow', 'OpenAI/Claude API', 'REST Webhooks', 'Google Sheets/DB'],
    isSample: true,
    featured: true,
    highlights: [
      'Automated personalized order dispatch summaries',
      'Dynamic SMS/WhatsApp update generation',
      'Centralized audit logging for sync failures'
    ]
  },
  {
    id: 'ai-product-ad',
    title: 'AI Product Advertisement',
    category: 'Video & UGC',
    description: 'High-energy commercial advertisement video combining AI voiceovers, dynamic text motion, and studio b-roll overlays.',
    longDescription: 'Created a short-form commercial campaign for modern digital products, orchestrating AI voice synthesis, rhythm-timed kinetic typography, and product visual mockups to deliver high-converting promotional reels.',
    image: creativeVideoImg,
    tags: ['Video Editing', 'AI Voice', 'Product Ads', 'Shorts/Reels'],
    technologies: ['CapCut / Premiere', 'AI Voice Studio', 'After Effects Motion', 'Photoshop'],
    isSample: true,
    featured: true,
    highlights: [
      'Attention-grabbing 3-second visual hook',
      'Dynamic on-screen word-by-word animated captions',
      'Platform-optimized 9:16 vertical delivery'
    ]
  },
  {
    id: 'social-media-design',
    title: 'Social Media Creative Design',
    category: 'Graphic Design',
    description: 'High-contrast promotional banners and campaign ad creatives engineered for maximum click-through rate on Facebook & Instagram.',
    longDescription: 'A cohesive brand visual identity package featuring conversion-focused Facebook ad banners, promotional carousel sets, and striking promotional story cards designed with clean typography and balanced negative space.',
    image: creativeVideoImg,
    tags: ['Graphic Design', 'Facebook Ads', 'Banner Design', 'Branding'],
    technologies: ['Adobe Photoshop', 'Illustrator', 'Canva Pro', 'Figma'],
    isSample: true,
    highlights: [
      'Optimized contrast for mobile feed scannability',
      'Modular layout structure for rapid multi-offer testing',
      'High-resolution vector assets'
    ]
  },
  {
    id: 'ai-ugc-video',
    title: 'AI UGC Product Video',
    category: 'Video & UGC',
    description: 'User-Generated Content style product testimonial and unboxing breakdown with AI-driven scripts and engaging pacing.',
    longDescription: 'Engineered an authentic UGC video framework showing product benefits, problem-solution demonstrations, and clear calls-to-action structured specifically for TikTok Shop and Facebook Video Ads.',
    image: creativeVideoImg,
    tags: ['UGC Creation', 'AI Scripting', 'Reels Format', 'E-commerce'],
    technologies: ['AI Copywriting', 'Video Editing Suite', 'Sound Engineering'],
    isSample: true,
    highlights: [
      'Authentic aesthetic tailored for high retention',
      'Clear problem-agitation-solution narrative arc',
      'Mobile-first sound-designed transitions'
    ]
  },
  {
    id: 'ai-photo-editing-showcase',
    title: 'AI Product Photo Editing',
    category: 'Graphic Design',
    description: 'E-commerce product visual revamp with automated background replacement, shadow generation, and AI enhancement.',
    longDescription: 'Transformed standard raw smartphone product shots into studio-grade commercial catalog renders using AI background generation, photorealistic shadow rendering, and precision edge isolation.',
    image: creativeVideoImg,
    tags: ['AI Photo Editing', 'Background Removal', 'Product Retouching'],
    technologies: ['Midjourney / Stable Diffusion', 'Photoshop AI Tools', 'Lightroom'],
    isSample: true,
    highlights: [
      'Pixel-perfect background extraction on complex edges',
      'Realistic directional lighting integration',
      'Consistent multi-angle shadow geometry'
    ]
  },
  {
    id: 'seo-optimization-project',
    title: 'SEO Optimization Project',
    category: 'SEO & Digital',
    description: 'Complete on-page SEO restructuring, keyword cluster mapping, and meta architecture optimization for search indexing.',
    longDescription: 'Comprehensive search optimization project encompassing semantic search keyword mapping, internal linking architecture, metadata overhaul, and technical on-page tag optimization to improve search rankings.',
    image: aiAutomationImg,
    tags: ['SEO', 'Keyword Research', 'On-Page Optimization', 'Digital Growth'],
    technologies: ['Google Search Console', 'Ahrefs/Semrush methodology', 'Schema.org', 'Content Tuning'],
    isSample: true,
    highlights: [
      'Comprehensive keyword search intent categorization',
      'Optimized Title / H1 / H2 hierarchy and meta descriptions',
      'Actionable recommendations for organic reach'
    ]
  },
  {
    id: 'n8n-business-automation',
    title: 'n8n Business Automation',
    category: 'n8n Workflows',
    description: 'Custom multi-branch n8n workflow for automated lead capture, CRM qualification, email generation, and team notifications.',
    longDescription: 'An enterprise-style automation pipeline that captures web form leads, queries an AI model to evaluate lead fit, crafts a tailored introductory draft, and posts an instant alert to team communication channels.',
    image: aiAutomationImg,
    tags: ['n8n', 'Lead Scoring', 'AI Prompting', 'CRM Sync'],
    technologies: ['n8n Cloud/Self-hosted', 'REST API', 'Slack/Telegram Bot', 'OpenAI'],
    isSample: true,
    highlights: [
      'Zero-touch lead qualification in under 5 seconds',
      'Branching logic for hot vs warm inquiries',
      'End-to-end webhook authentication'
    ]
  }
];

export const caseStudiesList: CaseStudyItem[] = [
  {
    id: 'case-01',
    slug: 'ai-automation',
    caseNumber: 'CASE STUDY 01',
    title: 'AI Customer Support Automation',
    subtitle: 'Streamlining multi-channel response latency with intelligent agent routing and n8n pipelines.',
    problem: 'Manual customer response takes time, causing high support response latency, lost sales leads during off-hours, and repetitive workload for human staff.',
    solution: 'Designed and deployed an AI-powered automated customer support workflow. The system categorizes incoming messages, queries knowledge bases, and drafts instant, contextual responses while escalating edge cases to human operators seamlessly.',
    technology: 'AI LLMs + n8n Automation + Webhooks + CRM Integration',
    techBadges: ['AI Agent', 'n8n Automation', 'Webhooks', 'Prompt Engineering', 'Knowledge Base'],
    result: 'Faster customer communication, instant 24/7 triage, and improved overall workflow efficiency with zero dropped inquiries.',
    workflowSteps: [
      { step: '01', title: 'Webhook Trigger', desc: 'Incoming customer query received via chat or form endpoint.' },
      { step: '02', title: 'Intent Classification', desc: 'AI node classifies query urgency, category, and sentiment.' },
      { step: '03', title: 'Context Retrieval', desc: 'Extracts relevant FAQs, product specs, or operating guidelines.' },
      { step: '04', title: 'Smart Response / Escalation', desc: 'Delivers instant tailored reply or passes high-priority tickets to human staff.' }
    ],
    isSample: true
  },
  {
    id: 'case-02',
    slug: 'content-automation',
    caseNumber: 'CASE STUDY 02',
    title: 'AI Content & Social Media Generation Pipeline',
    subtitle: 'Scaling brand visual assets and multi-format copy with integrated AI tools.',
    problem: 'Creating daily social media graphics, ad banners, and short-form video hooks manually requires hours of daily manual effort, leading to inconsistent posting schedules.',
    solution: 'Built an automated content pipeline that turns key topic prompts into structured carousel scripts, video hook outlines, and pre-formatted design templates ready for quick review and export.',
    technology: 'AI Prompt Engineering + Graphic Design Templates + Automated Content Queue',
    techBadges: ['AI Content', 'Graphic Design', 'Video Scripting', 'Batch Processing'],
    result: 'Accelerated asset creation turnaround, maintained strong visual consistency, and freed up creative time for strategic campaigns.',
    workflowSteps: [
      { step: '01', title: 'Topic Input', desc: 'Core marketing theme or product feature entered into system.' },
      { step: '02', title: 'AI Copy Generation', desc: 'Generates headline variants, body copy, and video hook options.' },
      { step: '03', title: 'Design Layout Matching', desc: 'Populates visual layouts with calibrated typography and brand colors.' },
      { step: '04', title: 'Review & Schedule', desc: 'Final polish and automated queueing for publishing.' }
    ],
    isSample: true
  },
  {
    id: 'case-03',
    slug: 'ecommerce-photo-retouching',
    caseNumber: 'CASE STUDY 03',
    title: 'E-commerce AI Photo Enhancement System',
    subtitle: 'Transforming raw product photography into high-converting studio catalog visuals.',
    problem: 'E-commerce sellers often struggle with costly studio setups, leading to inconsistent backgrounds and amateur lighting on product listings.',
    solution: 'Established a standardized AI photo editing workflow combining precise subject isolation, studio lighting simulation, and realistic shadows tailored for e-commerce platforms.',
    technology: 'AI Generative Fill + Photoshop Layers + High-Res Enhancement',
    techBadges: ['AI Photo Editing', 'Background Removal', 'Studio Lighting', 'Product Visuals'],
    result: 'Crisp, uniform catalog imagery with enhanced visual appeal that improves buyer trust and listing click-through rates.',
    workflowSteps: [
      { step: '01', title: 'Raw Ingestion', desc: 'Raw product photos uploaded with varied lighting conditions.' },
      { step: '02', title: 'AI Edge Extraction', desc: 'Precision isolation of complex product silhouettes.' },
      { step: '03', title: 'Studio Environment', desc: 'Generates soft neutral background with matched drop shadow.' },
      { step: '04', title: 'Detail Sharpening', desc: 'High-pass enhancement for crisp textures and color accuracy.' }
    ],
    isSample: true
  }
];

export const whyWorkWithMeCards: ValueCard[] = [
  {
    id: 'ai-first',
    title: 'AI-FIRST THINKING',
    tagline: 'Modern Technology at the Core',
    description: 'Approaching challenges by asking how artificial intelligence and smart automation can solve bottlenecks faster, cheaper, and more reliably.',
    icon: 'Brain'
  },
  {
    id: 'creative-problem-solving',
    title: 'CREATIVE PROBLEM SOLVING',
    tagline: 'Design Meets Technical Precision',
    description: 'Bridging the gap between technical automation logic and captivating visual aesthetics — making solutions both powerful and visually compelling.',
    icon: 'Sparkles'
  },
  {
    id: 'continuous-learning',
    title: 'CONTINUOUS LEARNING',
    tagline: 'Always Ahead of Tech Shifts',
    description: 'Rapidly mastering emerging AI agent frameworks, creative tools, and automation paradigms through hands-on practice and rigorous self-discipline.',
    icon: 'Compass'
  },
  {
    id: 'business-automation',
    title: 'BUSINESS-FOCUSED AUTOMATION',
    tagline: 'Practical Solutions, Zero Fluff',
    description: 'Focusing exclusively on practical, impactful implementations that save real hours, eliminate repetitive friction, and generate measurable value.',
    icon: 'Zap'
  }
];

export const profileStats: StatItem[] = [
  {
    label: 'AI & Automation',
    status: 'Core Expertise',
    subtext: 'Agents, n8n, Prompt Engineering',
    type: 'expertise'
  },
  {
    label: 'Creative Design',
    status: 'Professional Skill',
    subtext: 'E-learning & Earning Ltd. Trained',
    type: 'expertise'
  },
  {
    label: 'Video & Content',
    status: 'Core Skill',
    subtext: 'Short-form, AI UGC & Editing',
    type: 'expertise'
  },
  {
    label: 'SEO',
    status: 'Digital Skill',
    subtext: 'Keyword Research & On-Page SEO',
    type: 'expertise'
  },
  {
    label: 'HSC Academic GPA',
    status: '5.00 / 5.00',
    subtext: 'Palashbari Govt College (2025)',
    type: 'gpa'
  },
  {
    label: 'SSC Academic GPA',
    status: '4.67 / 5.00',
    subtext: 'Narayenpur High School (2023)',
    type: 'gpa'
  }
];

export const sampleTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Sample testimonial — replace with real client feedback. Working with Taif on our AI automation and creative design workflow showed a clear understanding of modern technology and attention to detail.',
    authorTitle: 'Digital Business Lead',
    organization: 'Sample Client Feedback',
    isPlaceholder: true,
    category: 'AI & Automation'
  },
  {
    id: 'test-2',
    quote: 'Sample testimonial — replace with real client feedback. Delivered high quality social media graphics and video editing assets with quick turnaround and excellent communication.',
    authorTitle: 'Content Creator / Brand Owner',
    organization: 'Sample Client Feedback',
    isPlaceholder: true,
    category: 'Creative Design & Video'
  },
  {
    id: 'test-3',
    quote: 'Sample testimonial — replace with real client feedback. The n8n workflow integration and customer response setup simplified our daily inquiries significantly.',
    authorTitle: 'E-commerce Operator',
    organization: 'Sample Client Feedback',
    isPlaceholder: true,
    category: 'Workflow Automation'
  }
];

export const socialLinks = [
  {
    platform: 'Facebook',
    displayName: 'Tarif Prodhan',
    handle: '@expttarif',
    url: 'https://facebook.com/expttarif',
    icon: 'Facebook',
    color: 'hover:text-blue-500'
  },
  {
    platform: 'Instagram',
    displayName: 'Instagram',
    handle: '@expttarif',
    url: 'https://instagram.com/expttarif',
    icon: 'Instagram',
    color: 'hover:text-pink-500'
  },
  {
    platform: 'YouTube',
    displayName: 'YouTube',
    handle: '@expttarif',
    url: 'https://youtube.com/@expttarif',
    icon: 'Youtube',
    color: 'hover:text-red-500'
  },
  {
    platform: 'TikTok',
    displayName: 'TikTok',
    handle: '@expttarif',
    url: 'https://tiktok.com/@expttarif',
    icon: 'Video',
    color: 'hover:text-cyan-400'
  },
  {
    platform: 'LinkedIn',
    displayName: 'LinkedIn',
    handle: '@expttarif',
    url: 'https://linkedin.com/in/expttarif',
    icon: 'Linkedin',
    color: 'hover:text-blue-400'
  }
];

export { profilePhoto };
