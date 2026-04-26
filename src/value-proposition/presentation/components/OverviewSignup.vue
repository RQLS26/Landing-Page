<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const { t } = useI18n()
const activeTab = ref('register')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('#pricing [data-reveal]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="pricing" class="overview-section" aria-labelledby="overview-title">
    <h2 id="overview-title" class="visually-hidden">How BuildLine works</h2>

    <nav class="overview-rail" aria-label="Platform sections" data-reveal>
      <button type="button" class="overview-rail__item" :class="{ 'overview-rail__item--active': activeTab === 'register' }" @click="activeTab = 'register'">
        <img class="overview-rail__icon" src="/assets/images/overview/register-icon.png" alt="" loading="lazy" decoding="async">
        <span class="overview-rail__label">Register</span>
      </button>

      <button type="button" class="overview-rail__item" @click="activeTab = 'resources'">
        <img class="overview-rail__icon" src="/assets/images/overview/resources-icon.png" alt="" loading="lazy" decoding="async">
        <span class="overview-rail__label">Resources</span>
      </button>

      <button type="button" class="overview-rail__item" :class="{ 'overview-rail__item--active': activeTab === 'pricing' }" @click="activeTab = 'pricing'">
        <img class="overview-rail__icon" src="/assets/images/overview/pricing-icon.png" alt="" loading="lazy" decoding="async">
        <span class="overview-rail__label">Pricing</span>
      </button>

      <button type="button" class="overview-rail__item" @click="activeTab = 'community'">
        <img class="overview-rail__icon" src="/assets/images/overview/community-icon.png" alt="" loading="lazy" decoding="async">
        <span class="overview-rail__label">Community</span>
      </button>

      <button type="button" class="overview-rail__item" @click="activeTab = 'contact'">
        <img class="overview-rail__icon" src="/assets/images/overview/contact-icon.png" alt="" loading="lazy" decoding="async">
        <span class="overview-rail__label">Contact</span>
      </button>
    </nav>

    <div class="overview-grid" data-reveal>
      <article class="overview-card">
        <div class="overview-card__head">
          <svg class="overview-card__info" viewBox="0 0 48 48" aria-hidden="true"><use href="/assets/icons/overview-info.svg#icon"></use></svg>
          <h3>Setup</h3>
        </div>
        <p>Create material requests from site with all required details. Add quantities, priority, project, and attach supporting files. Everything is structured.</p>
      </article>

      <article class="overview-card">
        <div class="overview-card__head">
          <svg class="overview-card__info" viewBox="0 0 48 48" aria-hidden="true"><use href="/assets/icons/overview-info.svg#icon"></use></svg>
          <h3>Monitor</h3>
        </div>
        <p>Track requests, quotations, and purchase orders in real time. Compare supplier offers and monitor order status. Get full visibility of your procurement process.</p>
      </article>

      <article class="overview-card">
        <div class="overview-card__head">
          <svg class="overview-card__info" viewBox="0 0 48 48" aria-hidden="true"><use href="/assets/icons/overview-info.svg#icon"></use></svg>
          <h3>Control</h3>
        </div>
        <p>Detect budget deviations and stock shortages early. Receive real-time alerts for approvals and incidents. Make faster decisions and avoid costly delays.</p>
      </article>
    </div>

    <!-- ========== Register Tab: Signup Form ========== -->
    <div v-if="activeTab === 'register'" class="signup-shell">
      <div class="signup-shell__stage">
        <img class="signup-shell__art signup-shell__art--left" src="/assets/images/final-section/signup-art-left.png" alt="" loading="eager" decoding="async">
        <img class="signup-shell__art signup-shell__art--right" src="/assets/images/final-section/signup-art-right.png" alt="" loading="eager" decoding="async">

        <form class="signup-card" novalidate>
          <h2 class="signup-card__title">Create Account now</h2>
          <p class="signup-card__subtitle">Start monitoring now</p>

          <div class="signup-field">
            <label for="first-name">Your name</label>
            <div class="signup-card__split">
              <input id="first-name" class="input" type="text" autocomplete="given-name" placeholder="First name">
              <input id="last-name" class="input" type="text" autocomplete="family-name" placeholder="Last name">
            </div>
          </div>

          <div class="signup-field">
            <label for="signup-email">Your email address</label>
            <input id="signup-email" class="input" type="email" autocomplete="email" placeholder="example_123@email.com">
          </div>

          <div class="signup-field">
            <label for="signup-password">Choose a password</label>
            <div class="signup-password">
              <input id="signup-password" class="input" type="password" autocomplete="new-password" placeholder="........">
              <button type="button" class="signup-password__toggle" aria-label="Show password">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><use href="/assets/icons/signup-eye-off.svg#icon"></use></svg>
              </button>
            </div>
          </div>

          <button type="submit" class="btn signup-card__submit">Summit</button>

          <p class="signup-card__terms">
            <span>By creating your account, you agree to the </span>
            <span><a href="#terms">Terms</a> and <a href="#conditions">Conditions</a>.</span>
          </p>

          <div class="signup-card__divider">
            <span>or sign up with</span>
          </div>

          <div class="signup-card__social">
            <a href="#google" class="signup-card__social-btn signup-card__social-btn--google">
              <span class="signup-card__social-icon signup-card__social-icon--google" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26"><use href="/assets/icons/signup-google.svg#icon"></use></svg>
              </span>
              <span>Sign up with Google</span>
            </a>

            <a href="#apple" class="signup-card__social-btn signup-card__social-btn--apple">
              <span class="signup-card__social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26"><use href="/assets/icons/signup-apple.svg#icon"></use></svg>
              </span>
              <span>Sign up with Apple</span>
            </a>
          </div>
        </form>
      </div>
    </div>

    <!-- ========== Pricing Tab ========== -->
    <div v-if="activeTab === 'pricing'" class="pricing-content">
      <div class="pricing-header">
        <h3 class="pricing-header__title">Our Founding Team</h3>
        <p class="pricing-header__subtitle">Choose the Plan that Fits Your Construction Business</p>
        <div class="pricing-toggle">
          <button type="button" class="pricing-toggle__btn pricing-toggle__btn--active">Monthly</button>
          <button type="button" class="pricing-toggle__btn">Annualy</button>
        </div>
      </div>

      <div class="pricing-grid">
        <article class="pricing-card">
          <h4 class="pricing-card__name">Project Base Plan</h4>
          <p class="pricing-card__desc">Designed for construction SMEs seeking to digitize their procurement workflow, eliminate WhatsApp clutter, and ensure project-based budget control</p>
          <div class="pricing-card__price">
            <strong>$100</strong> <span>/Per month</span>
          </div>
          <a href="#contact" class="btn pricing-card__cta pricing-card__cta--primary">Get Standard Plan</a>
          <hr class="pricing-card__divider">
          <h5 class="pricing-card__features-title">Features</h5>
          <ul class="pricing-card__features">
            <li>Simultaneous management of up to 3 projects.</li>
            <li>Unlimited order creation from the field</li>
            <li>Hierarchical approval flow (Resident -> Logistics).</li>
            <li>Automatic notifications when a budget item is exceeded</li>
            <li>Centralized history of suppliers and quotes</li>
            <li>Access for resident engineers and purchasing managers.</li>
          </ul>
        </article>

        <article class="pricing-card pricing-card--enterprise">
          <h4 class="pricing-card__name">Multi-Project Enterprise</h4>
          <p class="pricing-card__desc">The comprehensive solution for construction companies with high operational activity that require centralized auditing, advanced financial reporting, and end-to-end multi-site management.</p>
          <div class="pricing-card__price">
            <strong>$250</strong><span>/Per month</span>
          </div>
          <a href="#contact" class="btn pricing-card__cta">Get Standard Plan</a>
          <hr class="pricing-card__divider">
          <h5 class="pricing-card__features-title">Features</h5>
          <ul class="pricing-card__features">
            <li>Unlimited scale in all your projects nationwide.</li>
            <li>All Project Base features included.</li>
            <li>Automatic generation of comparative quotation charts.</li>
            <li>Digitization of delivery notes by scanning with a cell phone.</li>
            <li>Reports on cost deviations and profitability by project.</li>
            <li>24/7 technical support and integration with local accounting systems.</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Pricing section styles */
.pricing-content {
  margin-top: 60px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-header {
  text-align: center;
  margin-bottom: 48px;
}

.pricing-header__title {
  font-family: var(--font-family-display);
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 700;
  color: #3d4f6f;
  margin-bottom: 4px;
  font-style: italic;
}

.pricing-header__title::after {
  content: '';
  display: block;
  width: 48px;
  height: 3px;
  background: #e07832;
  margin: 12px auto 0;
  border-radius: 2px;
}

.pricing-header__subtitle {
  font-size: 16px;
  color: #6b7fa3;
  margin-top: 18px;
  font-style: italic;
}

.pricing-toggle {
  display: inline-flex;
  margin-top: 28px;
  border: 2px solid #d0d6e2;
  border-radius: 999px;
  overflow: hidden;
}

.pricing-toggle__btn {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pricing-toggle__btn--active {
  background: #4a5c7a;
  color: #fff;
  border-radius: 999px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.pricing-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 36px 32px;
  box-shadow: 0 8px 32px rgba(60, 72, 100, 0.12);
  text-align: center;
}

.pricing-card--enterprise {
  background: #4a5c7a;
  color: #fff;
}

.pricing-card__name {
  font-family: var(--font-family-display);
  font-size: clamp(22px, 1.8vw, 30px);
  font-weight: 700;
  color: #3d4f6f;
  margin-bottom: 12px;
}

.pricing-card--enterprise .pricing-card__name {
  color: #fff;
}

.pricing-card__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #6b7fa3;
  margin-bottom: 24px;
}

.pricing-card--enterprise .pricing-card__desc {
  color: rgba(255, 255, 255, 0.75);
}

.pricing-card__price {
  margin-bottom: 20px;
}

.pricing-card__price strong {
  font-size: clamp(28px, 2.5vw, 40px);
  font-weight: 800;
  font-style: italic;
  color: #e07832;
}

.pricing-card--enterprise .pricing-card__price strong {
  color: #f0f0f0;
}

.pricing-card__price span {
  font-size: 16px;
  color: #6b7fa3;
}

.pricing-card--enterprise .pricing-card__price span {
  color: rgba(255, 255, 255, 0.7);
}

.pricing-card__cta {
  display: block;
  width: 100%;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease;
}

.pricing-card__cta--primary {
  background: #4a5c7a;
  color: #fff;
}

.pricing-card--enterprise .pricing-card__cta {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.pricing-card__divider {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 24px 0;
}

.pricing-card--enterprise .pricing-card__divider {
  border-top-color: rgba(255, 255, 255, 0.2);
}

.pricing-card__features-title {
  font-family: var(--font-family-display);
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  color: #3d4f6f;
  margin-bottom: 16px;
  font-style: italic;
}

.pricing-card--enterprise .pricing-card__features-title {
  color: #fff;
}

.pricing-card__features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.pricing-card__features li {
  padding: 6px 0;
  font-size: 14px;
  line-height: 1.5;
  color: #6b7fa3;
}

.pricing-card--enterprise .pricing-card__features li {
  color: rgba(255, 255, 255, 0.75);
}

.overview-rail__item--active {
  color: rgba(30, 30, 30, 0.85) !important;
}

.overview-rail__item--active .overview-rail__label::after {
  transform: scaleX(1) !important;
}
</style>
