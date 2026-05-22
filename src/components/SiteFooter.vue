<script setup lang="ts"></script>

<template>
  <footer id="contact" class="footer">
    <div class="footer__inner">
      <div id="about" class="footer__block">
        <h2 class="footer__title">关于这页</h2>
        <p class="footer__text">
          设计取向参考主流 AI 产品与创意工作室落地页：深色基底、柔和青色强调、充足留白与清晰的信息层级。内容区使用图文卡片呈现「高级感朋友圈」式游记，后续可无缝接入独立文章路由与评论组件。
        </p>
      </div>

      <div class="footer__block">
        <h2 class="footer__title">联系与订阅</h2>
        <p class="footer__text">
          将邮箱、公众号或其他社交链接替换此处文案即可。若站点面向中国大陆用户，可在底部补充
          ICP 备案号、公安备案号及版权信息，以满足合规展示习惯。
        </p>
        <p class="footer__mono">hello@example.com</p>
      </div>
    </div>

    <div class="footer__bar">
      <span>© {{ new Date().getFullYear() }} Field Notes. 保留所有权利。</span>
      <span class="footer__bar-note">Built with Vue 3 · Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 2rem;
  padding: 3rem clamp(1.25rem, 4vw, 2.5rem) 2rem;
  border-top: 1px solid var(--stroke);
  background: radial-gradient(circle at 10% 0%, rgba(94, 234, 212, 0.08), transparent 45%),
    rgba(4, 6, 10, 0.92);
}

.footer__inner {
  margin: 0 auto;
  max-width: var(--content-max);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.footer__title {
  margin: 0 0 0.75rem;
  font-family: var(--font-cn);
  font-size: 1.05rem;
  font-weight: 600;
}

.footer__text {
  margin: 0;
  font-family: var(--font-cn);
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.footer__mono {
  margin: 0.85rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
}

.footer__bar {
  margin: 2.5rem auto 0;
  max-width: var(--content-max);
  padding-top: 1.25rem;
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  font-family: var(--font-cn);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer__bar-note {
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

@media (max-width: 720px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
