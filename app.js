const imageLibrary = {
  opening: [
    "./assets/hero-rosary.png",
    "./assets/papal-study.png",
    "./assets/witnesses/fatima.jpg",
    "./assets/witnesses/coronation.jpg",
  ],
  joyful: [
    "./assets/pptx/joyful/image-3-2.jpeg",
    "./assets/pptx/joyful/image-4-1.jpeg",
    "./assets/pptx/joyful/image-5-2.jpeg",
    "./assets/pptx/joyful/image-6-1.jpeg",
    "./assets/pptx/joyful/image-7-2.jpeg",
    "./assets/pptx/joyful/image-8-1.jpeg",
    "./assets/pptx/joyful/image-9-2.jpeg",
    "./assets/pptx/joyful/image-10-1.jpeg",
    "./assets/pptx/joyful/image-11-2.jpeg",
    "./assets/pptx/joyful/image-12-3.jpeg",
  ],
  luminous: [
    "./assets/pptx/luminous/image-3-2.jpeg",
    "./assets/pptx/luminous/image-4-1.jpeg",
    "./assets/pptx/luminous/image-5-2.jpeg",
    "./assets/pptx/luminous/image-6-1.jpeg",
    "./assets/pptx/luminous/image-7-2.jpeg",
    "./assets/pptx/luminous/image-8-1.jpeg",
    "./assets/pptx/luminous/image-9-2.jpeg",
    "./assets/pptx/luminous/image-11-1.jpeg",
    "./assets/pptx/luminous/image-13-2.jpeg",
    "./assets/pptx/luminous/image-14-1.jpeg",
  ],
  sorrowful: [
    "./assets/pptx/sorrowful/image-3-2.jpeg",
    "./assets/pptx/sorrowful/image-4-1.jpeg",
    "./assets/pptx/sorrowful/image-5-2.jpeg",
    "./assets/pptx/sorrowful/image-6-1.jpeg",
    "./assets/pptx/sorrowful/image-7-2.jpeg",
    "./assets/pptx/sorrowful/image-8-1.jpeg",
    "./assets/pptx/sorrowful/image-9-2.jpeg",
    "./assets/pptx/sorrowful/image-10-1.jpeg",
    "./assets/pptx/sorrowful/image-11-2.jpeg",
    "./assets/pptx/sorrowful/image-13-2.jpeg",
  ],
  glorious: [
    "./assets/pptx/glorious/image-3-2.jpeg",
    "./assets/pptx/glorious/image-4-1.jpeg",
    "./assets/pptx/glorious/image-5-2.jpeg",
    "./assets/pptx/glorious/image-6-1.jpeg",
    "./assets/pptx/glorious/image-7-2.jpeg",
    "./assets/pptx/glorious/image-8-1.jpeg",
    "./assets/pptx/glorious/image-9-2.jpeg",
    "./assets/pptx/glorious/image-10-1.jpeg",
    "./assets/pptx/glorious/image-11-3.jpeg",
    "./assets/pptx/glorious/image-12-1.jpeg",
  ],
  witness: [
    "./assets/witnesses/saint-dominic.jpg",
    "./assets/witnesses/pius-v.jpg",
    "./assets/witnesses/pius-v.jpg",
    "./assets/witnesses/bernadette-soubirous.jpg",
    "./assets/witnesses/fatima.jpg",
    "./assets/witnesses/bartolo-longo.jpg",
    "./assets/witnesses/kibeho.jpg",
    "./assets/witnesses/louis-de-montfort.jpg",
    "./assets/witnesses/leo-xiii.jpg",
    "./assets/witnesses/john-paul-ii.jpg",
  ],
};

const downloadLinks = {
  "Joyful Mysteries": "./downloads/joyful-mysteries-slides.pptx",
  "Luminous Mysteries": "./downloads/luminous-mysteries-slides.pptx",
  "Sorrowful Mysteries": "./downloads/sorrowful-mysteries-slides.pptx",
  "Glorious Mysteries": "./downloads/glorious-mysteries-slides.pptx",
};

const openingBeads = [
  {
    type: "opening",
    marker: "Cross",
    title: "The Apostles' Creed",
    scripture: "I believe in God, the Father almighty...",
    body:
      "The Rosary begins inside the faith of the Church. The Creed is not decoration; it is the doorway into Christian memory.",
    image: imageLibrary.opening[0],
    alt: "Rosary beads and sacred paper arranged on dark blue fabric",
    action: { label: "See the prayer guide", href: "#how-to-pray" },
  },
  {
    type: "opening",
    marker: "Our Father",
    title: "The Our Father",
    scripture: "Our Father, who art in heaven...",
    body:
      "Jesus gave this prayer to the Church. In the Rosary it becomes the threshold of each decade, returning every mystery to the Father.",
    image: imageLibrary.opening[1],
    alt: "Candlelit papal desk with rosary beads and devotional objects",
    action: { label: "Why the prayer matters", href: "#what-is-rosary" },
  },
  {
    type: "opening",
    marker: "3 Hail Marys",
    title: "Faith, Hope, and Charity",
    scripture: "Hail Mary, full of grace...",
    body:
      "The opening Hail Marys are traditionally prayed for an increase in faith, hope, and charity before entering the mysteries.",
    image: imageLibrary.opening[2],
    alt: "The three children of Fatima in a historical photograph",
    action: { label: "Mary's requests", href: "#marys-requests" },
  },
  {
    type: "opening",
    marker: "Glory Be",
    title: "Praise of the Trinity",
    scripture: "Glory be to the Father, and to the Son, and to the Holy Spirit.",
    body:
      "The Rosary is Marian in companionship and Trinitarian in worship. Its rhythm keeps returning the soul to praise.",
    image: imageLibrary.opening[3],
    alt: "Sacred art of the Coronation of Mary",
    action: { label: "Enter the mysteries", href: "#mysteries" },
  },
];

const rosaryBeads = [
  {
    decade: "joyful",
    title: "The Annunciation",
    scripture: "Luke 1:28",
    body: "Mary receives the angel's greeting and listens before she understands everything. The fruit is humility.",
    image: imageLibrary.joyful[0],
    alt: "Annunciation scene from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "Mary's Fiat",
    scripture: "Luke 1:38",
    body: "The yes of Mary changed history because it was total. The Rosary teaches consent before control.",
    image: imageLibrary.joyful[1],
    alt: "Marian reflection image from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "The Visitation",
    scripture: "Luke 1:42",
    body: "Mary goes in haste to Elizabeth. Grace does not make her passive; it makes her charitable.",
    image: imageLibrary.joyful[2],
    alt: "Visitation scene from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "The Magnificat",
    scripture: "Luke 1:46-47",
    body: "The prayer of Mary turns service into praise. A hidden visit becomes a public hymn of mercy.",
    image: imageLibrary.joyful[3],
    alt: "Joyful Mysteries devotional image of Mary and Elizabeth",
  },
  {
    decade: "joyful",
    title: "The Nativity",
    scripture: "Luke 2:14",
    body: "God chooses Bethlehem, poverty, and simplicity. The King enters without spectacle.",
    image: imageLibrary.joyful[4],
    alt: "Nativity scene from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "Bethlehem's Poverty",
    scripture: "Luke 2:7",
    body: "The manger asks whether the heart can become simple enough to receive God.",
    image: imageLibrary.joyful[5],
    alt: "Bethlehem reflection image from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "The Presentation",
    scripture: "Luke 2:30-31",
    body: "Mary and Joseph bring Jesus to the Temple. Obedience gives the ordinary day sacred weight.",
    image: imageLibrary.joyful[6],
    alt: "Presentation scene from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "Simeon's Light",
    scripture: "Luke 2:32",
    body: "Simeon recognizes salvation in a child. The Rosary trains the eye to notice quiet revelation.",
    image: imageLibrary.joyful[7],
    alt: "Simeon reflection image from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "The Finding in the Temple",
    scripture: "Luke 2:49",
    body: "Mary and Joseph search with sorrow and find Jesus in the Temple. Distance is answered by seeking.",
    image: imageLibrary.joyful[8],
    alt: "Finding of Jesus in the Temple from the Joyful Mysteries slide deck",
  },
  {
    decade: "joyful",
    title: "The Father's House",
    scripture: "Luke 2:51",
    body: "Jesus returns to Nazareth in hidden obedience. Holiness can be quiet and still be complete.",
    image: imageLibrary.joyful[9],
    alt: "Holy Family devotional art from the Joyful Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "The Baptism of Jesus",
    scripture: "Matthew 3:17",
    body: "The heavens open, the Spirit descends, and the Father names the beloved Son. The fruit is fidelity to baptism.",
    image: imageLibrary.luminous[0],
    alt: "Baptism of Jesus from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "Beloved Son",
    scripture: "Matthew 3:16-17",
    body: "The mystery reveals the Trinity and the humility of Christ standing with sinners in the Jordan.",
    image: imageLibrary.luminous[1],
    alt: "Jordan baptism reflection image from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "The Wedding at Cana",
    scripture: "John 2:5",
    body: "Mary notices the need and points to obedience: Do whatever He tells you.",
    image: imageLibrary.luminous[2],
    alt: "Wedding at Cana from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "Ordinary Water, New Wine",
    scripture: "John 2:11",
    body: "Cana shows the ordinary transformed by Christ. Mary intercedes without taking the center.",
    image: imageLibrary.luminous[3],
    alt: "Cana reflection image from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "The Kingdom Proclaimed",
    scripture: "Matthew 4:17",
    body: "Jesus announces conversion and the nearness of the Kingdom. The Rosary is not sentimental; it is a call to change.",
    image: imageLibrary.luminous[4],
    alt: "Proclamation of the Kingdom from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "Metanoia",
    scripture: "Mark 1:15",
    body: "Conversion is a reorientation of the whole person. The bead becomes a small act of return.",
    image: imageLibrary.luminous[5],
    alt: "Conversion reflection image from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "The Transfiguration",
    scripture: "Matthew 17:2",
    body: "Christ reveals glory before the Cross. The fruit is desire for holiness when suffering obscures the end.",
    image: imageLibrary.luminous[6],
    alt: "Transfiguration from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "Tabor Before Calvary",
    scripture: "Matthew 17:5",
    body: "The Father's voice confirms the Son. The mystery strengthens the apostles before scandal and fear.",
    image: imageLibrary.luminous[7],
    alt: "Tabor reflection image from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "The Eucharist Instituted",
    scripture: "Luke 22:19",
    body: "Jesus gives Himself as food for the life of the world. The fruit is love of the Eucharist.",
    image: imageLibrary.luminous[8],
    alt: "Institution of the Eucharist from the Luminous Mysteries slide deck",
  },
  {
    decade: "luminous",
    title: "Real Presence",
    scripture: "1 Corinthians 11:24",
    body: "The Rosary leads to the altar because contemplation of Christ matures into love for His self-gift.",
    image: imageLibrary.luminous[9],
    alt: "Eucharistic reflection image from the Luminous Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Agony in the Garden",
    scripture: "Luke 22:42",
    body: "Jesus surrenders in Gethsemane: not My will, but Yours be done. The fruit is contrition and trust.",
    image: imageLibrary.sorrowful[0],
    alt: "Agony in the Garden from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Gethsemane",
    scripture: "Luke 22:44",
    body: "The prayer of Jesus does not avoid anguish. It brings anguish into obedience.",
    image: imageLibrary.sorrowful[1],
    alt: "Gethsemane reflection image from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "The Scourging",
    scripture: "Isaiah 53:5",
    body: "By His wounds we are healed. The body of Christ suffers under human violence and remains love.",
    image: imageLibrary.sorrowful[2],
    alt: "Scourging at the Pillar from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Wounds and Mercy",
    scripture: "1 Peter 2:24",
    body: "The mystery asks for purity, discipline, and compassion for every wounded body.",
    image: imageLibrary.sorrowful[3],
    alt: "Scourging reflection image from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Crowning with Thorns",
    scripture: "Matthew 27:29",
    body: "Christ is mocked as king. Moral courage begins when admiration is no longer the prize.",
    image: imageLibrary.sorrowful[4],
    alt: "Crowning with Thorns from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Dignity Restored",
    scripture: "John 19:5",
    body: "The humiliated Christ restores the dignity of the humiliated. The Rosary teaches courage without contempt.",
    image: imageLibrary.sorrowful[5],
    alt: "Crowning with Thorns reflection image from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Carrying the Cross",
    scripture: "Matthew 16:24",
    body: "Jesus carries the Cross to Calvary. The fruit is patience in tribulation.",
    image: imageLibrary.sorrowful[6],
    alt: "Carrying of the Cross from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "Simon Helps Carry",
    scripture: "Luke 23:26",
    body: "Even Christ receives human assistance on the road. Some crosses are carried together.",
    image: imageLibrary.sorrowful[7],
    alt: "Cross-bearing reflection image from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "The Crucifixion",
    scripture: "Luke 23:46",
    body: "Jesus gives His life and entrusts Himself to the Father. The fruit is final perseverance.",
    image: imageLibrary.sorrowful[8],
    alt: "Crucifixion from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "sorrowful",
    title: "The Throne of Love",
    scripture: "John 19:30",
    body: "The Cross is not failure. It is the place where mercy speaks its final word.",
    image: imageLibrary.sorrowful[9],
    alt: "Crucifixion reflection image from the Sorrowful Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "The Resurrection",
    scripture: "Matthew 28:6",
    body: "Jesus rises from the dead. Sin and death do not have the final word.",
    image: imageLibrary.glorious[0],
    alt: "Resurrection scene from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Faith After the Tomb",
    scripture: "John 20:29",
    body: "The empty tomb asks for faith that can live after grief and confusion.",
    image: imageLibrary.glorious[1],
    alt: "Resurrection reflection image from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "The Ascension",
    scripture: "Acts 1:9",
    body: "Christ ascends to the Father. The fruit is hope and eternal perspective.",
    image: imageLibrary.glorious[2],
    alt: "Ascension scene from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Hope Raised Up",
    scripture: "John 14:2",
    body: "The Ascension keeps Christian life from shrinking into the present moment only.",
    image: imageLibrary.glorious[3],
    alt: "Ascension reflection image from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Pentecost",
    scripture: "Acts 2:4",
    body: "The Holy Spirit descends upon Mary and the apostles. The Church receives fire for mission.",
    image: imageLibrary.glorious[4],
    alt: "Pentecost scene from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Gifts of the Spirit",
    scripture: "Acts 1:8",
    body: "The fruit is not noise but courage, wisdom, love, zeal, and renewal.",
    image: imageLibrary.glorious[5],
    alt: "Pentecost reflection image from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "The Assumption",
    scripture: "Revelation 12:1",
    body: "Mary is taken body and soul into heaven. The mystery turns the heart toward its final home.",
    image: imageLibrary.glorious[6],
    alt: "Assumption scene from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Through Mary to Jesus",
    scripture: "Luke 1:48",
    body: "Marian devotion is not a detour. It is a maternal path into the life of Christ.",
    image: imageLibrary.glorious[7],
    alt: "Assumption reflection image from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "The Coronation",
    scripture: "Revelation 12:1",
    body: "Mary is crowned Queen of Heaven and Earth. The fruit is final perseverance.",
    image: imageLibrary.glorious[8],
    alt: "Coronation scene from the Glorious Mysteries slide deck",
  },
  {
    decade: "glorious",
    title: "Final Perseverance",
    scripture: "2 Timothy 4:7",
    body: "The last bead asks for fidelity until the end: not a mood, but a life completed in grace.",
    image: imageLibrary.glorious[9],
    alt: "Coronation reflection image from the Glorious Mysteries slide deck",
  },
  {
    decade: "witness",
    title: "Saint Dominic",
    scripture: "Dominican tradition",
    body: "The Rosary became linked with preaching, contemplation, and teaching the Gospel to ordinary people.",
    image: imageLibrary.witness[0],
    alt: "Portrait of Saint Dominic",
  },
  {
    decade: "witness",
    title: "Pope Pius V",
    scripture: "1569",
    body: "Pius V gave the traditional form of the Rosary clearer public shape in the Church's life.",
    image: imageLibrary.witness[1],
    alt: "Portrait of Pope Pius V",
  },
  {
    decade: "witness",
    title: "Lepanto",
    scripture: "1571",
    body: "Catholic memory tied the naval victory to Rosary prayer and gratitude to Our Lady. The emphasis here is dependence, not triumphalism.",
    image: imageLibrary.witness[2],
    alt: "Portrait of Pope Pius V used for the Lepanto memory",
  },
  {
    decade: "witness",
    title: "Saint Bernadette",
    scripture: "Lourdes, 1858",
    body: "At Lourdes, Bernadette prayed the Rosary before the Grotto. Presence mattered as much as explanation.",
    image: imageLibrary.witness[3],
    alt: "Portrait of Saint Bernadette Soubirous",
  },
  {
    decade: "witness",
    title: "Fatima",
    scripture: "1917",
    body: "Our Lady asked the children of Fatima to pray the Rosary every day for peace, conversion, and repentance.",
    image: imageLibrary.witness[4],
    alt: "Historical photograph of the children of Fatima",
  },
  {
    decade: "witness",
    title: "Blessed Bartolo Longo",
    scripture: "Pompeii",
    body: "Bartolo Longo's conversion shows a different kind of miracle: a life rescued and given back as mission.",
    image: imageLibrary.witness[5],
    alt: "Portrait of Blessed Bartolo Longo",
  },
  {
    decade: "witness",
    title: "Kibeho",
    scripture: "Rwanda, 1981-1989",
    body: "The Kibeho message emphasized repentance, suffering, and prayer. Marian devotion is serious before it is decorative.",
    image: imageLibrary.witness[6],
    alt: "Statue of Our Lady of Kibeho",
  },
  {
    decade: "witness",
    title: "Saint Louis de Montfort",
    scripture: "The Secret of the Rosary",
    body: "De Montfort presented the Rosary as conversion, perseverance, and union with Jesus through Mary.",
    image: imageLibrary.witness[7],
    alt: "Portrait of Saint Louis de Montfort",
  },
  {
    decade: "witness",
    title: "Pope Leo XIII",
    scripture: "Rosary encyclicals",
    body: "Leo XIII made the Rosary a papal language for social crisis, family, peace, and public devotion.",
    image: imageLibrary.witness[8],
    alt: "Portrait of Pope Leo XIII",
  },
  {
    decade: "witness",
    title: "Saint John Paul II",
    scripture: "Rosarium Virginis Mariae, 2002",
    body: "John Paul II called the Rosary a way of contemplating Christ with Mary and gave the Church the Luminous Mysteries.",
    image: imageLibrary.witness[9],
    alt: "Photograph of Saint John Paul II",
  },
];

const chronology = [
  {
    year: "3rd c.",
    era: "Early roots",
    title: "Counted prayer enters Christian practice",
    summary:
      "Counted prayer among early Christians prepared the way for later bead-based devotion. The Rosary was not fixed yet, but the habit of measuring prayer with the body was already alive.",
  },
  {
    year: "13th c.",
    era: "Dominican tradition",
    title: "The devotion gathers around preaching",
    summary:
      "Catholic tradition associates the Rosary with Saint Dominic and the Dominican family. The historical record is gradual, but the Dominican story gave the devotion a preaching-shaped public form.",
    image: "./assets/witnesses/saint-dominic.jpg",
    alt: "Portrait of Saint Dominic",
  },
  {
    year: "15th c.",
    era: "Psalter of Mary",
    title: "The prayer reaches a settled form",
    summary:
      "The devotion became recognizable as a set of repeated Hail Marys grouped around sacred mysteries, echoing the 150 Psalms in a prayer ordinary Catholics could carry.",
  },
  {
    year: "1569",
    era: "Pius V",
    title: "Rome gives the prayer clearer shape",
    summary:
      "Pope Pius V described the traditional form of the Rosary, giving the devotion a clearer public frame within the Church's life.",
    image: "./assets/witnesses/pius-v.jpg",
    alt: "Portrait of Pope Pius V",
  },
  {
    year: "1571-1573",
    era: "Lepanto and feast",
    title: "A battle remembered through prayer",
    summary:
      "The Battle of Lepanto became tied to Catholic memory of Rosary prayer and gratitude. The feast of Our Lady of the Rosary grew from this devotional remembrance.",
  },
  {
    year: "1858",
    era: "Lourdes",
    title: "The Rosary at the Grotto",
    summary:
      "Saint Bernadette prayed the Rosary at Lourdes. The shrine became a place where prayer, pilgrimage, illness, and careful discernment meet.",
    image: "./assets/witnesses/bernadette-soubirous.jpg",
    alt: "Portrait of Saint Bernadette Soubirous",
  },
  {
    year: "1917",
    era: "Fatima",
    title: "Pray the Rosary every day",
    summary:
      "At Fatima, Our Lady asked for conversion, repentance, sacrifice, peace, and the daily Rosary.",
    image: "./assets/witnesses/fatima.jpg",
    alt: "Historical photograph of the children of Fatima",
  },
  {
    year: "2002",
    era: "Year of the Rosary",
    title: "John Paul II gives the Luminous Mysteries",
    summary:
      "John Paul II described the Rosary as contemplating Christ with Mary and added the Luminous Mysteries, widening the prayer's meditation on Christ's public ministry.",
    image: "./assets/witnesses/john-paul-ii.jpg",
    alt: "Photograph of Saint John Paul II",
  },
];

const mysterySets = [
  {
    key: "Joyful Mysteries",
    days: "Usually prayed on Mondays and Saturdays",
    className: "joyful",
    mysteries: [
      {
        title: "The Annunciation",
        fruit: "Humility",
        meditation:
          "Mary receives the message of the angel Gabriel. She does not understand everything, but she gives herself completely to God.",
        ask: "Lord, teach me to say yes before I understand everything.",
        intention: "For openness to God's call.",
      },
      {
        title: "The Visitation",
        fruit: "Love of neighbor",
        meditation:
          "Mary goes in haste to serve Elizabeth. Grace does not make her passive. It makes her charitable.",
        ask: "Lord, make my faith practical.",
        intention: "For charity in family and daily duties.",
      },
      {
        title: "The Nativity",
        fruit: "Poverty of spirit",
        meditation:
          "Jesus is born in humility. The King of the universe enters the world in poverty.",
        ask: "Lord, free me from pride, vanity, and attachment.",
        intention: "For detachment from worldly approval.",
      },
      {
        title: "The Presentation",
        fruit: "Obedience",
        meditation:
          "Mary and Joseph present Jesus in the Temple. They obey the law of God with reverence.",
        ask: "Lord, teach me to obey You in ordinary duties.",
        intention: "For fidelity to God's commandments.",
      },
      {
        title: "The Finding of Jesus in the Temple",
        fruit: "Deeper devotion to Jesus",
        meditation:
          "Mary and Joseph search for Jesus with sorrow and find Him in the Temple.",
        ask: "Lord, when I lose sight of You, give me the grace to seek You again.",
        intention: "For those who feel distant from God.",
      },
    ],
  },
  {
    key: "Luminous Mysteries",
    days: "Usually prayed on Thursdays",
    className: "luminous",
    mysteries: [
      {
        title: "The Baptism of Jesus",
        fruit: "Openness to the Holy Spirit",
        meditation:
          "Jesus enters the waters of the Jordan. The Father reveals His beloved Son, and the Spirit descends.",
        ask: "Lord, renew my baptismal identity.",
        intention: "For courage to live the Christian life publicly.",
      },
      {
        title: "The Wedding at Cana",
        fruit: "Trust in Mary's intercession",
        meditation:
          "Mary notices the need before others do. She tells the servants: Do whatever He tells you.",
        ask: "Mary, bring my needs to Jesus.",
        intention: "For marriages, families, and trust in God's timing.",
      },
      {
        title: "The Proclamation of the Kingdom",
        fruit: "Conversion",
        meditation:
          "Jesus calls all people to repentance and faith in the Gospel.",
        ask: "Lord, convert the parts of my heart that still resist You.",
        intention: "For sinners, lukewarm Catholics, and those far from the Church.",
      },
      {
        title: "The Transfiguration",
        fruit: "Desire for holiness",
        meditation:
          "Jesus reveals His glory to Peter, James, and John. The Cross is not the end. Glory is coming.",
        ask: "Lord, strengthen me when holiness feels difficult.",
        intention: "For perseverance in suffering and temptation.",
      },
      {
        title: "The Institution of the Eucharist",
        fruit: "Love of the Eucharist",
        meditation:
          "Jesus gives Himself as food for the life of the world.",
        ask: "Lord, increase my love for the Mass, the Eucharist, and adoration.",
        intention: "For priests, reverence at Mass, and Eucharistic renewal.",
      },
    ],
  },
  {
    key: "Sorrowful Mysteries",
    days: "Usually prayed on Tuesdays and Fridays",
    className: "sorrowful",
    mysteries: [
      {
        title: "The Agony in the Garden",
        fruit: "Sorrow for sin and trust in God",
        meditation:
          "Jesus sweats blood in Gethsemane and surrenders to the Father.",
        ask: "Lord, teach me to say, Not my will, but Yours be done.",
        intention: "For those suffering anxiety, fear, or spiritual darkness.",
      },
      {
        title: "The Scourging at the Pillar",
        fruit: "Purity",
        meditation: "Jesus suffers in His sacred body.",
        ask: "Lord, purify my body, imagination, desires, and habits.",
        intention: "For freedom from lust, addiction, and impurity.",
      },
      {
        title: "The Crowning with Thorns",
        fruit: "Moral courage",
        meditation:
          "Jesus is mocked, humiliated, and crowned with thorns.",
        ask: "Lord, free me from the need to be admired.",
        intention: "For humility and strength under ridicule.",
      },
      {
        title: "The Carrying of the Cross",
        fruit: "Perseverance",
        meditation: "Jesus carries the Cross to Calvary.",
        ask: "Lord, help me carry the crosses I cannot escape.",
        intention: "For those carrying heavy burdens.",
      },
      {
        title: "The Crucifixion",
        fruit: "Forgiveness",
        meditation:
          "Jesus gives His life for sinners and forgives from the Cross.",
        ask: "Lord, teach me to forgive as You forgive.",
        intention: "For mercy, repentance, and final perseverance.",
      },
    ],
  },
  {
    key: "Glorious Mysteries",
    days: "Usually prayed on Wednesdays and Sundays",
    className: "glorious",
    mysteries: [
      {
        title: "The Resurrection",
        fruit: "Faith",
        meditation:
          "Jesus rises from the dead. Sin and death do not have the final word.",
        ask: "Lord, strengthen my faith in Your victory.",
        intention: "For those who doubt, grieve, or feel hopeless.",
      },
      {
        title: "The Ascension",
        fruit: "Hope",
        meditation:
          "Jesus ascends to the Father and prepares a place for us.",
        ask: "Lord, lift my eyes toward heaven.",
        intention: "For hope and eternal perspective.",
      },
      {
        title: "The Descent of the Holy Spirit",
        fruit: "Gifts of the Holy Spirit",
        meditation:
          "The Holy Spirit descends upon Mary and the Apostles.",
        ask: "Holy Spirit, fill me with wisdom, courage, love, and zeal.",
        intention: "For renewal in the Church.",
      },
      {
        title: "The Assumption of Mary",
        fruit: "Union with Jesus through Mary",
        meditation: "Mary is taken body and soul into heaven.",
        ask: "Mary, lead me closer to Jesus and teach me to desire heaven.",
        intention: "For a holy death and devotion to Mary.",
      },
      {
        title: "The Coronation of Mary",
        fruit: "Final perseverance",
        meditation: "Mary is crowned Queen of Heaven and Earth.",
        ask: "Lord, keep me faithful until the end.",
        intention: "For perseverance, protection, and salvation.",
      },
    ],
  },
];

const sourceGroups = [
  {
    heading: "Core Church Documents",
    sources: [
      {
        title: "Rosarium Virginis Mariae",
        url: "https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html",
      },
      {
        title: "Marialis Cultus",
        url: "https://www.vatican.va/content/paul-vi/en/apost_exhortations/documents/hf_p-vi_exh_19740202_marialis-cultus.html",
      },
      {
        title: "Directory on Popular Piety and the Liturgy",
        url: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-direttorio_en.html",
      },
      {
        title: "Compendium of the Catechism of the Catholic Church",
        url: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html",
      },
    ],
  },
  {
    heading: "Shrine Sources",
    sources: [
      {
        title: "Sanctuary of Fatima",
        url: "https://www.fatima.pt/en/pages/narrative-of-the-apparitions-",
      },
      {
        title: "Sanctuary of Lourdes",
        url: "https://www.lourdes-france.com/en/day-pilgrims/the-rosary/",
      },
      {
        title: "Kibeho Shrine Sources",
        url: "https://www.kibeho-cana.org/a-brief-history-of-the-apparitions-of-our-lady-of-kibeho/",
      },
    ],
  },
  {
    heading: "Prayer Guides and Research",
    sources: [
      {
        title: "USCCB Rosary Guide",
        url: "https://www.usccb.org/how-to-pray-the-rosary",
      },
      {
        title: "Rosary Center and Confraternity",
        url: "https://www.rosarycenter.org/",
      },
      {
        title: "BMJ study on Rosary prayer and breathing",
        url: "https://pubmed.ncbi.nlm.nih.gov/11751348/",
      },
    ],
  },
];

function renderChronology() {
  const root = document.getElementById("chronology");
  if (!root) return;

  root.innerHTML = chronology
    .map(
      (item) => `
        <article class="timeline-item reveal">
          ${item.image ? `<img class="timeline-image" src="${item.image}" alt="${item.alt}" loading="lazy" />` : ""}
          <div class="timeline-date">${item.year}</div>
          <div>
            <span>${item.era}</span>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function titleCase(value = "") {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function beadPosition(stepIndex) {
  if (stepIndex < openingBeads.length) {
    const offsets = [-9, 9, -9, 9];
    return {
      x: 50 + offsets[stepIndex],
      y: 7 + stepIndex * 4.9,
    };
  }

  const beadIndex = stepIndex - openingBeads.length;
  const decadeIndex = Math.floor(beadIndex / 10);
  const beadInDecade = beadIndex % 10;
  const isReverse = decadeIndex % 2 === 1;
  const horizontalIndex = isReverse ? 9 - beadInDecade : beadInDecade;

  return {
    x: 15 + horizontalIndex * 7.75 + Math.sin((beadInDecade / 9) * Math.PI) * 4,
    y: 28 + decadeIndex * 13.2 + beadInDecade * 0.86,
  };
}

function rosarySteps() {
  return [
    ...openingBeads.map((bead, index) => ({
      ...bead,
      stepType: "opening",
      stepIndex: index,
    })),
    ...rosaryBeads.map((bead, index) => ({
      ...bead,
      stepType: "bead",
      beadNumber: index + 1,
      stepIndex: index + openingBeads.length,
    })),
  ];
}

function sectionHrefForItem(item) {
  if (item.stepType === "opening") return item.action?.href || "#how-to-pray";
  if (item.decade === "witness") return "#saints";
  return "#mysteries";
}

function linksForRosaryItem(item) {
  const links = [
    {
      label: item.stepType === "opening" ? "Prayer guide" : "Read context",
      href: sectionHrefForItem(item),
    },
    {
      label: "Open image",
      href: item.image,
    },
    {
      label: "Sources",
      href: "#sources",
    },
  ];

  const deck = downloadLinks[`${titleCase(item.decade)} Mysteries`];
  if (deck) {
    links.splice(1, 0, {
      label: item.decade === "glorious" ? "Download PPTX" : "Download deck",
      href: deck,
      download: true,
    });
  }

  return links;
}

function setActiveRosaryStep(steps, index) {
  const item = steps[index];
  if (!item) return;

  const panel = document.getElementById("bead-panel");
  const image = document.getElementById("bead-image");
  const kicker = document.getElementById("bead-kicker");
  const title = document.getElementById("bead-title");
  const scripture = document.getElementById("bead-scripture");
  const body = document.getElementById("bead-body");
  const links = document.getElementById("bead-links");
  const action = document.getElementById("bead-action");

  if (panel) panel.dataset.decade = item.decade || item.type || "opening";
  if (image) {
    image.src = item.image;
    image.alt = item.alt || item.title;
  }
  if (kicker) {
    kicker.textContent =
      item.stepType === "bead"
        ? `Bead ${String(item.beadNumber).padStart(2, "0")} / ${titleCase(item.decade)}`
        : item.marker;
  }
  if (title) title.textContent = item.title;
  if (scripture) scripture.textContent = item.scripture;
  if (body) body.textContent = item.body;
  if (links) {
    links.innerHTML = linksForRosaryItem(item)
      .map(
        (link) => `
          <a href="${link.href}" ${link.download ? "download" : ""}>
            ${link.label}
          </a>
        `
      )
      .join("");
  }
  if (action) {
    const fallbackAction =
      item.stepType === "bead"
        ? { label: "Read the full mysteries", href: "#mysteries" }
        : null;
    const activeAction = item.action || fallbackAction;

    if (activeAction) {
      action.textContent = activeAction.label;
      action.href = activeAction.href;
      action.hidden = false;
    } else {
      action.hidden = true;
    }
  }

  document.querySelectorAll("[data-step]").forEach((element) => {
    element.classList.toggle("is-active", Number(element.dataset.step) === index);
  });

  window.dispatchEvent(
    new CustomEvent("rosary:active-step", {
      detail: {
        index,
        beadNumber: item.beadNumber || 0,
        decade: item.decade || item.type || "opening",
        title: item.title,
      },
    })
  );
}

function renderRosaryPath() {
  const map = document.getElementById("rosary-map");
  const stepRoot = document.getElementById("rosary-steps");
  if (!map || !stepRoot) return;

  const steps = rosarySteps();
  const openingMarkup = openingBeads
    .map(
      (bead, index) => {
        const position = beadPosition(index);
        return `
        <button
          class="opening-marker"
          type="button"
          data-step="${index}"
          aria-label="${bead.title}"
          style="--x: ${position.x}%; --y: ${position.y}%"
        >
          <span>${bead.marker}</span>
        </button>
      `;
      }
    )
    .join("");

  const beadMarkup = rosaryBeads
    .map((bead, index) => {
      const stepIndex = index + openingBeads.length;
      const position = beadPosition(stepIndex);
      return `
        <button
          class="rosary-bead ${bead.decade}"
          type="button"
          data-step="${stepIndex}"
          aria-label="Bead ${index + 1}: ${bead.title}"
          style="--x: ${position.x}%; --y: ${position.y}%"
        >
          <span>${index + 1}</span>
        </button>
      `;
    })
    .join("");

  map.innerHTML = `
    <div class="opening-track" aria-label="Opening prayers">${openingMarkup}</div>
    <div class="decade-track" aria-label="Fifty Rosary beads">${beadMarkup}</div>
  `;

  stepRoot.innerHTML = steps
    .map(
      (item, index) => `
        <article class="rosary-step ${item.stepType} ${item.decade || ""}" data-step="${index}">
          <span>${item.stepType === "bead" ? `Bead ${item.beadNumber}` : item.marker}</span>
          <h3>${item.title}</h3>
          <p>${item.scripture}</p>
        </article>
      `
    )
    .join("");

  map.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-step]");
    if (!button) return;
    const nextIndex = Number(button.dataset.step);
    setActiveRosaryStep(steps, nextIndex);
    const target = stepRoot.querySelector(`[data-step="${nextIndex}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) {
        setActiveRosaryStep(steps, Number(activeEntry.target.dataset.step));
      }
    },
    { threshold: [0.2, 0.45, 0.7], rootMargin: "-34% 0px -42% 0px" }
  );

  stepRoot.querySelectorAll(".rosary-step").forEach((step) => observer.observe(step));
  setActiveRosaryStep(steps, 0);
}

function renderMysteries() {
  const root = document.getElementById("mystery-grid");
  if (!root) return;

  root.innerHTML = mysterySets
    .map(
      (set) => `
        <article class="mystery-set ${set.className} reveal">
          <header>
            <div>
              <span>${set.days}</span>
              <h3>${set.key}</h3>
            </div>
            <a class="mystery-action" href="#rosary-scroll">Walk this path</a>
          </header>
          <div class="mystery-list">
            ${set.mysteries
              .map(
                (mystery, index) => `
                  <section>
                    <div class="mystery-number">${index + 1}</div>
                    <div>
                      <h4>${mystery.title}</h4>
                      <p><strong>Fruit:</strong> ${mystery.fruit}</p>
                      <p>${mystery.meditation}</p>
                      <p><strong>Ask:</strong> ${mystery.ask}</p>
                      <p><strong>Prayer intention:</strong> ${mystery.intention}</p>
                    </div>
                  </section>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderSources() {
  const root = document.getElementById("source-groups");
  if (!root) return;

  root.innerHTML = sourceGroups
    .map(
      (group) => `
        <article class="source-group">
          <h3>${group.heading}</h3>
          <ul>
            ${group.sources
              .map(
                (source) => `
                  <li>
                    <a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderDailyMystery() {
  const root = document.getElementById("daily-card");
  if (!root) return;

  const schedule = {
    0: "Glorious Mysteries",
    1: "Joyful Mysteries",
    2: "Sorrowful Mysteries",
    3: "Glorious Mysteries",
    4: "Luminous Mysteries",
    5: "Sorrowful Mysteries",
    6: "Joyful Mysteries",
  };
  const todaySet = mysterySets.find((set) => set.key === schedule[new Date().getDay()]);
  const firstMystery = todaySet?.mysteries[0];

  if (!todaySet || !firstMystery) return;

  root.innerHTML = `
    <span>${todaySet.key}</span>
    <h3>${firstMystery.title}</h3>
    <dl>
      <div>
        <dt>Fruit</dt>
        <dd>${firstMystery.fruit}</dd>
      </div>
      <div>
        <dt>Meditation</dt>
        <dd>${firstMystery.meditation}</dd>
      </div>
      <div>
        <dt>Ask</dt>
        <dd>${firstMystery.ask}</dd>
      </div>
      <div>
        <dt>Resolution</dt>
        <dd>I will accept one hidden duty without complaint.</dd>
      </div>
    </dl>
    <div class="prayer-line">Our Father... Hail Mary... Glory Be...</div>
  `;
}

function wireRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function wireDownloads() {
  const button = document.getElementById("download-json");
  button?.addEventListener("click", () => {
    const payload = {
      title: "The Rosary: A Path Through the Life of Christ",
      generatedAt: new Date().toISOString(),
      openingBeads,
      rosaryBeads,
      mysteries: mysterySets,
      chronology,
      sourceGroups,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "rosary-mysteries.json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  });
}

function wirePrint() {
  document.getElementById("print-page")?.addEventListener("click", () => window.print());
}

function wireTestimonyForm() {
  const form = document.getElementById("testimony-form");
  const note = document.getElementById("form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const story = String(formData.get("story") || "").trim();
    const consent = formData.get("consent") === "on";

    if (!story || !consent) {
      note.textContent =
        "Add the testimony and consent before preparing it for review.";
      return;
    }

    note.textContent =
      "Testimony prepared locally. A publication workflow can be connected when the site has a backend.";
  });
}

renderRosaryPath();
renderChronology();
renderMysteries();
renderSources();
renderDailyMystery();
wireRevealAnimations();
wireDownloads();
wirePrint();
wireTestimonyForm();
