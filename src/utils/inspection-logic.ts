/**
 * Wisconsin Home Inspection Associates, LLC
 * Pure business logic for inspection scoping, area verification, form validation, and audit calculations.
 */

export interface InspectionScopeInput {
  sqft: number;
  yearBuilt?: number;
  includeRadon?: boolean;
  propertyType?: 'single-family' | 'condo' | 'multi-family' | 'new-construction';
}

export interface InspectionScopeResult {
  estimatedDurationHours: string;
  recommendedFocusAreas: string[];
  radonRecommended: boolean;
  builderAdvantagePoints: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  notes?: string;
  preferredDate?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Verified primary service areas (Rock County & surrounding Dane County / Stateline)
export const VERIFIED_SERVICE_AREAS = [
  { name: 'Janesville', county: 'Rock County', state: 'WI', isPrimary: true, zipCodes: ['53545', '53546', '53548'] },
  { name: 'Beloit', county: 'Rock County', state: 'WI', isPrimary: true, zipCodes: ['53511', '53512'] },
  { name: 'Milton', county: 'Rock County', state: 'WI', isPrimary: true, zipCodes: ['53563'] },
  { name: 'Edgerton', county: 'Rock & Dane County', state: 'WI', isPrimary: true, zipCodes: ['53534'] },
  { name: 'Evansville', county: 'Rock County', state: 'WI', isPrimary: true, zipCodes: ['53536'] },
  { name: 'Madison / Dane County', county: 'Dane County', state: 'WI', isPrimary: false, zipCodes: ['53701', '53703', '53704', '53711', '53713', '53714', '53715', '53716', '53717', '53718', '53719'] },
  { name: 'Rockton & South Beloit', county: 'Winnebago County (Stateline)', state: 'IL', isPrimary: false, zipCodes: ['61072', '61080'] },
];

/**
 * Checks whether a given city name or zip code is within Jim's active service territory.
 */
export function isWithinServiceArea(query: string): { covered: boolean; areaMatch?: typeof VERIFIED_SERVICE_AREAS[0] } {
  if (!query || typeof query !== 'string') return { covered: false };
  const clean = query.trim().toLowerCase();

  const match = VERIFIED_SERVICE_AREAS.find(area => {
    if (area.name.toLowerCase().includes(clean) || clean.includes(area.name.toLowerCase())) return true;
    if (area.zipCodes.some(zip => clean.includes(zip))) return true;
    return false;
  });

  return {
    covered: !!match,
    areaMatch: match
  };
}

/**
 * Formats standard 10-digit phone number into (608) 575-5680 format.
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

/**
 * Validates a booking/inquiry form submission.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  }

  const phoneDigits = (data.phone || '').replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.address || data.address.trim().length < 4) {
    errors.address = 'Please specify the property address or city to be inspected.';
  }

  if (!data.serviceType || data.serviceType.trim().length === 0) {
    errors.serviceType = 'Please select an inspection service.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Calculates inspection scoping parameters based on property size, age, and type.
 * Notice: strictly avoids inventing prices or turnaround times. Answers generally with scope & engineering focus.
 */
export function calculateInspectionScope(input: InspectionScopeInput): InspectionScopeResult {
  const focus: string[] = [
    'Roofing structure, flashing, shingles & gutter drainage',
    'Foundation walls, basement moisture intrusion & structural load paths',
    'HVAC furnace, air conditioning & ventilation safety',
    'Electrical panel, main disconnect, grounding & circuit protection',
    'Plumbing supply, drainage, water heater & venting'
  ];

  const builderAdvantages: string[] = [
    'Evaluated with 30+ years of active home construction experience',
    'Distinguishes harmless cosmetic settling from genuine structural deflection',
    'Understands hidden rough framing details and building code evolution'
  ];

  // Specific age considerations
  if (input.yearBuilt && input.yearBuilt < 1980) {
    focus.push('Older electrical wiring (knob-and-tube / ungrounded conductors) and plumbing materials');
    focus.push('Thermal insulation depth and attic draft stop verification');
  } else if (input.yearBuilt && input.yearBuilt >= 2015) {
    focus.push('Engineered I-joist penetrations, modern vapor barriers & attic ventilation balance');
  }

  // Duration general answer (no invented specific turnaround guarantees)
  let estimatedDuration = 'Approximately 2.5 to 3.5 hours on-site';
  if (input.sqft > 3500) {
    estimatedDuration = 'Approximately 3.5 to 4.5+ hours on-site';
  } else if (input.sqft < 1500 && input.propertyType === 'condo') {
    estimatedDuration = 'Approximately 2 to 2.5 hours on-site';
  }

  return {
    estimatedDurationHours: estimatedDuration,
    recommendedFocusAreas: focus,
    radonRecommended: input.includeRadon ?? true,
    builderAdvantagePoints: builderAdvantages
  };
}
