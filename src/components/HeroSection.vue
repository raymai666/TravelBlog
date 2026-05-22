<script setup lang="ts">
const metrics = [
  { label: '册页', value: '18+' },
  { label: '行迹', value: '9 城' },
  { label: '快门', value: '∞' },
];
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__grid-bg" aria-hidden="true" />
    <div class="hero__glow hero__glow--one" aria-hidden="true" />
    <div class="hero__glow hero__glow--two" aria-hidden="true" />

    <div class="hero__content">
      <p class="hero__eyebrow">
        <span class="hero__pulse" aria-hidden="true" />
        个人游记 · 夜间模式 · 长期更新
      </p>

      <h1 id="hero-title" class="hero__title">
        <span class="hero__title-line">把世界切成立方体，</span>
        <span class="hero__title-line hero__title-line--accent">放进时间的抽屉里。</span>
      </h1>

      <p class="hero__lead">
        这里是旅行与日常的交叉存档：一张照片，一段当时的心情。风格偏克制，不堆叠噪音；像产品官网一样干净，也像朋友圈一样真实。
      </p>

      <div class="hero__cta-row">
        <a class="btn btn--primary" href="#feed">浏览手记</a>
        <a class="btn btn--ghost" href="#about">关于这个页面</a>
      </div>

      <dl class="hero__metrics">
        <div v-for="m in metrics" :key="m.label" class="metric">
          <dt class="metric__label">{{ m.label }}</dt>
          <dd class="metric__value">{{ m.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 8vw, 6rem);
}

.hero__grid-bg {
  position: absolute;
  inset: -40% -20% auto;
  height: 120%;
  background-image: linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at 50% 0%, black 0%, transparent 68%);
  pointer-events: none;
}

.hero__glow {
  position: absolute;
  filter: blur(80px);
  opacity: 0.5;
  pointer-events: none;
}

.hero__glow--one {
  width: min(520px, 70vw);
  height: min(520px, 70vw);
  top: -180px;
  right: -120px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 65%);
}

.hero__glow--two {
  width: min(420px, 55vw);
  height: min(420px, 55vw);
  bottom: -200px;
  left: -120px;
  background: radial-gradient(circle, rgba(94, 234, 212, 0.28), transparent 65%);
}

.hero__content {
  position: relative;
  margin: 0 auto;
  max-width: var(--content-max);
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-cn);
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0 0 1.25rem;
}

.hero__pulse {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 18px var(--accent);
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.65;
  }
}

.hero__title {
  font-family: var(--font-cn);
  font-weight: 700;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  line-height: 1.18;
  letter-spacing: 0.02em;
  margin: 0 0 1.25rem;
}

.hero__title-line {
  display: block;
}

.hero__title-line--accent {
  background: linear-gradient(120deg, var(--text-primary), var(--accent));
  -webkit-background-clip: text;
  color: transparent;
}

.hero__lead {
  font-family: var(--font-cn);
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
  max-width: 36rem;
  margin: 0 0 2rem;
}

.hero__cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.35rem;
  border-radius: 999px;
  font-family: var(--font-cn);
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease,
    border-color 0.2s ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn--primary {
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.95), rgba(56, 189, 248, 0.75));
  color: #041015;
  box-shadow: 0 16px 40px rgba(56, 189, 248, 0.22);
}

.btn--primary:hover {
  box-shadow: 0 20px 48px rgba(56, 189, 248, 0.32);
}

.btn--ghost {
  background: rgba(12, 16, 24, 0.65);
  border-color: var(--stroke);
  color: var(--text-primary);
}

.btn--ghost:hover {
  border-color: var(--stroke-strong);
  background: rgba(18, 24, 36, 0.82);
}

.hero__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 28rem;
  margin: 0;
  padding: 1rem 0 0;
  border-top: 1px solid var(--stroke);
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.metric__label {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.metric__value {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 520px) {
  .hero__metrics {
    grid-template-columns: 1fr;
  }
}
</style>
