const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-button");
const courseCards = document.querySelectorAll(".course-card");
const copyButton = document.querySelector('[data-copy="email"]');
const videoFrame = document.querySelector("[data-video-frame]");
const introVideo = document.querySelector("[data-video]");
const projectDialog = document.querySelector("[data-project-dialog]");
const projectCards = document.querySelectorAll("[data-project]");
const closeProjectButtons = document.querySelectorAll("[data-close-project]");

const projectDetails = {
  thriftmate: {
    category: "Mobile coursework",
    title: "ThriftMate Mobile App",
    summary:
      "A React Native coursework app for browsing thrift items, viewing item details, and saving favorites. It is useful as a small mobile UI example because the flow is easy to understand and screen-based.",
    stack: ["Expo", "React Native", "React Navigation", "AsyncStorage"],
    repoStatus: "public repo",
    repoUrl: "https://github.com/wqmumu/thriftmate-mobile-app",
    logic: [
      "Browse screen displays item cards from local/mock data.",
      "Detail screen receives item data through navigation params.",
      "Favorites state is stored locally so users can return to saved items.",
      "Reusable screen/components keep the mobile UI structure consistent.",
    ],
    discuss: [
      "Separated mobile screens by browse, detail, and saved-item responsibilities.",
      "Used local state and persistent storage patterns for favorite items.",
      "Outlined a possible backend-backed marketplace version with user accounts and item APIs.",
    ],
    label: "React Native flow",
    code: `const openItem = (item) => {
  navigation.navigate("ItemDetails", { item });
};

const toggleFavorite = async (itemId) => {
  const nextFavorites = favorites.includes(itemId)
    ? favorites.filter((id) => id !== itemId)
    : [...favorites, itemId];

  setFavorites(nextFavorites);
  await AsyncStorage.setItem("favorites", JSON.stringify(nextFavorites));
};`,
  },
  "django-elearning": {
    category: "Python web coursework",
    title: "Django E-Learning Platform",
    summary:
      "A Django/DRF coursework platform with course, account, template, static asset, and chat-related modules. It demonstrates Python backend structure and multi-app project organization.",
    stack: ["Django", "Django REST Framework", "Channels", "Templates"],
    logic: [
      "Django apps separate accounts, courses, and chat responsibilities.",
      "Course data is exposed through views/templates and API-style modules.",
      "Account flows provide the foundation for authenticated learning features.",
      "Channels/chat code explores real-time communication concepts.",
    ],
    discuss: [
      "Organized backend responsibilities through Django apps and URL routing.",
      "Compared API-oriented DRF views with template-rendered page flows.",
      "Identified production needs such as stronger auth, permissions, settings, and deployment configuration.",
    ],
    label: "Django structure",
    code: `# Typical Django separation
urlpatterns = [
  path("courses/", include("courses.urls")),
  path("accounts/", include("accounts.urls")),
  path("chat/", include("chat.urls")),
]

class CourseViewSet(ModelViewSet):
  queryset = Course.objects.all()
  serializer_class = CourseSerializer`,
  },
  "student-performance": {
    category: "Database web app",
    title: "Student Performance Database",
    summary:
      "A Node/Express/EJS database-backed coursework app for managing and viewing student performance records. It shows server-rendered pages, form handling, and database-oriented web logic.",
    stack: ["Node.js", "Express", "EJS", "MySQL"],
    logic: [
      "Express routes map list/detail/create actions to server-side handlers.",
      "EJS templates render database records into table and form views.",
      "Input fields are collected from forms and written into SQL-backed records.",
      "The app structure supports CRUD-style database workflows.",
    ],
    discuss: [
      "Connected server-rendered forms with Express route handlers and database queries.",
      "Identified production improvements such as stronger validation and clearer error handling.",
      "Outlined a migration path toward a REST API and React frontend.",
    ],
    label: "Express route sketch",
    code: `app.get("/students", async (req, res) => {
  const students = await db.query("SELECT * FROM students");
  res.render("students", { students });
});

app.post("/students", async (req, res) => {
  const { name, score } = req.body;
  await db.query("INSERT INTO students SET ?", { name, score });
  res.redirect("/students");
});`,
  },
  "imdb-sentiment": {
    category: "AI / Data coursework",
    title: "IMDB Sentiment Analysis",
    summary:
      "A Python/Jupyter NLP coursework project for sentiment analysis on IMDB movie reviews. It demonstrates data preprocessing, model training, evaluation, and result explanation.",
    stack: ["Python", "Jupyter Notebook", "NLP", "Machine Learning"],
    repoStatus: "public repo",
    repoUrl: "https://github.com/wqmumu/imdb-sentiment-analysis",
    logic: [
      "Load review text and sentiment labels into a notebook workflow.",
      "Clean/tokenize text before converting it into numerical features.",
      "Train a sentiment classifier and evaluate predictions.",
      "Use charts/metrics to explain model performance and limitations.",
    ],
    discuss: [
      "Documented text preprocessing choices and model-evaluation steps.",
      "Used the notebook format for exploratory analysis, iteration, and result explanation.",
      "Outlined how the notebook could become an API-backed sentiment demo.",
    ],
    label: "Notebook pipeline",
    code: `reviews = load_dataset("imdb")
clean_text = reviews["text"].map(preprocess)

vectorizer = TfidfVectorizer(max_features=5000)
X = vectorizer.fit_transform(clean_text)

model = LogisticRegression()
model.fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test)))`,
  },
  "database-blog": {
    category: "Full-stack coursework",
    title: "Database Web Blog Platform",
    summary:
      "An Express/EJS/SQLite coursework app with author and reader flows. It is useful for showing traditional server-rendered web structure and relational database-backed content.",
    stack: ["Node.js", "Express", "EJS", "SQLite"],
    logic: [
      "Reader pages display published blog content.",
      "Author/admin routes manage article creation and editing.",
      "SQLite stores posts and related metadata locally.",
      "Templates separate layout from route logic.",
    ],
    discuss: [
      "Separated author management flows from reader-facing blog pages.",
      "Structured content around relational post and metadata records.",
      "Identified security improvements such as authentication, authorization, and CSRF protection.",
    ],
    label: "Blog route sketch",
    code: `router.get("/articles/:id", async (req, res) => {
  const article = await db.get("SELECT * FROM articles WHERE id = ?", req.params.id);
  res.render("article", { article });
});

router.post("/author/articles", async (req, res) => {
  await createArticle(req.body);
  res.redirect("/author");
});`,
  },
  otodecks: {
    category: "Systems / audio coursework",
    title: "OtoDecks DJ App",
    summary:
      "A C++/JUCE DJ app coursework project with deck and playlist functionality. It demonstrates object-oriented design, audio UI concepts, and desktop application structure.",
    stack: ["C++", "JUCE", "Audio Programming", "OOP"],
    logic: [
      "Deck components manage playback controls for audio tracks.",
      "Playlist component lets users browse and select media.",
      "JUCE UI classes connect controls to audio behavior.",
      "OOP structure separates UI components from playback logic.",
    ],
    discuss: [
      "Connected JUCE UI components with playback event callbacks.",
      "Applied object-oriented design to separate deck, playlist, and audio-control responsibilities.",
      "Identified improvements for more robust audio library management and track metadata handling.",
    ],
    label: "C++ component idea",
    code: `class DeckGUI : public Component,
                public Button::Listener,
                public Slider::Listener {
  void buttonClicked(Button* button) override {
    if (button == &playButton) player.start();
    if (button == &stopButton) player.stop();
  }
};`,
  },
  "graphic-final": {
    category: "Creative coding coursework",
    title: "Graphic Programming Final",
    summary:
      "An interactive p5.js creative coding project. It shows visual interaction, canvas-based animation, and graphics programming fundamentals.",
    stack: ["JavaScript", "p5.js", "Interaction", "Canvas"],
    repoStatus: "public repo",
    repoUrl: "https://github.com/wqmumu/graphic-programming-final",
    logic: [
      "Setup initializes the canvas and visual state.",
      "Draw loop updates animation and user interaction every frame.",
      "Mouse/keyboard input changes visual behavior.",
      "Objects/functions organize repeated visual elements.",
    ],
    discuss: [
      "Used a canvas draw loop for frame-based interaction and animation.",
      "Separated creative coding state from DOM-style interface logic.",
      "Outlined how the visual sketch could become an interactive portfolio section.",
    ],
    label: "p5.js loop",
    code: `function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(32);
  updateParticles();
  drawScene(mouseX, mouseY);
}`,
  },
  "budget-planner": {
    category: "Web app coursework",
    title: "Agile Budget Planner",
    summary:
      "A budget planning web app with server-side pages and chart-based visualization. It demonstrates practical form workflows, category-based data, and visual reporting.",
    stack: ["Node.js", "Express", "EJS", "Chart.js"],
    logic: [
      "Users enter income/expense data through server-rendered forms.",
      "Budget categories are grouped and summarized for display.",
      "Chart.js turns budget data into visual feedback.",
      "Express routes organize dashboard and transaction flows.",
    ],
    discuss: [
      "Used chart-based feedback to make budget categories easier to compare.",
      "Identified improvements around form validation, persistence, and clearer error states.",
      "Outlined a path toward a modern dashboard with richer analytics and reusable components.",
    ],
    label: "Chart data shape",
    code: `const chartData = {
  labels: categories.map((item) => item.name),
  datasets: [{
    label: "Monthly spending",
    data: categories.map((item) => item.total),
  }],
};`,
  },
  "unity-game": {
    category: "Unity game systems",
    title: "Unity Gate Multiplier Game Prototype",
    summary:
      "A Unity-based CM3070 final project that prototypes a hyper-casual mobile game with gate multiplier choices, troop formation, dynamic level generation, enemy combat, UI, and audio systems.",
    stack: ["Unity 6", "C#", "URP", "Input System", "Mobile Game Prototype"],
    repoStatus: "public repo",
    repoUrl: "https://github.com/wqmumu/CM3070-Final-Project",
    logic: [
      "LevelGenerator creates gate pairs, adjusts enemy difficulty from troop count, and spawns boss/final encounters.",
      "Gate logic applies add, subtract, multiply, and divide operations while disabling the sibling gate in the same pair.",
      "TroopManager pools troop instances, tracks the leader, manages formation offsets, and broadcasts combat state.",
      "EnemyBase defines a reusable patrol, chase, attack, damage, and death lifecycle for enemies and bosses.",
    ],
    discuss: [
      "How procedural level pacing and troop-count balancing work together.",
      "How object pooling and event-driven state reduce repeated scene work.",
      "How gate, projectile, troop, enemy, audio, menu, and UI responsibilities are separated.",
      "What I would improve next: ScriptableObject configs, mobile profiling, and clearer testing/debug tooling.",
    ],
    label: "Unity C# gate logic",
    code: `public enum GateType {
  Add,
  Subtract,
  Multiply,
  Divide
}

private void ApplyGate(TroopManager manager) {
  switch (gateType) {
    case GateType.Add:
      manager.AddTroops(value);
      break;
    case GateType.Multiply:
      manager.MultiplyTroops(value);
      break;
  }

  siblingGate?.Deactivate();
  GateTriggered?.Invoke(pairId);
}`,
  },
};

function updateHeader() {
  if (!header) return;
  header.dataset.elevated = String(window.scrollY > 20);
}

function renderList(target, items) {
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function openProject(projectId) {
  const project = projectDetails[projectId];
  if (!project || !projectDialog) return;

  projectDialog.querySelector("[data-project-category]").textContent =
    project.category;
  projectDialog.querySelector("[data-project-title]").textContent =
    project.title;
  projectDialog.querySelector("[data-project-summary]").textContent =
    project.summary;
  projectDialog.querySelector("[data-code-label]").textContent = project.label;
  projectDialog.querySelector("[data-code-repo-status]").textContent =
    project.repoStatus || "private repo";
  projectDialog.querySelector("[data-project-code]").textContent = project.code;

  const repoLink = projectDialog.querySelector("[data-project-repo]");
  if (repoLink) {
    if (project.repoUrl) {
      repoLink.href = project.repoUrl;
      repoLink.textContent = `Open ${project.title} on GitHub`;
      repoLink.hidden = false;
    } else {
      repoLink.removeAttribute("href");
      repoLink.hidden = true;
    }
  }

  const stackTarget = projectDialog.querySelector("[data-project-stack]");
  stackTarget.innerHTML = "";
  project.stack.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    stackTarget.appendChild(span);
  });

  renderList(projectDialog.querySelector("[data-project-logic]"), project.logic);
  renderList(projectDialog.querySelector("[data-project-discuss]"), project.discuss);

  projectDialog.classList.add("is-open");
  projectDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("dialog-open");
  projectDialog.querySelector("[data-close-project]")?.focus();
}

function closeProject() {
  if (!projectDialog) return;
  projectDialog.classList.remove("is-open");
  projectDialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("dialog-open");
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    courseCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.kind === filter;
      card.hidden = !matches;
    });
  });
});

document.addEventListener("click", (event) => {
  const card = event.target.closest?.("[data-project]");
  if (!card) return;
  openProject(card.dataset.project);
});

projectCards.forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

closeProjectButtons.forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProject();
  }
});

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email || "Wangquan888900@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Email copied";
  } catch {
    copyButton.textContent = email;
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copy email";
  }, 1800);
});

introVideo?.addEventListener("loadedmetadata", () => {
  videoFrame?.classList.add("has-video");
});

introVideo?.addEventListener("error", () => {
  videoFrame?.classList.remove("has-video");
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
