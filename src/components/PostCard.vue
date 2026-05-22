<script setup lang="ts">
import type { TravelPost } from '@/types/post';

defineProps<{
  post: TravelPost;
  featured?: boolean;
}>();
</script>

<template>
  <article
    class="card"
    :class="{ 'card--featured': featured }"
    :aria-label="`${post.title}，${post.location}`"
  >
    <div class="card__media">
      <img :src="post.imageSrc" :alt="post.imageAlt" loading="lazy" decoding="async" />
      <div class="card__media-shade" aria-hidden="true" />
      <div class="card__chip-row">
        <span v-for="tag in post.tags" :key="tag" class="chip">{{ tag }}</span>
      </div>
    </div>

    <div class="card__body">
      <header class="card__header">
        <p class="card__meta">
          <span class="card__location">{{ post.location }}</span>
          <span class="card__dot" aria-hidden="true">·</span>
          <time :datetime="post.dateLabel">{{ post.dateLabel }}</time>
        </p>
        <h2 class="card__title">{{ post.title }}</h2>
      </header>
      <p class="card__excerpt">{{ post.excerpt }}</p>
      <footer class="card__footer">
        <span class="card__hint">手记选段</span>
        <span class="card__mono-id">{{ post.id }}</span>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--stroke);
  background: var(--bg-card);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(18px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  min-height: 280px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.card:hover {
  border-color: rgba(94, 234, 212, 0.35);
  transform: translateY(-3px);
}

.card--featured {
  grid-column: 1 / -1;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.95fr);
}

.card__media {
  position: relative;
  min-height: 220px;
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__media-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(6, 8, 13, 0.1), rgba(6, 8, 13, 0.55));
  mix-blend-mode: multiply;
}

.card__chip-row {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.chip {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(232, 237, 245, 0.22);
  background: rgba(6, 8, 13, 0.45);
  backdrop-filter: blur(8px);
}

.card__body {
  padding: 1.35rem 1.35rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.card__meta {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.card__location {
  color: var(--text-secondary);
}

.card__dot {
  opacity: 0.55;
}

.card__title {
  margin: 0;
  font-family: var(--font-cn);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.35;
}

.card__excerpt {
  margin: 0;
  flex: 1;
  font-family: var(--font-cn);
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.35rem;
  border-top: 1px dashed rgba(148, 163, 184, 0.25);
}

.card__hint {
  font-family: var(--font-cn);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card__mono-id {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(94, 234, 212, 0.75);
}

@media (max-width: 880px) {
  .card,
  .card--featured {
    grid-template-columns: 1fr;
  }

  .card__media {
    min-height: 200px;
    max-height: 260px;
  }
}
</style>
