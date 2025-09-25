// Ultiplex Productions - Interactive JavaScript

// Navigation function for separate pages
function navigateToPage(page) {
  console.log("[v0] Navigating to:", page)

  // Close mobile menu if open
  closeMobileMenu()

  // Navigate to the page
  if (page.includes("#")) {
    // Handle anchor links (like index.html#about)
    window.location.href = page
  } else {
    // Handle regular page navigation
    window.location.href = page
  }
}

// Smooth scrolling for navigation (kept for About section on homepage)
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    // Update active navigation
    updateActiveNav(sectionId)

    // Close mobile menu if open
    closeMobileMenu()
  }
}

// Update active navigation link
function updateActiveNav(activeSection) {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    link.classList.remove("active")
  })

  // Add active class to current section links
  document.querySelectorAll(`[data-section="${activeSection}"]`).forEach((link) => {
    link.classList.add("active")
  })
}

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
      menuIcon.classList.toggle("hidden")
      closeIcon.classList.toggle("hidden")
    })
  }
})

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")

  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// Package selection functionality
function selectPackage(packageName) {
  console.log("[v0] Package selected:", packageName)

  // Navigate to contact page with package pre-selected
  const contactUrl = `contact.html?package=${encodeURIComponent(packageName)}`
  window.location.href = contactUrl

  // Add visual feedback
  showNotification(`${packageName} package selected! Redirecting to contact form.`)
}

function highlightSelectedPackage(packageName) {
  // Remove previous highlights
  document.querySelectorAll(".package-selected").forEach((el) => {
    el.classList.remove("package-selected")
  })

  // Add highlight to selected package
  const packageCards = document.querySelectorAll(".card")
  packageCards.forEach((card) => {
    const packageTitle = card.querySelector("h3")
    if (packageTitle && packageTitle.textContent.trim() === packageName) {
      card.classList.add("package-selected")
      setTimeout(() => {
        card.classList.remove("package-selected")
      }, 3000)
    }
  })
}

// Contact form functionality
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("[v0] Contact form submitted")

      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const packageType = formData.get("package")
      const message = formData.get("message")

      if (!name || !email || !message) {
        showNotification("Please fill in all required fields.", "error")
        return
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      // Create email content
      const emailSubject = "New Website Inquiry from " + name
      let emailBody = `Hello Brendyn,\n\nYou have received a new website inquiry:\n\n`
      emailBody += `Name: ${name}\n`
      emailBody += `Email: ${email}\n`
      if (packageType) {
        emailBody += `Package Interest: ${packageType}\n`
      }
      emailBody += `Message:\n${message}\n\n`
      emailBody += `Best regards,\n${name}`

      // Create mailto link
      const mailtoLink = `mailto:brendynmitchell18@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

      // Open email client
      window.location.href = mailtoLink

      // Show success message
      showNotification("Email client opened! Please send the email to complete your inquiry.")

      // Reset form
      contactForm.reset()
    })
  }
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sponsor functionality
function becomeSponsor() {
  console.log("[v0] Sponsor button clicked")

  const emailSubject = "Sponsorship Inquiry - Ultiplex Productions"
  const emailBody = `Hello Brendyn,\n\nI am interested in becoming a sponsor for Ultiplex Productions.\n\nPlease provide more information about:\n- Available sponsorship packages\n- Pricing and benefits\n- Partnership opportunities\n\nI look forward to hearing from you.\n\nBest regards,\n[Your Name]`

  const mailtoLink = `mailto:brendynmitchell18@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  window.location.href = mailtoLink

  showNotification("Email client opened! Please complete the sponsorship inquiry.")
}

// Notification system
function showNotification(message, type = "success") {
  console.log("[v0] Showing notification:", message, type)

  // Remove existing notifications
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.className = "notification"

  const iconColor = type === "error" ? "#ef4444" : "#00d4ff"
  const bgColor = type === "error" ? "rgba(239, 68, 68, 0.1)" : "rgba(0, 212, 255, 0.1)"
  const borderColor = type === "error" ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 212, 255, 0.3)"

  notification.innerHTML = `
        <div class="notification-content">
            <svg class="h-5 w-5" style="color: ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${
                  type === "error"
                    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
                    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
                }
            </svg>
            <span>${message}</span>
        </div>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        backdrop-filter: blur(10px);
        border: 1px solid ${borderColor};
        border-radius: 12px;
        padding: 16px 20px;
        color: white;
        z-index: 9999;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `

  const notificationContent = notification.querySelector(".notification-content")
  notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        line-height: 1.4;
    `

  // Add to page
  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 300)
    }
  }, 5000)
}

// Scroll-based navigation highlighting
function updateNavOnScroll() {
  const sections = ["home", "about", "services", "pricing", "contact", "sponsor"]
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && scrollPosition >= section.offsetTop) {
      updateActiveNav(sections[i])
      break
    }
  }
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe animated elements
  document.querySelectorAll(".animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Social media button functionality
function openSocialMedia(platform) {
  const urls = {
    github: "https://github.com/ultiplexproductions",
    linkedin: "https://linkedin.com/company/ultiplex-productions",
    twitter: "https://twitter.com/ultiplexproductions",
  }

  if (urls[platform]) {
    window.open(urls[platform], "_blank", "noopener,noreferrer")
  }
}

// Handle URL parameters for package selection
function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search)
  const selectedPackage = urlParams.get("package")

  if (selectedPackage) {
    const packageSelect = document.getElementById("package")
    if (packageSelect) {
      packageSelect.value = selectedPackage
      showNotification(`${selectedPackage} package pre-selected!`)
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, initializing...")

  // Handle URL parameters (for package pre-selection)
  handleUrlParameters()

  // Initialize animations
  initAnimations()

  // Add scroll listener for navigation (only if on homepage)
  if (window.location.pathname === "/" || window.location.pathname.includes("index.html")) {
    window.addEventListener("scroll", updateNavOnScroll)
  }

  const socialButtons = document.querySelectorAll("footer button")
  socialButtons.forEach((button, index) => {
    const platforms = ["github", "linkedin", "twitter"]
    if (platforms[index]) {
      button.addEventListener("click", () => openSocialMedia(platforms[index]))
    }
  })

  // Set initial active navigation
  updateActiveNav("home")

  console.log("[v0] Initialization complete")
})

// Handle window resize
window.addEventListener("resize", () => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
})
