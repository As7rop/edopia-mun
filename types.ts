export interface Committee {
  id: string; // e.g. "aippm", "lok-sabha", etc.
  name: string;
  fullName: string;
  agenda: string;
  description: string;
  seatsTotal: number;
  seatsOccupied: number;
  ebMembers: {
    name: string;
    role: string;
    image: string;
    bio: string;
  }[];
  countries: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Double Delegation" | "Team of 4";
}

export interface DaySchedule {
  time: string;
  title: string;
  venue: string;
  description: string;
  type: "academic" | "ceremony" | "social" | "break";
}

export interface RegistrationData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  classOrYear: string;
  experience: string; // text description
  delegationType: "Single" | "Double" | "Team";
  doublePartnerName?: string;
  doublePartnerEmail?: string;
  partner2Name?: string;
  partner2Email?: string;
  partner3Name?: string;
  partner3Email?: string;
  partner4Name?: string;
  partner4Email?: string;
  committeePreference1: string;
  portfolioPreference1: string;
  committeePreference2: string;
  portfolioPreference2: string;
  committeePreference3: string;
  portfolioPreference3: string;
  paymentReceiptNumber: string;
  isApproved: boolean;
  allottedCommittee?: string;
  allottedPortfolio?: string;
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Registration" | "Committees" | "Dress Code";
}
