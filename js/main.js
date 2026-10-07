/* ============================================
   导演作品集 · 交互脚本
   ============================================ */

/* ★★★ 视频链接配置（唯一需要修改的地方）★★★
   把每部作品在 B站 / 新片场 / 腾讯视频的链接填入对应引号中，
   保存后刷新页面，「观看正片」按钮即可跳转。
   留空的作品按钮会显示为"正片链接待补充"。 */
const VIDEO_LINKS = {
  weiguanji: "",     // 《未关机》
  ai_poem: "",       // 《AI的诗》
  yiqie_haihao: "",  // 《一切还好》
  jingzhi: "",       // 《精致的代价》
  anerkang: ""       // 安尔康广告片
};

/* ---------- 观看正片按钮 ---------- */
document.querySelectorAll(".work-btn[data-work-id]").forEach(function (btn) {
  var url = VIDEO_LINKS[btn.dataset.workId];
  if (url) {
    btn.href = url;
  } else {
    btn.classList.add("disabled");
    btn.textContent = "正片链接待补充";
    btn.removeAttribute("target");
    btn.addEventListener("click", function (e) { e.preventDefault(); });
  }
});

/* ---------- 导航栏滚动状态 ---------- */
var nav = document.getElementById("nav");
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- 滚动淡入动画 ---------- */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-in").forEach(function (el) {
  observer.observe(el);
});
