<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { t } = useI18n()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="features" aria-labelledby="features-title">
    <header class="section-header section-header--features" data-reveal>
      <h2 id="features-title">
        Everything you need to manage and control your projects
      </h2>
      <p class="section-header__lead">
        Digital requisitions, live dashboard, multichannel approvals, and audit reports - no manual WhatsApp, no lost quotes, no surprises.
      </p>
    </header>

    <div class="feature-diagram">
      <article class="feature-step feature-step--monitoring" data-reveal="scale-in" style="--reveal-delay: 0ms">
        <span class="feature-step__eyebrow feature-step__eyebrow--blue">01 · Monitoring</span>
        <h3 class="feature-step__title">Construction Requirements</h3>
        <div class="feature-step__art" aria-hidden="true">
          <img class="feature-illustration" src="/assets/images/features/sketch.png" alt="">
        </div>
        <p class="feature-step__body">Digital record of inputs (cement, steel, aggregates) made by the Resident Engineer using the Field App</p>
      </article>

      <div class="feature-note feature-note--history" data-reveal="fade-left" style="--reveal-delay: 150ms">
        <svg class="feature-note__arrow" viewBox="0 0 120 118" aria-hidden="true"><use href="/assets/icons/feature-arrow.svg#icon"></use></svg>
        <p class="feature-note__copy">Export you data history by asse, site, or period</p>
      </div>

      <article class="feature-step feature-step--records" data-reveal="slide-stack">
        <span class="feature-step__eyebrow feature-step__eyebrow--orange">02 · Records</span>
        <h3 class="feature-step__title">History and Quotes</h3>
        <div class="feature-step__art" aria-hidden="true">
          <img class="feature-illustration" src="/assets/images/features/report.png" alt="">
        </div>
        <p class="feature-step__body">Download the complete order history by project, supplier, or period in PDF/Excel formats for cost analysis.</p>
      </article>

      <div class="feature-note feature-note--records" data-reveal="fade-left" style="--reveal-delay: 250ms">
        <svg class="feature-note__arrow" viewBox="0 0 120 118" aria-hidden="true"><use href="/assets/icons/feature-arrow.svg#icon"></use></svg>
        <p class="feature-note__copy">Download records by material type or supplier</p>
      </div>

      <article class="feature-step feature-step--alerts" data-reveal="slide-stack">
        <span class="feature-step__eyebrow feature-step__eyebrow--red">03 · Alerts</span>
        <h3 class="feature-step__title">Control and Approvals</h3>
        <div class="feature-step__art" aria-hidden="true">
          <img class="feature-illustration" src="/assets/images/features/new-email.png" alt="">
        </div>
        <p class="feature-step__body">WhatsApp and email alerts to approve purchase orders in one click, avoiding the 48-hour lead time of manual processes.</p>
      </article>

      <div class="feature-note feature-note--incidents" data-reveal="fade-left" style="--reveal-delay: 350ms">
        <svg class="feature-note__arrow" viewBox="0 0 120 118" aria-hidden="true"><use href="/assets/icons/feature-arrow.svg#icon"></use></svg>
        <p class="feature-note__copy">Download alert and incident logs instantly</p>
      </div>

      <article class="feature-step feature-step--compliance" data-reveal="slide-stack">
        <span class="feature-step__eyebrow feature-step__eyebrow--green">04 · Compliance</span>
        <h3 class="feature-step__title">Audit and Transparency</h3>
        <div class="feature-step__art" aria-hidden="true">
          <img class="feature-illustration" src="/assets/images/features/audit.png" alt="">
        </div>
        <p class="feature-step__body">Ready-to-use templates for financial audits and native integration with SUNAT electronic invoicing</p>
      </article>

      <!-- Benefits aside -->
      <aside class="feature-benefits" data-reveal="fade-right">
        <span class="feature-benefits__label">More benefits for you</span>
        <div class="feature-benefit">
          <svg class="feature-benefit__icon" viewBox="0 0 56 56" aria-hidden="true"><use href="/assets/icons/benefit-clock.svg#icon"></use></svg>
          <p class="feature-benefit__text">
            <span class="feature-benefit__highlight">Save money:</span>
            <span>It eliminates logistical costs and losses due to informal management.</span>
          </p>
        </div>
        <div class="feature-benefit">
          <svg class="feature-benefit__icon" viewBox="0 0 56 56" aria-hidden="true"><use href="/assets/icons/benefit-warning.svg#icon"></use></svg>
          <p class="feature-benefit__text">
            <span class="feature-benefit__highlight">Zero shutdowns:</span>
            <span>Act before a stockout occurs on site using Safety Stock.</span>
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles are intentionally left empty since global styles handle the layout. */
</style>
