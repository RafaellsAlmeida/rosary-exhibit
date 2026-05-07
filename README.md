# Rosary Exhibit

**The Rosary: A Path Through the Life of Christ** is a static digital exhibition about the Holy Rosary: its Gospel mysteries, Marian roots, spiritual fruits, historical witnesses, and testimonies of grace.

The main experience is a scrollable Rosary path. Visitors begin with the Apostles' Creed and the opening prayers, then move through 50 bead stops with Scripture, devotional context, and imagery from the mystery slide decks, sacred art, and witness portraits.

The bead strand uses a lightweight Three.js progressive enhancement for physical 3D beads. If WebGL or the CDN is unavailable, the accessible HTML bead buttons remain visible and clickable.

## What Is Included

- `index.html` contains the full single-page exhibit structure.
- `history.html` and `saints.html` provide focused paths for visitors who want the chronology or witness material without scanning the whole exhibit.
- `variation-immersive.html` contains the slower immersive Rosary path.
- `styles.css` defines the dark blue, gold, and paper-toned visual system.
- `app.js` renders the chronology, mysteries, daily Rosary, sources, and 50-bead scroll experience.
- `beads-3d.js` renders the physical bead strand in Three.js and syncs it to the active scroll step.
- `assets/` contains local exhibit imagery, including extracted PPTX images and witness portraits.
- `downloads/` contains original PPTX files, the research report, and local-only PDF/ZIP exports.

## Main Sections

- Rosary Path: the primary 50-bead scroll experience.
- What Is the Rosary?
- How to Pray
- Chronology
- Mysteries
- Downloadable Slide Decks
- Mary and the Rosary
- Saints and Witnesses
- Testimonies and Miracles
- Science and Well-Being
- Daily Rosary
- Submit a Testimony
- Sources

## Downloadables

The site includes these files for visitors:

- Joyful Mysteries PPTX
- Luminous Mysteries PPTX
- Sorrowful Mysteries PPTX
- Glorious Mysteries PPTX
- Deep research report
- Runtime-generated mysteries JSON from the Sources section

Large PDF exports and the combined ZIP pack are kept locally but excluded from
the public Git/Vercel deployment to keep the first published version light.

## Local Preview

From this folder:

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

The site is static, so it can also be opened directly from `index.html`.

## Deploying

This project is ready for Vercel as a static site.

```bash
vercel --prod
```

No build step is required.

## Editorial Standard

The site avoids sensational miracle language. Accounts are framed by source strength: official Church teaching, approved shrine tradition, documented historical event, shrine-documented testimony, biographical witness, or popular devotional account.

Core design direction: devotional, spacious, dark-blue and gold, image-rich, sourced, and intellectually careful.
