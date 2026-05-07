(function initRosaryI18n() {
  const STORAGE_KEY = "rosary-language";
  const ATTRIBUTES = ["alt", "aria-label", "placeholder", "title"];
  const PT_DECADES = {
    Joyful: "Gozosos",
    Luminous: "Luminosos",
    Sorrowful: "Dolorosos",
    Glorious: "Gloriosos",
    Witness: "Testemunhos",
    joyful: "Gozosos",
    luminous: "Luminosos",
    sorrowful: "Dolorosos",
    glorious: "Gloriosos",
    witness: "Testemunhos",
  };

  const PT_TEXT = Object.freeze({
    "The Rosary": "O Rosário",
    "The Rosary: A Path Through the Life of Christ": "O Rosário: Um Caminho pela Vida de Cristo",
    "A digital Catholic exhibition on the Holy Rosary: its Gospel mysteries, Marian roots, spiritual fruits, historical witnesses, and testimonies of grace.": "Uma exposição católica digital sobre o Santo Rosário: seus mistérios evangélicos, raízes marianas, frutos espirituais, testemunhas históricas e testemunhos de graça.",
    "Immersive Rosary Path": "Caminho Imersivo do Rosário",
    "An immersive long-scroll variation of the Rosary exhibition, moving slowly bead by bead through prayer and mystery.": "Uma variação imersiva e longa da exposição do Rosário, avançando devagar, conta por conta, pela oração e pelo mistério.",
    "Rosary History Timeline": "Linha do Tempo da História do Rosário",
    "A focused history page for the Rosary exhibition, tracing counted prayer, Dominican tradition, Lepanto, Lourdes, Fatima, and modern papal teaching.": "Uma página histórica focada na exposição do Rosário, acompanhando a oração contada, a tradição dominicana, Lepanto, Lourdes, Fátima e o ensino papal moderno.",
    "Saints and Witnesses of the Rosary": "Santos e Testemunhas do Rosário",
    "Saints, blesseds, popes, and shrine witnesses connected to the Rosary, with links back to primary Church and shrine sources.": "Santos, beatos, papas e testemunhas de santuários ligados ao Rosário, com links para fontes primárias da Igreja e dos santuários.",

    "Skip to content": "Pular para o conteúdo",
    "Primary navigation": "Navegação principal",
    "Immersive Path": "Caminho Imersivo",
    "Home": "Início",
    "Exhibition Guide": "Guia da Exposição",
    "Compact Path": "Caminho Compacto",
    "Compact Rosary": "Rosário Compacto",
    "Rosary Path": "Caminho do Rosário",
    "What Is": "O Que É",
    "How to Pray": "Como Rezar",
    "Mysteries": "Mistérios",
    "History": "História",
    "Saints": "Santos",
    "Mary": "Maria",
    "Testimonies": "Testemunhos",
    "Today": "Hoje",
    "Sources": "Fontes",

    "Open navigation menu": "Abrir menu de navegação",
    "Close navigation menu": "Fechar menu de navegação",

    "Open today's slide deck (PPTX)": "Abrir a apresentação de hoje (PPTX)",
    "Full prayer — today": "Oração completa — hoje",
    "From the Creed through the Hail Holy Queen, using the five mysteries assigned to this day.":
      "Do Credo à Salve Rainha, com os cinco mistérios atribuídos a este dia.",
    "Sign of the Cross": "Sinal da Cruz",
    "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.":
      "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.":
      "Pai-Nosso que estais no Céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
    "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.":
      "Ave-Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
    "Traditionally, this mystery is followed by one Our Father, ten Hail Marys, and one Glory Be. Text of the Hail Mary (pray ten times):":
      "Tradicionalmente, este mistério é seguido de um Pai-Nosso, dez Ave-Marias e um Glória ao Pai. Texto da Ave-Maria (rezar dez vezes):",
    "Hail Mary (first, for faith)": "Ave-Maria (primeira, pela fé)",
    "Hail Mary (second, for hope)": "Ave-Maria (segunda, pela esperança)",
    "Hail Mary (third, for charity)": "Ave-Maria (terceira, pela caridade)",

    "A companion path through the Rosary": "Um caminho de acompanhamento pelo Rosário",
    "The home page holds the long immersive walk. Here, the compact strand stays beside you while you scroll—then use the guides on their own pages for teaching, history, shrines, and sources.":
      "A página inicial guarda o longo percurso imersivo. Aqui, o fio compacto permanece ao seu lado enquanto você rola—depois use os guias em páginas próprias para ensino, história, santuários e fontes.",
    "Return to Home": "Voltar ao início",
    "How this page works": "Como esta página funciona",
    "Scroll the strand with the text": "Role o fio junto com o texto",
    "Begin below at the cross-shaped rail, move through the opening prayers, then trace each decade. Every bead opens context, images, and links.":
      "Comece abaixo no trilho em forma de cruz, passe pelas orações iniciais e trace cada dezena. Cada conta abre contexto, imagens e links.",
    "Begin the compact path": "Começar o caminho compacto",

    "A Gospel compendium, Marian yet Christ-centered prayer, and doorway into the mysteries.":
      "Compêndio do Evangelho, oração mariana e cristocêntrica, e porta de entrada nos mistérios.",
    "Shrines where Our Lady asked for prayer and conversion.":
      "Santuários onde Nossa Senhora pediu oração e conversão.",
    "The twenty mysteries of the Rosary: Joyful, Luminous, Sorrowful, and Glorious, with downloadable mystery slide decks.":
      "Os vinte mistérios do Rosário: Gozosos, Luminosos, Dolorosos e Gloriosos, com apresentações para download.",
    "Testimonies, miracles, and claims about the Rosary—labeled by source strength—and a form to submit your own story.":
      "Testemunhos, milagres e relatos sobre o Rosário—com rótulos de confiabilidade da fonte—e um formulário para enviar sua história.",
    "Core Vatican, shrine, and research sources for the Rosary exhibition, with downloads and print options.":
      "Fontes vaticanas, de santuários e de pesquisa para a exposição do Rosário, com downloads e opção de impressão.",
    "Today's Rosary: the mysteries for this day of the week, full prayer texts from the Creed through the Hail Holy Queen, and the matching slide deck.":
      "Rosário de hoje: mistérios do dia da semana, textos completos do Credo à Salve Rainha e a apresentação correspondente.",
    "Sources — The Rosary Exhibition": "Fontes — Exposição do Rosário",
    "The Rosary: A Path Through the Life of Christ": "O Rosário: Um Caminho pela Vida de Cristo",
    "Walk slowly through the prayer, bead by bead. The Rosary stays present behind each scene as the scroll carries you from the Cross into the mysteries and back to the Hail Holy Queen.": "Percorra a oração devagar, conta por conta. O Rosário permanece presente por trás de cada cena enquanto a rolagem leva você da Cruz aos mistérios e de volta à Salve Rainha.",
    "Begin at the Cross": "Começar pela Cruz",
    "Open the guide": "Abrir o guia",
    "Immersive Rosary path": "Caminho imersivo do Rosário",
    "Home — immersive Rosary path": "Início — caminho imersivo do Rosário",
    "Exhibition guide": "Guia da exposição",
    "A companion guide for the Rosary": "Um guia de acompanhamento para o Rosário",
    "Keep the wider exhibition here: the prayer Our Lady asked for, the mysteries of Christ it reveals, and the graces it has carried through history.": "Mantenha aqui a exposição mais ampla: a oração que Nossa Senhora pediu, os mistérios de Cristo que ela revela e as graças que carregou pela história.",
    "Use this section when you want the shorter guide, source trail, and teaching material around the main prayer path.": "Use esta seção quando quiser o guia mais curto, o caminho das fontes e o material de ensino ao redor do percurso principal de oração.",
    "Open the compact path": "Abrir o caminho compacto",
    "Learn How to Pray": "Aprender a rezar",
    "Continue into the compact path": "Continuar para o caminho compacto",
    "Companion section": "Seção de acompanhamento",
    "Rosary": "Rosário",
    "Begin at the cross, descend through the opening prayers, enter the decades, and return to the Hail Holy Queen.": "Comece na cruz, desça pelas orações iniciais, entre nas dezenas e retorne à Salve Rainha.",
    "Keep scrolling. The page keeps moving down while the active bead travels down the strand, around the decades, and back up.": "Continue rolando. A página segue para baixo enquanto a conta ativa percorre o fio, passa pelas dezenas e sobe de volta.",
    "Each bead is clickable. Use the physical strand as navigation, then follow the text and links in the active bead.": "Cada conta é clicável. Use o fio físico como navegação e depois acompanhe o texto e os links da conta ativa.",
    "Rosary bead navigation": "Navegação pelas contas do Rosário",
    "Cross, opening beads, five decades, and the closing prayer.": "Cruz, contas iniciais, cinco dezenas e a oração final.",
    "Opening prayer": "Oração inicial",
    "Opening prayers": "Orações iniciais",
    "Fifty Rosary beads": "Cinquenta contas do Rosário",
    "Closing prayer": "Oração final",
    "Links for this bead": "Links para esta conta",
    "See the prayer guide": "Ver o guia de oração",

    "What Is the Rosary?": "O que é o Rosário?",
    "A compendium of the Gospel": "Um compêndio do Evangelho",
    "Quiet distinction": "Distinção discreta",
    "Mary does not compete with Christ in the Rosary. She teaches the soul to look at Him.": "Maria não compete com Cristo no Rosário. Ela ensina a alma a olhar para Ele.",
    "The Rosary is a meditative Catholic prayer centered on the life, death, and glory of Jesus Christ.": "O Rosário é uma oração católica meditativa centrada na vida, morte e glória de Jesus Cristo.",
    "Each decade invites us to contemplate one mystery from the Gospel: the Annunciation, the Nativity, the Baptism of Jesus, the Crucifixion, the Resurrection, Pentecost, and many others.": "Cada dezena nos convida a contemplar um mistério do Evangelho: a Anunciação, a Natividade, o Batismo de Jesus, a Crucifixão, a Ressurreição, Pentecostes e muitos outros.",
    "The Church has often called the Rosary a compendium of the Gospel because it gathers the central events of salvation history into a prayer that can be carried in the hand, prayed in the home, whispered in suffering, or proclaimed in procession.": "A Igreja muitas vezes chamou o Rosário de compêndio do Evangelho porque ele reúne os acontecimentos centrais da história da salvação em uma oração que pode ser carregada na mão, rezada em casa, sussurrada no sofrimento ou proclamada em procissão.",
    "The Rosary is Marian because we pray it with Mary. It is Christ-centered because every mystery leads us to Jesus.": "O Rosário é mariano porque o rezamos com Maria. É cristocêntrico porque cada mistério nos leva a Jesus.",

    "Why This Exhibition Exists": "Por que esta exposição existe",
    "To rediscover the Rosary with faith and clarity": "Para redescobrir o Rosário com fé e clareza",
    "Many Catholics know the Rosary as a family tradition. Some know it as a daily devotion. Others see it as repetitive and do not yet understand its depth.": "Muitos católicos conhecem o Rosário como tradição familiar. Alguns o conhecem como devoção diária. Outros o veem como repetitivo e ainda não compreendem sua profundidade.",
    "A prayer of contemplation": "Uma oração de contemplação",
    "A school of holiness": "Uma escola de santidade",
    "A weapon for peace": "Uma arma para a paz",
    "A guide through the Gospel": "Um guia pelo Evangelho",
    "A devotion loved by popes, saints, shrines, and families": "Uma devoção amada por papas, santos, santuários e famílias",
    "A prayer connected to conversion, healing, protection, and hope": "Uma oração ligada à conversão, cura, proteção e esperança",
    "This exhibition does not treat every miracle story the same way. Some events are official Church teaching. Some are shrine-documented testimonies. Some are devotional traditions. Some are popular stories that need more evidence.": "Esta exposição não trata todos os relatos de milagre da mesma forma. Alguns eventos são ensinamento oficial da Igreja. Alguns são testemunhos documentados por santuários. Alguns são tradições devocionais. Alguns são histórias populares que precisam de mais evidência.",
    "Faith does not require exaggeration. The truth is already beautiful enough.": "A fé não exige exagero. A verdade já é bela o bastante.",
    "Source discipline": "Disciplina das fontes",
    "Official teaching, shrine testimony, biography, history, and popular devotion are related. They are not interchangeable.": "Ensinamento oficial, testemunho de santuário, biografia, história e devoção popular se relacionam. Eles não são intercambiáveis.",

    "Explore the Exhibition": "Explorar a exposição",
    "A pilgrimage through prayer, history, and witness": "Uma peregrinação pela oração, pela história e pelo testemunho",
    "The Prayer": "A oração",
    "The Mysteries": "Os mistérios",
    "Mary's Requests": "Os pedidos de Maria",
    "History Timeline": "Linha do tempo histórica",
    "Saints and Witnesses": "Santos e testemunhas",
    "Testimonies and Miracles": "Testemunhos e milagres",
    "Today's Rosary": "Rosário de hoje",
    "The Rosary and Human Flourishing": "O Rosário e o florescimento humano",

    "A simple guide": "Um guia simples",
    "The structure is simple. The depth comes from remaining with the mysteries of Christ.": "A estrutura é simples. A profundidade vem de permanecer com os mistérios de Cristo.",
    "Begin with the Sign of the Cross.": "Comece com o Sinal da Cruz.",
    "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.": "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    "Pray the Apostles' Creed.": "Reze o Credo dos Apóstolos.",
    "This places the Rosary inside the faith of the Church.": "Isso coloca o Rosário dentro da fé da Igreja.",
    "Pray one Our Father.": "Reze um Pai-Nosso.",
    "The prayer Jesus Himself taught us.": "A oração que o próprio Jesus nos ensinou.",
    "Pray three Hail Marys.": "Reze três Ave-Marias.",
    "Traditionally offered for faith, hope, and charity.": "Tradicionalmente oferecidas pela fé, esperança e caridade.",
    "Pray the Glory Be.": "Reze o Glória ao Pai.",
    "Praise the Holy Trinity.": "Louvar a Santíssima Trindade.",
    "Announce the first mystery.": "Anuncie o primeiro mistério.",
    "Pause, imagine the scene, and ask for the fruit of the mystery.": "Faça uma pausa, imagine a cena e peça o fruto do mistério.",
    "Pray one Our Father, ten Hail Marys, and one Glory Be.": "Reze um Pai-Nosso, dez Ave-Marias e um Glória ao Pai.",
    "Let the words become steady, humble, and contemplative.": "Deixe as palavras se tornarem firmes, humildes e contemplativas.",
    "Repeat for all five mysteries.": "Repita para todos os cinco mistérios.",
    "Each decade is a step through the Gospel.": "Cada dezena é um passo pelo Evangelho.",
    "Conclude with the Hail Holy Queen.": "Conclua com a Salve Rainha.",
    "Entrust yourself to Mary's maternal intercession.": "Entregue-se à intercessão materna de Maria.",
    "How to pray it better": "Como rezar melhor",
    "Do not rush. Before each decade, pause and name the mystery. Read or remember one short Scripture passage. Ask for the fruit of the mystery. Picture the scene. When distraction comes, gently return.": "Não tenha pressa. Antes de cada dezena, faça uma pausa e nomeie o mistério. Leia ou recorde uma breve passagem da Escritura. Peça o fruto do mistério. Imagine a cena. Quando vier a distração, volte com suavidade.",
    "The Rosary is not about perfect feelings. It is about faithful presence.": "O Rosário não trata de sentimentos perfeitos. Trata de presença fiel.",
    "For distraction": "Para a distração",
    "Return without drama. The return itself is part of the prayer.": "Volte sem drama. A própria volta faz parte da oração.",
    "Full Rosary prayers": "Orações completas do Rosário",
    "Apostles' Creed": "Credo dos Apóstolos",
    "Glory Be": "Glória ao Pai",
    "Hail Holy Queen": "Salve Rainha",
    "I believe in God, the Father almighty, Creator of heaven and earth...": "Creio em Deus Pai todo-poderoso, Criador do céu e da terra...",
    "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.": "Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.",
    "Glory be to the Father, and to the Son, and to the Holy Spirit...": "Glória ao Pai, ao Filho e ao Espírito Santo...",
    "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.": "Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.",
    "Hail, holy Queen, Mother of mercy...": "Salve Rainha, Mãe de misericórdia...",
    "Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.": "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.",
    "Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.": "Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo.",
    "Let us pray. O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.": "Oremos. Ó Deus, cujo Filho unigênito, por sua vida, morte e ressurreição, nos alcançou os prêmios da vida eterna, concedei-nos, nós vos pedimos, que, meditando estes mistérios do santíssimo Rosário da Bem-aventurada Virgem Maria, imitemos o que contêm e alcancemos o que prometem, pelo mesmo Cristo, Senhor nosso. Amém.",
    "Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Let us pray. O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.": "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Oremos. Ó Deus, cujo Filho unigênito, por sua vida, morte e ressurreição, nos alcançou os prêmios da vida eterna, concedei-nos, nós vos pedimos, que, meditando estes mistérios do santíssimo Rosário da Bem-aventurada Virgem Maria, imitemos o que contêm e alcancemos o que prometem, pelo mesmo Cristo, Senhor nosso. Amém.",

    "Chronology": "Cronologia",
    "The prayer took shape over time": "A oração tomou forma ao longo do tempo",
    "The exhibit distinguishes roots, tradition, papal framing, shrine testimony, and later devotional memory.": "A exposição distingue raízes, tradição, enquadramento papal, testemunho de santuários e memória devocional posterior.",
    "Rosary still life": "Natureza-morta com Rosário",
    "Papal framing": "Enquadramento papal",
    "The prayer kept finding new public language.": "A oração continuou encontrando uma nova linguagem pública.",
    "Modern papal teaching gave the Rosary a public language for contemplation, peace, family life, and renewed attention to Christ. The form changed; the center did not.": "O ensino papal moderno deu ao Rosário uma linguagem pública para contemplação, paz, vida familiar e renovada atenção a Cristo. A forma mudou; o centro não.",
    "The Gospel carried in twenty scenes": "O Evangelho carregado em vinte cenas",
    "The Joyful, Luminous, Sorrowful, and Glorious Mysteries lead the soul through the Incarnation, public ministry, Passion, and glory of Jesus Christ.": "Os Mistérios Gozosos, Luminosos, Dolorosos e Gloriosos conduzem a alma pela Encarnação, ministério público, Paixão e glória de Jesus Cristo.",
    "Downloadable Slide Decks": "Apresentações para download",
    "Mystery decks for prayer and teaching": "Apresentações dos mistérios para oração e ensino",
    "Download the original slide decks for parish, family, class, or exhibit use. PDF exports remain in the local working folder and can be hosted later.": "Baixe as apresentações originais para uso paroquial, familiar, escolar ou expositivo. As exportações em PDF permanecem na pasta local de trabalho e podem ser hospedadas depois.",
    "Joyful Mysteries": "Mistérios Gozosos",
    "Sorrowful Mysteries": "Mistérios Dolorosos",
    "Luminous Mysteries": "Mistérios Luminosos",
    "Glorious Mysteries": "Mistérios Gloriosos",
    "Gozosos deck": "Apresentação dos Gozosos",
    "Dolorosos deck": "Apresentação dos Dolorosos",
    "Luminosos deck": "Apresentação dos Luminosos",
    "Gloriosos deck": "Apresentação dos Gloriosos",

    "Mary and the Rosary": "Maria e o Rosário",
    "Shrines where the Rosary stayed close to the message": "Santuários onde o Rosário permaneceu próximo da mensagem",
    "Approved shrine tradition": "Tradição de santuário aprovada",
    "Fatima: pray the Rosary every day": "Fátima: rezar o Rosário todos os dias",
    "In 1917, Our Lady appeared to three shepherd children in Fatima, Portugal. Her message was urgent: conversion, repentance, prayer, sacrifice, and peace. Again and again, she asked for the daily Rosary.": "Em 1917, Nossa Senhora apareceu a três pastorinhos em Fátima, Portugal. Sua mensagem era urgente: conversão, arrependimento, oração, sacrifício e paz. Repetidas vezes, ela pediu o Rosário diário.",
    "Pray. Repent. Offer sacrifices. Turn toward God. Pray the Rosary for peace.": "Reze. Arrependa-se. Ofereça sacrifícios. Volte-se para Deus. Reze o Rosário pela paz.",
    "Read the Fatima shrine narrative": "Ler a narrativa do santuário de Fátima",
    "Why this anchors the site": "Por que isso ancora o site",
    "Fatima gives the Rosary a clear public request without turning the site into rumor collecting.": "Fátima dá ao Rosário um pedido público claro sem transformar o site em coleta de rumores.",
    "Lourdes: the Rosary at the Grotto": "Lourdes: o Rosário na Gruta",
    "When Saint Bernadette encountered the Lady at Lourdes, she prayed the Rosary. Lourdes reminds us that the Rosary is not only a prayer of words. It is a prayer of presence.": "Quando Santa Bernadette encontrou a Senhora em Lourdes, rezou o Rosário. Lourdes nos lembra que o Rosário não é apenas uma oração de palavras. É uma oração de presença.",
    "The shrine also maintains a serious process for examining alleged healings, joining devotion with careful discernment.": "O santuário também mantém um processo sério para examinar supostas curas, unindo devoção e discernimento cuidadoso.",
    "Visit the Lourdes Rosary guide": "Visitar o guia do Rosário de Lourdes",
    "Biographical witness": "Testemunho biográfico",
    "Pompeii: the Rosary and conversion": "Pompeia: o Rosário e a conversão",
    "Blessed Bartolo Longo was once far from the Catholic faith. His life was transformed, and he became one of the great apostles of the Rosary.": "O Beato Bartolo Longo esteve um dia longe da fé católica. Sua vida foi transformada, e ele se tornou um dos grandes apóstolos do Rosário.",
    "His story shows that the Rosary is also for the lost, the wounded, the confused, and the returning.": "Sua história mostra que o Rosário também é para os perdidos, os feridos, os confusos e os que retornam.",
    "Read the Vatican biography": "Ler a biografia do Vaticano",
    "Kibeho: repentance and the Seven Sorrows": "Kibeho: arrependimento e as Sete Dores",
    "At Kibeho in Rwanda, the Marian message emphasized conversion, repentance, suffering, and prayer. The Rosary of the Seven Sorrows became especially important in that spiritual tradition.": "Em Kibeho, em Ruanda, a mensagem mariana enfatizou conversão, arrependimento, sofrimento e oração. O Rosário das Sete Dores tornou-se especialmente importante nessa tradição espiritual.",
    "Kibeho reminds us that Marian devotion is not sentimental. Mary calls her children to repentance and deep conversion.": "Kibeho nos lembra que a devoção mariana não é sentimental. Maria chama seus filhos ao arrependimento e à conversão profunda.",
    "Read the Kibeho shrine history": "Ler a história do santuário de Kibeho",

    "Lives shaped by the Rosary": "Vidas moldadas pelo Rosário",
    "The Rosary has been preached, defended, loved, and carried by saints, popes, shrines, families, and ordinary souls.": "O Rosário foi pregado, defendido, amado e carregado por santos, papas, santuários, famílias e almas comuns.",
    "Saint Dominic and the Dominican tradition": "São Domingos e a tradição dominicana",
    "The Rosary has long been associated with preaching, contemplation, and teaching the Gospel to ordinary people.": "O Rosário há muito está associado à pregação, à contemplação e ao ensino do Evangelho ao povo simples.",
    "Read more": "Ler mais",
    "Saint Louis de Montfort": "São Luís de Montfort",
    "For de Montfort, the Rosary was a path of conversion, perseverance, and union with Jesus through Mary.": "Para de Montfort, o Rosário era um caminho de conversão, perseverança e união com Jesus por Maria.",
    "Pope Leo XIII": "Papa Leão XIII",
    "Leo XIII wrote extensively on the Rosary and helped shape modern papal teaching on it as a response to crises in society, family, and the Church.": "Leão XIII escreveu extensamente sobre o Rosário e ajudou a moldar o ensino papal moderno sobre ele como resposta a crises na sociedade, na família e na Igreja.",
    "Saint John Paul II": "São João Paulo II",
    "In Rosarium Virginis Mariae, John Paul II described the Rosary as contemplating Christ with Mary and gave the Church the Luminous Mysteries.": "Em Rosarium Virginis Mariae, João Paulo II descreveu o Rosário como contemplar Cristo com Maria e deu à Igreja os Mistérios Luminosos.",
    "Blessed Bartolo Longo": "Beato Bartolo Longo",
    "His life moved from spiritual darkness to Marian devotion, from confusion to mission, and from a wounded past to a life of service.": "Sua vida passou da escuridão espiritual à devoção mariana, da confusão à missão e de um passado ferido a uma vida de serviço.",

    "Beautiful claims need careful labels": "Afirmações belas precisam de rótulos cuidadosos",
    "The Rosary does not need exaggeration to be powerful. This site names the source strength before it tells the story.": "O Rosário não precisa de exagero para ser poderoso. Este site nomeia a força da fonte antes de contar a história.",
    "Official Church Teaching": "Ensinamento oficial da Igreja",
    "Vatican, papal, catechetical, and liturgical sources.": "Fontes vaticanas, papais, catequéticas e litúrgicas.",
    "Approved Shrine Tradition": "Tradição de santuário aprovada",
    "Recognized shrine material from Fatima, Lourdes, Pompeii, Kibeho, and similar sources.": "Material reconhecido de santuários como Fátima, Lourdes, Pompeia, Kibeho e fontes semelhantes.",
    "Documented Historical Event": "Evento histórico documentado",
    "Events supported by serious history and interpreted devotionally by Catholics.": "Eventos sustentados por história séria e interpretados devocionalmente por católicos.",
    "Shrine-Documented Testimony": "Testemunho documentado por santuário",
    "Accounts preserved by shrine records, medical bureaus, or official testimony processes.": "Relatos preservados por arquivos de santuários, departamentos médicos ou processos oficiais de testemunho.",
    "Popular Devotional Account": "Relato devocional popular",
    "Stories widely repeated in Catholic culture but not presented as proven fact here.": "Histórias amplamente repetidas na cultura católica, mas não apresentadas aqui como fato comprovado.",
    "Lepanto: remembered through the Rosary": "Lepanto: recordado por meio do Rosário",
    "Catholic tradition connects the 1571 victory at Lepanto with Rosary prayer and the intercession of Our Lady. The lesson is not triumphalism. It is dependence.": "A tradição católica conecta a vitória de 1571 em Lepanto à oração do Rosário e à intercessão de Nossa Senhora. A lição não é triunfalismo. É dependência.",
    "Editorial rule": "Regra editorial",
    "Tell the battle as history first, then name the Catholic devotional memory attached to it.": "Conte a batalha primeiro como história, depois nomeie a memória devocional católica ligada a ela.",
    "Fatima and peace": "Fátima e a paz",
    "At Fatima, the Rosary was presented as a prayer for peace: intercession for nations, families, sinners, and the suffering world.": "Em Fátima, o Rosário foi apresentado como oração pela paz: intercessão pelas nações, famílias, pecadores e pelo mundo sofredor.",
    "Lourdes and healing": "Lourdes e a cura",
    "Lourdes is one of the most carefully documented Marian shrines in the world. Not every healing is specifically a Rosary miracle, but Lourdes gives an example of faith, gratitude, investigation, and restraint.": "Lourdes é um dos santuários marianos mais cuidadosamente documentados do mundo. Nem toda cura é especificamente um milagre do Rosário, mas Lourdes dá um exemplo de fé, gratidão, investigação e sobriedade.",
    "Sometimes the greatest miracle is not the sudden healing of the body. It is the rescue of a soul.": "Às vezes, o maior milagre não é a cura repentina do corpo. É o resgate de uma alma.",

    "Science and Well-Being": "Ciência e bem-estar",
    "Can prayer affect the body?": "A oração pode afetar o corpo?",
    "Science cannot prove grace. It cannot measure the intercession of Mary. It cannot reduce prayer to a biological technique.": "A ciência não pode provar a graça. Não pode medir a intercessão de Maria. Não pode reduzir a oração a uma técnica biológica.",
    "But science can observe certain human effects of prayer. Some studies suggest that repetitive prayer, including the Rosary, may support slower breathing, greater calm, emotional regulation, coping, and spiritual well-being.": "Mas a ciência pode observar certos efeitos humanos da oração. Alguns estudos sugerem que a oração repetitiva, incluindo o Rosário, pode favorecer uma respiração mais lenta, maior calma, regulação emocional, enfrentamento e bem-estar espiritual.",
    "These findings should be understood carefully. The Rosary is not a substitute for medicine. It is not a hack. It is not merely meditation with Catholic words. It is prayer.": "Essas descobertas devem ser compreendidas com cuidado. O Rosário não substitui a medicina. Não é um truque. Não é apenas meditação com palavras católicas. É oração.",
    "Boundary note": "Nota de limite",
    "Science can observe human effects of prayer. It cannot measure grace.": "A ciência pode observar efeitos humanos da oração. Não pode medir a graça.",

    "Daily Rosary": "Rosário diário",
    "Today's Mystery": "Mistério de hoje",
    "A daily point of entry for prayer, attention, and one small resolution.": "Um ponto diário de entrada para oração, atenção e uma pequena resolução.",
    "A daily point of entry for prayer, attention, and one small resolution—then the full text to pray through.":
      "Um ponto diário de entrada para oração, atenção e uma pequena resolução—depois o texto completo para rezar.",
    "Fruit": "Fruto",
    "Meditation": "Meditação",
    "Ask": "Pedido",
    "Resolution": "Resolução",
    "I will accept one hidden duty without complaint.": "Aceitarei um dever escondido sem reclamar.",
    "Our Father... Hail Mary... Glory Be...": "Pai-Nosso... Ave-Maria... Glória ao Pai...",

    "Submit a Testimony": "Enviar um testemunho",
    "Has the Rosary changed your life?": "O Rosário mudou sua vida?",
    "Testimonies of conversion, healing, protection, peace, perseverance, and answered prayer are reviewed before publication. Private experiences are not presented as official Church judgments.": "Testemunhos de conversão, cura, proteção, paz, perseverança e oração atendida são revisados antes da publicação. Experiências privadas não são apresentadas como juízos oficiais da Igreja.",
    "Name": "Nome",
    "You may request anonymity": "Você pode solicitar anonimato",
    "Email": "E-mail",
    "Used only for follow-up": "Usado apenas para acompanhamento",
    "Location": "Localização",
    "What happened?": "O que aconteceu?",
    "How was the Rosary involved?": "Como o Rosário esteve envolvido?",
    "Supporting details": "Detalhes de apoio",
    "Dates, witnesses, documents, medical records, or other details": "Datas, testemunhas, documentos, registros médicos ou outros detalhes",
    "I understand that submitting a testimony does not mean it will be published, officially verified, or presented as a Church-approved miracle.": "Entendo que enviar um testemunho não significa que ele será publicado, oficialmente verificado ou apresentado como milagre aprovado pela Igreja.",
    "Prepare testimony": "Preparar testemunho",
    "Add the testimony and consent before preparing it for review.": "Adicione o testemunho e o consentimento antes de prepará-lo para revisão.",
    "Testimony prepared locally. A publication workflow can be connected when the site has a backend.": "Testemunho preparado localmente. Um fluxo de publicação pode ser conectado quando o site tiver um backend.",

    "About": "Sobre",
    "About this project": "Sobre este projeto",
    "This project was created to help Catholics and seekers rediscover the Holy Rosary as a prayer of contemplation, conversion, peace, and hope.": "Este projeto foi criado para ajudar católicos e buscadores a redescobrir o Santo Rosário como oração de contemplação, conversão, paz e esperança.",
    "The goal is not sensationalism. The goal is reverence. The Rosary is beautiful enough when presented truthfully.": "O objetivo não é o sensacionalismo. O objetivo é a reverência. O Rosário é belo o bastante quando apresentado com verdade.",
    "Core sources and downloads": "Fontes principais e downloads",
    "Download research report": "Baixar relatório de pesquisa",
    "Download mysteries JSON": "Baixar JSON dos mistérios",
    "Print / save as PDF": "Imprimir / salvar como PDF",
    "Pullable 3D Rosary navigation": "Navegação 3D puxável do Rosário",
    "Drag the 3D Rosary strand to move through the prayer": "Arraste o fio 3D do Rosário para avançar pela oração",
    "Drag the Rosary strand at the bottom to move through the prayer.": "Arraste o fio do Rosário na parte inferior para avançar pela oração.",

    "Variation two": "Variação dois",
    "Walk the Rosary slowly.": "Percorra o Rosário devagar.",
    "A larger, slower version where every bead becomes its own room. The rosary stays behind the content while the scroll carries you through each prayer, decade, and witness.": "Uma versão maior e mais lenta em que cada conta se torna seu próprio ambiente. O rosário permanece atrás do conteúdo enquanto a rolagem conduz você por cada oração, dezena e testemunho.",

    "History and public memory": "História e memória pública",
    "How the Rosary took shape over time.": "Como o Rosário tomou forma ao longo do tempo.",
    "The Rosary grew through counted prayer, preaching, papal teaching, shrine witness, and ordinary Catholic practice. This page keeps history, tradition, and devotional memory clearly labeled.": "O Rosário cresceu por meio da oração contada, da pregação, do ensino papal, do testemunho dos santuários e da prática católica comum. Esta página mantém história, tradição e memória devocional claramente rotuladas.",
    "A prayer shaped by centuries": "Uma oração moldada por séculos",
    "These entries distinguish historical development from devotional interpretation, so visitors can follow the story without confusing source types.": "Estas entradas distinguem o desenvolvimento histórico da interpretação devocional, para que os visitantes acompanhem a história sem confundir tipos de fonte.",
    "A careful example": "Um exemplo cuidadoso",
    "Lepanto and Catholic memory": "Lepanto e a memória católica",
    "The Battle of Lepanto belongs first to history. Catholic devotion remembers it alongside Rosary prayer, thanksgiving, and the feast of Our Lady of the Rosary.": "A Batalha de Lepanto pertence primeiro à história. A devoção católica a recorda junto à oração do Rosário, à ação de graças e à festa de Nossa Senhora do Rosário.",
    "The exhibit presents the event without triumphalism: prayer is shown as dependence on God, not as a tool for spectacle.": "A exposição apresenta o evento sem triunfalismo: a oração aparece como dependência de Deus, não como ferramenta de espetáculo.",
    "Read Rosarium Virginis Mariae": "Ler Rosarium Virginis Mariae",
    "Primary links for deeper study": "Links primários para estudo mais profundo",
    "Start with Church documents and shrine sources, then continue on the Sources page for the research report and full bibliography.":
      "Comece com documentos da Igreja e fontes de santuários; depois vá à página Fontes pelo relatório de pesquisa e bibliografia completa.",
    "Open Sources": "Abrir Fontes",

    "Saints and witnesses": "Santos e testemunhas",
    "Lives that carried the Rosary into the world.": "Vidas que levaram o Rosário ao mundo.",
    "These witnesses show the Rosary as preaching, conversion, papal teaching, shrine prayer, and ordinary perseverance.": "Estas testemunhas mostram o Rosário como pregação, conversão, ensino papal, oração de santuário e perseverança comum.",
    "Witnesses": "Testemunhas",
    "Saints, popes, and shrine voices": "Santos, papas e vozes de santuários",
    "Each profile points visitors toward a more reliable next step: Church documents, shrine materials, biographies, or the main Rosary path for prayer.": "Cada perfil aponta os visitantes para um próximo passo mais confiável: documentos da Igreja, materiais de santuários, biografias ou o caminho principal do Rosário para oração.",
    "Dominican tradition": "Tradição dominicana",
    "Saint Dominic": "São Domingos",
    "Catholic memory associates Dominic and the Dominican family with preaching the Rosary as a way for ordinary people to contemplate the Gospel.": "A memória católica associa Domingos e a família dominicana à pregação do Rosário como meio para o povo simples contemplar o Evangelho.",
    "Place this in history": "Situar isto na história",
    "De Montfort taught the Rosary as a practical path of conversion, perseverance, and union with Jesus through Mary.": "De Montfort ensinou o Rosário como caminho prático de conversão, perseverança e união com Jesus por Maria.",
    "Learn the prayer rhythm": "Aprender o ritmo da oração",
    "Papal teaching": "Ensinamento papal",
    "Leo XIII made the Rosary a public language of prayer for social crisis, family life, peace, and devotion.": "Leão XIII fez do Rosário uma linguagem pública de oração diante da crise social, da vida familiar, da paz e da devoção.",
    "See papal sources": "Ver fontes papais",
    "In Rosarium Virginis Mariae, John Paul II described the Rosary as contemplating Christ with Mary and proposed the Luminous Mysteries.": "Em Rosarium Virginis Mariae, João Paulo II descreveu o Rosário como contemplar Cristo com Maria e propôs os Mistérios Luminosos.",
    "Bartolo Longo's conversion and mission at Pompeii show the Rosary as a prayer for wounded, returning, and searching souls.": "A conversão e a missão de Bartolo Longo em Pompeia mostram o Rosário como oração para almas feridas, que retornam e que procuram.",
    "Saint Bernadette and Lourdes": "Santa Bernadette e Lourdes",
    "Lourdes holds together prayer, pilgrimage, suffering, and careful discernment. Bernadette's Rosary at the Grotto remains central to that witness.": "Lourdes une oração, peregrinação, sofrimento e discernimento cuidadoso. O Rosário de Bernadette na Gruta permanece central nesse testemunho.",
    "Best next links": "Melhores próximos links",
    "These are the same core source groups used by the main exhibit, so readers can move from devotion to documentation.": "Estes são os mesmos grupos de fontes principais usados pela exposição principal, para que os leitores possam passar da devoção à documentação.",

    "The Apostles' Creed": "O Credo dos Apóstolos",
    "The Our Father": "O Pai-Nosso",
    "First Hail Mary: Faith": "Primeira Ave-Maria: Fé",
    "Second Hail Mary: Hope": "Segunda Ave-Maria: Esperança",
    "Third Hail Mary: Charity": "Terceira Ave-Maria: Caridade",
    "The Glory Be": "O Glória ao Pai",
    "The Hail Holy Queen": "A Salve Rainha",
    "Our Father": "Pai-Nosso",
    "Faith": "Fé",
    "Hope": "Esperança",
    "Charity": "Caridade",
    "Cross": "Cruz",
    "Hail Mary, full of grace...": "Ave-Maria, cheia de graça...",
    "Our Father, who art in heaven...": "Pai-Nosso que estais no céu...",
    "The Rosary begins inside the faith of the Church. The Creed is not decoration; it is the doorway into Christian memory.": "O Rosário começa dentro da fé da Igreja. O Credo não é decoração; é a porta de entrada para a memória cristã.",
    "Jesus gave this prayer to the Church. In the Rosary it becomes the threshold of each decade, returning every mystery to the Father.": "Jesus deu esta oração à Igreja. No Rosário, ela se torna o limiar de cada dezena, devolvendo cada mistério ao Pai.",
    "The first opening Hail Mary is traditionally prayed for an increase in faith before entering the mysteries.": "A primeira Ave-Maria inicial é tradicionalmente rezada pelo aumento da fé antes de entrar nos mistérios.",
    "The second opening Hail Mary asks for hope: the grace to keep walking when the mystery is not yet clear.": "A segunda Ave-Maria inicial pede esperança: a graça de continuar caminhando quando o mistério ainda não está claro.",
    "The third opening Hail Mary asks for charity, so contemplation becomes love of God and neighbor.": "A terceira Ave-Maria inicial pede caridade, para que a contemplação se torne amor a Deus e ao próximo.",
    "The Rosary is Marian in companionship and Trinitarian in worship. Its rhythm keeps returning the soul to praise.": "O Rosário é mariano na companhia e trinitário na adoração. Seu ritmo sempre devolve a alma ao louvor.",
    "The Rosary closes by entrusting the meditation to Mary's maternal intercession and asking that the mysteries become a lived imitation of Christ.": "O Rosário se encerra confiando a meditação à intercessão materna de Maria e pedindo que os mistérios se tornem uma imitação vivida de Cristo.",
    "Why the prayer matters": "Por que a oração importa",
    "Mary's requests": "Os pedidos de Maria",
    "Enter the mysteries": "Entrar nos mistérios",
    "Review the prayer guide": "Rever o guia de oração",
    "Full prayer": "Oração completa",

    "The Annunciation": "A Anunciação",
    "Mary's Fiat": "O Fiat de Maria",
    "The Visitation": "A Visitação",
    "The Magnificat": "O Magnificat",
    "The Nativity": "A Natividade",
    "Bethlehem's Poverty": "A pobreza de Belém",
    "The Presentation": "A Apresentação",
    "Simeon's Light": "A luz de Simeão",
    "The Finding in the Temple": "O Encontro no Templo",
    "The Father's House": "A Casa do Pai",
    "The Baptism of Jesus": "O Batismo de Jesus",
    "Beloved Son": "Filho amado",
    "The Wedding at Cana": "As Bodas de Caná",
    "Ordinary Water, New Wine": "Água comum, vinho novo",
    "The Kingdom Proclaimed": "O Reino proclamado",
    "Metanoia": "Metanoia",
    "The Transfiguration": "A Transfiguração",
    "Tabor Before Calvary": "Tabor antes do Calvário",
    "The Eucharist Instituted": "A instituição da Eucaristia",
    "Real Presence": "Presença real",
    "Agony in the Garden": "Agonia no Horto",
    "Gethsemane": "Getsêmani",
    "The Scourging": "A Flagelação",
    "Wounds and Mercy": "Feridas e misericórdia",
    "Crowning with Thorns": "Coroação de espinhos",
    "Dignity Restored": "Dignidade restaurada",
    "Carrying the Cross": "Jesus carrega a Cruz",
    "Simon Helps Carry": "Simão ajuda a carregar",
    "The Crucifixion": "A Crucifixão",
    "The Throne of Love": "O trono do amor",
    "The Resurrection": "A Ressurreição",
    "Faith After the Tomb": "Fé depois do túmulo",
    "The Ascension": "A Ascensão",
    "Hope Raised Up": "Esperança elevada",
    "Pentecost": "Pentecostes",
    "Gifts of the Spirit": "Dons do Espírito",
    "The Assumption": "A Assunção",
    "Through Mary to Jesus": "Por Maria a Jesus",
    "The Coronation": "A Coroação",
    "Final Perseverance": "Perseverança final",
    "Pope Pius V": "Papa Pio V",
    "Lepanto": "Lepanto",
    "Saint Bernadette": "Santa Bernadette",
    "Fatima": "Fátima",
    "Kibeho": "Kibeho",
    "Dominican tradition": "Tradição dominicana",
    "Rosary encyclicals": "Encíclicas sobre o Rosário",
    "The Secret of the Rosary": "O Segredo do Rosário",
    "Rosarium Virginis Mariae, 2002": "Rosarium Virginis Mariae, 2002",

    "Mary receives the angel's greeting and listens before she understands everything. The fruit is humility.": "Maria recebe a saudação do anjo e escuta antes de compreender tudo. O fruto é a humildade.",
    "The yes of Mary changed history because it was total. The Rosary teaches consent before control.": "O sim de Maria mudou a história porque foi total. O Rosário ensina consentimento antes do controle.",
    "Mary goes in haste to Elizabeth. Grace does not make her passive; it makes her charitable.": "Maria vai apressadamente a Isabel. A graça não a torna passiva; torna-a caridosa.",
    "The prayer of Mary turns service into praise. A hidden visit becomes a public hymn of mercy.": "A oração de Maria transforma serviço em louvor. Uma visita escondida torna-se hino público de misericórdia.",
    "God chooses Bethlehem, poverty, and simplicity. The King enters without spectacle.": "Deus escolhe Belém, pobreza e simplicidade. O Rei entra sem espetáculo.",
    "The manger asks whether the heart can become simple enough to receive God.": "A manjedoura pergunta se o coração pode tornar-se simples o bastante para receber Deus.",
    "Mary and Joseph bring Jesus to the Temple. Obedience gives the ordinary day sacred weight.": "Maria e José levam Jesus ao Templo. A obediência dá peso sagrado ao dia comum.",
    "Simeon recognizes salvation in a child. The Rosary trains the eye to notice quiet revelation.": "Simeão reconhece a salvação em uma criança. O Rosário educa o olhar para perceber a revelação discreta.",
    "Mary and Joseph search with sorrow and find Jesus in the Temple. Distance is answered by seeking.": "Maria e José procuram com dor e encontram Jesus no Templo. A distância é respondida pela busca.",
    "Jesus returns to Nazareth in hidden obedience. Holiness can be quiet and still be complete.": "Jesus retorna a Nazaré em obediência escondida. A santidade pode ser silenciosa e ainda assim completa.",
    "The heavens open, the Spirit descends, and the Father names the beloved Son. The fruit is fidelity to baptism.": "Os céus se abrem, o Espírito desce e o Pai nomeia o Filho amado. O fruto é a fidelidade ao batismo.",
    "The mystery reveals the Trinity and the humility of Christ standing with sinners in the Jordan.": "O mistério revela a Trindade e a humildade de Cristo que se coloca com os pecadores no Jordão.",
    "Mary notices the need and points to obedience: Do whatever He tells you.": "Maria percebe a necessidade e aponta para a obediência: fazei tudo o que Ele vos disser.",
    "Cana shows the ordinary transformed by Christ. Mary intercedes without taking the center.": "Caná mostra o comum transformado por Cristo. Maria intercede sem tomar o centro.",
    "Jesus announces conversion and the nearness of the Kingdom. The Rosary is not sentimental; it is a call to change.": "Jesus anuncia a conversão e a proximidade do Reino. O Rosário não é sentimental; é chamado à mudança.",
    "Conversion is a reorientation of the whole person. The bead becomes a small act of return.": "A conversão é uma reorientação da pessoa inteira. A conta se torna um pequeno ato de retorno.",
    "Christ reveals glory before the Cross. The fruit is desire for holiness when suffering obscures the end.": "Cristo revela a glória antes da Cruz. O fruto é o desejo de santidade quando o sofrimento obscurece o fim.",
    "The Father's voice confirms the Son. The mystery strengthens the apostles before scandal and fear.": "A voz do Pai confirma o Filho. O mistério fortalece os apóstolos diante do escândalo e do medo.",
    "Jesus gives Himself as food for the life of the world. The fruit is love of the Eucharist.": "Jesus se dá como alimento para a vida do mundo. O fruto é o amor à Eucaristia.",
    "The Rosary leads to the altar because contemplation of Christ matures into love for His self-gift.": "O Rosário conduz ao altar porque a contemplação de Cristo amadurece em amor por sua entrega de si.",
    "Jesus surrenders in Gethsemane: not My will, but Yours be done. The fruit is contrition and trust.": "Jesus se entrega no Getsêmani: não se faça a minha vontade, mas a vossa. O fruto é contrição e confiança.",
    "The prayer of Jesus does not avoid anguish. It brings anguish into obedience.": "A oração de Jesus não evita a angústia. Ela leva a angústia para a obediência.",
    "By His wounds we are healed. The body of Christ suffers under human violence and remains love.": "Por suas chagas fomos curados. O corpo de Cristo sofre sob a violência humana e permanece amor.",
    "The mystery asks for purity, discipline, and compassion for every wounded body.": "O mistério pede pureza, disciplina e compaixão por todo corpo ferido.",
    "Christ is mocked as king. Moral courage begins when admiration is no longer the prize.": "Cristo é zombado como rei. A coragem moral começa quando a admiração deixa de ser o prêmio.",
    "The humiliated Christ restores the dignity of the humiliated. The Rosary teaches courage without contempt.": "O Cristo humilhado restaura a dignidade dos humilhados. O Rosário ensina coragem sem desprezo.",
    "Jesus carries the Cross to Calvary. The fruit is patience in tribulation.": "Jesus carrega a Cruz até o Calvário. O fruto é paciência na tribulação.",
    "Even Christ receives human assistance on the road. Some crosses are carried together.": "Até Cristo recebe ajuda humana no caminho. Algumas cruzes são carregadas juntos.",
    "Jesus gives His life and entrusts Himself to the Father. The fruit is final perseverance.": "Jesus dá sua vida e se entrega ao Pai. O fruto é a perseverança final.",
    "The Cross is not failure. It is the place where mercy speaks its final word.": "A Cruz não é fracasso. É o lugar onde a misericórdia diz sua palavra final.",
    "Jesus rises from the dead. Sin and death do not have the final word.": "Jesus ressuscita dos mortos. O pecado e a morte não têm a palavra final.",
    "The empty tomb asks for faith that can live after grief and confusion.": "O túmulo vazio pede uma fé capaz de viver depois da dor e da confusão.",
    "Christ ascends to the Father. The fruit is hope and eternal perspective.": "Cristo sobe ao Pai. O fruto é esperança e perspectiva eterna.",
    "The Ascension keeps Christian life from shrinking into the present moment only.": "A Ascensão impede que a vida cristã se reduza apenas ao momento presente.",
    "The Holy Spirit descends upon Mary and the apostles. The Church receives fire for mission.": "O Espírito Santo desce sobre Maria e os apóstolos. A Igreja recebe fogo para a missão.",
    "The fruit is not noise but courage, wisdom, love, zeal, and renewal.": "O fruto não é barulho, mas coragem, sabedoria, amor, zelo e renovação.",
    "Mary is taken body and soul into heaven. The mystery turns the heart toward its final home.": "Maria é elevada ao céu em corpo e alma. O mistério volta o coração para sua morada final.",
    "Marian devotion is not a detour. It is a maternal path into the life of Christ.": "A devoção mariana não é desvio. É caminho materno para a vida de Cristo.",
    "Mary is crowned Queen of Heaven and Earth. The fruit is final perseverance.": "Maria é coroada Rainha do Céu e da Terra. O fruto é a perseverança final.",
    "The last bead asks for fidelity until the end: not a mood, but a life completed in grace.": "A última conta pede fidelidade até o fim: não um estado de ânimo, mas uma vida completada na graça.",
    "The Rosary became linked with preaching, contemplation, and teaching the Gospel to ordinary people.": "O Rosário passou a ser ligado à pregação, à contemplação e ao ensino do Evangelho ao povo simples.",
    "Pius V gave the traditional form of the Rosary clearer public shape in the Church's life.": "Pio V deu à forma tradicional do Rosário um contorno público mais claro na vida da Igreja.",
    "Catholic memory tied the naval victory to Rosary prayer and gratitude to Our Lady. The emphasis here is dependence, not triumphalism.": "A memória católica ligou a vitória naval à oração do Rosário e à gratidão a Nossa Senhora. A ênfase aqui é dependência, não triunfalismo.",
    "At Lourdes, Bernadette prayed the Rosary before the Grotto. Presence mattered as much as explanation.": "Em Lourdes, Bernadette rezou o Rosário diante da Gruta. A presença importava tanto quanto a explicação.",
    "Our Lady asked the children of Fatima to pray the Rosary every day for peace, conversion, and repentance.": "Nossa Senhora pediu às crianças de Fátima que rezassem o Rosário todos os dias pela paz, conversão e arrependimento.",
    "Bartolo Longo's conversion shows a different kind of miracle: a life rescued and given back as mission.": "A conversão de Bartolo Longo mostra outro tipo de milagre: uma vida resgatada e devolvida como missão.",
    "The Kibeho message emphasized repentance, suffering, and prayer. Marian devotion is serious before it is decorative.": "A mensagem de Kibeho enfatizou arrependimento, sofrimento e oração. A devoção mariana é séria antes de ser decorativa.",
    "De Montfort presented the Rosary as conversion, perseverance, and union with Jesus through Mary.": "De Montfort apresentou o Rosário como conversão, perseverança e união com Jesus por Maria.",
    "Leo XIII made the Rosary a papal language for social crisis, family, peace, and public devotion.": "Leão XIII fez do Rosário uma linguagem papal para crise social, família, paz e devoção pública.",
    "John Paul II called the Rosary a way of contemplating Christ with Mary and gave the Church the Luminous Mysteries.": "João Paulo II chamou o Rosário de modo de contemplar Cristo com Maria e deu à Igreja os Mistérios Luminosos.",

    "Counted prayer enters Christian practice": "A oração contada entra na prática cristã",
    "Early roots": "Raízes antigas",
    "3rd c.": "séc. III",
    "13th c.": "séc. XIII",
    "15th c.": "séc. XV",
    "Psalter of Mary": "Saltério de Maria",
    "Lepanto and feast": "Lepanto e a festa",
    "Lourdes": "Lourdes",
    "Year of the Rosary": "Ano do Rosário",
    "The devotion gathers around preaching": "A devoção se reúne em torno da pregação",
    "The prayer reaches a settled form": "A oração alcança uma forma estável",
    "Rome gives the prayer clearer shape": "Roma dá forma mais clara à oração",
    "A battle remembered through prayer": "Uma batalha lembrada pela oração",
    "The Rosary at the Grotto": "O Rosário na Gruta",
    "Pray the Rosary every day": "Rezar o Rosário todos os dias",
    "John Paul II gives the Luminous Mysteries": "João Paulo II dá os Mistérios Luminosos",
    "Counted prayer among early Christians prepared the way for later bead-based devotion. The Rosary was not fixed yet, but the habit of measuring prayer with the body was already alive.": "A oração contada entre os primeiros cristãos preparou o caminho para a devoção posterior com contas. O Rosário ainda não estava fixado, mas o hábito de medir a oração com o corpo já estava vivo.",
    "Catholic tradition associates the Rosary with Saint Dominic and the Dominican family. The historical record is gradual, but the Dominican story gave the devotion a preaching-shaped public form.": "A tradição católica associa o Rosário a São Domingos e à família dominicana. O registro histórico é gradual, mas a narrativa dominicana deu à devoção uma forma pública marcada pela pregação.",
    "The devotion became recognizable as a set of repeated Hail Marys grouped around sacred mysteries, echoing the 150 Psalms in a prayer ordinary Catholics could carry.": "A devoção tornou-se reconhecível como um conjunto de Ave-Marias repetidas, agrupadas em torno de mistérios sagrados, ecoando os 150 Salmos em uma oração que católicos comuns podiam carregar.",
    "Pope Pius V described the traditional form of the Rosary, giving the devotion a clearer public frame within the Church's life.": "O Papa Pio V descreveu a forma tradicional do Rosário, dando à devoção um enquadramento público mais claro dentro da vida da Igreja.",
    "The Battle of Lepanto became tied to Catholic memory of Rosary prayer and gratitude. The feast of Our Lady of the Rosary grew from this devotional remembrance.": "A Batalha de Lepanto ficou ligada à memória católica da oração do Rosário e da gratidão. A festa de Nossa Senhora do Rosário cresceu a partir dessa lembrança devocional.",
    "Saint Bernadette prayed the Rosary at Lourdes. The shrine became a place where prayer, pilgrimage, illness, and careful discernment meet.": "Santa Bernadette rezou o Rosário em Lourdes. O santuário tornou-se um lugar onde oração, peregrinação, enfermidade e discernimento cuidadoso se encontram.",
    "At Fatima, Our Lady asked for conversion, repentance, sacrifice, peace, and the daily Rosary.": "Em Fátima, Nossa Senhora pediu conversão, arrependimento, sacrifício, paz e o Rosário diário.",
    "John Paul II described the Rosary as contemplating Christ with Mary and added the Luminous Mysteries, widening the prayer's meditation on Christ's public ministry.": "João Paulo II descreveu o Rosário como contemplar Cristo com Maria e acrescentou os Mistérios Luminosos, ampliando a meditação da oração sobre o ministério público de Cristo.",

    "Usually prayed on Mondays and Saturdays": "Normalmente rezados às segundas-feiras e aos sábados",
    "Usually prayed on Thursdays": "Normalmente rezados às quintas-feiras",
    "Usually prayed on Tuesdays and Fridays": "Normalmente rezados às terças e sextas-feiras",
    "Usually prayed on Wednesdays and Sundays": "Normalmente rezados às quartas-feiras e aos domingos",
    "Humility": "Humildade",
    "Love of neighbor": "Amor ao próximo",
    "Poverty of spirit": "Pobreza de espírito",
    "Obedience": "Obediência",
    "Deeper devotion to Jesus": "Devoção mais profunda a Jesus",
    "Openness to the Holy Spirit": "Abertura ao Espírito Santo",
    "Trust in Mary's intercession": "Confiança na intercessão de Maria",
    "Conversion": "Conversão",
    "Desire for holiness": "Desejo de santidade",
    "Love of the Eucharist": "Amor à Eucaristia",
    "Sorrow for sin and trust in God": "Dor pelo pecado e confiança em Deus",
    "Purity": "Pureza",
    "Moral courage": "Coragem moral",
    "Perseverance": "Perseverança",
    "Forgiveness": "Perdão",
    "Gifts of the Holy Spirit": "Dons do Espírito Santo",
    "Union with Jesus through Mary": "União com Jesus por Maria",
    "Final perseverance": "Perseverança final",
    "Mary receives the message of the angel Gabriel. She does not understand everything, but she gives herself completely to God.": "Maria recebe a mensagem do anjo Gabriel. Ela não compreende tudo, mas se entrega completamente a Deus.",
    "Lord, teach me to say yes before I understand everything.": "Senhor, ensina-me a dizer sim antes de compreender tudo.",
    "For openness to God's call.": "Pela abertura ao chamado de Deus.",
    "Mary goes in haste to serve Elizabeth. Grace does not make her passive. It makes her charitable.": "Maria vai apressadamente servir Isabel. A graça não a torna passiva. Torna-a caridosa.",
    "Lord, make my faith practical.": "Senhor, torna prática a minha fé.",
    "For charity in family and daily duties.": "Pela caridade na família e nos deveres diários.",
    "Jesus is born in humility. The King of the universe enters the world in poverty.": "Jesus nasce na humildade. O Rei do universo entra no mundo em pobreza.",
    "Lord, free me from pride, vanity, and attachment.": "Senhor, liberta-me do orgulho, da vaidade e do apego.",
    "For detachment from worldly approval.": "Pelo desapego da aprovação do mundo.",
    "Mary and Joseph present Jesus in the Temple. They obey the law of God with reverence.": "Maria e José apresentam Jesus no Templo. Eles obedecem à lei de Deus com reverência.",
    "Lord, teach me to obey You in ordinary duties.": "Senhor, ensina-me a obedecer a Ti nos deveres comuns.",
    "For fidelity to God's commandments.": "Pela fidelidade aos mandamentos de Deus.",
    "The Finding of Jesus in the Temple": "O Encontro de Jesus no Templo",
    "Mary and Joseph search for Jesus with sorrow and find Him in the Temple.": "Maria e José procuram Jesus com dor e o encontram no Templo.",
    "Lord, when I lose sight of You, give me the grace to seek You again.": "Senhor, quando eu Te perder de vista, dá-me a graça de Te procurar novamente.",
    "For those who feel distant from God.": "Por aqueles que se sentem distantes de Deus.",
    "Jesus enters the waters of the Jordan. The Father reveals His beloved Son, and the Spirit descends.": "Jesus entra nas águas do Jordão. O Pai revela seu Filho amado, e o Espírito desce.",
    "Lord, renew my baptismal identity.": "Senhor, renova minha identidade batismal.",
    "For courage to live the Christian life publicly.": "Pela coragem de viver publicamente a vida cristã.",
    "Mary notices the need before others do. She tells the servants: Do whatever He tells you.": "Maria percebe a necessidade antes dos outros. Ela diz aos servos: fazei tudo o que Ele vos disser.",
    "Mary, bring my needs to Jesus.": "Maria, leva minhas necessidades a Jesus.",
    "For marriages, families, and trust in God's timing.": "Pelos matrimônios, famílias e pela confiança no tempo de Deus.",
    "The Proclamation of the Kingdom": "A Proclamação do Reino",
    "Jesus calls all people to repentance and faith in the Gospel.": "Jesus chama todos ao arrependimento e à fé no Evangelho.",
    "Lord, convert the parts of my heart that still resist You.": "Senhor, converte as partes do meu coração que ainda resistem a Ti.",
    "For sinners, lukewarm Catholics, and those far from the Church.": "Pelos pecadores, católicos mornos e aqueles que estão longe da Igreja.",
    "Jesus reveals His glory to Peter, James, and John. The Cross is not the end. Glory is coming.": "Jesus revela sua glória a Pedro, Tiago e João. A Cruz não é o fim. A glória virá.",
    "Lord, strengthen me when holiness feels difficult.": "Senhor, fortalece-me quando a santidade parecer difícil.",
    "For perseverance in suffering and temptation.": "Pela perseverança no sofrimento e na tentação.",
    "The Institution of the Eucharist": "A Instituição da Eucaristia",
    "Lord, increase my love for the Mass, the Eucharist, and adoration.": "Senhor, aumenta meu amor pela Missa, pela Eucaristia e pela adoração.",
    "For priests, reverence at Mass, and Eucharistic renewal.": "Pelos sacerdotes, pela reverência na Missa e pela renovação eucarística.",
    "Jesus sweats blood in Gethsemane and surrenders to the Father.": "Jesus sua sangue no Getsêmani e se entrega ao Pai.",
    "Lord, teach me to say, Not my will, but Yours be done.": "Senhor, ensina-me a dizer: não a minha vontade, mas a tua seja feita.",
    "For those suffering anxiety, fear, or spiritual darkness.": "Por aqueles que sofrem ansiedade, medo ou escuridão espiritual.",
    "The Scourging at the Pillar": "A Flagelação no Pilar",
    "Jesus suffers in His sacred body.": "Jesus sofre em seu corpo sagrado.",
    "Lord, purify my body, imagination, desires, and habits.": "Senhor, purifica meu corpo, imaginação, desejos e hábitos.",
    "For freedom from lust, addiction, and impurity.": "Pela libertação da luxúria, do vício e da impureza.",
    "Jesus is mocked, humiliated, and crowned with thorns.": "Jesus é zombado, humilhado e coroado de espinhos.",
    "Lord, free me from the need to be admired.": "Senhor, liberta-me da necessidade de ser admirado.",
    "For humility and strength under ridicule.": "Pela humildade e força sob o ridículo.",
    "The Carrying of the Cross": "Jesus carrega a Cruz",
    "Jesus carries the Cross to Calvary.": "Jesus carrega a Cruz até o Calvário.",
    "Lord, help me carry the crosses I cannot escape.": "Senhor, ajuda-me a carregar as cruzes das quais não posso fugir.",
    "For those carrying heavy burdens.": "Por aqueles que carregam fardos pesados.",
    "Jesus gives His life for sinners and forgives from the Cross.": "Jesus dá sua vida pelos pecadores e perdoa da Cruz.",
    "Lord, teach me to forgive as You forgive.": "Senhor, ensina-me a perdoar como Tu perdoas.",
    "For mercy, repentance, and final perseverance.": "Pela misericórdia, arrependimento e perseverança final.",
    "Lord, strengthen my faith in Your victory.": "Senhor, fortalece minha fé na tua vitória.",
    "For those who doubt, grieve, or feel hopeless.": "Por aqueles que duvidam, choram ou se sentem sem esperança.",
    "Jesus ascends to the Father and prepares a place for us.": "Jesus sobe ao Pai e prepara um lugar para nós.",
    "Lord, lift my eyes toward heaven.": "Senhor, eleva meus olhos para o céu.",
    "For hope and eternal perspective.": "Pela esperança e perspectiva eterna.",
    "The Descent of the Holy Spirit": "A Descida do Espírito Santo",
    "The Holy Spirit descends upon Mary and the Apostles.": "O Espírito Santo desce sobre Maria e os Apóstolos.",
    "Holy Spirit, fill me with wisdom, courage, love, and zeal.": "Espírito Santo, enche-me de sabedoria, coragem, amor e zelo.",
    "For renewal in the Church.": "Pela renovação na Igreja.",
    "The Assumption of Mary": "A Assunção de Maria",
    "Mary is taken body and soul into heaven.": "Maria é elevada ao céu em corpo e alma.",
    "Mary, lead me closer to Jesus and teach me to desire heaven.": "Maria, aproxima-me de Jesus e ensina-me a desejar o céu.",
    "For a holy death and devotion to Mary.": "Por uma morte santa e pela devoção a Maria.",
    "The Coronation of Mary": "A Coroação de Maria",
    "Mary is crowned Queen of Heaven and Earth.": "Maria é coroada Rainha do Céu e da Terra.",
    "Lord, keep me faithful until the end.": "Senhor, mantém-me fiel até o fim.",
    "For perseverance, protection, and salvation.": "Pela perseverança, proteção e salvação.",
    "Walk this path": "Percorrer este caminho",
    "Fruit:": "Fruto:",
    "Ask:": "Pedido:",
    "Prayer intention:": "Intenção de oração:",

    "Core Church Documents": "Documentos centrais da Igreja",
    "Shrine Sources": "Fontes dos santuários",
    "Prayer Guides and Research": "Guias de oração e pesquisa",
    "Suggested videos (English)": "Vídeos sugeridos (inglês)",
    "Guided Rosary (Portuguese)": "Rosário guiado (português)",
    "Frei Gilson / Som do Monte — official channel (daily Santo Rosário)":
      "Frei Gilson / Som do Monte — canal oficial (Santo Rosário diário)",
    "Padre Paulo Ricardo — guided Rosary (full mysteries on YouTube)":
      "Padre Paulo Ricardo — Rosário guiado (mistérios completos no YouTube)",
    "Directory on Popular Piety and the Liturgy": "Diretório sobre a piedade popular e a liturgia",
    "Compendium of the Catechism of the Catholic Church": "Compêndio do Catecismo da Igreja Católica",
    "Sanctuary of Fatima": "Santuário de Fátima",
    "Sanctuary of Lourdes": "Santuário de Lourdes",
    "Kibeho Shrine Sources": "Fontes do Santuário de Kibeho",
    "Blessed Bartolo Longo Vatican Biography": "Biografia vaticana do Beato Bartolo Longo",
    "USCCB Rosary Guide": "Guia do Rosário da USCCB",
    "Rosary Center and Confraternity": "Centro e Confraria do Rosário",
    "BMJ study on Rosary prayer and breathing": "Estudo do BMJ sobre oração do Rosário e respiração",

    "Joyful mystery": "Mistério gozoso",
    "Luminous mystery": "Mistério luminoso",
    "Sorrowful mystery": "Mistério doloroso",
    "Glorious mystery": "Mistério glorioso",
    "Rosary witness": "Testemunho do Rosário",
    "Stay with the hiddenness of grace. These mysteries teach the soul to receive, serve, and trust God in ordinary places.": "Permaneça com o escondimento da graça. Estes mistérios ensinam a alma a receber, servir e confiar em Deus nos lugares comuns.",
    "Ask for humility, fidelity in family life, and the courage to say yes before everything is visible.": "Peça humildade, fidelidade na vida familiar e coragem para dizer sim antes que tudo esteja visível.",
    "Look at Christ in public revelation: baptized, teaching, transfigured, and self-given in the Eucharist.": "Olhe para Cristo na revelação pública: batizado, ensinando, transfigurado e entregue na Eucaristia.",
    "Ask to live your baptism with clarity and to let Christ's light reorder attention, desire, and action.": "Peça viver o batismo com clareza e deixar que a luz de Cristo reorganize atenção, desejo e ação.",
    "Do not rush past suffering. These mysteries form patience, contrition, mercy, and love that remains faithful under pressure.": "Não passe apressado pelo sofrimento. Estes mistérios formam paciência, contrição, misericórdia e amor que permanece fiel sob pressão.",
    "Ask for the grace to carry the cross without bitterness and to unite pain to the mercy of Christ.": "Peça a graça de carregar a cruz sem amargura e unir a dor à misericórdia de Cristo.",
    "Let the end of the Gospel interpret the present moment: resurrection, mission, heavenly hope, and final perseverance.": "Deixe que o fim do Evangelho interprete o momento presente: ressurreição, missão, esperança celeste e perseverança final.",
    "Ask for hope that can survive delay and for perseverance that keeps faith alive until the end.": "Peça esperança capaz de sobreviver à demora e perseverança que mantenha a fé viva até o fim.",
    "The Rosary did not remain an idea. It passed through saints, shrines, families, historical crises, and quiet conversions.": "O Rosário não permaneceu uma ideia. Passou por santos, santuários, famílias, crises históricas e conversões silenciosas.",
    "Ask that devotion become concrete: daily prayer, truthful witness, repentance, and service.": "Peça que a devoção se torne concreta: oração diária, testemunho verdadeiro, arrependimento e serviço.",
    "Pray the Hail Holy Queen slowly. The closing is not an exit; it is entrusting the whole meditation to Mary so she can lead it back to Jesus.": "Reze a Salve Rainha devagar. O encerramento não é uma saída; é confiar toda a meditação a Maria para que ela a reconduza a Jesus.",
    "Response: Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.": "Resposta: Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo.",
    "This opening bead prepares the heart before the decades begin. The Rosary starts by confessing faith, receiving the Lord's Prayer, asking for the theological virtues, and praising the Trinity.": "Esta conta inicial prepara o coração antes das dezenas. O Rosário começa confessando a fé, recebendo a Oração do Senhor, pedindo as virtudes teologais e louvando a Trindade.",
    "Read context": "Ler contexto",
    "Prayer guide": "Guia de oração",
    "Open image": "Abrir imagem",
    "Image source": "Fonte da imagem",
    "Download PPTX": "Baixar PPTX",
    "Download deck": "Baixar apresentação",
    "Read the full mysteries": "Ler todos os mistérios",

    "A rosary, sealed paper, candlelight, and sacred art on dark blue fabric": "Um rosário, papel selado, luz de vela e arte sacra sobre tecido azul-escuro",
    "Rosary beads and sacred paper arranged on dark blue fabric": "Contas do Rosário e papel sacro arranjados sobre tecido azul-escuro",
    "Rosary beads, candlelight, and Marian iconography arranged on dark velvet": "Contas do Rosário, luz de vela e iconografia mariana sobre veludo escuro",
    "Rosary beads and sacred art arranged near candlelight": "Contas do Rosário e arte sacra dispostas perto da luz de vela",
    "Saint John Paul II in prayer": "São João Paulo II em oração",
    "Portrait of Saint Dominic": "Retrato de São Domingos",
    "Portrait of Saint Louis de Montfort": "Retrato de São Luís de Montfort",
    "Portrait of Pope Leo XIII": "Retrato do Papa Leão XIII",
    "Photograph of Saint John Paul II": "Fotografia de São João Paulo II",
    "Portrait of Blessed Bartolo Longo": "Retrato do Beato Bartolo Longo",
    "Portrait of Saint Bernadette Soubirous": "Retrato de Santa Bernadette Soubirous",
    "Historical photograph of the three children of Fatima": "Fotografia histórica dos três pastorinhos de Fátima",
    "Historical photograph of the children of Fatima": "Fotografia histórica dos pastorinhos de Fátima",
    "Statue of Our Lady of Kibeho": "Estátua de Nossa Senhora de Kibeho",
    "Stone shrine relief of Mary holding the child Jesus": "Relevo de santuário em pedra de Maria segurando o Menino Jesus",
    "Sacred art of the Coronation of Mary": "Arte sacra da Coroação de Maria",
    "Annunciation scene from the Joyful Mysteries slide deck": "Cena da Anunciação da apresentação dos Mistérios Gozosos",
    "Visitation scene from the Joyful Mysteries slide deck": "Cena da Visitação da apresentação dos Mistérios Gozosos",
    "Nativity scene from the Joyful Mysteries slide deck": "Cena da Natividade da apresentação dos Mistérios Gozosos",
    "Presentation scene from the Joyful Mysteries slide deck": "Cena da Apresentação da apresentação dos Mistérios Gozosos",
    "Finding of Jesus in the Temple from the Joyful Mysteries slide deck": "Encontro de Jesus no Templo da apresentação dos Mistérios Gozosos",
    "Baptism of Jesus from the Luminous Mysteries slide deck": "Batismo de Jesus da apresentação dos Mistérios Luminosos",
    "Wedding at Cana from the Luminous Mysteries slide deck": "Bodas de Caná da apresentação dos Mistérios Luminosos",
    "Proclamation of the Kingdom from the Luminous Mysteries slide deck": "Proclamação do Reino da apresentação dos Mistérios Luminosos",
    "Transfiguration from the Luminous Mysteries slide deck": "Transfiguração da apresentação dos Mistérios Luminosos",
    "Institution of the Eucharist from the Luminous Mysteries slide deck": "Instituição da Eucaristia da apresentação dos Mistérios Luminosos",
    "Agony in the Garden from the Sorrowful Mysteries slide deck": "Agonia no Horto da apresentação dos Mistérios Dolorosos",
    "Scourging at the Pillar from the Sorrowful Mysteries slide deck": "Flagelação no Pilar da apresentação dos Mistérios Dolorosos",
    "Crowning with Thorns from the Sorrowful Mysteries slide deck": "Coroação de espinhos da apresentação dos Mistérios Dolorosos",
    "Carrying of the Cross from the Sorrowful Mysteries slide deck": "Jesus carrega a Cruz da apresentação dos Mistérios Dolorosos",
    "Crucifixion from the Sorrowful Mysteries slide deck": "Crucifixão da apresentação dos Mistérios Dolorosos",
    "Resurrection scene from the Glorious Mysteries slide deck": "Cena da Ressurreição da apresentação dos Mistérios Gloriosos",
    "Ascension scene from the Glorious Mysteries slide deck": "Cena da Ascensão da apresentação dos Mistérios Gloriosos",
    "Pentecost scene from the Glorious Mysteries slide deck": "Cena de Pentecostes da apresentação dos Mistérios Gloriosos",
    "Assumption scene from the Glorious Mysteries slide deck": "Cena da Assunção da apresentação dos Mistérios Gloriosos",
    "Coronation scene from the Glorious Mysteries slide deck": "Cena da Coroação da apresentação dos Mistérios Gloriosos"
  });

  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  let titleOriginal = document.title;
  let activeLocale = "en";
  let observer = null;
  let translating = false;

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function preserveWhitespace(original, translated) {
    const leading = String(original).match(/^\s*/)?.[0] || "";
    const trailing = String(original).match(/\s*$/)?.[0] || "";
    return `${leading}${translated}${trailing}`;
  }

  function translatePattern(value) {
    const beadWithDecade = value.match(/^Bead (\d{1,2}) \/ ([A-Za-z]+)$/);
    if (beadWithDecade) {
      return `Conta ${beadWithDecade[1]} / ${PT_DECADES[beadWithDecade[2]] || beadWithDecade[2]}`;
    }

    const beadOnly = value.match(/^Bead (\d{1,2})$/);
    if (beadOnly) return `Conta ${beadOnly[1]}`;

    const beadLabel = value.match(/^Bead (\d{1,2}): (.+)$/);
    if (beadLabel) return `Conta ${beadLabel[1]}: ${translateText(beadLabel[2])}`;

    const decadeFrame = value.match(/^(Joyful|Luminous|Sorrowful|Glorious|Witness) mystery: (.+)$/);
    if (decadeFrame) {
      const frame = PT_TEXT[`${decadeFrame[1]} mystery`] || PT_DECADES[decadeFrame[1]] || decadeFrame[1];
      return `${frame}: ${translateText(decadeFrame[2])}`;
    }

    const dailyDecade = value.match(/^Decade ([1-5]) of 5 — (.+)$/);
    if (dailyDecade) {
      return `Dezena ${dailyDecade[1]} de 5 — ${translateText(dailyDecade[2])}`;
    }

    return "";
  }

  function translateText(value, locale = activeLocale) {
    if (locale === "en") return value;
    const normalized = normalize(value);
    if (!normalized) return value;
    return translatePattern(normalized) || PT_TEXT[normalized] || value;
  }

  function getRequestedLocale() {
    const queryLocale = new URLSearchParams(window.location.search).get("lang");
    if (queryLocale === "pt" || queryLocale === "en") return queryLocale;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") return stored;
    } catch {
      // Ignore storage failures in private browsing or restricted embeds.
    }

    return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  function shouldSkip(element) {
    return Boolean(element?.closest("script, style, noscript, [data-no-translate]"));
  }

  function translateTextNode(node) {
    if (!node.nodeValue || shouldSkip(node.parentElement)) return;
    if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);

    const original = textOriginals.get(node);
    const translated = activeLocale === "en" ? original : preserveWhitespace(original, translateText(original));
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function originalAttribute(element, attribute) {
    let originals = attrOriginals.get(element);
    if (!originals) {
      originals = {};
      attrOriginals.set(element, originals);
    }
    if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
    return originals[attribute];
  }

  function translateElementAttributes(element) {
    if (shouldSkip(element)) return;

    ATTRIBUTES.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const original = originalAttribute(element, attribute);
      const translated =
        activeLocale === "en" ? original : preserveWhitespace(original, translateText(original));
      if (element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
    });

    if (element.tagName === "META" && element.getAttribute("name") === "description") {
      const original = originalAttribute(element, "content");
      const translated =
        activeLocale === "en" ? original : preserveWhitespace(original, translateText(original));
      if (element.getAttribute("content") !== translated) element.setAttribute("content", translated);
    }
  }

  function translateRoot(root = document.body) {
    if (!root || translating) return;
    translating = true;

    document.documentElement.lang = activeLocale === "pt" ? "pt-BR" : "en";
    document.body.dataset.language = activeLocale;
    document.title = activeLocale === "en" ? titleOriginal : translateText(titleOriginal);

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
    } else {
      if (root.nodeType === Node.ELEMENT_NODE) translateElementAttributes(root);
      const elements = root.querySelectorAll ? root.querySelectorAll("*") : [];
      elements.forEach(translateElementAttributes);

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        translateTextNode(node);
        node = walker.nextNode();
      }
    }

    updateLanguageControls();
    translating = false;
  }

  function setLocale(locale) {
    activeLocale = locale === "pt" ? "pt" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, activeLocale);
    } catch {
      // Ignore storage failures in private browsing or restricted embeds.
    }
    translateRoot(document.body);
  }

  function buildLanguageControls() {
    document.querySelectorAll(".site-nav").forEach((nav) => {
      if (nav.querySelector(".language-switch")) return;

      const switcher = document.createElement("div");
      switcher.className = "language-switch";
      switcher.dataset.noTranslate = "";
      switcher.innerHTML = `
        <span class="language-switch-label">Language</span>
        <button type="button" data-language-option="en">EN</button>
        <button type="button" data-language-option="pt">PT</button>
      `;
      switcher.addEventListener("click", (event) => {
        const button = event.target.closest("[data-language-option]");
        if (button) setLocale(button.dataset.languageOption);
      });
      nav.append(switcher);
    });
  }

  function updateLanguageControls() {
    document.querySelectorAll(".language-switch").forEach((switcher) => {
      const switcherLabel = activeLocale === "pt" ? "Idioma" : "Language";
      if (switcher.getAttribute("aria-label") !== switcherLabel) {
        switcher.setAttribute("aria-label", switcherLabel);
      }
      const label = switcher.querySelector(".language-switch-label");
      if (label && label.textContent !== switcherLabel) label.textContent = switcherLabel;
      switcher.querySelectorAll("[data-language-option]").forEach((button) => {
        const isActive = button.dataset.languageOption === activeLocale;
        button.classList.toggle("is-active", isActive);
        const pressed = String(isActive);
        if (button.getAttribute("aria-pressed") !== pressed) {
          button.setAttribute("aria-pressed", pressed);
        }
      });
    });
  }

  function observeTranslations() {
    observer?.disconnect();
    observer = new MutationObserver((mutations) => {
      if (translating) return;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => translateRoot(node));
        if (mutation.type === "characterData") translateRoot(mutation.target);
        if (mutation.type === "attributes") translateRoot(mutation.target);
      });
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["alt", "aria-label", "placeholder", "title", "content"],
    });
  }

  function init() {
    if (!document.body) return;
    titleOriginal = titleOriginal || document.title;
    activeLocale = getRequestedLocale();
    buildLanguageControls();
    translateRoot(document.body);
    observeTranslations();
  }

  window.rosaryI18n = {
    init,
    setLocale,
    applyTranslations: translateRoot,
    getLocale: () => activeLocale,
    getOriginalAttribute: (element, attribute) =>
      attrOriginals.get(element)?.[attribute] || element?.getAttribute?.(attribute) || "",
    translateText,
  };
})();
