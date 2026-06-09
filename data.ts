import { Committee, DaySchedule, FAQItem } from "./types";

export const COMMITTEES: Committee[] = [
  {
    id: "aippm",
    name: "AIPPM",
    fullName: "All India Political Parties Meet",
    agenda: "Addressing regional economic disparities, federal legislative structures, and electoral reforms in India.",
    description: "The AIPPM is a non-technical yet extremely intense committee that simulates elite political debates. Delegates represent prominent Indian political leaders, debating legislative bills, center-state relations, and national socio-economic policies through regional perspectives.",
    seatsTotal: 40,
    seatsOccupied: 28,
    ebMembers: [],
    difficulty: "Intermediate",
    countries: [
      "Narendra Modi (BJP)",
      "Rahul Gandhi (INC)",
      "Arvind Kejriwal (AAP)",
      "Amit Shah (BJP)",
      "Mamata Banerjee (TMC)",
      "Yograj Singh (SAD)",
      "Akhilesh Yadav (SP)",
      "Asaduddin Owaisi (AIMIM)",
      "Nitish Kumar (JD-U)",
      "M.K. Stalin (DMK)",
      "S. Jaishankar (BJP)",
      "Nirmala Sitharaman (BJP)",
      "Mallikarjun Kharge (INC)",
      "Mahua Moitra (TMC)",
      "Tejashwi Yadav (RJD)",
      "Sharad Pawar (NCP)",
      "Uddhav Thackeray (SS-UBT)",
      "Pinarayi Vijayan (CPI-M)"
    ]
  },
  {
    id: "lok-sabha",
    name: "Lok Sabha",
    fullName: "House of the People",
    agenda: "Comprehensive strategy on cyber security, critical digital infrastructure, and national surveillance protocols.",
    description: "Deliberate within the lower house of India's Parliament. Delegates engage in direct constitutional debate, question hours, and draft bills concerning national integrity, defense budgets, and modern national defense paradigms.",
    seatsTotal: 35,
    seatsOccupied: 22,
    ebMembers: [],
    difficulty: "Advanced",
    countries: [
      "Srinagar Constituency (NC)",
      "Wayanad Constituency (INC)",
      "Gandhinagar Constituency (BJP)",
      "Lucknow Constituency (BJP)",
      "Hyderabad Constituency (AIMIM)",
      "Baramati Constituency (NCP)",
      "Diamond Harbour Constituency (TMC)",
      "New Delhi Constituency (BJP)",
      "Chennai South Constituency (DMK)",
      "Mainpuri Constituency (SP)",
      "Patna Sahib Constituency (BJP)",
      "Amritsar Constituency (INC)",
      "Mumbai South Constituency (SS-UBT)",
      "Thiruvananthapuram Constituency (INC)"
    ]
  },
  {
    id: "unga",
    name: "UNGA",
    fullName: "United Nations General Assembly",
    agenda: "Structuring international regulatory treaties for the ethics, military deployment, and governance of Artificial Intelligence.",
    description: "The primary policymaking body of the UN. In UNGA, delegates represent sovereign states, negotiating complex resolutions surrounding automated battle systems, algorithmic biases, and digital state sovereignty on an international level.",
    seatsTotal: 50,
    seatsOccupied: 31,
    ebMembers: [],
    difficulty: "Beginner",
    countries: [
      "United States",
      "Russian Federation",
      "People's Republic of China",
      "United Kingdom",
      "France",
      "India",
      "Japan",
      "Germany",
      "Ukraine",
      "Saudi Arabia",
      "Israel",
      "Iran",
      "North Korea",
      "Brazil",
      "South Africa",
      "Australia",
      "Canada",
      "South Korea",
      "Turkey",
      "Pakistan"
    ]
  },
  {
    id: "uncsw",
    name: "UNCSW",
    fullName: "UN Commission on the Status of Women",
    agenda: "Combatting gender-based digital vulnerabilities and optimizing global socio-economic empowerment in the post-pandemic labor force.",
    description: "The UNCSW is dedicated exclusively to gender equality and the empowerment of women. Delegates negotiate solutions related to the digital divide, equal pay, healthcare access, and safety protocols in high-risk zones.",
    seatsTotal: 30,
    seatsOccupied: 19,
    ebMembers: [],
    difficulty: "Intermediate",
    countries: [
      "Sweden",
      "Finland",
      "New Zealand",
      "Canada",
      "Iceland",
      "India",
      "United States",
      "Rwanda",
      "Iran (Observer)",
      "Afghanistan (Observer)",
      "Norway",
      "Switzerland",
      "South Africa",
      "Kingdom of Saudi Arabia",
      "Nigeria",
      "Mexico",
      "Brazil"
    ]
  },
  {
    id: "international-press",
    name: "International Press",
    fullName: "International Press (IP)",
    agenda: "Reporting, analyzing, and critical auditing of proceedings across all committees through journalism and caricature.",
    description: "Operate as a sovereign journalist, photojournalist, or political cartoonist. Instead of defending state policies, IP delegates represent global wire services and independent journals, crafting press releases, holding press conferences, and testing delegate accountability.",
    seatsTotal: 15,
    seatsOccupied: 11,
    ebMembers: [],
    difficulty: "Advanced",
    countries: [
      "Reuters Correspondent",
      "BBC Reporter",
      "Al Jazeera Journalist",
      "Associated Press Correspondent",
      "The New York Times Columnist",
      "The Hindu Editorialist",
      "CNN Photojournalist",
      "Independent Cartoonist / Satyrist"
    ]
  },
  {
    id: "ipl",
    name: "IPL",
    fullName: "IPL Mock Consortium & Crisis Desk",
    agenda: "Navigating high-stakes franchise acquisitions, dynamic player valuations, media rights bidding, and player-draft emergency protocols.",
    description: "Enter the fast-paced, high-stakes boardroom of sports management. Play as team owners, tournament directors, and corporate sponsors in a simulated live-auction draft and media negotiation room where quick calculations and crisis strategy rule.",
    seatsTotal: 24,
    seatsOccupied: 16,
    ebMembers: [],
    difficulty: "Team of 4",
    countries: [
      "Mumbai Indians Owners",
      "Chennai Super Kings Directors",
      "Royal Challengers Bengaluru Representatives",
      "Kolkata Knight Riders Delegation",
      "Gujarat Titans Stakeholders",
      "Lucknow Super Giants Management",
      "Rajasthan Royals Board Members",
      "Delhi Capitals Representatives",
      "Punjab Kings Co-owners",
      "Sunrisers Hyderabad Directors",
      "BCCI Governing Council delegates",
      "Star Sports Network Executive Board"
    ]
  }
];

export const SCHEDULE_DAY_1: DaySchedule[] = [
  {
    time: "08:00 AM – 09:00 AM",
    title: "Registrations & Kit Distribution",
    venue: "Main Lobby & Grand Atrium",
    description: "Collection of official credentials, files, committee handbooks, and individual delegation placards.",
    type: "break"
  },
  {
    time: "09:00 AM – 09:30 AM",
    title: "Breakfast",
    venue: "Exhibition Lawns",
    description: "A delicious morning breakfast served to all guests and delegates.",
    type: "break"
  },
  {
    time: "09:30 AM – 10:30 AM",
    title: "Opening Ceremony",
    venue: "Imperial Auditorium",
    description: "Introduction by the Secretariat, inspiring addresses by the Chief Guest, and the sounding of the gavel.",
    type: "ceremony"
  },
  {
    time: "10:30 AM – 01:00 PM",
    title: "Committee Session I",
    venue: "Respective Committee Rooms",
    description: "Roll call, establishment of the agenda, opening statements, and draft of the primary speakers list (GSL).",
    type: "academic"
  },
  {
    time: "01:00 PM – 02:00 PM",
    title: "Lunch",
    venue: "Royal Dining Hall",
    description: "A gourmet lunch buffet prepared to facilitate casual lobbying and group alignments.",
    type: "break"
  },
  {
    time: "02:00 PM – 04:00 PM",
    title: "Committee Session II",
    venue: "Respective Committee Rooms",
    description: "First moderated caucuses examining critical aspects of the agenda, crisis introduction, and resolution drafting.",
    type: "academic"
  },
  {
    time: "04:00 PM – 05:00 PM",
    title: "Socials",
    venue: "Courtyard Garden",
    description: "Fun, lighthearted networking, and interactive icebreakers under the evening garden canopy.",
    type: "break"
  },
  {
    time: "05:45 PM",
    title: "Dispersal",
    venue: "Main Exit",
    description: "End of Day 1 proceedings. Delegation teams disperse for research and strategy preparation.",
    type: "break"
  }
];

export const SCHEDULE_DAY_2: DaySchedule[] = [
  {
    time: "09:00 AM – 11:30 AM",
    title: "Committee Session III",
    venue: "Respective Committee Rooms",
    description: "Heated debates on amendments, resolution formatting, and draft working papers alignment.",
    type: "academic"
  },
  {
    time: "11:30 AM – 12:00 PM",
    title: "Breakfast",
    venue: "Delegate Coffee Lounge",
    description: "A mid-morning breakfast break during final resolution drafting.",
    type: "break"
  },
  {
    time: "12:00 PM – 02:30 PM",
    title: "Committee Session IV (Voting)",
    venue: "Respective Committee Rooms",
    description: "Presentation of Draft Resolutions, hostile/friendly amendments voting, and closing thoughts.",
    type: "academic"
  },
  {
    time: "02:30 PM – 03:15 PM",
    title: "Gaming",
    venue: "Recreation Hub",
    description: "Collaborative icebreaker games and friendly competitive sessions.",
    type: "break"
  },
  {
    time: "03:15 PM – 05:00 PM",
    title: "Closing Ceremony",
    venue: "Imperial Auditorium",
    description: "Distribution of prestigious trophies: 'Best Delegate', 'Outstanding Delegate', and 'Special Mention'.",
    type: "ceremony"
  },
  {
    time: "05:00 PM – 05:45 PM",
    title: "Socials",
    venue: "Exhibition Lawns",
    description: "Post-conference celebrations, delegate photography, and goodbye tea.",
    type: "break"
  },
  {
    time: "05:45 PM",
    title: "Dispersal",
    venue: "Main Exit",
    description: "Official adjournment of the assembly. Safe journeys to all delegates!",
    type: "break"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Who can participate in Edopia MUN 2026?",
    answer: "Edopia MUN 2026 is open to middle school, high school, and collegiate students from registered institutions worldwide. Independent delegates are also very welcome to register.",
    category: "General"
  },
  {
    question: "What is included in the delegate registration fee?",
    answer: "The registration fee includes access to all 4 committee sessions, full corporate delegate kits (placard, notebook, dynamic pen, official handbook), executive entries to high tea, snacks, gourmet buffets on both days (July 4th and 5th), and eligibility for all conference award categories.",
    category: "Registration"
  },
  {
    question: "How are country or portfolio allotments made?",
    answer: "Allotments are carried out strictly based on merit, previous MUN experience, and your prioritized preferences during registration. Early bird registrations are allotted with higher preference weight. Allotments are updated on your personalized dashboard within 24 to 48 hours of payment verification.",
    category: "Registration"
  },
  {
    question: "What is the dress code for the two days?",
    answer: "Day 1 (July 4) permits Indian/Traditional Formals (Kurta-pyjamas, Nehru jackets, sarees, formal salwar suits) or continued Western Formals to celebrate culture. Day 2 (July 5) requests Western Formal Attire (Suits, blazers, formal boots/heels, conservative corporate dresses).",
    category: "Dress Code"
  },
  {
    question: "What makes the IPL committee unique?",
    answer: "Unlike traditional static UN assemblies, the IPL Mock Consortium operates as a high-stakes, fast-tempo crisis and auction committee. It focuses on negotiation, instant asset liquidity, mathematics, salary-cap policies, and strategic sports franchise bidding. It operates under a unique BCCI-consortium protocol.",
    category: "Committees"
  }
];
