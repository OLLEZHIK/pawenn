// Home hero, desktop only (owner, 2026-09-26): an owner petting a happy
// dog, looping. Pure SVG + CSS (classes pet-* in design-tokens.css), no
// JS, decorative - hidden from screen readers. Mobile shows nothing here.
export function HeroIllustration() {
  return (
    <div className="hidden lg:block">
      <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false" className="mx-auto block w-full max-w-[420px]">
        <circle cx="200" cy="196" r="168" fill="var(--brand-orange-muted)" />
        <ellipse cx="208" cy="350" rx="150" ry="11" fill="var(--ink)" opacity="0.08" />

        {/* owner */}
        <g className="pet-anim pet-breathe" style={{ transformOrigin: "140px 345px" }}>
          <path d="M114 166 C104 196 102 222 106 246" stroke="#0A3F6E" strokeWidth="17" strokeLinecap="round" fill="none" />
          <circle cx="107" cy="250" r="9" fill="#EDBB98" />
          <rect x="115" y="250" width="22" height="94" rx="10" fill="var(--ink)" />
          <rect x="143" y="250" width="22" height="94" rx="10" fill="#132F52" />
          <path d="M110 346 C110 338 118 336 126 336 L136 336 C140 336 142 339 142 343 L142 348 L110 348 Z" fill="#1C2433" />
          <path d="M140 346 C140 338 148 336 156 336 L166 336 C170 336 172 339 172 343 L172 348 L140 348 Z" fill="#1C2433" />
          <path
            d="M104 178 C104 158 118 146 140 146 C162 146 176 158 176 178 L173 262 C173 268 169 272 163 272 L117 272 C111 272 107 268 107 262 Z"
            fill="var(--brand-blue)"
          />
          <rect x="132" y="128" width="17" height="22" rx="7" fill="#EDBB98" />
          <circle cx="141" cy="106" r="31" fill="#F3C9A8" />
          <circle cx="116" cy="110" r="6.5" fill="#EDBB98" />
          <path
            d="M108 110 C104 80 124 68 145 71 C165 73 176 88 173 103 C163 94 151 90 138 92 C127 94 121 100 120 112 C116 116 110 116 108 110 Z"
            fill="#3A2A24"
          />
          <path d="M142 107 q4.5 -5 9 0 M157 106 q4.5 -5 9 0" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M149 119 Q157 129 167 118" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <circle cx="168" cy="113" r="5" fill="var(--brand-orange)" opacity="0.28" />
        </g>

        {/* petting arm */}
        <g className="pet-anim pet-pat" style={{ transformOrigin: "164px 164px" }}>
          <path d="M164 164 C184 170 202 180 216 194" stroke="var(--brand-blue)" strokeWidth="18" strokeLinecap="round" fill="none" />
          <ellipse cx="222" cy="197" rx="12" ry="9.5" fill="#F3C9A8" transform="rotate(25 222 197)" />
        </g>

        {/* dog */}
        <g className="pet-anim pet-wag" style={{ transformOrigin: "312px 302px" }}>
          <path d="M312 302 C334 296 346 278 342 256" stroke="#FF8A50" strokeWidth="13" strokeLinecap="round" fill="none" />
        </g>
        <ellipse cx="298" cy="318" rx="37" ry="31" fill="#FF8A50" />
        <path
          d="M236 252 C236 232 256 222 272 226 C298 232 314 264 312 300 C310 330 296 348 270 348 L246 348 C236 348 230 340 232 328 Z"
          fill="#FF8A50"
        />
        <path d="M241 262 C247 250 262 252 264 268 C266 290 258 314 249 318 C241 310 237 280 241 262 Z" fill="#FFFFFF" />
        <rect x="238" y="294" width="16" height="54" rx="8" fill="#FF8A50" />
        <rect x="258" y="294" width="16" height="54" rx="8" fill="#F47A3E" />
        <ellipse cx="244" cy="347" rx="11" ry="5.5" fill="#FFFFFF" />
        <ellipse cx="267" cy="347" rx="11" ry="5.5" fill="#FFFFFF" />
        <ellipse cx="310" cy="347" rx="14" ry="5.5" fill="#FFFFFF" />
        <g className="pet-anim pet-tilt" style={{ transformOrigin: "258px 244px" }}>
          <path d="M234 236 Q252 248 272 238" stroke="var(--brand-blue)" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="253" cy="247" r="4.5" fill="#FFC24B" />
          <circle cx="240" cy="206" r="35" fill="#FF8A50" />
          <path d="M256 178 C276 172 288 194 284 220 C282 232 270 236 265 225 C260 212 255 196 256 178 Z" fill="#D9531E" />
          <ellipse cx="214" cy="221" rx="22" ry="15.5" fill="#FFFFFF" />
          <ellipse cx="195" cy="213" rx="7.5" ry="6" fill="var(--ink)" />
          <path d="M206 229 Q208 244 216 244 Q223 243 221 229 Z" fill="#F2677A" />
          <path d="M199 225 Q209 233 225 227" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M226 196 q5.5 -6.5 11 0" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>

        {/* hearts */}
        <g className="pet-anim pet-heart" style={{ transformOrigin: "198px 150px" }}>
          <path
            d="M190 150 C190 144 198 143 198 149 C198 143 206 144 206 150 C206 156 198 160 198 163 C198 160 190 156 190 150 Z"
            fill="var(--brand-orange)"
          />
        </g>
        <g className="pet-anim pet-heart" style={{ transformOrigin: "222px 138px", animationDelay: "-1.8s" }}>
          <path
            d="M216 138 C216 133.5 222 132.5 222 137 C222 132.5 228 133.5 228 138 C228 142.5 222 145.5 222 148 C222 145.5 216 142.5 216 138 Z"
            fill="var(--brand-orange)"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  );
}
