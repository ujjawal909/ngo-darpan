/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: "ngo" | "tax" | "compliance";
  detailedInfo: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface RequiredDocument {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsFeature {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  organization: string;
  rating: number;
  text: string;
  location: string;
}

// 17 Premium Services Offered by Complete Tax Solution
export const SERVICES: ServiceItem[] = [
  {
    id: "ngo-darpan",
    title: "NGO Darpan Registration",
    description: "Enroll your NGO, Trust, or Society with NITI Aayog to get a Unique ID required for Government grants and schemes.",
    category: "ngo",
    detailedInfo: "NGO Darpan is a portal initiated by the NITI Aayog, Government of India, that acts as an interface between NGOs and key government departments. Obtaining a Unique ID is mandatory for applying for any central or state government funding and schemes.",
    benefits: [
      "Mandatory for Government Grants and CSR funding",
      "Increases credibility and transparency of the NGO",
      "Direct interface with Government Ministries",
      "Easier application processing on NGO portals"
    ]
  },
  {
    id: "trust-reg",
    title: "Trust Registration",
    description: "Incorporate a Public or Private Trust in Rajasthan with local sub-registrar under the Indian Trusts Act, 1882.",
    category: "ngo",
    detailedInfo: "A Trust is one of the oldest forms of non-profit structures in India, established for charitable or religious purposes. It is managed by a Board of Trustees under a Trust Deed.",
    benefits: [
      "Simple to set up and manage",
      "Protects family property for charitable goals",
      "Minimum of two trustees required",
      " राजस्थान देवस्थान विभाग (Rajasthan Devasthan Department) approval support"
    ]
  },
  {
    id: "society-reg",
    title: "Society Registration",
    description: "Register a Society under the Societies Registration Act, 1860 (or Rajasthan Society Act, 1958) for literature, science, or charity.",
    category: "ngo",
    detailedInfo: "A Society is an association of individuals combined to achieve a common charitable, literary, scientific, or social objective. It is managed by a Governing Body or Executive Committee.",
    benefits: [
      "Democratic structure with elected body",
      "Separate legal entity status",
      "Requires minimum of 7 members",
      "Ideal for clubs, educational institutions, and state-wide operations"
    ]
  },
  {
    id: "sec8-company",
    title: "Section 8 Company Registration",
    description: "Incorporate a premium non-profit company under the Companies Act, 2013 with higher legal status and global prestige.",
    category: "ngo",
    detailedInfo: "A Section 8 Company is a company registered under the Companies Act, 2013, for promoting art, science, commerce, education, charity, or environment protection where profits are strictly reinvested in the objects.",
    benefits: [
      "Highest corporate stature and global credibility",
      "No requirement to add 'Limited' or 'Private Limited' to its name",
      "Exempt from stamp duty on registration in many states",
      "Easy transferability of ownership & continuous existence"
    ]
  },
  {
    id: "reg-80g",
    title: "80G Registration",
    description: "Secure tax exemption status for your NGO so that donors can claim 50% deduction on their contributions.",
    category: "tax",
    detailedInfo: "An 80G registration is granted by the Income Tax Department to NGOs. It encourages donors to fund your cause by giving them income tax deduction benefits.",
    benefits: [
      "Attracts corporate and individual donors",
      "Boosts NGO fundraising capabilities",
      "Valid across India for tax-paying donors",
      "Mandatory for corporate social responsibility (CSR) programs"
    ]
  },
  {
    id: "reg-12a",
    title: "12A Registration",
    description: "Get lifetime tax-exempt status on the entire income and receipts of your NGO, Trust, or Section 8 Company.",
    category: "tax",
    detailedInfo: "Registration under Section 12A of the Income Tax Act exempts the surplus income of the NGO from income tax, provided the funds are utilized for charitable objects.",
    benefits: [
      "Zero tax on donations, membership fees, and surplus",
      "Lifetime validity (subject to periodic renewals)",
      "Prerequisite for applying for 80G and FCRA",
      "Protects NGO accumulation of funds for future projects"
    ]
  },
  {
    id: "csr-reg",
    title: "CSR Registration (CSR-1)",
    description: "File Form CSR-1 with the MCA to legally receive corporate funding under Corporate Social Responsibility.",
    category: "ngo",
    detailedInfo: "Under Section 135 of the Companies Act, 2013, companies with certain net worth/turnover must spend 2% of their profits on CSR activities. NGOs must register via Form CSR-1 to be eligible to receive these funds.",
    benefits: [
      "Access to multi-crore corporate CSR budgets",
      "Listing on the Ministry of Corporate Affairs database",
      "Establishes institutional readiness",
      "Mandatory for corporate collaborations"
    ]
  },
  {
    id: "niti-aayog",
    title: "NITI Aayog Registration",
    description: "Full setup, profile completion, and sectoral registration on the official NITI Aayog portal.",
    category: "ngo",
    detailedInfo: "This is synonymous with NGO Darpan. It establishes a digital profile for your NGO with the NITI Aayog, tracking details of key members, previous activities, and registration certificates.",
    benefits: [
      "Centralized verification of NGO details",
      "Access to central government grants directly",
      "Allows active participation in government-civil society webinars",
      "Builds unmatched organizational trust"
    ]
  },
  {
    id: "fcra-consult",
    title: "FCRA Consultancy",
    description: "Expert compliance and filing support for receiving foreign contributions/donations legally under the FCRA Act.",
    category: "ngo",
    detailedInfo: "Foreign Contribution Regulation Act (FCRA) registration is mandatory for any NGO wishing to receive grants or donations from overseas donors, foreign citizens, or international foundations.",
    benefits: [
      "Enables legal receipt of international charity funding",
      "Prepares the NGO for high-standard audit compliance",
      "Ensures zero legal hassle from regulatory agencies",
      "Opens doors to global collaboration and impact"
    ]
  },
  {
    id: "trademark",
    title: "Trademark Registration",
    description: "Protect your NGO's name, logo, slogan, or brand identity from unauthorized copying or misuse.",
    category: "compliance",
    detailedInfo: "A trademark is an intellectual property asset. We help you file trademark applications for class 45 (charitable services) or any commercial class to guarantee exclusive brand ownership.",
    benefits: [
      "Exclusive legal ownership of your name and logo",
      "Prevents competitors from using identical or similar names",
      "Creates an intangible corporate asset",
      "Right to use the TM and ® symbols next to your brand"
    ]
  },
  {
    id: "msme-reg",
    title: "MSME / Udyam Registration",
    description: "Register for Udyam to access government subsidies, priority sector lending, and MSME benefits.",
    category: "compliance",
    detailedInfo: "Udyam registration is a free, paperless government portal registration for Micro, Small, and Medium Enterprises. Section 8 companies and educational NGOs can also leverage this for subsidies.",
    benefits: [
      "Collateral-free business loans from banks",
      "Subsidies on patent and trademark registration",
      "Protection against delayed payments (MSME Samadhaan)",
      "Concession on electricity and water utility bills"
    ]
  },
  {
    id: "gst-reg",
    title: "GST Registration & Filing",
    description: "Obtain your GSTIN and file monthly/quarterly returns. Stay fully compliant with Indian indirect tax laws.",
    category: "tax",
    detailedInfo: "GST (Goods and Services Tax) registration is mandatory for businesses with turnover crossing the threshold limits (₹20/40 Lakhs) or those operating in inter-state e-commerce.",
    benefits: [
      "Legal recognition as a registered supplier",
      "Pass on Input Tax Credit (ITC) to business clients",
      "Seamless inter-state trade of goods and services",
      "Avoid hefty penalties for non-compliance"
    ]
  },
  {
    id: "itr-filing",
    title: "Income Tax Return (ITR)",
    description: "Professional ITR filing for individuals, businesses, corporate companies, and mandatory ITR-7 for NGOs/Trusts.",
    category: "tax",
    detailedInfo: "NGOs must file ITR-7 annually before the due date to preserve their tax-exempt status under Section 11/12A. We provide error-free filing with double verification of receipts.",
    benefits: [
      "Preserves 12A/80G tax exemptions",
      "Essential for applying for bank loans and visas",
      "Avoids receiving notices from the Income Tax department",
      "Aids in seamless financial audits"
    ]
  },
  {
    id: "dsc-services",
    title: "Digital Signature Certificate (DSC)",
    description: "Get Class 3 secure Digital Signatures for MCA, Income Tax, GST, and e-Tendering portals.",
    category: "compliance",
    detailedInfo: "A Digital Signature Certificate is a secure digital key issued by certifying authorities to sign electronic documents. Class 3 DSC is the highest secure level used for all government filing.",
    benefits: [
      "Highly secure and legally valid under IT Act, 2000",
      "Mandatory for Section 8 and private company incorporation",
      "Enables secure paperless electronic transactions",
      "1-to-2 years validity option with swift renewal support"
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description: "Reliable, cloud-based accounting, ledger maintenance, balance sheet preparation, and professional auditing support.",
    category: "compliance",
    detailedInfo: "We maintain daily financial transactions, bank reconciliations, payroll sheets, and prepare final Profit & Loss and Balance Sheets according to standard Indian Accounting Principles.",
    benefits: [
      "Fully compliant books for smooth tax audits",
      "Accurate real-time tracking of expenses and donations",
      "Eliminates the cost of a full-time in-house accountant",
      "Prepares perfect financial statements for donor presentations"
    ]
  },
  {
    id: "project-report",
    title: "Project Report Preparation",
    description: "Get customized, detailed project reports and financial projections for bank loans, grants, and CSR bidding.",
    category: "compliance",
    detailedInfo: "A detailed project report (DPR) outlines the technical, operational, and financial feasibility of your NGO or business. Our experts compile premium reports with deep market insight.",
    benefits: [
      "Increases the chances of bank loan approvals",
      "Perfect format matching expectations of CSR donors",
      "Clear 5-year financial projections (cash flow, DSCR, NPV)",
      "Custom-tailored to your specific sectoral goals"
    ]
  },
  {
    id: "business-loan",
    title: "Business Loan Consultancy",
    description: "Professional assistance in securing MSME loans, startup funding, and bank credit limits.",
    category: "compliance",
    detailedInfo: "We bridge the gap between businesses and top public/private banks. We guide you on credit rating, CMA data, documentation, and government-sponsored loan subsidy schemes.",
    benefits: [
      "End-to-end support from application to disbursement",
      "Access to lowest interest rate schemes",
      "Guidance on CGTMSE (collateral-free) schemes",
      "Negotiation support on banking terms and processing fees"
    ]
  }
];

// 20 Rich and Exhaustive NGO Darpan & Registration FAQs
export const FAQS: FAQItem[] = [
  {
    question: "What is NGO Darpan Registration?",
    answer: "NGO Darpan is a portal operated by NITI Aayog (National Institution for Transforming India) that maps all non-governmental organizations (NGOs), Trusts, Societies, and Section 8 Companies working in India. Registration generates a Unique Identification Number (Unique ID) which acts as a national database credential for civil society organizations.",
    category: "NGO Darpan"
  },
  {
    question: "Is NGO Darpan Unique ID mandatory for my NGO?",
    answer: "Yes, it is strictly mandatory if your NGO intends to apply for government grants, schemes, and financial aid from Central or State Ministries. Furthermore, most Corporate Social Responsibility (CSR) donors and private foundations now demand the NGO Darpan Unique ID as a prerequisite for funding.",
    category: "NGO Darpan"
  },
  {
    question: "What type of NGOs can register on the NGO Darpan portal?",
    answer: "Any voluntary organization, charitable trust, registered society, or non-profit Section 8 Company that is actively engaged in charitable, social, developmental, or public benefit work in India can register on NGO Darpan.",
    category: "NGO Darpan"
  },
  {
    question: "What documents are required for NGO Darpan Registration?",
    answer: "You will need: 1. Registration Certificate of the Trust/Society/Section 8 Company. 2. Trust Deed (for Trusts) or Memorandum of Association & Bye-laws (for Societies/Section 8). 3. PAN Card of the NGO. 4. PAN, Aadhaar cards, mobile numbers, and email addresses of at least three key executive members (e.g., President, Secretary, Treasurer). 5. Detail of active fields of operation, state of work, and key activities.",
    category: "NGO Darpan"
  },
  {
    question: "How long does it take to get the NGO Darpan Unique ID?",
    answer: "With Complete Tax Solution, we compile your file and submit it within 1-2 business days. The NITI Aayog officials typically review and approve the profile, generating the Unique ID within 3 to 7 working days, subject to correct documentation.",
    category: "NGO Darpan"
  },
  {
    question: "Can an individual or unregistered group register on NGO Darpan?",
    answer: "No. Only legally registered entities such as Registered Trusts, Registered Societies, or incorporated Section 8 Companies can sign up and acquire an NGO Darpan Unique ID. Individuals or informal clubs are not eligible.",
    category: "NGO Darpan"
  },
  {
    question: "What is the validity of the NGO Darpan Unique ID?",
    answer: "The NGO Darpan Unique ID has lifetime validity once issued. However, the NGO is required to keep its profile updated on the portal whenever there is a change in the executive committee members, address, or when annual financial statements are audited.",
    category: "NGO Darpan"
  },
  {
    question: "Are there any government fees for NGO Darpan Registration?",
    answer: "The Government of India does not charge any official portal fees for NGO Darpan registration. The cost incurred is only the professional service and consultancy fee charged by Complete Tax Solution for filing, compliance verification, and tracking.",
    category: "NGO Darpan"
  },
  {
    question: "What are the core benefits of NGO Darpan?",
    answer: "Benefits include: 1. Legally apply for Central/State Government grants. 2. Establish high trust with corporate CSR departments. 3. Be visible on the nationwide database of verified NGOs. 4. Directly communicate with government ministries. 5. Stay updated on the latest public welfare projects and collaboration initiatives.",
    category: "NGO Darpan"
  },
  {
    question: "What is the difference between a Trust, a Society, and a Section 8 Company?",
    answer: "A Trust is registered under the Indian Trusts Act and managed by Trustees with minimum regulatory interference. A Society is registered under the Societies Act, featuring a democratic body of 7+ members. A Section 8 Company is incorporated under the Ministry of Corporate Affairs, providing the highest global stature, strict auditing, and corporate transparency.",
    category: "NGO Registration"
  },
  {
    question: "What are 12A and 80G registrations?",
    answer: "These are tax registrations with the Income Tax Department. 12A exempts the NGO's own income from being taxed, allowing them to accumulate funds. 80G provides a tax deduction of 50% to donors who donate money to your NGO, encouraging philanthropy.",
    category: "Tax Exemptions"
  },
  {
    question: "Can a new NGO apply for NGO Darpan and 12A/80G immediately?",
    answer: "Yes, absolutely! A newly registered Trust, Society, or Section 8 Company can apply for NGO Darpan and provisional 12A & 80G registrations immediately after receiving its PAN card. There is no requirement to wait for 3 years for provisional registrations.",
    category: "Tax Exemptions"
  },
  {
    question: "What is Form CSR-1 and why is it important?",
    answer: "Form CSR-1 is a registration form filled out with the Ministry of Corporate Affairs (MCA) to register an NGO for Corporate Social Responsibility funding. Companies cannot give CSR grants to any NGO that does not hold a verified CSR-1 Registration Number.",
    category: "CSR Funding"
  },
  {
    question: "What are the common reasons for rejection on NGO Darpan?",
    answer: "Rejection usually happens due to: 1. Mismatch between details in the portal and the Trust Deed/PAN card. 2. Providing incomplete Aadhaar/PAN details of office bearers. 3. Poorly scanned, unreadable documents. 4. Incorrect selection of sector categories. Complete Tax Solution guarantees zero-error application to avoid such rejections.",
    category: "NGO Darpan"
  },
  {
    question: "Can an NGO receive foreign donations without FCRA?",
    answer: "No, receiving any amount of foreign contribution or donation without a valid registration or prior permission under the Foreign Contribution Regulation Act (FCRA) is highly illegal and can invite severe penalties and legal action.",
    category: "FCRA"
  },
  {
    question: "Where is Complete Tax Solution located?",
    answer: "Our main office is located in Jaipur, Rajasthan, at C-2, Krishna Enclave, B-1, Kailash Nagar, Jhotwara, Jaipur - 302012. We serve clients across Rajasthan and all other states of India digitally.",
    category: "About Firm"
  },
  {
    question: "How does Complete Tax Solution handle remote clients?",
    answer: "Our entire consultation, document collection, and filing process are 100% digitized. You can share scanned documents over WhatsApp (8741009775) or Email (taxca2@gmail.com). We manage everything and send you the government certificates digitally.",
    category: "About Firm"
  },
  {
    question: "Do I need a physical digital signature for filing?",
    answer: "For certain filings like Section 8 Company incorporation or MCA filings, a secure Class 3 Digital Signature Certificate (DSC) is mandatory. We can issue a premium DSC for you in under 30 minutes, without any physical paperwork.",
    category: "DSC"
  },
  {
    question: "Is it possible to track the status of my Darpan application?",
    answer: "Yes. Once we file the application, NITI Aayog sends tracking credentials and status updates directly to your registered mobile and email. Our support team also monitors the application daily until approved.",
    category: "NGO Darpan"
  },
  {
    question: "How can I book a consultation with Complete Tax Solution?",
    answer: "You can click on the 'Apply Now' or 'Call Now' buttons, fill out our working contact form on the website, directly call us at 6378051234, or send a message on WhatsApp at 8741009775 for instant expert guidance.",
    category: "About Firm"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Expert Consultation",
    description: "Connect with our CA/Cost Accountant experts to discuss your NGO's objectives, verify existing registrations, and define the best roadmap."
  },
  {
    step: 2,
    title: "Document Collection",
    description: "Submit digital copies of your NGO PAN, Registration Certificate, Deed, and basic details of at least 3 executive members securely."
  },
  {
    step: 3,
    title: "Data Verification",
    description: "Our compliance team thoroughly audits all documents, checking for spelling matches, legal consistency, and portal guidelines to prevent rejection."
  },
  {
    step: 4,
    title: "Portal Submission",
    description: "We set up your official account on NITI Aayog/Ministry portals, complete complex fields, select target sectors, and upload the scanned deeds."
  },
  {
    step: 5,
    title: "Government Approval",
    description: "We follow up with government officers and address queries. The government reviews the file, generating your unique Registration ID."
  },
  {
    step: 6,
    title: "Post-Approval Support",
    description: "Receive your certificate. We guide you on leveraging your ID for grants, applying for CSR-1, 12A, 80G, and maintaining lifetime compliance."
  }
];

export const REQUIRED_DOCUMENTS: RequiredDocument[] = [
  {
    id: "pan",
    title: "NGO PAN Card",
    description: "Permanent Account Number issued in the name of the Trust, Society, or Section 8 Company.",
    iconName: "FileText"
  },
  {
    id: "aadhaar",
    title: "Aadhaar & PAN of Members",
    description: "Aadhaar Card and PAN of at least 3 active executive members (President, Secretary, Treasurer).",
    iconName: "UserCheck"
  },
  {
    id: "deed",
    title: "Trust Deed / MoA",
    description: "Signed Trust Deed (for Trusts) or Memorandum of Association & Rules (for Societies / Section 8).",
    iconName: "BookOpen"
  },
  {
    id: "cert",
    title: "Registration Certificate",
    description: "Official incorporation certificate issued by the Sub-Registrar, Devasthan, or MCA.",
    iconName: "Award"
  },
  {
    id: "proof",
    title: "Address Proof of Office",
    description: "Electricity bill, water bill, or land tax receipt of the registered office address (with NOC).",
    iconName: "Home"
  },
  {
    id: "email",
    title: "Valid Email Addresses",
    description: "Active, dedicated email of the NGO and key members to receive government OTPs and status alerts.",
    iconName: "Mail"
  },
  {
    id: "mobile",
    title: "Mobile Numbers",
    description: "Aadhaar-linked mobile numbers of key members required for secure OTP verification on portal.",
    iconName: "Smartphone"
  },
  {
    id: "bank",
    title: "Bank Details",
    description: "Bank Passbook or Cancelled Cheque of the NGO's bank account (mandatory for transaction records).",
    iconName: "CreditCard"
  },
  {
    id: "photo",
    title: "Member Photographs",
    description: "Recent passport-sized photographs of all executive committee members in clear format.",
    iconName: "Image"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsFeature[] = [
  {
    title: "Experienced Professionals",
    description: "Lead by Chartered Accountants and Cost Accountants with over 12+ years of hardcore NGO compliance experience."
  },
  {
    title: "Fast Processing",
    description: "Our systematic preparation ensures applications are filed within 24-48 hours with near-instant government response."
  },
  {
    title: "Affordable Fees",
    description: "Transparent pricing with zero hidden costs. Luxury, high-end advisory services made accessible for every charity."
  },
  {
    title: "Government Compliance",
    description: "100% legal alignment with Indian Trusts Act, Rajasthan Societies Act, and NITI Aayog's latest directives."
  },
  {
    title: "Transparent Process",
    description: "Get real-time updates directly on your mobile/email. Complete clarity at every phase of your registration."
  },
  {
    title: "Dedicated Support",
    description: "A dedicated compliance manager allocated to handle your application and answer all queries in real-time."
  },
  {
    title: "Quick Response",
    description: "We respect your time. Instant callbacks, WhatsApp assistance, and rapid dispute/query resolution."
  },
  {
    title: "100% Confidential",
    description: "Your digital documents, member credentials, and NGO records are protected with bank-grade security."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Dr. Ramesh Sharma",
    organization: "Aarogyam Welfare Trust",
    rating: 5,
    text: "Complete Tax Solution helped us get our NGO Darpan Unique ID in just 4 days! Their team is highly professional and guided us through the complex 12A & 80G tax exemptions flawlessly.",
    location: "Jaipur, Rajasthan"
  },
  {
    name: "Mrs. Meenakshi Yadav",
    organization: "Umeed Foundation Society",
    rating: 5,
    text: "We were struggling with local sub-registrar queries for our Society. Complete Tax Solution stepped in, audited our bye-laws, rectified the issues, and got us registered with NITI Aayog easily.",
    location: "Alwar, Rajasthan"
  },
  {
    name: "Mr. Aditya Birla",
    organization: "Sankalp Education Association",
    rating: 5,
    text: "Received amazing support for CSR-1 filing! Their CA experts drafts exceptional project reports that helped us win three corporate sponsorships. Highly recommended for any serious non-profit.",
    location: "Jaipur, Rajasthan"
  },
  {
    name: "Dr. Sameer Khan",
    organization: "LifeCare Health Society",
    rating: 5,
    text: "The best CA consultancy firm in Jhotwara. Got our Section 8 Company incorporated and received Darpan ID with zero hassles. Extremely transparent with fees and documents.",
    location: "Jaipur, Rajasthan"
  }
];
