# Hamza Ali — Elite Portfolio Design System & Production Specification

**Document status:** Implementation-ready design brief
**Primary objective:** A distinctive, premium, production-grade portfolio that feels intentionally art-directed and engineered—not like a generic template or “AI-generated soup.”
**Important content rule:** Do **not** display projects publicly as project cards, a project grid, a project showcase, or individual project pages. The repository inventory in this document is an ordered reference appendix only.

---

## 1. Product Vision

Create a high-quality personal portfolio for Hamza Ali, a Software Engineering student whose professional narrative spans software engineering, web development, applied AI/ML, and developing cybersecurity knowledge. The experience should communicate clarity, taste, technical judgment, and credibility.

### Experience principles

- **Editorial over template:** strong typography, deliberate whitespace, asymmetry with discipline, and a recognizable visual rhythm.
- **Evidence over hype:** use real experience and verifiable facts. No invented metrics, fake testimonials, fake activity, or unsupported expertise claims.
- **Premium restraint:** animation is purposeful; no endless gradients, glowing blobs, excessive glassmorphism, floating random shapes, or decorative code rain.
- **Fast by default:** motion and visual effects must not block reading, navigation, or first content render.
- **Accessible by design:** keyboard, touch, screen readers, reduced-motion preferences, and contrast are first-class requirements.
- **Content before decoration:** each section must answer a visitor’s question and earn its place.

### Primary audiences

Recruiters, internship reviewers, engineering peers, collaborators, and potential clients.

### Core journeys

1. Understand Hamza’s identity and engineering direction quickly.
2. Review his profile, experience, technical focus, education, credentials, and activities.
3. Open his GitHub profile or LinkedIn profile.
4. Contact him without friction.

### Explicit project-display rule

**No visible project showcase.** Do not add project cards, project thumbnails, featured-project bento tiles, project-detail pages, or a “Selected Projects” section. The repository inventory later in this document preserves every supplied repository in its original sequence for reference and link validation only. GitHub and LinkedIn are the primary external profile destinations.

---

## 2. Brand Palette

### Core colors

| Name           | Hex         | Role                                                      |
| -------------- | ----------- | --------------------------------------------------------- |
| Space Indigo   | `#2B2D42` | Primary brand anchor, headings, dark surfaces, footer     |
| Lavender Grey  | `#8D99AE` | Secondary UI, quiet borders, muted decorative details     |
| Platinum       | `#EDF2F4` | Main light canvas and soft section surfaces               |
| Strawberry Red | `#EF233C` | Primary accent, active states, selected interaction cues  |
| Flag Red       | `#D90429` | Pressed/hover emphasis and limited high-attention details |

### Color rules

- Platinum and Space Indigo form the main contrast pair.
- Strawberry Red is an accent, not a background color for large sections.
- Flag Red is reserved for stronger interaction emphasis; do not use both reds everywhere.
- Lavender Grey must not be used for small text on Platinum unless the exact combination passes WCAG 2.2 AA contrast. Use a darker derived text token when needed.
- Avoid arbitrary gradients. If a gradient is used, it must be subtle, purposeful, and built only from the brand palette.
- Never use color as the only way to communicate status, focus, or selection.

### Semantic design tokens

- **Brand:** Space Indigo
- **Canvas:** Platinum
- **Primary text:** Space Indigo
- **Secondary text:** contrast-safe dark neutral derived from Lavender Grey
- **Subtle border:** Lavender Grey with restrained opacity and a solid fallback
- **Accent:** Strawberry Red
- **Accent active:** Flag Red
- **Focus ring:** Strawberry Red with sufficient contrast and visible offset
- **Elevated surface:** white or a carefully controlled near-white
- **Dark surface:** Space Indigo

### Theme direction

The default is a light editorial experience. A dark theme is optional, not automatic. Only add a theme toggle if both themes have complete token coverage, tested contrast, persistent user choice where appropriate, and consistent component states. No half-finished theme switch.

---

## 3. Art Direction: Premium, Not “AI Soup”

### Desired visual character

- Calm, precise, typographic, modern, technically credible.
- Strong layout composition instead of decoration for decoration’s sake.
- A recognizable visual signature using geometry, typography, line work, or restrained motion.
- Consistent spacing, aligned edges, and intentional changes in section density.

### Explicitly avoid

- Generic centered hero with a giant gradient blob.
- A grid of identical rounded cards for every section.
- Fake terminal windows or fake dashboards used only as decoration.
- Percentage-based skill bars, star ratings, circular skill meters, and fabricated “expert” scores.
- Cursor trails that obscure content, scroll hijacking, or motion that delays access.
- Excessive glassmorphism, neon glows, random floating badges, and arbitrary animated particles.
- Huge headings in every section, overuse of uppercase labels, and repetitive pill tags.
- Fake “available for hire” indicators unless the status is real and maintained.

---

## 4. Typography, Grid, Spacing, and Surfaces

### Typography

- Use one highly legible sans-serif for body/interface text.
- A second display family is optional, only if it materially strengthens the identity.
- Limit font weights and avoid loading many font files.
- Use a fluid responsive type scale with controlled minimum and maximum values.
- Reserve the largest scale for the hero; section headings should not all compete.
- Use comfortable line-height and readable text measure; long copy must not stretch edge-to-edge.

### Responsive type hierarchy

1. Hero/display heading
2. Page/section heading
3. Subsection heading
4. Content title
5. Body lead
6. Body regular
7. Caption and metadata

Hierarchy should also come from weight, spacing, alignment, and composition—not font size alone.

### Layout grid

- Establish a consistent maximum content width and responsive column system.
- Desktop: use editorial two-column layouts when they improve the story; do not force every section into two columns.
- Tablet: collapse layouts before text or navigation feels cramped.
- Mobile: single-column reading flow, controlled line lengths, no horizontal overflow.
- Align section starts, labels, content edges, and footer elements to a stable grid.

### Spacing and surfaces

- Use a small, consistent spacing scale.
- Prefer open layouts, fine dividers, and intentional whitespace over repeated cards.
- Use borders to establish structure; use shadows only where real elevation is needed.
- Keep corner radii within one consistent family.
- Interactive controls may be more rounded than editorial content blocks, but the overall design must remain coherent.

---

## 5. Information Architecture — Public Page Sequence

Keep the following section order. Do not insert a public projects section.

### 01 — Header and Navigation

**Purpose:** identity, orientation, and quick access.

Include:

- Name/wordmark: **Hamza Ali**
- Compact descriptor: **Software Engineering Student**
- Navigation: About, Experience, Skills, Education, Certifications, Activities, Contact
- GitHub icon link to the supplied GitHub profile
- LinkedIn icon link to the supplied LinkedIn profile
- A clear Contact action

Behavior:

- Header may become sticky after scrolling, but must remain compact and must not cover anchor targets.
- Active-section indication should be subtle and should not rely on color alone.
- Mobile navigation must support keyboard use, Escape to close, correct expanded state, focus handling, and tap targets.
- All icon-only links require accessible names and visible focus states.

### 02 — Hero / Introduction

**Purpose:** communicate identity and direction in seconds.

Content:

- **Hamza Ali**
- **Software Engineering Student**
- Short supporting statement connecting software engineering, applied AI/ML, web development, and practical problem-solving.
- Primary action: Contact
- Secondary action: GitHub profile
- Optional location label only if Hamza confirms that he wants it public.

Design:

- Strong typographic composition with a distinctive but restrained visual signature.
- Use an asymmetrical editorial layout if it improves hierarchy.
- No project thumbnails, featured repository tiles, fake terminal windows, or unsupported experience claims.
- The primary message must be readable immediately; do not hide it behind a long animation.

### 03 — About

**Purpose:** add context beyond the headline.

Content direction:

- Software Engineering student at COMSATS University Islamabad, Wah Campus.
- Interests include software development, applied AI/ML, web technologies, and cybersecurity fundamentals.
- Emphasize practical learning, teamwork, and building working systems without overstating mastery.
- Write in a direct, human voice; do not repeat the hero paragraph verbatim.

Layout:

- Editorial text block with a secondary metadata column or compact facts row.
- No generic “about me” card with decorative icons for every sentence.

### 04 — Experience

**Purpose:** demonstrate work exposure and professional development.

Use a timeline or editorial list, newest first. Based on the supplied CV information, include these entries and verify details against the final CV before release:

1. **Machine Learning Intern — FlyRank AI****July 2026 – September 2026 · Remote**Source-supported summary: applied machine-learning tasks and AI/ML workflows, including SEO content analysis pipelines, feature engineering, and baseline model evaluation using Google Search Console and GA4 datasets; tools listed include Python, Jupyter Notebook, DuckDB, Pandas, and scikit-learn. Present as completed unless the dates are corrected.
2. **Project Management Trainee — Saint Louis University & Excelerate****December 2025 – January 2026 · Remote**Source-supported summary: project-management training covering planning, scheduling, stakeholder communication, and tools such as Microsoft Office and ClickUp.
3. **Management Team Member — Khawarzmi Science Mela, Crescent College Lahore****October 2023**Source-supported summary: event logistics, public engagement, scheduling, participant communication, and on-ground operations.
4. **Community Service — Blood Donation Camps**
   Include only if Hamza wants it represented publicly; keep wording factual and concise.

Rules:

- Show role, organization, date, and work mode where relevant.
- Use outcome-oriented descriptions only when supported by evidence.
- Do not invent performance metrics, endorsements, or confidential details.
- Avoid a row of identical experience cards.

### 05 — Skills and Technical Focus

**Purpose:** make technical breadth scannable without implying expert mastery in everything.

Potential groups based on supplied CV/context:

- **Programming:** Python, C++, C, JavaScript
- **Web:** HTML, CSS, JavaScript, foundational front-end development
- **AI & Data:** machine-learning fundamentals, applied ML internship work, data analysis workflows
- **Databases:** foundational SQL, Microsoft Access
- **Tools:** Visual Studio Code, IntelliJ IDEA, GitHub, Microsoft Office, ClickUp, Antigravity
- **Developing focus:** AI/ML/DL fundamentals and continued learning

Design:

- Use compact text groups or a carefully typeset list.
- No skill bars, stars, percentage ratings, or “expert” labels.
- Separate hands-on tools from learning interests.
- Do not add technologies merely because they are trendy.

### 06 — Education

**Purpose:** make academic context easy to verify.

Entries based on the supplied CV information:

1. **COMSATS University Islamabad, Wah Campus** — BS Software Engineering, 2024–Present; CGPA 3.41 / 4.00.
2. **Crescent Model Higher Secondary School, Lahore** — Intermediate in Computer Science; 72.16%.
3. **Fazaia Inter College, Lahore** — Matriculation in Computer ; 81.18%.

Design:

- Compact academic timeline or editorial list.
- Current degree receives the strongest emphasis.
- Verify dates, grades, and wording against the latest CV before publishing.

### 07 — Certifications and Credentials

**Purpose:** provide an orderly, verifiable credential record.

Credentials identified in the supplied CV:

1. Python for Everybody Specialization — University of Michigan / Coursera
2. GenAI Powered Data Analytics Job Simulation — Coursera / Job Simulation Program
3. AI KickOff Bootcamp — Google Developer Group
4. Project Initiation: Starting a Successful Project — Google / Coursera, November 2025
5. Foundations of Project Management — Google / Coursera, November 2025
6. Introduction to CIP — OPSWAT Academy, November 2025
7. Cybersecurity — ADBI E-Learning Institute, January 2026
8. Project Management Trainee Early Remote Internship — Saint Louis University / Excelerate, January 2026
9. Frontend Bootcamp (HTML, CSS & JavaScript) — Google Developer Group, COMSATS Wah, November 2025

Design:

- Use a compact list; optionally group technical and professional-development credentials.
- Add “View credential” only where a real public verification URL exists.
- Do not fabricate verification links or expose certificate IDs without a clear reason.
- Reconcile this list with the actual certificates before launch; do not silently assume it is exhaustive.

### 08 — Hackathons, Bootcamps, and Community

**Purpose:** show participation and supported results without exaggeration.

Entries identified in the supplied CV:

- 4.0 Code War Hackathon — HITECH University Taxila
- HackData V1 Hackathon — GDGoC COMSATS Wah
- Global Hackathon Vibe Coding 2026 — Digital Youth Leadership Program
- HACKDATA V2 — **1st Runner Up**, GDGoC COMSATS Wah

Design:

- Restrained editorial list with event name, organizer, and verified result.
- Highlight “1st Runner Up” only for HACKDATA V2.
- Add dates, team names, or event URLs only after verification.

### 09 — Contact

**Purpose:** make contact direct and frictionless.

Include:

- A concise invitation to discuss software engineering, applied AI, collaboration, or suitable opportunities.
- Email: `hamzatalwarali712@gmail.com`
- GitHub icon link
- LinkedIn icon link
- Optional form only if it is connected to a real backend with validation, spam protection, privacy handling, and delivery monitoring.

Behavior:

- If a form exists, provide accessible validation, pending, success, and error states.
- Preserve form values after recoverable failures.
- Never show a fake “message sent” confirmation.
- If no reliable backend exists, use a direct email link rather than a nonfunctional form.

### 10 — Footer

Include:

- Hamza Ali
- Short professional descriptor
- GitHub icon link
- LinkedIn icon link
- Email link
- Current year
- Optional back-to-top control

Keep it concise. No fake status badges, empty slogans, or meaningless link collections.

---

## 6. Scroll Experience and Motion System

Motion should feel carefully choreographed and responsive to user intent—not like a demo reel.

### Scroll behaviors to consider

- **Subtle section reveals:** small opacity/position transitions when content enters view. Avoid hiding all content until animation triggers.
- **Scroll progress indicator:** a thin, understated progress line only if it adds orientation; it must not distract.
- **Sticky header transition:** header spacing/background can adjust after the hero, without sudden layout shifts.
- **Active section tracking:** navigation reflects the current section using a robust intersection-based approach; do not create competing active states.
- **Anchor navigation:** smooth scrolling where supported, with correct focus/offset behavior and reduced-motion fallback.
- **Timeline progression:** a restrained line or marker may respond to scroll through Experience/Education, but content must remain readable if animation fails.
- **Parallax:** optional and minimal; never apply large parallax to text or create motion sickness.
- **Hover feedback:** restrained changes to color, underline, border, or a few pixels of movement for links and controls.
- **Page transitions:** only if routing architecture requires them; avoid blank transition screens and delayed navigation.

### Motion limits

- Short, purposeful transitions; do not animate every element.
- Do not delay access to the hero or navigation while waiting for a timeline.
- No scroll hijacking, forced scroll snapping for long content, or custom cursor that replaces standard pointer affordances.
- Avoid animation-induced layout shifts.
- Respect `prefers-reduced-motion`; reduced-motion mode must retain all information and navigation.
- Test on lower-powered mobile devices and with touch input.

### Motion state checklist

Every interactive element must have the appropriate states:

- Default
- Hover for pointer devices
- Focus-visible
- Active/pressed
- Disabled where relevant
- Loading, success, and error where asynchronous

---

## 7. Bento Grids and Composition Rules

Bento grids are a layout option—not a mandate to put every section into cards.

### Where a bento-style composition may be used

- A compact **About / professional snapshot** composition, provided it does not become a fake dashboard.
- A **skills taxonomy** with a small number of differently sized, clearly related panels.
- A compact **contact/profile links** composition, if it improves scanability.
- A restrained **career facts** composition for verified items such as education, internship, or focus areas.

### Where bento grids must not be used

- **No project bento grid.** This is explicitly excluded.
- Do not turn every certification, experience entry, skill, and paragraph into a separate rounded tile.
- Do not invent numeric metrics to fill empty tiles.
- Do not create “GitHub contribution” stats or animated numbers unless fetched reliably, permitted, and genuinely useful.

### Bento quality criteria

- Each tile has a clear information purpose and meaningful hierarchy.
- Different tile sizes reflect content importance, not random visual variety.
- Alignment and spacing remain consistent across breakpoints.
- Mobile layout becomes a readable sequence, not a cramped mosaic.
- Content remains understandable without decorative graphics or animation.

---

## 8. Iconography and External Links

- Use the official GitHub mark/icon for GitHub profile and repository URLs.
- Use the LinkedIn icon for the LinkedIn profile URL.
- Prefer a consistent, trusted icon source and follow applicable brand guidance.
- Icon-only links must have accessible names; provide tooltips only as a supplement, not as the only label for accessibility.
- Provide visible focus indicators and adequate target size.
- Keep GitHub and LinkedIn links visually consistent, while using their correct platform icons.
- Do not use the GitHub icon as a substitute for project cards; no project showcase is part of the public page.
- If links open a new tab, communicate that behavior accessibly and apply safe external-link handling.

---

## 9. Responsive Behavior

### Desktop

- Use the full editorial grid and carefully selected two-column layouts.
- Preserve generous whitespace without making the page feel empty.
- Keep navigation and the hero balanced.

### Tablet

- Collapse columns before the text becomes cramped.
- Maintain body text size and readable line lengths.
- Keep navigation accessible without horizontal scrolling.

### Mobile

- Single-column reading flow.
- Compact header with accessible menu behavior.
- No hover-only interactions.
- Comfortable tap targets and spacing between links.
- No horizontal overflow, clipped text, or fixed-width content.
- Contact, GitHub, and LinkedIn remain easy to reach.

Test at narrow mobile widths, common phone widths, tablet widths, standard laptop sizes, and wide desktop screens—not only one viewport.

---

## 10. Accessibility Baseline

Target **WCAG 2.2 AA**.

- Use semantic landmarks and a logical heading hierarchy.
- All functionality must work by keyboard.
- Focus indicators must be visible and not obscured by sticky UI.
- Text, icons, controls, and meaningful boundaries must meet contrast requirements.
- Do not communicate meaning through color alone.
- Icon-only links need accessible names.
- Informative images need suitable alternative text; decorative images should be ignored by assistive technology.
- Respect reduced-motion preferences.
- Menus and dialogs, if used, need correct focus management and keyboard behavior.
- Forms need labels, clear error messages, and announced status updates.
- Test keyboard-only navigation and at least one screen-reader flow.

---

## 11. Performance and Production Quality

- Prioritize fast first render and low layout shift.
- Optimize image dimensions and formats; do not load large decorative media without purpose.
- Use a limited set of font files and weights.
- Avoid oversized dependencies and unnecessary animation packages.
- Do not lazy-load above-the-fold content in a way that delays the initial experience.
- Prevent cumulative layout shift from fonts, images, and dynamic content.
- Ensure no visible control is inert and no link silently fails.
- Include a useful page title, meta description, favicon, social preview metadata, and canonical URL once the final domain is known.
- Provide appropriate error/404 handling for the deployed site.
- Verify production behavior on mobile networks and lower-powered devices.

### Release gates

- No broken internal or external links in the final audit.
- No console errors in the primary user journey.
- No horizontal overflow at supported viewport sizes.
- Keyboard navigation passes.
- Reduced-motion behavior passes.
- Color contrast is verified against final color pairings.
- Lighthouse or equivalent checks are reviewed for performance, accessibility, best practices, and SEO.
- Dates, education, experience, credentials, names, and links are verified against source documents.
- No fake success states, unsupported claims, or exposed secrets.

---

## 12. SEO, Privacy, and Trust

- Use a descriptive page title and concise meta description.
- Use semantic headings and meaningful link labels.
- Create a branded social preview image only when a suitable asset is available.
- Do not publish date of birth, blood group, personal IDs, certificate IDs, or other unnecessary sensitive details.
- Publish a phone number only if Hamza explicitly chooses to make it public; email is sufficient.
- Do not claim client work, revenue, user counts, performance improvements, security guarantees, or testimonials without evidence.
- Never expose API keys, secrets, internal URLs, or private repository details.
- If analytics are used, minimize collection and disclose it appropriately.

---

## 13. Repository Inventory — Exact Supplied Sequence

**Important:** This is an ordered reference appendix only. It is not a public projects section. Do not reorder, rename, omit, or silently convert these repositories into project cards. Repository links alone do not prove project quality, ownership, or the exact contribution made.

### A. Main projects and application repositories

1. **ShieldPay** — https://github.com/hamzaali-712/ShieldPay
2. **MediScript-AI-Project** — https://github.com/hamzaali-712/MediScript-AI-Project
3. **Safar-AI-Smart-Route-Predictor** — https://github.com/hamzaali-712/Safar-AI-Smart-Route-Predictor
4. **CureOne-Unified-Healthcare-Management-System** — https://github.com/hamzaali-712/CureOne-Unified-Healthcare-Management-System
5. **cyber-crime-reporting-system** — https://github.com/hamzaali-712/cyber-crime-reporting-system
6. **MBPLDS-DSA-Project-** — https://github.com/hamzaali-712/MBPLDS-DSA-Project-
7. **Network-Controlled-Custom-CMD-Panel-Using-TCP-Sockets** — https://github.com/hamzaali-712/Network-Controlled-Custom-CMD-Panel-Using-TCP-Sockets
8. **ShredX** — https://github.com/hamzaali-712/ShredX
9. **Noshai-Steel** — https://github.com/hamzaali-712/Noshai-Steel
10. **ML — FlyRank internship** — https://github.com/hamzaali-712/ML

### B. Contribution repositories — worked on with teammates

These repositories are described as collaborator-owned in the supplied list. The URLs alone do not establish which commits or pull requests Hamza contributed.

1. **hit-and-check** — Owner: AkifNaveed12 — https://github.com/AkifNaveed12/hit-and-check
2. **Kairon** — Owner: AkifNaveed12 — https://github.com/AkifNaveed12/Kairon
3. **Schema-aware Synthetic Data Platform** — Owner: AkifNaveed12 — https://github.com/AkifNaveed12/Schema-aware-synthetic-data-platform
4. **AI Resume Analyzer** — Owner: FarukhMumtaz — https://github.com/FarukhMumtaz/AI-Resume-Analyzer
5. **CyberCrime-IS** — Owner: FarukhMumtaz — https://github.com/FarukhMumtaz/CyberCrime-IS

### C. Learning repositories and technical practice

1. **HTML-coding-** — https://github.com/hamzaali-712/HTML-coding-
2. **food-point** — https://github.com/hamzaali-712/food-point
3. **Java-Opp-Systems** — https://github.com/hamzaali-712/Java-Opp-Systems
4. **C-Project** — https://github.com/hamzaali-712/C-Project
5. **AI-DataScience** — https://github.com/hamzaali-712/AI-DataScience
6. **PYTHON** — https://github.com/hamzaali-712/PYTHON
7. **Web-Technologies** — https://github.com/hamzaali-712/Web-Technologies
8. **cyber-security-projects** — https://github.com/hamzaali-712/cyber-security-projects
9. **Application-form** — https://github.com/hamzaali-712/Application-form
10. **WebBasedUniversityPortal-UniveristyAssignment1** — https://github.com/hamzaali-712/WebBasedUniversityPortal-UniveristyAssignment1

### D. Profile links

- **GitHub profile:** https://github.com/hamzaali-712
- **LinkedIn profile:** https://www.linkedin.com/in/hamza-ali-k712/

### Link requirements

- The GitHub profile icon must navigate to `https://github.com/hamzaali-712`.
- The LinkedIn icon must navigate to `https://www.linkedin.com/in/hamza-ali-k712/`.
- All repository URLs above are retained in the exact supplied sequence in this specification.
- Use descriptive accessible labels for icon-only links.
- Do not present the reference inventory as hidden SEO content or render it as a project showcase.

---

## 14. Content Integrity Rules

- Preserve all repository names, categories, URLs, and ordering exactly as supplied.
- Do not invent descriptions for repositories whose contents have not been reviewed.
- Do not present collaborator-owned repositories as solely owned projects.
- Do not claim a contribution is verified without checking commits or pull requests.
- Do not fabricate metrics, awards, dates, testimonials, or credential verification links.
- Keep the public site project-free unless Hamza explicitly changes that decision.
- Treat the repository appendix as a planning/reference source, not public-facing content.

---

## 15. Final Acceptance Checklist

### Visual identity

- [ ] All five core colors are defined and used intentionally.
- [ ] Final text/background combinations pass contrast checks.
- [ ] Typography, grid, spacing, borders, and radii are consistent.
- [ ] The visual identity feels art-directed and intentional—not generic or AI-templated.
- [ ] Bento layouts are used only where they improve meaning and hierarchy.

### Sections and content

- [ ] Header and Navigation
- [ ] Hero / Introduction
- [ ] About
- [ ] Experience
- [ ] Skills and Technical Focus
- [ ] Education
- [ ] Certifications and Credentials
- [ ] Hackathons, Bootcamps, and Community
- [ ] Contact
- [ ] Footer
- [ ] No public project showcase, project cards, project bento grid, or project-detail pages

### Interaction and motion

- [ ] Scroll behavior is restrained and does not hijack navigation.
- [ ] Section reveals do not hide content from assistive technology or when scripts fail.
- [ ] Sticky header does not obscure anchor targets or focus.
- [ ] Reduced-motion mode is verified.
- [ ] All interactive states are designed and tested.
- [ ] No cursor or parallax effect impairs usability.

### Links and trust

- [ ] GitHub icon points to the supplied GitHub profile.
- [ ] LinkedIn icon points to the supplied LinkedIn profile.
- [ ] Email destination is correct.
- [ ] All repository entries remain in the supplied order in this reference appendix.
- [ ] Collaborator ownership is clearly distinguished.
- [ ] Experience, academic details, and credentials are checked against current source documents.
- [ ] No unnecessary sensitive personal data is published.

### Production readiness

- [ ] Responsive checks complete.
- [ ] Keyboard and focus checks complete.
- [ ] Screen-reader and reduced-motion checks complete.
- [ ] WCAG 2.2 AA contrast checks complete.
- [ ] Broken-link and console-error audit complete.
- [ ] Performance and SEO checks complete.
- [ ] No dead controls, fake success states, or unsupported claims.

---

## 16. Decisions Requiring Confirmation Before Launch

These should be explicitly confirmed rather than guessed:

1. Final domain and canonical URL.
2. Whether a location label should appear in the hero.
3. Whether a dark theme is genuinely required.
4. Whether contact is email-only or backed by a real contact-form service.
5. Which credentials have public verification URLs.
6. Whether community service should appear in the public Experience section.
7. Whether a portrait or custom social-preview asset will be provided.

**End of design specification.**
