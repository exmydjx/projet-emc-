let map = null;
let isAddingMode = false;

// Données élargies des lycées représentant les grands systèmes scolaires mondiaux
const zonesMonde = [
    // --- LA RÉUNION : SAINT-DENIS ---
    {
        id: "memona_hintermann",
        name: "Lycée Mémona Hintermann-Affejee (Saint-Denis)",
        lon: 55.4852, lat: -20.8988, zoom: 15, pitch: 60, bearing: -20,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée d'enseignement général et technologique à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "leconte_de_lisle",
        name: "Lycée Leconte de Lisle (Saint-Denis)",
        lon: 55.4475, lat: -20.8805, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée historique de Saint-Denis proposant des CPGE célèbres.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "lislet_geoffroy",
        name: "Lycée Lislet Geoffroy (Saint-Denis)",
        lon: 55.4610, lat: -20.8890, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général, technologique et professionnel à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bellepierre",
        name: "Lycée Bellepierre (Saint-Denis)",
        lon: 55.4480, lat: -20.8950, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique sur les hauteurs de Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "georges_brassens",
        name: "Lycée Georges Brassens (Saint-Denis)",
        lon: 55.4780, lat: -20.8980, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "isnelle_amelin",
        name: "Lycée Professionnel Isnelle Amelin (Saint-Denis)",
        lon: 55.4880, lat: -20.8920, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel orienté services et soins.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "julien_de_rochecouste",
        name: "Lycée Julien de Rontaunay (Saint-Denis)",
        lon: 55.4430, lat: -20.8790, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel tertiaire à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "levavasseur",
        name: "Lycée Catholique Levavasseur (Saint-Denis - Privé)",
        lon: 55.4520, lat: -20.8830, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Établissement privé sous contrat à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "saint_michel",
        name: "Lycée Saint-Michel (Saint-Denis - Privé)",
        lon: 55.4550, lat: -20.8810, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique privé à Saint-Denis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },

    // --- LA RÉUNION : SAINTE-MARIE & SAINTE-SUZANNE ---
    {
        id: "lepervanche_sainte_marie",
        name: "Lycée Lepervanche / Le Verger (Sainte-Marie)",
        lon: 55.5510, lat: -20.8960, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique Le Verger à Sainte-Marie.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bel_air",
        name: "Lycée Bel Air (Sainte-Suzanne)",
        lon: 55.6083, lat: -20.9061, zoom: 15, pitch: 60, bearing: -20,
        timezone: "UTC+4", schedule: "07:27 - 17:00",
        details: "Lycée polyvalent situé à Bel Air, Sainte-Suzanne.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/belair.jpg"
    },

    // --- LA RÉUNION : SAINT-ANDRÉ & SAINT-BENOÎT ---
    {
        id: "sarda_garriga",
        name: "Lycée Sarda Garriga (Saint-André)",
        lon: 55.6520, lat: -20.9600, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique de Saint-André.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "jean_perrin",
        name: "Lycée Jean Perrin (Saint-André)",
        lon: 55.6480, lat: -20.9550, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent et industriel à Saint-André.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "mahabo",
        name: "Lycée Professionnel Jean-Baptiste Le Taillandier (Saint-André)",
        lon: 55.6550, lat: -20.9630, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel privé de la Côte Est.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bouvet",
        name: "Lycée Amiral Bouvet (Saint-Benoît)",
        lon: 55.7120, lat: -21.0340, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent historique de Saint-Benoît.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "patu_de_rosemont",
        name: "Lycée Patu de Rosemont (Saint-Benoît)",
        lon: 55.7180, lat: -21.0380, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel et des métiers du bâtiment/tertiaire.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bras_panon",
        name: "Lycée Paul Rosélé Chim (Bras-Panon)",
        lon: 55.6780, lat: -20.9960, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent de Bras-Panon.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },

    // --- LA RÉUNION : OUEST (POSSESSION, LE PORT, SAINT-PAUL) ---
    {
        id: "moulin_joli",
        name: "Lycée Moulin Joli (La Possession)",
        lon: 55.3350, lat: -20.9330, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent de La Possession.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "jean_hinglo",
        name: "Lycée Jean Hinglo (Le Port)",
        lon: 55.2950, lat: -20.9380, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique du Port.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "lepervanche_port",
        name: "Lycée Professionnel Léon de Lepervanche (Le Port)",
        lon: 55.2980, lat: -20.9430, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Grand lycée professionnel maritime et industriel au Port.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "leconte_de_lisle_stpaul",
        name: "Lycée Leconte de Lisle / Louis Payen (Saint-Paul)",
        lon: 55.2710, lat: -21.0090, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent Louis Payen à Saint-Paul.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "evariste_de_parny",
        name: "Lycée Évariste de Parny (Saint-Paul - Plateau Caillou)",
        lon: 55.2850, lat: -21.0250, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique sur le plateau de Saint-Paul.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "st_paul_4",
        name: "Lycée Saint-Paul IV (Saint-Paul - La Plaine)",
        lon: 55.3050, lat: -20.9950, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent de la Plaine Saint-Paul.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "vue_belle",
        name: "Lycée Professionnel Vue Belle (Saint-Paul - La Saline)",
        lon: 55.2680, lat: -21.0780, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée des métiers de la restauration et du tourisme.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "maison_blanche",
        name: "Lycée Agricole Émile Boyer de la Giroday (Saint-Paul)",
        lon: 55.2920, lat: -21.0350, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée d'enseignement général et technologique agricole.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "st_joseph_cluny",
        name: "Lycée Saint-Joseph de Cluny (Saint-Paul - Privé)",
        lon: 55.2700, lat: -21.0110, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée privé général et technologique en centre-ville de Saint-Paul.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },

    // --- LA RÉUNION : SUD (TROIS-BASSINS, SAINT-LEU, SAINT-LOUIS, SAINT-PIERRE, LE TAMPON, SAINT-JOSEPH) ---
    {
        id: "trois_bassins",
        name: "Lycée de Trois-Bassins",
        lon: 55.2580, lat: -21.1060, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique surplombant la côte ouest.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "pointe_des_chateaux",
        name: "Lycée Stella (Saint-Leu)",
        lon: 55.2890, lat: -21.1620, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent de Saint-Leu à proximité du musée Stella Matutina.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "antoine_roussin",
        name: "Lycée Antoine Roussin (Saint-Louis)",
        lon: 55.4080, lat: -21.2880, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique de Saint-Louis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "victor_schoelcher",
        name: "Lycée Professionnel Victor Schœlcher (Saint-Louis)",
        lon: 55.4120, lat: -21.2850, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel des métiers de l'industrie et du secteur tertiaire.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bois_joly_potier",
        name: "Lycée Boisjoly Potier (Le Tampon)",
        lon: 55.5180, lat: -21.2780, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Grand lycée général et technologique du Tampon.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "roland_garros",
        name: "Lycée Roland Garros (Le Tampon)",
        lon: 55.5120, lat: -21.2820, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent historique disposant de nombreuses filières et CPGE.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "pierre_poivre",
        name: "Lycée Pierre Poivre (Saint-Pierre)",
        lon: 55.4780, lat: -21.3320, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique de Saint-Pierre.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "hugues_lapaire",
        name: "Lycée Professionnel François de Mahy (Saint-Pierre)",
        lon: 55.4720, lat: -21.3380, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:00",
        details: "Lycée professionnel du centre-ville de Saint-Pierre.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "jean_joly",
        name: "Lycée Jean Joly (Saint-Louis - Rivière Saint-Louis)",
        lon: 55.4410, lat: -21.2610, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent de la Rivière Saint-Louis.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "parietaria",
        name: "Lycée Saint-Charles (Saint-Pierre - Privé)",
        lon: 55.4750, lat: -21.3350, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée général et technologique privé sous contrat à Saint-Pierre.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "prive_vincendo",
        name: "Lycée de Vincendo (Saint-Joseph)",
        lon: 55.6720, lat: -21.3730, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent situé à l'entrée du Sud Sauvage à Vincendo.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "pierre_roselli",
        name: "Lycée Paul Langevin (Saint-Joseph)",
        lon: 55.6180, lat: -21.3780, zoom: 15, pitch: 60, bearing: 0,
        timezone: "UTC+4", schedule: "07:30 - 17:30",
        details: "Lycée polyvalent principal de la ville de Saint-Joseph.",
        vacances: "Vacances australes (décembre-janvier).",
        image: "images/emploie du temps.jpg"
    },
    { 
        id: "algerie", 
        name: "Lycée en Algérie (Alger)", 
        lon: 3.0588, lat: 36.7538, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1", 
        schedule: "08:00 - 16:30", 
        details: "Semaine scolaire du dimanche au jeudi (vendredi et samedi chômés), préparation du baccalauréat national.",
        vacances: "Vacances d'hiver (décembre), de printemps (mars) et grandes vacances d'été (juillet-septembre).",
        image: "images/Algérie.jpg"
    },
    { 
        id: "tunisie", 
        name: "Lycée en Tunisie (Tunis)", 
        lon: 10.1815, lat: 36.8065, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1", 
        schedule: "08:00 - 17:00", 
        details: "Focus sur les filières scientifiques, littéraires et économiques pour le baccalauréat tunisien.",
        vacances: "Pauses de mi-trimestre (novembre, février) et grandes vacances de juin à septembre.",
        image: "images/Tunisie.jpg"
    },
    { 
        id: "cote_ivoire", 
        name: "Lycée en Côte d'Ivoire (Abidjan)", 
        lon: -4.0083, lat: 5.3600, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+0", 
        schedule: "07:30 - 17:00", 
        details: "Système calqué sur le modèle francophone, cours intenses avec pause méridienne.",
        vacances: "Vacances de Noël, Pâques et grandes vacances d'été de juillet à octobre.",
        image: "images/cote d'ivoir.jpg"
    },
    { 
        id: "maurice", 
        name: "Lycée à Île Maurice (Port-Louis - College)", 
        lon: 57.5012, lat: -20.1609, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+4", 
        schedule: "08:00 - 14:30", 
        details: "Système inspiré du modèle britannique (HSC/Cambridge), port de l'uniforme.",
        vacances: "Trois trimestres scolaires avec grandes vacances en novembre-décembre.",
        image: "images/maurice.jpg"
    },
    { 
        id: "madagascar", 
        name: "Lycée à Madagascar (Antananarivo)", 
        lon: 47.5079, lat: -18.8792, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+3", 
        schedule: "07:30 - 17:00", 
        details: "Rythme avec coupure méridienne, préparation du baccalauréat.",
        vacances: "Vacances de Toussaint, Noël, Pâques et grandes vacances de juillet à octobre.",
        image: "images/madagascar.jpg"
    },
    { 
        id: "inde", 
        name: "Lycée en Inde (New Delhi - Higher Secondary)", 
        lon: 77.2090, lat: 28.6139, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+5:30", 
        schedule: "08:00 - 14:00", 
        details: "Journée continue, uniforme strict et préparation intensive aux examens du CBSE/ICSE.",
        vacances: "Vacances d'été (mai-juin) pour éviter les fortes chaleurs et vacances de Diwali.",
        image: "images/inde.jpg"
    },
    { 
        id: "vietnam", 
        name: "Lycée au Viêt Nam (Hanoï - Trường Trung học phổ thông)", 
        lon: 105.8342, lat: 21.0278, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+7", 
        schedule: "07:00 - 11:30 / 13:00 - 17:00", 
        details: "Début des cours très tôt le matin, salutation du drapeau le lundi matin et uniforme d'inspiration traditionnelle ou moderne.",
        vacances: "Nouvel An lunaire (Tết) en janvier/février et grandes vacances de juin à août.",
        image: "images/vietnam.jpg"
    },
    { 
        id: "turquie", 
        name: "Lycée en Turquie (Istanbul - Lise)", 
        lon: 28.9784, lat: 41.0082, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+3", 
        schedule: "08:30 - 16:00", 
        details: "Chant de l'hymne national le lundi matin et le vendredi soir, préparation intense à l'examen d'entrée à l'université (YKS).",
        vacances: "Pause de mi-semestre (janvier-février) et vacances d'été de juin à septembre.",
        image: "images/Turquie.jpg"
    },
    { 
        id: "nouvelle_zelande", 
        name: "Lycée en Nouvelle-Zélande (Auckland - High School)", 
        lon: 174.7633, lat: -36.8485, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+12 / UTC+13", 
        schedule: "08:45 - 15:15", 
        details: "Système NCEA, grande importance accordée aux sports d'équipe, aux arts et aux activités de plein air.",
        vacances: "Quatre périodes de cours (Terms) avec les grandes vacances d'été en décembre-janvier.",
        image: "images/nouvelle zélande.jpg"
    },
    { 
        id: "perou", 
        name: "Lycée au Pérou (Lima - Secundaria)", 
        lon: -77.0428, lat: -12.0464, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-5", 
        schedule: "07:30 - 14:00", 
        details: "Journée continue du matin, uniforme scolaire obligatoire pour la plupart des établissements publics et privés.",
        vacances: "Vacances de mi-année en juillet et grandes vacances d'été austral de janvier à mars.",
        image: "images/perou.jpg"
    },
    { 
        id: "finlande", 
        name: "Lycée en Finlande (Helsinki - Lukio)", 
        lon: 24.9384, lat: 60.1699, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+2 / UTC+3", 
        schedule: "08:15 - 14:45", 
        details: "Emplois du temps très modulaires, grande autonomie laissée aux lycéens et pas d'examens nationaux avant la fin du lycée.",
        vacances: "Vacances d'automne (octobre), Noël, vacances de ski (février) et été de juin à août.",
        image: "images/finlande.jpg"
    },
    { 
        id: "espagne", 
        name: "Lycée en Espagne (Madrid - Bachillerato)", 
        lon: -3.7038, lat: 40.4168, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1 / UTC+2", 
        schedule: "08:00 - 14:30", 
        details: "Journée continue (Jornada continua) sans pause repas à midi, les élèves mangent chez eux à 15h.",
        vacances: "Noël, Semaine Sainte (Pâques) et longues vacances d'été de mi-juin à mi-septembre.",
        image: "images/espagne.jpg"
    },
    { 
        id: "senegal", 
        name: "Lycée au Sénégal (Dakar)", 
        lon: -17.4677, lat: 14.7167, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+0", 
        schedule: "08:00 - 18:00", 
        details: "Rythme rigoureux avec pause déjeuner prolongée, préparation du baccalauréat général et technique.",
        vacances: "Vacances de Noël, Pâques et grandes vacances de fin juillet à octobre.",
        image: "images/sénégal.jpg"
    },
    { 
        id: "mexique", 
        name: "Lycée au Mexique (Mexico - Preparatoria)", 
        lon: -99.1332, lat: 19.4326, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-6", 
        schedule: "07:00 - 13:00 / 14:00 - 20:00", 
        details: "Système souvent divisé en deux équipes (Turno Matutino et Turno Vespertino) selon la plage horaire.",
        vacances: "Vacances d'hiver (décembre), Semaine Sainte (mars/avril) et vacances d'été (juillet-août).",
        image: "images/mexique.png"
    },
    { 
        id: "singapour", 
        name: "Lycée à Singapour (Junior College)", 
        lon: 103.8198, lat: 1.3521, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+8", 
        schedule: "07:30 - 16:30", 
        details: "Standard académique très exigeant, préparation aux A-Levels de Cambridge et activités CCA obligatoires.",
        vacances: "Quatre périodes avec grandes vacances en novembre-décembre et mi-année en juin.",
        image: "images/singapour.jpg"
    },
    { 
        id: "egypte", 
        name: "Lycée en Égypte (Le Caire - Thanawya Amma)", 
        lon: 31.2357, lat: 30.0444, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+2 / UTC+3", 
        schedule: "07:30 - 14:00", 
        details: "Cours le matin suivis souvent de cours particuliers l'après-midi pour l'examen du Thanawya Amma.",
        vacances: "Vacances d'hiver (janvier/février) et grandes vacances d'été de juin à septembre.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: "argentine", 
        name: "Lycée en Argentine (Buenos Aires - Secundaria)", 
        lon: -58.3816, lat: -34.6037, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-3", 
        schedule: "07:45 - 13:00", 
        details: "Demi-journée de cours, uniforme ou blouse blanche (guardapolvo) selon les établissements.",
        vacances: "Vacances d'hiver en juillet (2 semaines) et grandes vacances d'été de mi-décembre à mars.",
        image: "images/argentine.jpg"
    },
    { 
        id: "rome", 
        name: "Lycée en Italie (Rome)", 
        lon: 12.4964, lat: 41.9028, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1 / UTC+2", 
        schedule: "08:00 - 13:30",
        details: "Cours principalement le matin, souvent du lundi au samedi.",
        vacances: "Noël, Pâques et de longues vacances d'été de juin à septembre.",
        image: "images/italie.jpg"
    },
    { 
        id: "estonie", 
        name: "Lycée en Estonie (Tallinn - Gümnaasium)", 
        lon: 24.7536, lat: 59.4370, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+2 / UTC+3", 
        schedule: "09:00 - 14:15",
        details: "Enseignement très axé sur le numérique, le développement d'autonomie et les technologies.",
        vacances: "Cinq périodes de vacances (octobre, décembre, février, avril et été de juin à août).",
        image: "images/estonie.png"
    },
    { 
        id: "allemagne", 
        name: "Lycée en Allemagne (Berlin - Gymnasium)", 
        lon: 13.4050, lat: 52.5200, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1 / UTC+2", 
        schedule: "08:00 - 13:30", 
        details: "Journée de cours concentrée le matin, activités personnelles ou clubs l'après-midi.",
        vacances: "Vacances d'été (6 semaines, dattes glissantes par région), automne, Noël et Pâques.",
        image: "images/allemagne.png"
    },
    { 
        id: "angleterre", 
        name: "Lycée en Angleterre (Londres - Sixth Form)", 
        lon: -0.1276, lat: 51.5074, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+0 / UTC+1", 
        schedule: "08:45 - 15:30", 
        details: "Spécialisation poussée sur 3 à 4 matières (A-Levels) et uniforme obligatoire.",
        vacances: "Trois trimestres séparés par des Half-Term (octobre, février, mai) et vacances d'été.",
        image: "images/Angleterre.png"
    },
    { 
        id: "maroc", 
        name: "Lycée au Maroc (Casablanca)", 
        lon: -7.5898, lat: 33.5731, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1", 
        schedule: "08:30 - 17:00", 
        details: "Double pause dans la journée, accent mis sur les langues et les sciences.",
        vacances: "Vacances intermédiaires toutes me 7 semaines et vacances d'été en juillet-août.",
        image: "images/maroc.jpg"
    },
    { 
        id: "coree", 
        name: "Lycée en Corée du Sud (Séoul - High School)", 
        lon: 126.9780, lat: 37.5665, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+9", 
        schedule: "08:00 - 21:00", 
        details: "Journées très longues incluant l'étude du soir (Yaja) et les cours du soir (Hagwon).",
        vacances: "Vacances d'été (juillet-août) et vacances d'hiver (janvier-février).",
        image: "images/corée du sud.jpg"
    },
    { 
        id: "paris", 
        name: "Lycée en France (Paris)", 
        lon: 2.3522, lat: 48.8566, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1 / UTC+2", 
        schedule: "08:00 - 18:00",
        details: "Journées chargées, spécialités et préparation du baccalauréat.",
        vacances: "Toussaint, Noël, Hiver, Printemps et grandes vacances en juillet-août.",
        image: "images/France.png"
    },
    { 
        id: "usa", 
        name: "Lycée aux États-Unis (New York - High School)", 
        lon: -74.0060, lat: 40.7128, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-5 / UTC-4", 
        schedule: "07:30 - 14:30",
        details: "Journée continue, même emploi du temps chaque jour, fort esprit parascolaire.",
        vacances: "Summer break (juin à septembre), Thanksgiving, Noël et Spring break.",
        image: "images/Etat unis.png"
    },
    { 
        id: "pekin", 
        name: "Lycée en Chine (Pékin - Gaozhong)", 
        lon: 116.4074, lat: 39.9042, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+8", 
        schedule: "07:00 - 20:40",
        details: "Journées très intenses, préparation intensive au concours national (Gaokao).",
        vacances: "Nouvel An Chinois (hiver) et vacances d'été en juillet-août.",
        image: "images/chine.png"
    },
    { 
        id: "sydney", 
        name: "Lycée en Australie (Sydney - High School)", 
        lon: 151.2093, lat: -33.8688, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+10 / UTC+11", 
        schedule: "08:30 - 15:00",
        details: "Calendrier inversé (hémisphère sud), fort accent sur le sport et les activités nautiques.",
        vacances: "Quatre trimestres, avec les grandes vacances d'été austral en décembre et janvier.",
        image: "images/australie.jpg"
    },
    { 
        id: "saopaulo", 
        name: "Lycée au Brésil (São Paulo - Ensino Médio)", 
        lon: -46.6333, lat: -23.5505, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-3", 
        schedule: "07:00 - 12:30",
        details: "Cours principalement le matin en raison de la chaleur, autonomie l'après-midi.",
        vacances: "Grandes vacances de décembre à février (été brésilien) et mois de juillet.",
        image: "images/brésil.jpg"
    },
    { 
        id: "lecap", 
        name: "Lycée en Afrique du Sud (Le Cap)", 
        lon: 18.4241, lat: -33.9249, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+2", 
        schedule: "08:00 - 14:30",
        details: "Système basé sur 4 termes scolaires, uniforme obligatoire strict.",
        vacances: "Vacances courtes entre chaque terme (avril, juillet, octobre) et été austral en décembre-janvier.",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: "norvege", 
        name: "Lycée en Norvège (Oslo)", 
        lon: 10.7522, lat: 59.9139, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+1 / UTC+2", 
        schedule: "08:00 - 15:00",
        details: "Ambiance de travail détendue, forte collaboration et activités en plein air.",
        vacances: "Vacances d'automne (octobre), Noël, d'hiver (février), Pâques et été de mi-juin à août.",
        image: "images/norvège.png"
    },
    { 
        id: "montreal", 
        name: "Lycée / CÉGEP au Canada (Montréal)", 
        lon: -73.5673, lat: 45.5017, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC-5 / UTC-4", 
        schedule: "08:30 - 15:30",
        details: "Alternance de blocs de cours et fort engagement parascolaire.",
        vacances: "Semaine de relâche en mars, Noël et été de fin juin à fin août.",
        image: "images/Canada.jpg"
    },
    // --- OUTRE-MER & TERRITOIRES FRANÇAIS ---
    {
        id: "mayotte",
        name: "Lycée à Mayotte (Mamoudzou)",
        lon: 45.2279, lat: -12.7806, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+3",
        schedule: "07:00 - 16:00",
        details: "Rythme adapté au climat avec un début de journée très matinal.",
        vacances: "Vacances calquées sur la zone avec ajustements pour la période d'été austral.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "martinique",
        name: "Lycée en Martinique (Fort-de-France)",
        lon: -61.0588, lat: 14.6161, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-4",
        schedule: "07:00 - 16:30",
        details: "Cours tôt le matin, préparation au baccalauréat général, technologique et professionnel.",
        vacances: "Vacances Carnaval, Toussaint, Noël, Pâques et grandes vacances d'été.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "guadeloupe",
        name: "Lycée en Guadeloupe (Pointe-à-Pitre)",
        lon: -61.5339, lat: 16.2411, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-4",
        schedule: "07:00 - 16:30",
        details: "Emploi du temps adapté au climat tropical avec une pause méridienne.",
        vacances: "Vacances de Toussaint, Noël, Carnaval, Pâques et grandes vacances d'été.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "guyane",
        name: "Lycée en Guyane (Cayenne)",
        lon: -52.3333, lat: 4.9333, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-3",
        schedule: "07:15 - 16:30",
        details: "Début des cours très tôt le matin pour éviter la chaleur de l'après-midi.",
        vacances: "Vacances de Toussaint, Noël, Carnaval, Pâques et grandes vacances.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "nouvelle_caledonie",
        name: "Lycée en Nouvelle-Calédonie (Nouméa)",
        lon: 166.4416, lat: -22.2758, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+11",
        schedule: "07:30 - 16:00",
        details: "Rythme de l'hémisphère sud avec une année scolaire de février à décembre.",
        vacances: "Grandes vacances en décembre-janvier et pauses inter-périodes toutes les 7 semaines.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "corse",
        name: "Lycée en Corse (Ajaccio)",
        lon: 8.7386, lat: 41.9272, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:00 - 17:30",
        details: "Système éducatif français avec enseignement optionnel de la langue et culture corse.",
        vacances: "Calendrier scolaire national (Toussaint, Noël, Hiver, Printemps, Été).",
        image: "images/emploie du temps.jpg"
    },

    // --- AMÉRIQUE DE L'OUEST & DU SUD ---
    {
        id: "haiti",
        name: "Lycée en Haïti (Port-au-Prince)",
        lon: -72.3388, lat: 18.5944, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-5",
        schedule: "07:30 - 13:30",
        details: "Cours dispensés le matin, préparation au baccalauréat haïtien.",
        vacances: "Vacances de Noël, Pâques et grandes vacances de juillet à septembre.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "colombie",
        name: "Lycée en Colombie (Bogota)",
        lon: -74.0721, lat: 4.7110, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-5",
        schedule: "07:00 - 15:00",
        details: "Journée continue du matin, uniformes scolaires très répandus.",
        vacances: "Calendrier A (juin-juillet) ou Calendrier B (décembre-janvier) selon les établissements.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "chili",
        name: "Lycée au Chili (Santiago)",
        lon: -70.6693, lat: -33.4489, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC-3 / UTC-4",
        schedule: "08:00 - 16:00",
        details: "Journée complète avec focus sur la préparation au concours PAES.",
        vacances: "Vacances d'hiver en juillet (2 semaines) et grandes vacances d'été de janvier à mars.",
        image: "images/emploie du temps.jpg"
    },
    { 
        id: "dubai", 
        name: "Lycée Français International de Dubaï", 
        lon: 55.2708, lat: 25.2048, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+4", 
        schedule: "07:30 - 15:00", 
        details: "Semaine scolaire du lundi au vendredi (vendredi après-midi libre selon les directives locales).",
        vacances: "Vacances d'hiver (décembre), Spring break (mars) et grandes vacances d'été (juillet-août).",
        image: "images/dubai.jpg"
    },

    // --- EUROPE ---
    {
        id: "roumanie",
        name: "Lycée en Roumanie (Bucarest - Liceu)",
        lon: 26.1025, lat: 44.4323, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+2 / UTC+3",
        schedule: "08:00 - 14:00",
        details: "Enseignement axé sur la préparation du Bacalaureat national.",
        vacances: "Vacances d'automne, Noël, février, Pâques et grandes vacances de juin à septembre.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "pologne",
        name: "Lycée en Pologne (Varsovie - Liceum)",
        lon: 21.0122, lat: 52.2297, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:00 - 15:00",
        details: "Cycle de 4 ans préparant à la Matura (examen de fin d'études secondaires).",
        vacances: "Vacances d'hiver (2 semaines en janvier/février), Pâques et grandes vacances d'été.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "grece",
        name: "Lycée en Grèce (Athènes - Lykeio)",
        lon: 23.7275, lat: 37.9838, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+2 / UTC+3",
        schedule: "08:15 - 14:00",
        details: "Cours terminés en début d'après-midi, suivi d'études privées (Frontistirio) le soir.",
        vacances: "Noël, Pâques (2 semaines) et longues vacances d'été de mi-juin à septembre.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "pays_bas",
        name: "Lycée aux Pays-Bas (Amsterdam - VWO/HAVO)",
        lon: 4.9041, lat: 52.3676, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:30 - 15:30",
        details: "Orientation précoce selon les profils (VWO, HAVO) et forte utilisation du vélo.",
        vacances: "Vacances étalées par régions (Nord, Centre, Sud) pendant l'été et les vacances courtes.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "suede",
        name: "Lycée en Suède (Stockholm - Gymnasieskola)",
        lon: 18.0686, lat: 59.3293, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:15 - 15:00",
        details: "Repas chaud gratuit le midi, travail axé sur la responsabilité individuelle et les outils numériques.",
        vacances: "Vacances d'automne, Noël, vacances de sport (février), Pâques et été de juin à août.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "bulgarie",
        name: "Lycée en Bulgarie (Sofia - Gimnaziya)",
        lon: 23.3219, lat: 42.6977, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+2 / UTC+3",
        schedule: "07:30 - 13:30 / 13:30 - 19:30",
        details: "Certains lycées utilisent le système à deux équipes (matin / après-midi).",
        vacances: "Noël, vacances de mi-semestre en février, Pâques et vacances d'été de juin à septembre.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "autriche",
        name: "Lycée en Autriche (Vienne - Gymnasium)",
        lon: 16.3738, lat: 48.2082, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:00 - 14:00",
        details: "Fin des cours en début d'après-midi et préparation à la Matura.",
        vacances: "Vacances de la Toussaint, Noël, vacances de semestre (février), Pâques et été.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "croatie",
        name: "Lycée en Croatie (Zagreb - Gimnazija)",
        lon: 15.9780, lat: 45.8150, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:00 - 14:00",
        details: "Préparation à la Državna Matura (examen national de fin d'études).",
        vacances: "Vacances d'hiver (décembre-janvier), vacances de printemps et vacances d'été de juin à septembre.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "suisse",
        name: "Lycée en Suisse (Zürich / Genève - Gymnase / Collège)",
        lon: 6.1432, lat: 46.2044, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+1 / UTC+2",
        schedule: "08:00 - 17:00",
        details: "Exigence académique élevée pour l'obtention de la Maternité / Matures cantonales.",
        vacances: "Vacances selon les cantons (d'automne, de Noël, de relâche en février, de Pâques et d'été).",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "portugal",
        name: "Lycée au Portugal (Lisbonne - Secundário)",
        lon: -9.1393, lat: 38.7223, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+0 / UTC+1",
        schedule: "08:30 - 16:30",
        details: "Préparation des examens nationaux pour l'accès à l'enseignement supérieur.",
        vacances: "Noël, Carnaval, Pâques et longues vacances d'été de fin juin à mi-septembre.",
        image: "images/emploie du temps.jpg"
    },

    // --- ASIE & EUROPE DE L'EST ---
    {
        id: "russie",
        name: "Lycée en Russie (Moscou - Lyceum)",
        lon: 37.6173, lat: 55.7558, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+3",
        schedule: "08:30 - 15:00",
        details: "Cours parfois du lundi au samedi, préparation de l'examen national EGE.",
        vacances: "Pauses d'automne, de Noël/Nouvel An, de printemps et grandes vacances de juin à août.",
        image: "images/emploie du temps.jpg"
    },
    {
        id: "thailande",
        name: "Lycée en Thaïlande (Bangkok - Mathayom)",
        lon: 100.5018, lat: 13.7563, zoom: 12, pitch: 45, bearing: 0,
        timezone: "UTC+7",
        schedule: "07:30 - 15:30",
        details: "Cérémonie du drapeau chaque matin, port de l'uniforme strict.",
        vacances: "Vacances d'été en avril (mois le plus chaud) et vacances de mi-année en octobre.",
        image: "images/emploie du temps.jpg"
    },
    { 
        id: "tokyo", 
        name: "Lycée au Japon (Tokyo)", 
        lon: 139.6917, lat: 35.6895, zoom: 12, pitch: 45, bearing: 0, 
        timezone: "UTC+9", 
        schedule: "08:30 - 15:30",
        details: "Clubs sportifs ou culturels obligatoires ou facultatifs (Bukatsu) après les cours.",
        vacances: "Vacances d'été (juillet-août), d'hiver et de printemps.",
        image: "images/japon.jpg"
    }
];

// Initialisation de la carte 3D
window.addEventListener("DOMContentLoaded", function () {
    map = new maplibregl.Map({
        container: 'map3d',
        maxPitch: 85,
        style: {
            version: 8,
            sources: {
                'satellite-tiles': {
                    type: 'raster',
                    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
                    tileSize: 256,
                    attribution: 'Esri & contributors'
                },
                'mapbox-dem': {
                    type: 'raster-dem',
                    tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    encoding: 'terrarium',
                    maxzoom: 15
                }
            },
            layers: [{ id: 'satellite-layer', type: 'raster', source: 'satellite-tiles', minzoom: 0, maxzoom: 22 }],
            terrain: { source: 'mapbox-dem', exaggeration: 1.5 }
        },
        center: [20, 30],
        zoom: 2.3,
        pitch: 30,
        bearing: 0
    });

    map.dragRotate.enable();
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');

    map.on('load', function () {
        renderZonesMenu();
        addZoneMarkers();
        setupMapEvents();
    });
});

function renderZonesMenu() {
    const list = document.getElementById("parking-list");
    if (!list) return;

    let html = `
        <button onclick="resetView()" style="width: 100%; padding: 10px; background: #6366f1; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 8px;">
            🌍 Vue globale du monde
        </button>
        <button id="add-parking-btn" onclick="toggleAddMode()" style="width: 100%; padding: 10px; background: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 12px;">
            ➕ Ajouter un lycée
        </button>
        <div style="font-size: 11px; color: #888; margin-bottom: 8px;">LYCÉES DANS LE MONDE :</div>
    `;

    zonesMonde.forEach(zone => {
        html += `
            <div class="parking-item" onclick="zoomToZone('${zone.id}')" style="cursor: pointer; margin-bottom: 6px; padding: 8px 10px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                <strong>🏫 ${zone.name}</strong>
                <div style="font-size: 11px; color: #aaa;">🕒 ${zone.schedule} (${zone.timezone})</div>
            </div>
        `;
    });

    list.innerHTML = html;
}

function addZoneMarkers() {
    zonesMonde.forEach(zone => {
        const popupContent = `
            <div style="font-family: sans-serif; max-width: 230px;">
                <b style="font-size: 13px;">${zone.name}</b><br>
                <span style="color: #6366f1; font-size: 12px;">🕒 Horaires : ${zone.schedule}</span>
                <p style="font-size: 11px; margin: 4px 0; color: #ccc;"><b>Vacances :</b> ${zone.vacances}</p>
                <img src="${zone.image}" alt="Lycée" style="width: 100%; height: 90px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); margin-top: 4px;">
            </div>
        `;
        const popup = new maplibregl.Popup({ offset: 25 }).setHTML(popupContent);
        
        new maplibregl.Marker({ color: '#6366f1' })
            .setLngLat([zone.lon, zone.lat])
            .setPopup(popup)
            .addTo(map);
    });
}

window.zoomToZone = function(zoneId) {
    if (!map) return;
    const zone = zonesMonde.find(z => z.id === zoneId);
    if (!zone) return;

    document.getElementById("city-name").textContent = zone.name;
    document.getElementById("city-description").innerHTML = `
        <strong>🕒 Horaires du lycée :</strong> ${zone.schedule}<br>
        <strong>🌍 Fuseau :</strong> ${zone.timezone}<br>
        <strong>📌 Spécificité :</strong> ${zone.details}<br>
        <strong>🏖️ Vacances scolaires :</strong> ${zone.vacances}<br><br>
        <div style="text-align: center;">
            <img src="${zone.image}" alt="Emploi du temps" style="width: 100%; height: 130px; object-fit: cover; border-radius: 8px; margin-top: 4px; border: 1px solid rgba(156,108,255,0.4);">
            <span style="font-size: 10px; color: #888; display: block; margin-top: 3px;">Aperçu du rythme du lycée</span>
        </div>
    `;

    map.flyTo({ center: [zone.lon, zone.lat], zoom: zone.zoom, pitch: zone.pitch, bearing: zone.bearing, duration: 2500 });
};

window.resetView = function() {
    if (!map) return;
    document.getElementById("city-name").textContent = "Emplois du temps des lycées du monde";
    document.getElementById("city-description").textContent = "Sélectionnez un lycée dans la liste ou sur la carte pour comparer les rythmes scolaires.";
    map.flyTo({ center: [20, 30], zoom: 2.3, pitch: 30, bearing: 0, duration: 2000 });
};

window.toggleAddMode = function() {
    isAddingMode = !isAddingMode;
    const btn = document.getElementById("add-parking-btn");
    if (!btn) return;
    if (isAddingMode) {
        btn.style.background = "#ef4444";
        btn.textContent = "❌ Annuler";
        alert("Cliquez sur la carte à l'emplacement du lycée à ajouter.");
    } else {
        btn.style.background = "#3b82f6";
        btn.textContent = "➕ Ajouter un lycée";
    }
};

function setupMapEvents() {
    map.on('click', function (e) {
        if (!isAddingMode) return;
        const name = prompt("Nom du lycée :", "Lycée international");
        const schedule = prompt("Horaires types (ex: 08:00 - 17:00) :", "08:00 - 17:00");
        const vacances = prompt("Périodes de vacances scolaires :", "Vacances standard locales");
        if (name) {
            new maplibregl.Marker({ color: '#3b82f6' })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .setPopup(new maplibregl.Popup().setHTML(`<b>🏫 ${name}</b><br>Horaires : ${schedule}<br>Vacances : ${vacances}`))
                .addTo(map);
        }
        toggleAddMode();
    });
}
function filtrerLycees() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const items = document.querySelectorAll('.parking-item');

    let premierMatchId = null;

    zonesMonde.forEach((zone, index) => {
        const nom = zone.name.toLowerCase();
        const details = (zone.details || '').toLowerCase();
        
        const correspond = nom.includes(query) || details.includes(query);

        // Affiche ou masque l'élément dans le menu de droite
        if (items[index]) {
            items[index].style.display = correspond ? 'block' : 'none';
        }

        // Garde en mémoire le premier résultat trouvé
        if (correspond && !premierMatchId) {
            premierMatchId = zone.id;
        }
    });

    // Zoom automatique vers le premier résultat si l'utilisateur a tapé au moins 2 caractères
    if (query.length >= 2 && premierMatchId) {
        zoomToZone(premierMatchId);
    }
}