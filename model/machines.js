/* ============================================================
   Crema Vecchia — machine data + original schematic artwork
   All SVG drawings are original line-art evoking the *form* of
   vintage espresso machines (lever, column, group-head). They are
   not reproductions of any specific branded product design.
   ============================================================ */

/* --- a small kit of schematic machine drawings, keyed by silhouette --- */
const ART = {
  /* group-head lever machine (low, horizontal body) */
  group: (accent='var(--brass)') => `
  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <g stroke="${accent}" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="70" y="70" width="260" height="90" rx="10"/>
      <rect x="86" y="86" width="228" height="58" rx="6" opacity=".4"/>
      <line x1="70" y1="160" x2="330" y2="160"/>
      <rect x="60" y="160" width="280" height="18" rx="4"/>
      <!-- group head -->
      <circle cx="200" cy="178" r="20"/>
      <line x1="200" y1="198" x2="200" y2="214"/>
      <path d="M186 214 h28 l-5 14 h-18 z"/>
      <!-- portafilter handle -->
      <line x1="200" y1="178" x2="250" y2="186"/>
      <circle cx="255" cy="187" r="5" fill="${accent}"/>
      <!-- pressure gauge -->
      <circle cx="110" cy="100" r="16"/>
      <line x1="110" y1="100" x2="118" y2="90" stroke-width="1.8"/>
      <!-- eagle / finial knob -->
      <line x1="290" y1="70" x2="290" y2="52"/>
      <circle cx="290" cy="46" r="7"/>
      <!-- feet -->
      <line x1="100" y1="178" x2="100" y2="192"/>
      <line x1="300" y1="178" x2="300" y2="192"/>
      <!-- steam wand -->
      <path d="M330 96 q34 6 30 50" />
      <circle cx="360" cy="148" r="3" fill="${accent}"/>
    </g>
  </svg>`,

  /* tall column machine (vertical, imposing) */
  column: (accent='var(--brass)') => `
  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <g stroke="${accent}" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="150" y="40" width="100" height="150" rx="14"/>
      <ellipse cx="200" cy="40" rx="50" ry="12"/>
      <line x1="200" y1="20" x2="200" y2="40"/>
      <circle cx="200" cy="14" r="8"/>
      <rect x="166" y="70" width="68" height="40" rx="5" opacity=".4"/>
      <circle cx="200" cy="135" r="16"/>
      <line x1="200" y1="135" x2="210" y2="126" stroke-width="1.8"/>
      <!-- group heads at base -->
      <rect x="150" y="190" width="100" height="16" rx="4"/>
      <circle cx="178" cy="206" r="10"/>
      <circle cx="222" cy="206" r="10"/>
      <line x1="178" y1="216" x2="178" y2="228"/>
      <line x1="222" y1="216" x2="222" y2="228"/>
      <path d="M170 228 h16 l-3 10 h-10 z"/>
      <path d="M214 228 h16 l-3 10 h-10 z"/>
      <!-- side wands -->
      <path d="M150 120 q-34 10 -30 56"/>
      <path d="M250 120 q34 10 30 56"/>
      <circle cx="120" cy="178" r="3" fill="${accent}"/>
      <circle cx="280" cy="178" r="3" fill="${accent}"/>
      <!-- base -->
      <line x1="140" y1="206" x2="260" y2="206"/>
    </g>
  </svg>`,

  /* compact single lever (small, domestic) */
  compact: (accent='var(--brass)') => `
  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <g stroke="${accent}" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M150 180 q0 -90 50 -90 q50 0 50 90"/>
      <ellipse cx="200" cy="180" rx="50" ry="10"/>
      <!-- lever arm -->
      <line x1="200" y1="92" x2="280" y2="64"/>
      <circle cx="286" cy="61" r="8" fill="${accent}"/>
      <circle cx="200" cy="92" r="6"/>
      <!-- group + cup -->
      <rect x="160" y="180" width="80" height="14" rx="4"/>
      <circle cx="200" cy="194" r="9"/>
      <line x1="200" y1="203" x2="200" y2="214"/>
      <path d="M188 214 h24 l-4 12 h-16 z"/>
      <!-- base -->
      <rect x="150" y="226" width="100" height="10" rx="3"/>
      <!-- wand -->
      <path d="M250 140 q30 4 26 44"/>
      <circle cx="276" cy="184" r="3" fill="${accent}"/>
    </g>
  </svg>`,

  /* lever machine with prominent chrome lever group */
  lever: (accent='var(--brass)') => `
  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <g stroke="${accent}" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="80" y="80" width="240" height="80" rx="12"/>
      <ellipse cx="200" cy="80" rx="120" ry="14" opacity=".5"/>
      <rect x="100" y="96" width="200" height="48" rx="6" opacity=".35"/>
      <!-- big lever -->
      <line x1="200" y1="160" x2="200" y2="184"/>
      <circle cx="200" cy="160" r="14"/>
      <line x1="200" y1="160" x2="300" y2="120" stroke-width="2"/>
      <circle cx="308" cy="116" r="9" fill="${accent}"/>
      <!-- group + cup -->
      <rect x="160" y="184" width="80" height="14" rx="4"/>
      <line x1="200" y1="198" x2="200" y2="214"/>
      <path d="M186 214 h28 l-5 16 h-18 z"/>
      <!-- gauge -->
      <circle cx="120" cy="110" r="15"/>
      <line x1="120" y1="110" x2="128" y2="101" stroke-width="1.8"/>
      <!-- base + feet -->
      <rect x="70" y="160" width="260" height="16" rx="4"/>
      <line x1="110" y1="176" x2="110" y2="190"/>
      <line x1="290" y1="176" x2="290" y2="190"/>
      <!-- wand -->
      <path d="M320 110 q30 8 24 54"/>
      <circle cx="344" cy="166" r="3" fill="${accent}"/>
    </g>
  </svg>`
};

/* faint blueprint motif for the workshop panel */
const BLUEPRINT = `
<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
  <defs>
    <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
      <path d="M26 0H0V26" fill="none" stroke="var(--line-soft)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="400" height="500" fill="url(#grid)"/>
  <g stroke="var(--brass)" fill="none" stroke-width="1.2" opacity=".55" stroke-linecap="round">
    <!-- group head section -->
    <circle cx="200" cy="190" r="92"/>
    <circle cx="200" cy="190" r="64" opacity=".5"/>
    <circle cx="200" cy="190" r="30"/>
    <circle cx="200" cy="190" r="8" fill="var(--brass)"/>
    <line x1="200" y1="98" x2="200" y2="60"/>
    <line x1="200" y1="282" x2="200" y2="320"/>
    <line x1="108" y1="190" x2="60" y2="190"/>
    <line x1="292" y1="190" x2="340" y2="190"/>
    <!-- dimension ticks -->
    <line x1="60" y1="185" x2="60" y2="195"/>
    <line x1="340" y1="185" x2="340" y2="195"/>
    <!-- piston / lever schematic lower -->
    <rect x="150" y="340" width="100" height="110" rx="6"/>
    <line x1="200" y1="340" x2="200" y2="300"/>
    <circle cx="200" cy="395" r="22"/>
    <path d="M178 395 h44" stroke-dasharray="3 4"/>
    <text x="216" y="190" fill="var(--paper-faint)" font-family="Space Mono, monospace" font-size="10">Ø 58</text>
    <text x="150" y="475" fill="var(--paper-faint)" font-family="Space Mono, monospace" font-size="10" letter-spacing="1">SEZ. A–A</text>
  </g>
</svg>`;

/* --- the five case studies, copy verbatim from the brief --- */
const CASES = [
  {
    id:'faema-e61',
    name:'Faema E61',
    art:'lever',
    badges:['Legend','Lever Service','Full Restoration'],
    owner:'Caffè Roma, Turin',
    date:'March 2025',
    services:['Full restoration','Chrome replating','Boiler rebuild'],
    duration:'34 days',
    budget:'4.200 EUR',
    overview:`A 1961 Faema E61 that had been sitting in the back of a closed bar for the better part of fifteen years. This is the machine that introduced the now famous E61 group and changed how espresso was pulled, so getting it right mattered. It came in seized, scaled and dull, but the bones were all there. The goal was a full restoration that respected the original engineering while making the machine genuinely usable again behind a working counter.`,
    objective:`The owners wanted a centrepiece for their reopened bar, not a museum display. So the brief was to keep everything that made the E61 what it is while bringing it back to full working order.`
  },
  {
    id:'gaggia-tipo-america',
    name:'Gaggia Tipo America',
    art:'lever',
    badges:['Lever Restoration','Brasswork'],
    owner:'Private collector, Milan',
    date:'January 2025',
    services:['Full restoration','Brass polishing','Lever rebuild'],
    duration:'26 days',
    budget:'3.100 EUR',
    overview:`A Gaggia Tipo America from the early 1950s, one of the first lever machines to put crema into the cup on purpose rather than by accident. This one belonged to a collector who had bought it half restored by someone who clearly lost interest partway through. My job was to undo the rushed work and finish it properly, the way the machine deserved.`,
    objective:`The previous attempt had left mismatched parts and a lever that fought back every time you pulled it. The owner wanted the machine returned to a single, coherent, period correct state, with particular attention to the brasswork.`
  },
  {
    id:'la-cimbali-microcimbali',
    name:'La Cimbali Microcimbali',
    art:'compact',
    badges:['Compact Restoration','Repainting'],
    owner:'Elena Marchetti, Genoa',
    date:'November 2024',
    services:['Full restoration','Repainting','Electrical rewiring'],
    duration:'18 days',
    budget:'2.200 EUR',
    overview:`The Microcimbali, nicknamed the baby Cimbali, is a small single group lever machine from the late 1950s designed for tiny bars and homes. This one came from a family who had inherited it and wanted it working again for the kitchen of their home rather than a commercial setting. Small machine, but every bit as much work as a big one.`,
    objective:`The family did not want a perfect showpiece. They wanted the machine their grandfather had used brought back to honest working order, with its character intact. A few honourable scars were to be kept. The priority was safe, reliable, everyday use.`
  },
  {
    id:'faema-urania',
    name:'Faema Urania',
    art:'column',
    badges:['Full Restoration','Chrome'],
    owner:'Bar Centrale, Bologna',
    date:'September 2024',
    services:['Full restoration','Chrome replating','Boiler rebuild'],
    duration:'40 days',
    budget:'5.400 EUR',
    overview:`A two group Faema Urania from the 1950s, a large and imposing column machine from the era when the espresso machine was meant to dominate the bar. This was the biggest job on the bench that year. It arrived complete but tired, having spent decades in storage after the bar it served closed down. A serious restoration for a serious machine.`,
    objective:`Bar Centrale was building its identity around vintage character, and they wanted the Urania as the anchor of the whole room. That meant it had to look spectacular from across the room and hold up to full service behind the bar.`
  },
  {
    id:'la-pavoni-concorso',
    name:'La Pavoni Concorso',
    art:'compact',
    badges:['Lever Restoration','Custom Finish'],
    owner:'Tommaso Greco, Turin',
    date:'July 2024',
    services:['Full restoration','Bespoke finishing','Lever rebuild'],
    duration:'22 days',
    budget:'2.800 EUR',
    overview:`A La Pavoni Concorso from the 1970s, a single group lever machine from the period when La Pavoni leaned into bold design. The owner was after something a little different. Rather than a strict factory restoration, he wanted the machine mechanically perfect but finished in a way that made it his own, while still respecting the lines of the original design.`,
    objective:`This was the rare brief where the owner actively wanted a bespoke finish rather than period correctness. The challenge was to do that tastefully. Any custom work had to feel like it could have come from the factory.`
  }
];

/* instagram-style fragments — captions from the brief's spirit */
const IG = [
  {art:'lever',   cap:'Strip-down · day one'},
  {art:'group',   cap:'Group head, rebuilt'},
  {art:'column',  cap:'Before & after'},
  {art:'compact', cap:'It fought back'}
];
