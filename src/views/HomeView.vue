<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import PostCard from '@/components/PostCard.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import { travelPosts } from '@/data/posts';
import { computed } from 'vue';

const featuredId = 'p-aurora';

const orderedPosts = computed(() => {
  const featured = travelPosts.find((p) => p.id === featuredId);
  const rest = travelPosts.filter((p) => p.id !== featuredId);
  return featured ? [featured, ...rest] : travelPosts;
});
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <HeroSection />

      <section id="feed" class="feed" aria-labelledby="feed-title">
        <div class="feed__inner">
          <div class="feed__head">
            <h2 id="feed-title" class="feed__title">手记与快门</h2>
            <p class="feed__sub">
              每条记录由「图像 + 当下句子」组成；你可以在
              <code class="inline-code">src/data/posts.ts</code>
              中替换为自己的照片与文字。
            </p>
          </div>

          <div class="feed__grid">
            <PostCard
              v-for="post in orderedPosts"
              :key="post.id"
              :post="post"
              :featured="post.id === featuredId"
            />
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: radial-gradient(ellipse 120% 80% at 50% -10%, rgba(56, 189, 248, 0.12), transparent),
    radial-gradient(ellipse 80% 50% at 100% 0%, rgba(94, 234, 212, 0.08), transparent),
    var(--bg-deep);
}

.feed {
  padding: 0 clamp(1.25rem, 4vw, 2.5rem) 3rem;
}

.feed__inner {
  margin: 0 auto;
  max-width: var(--content-max);
}

.feed__head {
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.feed__title {
  margin: 0;
  font-family: var(--font-cn);
  font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  font-weight: 600;
  letter-spacing: 0.03em;
}

.feed__sub {
  margin: 0;
  max-width: 40rem;
  font-family: var(--font-cn);
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.inline-code {
  font-family: var(--font-mono);
  font-size: 0.82em;
  padding: 0.1rem 0.35rem;
  border-radius: 6px;
  border: 1px solid var(--stroke);
  background: rgba(12, 16, 24, 0.88);
  color: rgba(94, 234, 212, 0.9);
}

.feed__grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
