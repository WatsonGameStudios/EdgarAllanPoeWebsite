// Språkdataobjekt
const translations = {
  swedish: {
    title: "Täby kommun rustar upp Åva gymnasium",
    date: "26 mars 2025, kl. 09:01 - Stadsplanering & trafik",
    content: `
      <p>I maj 2025 startar en omfattande teknisk upprustning av Åva gymnasium. Projektet beräknas vara klart hösten 2027 och syftar till att skapa en bättre arbetsmiljö för både elever och personal.</p>
      <p>– Vi ser denna renovering som en viktig investering i våra ungdomars framtid. Modern utbildning kräver moderna lokaler, och med denna upprustning skapar vi förutsättningar för en ännu bättre studiemiljö, säger Erik Andersson, kommunstyrelsens ordförande i Täby kommun.</p>
      <p>Upprustningen omfattar flera viktiga förbättringar:</p>
      <ul>
        <li>Installation av ny ventilation för förbättrad luftkvalitet i klassrummen</li>
        <li>Utbyte av belysning och elsystem</li>
        <li>Nya specialsalar för praktiska moment på El- och Teknikprogrammet</li>
        <li>Installation av solceller på skolans tak, vilket både minskar verksamhetens miljöpåverkan och sänker energikostnaderna</li>
      </ul>
      <h2>Upprustningen sker i etapper</h2>
      <p>För att minimera störningar i undervisningen kommer arbetet att genomföras i etapper. Projektet påbörjas i maj 2025 och beräknas vara färdigställt under höstterminen 2027.</p>
      <p>– Vi är medvetna om att renoveringsarbeten kan upplevas störande, men vår ambition är att minimera påverkan på elevernas utbildning. Tack vare etappindelningen kommer eleverna succesivt slussas över i upprustade lokaler, säger Eva von Wowern (KD), ordförande i gymnasie- och näringslivsnämnden.</p>
      <h2>Nya specialsalar klara hösten 2025</h2>
      <p>Höstterminen 2025 är de nya specialsalarna för El- och Teknikprogrammen klara.</p>
      <p>– De nya lokalerna kommer att bli modernare, mer ändamålsenliga och vara ett lyft för El- och Teknikprogrammen. Dessutom kommer upprustningen med ny belysning och ventilation skapa en ännu bättre arbetsmiljö för alla elever och medarbetare, säger Annika Westin, rektor på Åva gymnasium.</p>
      <p>Under första kvartalet 2026 kommer tillfälliga teorisalar att ställas upp på en intilliggande parkeringsyta. Varje beslut i renoveringsprocessen tar särskild hänsyn till elevernas trygghet och förutsättningar för studier.</p>
    `,
    emailLink: "Skicka epost",
    emailTitle: "Skicka epost",
    mapsLink: "Hitta hit med Google Maps",
    mapsTitle: "Hitta hit med Google Maps",
  },
  english: {
    title: "Täby Municipality Renovates Åva High School",
    date: "March 26, 2025, 09:01 AM - Urban Planning & Traffic",
    content: `
      <p>In May 2025, a comprehensive technical renovation of Åva High School will begin. The project is expected to be completed in the fall of 2027 and aims to create a better working environment for both students and staff.</p>
      <p>– We see this renovation as an important investment in our young people's future. Modern education requires modern facilities, and with this renovation we create conditions for an even better study environment, says Erik Andersson, chairman of the municipal board in Täby municipality.</p>
      <p>The renovation includes several important improvements:</p>
      <ul>
        <li>Installation of new ventilation for improved air quality in classrooms</li>
        <li>Replacement of lighting and electrical systems</li>
        <li>New specialized classrooms for practical work in the Electrical and Technology programs</li>
        <li>Installation of solar panels on the school roof, which both reduces the operation's environmental impact and lowers energy costs</li>
      </ul>
      <h2>The Renovation Takes Place in Stages</h2>
      <p>To minimize disruptions to teaching, the work will be carried out in stages. The project will begin in May 2025 and is expected to be completed during the fall semester of 2027.</p>
      <p>– We are aware that renovation work can be disruptive, but our ambition is to minimize the impact on students' education. Thanks to the phasing, students will gradually be moved into renovated facilities, says Eva von Wowern (KD), chairman of the upper secondary school and business committee.</p>
      <h2>New Specialized Classrooms Ready Fall 2025</h2>
      <p>In the fall semester of 2025, the new specialized classrooms for the Electrical and Technology programs will be ready.</p>
      <p>– The new facilities will be more modern, more functional and will be a boost for the Electrical and Technology programs. In addition, the renovation with new lighting and ventilation will create an even better working environment for all students and staff, says Annika Westin, principal at Åva High School.</p>
      <p>During the first quarter of 2026, temporary theory classrooms will be set up in an adjacent parking area. Every decision in the renovation process takes special consideration of students' safety and conditions for study.</p>
    `,
    emailLink: "Send email",
    emailTitle: "Send email",
    mapsLink: "Find us on Google Maps",
    mapsTitle: "Find us on Google Maps",
  },
};

// Hämta alla element som behöver översättas
const elements = {
  title: document.querySelector("h1"),
  date: document.querySelector("small strong"),
  contentContainer: document.querySelector("main"),
  emailLink: document.querySelector('footer a[href^="mailto"]'),
  mapsLink: document.querySelector(
    'footer a[href^="https://www.google.com/maps"]',
  ),
};

// Funktion för att byta språk
function changeLanguage(lang) {
  const translation = translations[lang]; // parametern lang är antingen 'swedish' eller 'english'

  // Uppdatera titel och datum
  elements.title.textContent = translation.title;
  elements.date.textContent = translation.date;

  // Hitta bildelementet och spara det
  const image = elements.contentContainer.querySelector(".big-image");

  // Uppdatera huvudinnehåll - behåll h1, small och bild, lägg sedan till innehåll
  elements.contentContainer.innerHTML = `
    <h1>${translation.title}</h1>
    <small><strong>${translation.date}</strong></small>
    ${image.outerHTML}
    ${translation.content}
  `;

  // Uppdatera sidfotslänkar
  elements.emailLink.innerHTML =
    '<i class="fas fa-envelope"></i> ' + translation.emailLink;
  elements.emailLink.title = translation.emailTitle;
  elements.mapsLink.innerHTML =
    '<i class="fas fa-map-marker-alt"></i> ' + translation.mapsLink;
  elements.mapsLink.title = translation.mapsTitle;

  // Uppdatera HTML-språkattribut (ger bättre tillgänglighet, tex för skärmläsare)
  document.documentElement.lang = lang === "swedish" ? "sv" : "en";
}

// Lägg till händelselyssnare till knappar
document.getElementById("lang_eng").addEventListener("click", () => {
  changeLanguage("english");
});

document.getElementById("lang_swe").addEventListener("click", () => {
  changeLanguage("swedish");
});

changeLanguage("swedish"); // Starta med svenska som standard
