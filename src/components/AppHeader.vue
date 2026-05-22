<script setup lang="ts">
const navItems = [
  { label: '手记', href: '#feed' },
  { label: '关于', href: '#about' },
  { label: '联系', href: '#contact' },
];
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" class="brand" aria-label="返回首页">
        <span class="brand__mark" aria-hidden="true" />
        <span class="brand__text">
          <span class="brand__title">Field Notes</span>
          <span class="brand__sub">光与路的存档</span>
        </span>
      </RouterLink>

      <nav class="nav" aria-label="主导航">
        <a v-for="item in navItems" :key="item.href" class="nav__link" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <div class="header__actions">
        <span class="status-pill" aria-label="站点状态">
          <span class="status-pill__dot" />
          连载中
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  padding: 1rem clamp(1.25rem, 4vw, 2.5rem);
  backdrop-filter: blur(16px) saturate(140%);
  background: linear-gradient(
    180deg,
    rgba(6, 8, 13, 0.92) 0%,
    rgba(6, 8, 13, 0.72) 70%,
    rgba(6, 8, 13, 0) 100%
  );
  border-bottom: 1px solid transparent;
}

.header__inner {
  margin: 0 auto;
  max-width: var(--content-max);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
}

.brand__mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 25%, var(--accent-soft), transparent 55%),
    linear-gradient(145deg, rgba(94, 234, 212, 0.35), rgba(56, 189, 248, 0.08));
  border: 1px solid var(--stroke-strong);
  box-shadow: 0 0 32px var(--glow);
}

.brand__text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.brand__title {
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
}

.brand__sub {
  font-family: var(--font-cn);
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.nav__link {
  font-family: var(--font-cn);
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav__link:hover {
  color: var(--text-primary);
  background: rgba(148, 163, 184, 0.08);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: rgba(12, 16, 24, 0.65);
}

.status-pill__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

@media (max-width: 840px) {
  .nav {
    display: none;
  }

  .brand__sub {
    display: none;
  }
}
</style>
