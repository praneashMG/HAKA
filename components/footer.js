function renderFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919840123456"; // Default HAKA enterprise WhatsApp contact
  
  const footerHtml = `
    <footer class="main-footer">
      <div class="footer-inner">
        <!-- Brand Info -->
        <div class="footer-col brand-col">
          <a href="index.html" class="footer-brand">
            <img src="assets/logo/logobg-trimmed.png" alt="HAKA Solutions Logo" class="footer-logo-img">
          </a>
          <p class="brand-desc">
            Technology &bull; Digital Solutions &bull; Business Growth
          </p>
          <div class="footer-socials">
            <!-- LinkedIn -->
            <a href="#" class="social-icon-btn" title="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <!-- Instagram -->
            <a href="#" class="social-icon-btn" title="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/${whatsappNumber}" target="_blank" class="social-icon-btn" title="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <!-- Email -->
            <a href="mailto:contact@hakasolutions.com" class="social-icon-btn" title="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <!-- Company Links -->
        <div class="footer-col">
          <h4 class="col-title">Company</h4>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="careers.html">Careers <span class="badge-hiring">Hiring</span></a></li>
            <li><a href="about.html#leadership">Leadership</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Solutions Links -->
        <div class="footer-col">
          <h4 class="col-title">Solutions</h4>
          <ul class="footer-links">
            <li><a href="solutions.html">Digital Operations</a></li>
            <li><a href="solutions.html">Data Operations</a></li>
            <li><a href="services.html">Technology Solutions</a></li>
            <li><a href="services.html">Business Process Support</a></li>
          </ul>
        </div>

        <!-- Official Office Card -->
        <div class="footer-col">
          <h4 class="col-title">Official Office</h4>
          <div class="office-card">
            <div class="office-card-row">
              <span class="office-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span>Union Bank Back Side, Kattupudi Street, Pallikonda &ndash; 635809.</span>
            </div>
            <div class="office-card-row">
              <span class="office-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <a href="mailto:contact@hakasolutions.com" class="office-link">contact@hakasolutions.com</a>
            </div>
            <div class="office-card-row">
              <div class="hk-live-status">
                <span class="hk-live-status__dot"></span>
                <span>Systems Active &bull; 99.98% SLA Guaranteed</span>
              </div>
            </div>
            <div class="office-card-row">
              <span class="status-indicator-dot"></span>
              <span style="font-weight: 600; color: #183D32; font-size: 0.88rem;">WhatsApp Direct Support: Active 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>&copy; ${currentYear} <strong>HAKA SOLUTIONS</strong>. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <span class="sep">&bull;</span>
            <a href="#">Terms & Conditions</a>
            <span class="sep">&bull;</span>
            <a href="#">Cookie Policy</a>
            <span class="sep">&bull;</span>
            <a href="admin.html" style="color: #C19A5B; font-weight: 600;">Admin CMS Portal</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- ==============================================================
         FLOATING SMART WHATSAPP CONTACT WIDGET (ALL PAGES)
         Dynamic Enquiry Types + Pre-filled Messages
         ============================================================== -->
    <div class="hk-whatsapp-widget" id="hkWhatsappWidget">
      <!-- Popup Smart Menu -->
      <div class="hk-whatsapp-menu" id="hkWhatsappMenu" aria-hidden="true">
        <!-- Header -->
        <div class="hk-whatsapp-menu__head">
          <div class="hk-whatsapp-menu__avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span class="hk-whatsapp-online-dot"></span>
          </div>
          <div>
            <h4 class="hk-whatsapp-menu__title">HAKA SOLUTIONS</h4>
            <p class="hk-whatsapp-menu__sub">Typically replies within a few minutes</p>
          </div>
          <button type="button" class="hk-whatsapp-menu__close" id="hkWhatsappClose" aria-label="Close WhatsApp Menu">
            &times;
          </button>
        </div>

        <!-- Body / Enquiry Selector -->
        <div class="hk-whatsapp-menu__body">
          <p class="hk-whatsapp-menu__prompt">
            Hello! Choose your enquiry type to start an instant WhatsApp conversation with our team:
          </p>

          <div class="hk-whatsapp-options">
            <!-- 1. Business Services -->
            <button type="button" class="hk-whatsapp-option" data-type="Business Services" data-msg="Hello HAKA Team, I am interested in exploring your Business Process Support & Operations services. Could we discuss availability and proposal details?">
              <span class="hk-whatsapp-option__icon">💼</span>
              <div class="hk-whatsapp-option__info">
                <strong>Business Services</strong>
                <span>Process support & operations</span>
              </div>
            </button>

            <!-- 2. Technology Solutions -->
            <button type="button" class="hk-whatsapp-option" data-type="Technology Solutions" data-msg="Hi HAKA Team, I would like to enquire about your Cloud Engineering, Architecture, and Digital Technology Solutions.">
              <span class="hk-whatsapp-option__icon">💻</span>
              <div class="hk-whatsapp-option__info">
                <strong>Technology Solutions</strong>
                <span>Engineering & cloud platforms</span>
              </div>
            </button>

            <!-- 3. Partnership -->
            <button type="button" class="hk-whatsapp-option" data-type="Partnership" data-msg="Hello HAKA Solutions, I am reaching out to discuss a potential strategic partnership / vendor collaboration with your organization.">
              <span class="hk-whatsapp-option__icon">🤝</span>
              <div class="hk-whatsapp-option__info">
                <strong>Partnership</strong>
                <span>Enterprise & vendor alliance</span>
              </div>
            </button>

            <!-- 4. Career -->
            <button type="button" class="hk-whatsapp-option" data-type="Career" data-msg="Hello HAKA Careers Team, I have reviewed your open opportunities and would like to enquire regarding current vacancies and job applications.">
              <span class="hk-whatsapp-option__icon">🎯</span>
              <div class="hk-whatsapp-option__info">
                <strong>Career & Hiring</strong>
                <span>Job openings & recruitment</span>
              </div>
            </button>

            <!-- 5. General Enquiry -->
            <button type="button" class="hk-whatsapp-option" data-type="General Enquiry" data-msg="Hello HAKA Solutions, I have a general enquiry regarding your solutions and office location. Please connect me with a representative.">
              <span class="hk-whatsapp-option__icon">💬</span>
              <div class="hk-whatsapp-option__info">
                <strong>General Enquiry</strong>
                <span>Direct customer service support</span>
              </div>
            </button>
          </div>

          <!-- Custom quick message input preview -->
          <div class="hk-whatsapp-custom-box">
            <input type="text" id="hkWhatsappCustomMsg" placeholder="Or type a custom note..." class="hk-whatsapp-input">
            <button type="button" id="hkWhatsappCustomSend" class="hk-whatsapp-send-btn" title="Send via WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        <div class="hk-whatsapp-menu__footer">
          <span>End-to-End Encrypted via Official WhatsApp API</span>
        </div>
      </div>

      <!-- Main Floating Circular Toggle Button -->
      <button type="button" class="hk-whatsapp-float-btn" id="hkWhatsappFloatBtn" aria-label="Open WhatsApp Smart Contact">
        <!-- Ping ripple ring -->
        <span class="hk-whatsapp-ping"></span>
        <!-- WhatsApp Icon SVG -->
        <svg class="hk-whatsapp-svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span class="hk-whatsapp-tooltip">Chat with us</span>
      </button>
    </div>

    <!-- Scoped Styles for WhatsApp Widget -->
    <style>
      .hk-whatsapp-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99990;
        font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
      }

      /* Floating Button */
      .hk-whatsapp-float-btn {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 25px -4px rgba(37, 211, 102, 0.45), 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
      }

      .hk-whatsapp-float-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 16px 32px -4px rgba(37, 211, 102, 0.55);
      }

      .hk-whatsapp-ping {
        position: absolute;
        inset: -3px;
        border-radius: 50%;
        border: 2px solid #25D366;
        opacity: 0.8;
        animation: hkPingPulse 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        pointer-events: none;
      }

      @keyframes hkPingPulse {
        0% { transform: scale(0.95); opacity: 0.9; }
        70% { transform: scale(1.35); opacity: 0; }
        100% { transform: scale(1.35); opacity: 0; }
      }

      .hk-whatsapp-tooltip {
        position: absolute;
        right: 70px;
        background: #183D32;
        color: #FFFFFF;
        font-size: 0.78rem;
        font-weight: 600;
        padding: 0.4rem 0.85rem;
        border-radius: 9999px;
        white-space: nowrap;
        pointer-events: none;
        box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        opacity: 0;
        transform: translateX(8px);
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .hk-whatsapp-float-btn:hover .hk-whatsapp-tooltip {
        opacity: 1;
        transform: translateX(0);
      }

      /* Popup Smart Menu Window */
      .hk-whatsapp-menu {
        position: absolute;
        bottom: 74px;
        right: 0;
        width: 340px;
        max-width: calc(100vw - 32px);
        background: #FFFFFF;
        border-radius: 20px;
        box-shadow: 0 24px 60px -12px rgba(24, 61, 50, 0.35), 0 0 0 1px rgba(24, 61, 50, 0.08);
        overflow: hidden;
        display: none;
        flex-direction: column;
        animation: hkMenuSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .hk-whatsapp-menu.is-active {
        display: flex;
      }

      @keyframes hkMenuSlideUp {
        from { opacity: 0; transform: translateY(12px) scale(0.96); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }

      .hk-whatsapp-menu__head {
        background: linear-gradient(135deg, #183D32, #102B23);
        color: #FFFFFF;
        padding: 1.15rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        position: relative;
      }

      .hk-whatsapp-menu__avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #25D366;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex-shrink: 0;
      }

      .hk-whatsapp-online-dot {
        position: absolute;
        bottom: 1px;
        right: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #22C55E;
        border: 2px solid #FFFFFF;
      }

      .hk-whatsapp-menu__title {
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.2;
      }

      .hk-whatsapp-menu__sub {
        font-size: 0.72rem;
        color: #A3BFB5;
        margin: 0.2rem 0 0;
      }

      .hk-whatsapp-menu__close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: #A3BFB5;
        font-size: 1.4rem;
        cursor: pointer;
        line-height: 1;
        padding: 2px;
      }

      .hk-whatsapp-menu__close:hover {
        color: #FFFFFF;
      }

      .hk-whatsapp-menu__body {
        padding: 1rem;
        background: #F9FAFB;
        max-height: 380px;
        overflow-y: auto;
      }

      .hk-whatsapp-menu__prompt {
        font-size: 0.78rem;
        color: #4F5E59;
        margin: 0 0 0.85rem;
        line-height: 1.45;
      }

      .hk-whatsapp-options {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .hk-whatsapp-option {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.65rem 0.85rem;
        background: #FFFFFF;
        border: 1px solid rgba(24, 61, 50, 0.08);
        border-radius: 12px;
        cursor: pointer;
        text-align: left;
        width: 100%;
        transition: all 0.2s ease;
      }

      .hk-whatsapp-option:hover {
        background: #F0FDF4;
        border-color: #86EFAC;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(37, 211, 102, 0.12);
      }

      .hk-whatsapp-option__icon {
        font-size: 1.25rem;
        line-height: 1;
      }

      .hk-whatsapp-option__info {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }

      .hk-whatsapp-option__info strong {
        font-size: 0.82rem;
        color: #183D32;
        font-weight: 700;
        line-height: 1.2;
      }

      .hk-whatsapp-option__info span {
        font-size: 0.72rem;
        color: #6A7973;
        margin-top: 0.15rem;
      }

      .hk-whatsapp-custom-box {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.85rem;
        background: #FFFFFF;
        border: 1px solid rgba(24, 61, 50, 0.12);
        border-radius: 10px;
        padding: 0.25rem 0.35rem;
      }

      .hk-whatsapp-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 0.78rem;
        padding: 0.35rem 0.5rem;
        background: transparent;
        color: #183D32;
      }

      .hk-whatsapp-send-btn {
        background: #25D366;
        color: #FFFFFF;
        border: none;
        border-radius: 8px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .hk-whatsapp-send-btn:hover {
        background: #128C7E;
      }

      .hk-whatsapp-menu__footer {
        padding: 0.55rem 1rem;
        background: #FFFFFF;
        border-top: 1px solid #ECEAE3;
        text-align: center;
        font-size: 0.68rem;
        color: #8C9993;
      }

      @media (max-width: 600px) {
        .hk-whatsapp-widget {
          bottom: 16px;
          right: 16px;
        }
        .hk-whatsapp-menu {
          bottom: 68px;
          right: 0;
          width: 320px;
        }
      }
    </style>
  `;

  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    placeholder.innerHTML = footerHtml;

    // Smart WhatsApp Dynamic Widget Handlers
    const floatBtn = document.getElementById("hkWhatsappFloatBtn");
    const menu = document.getElementById("hkWhatsappMenu");
    const closeBtn = document.getElementById("hkWhatsappClose");
    const options = document.querySelectorAll(".hk-whatsapp-option");
    const customInput = document.getElementById("hkWhatsappCustomMsg");
    const customSendBtn = document.getElementById("hkWhatsappCustomSend");

    function toggleMenu() {
      if (menu) {
        menu.classList.toggle("is-active");
        if (menu.classList.contains("is-active") && customInput) {
          customInput.focus();
        }
      }
    }

    function closeMenu() {
      if (menu) menu.classList.remove("is-active");
    }

    function openWhatsapp(text) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
      closeMenu();
    }

    if (floatBtn) {
      floatBtn.addEventListener("click", toggleMenu);
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }

    // Dynamic Pre-filled message click
    options.forEach(opt => {
      opt.addEventListener("click", () => {
        const msg = opt.getAttribute("data-msg") || "Hello HAKA SOLUTIONS, I would like to get in touch.";
        openWhatsapp(msg);
      });
    });

    // Custom text note send
    function sendCustom() {
      const txt = (customInput.value || "").trim();
      const finalMsg = txt || "Hello HAKA SOLUTIONS, I am visiting your website and would like to connect.";
      openWhatsapp(finalMsg);
    }

    if (customSendBtn) {
      customSendBtn.addEventListener("click", sendCustom);
    }
    if (customInput) {
      customInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          sendCustom();
        }
      });
    }

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      const widget = document.getElementById("hkWhatsappWidget");
      if (widget && !widget.contains(e.target)) {
        closeMenu();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", renderFooter);
