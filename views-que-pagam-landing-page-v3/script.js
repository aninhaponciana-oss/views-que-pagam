// ===== CONFIGURAÇÃO RÁPIDA =====
// Cole aqui o link real do seu checkout quando estiver pronto.
// Ex.: const CHECKOUT_URL = "https://seu-checkout.com/...";
const CHECKOUT_URL = "https://go.hotmart.com/K107715840X";

const progress = document.getElementById("progress");
const toast = document.getElementById("toast");
const checkoutBtn = document.getElementById("checkoutBtn");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => toast.classList.remove("show"), 4200);
}

checkoutBtn.addEventListener("click", (event) => {
  if (CHECKOUT_URL.trim()) {
    checkoutBtn.href = CHECKOUT_URL;
    return;
  }
  event.preventDefault();
  document.getElementById("oferta").scrollIntoView({behavior:"smooth"});
  showToast("Checkout ainda não configurado. Abra script.js e cole o link da sua página de pagamento.");
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = pct + "%";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Animação suave dos links internos.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});
