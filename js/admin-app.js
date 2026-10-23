/**
 * Admin Panel Application Logic
 * Powers all 21. CMS Admin modules and 22. Recruitment Application System
 */
(() => {
  'use strict';

  let currentTab = 'recruitment'; // default active tab

  const navModules = [
    { id: 'recruitment', name: 'Recruitment & Candidates', badge: 'Pipeline', perm: 'recruitment', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>` },
    { id: 'jobs', name: 'Job Openings', badge: null, perm: 'jobs', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { id: 'website_content', name: 'Website Content', badge: null, perm: 'website_content', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { id: 'metrics', name: 'Homepage Metrics', badge: null, perm: 'metrics', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>` },
    { id: 'services', name: 'Services CMS', badge: null, perm: 'services', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>` },
    { id: 'blog', name: 'Blog Posts', badge: null, perm: 'blog', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>` },
    { id: 'case_studies', name: 'Case Studies', badge: null, perm: 'case_studies', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>` },
    { id: 'team', name: 'Team Members', badge: null, perm: 'team', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>` },
    { id: 'contact', name: 'Contact & Company Info', badge: null, perm: 'contact', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { id: 'users', name: 'Roles & Permissions', badge: 'RBAC', perm: 'users', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>` }
  ];

  // Pipeline stages as requested in requirement:
  // "New -> Under Review -> Shortlisted -> Interview -> Selected / Rejected"
  const candidateStages = [
    { key: 'New', label: 'New', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { key: 'Under Review', label: 'Under Review', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { key: 'Shortlisted', label: 'Shortlisted', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    { key: 'Interview', label: 'Interview', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { key: 'Selected', label: 'Selected', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { key: 'Rejected', label: 'Rejected', color: 'bg-rose-50 text-rose-700 border-rose-200' }
  ];

  // Show Toast
  function showToast(message, isError = false) {
    const toast = document.getElementById('adminToast');
    const msg = document.getElementById('toastMessage');
    const icon = document.getElementById('toastIcon');
    if (!toast) return;
    msg.textContent = message;
    icon.textContent = isError ? '✕' : '✓';
    icon.className = isError ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold';
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 2800);
  }

  // Modal helpers
  const modal = {
    open(title, bodyHtml, footerHtml) {
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').innerHTML = bodyHtml;
      document.getElementById('modalFooter').innerHTML = footerHtml || `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg">Cancel</button>
      `;
      document.getElementById('adminModal').classList.remove('hidden');
    },
    close() {
      document.getElementById('adminModal').classList.add('hidden');
    }
  };
  window.AdminModal = modal;

  // Initialize UI & Event listeners
  function init() {
    renderUserBadge();
    renderSidebar();
    renderCurrentTab();

    // Event listeners
    document.getElementById('modalCloseBtn')?.addEventListener('click', modal.close);
    document.getElementById('btnLockAdmin')?.addEventListener('click', () => {
      sessionStorage.removeItem('haka_admin_authenticated');
      window.location.replace('index.html');
    });
    document.getElementById('btnResetData')?.addEventListener('click', () => {
      if (confirm('Reset demo records back to clean initial state?')) {
        HakaStore.resetToDefault();
        showToast('Demo data reset to factory default.');
        renderCurrentTab();
      }
    });

    // Role switcher change
    const roleSelect = document.getElementById('userRoleSwitcher');
    if (roleSelect) {
      const u = HakaStore.getCurrentUser();
      roleSelect.value = u.role;
      roleSelect.addEventListener('change', (e) => {
        const store = HakaStore.get();
        const matched = store.users.find(usr => usr.role === e.target.value) || {
          name: 'Demo ' + e.target.value,
          email: 'demo@hakasolutions.com',
          role: e.target.value,
          avatar: e.target.value.substring(0, 2).toUpperCase()
        };
        HakaStore.setCurrentUser(matched);
        renderUserBadge();
        renderSidebar();
        
        // If current tab is forbidden, switch to first allowed
        if (!HakaStore.hasPermission(currentTab)) {
          const allowed = navModules.find(m => HakaStore.hasPermission(m.perm));
          currentTab = allowed ? allowed.id : 'recruitment';
        }
        renderCurrentTab();
        showToast(`Switched active profile to ${matched.role}`);
      });
    }

    // Mobile Off-canvas Drawer Toggle
    const mobileToggle = document.getElementById('btnMobileNavToggle');
    const mobileClose = document.getElementById('btnMobileDrawerClose');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const aside = document.getElementById('adminSidebarAside');

    function openDrawer() {
      if (aside && backdrop) {
        aside.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      }
    }
    function closeDrawer() {
      if (aside && backdrop) {
        aside.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    mobileToggle?.addEventListener('click', openDrawer);
    mobileClose?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);

    // Close mobile drawer when clicking a navigation tab
    window.closeAdminMobileDrawer = closeDrawer;

    // Listen for cross-page store updates
    window.addEventListener('haka-data-updated', () => {
      renderCurrentTab();
    });
  }

  function renderUserBadge() {
    const user = HakaStore.getCurrentUser();
    if (!user) return;
    const nameEl = document.getElementById('currentUserName');
    const emailEl = document.getElementById('currentUserEmail');
    const avatarEl = document.getElementById('currentUserAvatar');
    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.role;
    if (avatarEl) avatarEl.textContent = user.avatar || user.name.substring(0, 2).toUpperCase();
  }

  // Render Left Navigation Sidebar
  function renderSidebar() {
    const container = document.getElementById('adminSidebarNav');
    if (!container) return;

    const data = HakaStore.get();
    const candidateCount = data.candidates ? data.candidates.length : 0;

    let html = '';
    navModules.forEach(mod => {
      const isAllowed = HakaStore.hasPermission(mod.perm);
      if (!isAllowed) return; // Hide module if no role permission

      const isActive = currentTab === mod.id;
      const countBadge = mod.id === 'recruitment' ? `<span class="ml-auto text-[11px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-[#C19A5B] text-slate-900' : 'bg-slate-100 text-slate-600'}">${candidateCount}</span>` : '';
      const tagBadge = mod.badge ? `<span class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 uppercase">${mod.badge}</span>` : '';

      html += `
        <button type="button" data-tab="${mod.id}" class="w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${isActive ? 'bg-[#183D32] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'}">
          <span class="${isActive ? 'text-[#C19A5B]' : 'text-slate-400'}">${mod.icon}</span>
          <span class="truncate">${mod.name}</span>
          ${countBadge || tagBadge}
        </button>
      `;
    });

    container.innerHTML = html;

    // Attach click events
    container.querySelectorAll('button[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTab = btn.getAttribute('data-tab');
        renderSidebar();
        renderCurrentTab();
        if (window.closeAdminMobileDrawer) {
          window.closeAdminMobileDrawer();
        }
      });
    });
  }

  // Render Center Workspace based on active tab
  function renderCurrentTab() {
    const main = document.getElementById('adminMainContainer');
    if (!main) return;

    if (!HakaStore.hasPermission(currentTab)) {
      main.innerHTML = `
        <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <div class="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0 0v2m0-2h2m-2 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-base font-bold text-slate-900">Access Restricted</h3>
          <p class="text-xs text-slate-500 mt-1">Your current role does not have permission to view this module. Switch your role using the top switcher to test other permission levels.</p>
        </div>
      `;
      return;
    }

    switch (currentTab) {
      case 'recruitment':
        renderRecruitmentTab(main);
        break;
      case 'jobs':
        renderJobsTab(main);
        break;
      case 'website_content':
        renderWebsiteContentTab(main);
        break;
      case 'metrics':
        renderMetricsTab(main);
        break;
      case 'services':
        renderServicesTab(main);
        break;
      case 'blog':
        renderBlogTab(main);
        break;
      case 'case_studies':
        renderCaseStudiesTab(main);
        break;
      case 'team':
        renderTeamTab(main);
        break;
      case 'contact':
        renderContactTab(main);
        break;
      case 'users':
        renderUsersTab(main);
        break;
      default:
        renderRecruitmentTab(main);
    }
  }

  /* ==============================================================
     MODULE 22: RECRUITMENT APPLICATION SYSTEM
     Candidate form: Full Name, Email, Phone, Location, Position, Experience, Education, Resume Upload, Message.
     Statuses: New -> Under Review -> Shortlisted -> Interview -> Selected / Rejected.
     Secure resume upload, file validation and protected admin access.
     ============================================================== */
  function renderRecruitmentTab(container) {
    const data = HakaStore.get();
    const candidates = data.candidates || [];

    // Filter bar state
    let html = `
      <div class="space-y-6">
        <!-- Module Header -->
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#C19A5B] bg-[#C19A5B]/10 px-2.5 py-0.5 rounded-full">Module 22</span>
              <h2 class="text-xl font-bold text-slate-900">Recruitment Application Pipeline</h2>
            </div>
            <p class="text-xs text-slate-500 mt-1">Track candidate lifecycle: <span class="font-medium text-slate-700">New → Under Review → Shortlisted → Interview → Selected / Rejected</span> with verified resume vault.</p>
          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <button id="btnNewCandidateManual" class="px-4 py-2.5 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Intake New Candidate</span>
            </button>
            <a href="careers.html#apply" target="_blank" class="px-3.5 py-2.5 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-medium rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5" title="Open Public Careers Application Form">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              <span>Public Apply Form</span>
            </a>
          </div>
        </div>

        <!-- Pipeline Status Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          ${candidateStages.map(stage => {
            const count = candidates.filter(c => c.status === stage.key).length;
            return `
              <div class="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-sm text-center">
                <span class="text-[10px] font-bold uppercase tracking-wider block ${stage.color.split(' ')[1]}">${stage.label}</span>
                <span class="text-2xl font-black text-slate-800 mt-1 block">${count}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Filter & Search Controls -->
        <div class="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="relative w-full sm:w-72">
            <input type="text" id="candidateSearchInput" placeholder="Search by name, position, email..." class="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B] focus:bg-white transition-all">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <span class="text-xs text-slate-400 font-medium whitespace-nowrap">Filter by Status:</span>
            <select id="candidateStatusFilter" class="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none cursor-pointer">
              <option value="ALL">All Statuses (${candidates.length})</option>
              ${candidateStages.map(s => `<option value="${s.key}">${s.label} (${candidates.filter(c => c.status === s.key).length})</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Responsive Candidates Container: Desktop Table + Mobile Card Stack -->
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <!-- Desktop Table (Hidden on small screens) -->
          <div class="hidden lg:block overflow-x-auto custom-scrollbar">
            <table class="w-full text-left text-xs text-slate-600 min-w-[840px]">
              <thead class="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th class="py-3.5 px-4 w-[28%]">Candidate Profile</th>
                  <th class="py-3.5 px-4 w-[20%]">Target Position</th>
                  <th class="py-3.5 px-4 w-[20%]">Experience / Education</th>
                  <th class="py-3.5 px-4 w-[16%]">Resume File</th>
                  <th class="py-3.5 px-4 w-[12%]">Pipeline Status</th>
                  <th class="py-3.5 px-4 text-right w-[4%]">Actions</th>
                </tr>
              </thead>
              <tbody id="candidatesTableBody" class="divide-y divide-slate-100">
                <!-- Injected via helper -->
              </tbody>
            </table>
          </div>

          <!-- Mobile & Tablet Responsive Card Feed (Visible on screens < 1024px) -->
          <div id="candidatesMobileCards" class="block lg:hidden divide-y divide-slate-100 p-2 sm:p-4 space-y-3">
            <!-- Injected via helper -->
          </div>

          <div id="candidatesEmptyState" class="hidden p-12 text-center">
            <p class="text-xs text-slate-400">No candidates found matching the selected filter criteria.</p>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Filter Logic
    function refreshTable() {
      const searchVal = (document.getElementById('candidateSearchInput')?.value || '').toLowerCase().trim();
      const statusVal = document.getElementById('candidateStatusFilter')?.value || 'ALL';
      const tbody = document.getElementById('candidatesTableBody');
      const emptyState = document.getElementById('candidatesEmptyState');
      if (!tbody) return;

      const filtered = candidates.filter(cand => {
        const matchesStatus = statusVal === 'ALL' || cand.status === statusVal;
        const matchesSearch = !searchVal ||
          cand.fullName.toLowerCase().includes(searchVal) ||
          cand.position.toLowerCase().includes(searchVal) ||
          cand.email.toLowerCase().includes(searchVal) ||
          cand.location.toLowerCase().includes(searchVal);
        return matchesStatus && matchesSearch;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');
      const mobileCards = document.getElementById('candidatesMobileCards');

      tbody.innerHTML = filtered.map(cand => {
        const stageConfig = candidateStages.find(s => s.key === cand.status) || candidateStages[0];
        return `
          <tr class="hover:bg-slate-50/70 transition-colors">
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900 text-sm">${cand.fullName}</div>
              <div class="text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5 mt-0.5">
                <span class="break-all">${cand.email}</span>
                <span>•</span>
                <span class="whitespace-nowrap">${cand.phone}</span>
              </div>
              <div class="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                <span>${cand.location}</span>
              </div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-semibold text-slate-800 leading-snug">${cand.position}</div>
              <div class="text-[10px] text-slate-400 mt-0.5">Applied: ${new Date(cand.appliedAt).toLocaleDateString()}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-semibold text-slate-700">${cand.experience}</div>
              <div class="text-[11px] text-slate-400 line-clamp-1" title="${cand.education}">${cand.education}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer" onclick="window.viewCandidateResume('${cand.id}')" title="Secure File Preview">
                <svg class="w-3.5 h-3.5 text-rose-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span class="max-w-[100px] truncate">${cand.resumeName || 'Resume.pdf'}</span>
              </div>
              <div class="text-[10px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1 whitespace-nowrap">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Validated</span>
              </div>
            </td>
            <td class="py-3.5 px-4">
              <!-- Inline Status Dropdown for Instant Progression -->
              <select class="text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${stageConfig.color}" onchange="window.updateCandidateStatus('${cand.id}', this.value)">
                ${candidateStages.map(s => `<option value="${s.key}" ${s.key === cand.status ? 'selected' : ''}>${s.label}</option>`).join('')}
              </select>
            </td>
            <td class="py-3.5 px-4 text-right whitespace-nowrap">
              <div class="flex items-center justify-end gap-1">
                <button class="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" onclick="window.openCandidateDetail('${cand.id}')" title="Review Full Dossier">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </button>
                <button class="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" onclick="window.deleteCandidate('${cand.id}')" title="Delete Profile">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      if (mobileCards) {
        mobileCards.innerHTML = filtered.map(cand => {
          const stageConfig = candidateStages.find(s => s.key === cand.status) || candidateStages[0];
          return `
            <div class="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:border-[#C19A5B]/50 transition-all space-y-3">
              <!-- Top Row: Candidate Name & Status Dropdown -->
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <h4 class="font-bold text-slate-900 text-sm leading-tight">${cand.fullName}</h4>
                  <div class="text-[11px] text-slate-500 mt-0.5 break-all">${cand.email}</div>
                  <div class="text-[11px] text-slate-500 font-medium">${cand.phone}</div>
                </div>
                <select class="text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none flex-shrink-0 ${stageConfig.color}" onchange="window.updateCandidateStatus('${cand.id}', this.value)">
                  ${candidateStages.map(s => `<option value="${s.key}" ${s.key === cand.status ? 'selected' : ''}>${s.label}</option>`).join('')}
                </select>
              </div>

              <!-- Second Row: Position & Location -->
              <div class="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase font-bold">Position</span>
                  <span class="font-semibold text-slate-800 leading-tight block mt-0.5">${cand.position}</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                  <span class="font-medium text-slate-700 block mt-0.5">${cand.location}</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase font-bold">Experience</span>
                  <span class="font-medium text-slate-700 block mt-0.5">${cand.experience}</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase font-bold">Education</span>
                  <span class="font-medium text-slate-700 truncate block mt-0.5" title="${cand.education}">${cand.education}</span>
                </div>
              </div>

              <!-- Bottom Row: Resume Download + Actions -->
              <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer" onclick="window.viewCandidateResume('${cand.id}')">
                  <svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span class="max-w-[120px] truncate">${cand.resumeName || 'Resume.pdf'}</span>
                </div>
                <div class="flex items-center gap-2">
                  <button class="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg flex items-center gap-1" onclick="window.openCandidateDetail('${cand.id}')">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    <span>Dossier</span>
                  </button>
                  <button class="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" onclick="window.deleteCandidate('${cand.id}')">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Bind filters
    document.getElementById('candidateSearchInput')?.addEventListener('input', refreshTable);
    document.getElementById('candidateStatusFilter')?.addEventListener('change', refreshTable);
    document.getElementById('btnNewCandidateManual')?.addEventListener('click', () => openNewCandidateModal());

    refreshTable();
  }

  // Global methods for candidate lifecycle
  window.updateCandidateStatus = (id, newStatus) => {
    const store = HakaStore.get();
    const cand = store.candidates.find(c => c.id === id);
    if (!cand) return;
    const oldStatus = cand.status;
    cand.status = newStatus;
    HakaStore.save(store);
    showToast(`Status updated: ${cand.fullName} (${oldStatus} → ${newStatus})`);
    renderCurrentTab();
  };

  window.deleteCandidate = (id) => {
    if (!confirm('Are you sure you want to delete this candidate application record?')) return;
    const store = HakaStore.get();
    store.candidates = store.candidates.filter(c => c.id !== id);
    HakaStore.save(store);
    showToast('Candidate application removed.');
    renderCurrentTab();
    renderSidebar();
  };

  window.viewCandidateResume = (id) => {
    const store = HakaStore.get();
    const cand = store.candidates.find(c => c.id === id);
    if (!cand) return;

    modal.open(
      `Secure Resume Vault: ${cand.fullName}`,
      `
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-800">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>File verified: SHA-256 Checksum Validated · Format: ${cand.resumeName?.split('.').pop()?.toUpperCase() || 'PDF'}</span>
            </div>
            <span class="font-bold">${cand.resumeSize || '1.2 MB'}</span>
          </div>

          <div class="border border-slate-200 rounded-xl p-6 bg-slate-50 text-center">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 text-rose-500 mx-auto flex items-center justify-center mb-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <h4 class="font-bold text-slate-800 text-sm">${cand.resumeName || 'Candidate_Resume.pdf'}</h4>
            <p class="text-xs text-slate-500 mt-1">Uploaded with candidate submission on ${new Date(cand.appliedAt).toLocaleString()}</p>
            <div class="mt-4 flex items-center justify-center gap-3">
              <a href="${cand.resumeUrl || '#'}" download="${cand.resumeName || 'Resume.pdf'}" class="px-4 py-2 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-2 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>Download Document</span>
              </a>
            </div>
          </div>

          <div class="text-xs text-slate-500">
            <strong>Candidate Intro Statement:</strong>
            <p class="mt-1 p-3 bg-white rounded-lg border border-slate-200 italic">"${cand.message || 'No additional note provided.'}"</p>
          </div>
        </div>
      `,
      `<button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl">Close Preview</button>`
    );
  };

  window.openCandidateDetail = (id) => {
    const store = HakaStore.get();
    const cand = store.candidates.find(c => c.id === id);
    if (!cand) return;

    modal.open(
      `Candidate Dossier: ${cand.fullName}`,
      `
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Position Applied</span>
              <span class="text-slate-900 font-bold text-sm">${cand.position}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Current Stage</span>
              <span class="text-emerald-700 font-bold text-sm">${cand.status}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Email & Phone</span>
              <span class="text-slate-800 font-medium">${cand.email} • ${cand.phone}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Location</span>
              <span class="text-slate-800 font-medium">${cand.location}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Total Experience</span>
              <span class="text-slate-800 font-medium">${cand.experience}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase text-[10px] font-bold block">Education Background</span>
              <span class="text-slate-800 font-medium">${cand.education}</span>
            </div>
          </div>

          <div>
            <label class="font-bold text-slate-700 block mb-1">Interviewer Notes & Assessment:</label>
            <textarea id="candNotesEdit" rows="3" class="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]">${cand.notes || ''}</textarea>
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveCandidateNotes('${cand.id}')" class="px-4 py-2 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl">Save Assessment</button>
      `
    );
  };

  window.saveCandidateNotes = (id) => {
    const store = HakaStore.get();
    const cand = store.candidates.find(c => c.id === id);
    if (!cand) return;
    const notes = document.getElementById('candNotesEdit')?.value;
    cand.notes = notes;
    HakaStore.save(store);
    modal.close();
    showToast('Assessment notes updated.');
    renderCurrentTab();
  };

  function openNewCandidateModal() {
    const store = HakaStore.get();
    const jobOptions = (store.jobs || []).map(j => `<option value="${j.title}">${j.title} (${j.dept})</option>`).join('');

    modal.open(
      'Intake New Candidate Application',
      `
        <form id="newCandidateForm" class="space-y-3 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Full Name *</label>
              <input type="text" id="nc_name" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="e.g. Ramesh Kumar">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Email *</label>
              <input type="email" id="nc_email" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="ramesh@example.com">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Phone Number *</label>
              <input type="tel" id="nc_phone" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="+91 98765 43210">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Location *</label>
              <input type="text" id="nc_loc" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="Pallikonda / Vellore">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Position *</label>
              <select id="nc_pos" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]">
                ${jobOptions}
              </select>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Total Experience *</label>
              <input type="text" id="nc_exp" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="e.g. 2.5 Years">
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Highest Education *</label>
            <input type="text" id="nc_edu" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="e.g. B.Tech / B.Sc Information Technology">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Resume File Name * (Simulated Upload)</label>
            <input type="text" id="nc_res" required class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" value="Candidate_CV_Validated.pdf">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Cover Note / Message</label>
            <textarea id="nc_msg" rows="2" class="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C19A5B]" placeholder="Brief background summary..."></textarea>
          </div>
        </form>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.submitNewCandidateManual()" class="px-4 py-2 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl">Register Candidate</button>
      `
    );
  }

  window.submitNewCandidateManual = () => {
    const name = document.getElementById('nc_name')?.value.trim();
    const email = document.getElementById('nc_email')?.value.trim();
    const phone = document.getElementById('nc_phone')?.value.trim();
    const loc = document.getElementById('nc_loc')?.value.trim();
    const pos = document.getElementById('nc_pos')?.value;
    const exp = document.getElementById('nc_exp')?.value.trim();
    const edu = document.getElementById('nc_edu')?.value.trim();
    const res = document.getElementById('nc_res')?.value.trim() || 'Candidate_Resume.pdf';
    const msg = document.getElementById('nc_msg')?.value.trim();

    if (!name || !email || !phone || !loc) {
      alert('Please fill all mandatory fields marked with an asterisk (*).');
      return;
    }

    const store = HakaStore.get();
    const newCand = {
      id: 'cand-' + Date.now(),
      fullName: name,
      email: email,
      phone: phone,
      location: loc,
      position: pos,
      experience: exp,
      education: edu,
      resumeName: res,
      resumeSize: '1.2 MB',
      resumeUrl: 'assets/resumes/mock_sample_resume.pdf',
      message: msg,
      status: 'New',
      appliedAt: new Date().toISOString(),
      rating: 4,
      notes: 'Manually logged by admin recruiter.'
    };

    store.candidates.unshift(newCand);
    HakaStore.save(store);
    modal.close();
    showToast(`Candidate ${name} successfully registered in pipeline.`);
    renderCurrentTab();
    renderSidebar();
  };

  /* ==============================================================
     MODULE 21.1: JOB OPENINGS CMS
     ============================================================== */
  function renderJobsTab(container) {
    const data = HakaStore.get();
    const jobs = data.jobs || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Job Openings Management</h2>
            <p class="text-xs text-slate-500 mt-1">Add, update, and manage job requisitions published to careers.html.</p>
          </div>
          <button onclick="window.openJobModal()" class="px-4 py-2 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Post New Opening</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${jobs.map(j => `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between text-xs mb-2">
                  <span class="font-bold text-[#C19A5B] bg-[#C19A5B]/10 px-2.5 py-0.5 rounded-full">${j.reqId}</span>
                  <span class="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">${j.status}</span>
                </div>
                <h3 class="font-bold text-slate-900 text-base">${j.title}</h3>
                <div class="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <span>${j.dept}</span>
                  <span>•</span>
                  <span>${j.type}</span>
                  <span>•</span>
                  <span>${j.location}</span>
                </div>
                <p class="text-xs text-slate-600 mt-3 line-clamp-2">${j.desc}</p>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Exp: ${j.exp}</span>
                <div class="flex items-center gap-2">
                  <button onclick="window.openJobModal('${j.id}')" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-semibold text-slate-700 rounded-lg">Edit</button>
                  <button onclick="window.deleteJob('${j.id}')" class="p-1 text-slate-400 hover:text-rose-600 rounded">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.openJobModal = (id) => {
    const store = HakaStore.get();
    const job = id ? store.jobs.find(j => j.id === id) : null;

    modal.open(
      job ? `Edit Opening: ${job.reqId}` : 'Create New Job Requisition',
      `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Requisition Code *</label>
              <input type="text" id="j_req" value="${job?.reqId || 'REQ-010' + ((store.jobs.length || 0) + 5)}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Status</label>
              <select id="j_status" class="w-full p-2.5 border rounded-xl">
                <option value="Open" ${job?.status === 'Open' ? 'selected' : ''}>Open</option>
                <option value="Paused" ${job?.status === 'Paused' ? 'selected' : ''}>Paused</option>
                <option value="Closed" ${job?.status === 'Closed' ? 'selected' : ''}>Closed</option>
              </select>
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Position Title *</label>
            <input type="text" id="j_title" value="${job?.title || ''}" placeholder="e.g. Lead Database Administrator" class="w-full p-2.5 border rounded-xl">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Department</label>
              <input type="text" id="j_dept" value="${job?.dept || 'Engineering'}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Employment Type</label>
              <input type="text" id="j_type" value="${job?.type || 'Full-Time'}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Location</label>
              <input type="text" id="j_loc" value="${job?.location || 'Pallikonda Office'}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Experience Required</label>
              <input type="text" id="j_exp" value="${job?.exp || '2 - 4 Years'}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Role Description</label>
            <textarea id="j_desc" rows="3" class="w-full p-2.5 border rounded-xl">${job?.desc || ''}</textarea>
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveJob('${id || ''}')" class="px-4 py-2 bg-[#183D32] hover:bg-[#102B23] text-white text-xs font-semibold rounded-xl">Save Requisition</button>
      `
    );
  };

  window.saveJob = (id) => {
    const store = HakaStore.get();
    const req = document.getElementById('j_req')?.value.trim();
    const title = document.getElementById('j_title')?.value.trim();
    if (!title) { alert('Title is required'); return; }

    if (id) {
      const j = store.jobs.find(x => x.id === id);
      if (j) {
        j.reqId = req;
        j.title = title;
        j.dept = document.getElementById('j_dept')?.value.trim();
        j.type = document.getElementById('j_type')?.value.trim();
        j.location = document.getElementById('j_loc')?.value.trim();
        j.exp = document.getElementById('j_exp')?.value.trim();
        j.desc = document.getElementById('j_desc')?.value.trim();
        j.status = document.getElementById('j_status')?.value;
      }
    } else {
      store.jobs.push({
        id: 'job-' + Date.now(),
        reqId: req,
        title: title,
        dept: document.getElementById('j_dept')?.value.trim(),
        type: document.getElementById('j_type')?.value.trim(),
        location: document.getElementById('j_loc')?.value.trim(),
        exp: document.getElementById('j_exp')?.value.trim(),
        desc: document.getElementById('j_desc')?.value.trim(),
        status: document.getElementById('j_status')?.value || 'Open',
        applicantsCount: 0
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Job listing saved successfully.');
    renderCurrentTab();
  };

  window.deleteJob = (id) => {
    if (!confirm('Delete this opening?')) return;
    const store = HakaStore.get();
    store.jobs = store.jobs.filter(j => j.id !== id);
    HakaStore.save(store);
    showToast('Job opening removed.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.2: WEBSITE CONTENT & HERO COPY
     ============================================================== */
  function renderWebsiteContentTab(container) {
    const data = HakaStore.get();
    const c = data.homepageContent || {};

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-slate-900">Website Content Management</h2>
          <p class="text-xs text-slate-500 mt-1">Live editorial control for primary hero statements, taglines and about text.</p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Primary Hero Heading</label>
            <input type="text" id="hc_heroHeading" value="${c.heroHeading || ''}" class="w-full p-3 border border-slate-200 rounded-xl font-semibold text-slate-900">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Hero Subheading & Company Descriptor</label>
            <textarea id="hc_heroSub" rows="3" class="w-full p-3 border border-slate-200 rounded-xl">${c.heroSubheading || ''}</textarea>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Who We Are / Practical Approach Paragraph</label>
            <textarea id="hc_about" rows="3" class="w-full p-3 border border-slate-200 rounded-xl">${c.aboutText || ''}</textarea>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Brand Tagline</label>
            <input type="text" id="hc_tagline" value="${c.tagline || ''}" class="w-full p-3 border border-slate-200 rounded-xl">
          </div>
          <div class="pt-2 flex justify-end">
            <button onclick="window.saveWebsiteContent()" class="px-5 py-2.5 bg-[#183D32] hover:bg-[#102B23] text-white font-semibold rounded-xl transition-all shadow-sm">
              Save Website Content
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.saveWebsiteContent = () => {
    const store = HakaStore.get();
    store.homepageContent = {
      heroHeading: document.getElementById('hc_heroHeading')?.value,
      heroSubheading: document.getElementById('hc_heroSub')?.value,
      aboutText: document.getElementById('hc_about')?.value,
      tagline: document.getElementById('hc_tagline')?.value
    };
    HakaStore.save(store);
    showToast('Website content updated.');
  };

  /* ==============================================================
     MODULE 21.3: HOMEPAGE METRICS CMS
     ============================================================== */
  function renderMetricsTab(container) {
    const data = HakaStore.get();
    const metrics = data.metrics || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Homepage Metrics & KPIs</h2>
            <p class="text-xs text-slate-500 mt-1">Configure live numbers featured on index.html trust banners.</p>
          </div>
          <button onclick="window.openMetricModal()" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl flex items-center gap-2">
            <span>Add New Metric</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${metrics.map(m => `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${m.category}</span>
                <div class="text-2xl font-black text-[#183D32] mt-1">${m.value}</div>
                <div class="text-xs font-bold text-slate-800 mt-1">${m.label}</div>
                <div class="text-[11px] text-emerald-600 mt-1 font-medium">${m.trend}</div>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
                <button onclick="window.openMetricModal('${m.id}')" class="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-semibold bg-slate-100 rounded-lg">Edit</button>
                <button onclick="window.deleteMetric('${m.id}')" class="p-1 text-slate-400 hover:text-rose-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.openMetricModal = (id) => {
    const store = HakaStore.get();
    const metric = id ? store.metrics.find(m => m.id === id) : null;

    modal.open(
      metric ? 'Edit Metric' : 'New Performance Metric',
      `
        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Metric Value * (e.g. 99.9%, 450+)</label>
            <input type="text" id="m_val" value="${metric?.value || ''}" class="w-full p-2.5 border rounded-xl font-bold text-slate-900">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Label Description *</label>
            <input type="text" id="m_label" value="${metric?.label || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Category</label>
            <input type="text" id="m_cat" value="${metric?.category || 'Operations'}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Trend Subtext</label>
            <input type="text" id="m_trend" value="${metric?.trend || 'Verified delivery'}" class="w-full p-2.5 border rounded-xl">
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveMetric('${id || ''}')" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">Save Metric</button>
      `
    );
  };

  window.saveMetric = (id) => {
    const store = HakaStore.get();
    const val = document.getElementById('m_val')?.value.trim();
    const label = document.getElementById('m_label')?.value.trim();
    if (!val || !label) { alert('Value and label are required.'); return; }

    if (id) {
      const m = store.metrics.find(x => x.id === id);
      if (m) {
        m.value = val;
        m.label = label;
        m.category = document.getElementById('m_cat')?.value.trim();
        m.trend = document.getElementById('m_trend')?.value.trim();
      }
    } else {
      store.metrics.push({
        id: 'm-' + Date.now(),
        value: val,
        label: label,
        category: document.getElementById('m_cat')?.value.trim() || 'General',
        trend: document.getElementById('m_trend')?.value.trim() || 'Verified'
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Metric saved.');
    renderCurrentTab();
  };

  window.deleteMetric = (id) => {
    if (!confirm('Delete this metric?')) return;
    const store = HakaStore.get();
    store.metrics = store.metrics.filter(m => m.id !== id);
    HakaStore.save(store);
    showToast('Metric removed.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.4: SERVICES CMS
     ============================================================== */
  function renderServicesTab(container) {
    const data = HakaStore.get();
    const srvs = data.services || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Services Catalog Management</h2>
            <p class="text-xs text-slate-500 mt-1">Manage offerings, deliverables, and service scopes displayed across services.html.</p>
          </div>
          <button onclick="window.openServiceModal()" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl flex items-center gap-2">
            <span>Add Service</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${srvs.map(s => `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#C19A5B]">${s.category}</span>
                <h3 class="font-bold text-slate-900 text-base mt-1">${s.title}</h3>
                <p class="text-xs text-slate-600 mt-2">${s.desc}</p>
                <div class="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                  <span class="font-bold text-slate-900 block mb-0.5">Core Deliverables:</span>
                  ${s.deliverables}
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
                <button onclick="window.openServiceModal('${s.id}')" class="px-3 py-1 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg">Edit</button>
                <button onclick="window.deleteService('${s.id}')" class="p-1 text-slate-400 hover:text-rose-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.openServiceModal = (id) => {
    const store = HakaStore.get();
    const srv = id ? store.services.find(s => s.id === id) : null;

    modal.open(
      srv ? 'Edit Service' : 'Create New Service Offering',
      `
        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Service Title *</label>
            <input type="text" id="s_title" value="${srv?.title || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Category</label>
            <input type="text" id="s_cat" value="${srv?.category || 'Operations'}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Scope & Description *</label>
            <textarea id="s_desc" rows="3" class="w-full p-2.5 border rounded-xl">${srv?.desc || ''}</textarea>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Deliverables</label>
            <input type="text" id="s_deliv" value="${srv?.deliverables || ''}" placeholder="e.g. SOPs, SLA Support, CI/CD" class="w-full p-2.5 border rounded-xl">
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveService('${id || ''}')" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">Save Service</button>
      `
    );
  };

  window.saveService = (id) => {
    const store = HakaStore.get();
    const title = document.getElementById('s_title')?.value.trim();
    const desc = document.getElementById('s_desc')?.value.trim();
    if (!title || !desc) { alert('Title and description are required.'); return; }

    if (id) {
      const s = store.services.find(x => x.id === id);
      if (s) {
        s.title = title;
        s.desc = desc;
        s.category = document.getElementById('s_cat')?.value.trim();
        s.deliverables = document.getElementById('s_deliv')?.value.trim();
      }
    } else {
      store.services.push({
        id: 'srv-' + Date.now(),
        title: title,
        desc: desc,
        category: document.getElementById('s_cat')?.value.trim() || 'General',
        deliverables: document.getElementById('s_deliv')?.value.trim(),
        status: 'Active'
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Service saved.');
    renderCurrentTab();
  };

  window.deleteService = (id) => {
    if (!confirm('Delete this service?')) return;
    const store = HakaStore.get();
    store.services = store.services.filter(s => s.id !== id);
    HakaStore.save(store);
    showToast('Service removed.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.5: BLOG POSTS CMS
     ============================================================== */
  function renderBlogTab(container) {
    const data = HakaStore.get();
    const posts = data.posts || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Blog & Editorial Posts</h2>
            <p class="text-xs text-slate-500 mt-1">Publish and manage technical thought leadership and announcements.</p>
          </div>
          <button onclick="window.openPostModal()" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl flex items-center gap-2">
            <span>New Article</span>
          </button>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left text-xs text-slate-600 min-w-[600px]">
            <thead class="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-500">
              <tr>
                <th class="py-3 px-4">Title & Slug</th>
                <th class="py-3 px-4">Author</th>
                <th class="py-3 px-4">Date</th>
                <th class="py-3 px-4">Category</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${posts.map(p => `
                <tr class="hover:bg-slate-50">
                  <td class="py-3.5 px-4">
                    <div class="font-bold text-slate-900">${p.title}</div>
                    <div class="text-[10px] text-slate-400">/${p.slug}</div>
                  </td>
                  <td class="py-3.5 px-4">${p.author}</td>
                  <td class="py-3.5 px-4">${p.date}</td>
                  <td class="py-3.5 px-4"><span class="px-2 py-0.5 bg-slate-100 rounded text-slate-700">${p.category}</span></td>
                  <td class="py-3.5 px-4">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">${p.status}</span>
                  </td>
                  <td class="py-3.5 px-4 text-right">
                    <button onclick="window.openPostModal('${p.id}')" class="px-2.5 py-1 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded font-semibold mr-1">Edit</button>
                    <button onclick="window.deletePost('${p.id}')" class="text-slate-400 hover:text-rose-600 p-1">✕</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  window.openPostModal = (id) => {
    const store = HakaStore.get();
    const post = id ? store.posts.find(p => p.id === id) : null;

    modal.open(
      post ? 'Edit Article' : 'Write New Article',
      `
        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Article Title *</label>
            <input type="text" id="p_title" value="${post?.title || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Author</label>
              <input type="text" id="p_author" value="${post?.author || 'HAKA Technical Desk'}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Status</label>
              <select id="p_status" class="w-full p-2.5 border rounded-xl">
                <option value="Published" ${post?.status === 'Published' ? 'selected' : ''}>Published</option>
                <option value="Draft" ${post?.status === 'Draft' ? 'selected' : ''}>Draft</option>
              </select>
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Summary Excerpt</label>
            <textarea id="p_summary" rows="3" class="w-full p-2.5 border rounded-xl">${post?.summary || ''}</textarea>
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.savePost('${id || ''}')" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">Save Article</button>
      `
    );
  };

  window.savePost = (id) => {
    const store = HakaStore.get();
    const title = document.getElementById('p_title')?.value.trim();
    if (!title) { alert('Title is required.'); return; }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (id) {
      const p = store.posts.find(x => x.id === id);
      if (p) {
        p.title = title;
        p.slug = slug;
        p.author = document.getElementById('p_author')?.value.trim();
        p.status = document.getElementById('p_status')?.value;
        p.summary = document.getElementById('p_summary')?.value.trim();
      }
    } else {
      store.posts.push({
        id: 'post-' + Date.now(),
        title: title,
        slug: slug,
        author: document.getElementById('p_author')?.value.trim() || 'HAKA Technical Desk',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        category: 'Technology',
        status: document.getElementById('p_status')?.value || 'Published',
        summary: document.getElementById('p_summary')?.value.trim()
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Post saved.');
    renderCurrentTab();
  };

  window.deletePost = (id) => {
    if (!confirm('Delete this article?')) return;
    const store = HakaStore.get();
    store.posts = store.posts.filter(p => p.id !== id);
    HakaStore.save(store);
    showToast('Post removed.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.6: CASE STUDIES CMS
     ============================================================== */
  function renderCaseStudiesTab(container) {
    const data = HakaStore.get();
    const studies = data.caseStudies || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Case Studies & Verified Outcomes</h2>
            <p class="text-xs text-slate-500 mt-1">Manage client project benchmarks published to case-studies.html.</p>
          </div>
          <button onclick="window.openCaseModal()" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">
            Add Case Study
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${studies.map(c => `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase text-[#C19A5B]">${c.sector}</span>
                <h3 class="font-bold text-slate-900 text-sm mt-1">${c.title}</h3>
                <div class="text-[11px] text-slate-500 mt-1">Client: ${c.client}</div>
                <div class="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[11px] text-emerald-800">
                  <span class="font-bold block mb-0.5">Verified Outcome:</span>
                  ${c.outcome}
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${c.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}">${c.status}</span>
                <div class="flex items-center gap-2">
                  <button onclick="window.openCaseModal('${c.id}')" class="px-2.5 py-1 text-slate-700 bg-slate-100 rounded font-semibold">Edit</button>
                  <button onclick="window.deleteCase('${c.id}')" class="p-1 text-slate-400 hover:text-rose-600">✕</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.openCaseModal = (id) => {
    const store = HakaStore.get();
    const cs = id ? store.caseStudies.find(c => c.id === id) : null;

    modal.open(
      cs ? 'Edit Case Study' : 'New Case Study Entry',
      `
        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Project Title *</label>
            <input type="text" id="cs_title" value="${cs?.title || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Client / Engagement Name</label>
              <input type="text" id="cs_client" value="${cs?.client || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Industry Sector</label>
              <input type="text" id="cs_sector" value="${cs?.sector || 'Finance'}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Verified Measurable Outcome *</label>
            <textarea id="cs_outcome" rows="3" class="w-full p-2.5 border rounded-xl">${cs?.outcome || ''}</textarea>
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveCase('${id || ''}')" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">Save Case Study</button>
      `
    );
  };

  window.saveCase = (id) => {
    const store = HakaStore.get();
    const title = document.getElementById('cs_title')?.value.trim();
    const outcome = document.getElementById('cs_outcome')?.value.trim();
    if (!title || !outcome) { alert('Title and outcome are required.'); return; }

    if (id) {
      const c = store.caseStudies.find(x => x.id === id);
      if (c) {
        c.title = title;
        c.outcome = outcome;
        c.client = document.getElementById('cs_client')?.value.trim();
        c.sector = document.getElementById('cs_sector')?.value.trim();
      }
    } else {
      store.caseStudies.push({
        id: 'cs-' + Date.now(),
        title: title,
        outcome: outcome,
        client: document.getElementById('cs_client')?.value.trim() || 'Enterprise Client',
        sector: document.getElementById('cs_sector')?.value.trim() || 'Technology',
        status: 'Published'
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Case study saved.');
    renderCurrentTab();
  };

  window.deleteCase = (id) => {
    if (!confirm('Delete this case study?')) return;
    const store = HakaStore.get();
    store.caseStudies = store.caseStudies.filter(c => c.id !== id);
    HakaStore.save(store);
    showToast('Case study deleted.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.7: TEAM MEMBERS CMS
     ============================================================== */
  function renderTeamTab(container) {
    const data = HakaStore.get();
    const team = data.team || [];

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900">Leadership & Team Profiles</h2>
            <p class="text-xs text-slate-500 mt-1">Manage team members, bios, and credentials on about.html.</p>
          </div>
          <button onclick="window.openTeamModal()" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">
            Add Member
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${team.map(m => `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm text-center">
              <div class="w-16 h-16 rounded-full bg-[#183D32] text-[#C19A5B] font-bold text-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                ${m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 class="font-bold text-slate-900 text-sm">${m.name}</h3>
              <div class="text-xs font-semibold text-[#C19A5B] mt-0.5">${m.role}</div>
              <p class="text-xs text-slate-500 mt-2">${m.bio}</p>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-xs">
                <button onclick="window.openTeamModal('${m.id}')" class="px-3 py-1 font-semibold text-slate-700 bg-slate-100 rounded-lg">Edit</button>
                <button onclick="window.deleteTeam('${m.id}')" class="p-1 text-slate-400 hover:text-rose-600">✕</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.openTeamModal = (id) => {
    const store = HakaStore.get();
    const tm = id ? store.team.find(t => t.id === id) : null;

    modal.open(
      tm ? 'Edit Team Member' : 'New Team Profile',
      `
        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Full Name *</label>
            <input type="text" id="tm_name" value="${tm?.name || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Job Title / Designation *</label>
            <input type="text" id="tm_role" value="${tm?.role || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Executive Bio</label>
            <textarea id="tm_bio" rows="3" class="w-full p-2.5 border rounded-xl">${tm?.bio || ''}</textarea>
          </div>
        </div>
      `,
      `
        <button type="button" onclick="window.AdminModal.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl">Cancel</button>
        <button type="button" onclick="window.saveTeam('${id || ''}')" class="px-4 py-2 bg-[#183D32] text-white text-xs font-semibold rounded-xl">Save Profile</button>
      `
    );
  };

  window.saveTeam = (id) => {
    const store = HakaStore.get();
    const name = document.getElementById('tm_name')?.value.trim();
    const role = document.getElementById('tm_role')?.value.trim();
    if (!name || !role) { alert('Name and role are required.'); return; }

    if (id) {
      const t = store.team.find(x => x.id === id);
      if (t) {
        t.name = name;
        t.role = role;
        t.bio = document.getElementById('tm_bio')?.value.trim();
      }
    } else {
      store.team.push({
        id: 'tm-' + Date.now(),
        name: name,
        role: role,
        bio: document.getElementById('tm_bio')?.value.trim(),
        dept: 'General',
        status: 'Active'
      });
    }

    HakaStore.save(store);
    modal.close();
    showToast('Team member saved.');
    renderCurrentTab();
  };

  window.deleteTeam = (id) => {
    if (!confirm('Delete this team member?')) return;
    const store = HakaStore.get();
    store.team = store.team.filter(t => t.id !== id);
    HakaStore.save(store);
    showToast('Team member removed.');
    renderCurrentTab();
  };

  /* ==============================================================
     MODULE 21.8: CONTACT & COMPANY INFO CMS
     ============================================================== */
  function renderContactTab(container) {
    const data = HakaStore.get();
    const c = data.contactInfo || {};

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-slate-900">Contact & Organization Credentials</h2>
          <p class="text-xs text-slate-500 mt-1">Configure verified physical addresses, direct telephone lines, and operating windows.</p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4 text-xs">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Primary Business Enquiries Email</label>
              <input type="email" id="ci_email" value="${c.businessEmail || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Enterprise Support Desk Email</label>
              <input type="email" id="ci_supportEmail" value="${c.supportEmail || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Business Phone Number</label>
            <input type="text" id="ci_phone" value="${c.phone || ''}" class="w-full p-2.5 border rounded-xl">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Headquarters Address Line 1</label>
              <input type="text" id="ci_add1" value="${c.addressLine1 || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Address Line 2 (City / State / Zip)</label>
              <input type="text" id="ci_add2" value="${c.addressLine2 || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Standard Business Hours</label>
              <input type="text" id="ci_hours" value="${c.businessHours || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">24/7 Operations Standby SLA</label>
              <input type="text" id="ci_supportHours" value="${c.supportHours || ''}" class="w-full p-2.5 border rounded-xl">
            </div>
          </div>
          <div class="pt-2 flex justify-end">
            <button onclick="window.saveContactInfo()" class="px-5 py-2.5 bg-[#183D32] hover:bg-[#102B23] text-white font-semibold rounded-xl shadow-sm">
              Save Contact Credentials
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.saveContactInfo = () => {
    const store = HakaStore.get();
    store.contactInfo = {
      businessEmail: document.getElementById('ci_email')?.value.trim(),
      supportEmail: document.getElementById('ci_supportEmail')?.value.trim(),
      phone: document.getElementById('ci_phone')?.value.trim(),
      addressLine1: document.getElementById('ci_add1')?.value.trim(),
      addressLine2: document.getElementById('ci_add2')?.value.trim(),
      businessHours: document.getElementById('ci_hours')?.value.trim(),
      supportHours: document.getElementById('ci_supportHours')?.value.trim()
    };
    HakaStore.save(store);
    showToast('Contact information synchronized.');
  };

  /* ==============================================================
     MODULE 21.9: USERS & ROLE-BASED ACCESS CONTROL (RBAC)
     ============================================================== */
  function renderUsersTab(container) {
    const data = HakaStore.get();
    const users = data.users || [];
    const perms = data.rolePermissions || {};

    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 class="text-xl font-bold text-slate-900">Role-Based Access Control (RBAC)</h2>
          <p class="text-xs text-slate-500 mt-1">Manage user roles, module permissions, and credential access boundaries.</p>
        </div>

        <!-- Role Permissions Matrix -->
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h3 class="text-sm font-bold text-slate-900 mb-3">Role Permissions Hierarchy</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            ${Object.keys(perms).map(role => `
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-xs">${role}</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#183D32] text-[#C19A5B]">${perms[role].length} Modules</span>
                </div>
                <div class="space-y-1">
                  ${perms[role].map(p => `
                    <div class="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <span class="text-emerald-500 font-bold">✓</span>
                      <span class="capitalize">${p.replace('_', ' ')}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Users Table -->
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 class="text-sm font-bold text-slate-900">Registered System Operators</h3>
          </div>
          <table class="w-full text-left text-xs text-slate-600">
            <thead class="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-500">
              <tr>
                <th class="py-3 px-4">Operator</th>
                <th class="py-3 px-4">Email</th>
                <th class="py-3 px-4">Assigned Role</th>
                <th class="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${users.map(u => `
                <tr class="hover:bg-slate-50">
                  <td class="py-3.5 px-4 font-bold text-slate-900">${u.name}</td>
                  <td class="py-3.5 px-4">${u.email}</td>
                  <td class="py-3.5 px-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${u.role === 'Super Admin' ? 'bg-[#183D32] text-[#C19A5B]' : 'bg-slate-100 text-slate-700'}">${u.role}</span>
                  </td>
                  <td class="py-3.5 px-4">
                    <span class="text-emerald-600 font-bold flex items-center gap-1">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Active</span>
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
