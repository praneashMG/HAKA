function renderHeader() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const navItems = [
    { 
      name: "Home", 
      href: "index.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
    },
    { 
      name: "About Us", 
      href: "about.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    },
    { 
      name: "Services", 
      href: "services.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    { 
      name: "Solutions", 
      href: "solutions.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    { 
      name: "Technology", 
      href: "technology.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    },
    { 
      name: "Careers", 
      href: "careers.html",
      icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
    }
  ];

  const navLinksHtml = navItems
    .map(item => {
      const isActive = currentPath === item.href ? " active" : "";
      return `
        <li>
          <a href="${item.href}" class="nav-link${isActive}">
            <span class="nav-icon">${item.icon}</span>
            <span>${item.name}</span>
          </a>
        </li>`;
    })
    .join("");

  const headerHtml = `
    <header class="main-header">
      <div class="header-inner">
        <!-- Logo -->
        <a href="index.html" class="navbar-brand" title="HAKA Solutions">
          <img src="assets/logo/logobg-trimmed.png" alt="HAKA Solutions Logo" class="brand-logo-img">
        </a>

        <!-- Center Navigation Links with Icons -->
        <nav class="nav-container">
          <ul class="nav-menu" id="nav-menu">
            ${navLinksHtml}
          </ul>
        </nav>

        <!-- Right Side Primary CTA matching blueprint: Admin CMS & Let's Talk -->
        <div class="header-action">
          <button type="button" id="btnAdminCmsTrigger" class="nav-btn-admin${currentPath === 'admin.html' ? ' active' : ''}" title="Protected Admin Panel">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Admin CMS</span>
          </button>
          <a href="contact.html" class="nav-btn">
            <span>Let's Talk</span>
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <button class="hamburger-btn" id="mobile-toggle" aria-label="Toggle Navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Admin Authentication Password Dialog Modal -->
    <div id="adminPasswordModal" style="display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(16, 43, 35, 0.65); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: #FFFFFF; width: 100%; max-width: 440px; border-radius: 20px; box-shadow: 0 25px 60px -15px rgba(24, 61, 50, 0.35); border: 1px solid rgba(24, 61, 50, 0.1); overflow: hidden; animation: hkModalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);">
        <!-- Modal Top Header -->
        <div style="padding: 1.5rem 1.5rem 1rem; border-bottom: 1px solid #ECEAE3; display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(24, 61, 50, 0.08); color: #183D32; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #183D32; margin: 0; line-height: 1.2;">Security Verification</h3>
            <p style="font-size: 0.78rem; color: #6A7973; margin: 0.2rem 0 0 0;">Please enter password to enter admin panel</p>
          </div>
        </div>

        <!-- Modal Body Form -->
        <form id="adminAuthForm" style="padding: 1.5rem;" novalidate>
          <div style="margin-bottom: 1.25rem;">
            <label for="adminAuthPassInput" style="display: block; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #183D32; margin-bottom: 0.5rem;">
              Admin Passcode
            </label>
            <div style="position: relative;">
              <input type="password" id="adminAuthPassInput" required placeholder="Enter password..." autocomplete="current-password"
                     style="width: 100%; padding: 0.75rem 2.75rem 0.75rem 1rem; border-radius: 12px; border: 1.5px solid #D6D2C4; font-size: 0.95rem; font-family: inherit; color: #183D32; background: #FAF8F2; outline: none; transition: border-color 0.2s, background 0.2s;">
              <button type="button" id="btnTogglePassVisibility" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #7A8983; padding: 4px;" title="Show/Hide Password">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
            <p id="adminAuthError" style="display: none; color: #DC2626; font-size: 0.76rem; font-weight: 600; margin: 0.45rem 0 0 0;"></p>
          </div>

          <!-- Bottom Action Buttons -->
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem;">
            <button type="button" id="btnCancelAdminAuth" style="padding: 0.65rem 1.15rem; background: #ECE7DA; border: none; border-radius: 10px; font-size: 0.85rem; font-weight: 600; color: #3C4D47; cursor: pointer; transition: background 0.2s;">
              Cancel
            </button>
            <button type="submit" style="padding: 0.65rem 1.4rem; background: #183D32; border: none; border-radius: 10px; font-size: 0.85rem; font-weight: 700; color: #FFFFFF; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; transition: background 0.2s; box-shadow: 0 4px 12px rgba(24, 61, 50, 0.25);">
              <span>Enter Portal</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <style>
      @keyframes hkModalPop {
        from { opacity: 0; transform: scale(0.94); }
        to   { opacity: 1; transform: scale(1); }
      }
    </style>
  `;

  const placeholder = document.getElementById("header-placeholder");
  if (placeholder) {
    placeholder.innerHTML = headerHtml;

    // Mobile nav toggle
    const toggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (toggle && navMenu) {
      toggle.addEventListener("click", () => {
        const isOpening = !navMenu.classList.contains("mobile-visible");
        navMenu.classList.toggle("mobile-visible");
        toggle.classList.toggle("is-active");
        toggle.setAttribute("aria-expanded", isOpening ? "true" : "false");
      });

      // Close menu when clicking outside or clicking any nav link
      document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
          navMenu.classList.remove("mobile-visible");
          toggle.classList.remove("is-active");
          toggle.setAttribute("aria-expanded", "false");
        }
      });

      navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("mobile-visible");
          toggle.classList.remove("is-active");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Password verification logic
    const EXPECTED_PASS = "H@A@K@A_solutionS";
    const trigger = document.getElementById("btnAdminCmsTrigger");
    const modal = document.getElementById("adminPasswordModal");
    const form = document.getElementById("adminAuthForm");
    const passInput = document.getElementById("adminAuthPassInput");
    const errorEl = document.getElementById("adminAuthError");
    const cancelBtn = document.getElementById("btnCancelAdminAuth");
    const togglePassBtn = document.getElementById("btnTogglePassVisibility");

    function openModal() {
      // Check if already authenticated in this session
      if (sessionStorage.getItem("haka_admin_authenticated") === "true") {
        window.location.href = "admin.html";
        return;
      }
      if (modal) {
        modal.style.display = "flex";
        if (passInput) {
          passInput.value = "";
          passInput.focus();
        }
        if (errorEl) errorEl.style.display = "none";
      }
    }

    function closeModal() {
      if (modal) modal.style.display = "none";
      if (errorEl) errorEl.style.display = "none";
    }

    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", closeModal);
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (togglePassBtn && passInput) {
      togglePassBtn.addEventListener("click", () => {
        passInput.type = passInput.type === "password" ? "text" : "password";
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const entered = (passInput.value || "").trim();
        if (entered === EXPECTED_PASS) {
          // Success: Grant session access and navigate
          sessionStorage.setItem("haka_admin_authenticated", "true");
          if (errorEl) {
            errorEl.style.display = "block";
            errorEl.style.color = "#16A34A";
            errorEl.textContent = "Password verified! Entering admin panel...";
          }
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 400);
        } else {
          // Fail: show alert
          if (errorEl) {
            errorEl.style.display = "block";
            errorEl.style.color = "#DC2626";
            errorEl.textContent = "Incorrect password. Please enter the valid admin passcode.";
          }
          passInput.focus();
          passInput.select();
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", renderHeader);
