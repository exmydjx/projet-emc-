script.js
// ===============================
// LISTE DES QUESTIONS (3 Réponses / 1 Bonne réponse / 1 Explication)
// ===============================

<!-- SCRIPT QUIZ -->
    <script>
    const questions = [
        const questions = [
        {
            title: "Vrai ou Faux ? Plus on passe d’heures assis en classe par jour, meilleurs sont les résultats scolaires",
            subtitle: "Sélectionne la réponse qui correspond le mieux à l'engagement citoyen.",
            correctIndex: 0,
            explanation: "La Finlande ou l’Estonie ont des journées de cours plus courtes et moins chargées que la France, mais occupent les premières places mondiales aux tests PISA, ça prouve que la quantité ne fait pas la qualité.",
            answers: [
                "FAUX.",
                "VRAI.",
                "Sa depend.",
                "Je sais pas"
            ]
        },
        {
            title: "Quel pays d’Europe détient le record des journées de cours quotidiennes les plus longues et les plus chargées pour les élèves ?",
            subtitle: "Sélectionne la réponse qui correspond le mieux à l'engagement citoyen.",
            correctIndex: 3,
            explanation: "La France détient le record des journées de cours les plus longues d’Europe, accumulant 1 142 heures par an à 15 ans avec des cours finissant vers 17h ou 18h, suivis des devoirs. Contrairement à des pays comme l’Allemagne qui libèrent leurs élèves dès 13h ou 15h pour le sport et le repos ",
            answers: [
                "La France.",
                "Canada.",
                "La Réunion.",
                "Chine"
            ]
        },
        {
            title: "Pourquoi le sommeil d’un adolescent fonctionne-t-il différemment de celui d’un enfant ou d’un adulte ?",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 1,
            explanation: "Le fonctionnement du sommeil à l'adolescence est avant tout dicté par un bouleversement biologique appelé le « retard de phase ». Durant la puberté, l'horloge biologique interne se décale : la mélatonine (l'hormone qui déclenche le signal du sommeil) commence à être libérée par le cerveau environ deux heures plus tard que chez l'enfant ou l'adulte (souvent vers 23h ou minuit).Ce phénomène est purement biologique et universel. Il empêche l'adolescent de ressentir la fatigue tôt en début de soirée et prolonge l'état de somnolence plus tard le matin. Ce décalage est renforcé par une accumulation plus lente de la fatigue corporelle au fil de la journée.",
            answers: [
                "Parce que les adolescents ont biologiquement besoin de moins d'heures de sommeil que les adultes.",
                " Parce que leur sécrétion de mélatonine (l'hormone du sommeil) est décalée de deux heures plus tard dans la soirée.",
                "Parce que leur horloge interne s'inverse complètement pour les forcer à vivre la nuit.",
                " Parce que leur cerveau n'accumule plus aucune fatigue au cours de la journée."
            ]
        },
        {
            title: "La France est classé combien sur la moyenne des lycéens en Europe selon PISA en 2023 ? ",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 1,
            explanation: "La France se classe généralement autour de la 23e place mondiale (et non spécifiquement un classement européen isolé) parmi les pays participants à l'enquête PISA de l'OCDE (portant sur les élèves de 15 ans), se situant ainsi dans la moyenne des pays de l'OCDE",
            answers: [
                "20e",
                " 23e",
                "1er",
                "17e"
            ]
        },
        {
            title: "Quel est la moyenne quotidienne que passe les élèves à l’école en France",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 3,
            explanation: "En France, les élèves passent en moyenne 6 heures par jour à l'école, une journée de classe type débutant généralement vers 8h30 pour se terminer aux alentours de 16h30 ou 17h00.Un rythme très concentré. Bien que la durée quotidienne se situe autour de 6 heures, le système français se caractérise par des variations majeures selon les cycles :À l'école primaire : Les élèves ont un volume obligatoire de 24 heures de classe par semaine, réparties le plus souvent sur 4 jours (soit exactement 6h00 par jour de classe).Au collège et au lycée : Les journées s'allongent pour atteindre fréquemment 6h à 7h de cours par jour afin de couvrir l'ensemble des matières obligatoires et des options.Par rapport à ses voisins de l'OCDE, la France se distingue par des journées de travail particulièrement longues et chargées, mais réparties sur un nombre de jours d'école plus faible à l'année (144 jours en primaire) et entrecoupées de 16 semaines de vacances",
            answers: [
                "7:30am",
                "09:50am",
                "08:15am",
                "06:20am"
            ]
        },
        {
            title: "Vrai ou faux, depuis 2012 le niveau scolaire des lycées français sont t’ils en baisse ?",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 0,
            explanation: "C'est un fait documenté par plusieurs études nationales et internationales, notamment les enquêtes PISA de l'OCDE, qui montrent une baisse des résultats scolaires des élèves français depuis 2012 (et plus globalement sur les trente dernières années)                                              Enquêtes PISA (élèves de 15 ans) : Les performances des élèves en France ont nettement reculé dans les domaines fondamentaux. Par exemple, les scores moyens en mathématiques, en lecture et en sciences ont enregistré des baisses successives mesurées à chaque cycle d'évaluation.                                                                                       Évaluations en calcul et en français : Des études à long terme sur les acquis fondamentaux (comme le calcul ou l'orthographe dès l'école primaire et au collège) confirment une érosion continue du niveau depuis les années 1980 et 1990, qui se poursuit de manière marquée sur la période récente.               Un phénomène partagé : Bien que la baisse soit prononcée en France, elle s'inscrit aussi en partie dans une tendance de dégradation constatée dans d'autres pays développés, amplifiée ces dernières années par des perturbations comme la crise du Covid-19",
            answers: [
                "Vrai",
                "Sa dépend",
                "Faux",
                "je ne sais pas"
            ]
        },
        {
            title: "La France est classé combien sur la moyenne des lycéens en Europe selon PISA en 2023 ? ",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 1,
            explanation: "La France se classe généralement autour de la 23e place mondiale (et non spécifiquement un classement européen isolé) parmi les pays participants à l'enquête PISA de l'OCDE (portant sur les élèves de 15 ans), se situant ainsi dans la moyenne des pays de l'OCDE",
            answers: [
                "20e",
                " 23e",
                "1er",
                "17e"
            ]
        },
        {
            title: "D’après vous, enchaîner deux heures de cours à chaque fois dans la journée vous parait une bonne idée ?",
            correctIndex: 2,
            explanation: "Le cerveau humain n'est pas une machine. Chez un adolescent, la capacité d'attention maximale oscille entre 45 et 50 minutes. Au-delà, l'esprit s'évade et la fatigue s'installe. Enchaîner deux heures de cours n'est efficace que si le professeur change d'activité au milieu (débat, exercice pratique) ou accorde une mini-pause pour s'étirer !",
            answers: [
                "Non, car les cartables deviennent beaucoup trop lourds",
                "Oui, le cerveau des ados adore rester immobile 2h",
                "Non, la concentration baisse après 45 à 50 minutes",
                "Oui, on mémorise deux fois mieux sans faire de pause"
            ]
        },
            {
            title: "C’est quoi PISA",
            subtitle: "Identifie l'action collective parmi les choix proposés.",
            correctIndex: 2,
            explanation: "Créé par l'OCDE (Organisation de coopération et de développement économiques), ce programme réalise la plus grande étude internationale comparant les systèmes éducatifs mondiaux.",
            answers: [
                "Proximal Isovelocity Surface Area.",
                "Platform-independent Search Assessment.",
                "Programme for International Student Assessment"
            ]
        },
        {
            title: "Pensez-vous que les cours de 11h35 à 12h35 sont juste pour les élèves ? Qu’ils soient demi-pensionnaires ou externes.",
            subtitle: "Réfléchis au rôle des places, parcs et jardins publics.",
            correctIndex: 3,
            explanation: "demi-pensionnaires doivent encore faire la file et attendre pour manger, ce qui leur donne très peu de temps pour ensuite profiter et par la suite arriver en retard en cours externes doivent rentrer chez eux et cela prend généralement plus de dix minutes, ils doivent manger vite, vite préparer, sortir de chez eux et refaire le trajet (bus, voiture ou à pied)",
            answers: [
                "Oui",
                "je ne sais pas",
                "Peut-être",
                "non"
            ]
        }
    ];

// ===============================
// ETAT DE L'APPLICATION
// ===============================

let currentQuestion = 0;
let score = 0;
let selectedAnswerIndex = null;
let isValidated = false;

// ===============================
// LANCEMENT DU CODE
// ===============================

window.addEventListener("DOMContentLoaded", function () {
    initQuiz();
});

function initQuiz() {
    const validateBtn = document.getElementById("validate-button");
    const nextBtn = document.getElementById("next-button");

    validateBtn.onclick = handleValidation;
    nextBtn.onclick = handleNext;

    showQuestion();
}

// ===============================
// AFFICHAGE
// ===============================

function showQuestion() {
    const q = questions[currentQuestion];

    selectedAnswerIndex = null;
    isValidated = false;

    document.getElementById("question-number").textContent = "QUESTION " + String(currentQuestion + 1).padStart(2, "0");
    document.getElementById("question-title").textContent = q.title;
    document.getElementById("question-subtitle").textContent = q.subtitle;

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    document.getElementById("explanation").classList.add("hidden");
    document.getElementById("next-button").classList.add("hidden");
    document.getElementById("validate-button").classList.remove("hidden");

    q.answers.forEach((text, idx) => {
        const div = document.createElement("div");
        div.className = "answer";
        div.innerHTML = `
            <div class="checkbox"></div>
            <div class="answer-text">${text}</div>
        `;

        div.onclick = function () {
            if (isValidated) return;

            document.querySelectorAll(".answer").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            selectedAnswerIndex = idx;
        };

        answersBox.appendChild(div);
    });
}

// ===============================
// VALIDATION DE LA RÉPONSE
// ===============================

function handleValidation() {
    if (selectedAnswerIndex === null) {
        alert("Veuillez choisir une réponse !");
        return;
    }

    if (isValidated) return;
    isValidated = true;

    const q = questions[currentQuestion];
    const answersList = document.querySelectorAll(".answer");

    answersList.forEach((el, idx) => {
        if (idx === q.correctIndex) {
            el.classList.add("correct");
        }
        if (idx === selectedAnswerIndex && idx !== q.correctIndex) {
            el.classList.add("wrong");
        }
    });

    const isCorrect = selectedAnswerIndex === q.correctIndex;

    if (isCorrect) {
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("result-icon").textContent = "✓";
        document.getElementById("result-title").textContent = "Excellente réponse !";
    } else {
        document.getElementById("result-icon").textContent = "✕";
        document.getElementById("result-title").textContent = "Mauvaise réponse";
    }

    document.getElementById("result-text").textContent = q.explanation;
    document.getElementById("explanation").classList.remove("hidden");

    document.getElementById("validate-button").classList.add("hidden");
    document.getElementById("next-button").classList.remove("hidden");
}

// ===============================
// QUESTION SUIVANTE / RESTARTED
// ===============================

function handleNext() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById("question-number").textContent = "FIN DU QUIZ";
    document.getElementById("question-title").textContent = "Résultats du questionnaire";
    document.getElementById("question-subtitle").textContent = "";

    document.getElementById("answers").innerHTML = `
        <div class="answer selected" style="justify-content: center; text-align: center;">
            <div class="answer-text">
                Tu as obtenu un score de <strong>${score} / ${questions.length}</strong> !
            </div>
        </div>
    `;

    document.getElementById("explanation").classList.add("hidden");
    document.getElementById("validate-button").classList.add("hidden");

    const nextBtn = document.getElementById("next-button");
    nextBtn.textContent = "Recommencer le Quiz ↺";
    nextBtn.classList.remove("hidden");

    nextBtn.onclick = function () {
        currentQuestion = 0;
        score = 0;
        document.getElementById("score").textContent = "0";
        nextBtn.textContent = "Question suivante →";
        initQuiz();
    };
}
