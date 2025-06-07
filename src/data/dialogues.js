const dialogues = {
  intro: {  
    background: '/assets/intro/AnnabethLibrary.png',
  lines: [
    'FOXY : Oh quelle librarie bien cachee ! Je me demande ce que je vais y trouver...',
    `FOXY : La porte est entre-ouverte, je vais pouvoir y entrer sans me faire remarquer.`
  ],
},
  owlIntro: {
    background: '/assets/FoxNOwl.png',
    lines: [
      "OWL : Bienvenue dans la bibliothèque d'Annabeth, jeune renard.",
      "OWL : Je suis Annabeth le hibou, gardien des secrets anciens. Qu'est-ce qui t'amène ici ?",
      "FOX : Je cherche des réponses, des connaissances oubliées. Je veux en savoir plus sur les dieux grecs. As-tu des livres a me recommander ?",
      "OWL : Mieux, jeune renard, enonce-moi le nom d'un dieu, et je te menerai à lui.",
    ],
  },
  owl: {
    background: '/assets/backgrounds/library-night.jpg',
    lines: [
      "Tu es de retour, renard. As-tu trouvé ce que tu cherchais ?",
      "Les dieux t’attendent.",
    ],
  },
  zeus: {
    background: '/assets/FoxNZeus.png',
    books: [
      ['/assets/books/La-Guerre-du-pavot-Zeus.jpg', 'ZEUS : Pour me representer  quoi de plus approprié que la Guerre du Pavot de R.F Kuang (cest le début de la propagande oui oui) avec une héroïne qui est constamment en recherche de puissance à travers l invocation du plus fort et destructeur des dieux du panthéon. La puissance est la pierre angulaire du livre ; cest ce qui va guider ses choix.']
    ], 
    lines: [
      "ZEUS : Je suis Zeus, roi de l'Olympe.",
      "ZEUS : Pourquoi m’as-tu dérangé, petit renard ?",
        "FOX : Je suis à la recherche de connaissances, Zeus. J'ai entendu parler de ta puissance et de ta sagesse.",
        "ZEUS : La puissance, tu dis ? Tu veux en savoir plus sur la force et le pouvoir ?",
        "ZEUS : Eh bien, petite créature, la puissance est un outil dangereux. Elle peut être utilisée pour le bien ou pour le mal. Es-tu satisfait de cette réponse ? Maintenant, va-t'en.",
    ],
  },
  hera: {
    background: '/assets/FoxNHera.png',
    books: [
      ['/assets/books/EllesetleFeu-Hera.jpg', `HERA : Si tu veux en savoir plus sur moi, Elles et le Feu de Alice Doublier est un excellent choix.`],
      [`assets/books/PenelopeReinedIthaque-Hera.jpg`, `HERA : Dans ce livre, Hera nous raconte elle-même l’histoire de Pénélope attendant le retour d’Ulysse tout en essayant de repousser les prétendants. L’histoire raconte comment plusieurs femmes grecque mettent tout en œuvre pour échapper à leur destin. Héra elle-même voit à travers Penelope et Clytemnestre les similitudes des les failles de son propre mariage.
`],
      [`/assets/books/LasagefemmedAuschwitz-Hera.jpg`, `HERA : A nouveau une histoire de Femmes, de Mère, de Sœurs, de gardiennes et de guerrières. Ces femmes qui ont trop souffert mais qui trouveront courage et détermination pour mettre au monde des vies. Peut-être étaient-elles protégées par Hera ?
`],
        [`assets/books/Circe-Athena.jpg`, `HERA : L’histoire d’une femme seule que tout le monde a rejetée mais QI voit dans sa prison une façon de devenir échelle qu’elle a toujours voulu être et de s’affranchir de sa condition de nymphe des fleuves pour devenir une Héroïne.
`]
    ],
    lines: [
  "HERA : Je suis Héra, déesse du mariage et de la famille.",
  "HERA : On t’a laissé entrer ? Quelle audace.",
  "FOXY : Je viens avec respect. Je cherche un foyer pour mes questions.",
  "HERA : Un foyer… fragile sans vigilance.",
  "HERA : Lis avec le cœur, petit, ou reste dehors.",
],

  },
  athena: {
    background: '/assets/FoxNAthena.png',
    books: [
      ['/assets/books/FourthWings-Athena.jpg', 'ATHENA : La description d’Athena correspond a la description de Violet dans les deux tomes de la saga de Rebecca puisqu’elle intègre le cadrant des cavalier et qu’elle se prépare à la guerre'],
      ['/assets/books/Circe-Athena.jpg', 'ATHENA : Circé est une femme intelligente qui doit rusé pour que les hommes respectent son île et qu/’elle ne soit pas violenté.Elle fabrique également tout elle même grace aux ressources illimité qu’elle possède. Elle en a aussi vécu des vertes et des pas mûres donc niveau sagesse elle est plutôt bien haha ']
    ],
lines: [
  "ATHENA : Je suis Athéna, déesse de la sagesse et des batailles stratégiques.",
  "ATHENA : Tu as des yeux vifs, renard. C’est un bon début.",
  "FOX : Je veux apprendre. J’ai soif de comprendre ce monde de lettres.",
  "ATHENA : Alors prends ce fil. Il ne sert pas à fuir… mais à tisser ton savoir.",
  "ATHENA : Ne confonds jamais ruse et sagesse. L’une trompe, l’autre éclaire.",
],

  },
  poseidon: {
    background: '/assets/FoxNPoseidon.png',
    books: [
      ['/assets/books/Aatea-Poseidon.jpg', 'POSEIDON : TODO'],
      ['/assets/books/LFDDLM-Poseidon.jpg', 'POSEIDON : Une quête, à la rencontre du dieu de la mer.']
    ],
  lines: [
    "POSEIDON : Je suis Poséidon, seigneur des mers et des tempêtes.",
    "POSEIDON : La mer et les livres ont ceci de commun : leurs profondeurs te noient si tu n’es pas prêt.",
    "FOX : Je suis prêt à plonger, même si je ne sais pas nager.",
    "POSEIDON : Alors choisis bien ton souffle, petit renard.",
    "POSEIDON : Certains récits engloutissent ceux qui les ouvrent.",
  ],
  },
  ares: {
    background: '/assets/FoxNAres.png',
    books: [
      ['/assets/books/BattleRoyale-Ares.jpg', 'ARES : Le titre parle de lui-même…des collégiens kidnappés et envoyés sur une île pour s’entre-tuer jusqu’à ce qu’il n’en reste plus qu’un. Les morts dans le roman sont particulièrement violentes et sanglantes.']
    ],
    lines: [
  "ARES : Je suis Arès, dieu de la guerre et de la violence.",
  "ARES : Pourquoi viens-tu troubler ma paix ?",
  "FOX : Je cherche des réponses, Arès. J'ai entendu parler de ta puissance et de ta force.",
  "ARES : La puissance et la force sont des qualités que tu dois apprendre à maîtriser. Mais dis-moi, qu'est-ce que tu cherches vraiment ?",
  "ARES : Tu sembles perdu, petit renard. Tu dois apprendre à te connaître avant de chercher des réponses ailleurs.",
],

  },
  hephaistos: {
    background: '/assets/FoxNHephaistos.png',
    books: [
      ['/assets/books/JeReinventeraiLaPluie-Hephaistos.jpg', 'HEPHAISTOS : Le personnage principal est souffleur de verre.']
    ],
lines: [
  "HEPHAISTOS : Je suis Héphaïstos, maître des forges et bâtisseur d’idées.",
  "HEPHAISTOS : Chaque livre ici a été façonné. Rien n’est né du hasard.",
  "FOX : Puis-je apprendre à construire mes pensées, moi aussi ?",
  "HEPHAISTOS : Bien sûr. Lis, casse, répare.",
  "HEPHAISTOS : Le savoir se forge comme le fer : au feu et à la patience.",
],

  },
  aphrodite: {
    background: '/assets/FoxNAphrodite.png',
    books: [
      ['/assets/books/LePalaisdEros-Aphrodite.jpg', 'APHRODITE : Ce livre est une réécriture/reinterpretation du mythe de Éros et Psyché. Dans ce livre Psyché découvre les plaisirs dit interdit de l’homosexualité avec éros qui bien que présenté.e comme non binaire est désignée comme lesbienne. De plus, Aphrodite est un personnage important dans l’histoire.'],
      ['/assets/books/LesLiaisonsDangereuses-Aphrodite.webp', 'APHRODITE : TODO']
    ],
lines: [
  "APHRODITE : Je suis Aphrodite, déesse de l’amour, de la beauté et du désir.",
  "APHRODITE : Que viens-tu chercher avec ces yeux si pleins ?",
  "FOX : Une émotion peut-être… quelque chose qui me bouleverse.",
  "APHRODITE : Bonne réponse.",
  "APHRODITE : Laisse-toi toucher. C’est ainsi que commence le vrai voyage.",
],

  },
  demeter: {
    background: '/assets/FoxNDemeter.png',
    books: [
      ['/assets/books/LesMurmuresDeLaTerre-Demeter.jpg', 'DEMETER : Le personnage principal (Alex) fait de la permaculture, c\'est une technique d\'agriculture qui consiste à protéger les écosystèmes naturels et à récupérer seulement ce que la terre veut bien donner.']
    ],
lines: [
  "DEMETER : Je suis Déméter, gardienne des moissons et de la terre nourricière.",
  "DEMETER : Tu sens la forêt… c’est bien.",
  "FOX : Je cultive la curiosité. Elle pousse lentement.",
  "DEMETER : Comme tout ce qui vaut la peine.",
  "DEMETER : Lis doucement, petit renard. Sinon tu ne récolteras que du vent.",
],

  },
  apollon: {
    background: '/assets/FoxNApollon.png',
    books: [
      ['assets/books/CALLMEBYYOURNAME-Apollon.jpg', 'APOLLON : L\'action du livre se déroule en Italie en plein été donc le soleil est au rendez-vous ! De plus, Elio joue du piano et avec Oliver, ils se rendent dans des lieux culturels, notamment des sites de fouilles archéologiques et la lecture est un élément central du livre. Enfin, j\'ai trouvé la plume de l\'auteur très poétique, il y a une certaine prose dans son écriture qui est très jolie et qui m\'a émue. J\'ai l\'impression aussi qu\'il y a un côté assez prophétique à leur histoire d\'amour car cela ne peut pas durer éternellement, seulement le temps d\'un été car ce n\'est pas le bon moment mais que ce n\'est pas fini et que leurs chemins se rencontreront de nouveau pour ne plus jamais se quitter.'],
      ['assets/books/LaMaledictiondelOracle-Apollon.jpg', 'APOLLON : une réécriture du mythe de Cassandre, à qui le dieu lui attribua le don de dire l’avenir ayant refusé ses avances, il l’a maudit , de sorte que ses prédictions ne soient jamais crues j’ai trop hâte de commencer cette lecture !!']
    ],
lines: [
  "APOLLON : Je suis Apollon, dieu du soleil, des arts et des oracles.",
  "APOLLON : Ah, un pelage flamboyant parmi mes rayons !",
  "FOX : Je cherche la beauté des mots et la lumière du sens.",
  "APOLLON : Alors écoute, autant que tu lis.",
  "APOLLON : L’harmonie se cache dans les silences entre les pages.",
],

  },
  artemis: {
    background: '/assets/FoxNArtemis.png',
    books: [
      ['/assets/books/PleinCiel-Artemis.jpg', 'ARTEMIS : Le personnage principal Ivoire est souvent associé à la lune à cause de son teint pâle ( et d’autres mais spoil ) et c’est même un de ces prénoms, cela me fait penser à Artémis car elle est une des trois divinité de la lune et à un très grand lien avec celle-ci.']
    ],
lines: [
  "ARTEMIS : Je suis Artémis, déesse de la chasse et des secrets nocturnes.",
  "ARTEMIS : Tu marches léger. Très bien.",
  "FOX : Je cherche la vérité. On m’a dit qu’elle courait vite.",
  "ARTEMIS : Elle fuit les sabots lourds et les cœurs bruyants.",
  "ARTEMIS : Sois patient. Tire seulement quand tu es prêt.",
],

  },
  hermes: {
    background: '/assets/FoxNHermes.png',
    books: [
      ['/assets/books/Daevabad-Hermes.webp', 'HERMES : Hermès ressemble beaucoup au personnage de Nahri. En effet, c\'est une voleuse qui aime l\'argent et aime marchander. Hermès est le dieu du commerce et des voleurs. Il est comme Nahri considéré comme intelligent, espiègle.De plus, il est le dieu des voyages et durant tout le livre, on suit le voyage de Nahri que ça soit au Caire, à Daevabad ou encore dans le désert.'],
      ['/assets/books/Bride-Hermes.jpg', 'HERMES : TODO']
    ],
lines: [
  "HERMES : Je suis Hermès, messager ailé et passeur de frontières.",
  "HERMES : Rapide, hein ? Mais pas assez pour lire entre les lignes.",
  "FOX : J’ai appris à suivre les traces, même dans le vent.",
  "HERMES : Parfait. Alors cherche les messages cachés, les notes de bas de page oubliées.",
  "HERMES : Là se trouve l’aventure… et parfois, la clef.",
],

  },
  dionysos: {
    background: '/assets/FoxNDionysos.png',
    books: [
      ['/assets/books/Leprincecruel-Dionysos.jpg', 'DIONYSOS : Cardan est un personnage qui ressemble beaucoup à Dionysos. Il aime faire la fête, boire, provoquer les autres et cacher ses vrais sentiments. Il est à la fois séduisant, dangereux et changeant. Comme Dionysos, il cherche sa place en jouant avec les règles.']
    ],
lines: [
  "DIONYSOS : Je suis Dionysos, dieu du vin, de la fête et des mystères.",
  "DIONYSOS : Quelle tête sérieuse ! Tu crois que tout ici est logique ?",
  "FOX : Je croyais que les livres demandaient du silence.",
  "DIONYSOS : Erreur ! Certains chantent, d’autres dansent.",
  "DIONYSOS : Laisse-toi perdre. Tu verras : on lit mieux en étant un peu ivre.",
],

  },
  hades: {
    background: '/assets/FoxNHades.png',
    books: [
      ['/assets/books/COLLECTEDREGRETSOFCLOVER-Hades.jpg', 'HADES : La vie de Clover, protagoniste de l\'histoire tourne autour d\'une seule chose : la mort. Clover est en effet une doula de fin de vie (ou thanadoula). Alors que Hadès règne sur le royaume des morts avec autorité, Clover, elle, accompagne les mourants et les aide à accepter leur départ.'],
      ['/assets/books/LeGrandvoyage-Hades.jpg', 'HADES : L’intrigue du livre tourne autour d’une légende bretonne, celle de l’Ankou. L’Ankou vient vous chercher à votre dernier souffle et vous emmène, dans sa charrette, au pays des morts, une sorte de purgatoire. Un jeune garçon et ses amis décident de s’y rendre afin d’y retrouver la mère du personnage principal. C’est un livre jeunesse qui parle de la perte d’un être cher et du deuil des proches.']
    ],
lines: [
  "HADES : Je suis Hadès, roi des ombres et gardien des vérités oubliées.",
  "HADES : Tu es encore vivant ? Intéressant.",
  "FOX : Je n’ai pas peur du noir. J’y vois même plutôt bien.",
  "HADES : Alors lis… mais sache que certaines vérités n’aiment pas être réveillées.",
  "HADES : Tu pourrais y laisser plus qu’un poil ou deux.",
],

  },
  owlEnd: {
    background: '/assets/FoxNOwl.png',
    lines: [
      "OWL : Tu as rencontré les dieux, jeune renard. As-tu trouvé ce que tu cherchais ?",
      "OWL : Les dieux sont puissants, mais n'oublie pas que la véritable force réside en toi.",
      "OWL : N'hésite pas à revenir si tu as besoin de plus de connaissances. La bibliothèque d'Annabeth est toujours ouverte pour ceux qui cherchent la vérité.",
      "OWL : Maintenant, pars et utilise ce que tu as appris pour faire le bien dans le monde.",
    ],
  },
};

export default dialogues;