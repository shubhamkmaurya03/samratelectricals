"""Generate Samrat Electricals logo concepts into <out>/logos/."""
import pathlib, sys

OUT = pathlib.Path(sys.argv[1]) / "logos"
OUT.mkdir(parents=True, exist_ok=True)

GRAD = '''<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE07A"/><stop offset=".55" stop-color="#F7B500"/><stop offset="1" stop-color="#E08A00"/></linearGradient>
<linearGradient id="navy" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D3B8F"/><stop offset="1" stop-color="#0A1A45"/></linearGradient>
<linearGradient id="maroon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A3203A"/><stop offset="1" stop-color="#5E0B1C"/></linearGradient>
<linearGradient id="blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0057FF"/><stop offset="1" stop-color="#00C2FF"/></linearGradient>'''

def svg(w, h, body):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}"><defs>{GRAD}</defs>{body}</svg>\n'

# ---------- reusable marks (drawn in their own coordinate boxes) ----------
def crown_bolt_mark(fill="url(#navy)"):  # 120x120 box
    return f'''<circle cx="60" cy="70" r="46" fill="{fill}"/>
<circle cx="60" cy="70" r="40" fill="none" stroke="url(#gold)" stroke-width="2.5"/>
<path d="M33 33 L28 9 L45 22 L60 3 L75 22 L92 9 L87 33 Z" fill="url(#gold)" stroke="#1a1a2e" stroke-width="2.5" stroke-linejoin="round"/>
<rect x="32" y="30" width="56" height="9" rx="3" fill="url(#gold)" stroke="#1a1a2e" stroke-width="2.5"/>
<circle cx="28" cy="9" r="4" fill="#FFE07A" stroke="#1a1a2e" stroke-width="2"/><circle cx="60" cy="3.5" r="4" fill="#FFE07A" stroke="#1a1a2e" stroke-width="2"/><circle cx="92" cy="9" r="4" fill="#FFE07A" stroke="#1a1a2e" stroke-width="2"/>
<circle cx="60" cy="34.5" r="2.5" fill="#1a1a2e"/>
<path d="M67 46 L42 79 H57 L50 104 L79 67 H63 L71 46 Z" fill="url(#gold)" stroke="#FFF3C4" stroke-width="1.5" stroke-linejoin="round"/>'''

def shield_mark():  # 120x150 box
    return '''<path d="M60 26 L106 40 V80 C106 110 86 130 60 142 C34 130 14 110 14 80 V40 Z" fill="url(#maroon)" stroke="url(#gold)" stroke-width="5" stroke-linejoin="round"/>
<path d="M60 36 L97 47 V80 C97 104 80 121 60 131 C40 121 23 104 23 80 V47 Z" fill="none" stroke="#FFE07A" stroke-opacity=".55" stroke-width="1.5"/>
<path d="M38 34 L34 10 L48 21 L60 4 L72 21 L86 10 L82 34 Z" fill="url(#gold)" stroke="#5E0B1C" stroke-width="2.5" stroke-linejoin="round"/>
<rect x="37" y="30" width="46" height="8" rx="2.5" fill="url(#gold)" stroke="#5E0B1C" stroke-width="2.5"/>
<text x="60" y="116" text-anchor="middle" font-family="Abril Fatface" font-size="70" fill="url(#gold)">S</text>
<path d="M75 66 L64 84 H71 L67 97 L80 79 H73 L78 66 Z" fill="#FFF3C4"/>'''

def square_mark():  # 160x160 box
    return '''<rect x="0" y="0" width="160" height="160" rx="40" fill="url(#blue)"/>
<rect x="6" y="6" width="148" height="148" rx="35" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.5"/>
<path d="M56 48 L51 24 L66 34 L80 18 L94 34 L109 24 L104 48 Z" fill="#FFD23F" stroke-linejoin="round"/>
<path d="M90 56 L54 104 H78 L68 142 L108 88 H84 L98 56 Z" fill="#fff" stroke-linejoin="round"/>'''

def bulb_mark(stroke="#1F2A44"):  # 160x170 box
    return f'''<circle cx="80" cy="72" r="66" fill="#FFC83D" opacity=".28"/>
<path d="M54 114 C38 102 28 88 28 72 A52 52 0 0 1 132 72 C132 88 122 102 106 114 V126 H54 Z" fill="#fff" stroke="{stroke}" stroke-width="7" stroke-linejoin="round"/>
<path d="M57 98 L50 60 L67 74 L80 50 L93 74 L110 60 L103 98 Z" fill="#FFD84D" stroke="#E89B00" stroke-width="4" stroke-linejoin="round"/>
<circle cx="80" cy="50" r="4" fill="#E89B00"/><circle cx="50" cy="60" r="4" fill="#E89B00"/><circle cx="110" cy="60" r="4" fill="#E89B00"/>
<rect x="56" y="132" width="48" height="8" rx="4" fill="{stroke}"/><rect x="60" y="145" width="40" height="8" rx="4" fill="{stroke}"/>
<path d="M70 158 H90 L86 166 H74 Z" fill="{stroke}"/>'''

def sign_mark():  # 200x200 box
    return '''<rect width="200" height="200" rx="18" fill="#FFD400"/>
<path d="M66 70 L60 38 L80 52 L100 30 L120 52 L140 38 L134 70 Z" fill="#111"/>
<path d="M112 80 L68 138 H96 L84 182 L134 116 H106 L120 80 Z" fill="#111"/>'''

# ---------- concepts ----------
def c01(dark):
    t1, t2 = ("#FFFFFF", "#FFE07A") if dark else ("#0A1A45", "#E08A00")
    return svg(640, 200, f'''<g transform="translate(14,10) scale(1.5)">{crown_bolt_mark()}</g>
<text x="214" y="112" font-family="Poppins" font-weight="800" font-size="84" fill="{t1}" textLength="404" lengthAdjust="spacingAndGlyphs">SAMRAT</text>
<rect x="216" y="130" width="402" height="4" rx="2" fill="url(#gold)"/>
<text x="216" y="174" font-family="Poppins" font-weight="600" font-size="30" fill="{t2}" textLength="402" lengthAdjust="spacing">ELECTRICALS</text>''')

def c02(dark):
    t1, t2 = ("#FFFFFF", "#FFE07A") if dark else ("#6E1023", "#C07A00")
    return svg(640, 200, f'''<g transform="translate(18,18) scale(1.15)">{shield_mark()}</g>
<text x="182" y="104" font-family="Abril Fatface" font-size="80" fill="{t1}" textLength="430" lengthAdjust="spacing">SAMRAT</text>
<rect x="184" y="124" width="180" height="2.5" fill="url(#gold)"/><rect x="432" y="124" width="180" height="2.5" fill="url(#gold)"/>
<path d="M402 112 L388 128 H396 L392 140 L408 122 H399 L404 112 Z" fill="url(#gold)"/>
<text x="184" y="172" font-family="Poppins" font-weight="600" font-size="28" fill="{t2}" textLength="428" lengthAdjust="spacing">ELECTRICALS</text>''')

def c03(dark):
    t1, t2 = ("#FFFFFF", "#4DB8FF") if dark else ("#0B1530", "#0066FF")
    return svg(640, 200, f'''<g transform="translate(14,20)">{square_mark()}</g>
<text x="200" y="108" font-family="Rajdhani" font-weight="700" font-size="100" fill="{t1}" textLength="420" lengthAdjust="spacing">SAMRAT</text>
<text x="202" y="160" font-family="Rajdhani" font-weight="700" font-size="40" fill="{t2}" textLength="418" lengthAdjust="spacing">ELECTRICALS</text>''')

def c04(dark):
    stroke = "#FFFFFF" if dark else "#1F2A44"
    t1, t2 = ("#FFFFFF", "#FFC83D") if dark else ("#1F2A44", "#E89B00")
    body = bulb_mark(stroke).replace('fill="#fff" stroke="#FFFFFF"', 'fill="#2A3655" stroke="#FFFFFF"') if dark else bulb_mark(stroke)
    return svg(546, 200, f'''<g transform="translate(8,12) scale(1.04)">{body}</g>
<text x="186" y="108" font-family="Poppins" font-weight="800" font-size="88" fill="{t1}">Samrat</text>
<text x="190" y="160" font-family="Poppins" font-weight="600" font-size="44" fill="{t2}">Electricals</text>
''')

def c05(dark):
    t1, t2, t3 = ("#FFFFFF", "#FFC83D", "#C9CFE0") if dark else ("#8E1430", "#E07A00", "#4A4A5A")
    return svg(640, 200, f'''<g transform="translate(10,14) scale(1.42)">{crown_bolt_mark("url(#maroon)")}</g>
<text x="198" y="94" font-family="Yatra One" font-size="84" fill="{t1}">सम्राट</text>
<text x="200" y="154" font-family="Yatra One" font-size="46" fill="{t2}">इलेक्ट्रिकल्स</text>
<text x="202" y="190" font-family="Poppins" font-weight="600" font-size="15" fill="{t3}" textLength="400" lengthAdjust="spacing">SAMRAT ELECTRICALS · VARANASI</text>''')

def badge():  # 400x400
    return '''<circle cx="200" cy="200" r="194" fill="url(#navy)"/>
<circle cx="200" cy="200" r="182" fill="none" stroke="url(#gold)" stroke-width="4"/>
<circle cx="200" cy="200" r="122" fill="#14307A" stroke="url(#gold)" stroke-width="3"/>
<path id="top" d="M48 200 A152 152 0 0 1 352 200" fill="none"/>
<path id="bot" d="M30 200 A170 170 0 0 0 370 200" fill="none"/>
<text font-family="Poppins" font-weight="800" font-size="30" fill="#FFFFFF" letter-spacing="3"><textPath href="#top" startOffset="50%" text-anchor="middle">SAMRAT ELECTRICALS</textPath></text>
<text font-family="Poppins" font-weight="600" font-size="17" fill="#FFE07A" letter-spacing="3"><textPath href="#bot" startOffset="50%" text-anchor="middle">GOPALPUR · KORAUTA · VARANASI</textPath></text>
<path d="M33 200 l5 -4 l5 4 l-5 4 Z M357 200 l5 -4 l5 4 l-5 4 Z" fill="#FFE07A"/>
<path d="M234 180 A54 54 0 1 1 166 180" fill="none" stroke="url(#gold)" stroke-width="14" stroke-linecap="round"/>
<path d="M208 150 L184 196 H200 L192 236 L220 184 H204 L214 150 Z" fill="#FFFFFF"/>
<path d="M172 136 L167 108 L184 120 L200 100 L216 120 L233 108 L228 136 Z" fill="url(#gold)" stroke-linejoin="round"/>
<rect x="171" y="132" width="58" height="7" rx="2" fill="url(#gold)"/>'''

def c06(dark):
    return svg(400, 400, badge())

def c07(dark):
    return svg(640, 200, f'''<rect width="640" height="200" rx="18" fill="#111111"/>
<g>{sign_mark()}</g>
<text x="226" y="118" font-family="Bebas Neue" font-size="122" fill="#FFD400" textLength="390" lengthAdjust="spacing">SAMRAT</text>
<text x="228" y="168" font-family="Poppins" font-weight="600" font-size="30" fill="#FFFFFF" textLength="388" lengthAdjust="spacing">ELECTRICALS</text>
<g fill="#FFD400">{"".join(f'<path d="M{226+i*26} 186 h14 l-8 8 h-14 Z"/>' for i in range(15))}</g>''')

CONCEPTS = [
    ("01-royal-emblem", "Royal Emblem", "Navy & gold · Poppins", "Gold crown on a navy medallion with a lightning bolt — 'Samrat' means emperor. Premium, trustworthy, matches the current website.", c01, lambda: svg(120, 120, crown_bolt_mark())),
    ("02-heritage-shield", "Heritage Shield", "Maroon & gold · Abril Fatface", "Classic crest with a serif 'S' monogram. Feels established and royal — great for a signboard and bills.", c02, lambda: svg(120, 150, shield_mark())),
    ("03-modern-bolt", "Modern Bolt", "Electric blue · Rajdhani", "App-style rounded square with crown + bolt. Clean, techy and modern — works well as a WhatsApp/Instagram profile picture.", c03, lambda: svg(160, 160, square_mark())),
    ("04-bright-bulb", "Bright Bulb", "Charcoal & amber · Poppins", "A light bulb whose glowing filament is a crown. Friendly and approachable, says 'lighting & electricals' instantly.", c04, lambda: svg(160, 170, bulb_mark())),
    ("05-hindi-desi", "Hindi Wordmark", "Maroon & saffron · Yatra One", "सम्राट इलेक्ट्रिकल्स in bold Devanagari for strong local recognition, with the English name underneath.", c05, lambda: svg(120, 120, crown_bolt_mark("url(#maroon)"))),
    ("06-power-seal", "Power Seal", "Navy & gold badge", "Round seal with the shop name and address around a power-button + bolt. Ideal for stamps, stickers, bags and profile pictures.", c06, lambda: svg(400, 400, badge())),
    ("07-bold-signboard", "Bold Signboard", "Black & yellow · Bebas Neue", "High-contrast hoarding style — readable from far away on the shop board and the most 'electrical shop' feel.", c07, lambda: svg(200, 200, sign_mark())),
]

DARK_BG = {"06-power-seal": "#0A1A45", "07-bold-signboard": "#111111"}

for slug, *_rest in CONCEPTS:
    title, sub, desc, logo, icon = _rest
    d = OUT / slug
    d.mkdir(exist_ok=True)
    (d / "logo.svg").write_text(logo(False))
    if slug not in ("06-power-seal", "07-bold-signboard"):
        (d / "logo-dark.svg").write_text(logo(True))
    (d / "icon.svg").write_text(icon())

# comparison page
cards = []
for slug, title, sub, desc, logo, icon in CONCEPTS:
    has_dark = (OUT / slug / "logo-dark.svg").exists()
    cards.append(f'''<article class="card">
  <header><span class="num">{slug[:2]}</span><div><h2>{title}</h2><p class="sub">{sub}</p></div></header>
  <div class="panes">
    <div class="pane light"><img src="{slug}/logo.svg" alt="{title} logo"></div>
    <div class="pane dark"><img src="{slug}/{'logo-dark.svg' if has_dark else 'logo.svg'}" alt="{title} logo on dark"></div>
  </div>
  <div class="foot"><img class="icon" src="{slug}/icon.svg" alt="{title} icon"><img class="icon round" src="{slug}/icon.svg" alt=""><p>{desc}</p></div>
</article>''')

(OUT / "index.html").write_text(f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Logo Concepts — Samrat Electricals</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Abril+Fatface&family=Rajdhani:wght@700&family=Yatra+One&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box}} body{{margin:0;font-family:Poppins,system-ui,sans-serif;background:#f3f5fa;color:#16203a}}
.wrap{{max-width:1360px;margin:0 auto;padding:40px 24px 60px}}
h1{{margin:0 0 4px;font-size:34px;font-weight:800}} .lead{{margin:0 0 32px;color:#5b6785}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(600px,1fr));gap:24px}}
.card{{background:#fff;border:1px solid #e3e8f3;border-radius:18px;padding:22px;box-shadow:0 10px 30px -18px rgba(10,26,69,.3)}}
.card header{{display:flex;gap:14px;align-items:center;margin-bottom:16px}}
.num{{width:42px;height:42px;border-radius:12px;background:#0a1a45;color:#ffe07a;display:grid;place-items:center;font-weight:800}}
h2{{margin:0;font-size:20px}} .sub{{margin:0;color:#5b6785;font-size:13px}}
.panes{{display:grid;grid-template-columns:1fr 1fr;gap:12px}}
.pane{{border-radius:12px;display:grid;place-items:center;padding:18px;aspect-ratio:16/9}}
.pane img{{max-width:100%;max-height:100%}} .light{{background:#fff;border:1px solid #e3e8f3}} .dark{{background:#0d1530}}
.foot{{display:flex;gap:12px;align-items:center;margin-top:14px}} .foot p{{margin:0;font-size:14px;color:#5b6785}}
.icon{{width:56px;height:56px;object-fit:contain;flex:none;background:#f3f5fa;border-radius:12px;padding:4px}} .round{{border-radius:50%}}
@media(max-width:680px){{.grid{{grid-template-columns:1fr}}.panes{{grid-template-columns:1fr}}}}
</style></head><body><div class="wrap">
<h1>Samrat Electricals — Logo Concepts</h1>
<p class="lead">7 directions shown on light and dark backgrounds, with the square icon for WhatsApp / social profiles. Pick one (or mix ideas) and it will be applied to the website.</p>
<div class="grid">
{"".join(cards)}
</div></div></body></html>
''')
print("generated", len(CONCEPTS), "concepts in", OUT)
