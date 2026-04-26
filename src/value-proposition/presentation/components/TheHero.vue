<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__text">
      <h1 id="hero-title">
        {{ t('hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ t('hero.subtitle') }}
      </p>
    </div>

    <div class="hero__visual" aria-hidden="true">
      <div class="hero__centerpiece">
        <img class="hero__centerpiece-art" src="/assets/images/hero/centerpiece.png" alt="">
      </div>

      <!-- Current Balance with gauge meter -->
      <article class="dash-card dash-card--balance">
        <header class="dash-card__title">Current Balance</header>
        <div class="dash-card__head">
          <div class="dash-card__head-left">
            <strong class="dash-card__amount">$45,000</strong>
            <button type="button" class="icon-btn" aria-label="Edit">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><use href="/assets/icons/hero-edit.svg#icon"></use></svg>
            </button>
          </div>
          <span class="dash-card__date">May, 2026</span>
        </div>
        <div class="dash-card__details">
          <div class="dash-metric-col">
            <div class="dash-metric">
              <svg class="dash-metric__icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><use href="/assets/icons/hero-achievement.svg#icon"></use></svg>
              <div>
                <span class="dash-metric__label">Target Achieved</span>
                <strong class="dash-metric__value">$12,500</strong>
              </div>
            </div>
            <div class="dash-metric">
              <svg class="dash-metric__icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><use href="/assets/icons/hero-target.svg#icon"></use></svg>
              <div>
                <span class="dash-metric__label">This month Target</span>
                <strong class="dash-metric__value">$20,000</strong>
              </div>
            </div>
          </div>
          <div class="gauge">
            <svg viewBox="0 0 140 80" width="140" height="80" aria-hidden="true"><use href="/assets/icons/hero-gauge.svg#icon"></use></svg>
            <div class="gauge__range">
              <span>$0</span>
              <strong>12K</strong>
              <span>$20k</span>
            </div>
            <p class="gauge__label">Target vs Achievement</p>
          </div>
        </div>
      </article>

      <!-- Storage Conditions -->
      <article class="dash-card dash-card--storage">
        <header class="dash-card__title">Project Status</header>
        <ul class="bar-list">
          <li>
            <span class="bar-list__icon bar-list__icon--orange" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="11" height="11"><use href="/assets/icons/hero-storage-cold.svg#icon"></use></svg>
            </span>
            <span class="bar-list__label">In Progress</span>
            <span class="bar"><span class="bar__fill bar__fill--orange" style="width:52%"></span></span>
            <span class="bar-list__value">52%</span>
          </li>
          <li>
            <span class="bar-list__icon bar-list__icon--green" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="11" height="11"><use href="/assets/icons/hero-storage-frozen.svg#icon"></use></svg>
            </span>
            <span class="bar-list__label">Completed</span>
            <span class="bar"><span class="bar__fill bar__fill--green" style="width:21%"></span></span>
            <span class="bar-list__value">21%</span>
          </li>
          <li>
            <span class="bar-list__icon bar-list__icon--blue" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="11" height="11"><use href="/assets/icons/hero-storage-ambient.svg#icon"></use></svg>
            </span>
            <span class="bar-list__label">Delayed</span>
            <span class="bar"><span class="bar__fill bar__fill--blue" style="width:74%"></span></span>
            <span class="bar-list__value">74%</span>
          </li>
        </ul>
      </article>

      <!-- Project Contributors (with avatars) -->
      <article class="dash-card dash-card--contributors">
        <header class="dash-card__title">Project Contributors (task's)</header>
        <ul class="contributor-list">
          <li>
            <img class="contributor-list__avatar" src="/assets/images/dashboard/avatar-byewind.png" alt="">
            <span class="contributor-list__name">ByeWind</span>
            <span class="badge badge--purple">In Progress</span>
          </li>
          <li>
            <img class="contributor-list__avatar" src="/assets/images/dashboard/avatar-natali.png" alt="">
            <span class="contributor-list__name">Natali Craig</span>
            <span class="badge badge--green">Complete</span>
          </li>
          <li>
            <img class="contributor-list__avatar" src="/assets/images/dashboard/avatar-drew.png" alt="">
            <span class="contributor-list__name">Drew Cano</span>
            <span class="badge badge--blue">Pending</span>
          </li>
          <li>
            <img class="contributor-list__avatar" src="/assets/images/dashboard/avatar-orlando.png" alt="">
            <span class="contributor-list__name">Orlando Diggs</span>
            <span class="badge badge--yellow">Approved</span>
          </li>
          <li>
            <img class="contributor-list__avatar" src="/assets/images/dashboard/avatar-andi.png" alt="">
            <span class="contributor-list__name">Andi Lane</span>
            <span class="badge badge--gray">Rejected</span>
          </li>
        </ul>
      </article>

      <!-- Historical Temp -->
      <article class="dash-card dash-card--temp">
        <header class="dash-card__title">Cost Savings</header>
        <strong class="dash-card__big">+34%</strong>
        <svg class="dash-card__spark" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true"><use href="/assets/icons/hero-sparkline.svg#icon"></use></svg>
      </article>

      <!-- Quality Metrics (3 overlapping circles) -->
      <article class="dash-card dash-card--quality">
        <header class="dash-card__title">Quality Metrics</header>
        <div class="quality-circles" aria-hidden="true">
          <div class="quality-circle quality-circle--orange">
            <span class="quality-circle__pct">85%</span>
            <span class="quality-circle__name">Structure</span>
          </div>
          <div class="quality-circle quality-circle--blue">
            <span class="quality-circle__pct">92%</span>
            <span class="quality-circle__name">Finishes</span>
          </div>
          <div class="quality-circle quality-circle--purple">
            <span class="quality-circle__pct">85%</span>
            <span class="quality-circle__name">Safety</span>
          </div>
        </div>
      </article>

      <!-- 12°C Optimal -->
      <article class="dash-card dash-card--optimal">
        <strong class="dash-card__big">100%</strong>
        <span class="dash-card__date">12/20/20</span>
        <svg class="dash-card__icon" viewBox="0 0 32 32" width="32" height="26" aria-hidden="true"><use href="/assets/icons/hero-optimal.svg#icon"></use></svg>
        <span class="dash-card__tag">Optimal</span>
      </article>

      <!-- Performance bar chart -->
      <article class="dash-card dash-card--performance">
        <header class="dash-card__title">Performance</header>
        <div class="perf-chart" aria-hidden="true">
          <div class="perf-group">
            <span class="perf-bar perf-bar--dark" style="height:78%"></span>
            <span class="perf-bar perf-bar--light" style="height:44%"></span>
            <span class="perf-group__label">01</span>
          </div>
          <div class="perf-group">
            <span class="perf-bar perf-bar--light" style="height:60%"></span>
            <span class="perf-bar perf-bar--dark" style="height:82%"></span>
            <span class="perf-group__label">02</span>
          </div>
          <div class="perf-group">
            <span class="perf-bar perf-bar--dark" style="height:70%"></span>
            <span class="perf-bar perf-bar--light" style="height:36%"></span>
            <span class="perf-group__label">03</span>
          </div>
        </div>
      </article>

      <!-- Clock card -->
      <article class="dash-card dash-card--clock">
        <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true"><use href="/assets/icons/hero-clock.svg#icon"></use></svg>
      </article>

      <!-- Analysis Report row -->
      <article class="dash-card dash-card--report">
        <span class="report__title">Analysis Report</span>
        <span class="report__industry">Analysis and maintenance</span>
        <span class="report__date">July 25, 2025</span>
        <span class="report__status">
          <span class="status-badge status-badge--red">
            <span class="status-badge__dot"></span>Progress
          </span>
        </span>
      </article>
    </div>

    <div class="hero__cta">
      <label class="visually-hidden" for="hero-email">Your email</label>
      <input id="hero-email" type="email" class="input" :placeholder="t('hero.emailPlaceholder')">
      <a href="#demo" class="btn btn--primary">{{ t('hero.startFree') }}</a>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles are intentionally left empty since global styles handle the layout. */
</style>
