// ========================
// Toggle Menu
// ========================
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
};

// ========================
// Typing Effect (Video Editor only)
// ========================
const typingText = document.getElementById("typing");
const word = "Video Editor";
let j = 0;

function type() {
  if (j < word.length) {
    typingText.textContent = word.substring(0, j + 1);
    j++;
    setTimeout(type, 100);
  }
}
type();

// ========================
// Scroll to Top Button
// ========================
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
scrollTopBtn.onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

// ========================
// Contact Form (Formspree + Validation)
// ========================
const form = document.getElementById("contact-form");
const statusTxt = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = form.querySelector('input[name="email"]').value;
  if (!email.includes("@")) {
    statusTxt.innerHTML = "⚠️ Please enter a valid email.";
    return;
  }

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusTxt.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusTxt.innerHTML = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    statusTxt.innerHTML = "⚠️ Connection problem.";
  }
});


// ========================
// Project Modal Functionality
// ========================
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-type");
    const src = card.getAttribute("data-src");
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");

    content.innerHTML = ""; // clear old content

    if (type === "video") {
      const iframe = document.createElement("iframe");
      iframe.src = src + "?autoplay=1";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      content.appendChild(iframe);
    } else if (type === "image") {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Project Image";
      content.appendChild(img);
    }

    modal.classList.add("active");
  });
});

// Close modal
document.getElementById("modal-close").addEventListener("click", () => {
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");
  modal.classList.remove("active");
  content.innerHTML = "";
});

// Close modal if click outside content
document.getElementById("project-modal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("project-modal")) {
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");
    modal.classList.remove("active");
    content.innerHTML = "";
  }
});

// ========================
// Extra: Smooth Scroll for Nav Links
// ========================
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  });
});

// ========================
// Extra: Fade-in Animation on Scroll
// ========================
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
// ========================
// Dark/Light Mode Toggle
// ========================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// ========================
// Custom Cursor
// ========================
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// ========================
// Contact Form Validation
// ========================
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = form.querySelector('input[name="email"]').value;
  if (!email.includes("@")) {
    statusTxt.innerHTML = "⚠️ Please enter a valid email.";
    return;
  }
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      statusTxt.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusTxt.innerHTML = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    statusTxt.innerHTML = "⚠️ Connection problem.";
  }
});
const form = document.getElementById("contact-form");
const statusTxt = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      statusTxt.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusTxt.innerHTML = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    statusTxt.innerHTML = "⚠️ Connection problem.";
  }
});

document.querySelector('a.btn[href="#contact"]').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


