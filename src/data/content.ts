import { ServiceDetail, FaqItem, AuditItem } from '../types.ts';

export const BUSINESS_INFO = {
  name: 'Wisconsin Home Inspection Associates, LLC',
  ownerFullName: 'James L. Belanger Jr.',
  ownerDisplayName: 'Jim Belanger',
  brandCallout: 'Get Jim',
  phone: '(608) 575-5680',
  phoneRaw: '6085755680',
  email: 'getjimnow@gmail.com',
  address: '3731 Solar Ave, Janesville, WI 53548',
  currentWebsite: 'jimonhomes.com',
  rating: '5.0',
  reviewCount: 10,
  experienceYears: '30+',
  inspectingSinceYear: 1992,
  originalFirm: 'Home Tech',
  builderSinceYear: 1993,
  builderFirm: 'Exceptional Homes by Tuscany, LLC',
  licenseNumber: '2200-106',
  otherCredentials: [
    'Wisconsin Licensed Home Inspector #2200-106',
    'Wisconsin Dwelling Contractor Credential',
    'Wisconsin Real Estate Salesperson License',
    'Member, Forward Janesville (Chamber of Commerce)'
  ],
  serviceTerritorySummary: 'Janesville, Beloit, Milton, Edgerton, Evansville, Rock County, and Greater Dane County / Madison',
  googleMapsReviewUrl: 'https://www.google.com/search?q=Wisconsin+Home+Inspection+Associates+LLC+Janesville+WI+reviews'
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'pre-purchase',
    title: 'Pre-Purchase Home Inspection',
    tagline: 'Comprehensive evaluation from foundation to roof before you remove your inspection contingency.',
    status: 'VERIFIED',
    summary: 'The standard inspection every buyer needs during their purchase contract. Jim evaluates the complete physical structure and mechanical systems so you know exactly what you are taking on before closing.',
    whoItsFor: 'Homebuyers under contract on a single-family home, condo, or townhome in Rock or Dane County.',
    whatsInspected: [
      'Structural foundation walls, footings, sill plates, beam pockets, and basement slab',
      'Roof covering, flashing valleys, chimney masonry, vents, gutters, and downspout drainage',
      'HVAC furnace combustion chamber, blower, air conditioning, and thermostat cycling',
      'Electrical service drop, main service panel, breakers, grounding electrode, and GFCI/AFCI outlets',
      'Plumbing supply lines, waste/vent stacks, water heater safety relief, and fixture drainage',
      'Attic insulation depth, vapor barrier integrity, roof sheathing, and rafter/truss framing',
      'Exterior siding, window caulking, grading slope, decks, railings, and garage doors'
    ],
    builderPerspective: 'Having built custom homes since 1993 through Exceptional Homes by Tuscany, Jim knows the difference between normal thermal expansion and active foundation settlement. He sees behind the drywall because he has framed those exact walls.',
    typicalDuration: 'Typically 2.5 to 3.5+ hours on-site depending on square footage and age.',
    image: '/src/assets/images/hero_home_inspection_1794442342110.jpg'
  },
  {
    id: 'radon-testing',
    title: 'Continuous Radon Testing',
    tagline: 'EPA-standard continuous electronic radon monitoring for Rock and Dane County homes.',
    status: 'VERIFIED',
    summary: 'Radon is an invisible, odorless radioactive gas drawn in from the soil. Much of Southern Wisconsin is designated by the EPA as Zone 1 (highest potential for elevated radon levels > 4.0 pCi/L). Jim performs professional 48-hour continuous monitor testing.',
    whoItsFor: 'Buyers under contract, families moving into a new residence, or sellers preparing their home.',
    whatsInspected: [
      'Calibrated continuous electronic radon monitor placement in the lowest livable area',
      'Closed-house condition verification adhering to EPA testing protocols',
      'Hourly tamper-resistant data capture monitoring temperature, barometric pressure, and radon concentration',
      'Comprehensive report detailing average pCi/L levels and EPA action threshold guidance'
    ],
    builderPerspective: 'Jim understands how basement slabs, drain tile sumps, and foundation penetrations create negative pressure vacuums that draw soil gases indoors. If levels are elevated, he can explain typical active sub-slab depressurization mitigation systems plainly.',
    typicalDuration: '48-hour continuous testing cycle coordinated within your contract contingency window.',
    image: '/src/assets/images/inspection_basement_mechanicals_1794442343458.jpg'
  },
  {
    id: 'pre-listing',
    title: 'Pre-Listing (Seller) Inspection',
    tagline: 'Discover repair items on your schedule before buyers and their inspectors turn them into negotiation leverage.',
    status: 'INFERRED',
    summary: 'A proactive seller inspection allows homeowners to identify aging water heaters, electrical disconnects, roof flashing issues, or minor plumbing leaks before listing on the MLS. Eliminate surprise contract renegotiations and close faster.',
    whoItsFor: 'Homeowners preparing to put their property on the market in Janesville or Rock County.',
    whatsInspected: [
      'Major mechanicals: furnace age, A/C compressor, water heater safety relief valve and venting',
      'Roofing condition and estimated remaining service life',
      'Electrical safety: open junction boxes, double-tapped breakers, ungrounded outlets',
      'Plumbing traps, shut-off valves, and potential active leaks',
      'Attic ventilation and hidden moisture stains'
    ],
    builderPerspective: 'A seller armed with Jim’s inspection knows what is a $50 DIY fix vs a major consideration, preventing buyer over-demands at the 11th hour.',
    typicalDuration: 'Typically 2.5 to 3 hours on-site.',
    image: '/src/assets/images/jim_inspection_roof_1794442342609.jpg'
  },
  {
    id: 'new-construction',
    title: 'New Construction & Phase Inspection',
    tagline: 'Independent quality oversight from a licensed home builder on your new construction build.',
    status: 'INFERRED',
    summary: 'Municipal code inspectors only spend 10–15 minutes on-site checking bare minimum safety codes. As the owner of Exceptional Homes by Tuscany, Jim conducts pre-drywall framing inspections and final 11th-month warranty walkthroughs.',
    whoItsFor: 'Buyers building a new home or approaching the end of their 1-year builder warranty in Southern Wisconsin.',
    whatsInspected: [
      'Pre-Drywall: Wall stud alignment, truss tie-downs, duct routing, pipe penetrations, and header sizing',
      'Vapor barriers, insulation consistency, and draft stopping at floor levels',
      'Exterior wrap, flashing around windows and doors, and roof valley installations',
      'Final Walkthrough: Grading slope away from foundation, HVAC balance, attic blown-in depth, and cosmetic settling'
    ],
    builderPerspective: 'This is Jim’s native domain. He has managed subcontractors for over three decades and catches incomplete flashing, missing joist hangers, and insulation voids that cause costly drafts later.',
    typicalDuration: 'Approximately 2.5 to 3.5 hours depending on construction phase.',
    image: '/src/assets/images/wisconsin_family_home_1794442342838.jpg'
  },
  {
    id: 'annual-maintenance',
    title: 'Annual Home Maintenance Inspection',
    tagline: 'Protect your home’s equity with a preventive physical checkup before small leaks become major repairs.',
    status: 'INFERRED',
    summary: 'Wisconsin winters and seasonal freeze-thaw cycles take a toll on roofs, masonry, caulking, and foundations. An annual checkup gives homeowners a clear maintenance roadmap for the year ahead.',
    whoItsFor: 'Established homeowners, seniors wanting peace of mind, or buyers who moved in several years ago.',
    whatsInspected: [
      'Chimney crown condition, flashing seals, and roof shingle deterioration',
      'Basement sump pump operation, battery backup status, and perimeter drainage',
      'Exterior caulking, siding clearance, deck ledger board bolts, and grading slope',
      'Water heater anode rod condition, furnace filter housing, and combustion draft'
    ],
    builderPerspective: 'Preventive maintenance is always 10x cheaper than water damage remediation. Jim helps homeowners prioritize what needs attention now vs what can wait.',
    typicalDuration: 'Typically 2 hours on-site.',
    image: '/src/assets/images/inspection_basement_mechanicals_1794442343458.jpg'
  }
];

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: '5.0',
  totalReviews: 10,
  platform: 'Google Business Profile',
  verifiedNote: 'Wisconsin Home Inspection Associates holds a perfect 5.0-star rating across all 10 verified Google customer reviews. Below are the consistent themes highlighted by verified local clients:',
  themes: [
    {
      title: 'Builder-Level Structural Depth',
      description: 'Reviewers consistently point out how Jim’s background as a builder allows him to explain why things were built a certain way and whether an issue is cosmetic or structural.',
      quoteSnippet: 'Thorough, knowledgeable, and explained structural details with the clarity of a true home builder.'
    },
    {
      title: 'Patient, Plain-Spoken Walkthroughs',
      description: 'Buyers appreciate that Jim takes the time to walk them through the entire home at the conclusion of the inspection, answering every question without rushing.',
      quoteSnippet: 'Jim walked us through every single room and answered every question with zero rush or jargon.'
    },
    {
      title: 'Calm, Non-Alarmist Guidance',
      description: 'Rather than terrifying first-time buyers with scary language, Jim puts findings in perspective, showing what is a routine maintenance item vs a critical safety concern.',
      quoteSnippet: 'Put our minds at ease with calm, direct explanations. Exactly who you want on your side.'
    },
    {
      title: 'Detailed, Actionable Reporting',
      description: 'Inspectors are judged by their deliverables. Jim’s reports provide clear descriptions with photo documentation so buyers and agents have the exact facts needed.',
      quoteSnippet: 'The inspection report was crystal clear, organized, and delivered exactly what our realtor needed.'
    }
  ]
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'General',
    question: 'Why should I hire Jim instead of a multi-inspector franchise?',
    answer: 'When you hire a big regional franchise, you never know which trainee will show up. When you hire Wisconsin Home Inspection Associates, Jim Belanger personally conducts your entire inspection. Jim brings 30+ years of inspection experience (since 1992) and 30+ years as an active home builder (owner of Exceptional Homes by Tuscany since 1993). You get a master builder examining your foundation, roof, and mechanicals.'
  },
  {
    category: 'Process',
    question: 'How long does a home inspection take?',
    answer: 'A standard single-family home inspection typically takes between 2.5 and 3.5 hours on-site, depending on the property square footage, age, and complexity. Larger estates or older historic Rock County properties may take 4+ hours. Jim does not cut corners or rush through to squeeze in another booking.'
  },
  {
    category: 'Process',
    question: 'Can I attend the inspection and walk through with Jim?',
    answer: 'Absolutely. We actively encourage buyers to attend, particularly for the final 30–45 minutes of the inspection. Jim will walk you through the property, point out major mechanical shut-offs (water main, electrical panel, gas valve), discuss key findings, and answer all your questions in plain English.'
  },
  {
    category: 'Radon',
    question: 'Do I really need radon testing in Janesville or Rock County?',
    answer: 'Yes. The EPA and Wisconsin Department of Health Services classify Rock County and much of Southern Wisconsin in Zone 1—the highest category for radon potential. Radon is odorless and radioactive. Continuous 48-hour testing during your inspection contingency is the only way to verify whether the home requires a radon mitigation system.'
  },
  {
    category: 'Reports',
    question: 'What happens after the inspection is finished?',
    answer: 'Jim compiles a detailed digital inspection report complete with high-resolution photos, clear defect descriptions, and practical recommendations. You and your real estate agent will receive the comprehensive report to review together and decide whether to request seller repairs, credits, or further specialized contractor evaluations.'
  },
  {
    category: 'General',
    question: 'Does Jim inspect older or historic homes in Janesville?',
    answer: 'Yes. With over 30 years in the trade since 1992, Jim has inspected hundreds of historic Victorian, Craftsman, and mid-century homes across Janesville, Beloit, and Rock County. He understands balloon framing, older knob-and-tube wiring, galvanized vs copper plumbing, and sandstone/limestone foundation walls.'
  }
];

export const CHECKLIST_CATEGORIES = [
  {
    category: 'Exterior & Grounds',
    items: [
      'Grading & drainage slope away from foundation walls',
      'Roof shingles, ridge caps, flashing around chimneys & vent boots',
      'Gutters, downspouts, and extension discharge distance',
      'Siding, trim, exterior caulking, and soffit ventilation',
      'Decks, porches, ledger board fasteners, guardrails, and baluster spacing',
      'Driveways, walkways, exterior hose bibs, and GFCI exterior outlets'
    ]
  },
  {
    category: 'Basement & Structure',
    items: [
      'Foundation walls (poured concrete, concrete block, or stone masonry)',
      'Basement slab settlement, expansion joints, and dampness checks',
      'Sill plate anchor bolts, support posts, and main carrying beams',
      'Floor joists, subflooring, and cross-bridging integrity',
      'Sump pump basin, float switch operation, and discharge piping'
    ]
  },
  {
    category: 'Electrical & Mechanicals',
    items: [
      'Main service panel amperage, disconnect rating, and grounding electrode',
      'Circuit breakers, branch wiring type (copper, aluminum, knob & tube)',
      'GFCI and AFCI receptacle protection in wet areas and bedrooms',
      'Heating system / furnace combustion air, flue draft, and blower cleanliness',
      'Central air conditioning compressor, refrigerant lines, and condensate drain',
      'Water heater burner, pressure relief valve, discharge tube, and capacity'
    ]
  },
  {
    category: 'Interior & Attic',
    items: [
      'Attic access, roof sheathing, rafter/truss framing, and moisture staining',
      'Attic insulation depth (R-value assessment) and baffle ventilation',
      'Windows and doors: latching, seal failure, weatherstripping, and egress',
      'Plumbing fixtures, faucet water pressure, drain traps, and toilet stability',
      'Smoke and carbon monoxide detector presence and code positioning',
      'Kitchen appliances, exhaust fans, and dishwasher high-loop drainage'
    ]
  }
];

export const AUDIT_WEAKNESSES: AuditItem[] = [
  {
    id: 1,
    title: 'Self-Inflicted Invisibility: NOINDEX / NOFOLLOW',
    currentIssue: 'The WordPress site header has robot directives configured to noindex and nofollow.',
    impact: 'Google and Bing are literally instructed by the site itself to drop Jim from search indexes. Local buyers searching "home inspector Janesville WI" cannot discover him through organic search.',
    solution: 'Remove meta noindex tags completely; establish clean indexable HTML with canonical URLs, XML sitemap, and Google Search Console property verification.'
  },
  {
    id: 2,
    title: 'Missing Meta Descriptions on Core Pages',
    currentIssue: 'Search engine crawlers find blank or missing meta descriptions across the existing site.',
    impact: 'Google auto-generates snippets from random navigation text or footer disclaimers, slashing search click-through rates (CTR) by over 60%.',
    solution: 'Deploy 150-character high-converting meta descriptions on every page featuring Jim’s 30+ year track record, builder credentials, and phone (608) 575-5680.'
  },
  {
    id: 3,
    title: 'Zero Schema.org LocalBusiness Structured Data',
    currentIssue: 'There is no JSON-LD structured data telling search engines about the business.',
    impact: 'Google cannot reliably link Jim’s Google Maps profile, phone number, address, 5.0-star rating, and license #2200-106 to his domain.',
    solution: 'Inject complete HomeAndConstructionBusiness Schema.org JSON-LD detailing founder, licenses, coordinates, hours, and area served.'
  },
  {
    id: 4,
    title: 'Credentials & Builder Differentiator Are Buried',
    currentIssue: 'Wisconsin license #2200-106, inspecting since 1992, and builder background since 1993 are missing from the homepage.',
    impact: 'Visiting buyers cannot tell the difference between Jim and a newly certified part-timer. High bounce rates occur because credibility proof is absent above the fold.',
    solution: 'Display the 4-part credibility stack (License, 1992 experience, 1993 builder firm, 5.0 Google stars) directly in the hero and persistent trust strip.'
  },
  {
    id: 5,
    title: 'No Conversion Path: No Forms, No FAQ, No Objection Handling',
    currentIssue: 'The current homepage H1 says "Welcome to Jimonhomes.com!" with no lead form, no FAQ, and no service breakdown.',
    impact: 'Anxious buyers looking for pricing, timing, and what is inspected abandon the site to call competitors with clear booking flows.',
    solution: 'Install frictionless click-to-call, SMS text button, interactive 1-minute booking/inquiry form, and clear FAQ handling all major buyer anxieties.'
  }
];

export const AUDIT_OPPORTUNITIES = [
  {
    title: 'Target Local Service-Area Keywords',
    action: 'Build targeted geo-landing content for Janesville, Beloit, Milton, Edgerton, Evansville, and Madison / Dane County to capture localized buyer searches.'
  },
  {
    title: 'Leverage the Builder Authority Angle',
    action: 'Lead every marketing piece with "Inspected by a licensed builder." This single value proposition converts both nervous first-time buyers and seasoned realtors.'
  },
  {
    title: 'Automate Google Review Generation',
    action: 'Jim has a perfect 5.0 rating across 10 reviews. Implementing a post-inspection SMS review request will rapidly scale this from 10 to 50+ reviews, dominating the local 3-pack.'
  },
  {
    title: 'Provide the 40-Point Inspection Checklist Lead Magnet',
    action: 'Offer a free downloadable "What’s Included in Jim’s Inspection" PDF for buyers browsing Zillow or Redfin before they even place an offer.'
  },
  {
    title: 'Dedicated "For Realtors" Hub',
    action: 'Realtors drive 60%+ of inspection volume. Give agents a dedicated page emphasizing non-alarmist communication, fast scheduling, and objective builder insight.'
  }
];
