const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✓ PASS: ${message}`);
  }
}

console.log("=== RUNNING HAMZA ALI PORTFOLIO VERIFICATION SUITE ===\n");

// 1. Check core assets
const coreAssets = [
  "public/images/profile/ProfilePicture.jpg",
  "public/icons/Logo SVG.svg",
  "public/certificates/Hackathon/HACKDATAV2.jpeg",
];

for (const asset of coreAssets) {
  assert(fs.existsSync(path.join(root, asset)), `Core asset exists: ${asset}`);
}

// 2. Check data files exist and have content
const dataFiles = [
  "data/profile.ts",
  "data/experience.ts",
  "data/skills.ts",
  "data/education.ts",
  "data/certificates.ts",
  "data/activities.ts",
  "data/projects.ts",
];

for (const df of dataFiles) {
  const p = path.join(root, df);
  assert(fs.existsSync(p) && fs.statSync(p).size > 100, `Data file populated: ${df}`);
}

// 3. Verify Experience: exactly the 2 professional entries (Mela & Blood donation removed)
const expCode = fs.readFileSync(path.join(root, "data/experience.ts"), "utf8");
assert(expCode.includes("FlyRank AI"), "FlyRank AI ML internship included in Experience");
assert(expCode.includes("Saint Louis University & Excelerate"), "Saint Louis University PM trainee included in Experience");
assert(!expCode.includes("Khawarzmi Science Mela"), "Khawarzmi Science Mela removed from Experience per user request");
assert(!expCode.includes("Blood Donation Camps"), "Blood Donation Camps removed from Experience per user request");

// 4. Verify Hero: emoji trophy removed, 13 Certifications
const heroCode = fs.readFileSync(path.join(root, "components/sections/Hero.tsx"), "utf8");
assert(heroCode.includes('"1st Runner Up"'), "Hero has clean '1st Runner Up' text");
assert(!heroCode.includes("🏆"), "Hero has zero trophy emojis (clean SVG symbol only)");
assert(heroCode.includes("13 Certifications"), "Hero stats show 13 Certifications");

// 5. Verify About Profile Snapshot: Hackathon Result row removed
const aboutCode = fs.readFileSync(path.join(root, "components/sections/About.tsx"), "utf8");
assert(!aboutCode.includes("<dt className=\"text-brand-darkText\">Hackathon Result</dt>"), "Hackathon Result row removed from Profile Snapshot");

// 6. Verify Education: CURRENT DEGREE green badge removed
const eduCode = fs.readFileSync(path.join(root, "components/sections/Education.tsx"), "utf8");
assert(!eduCode.includes("Current Degree"), "Current Degree badge removed from Education");

// 7. Verify Certifications: Bootcamps removed, 13 credentials
const certsSectionCode = fs.readFileSync(path.join(root, "components/sections/Certifications.tsx"), "utf8");
assert(!certsSectionCode.includes("Developer Bootcamps"), "Developer Bootcamps removed from Certifications");
assert(!certsSectionCode.includes("bootcamp"), "Bootcamp filter tab removed from Certifications");
assert(certsSectionCode.includes("13 Verified Credentials"), "Certifications displays 13 Verified Credentials");

// 8. Verify Activities: zero trophy emojis
const actCode = fs.readFileSync(path.join(root, "components/sections/Activities.tsx"), "utf8");
assert(!actCode.includes("🏆"), "Activities has zero trophy emojis");

// 9. Strictly verify Projects: Exactly the 5 Section A and 5 Section B
const projectsCode = fs.readFileSync(path.join(root, "data/projects.ts"), "utf8");
assert(projectsCode.includes("Safar-AI-Smart-Route-Predictor"), "Safar AI project included");
assert(projectsCode.includes("MBPLDS-DSA-Project-"), "MBPLDS project included");
assert(projectsCode.includes("Network-Controlled-Custom-CMD-Panel-Using-TCP-Sockets"), "TCP Sockets project included");
assert(projectsCode.includes("ShredX"), "ShredX project included");
assert(projectsCode.includes("ML — FlyRank internship"), "FlyRank ML project included");

assert(projectsCode.includes("hit-and-check"), "hit-and-check project included");
assert(projectsCode.includes("Kairon"), "Kairon project included");
assert(projectsCode.includes("Schema-aware Synthetic Data Platform"), "Schema-aware Synthetic Data project included");
assert(projectsCode.includes("AI Resume Analyzer"), "AI Resume Analyzer project included");
assert(projectsCode.includes("CyberCrime-IS"), "CyberCrime-IS project included");

assert(!projectsCode.includes("ShieldPay"), "ShieldPay strictly excluded");
assert(!projectsCode.includes("MediScript AI"), "MediScript AI strictly excluded");
assert(!projectsCode.includes("CureOne"), "CureOne strictly excluded");
assert(!projectsCode.includes("Noshai-Steel"), "Noshai-Steel strictly excluded");

// 10. Verify index.html does not exist
assert(!fs.existsSync(path.join(root, "index.html")), "Standalone index.html is removed");

console.log("\n============================================");
if (failures === 0) {
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY! (0 failures)");
  process.exit(0);
} else {
  console.error(`💥 ${failures} verification check(s) failed.`);
  process.exit(1);
}
