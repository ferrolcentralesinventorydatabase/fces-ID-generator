/* ==========================================================
   PERMANENT SCHOOL SETTINGS
   Edit this file once. Every ID uses these values automatically.
   Logos and the e-signature are image files in the /assets folder.
   ========================================================== */
window.SCHOOL_CONFIG = {
  schoolName: "Ferrol Central Elementary School",
  schoolAddress: "Poblacion, Ferrol, Romblon",
  schoolCode: "111352",

  principalName: "Archie F. Galicia",   // <-- check this is correct
  principalTitle: "Principal I",

  // First school year the IDs are valid for (can be changed in the app)
  validityStartYear: 2026,

  // Image files inside the /assets folder (PNG with transparent background works best)
  logos: {
    school:   "assets/school-logo.png",
    deped:    "assets/deped-logo.png",
    bagong:   "assets/bagong-pilipinas-logo.png",
    district: "assets/district-logo.png"
  },
  signature: "assets/principal-signature.png",

  // Card colors (same as the original design). Fixed - change here only if the design must change.
  colors: { primary:"#1e3a5f", accent:"#4a90d9", top:"#eef2f7", bottom:"#0f2137" }
};
