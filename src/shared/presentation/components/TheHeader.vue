<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <!-- Placeholder for BuildLine Logo -->
        <span class="logo-text"><strong>BUILD</strong>LINE</span>
      </div>
      
      <nav class="nav-links">
        <a href="#product">{{ t('nav.product') }}</a>
        <a href="#solutions">{{ t('nav.solutions') }}</a>
        <a href="#pricing">{{ t('nav.pricing') }}</a>
        <a href="#resources">{{ t('nav.resources') }}</a>
      </nav>

      <div class="actions">
        <button class="btn-text">{{ t('nav.signIn') }}</button>
        <button class="btn-primary">{{ t('nav.requestDemo') }}</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.header-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo-text {
  font-size: 1.5rem;
  letter-spacing: -0.5px;
}

.logo-text strong {
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #000;
}

.actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.btn-text {
  background: none;
  border: none;
  color: #555;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 8px 16px;
}

.btn-text:hover {
  color: #000;
}

.btn-primary {
  background-color: #4f86f7;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #3b70db;
}
</style>
