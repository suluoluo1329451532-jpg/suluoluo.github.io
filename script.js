const projects = [
  {
    title: "遗迹研究站",
    category: "UE5 场景",
    filter: "ue5",
    thumb: "./assets/work-ue5-scene.png",
    mediaType: "image",
    description:
      "以废弃科考站为主题的 UE5 场景练习，重点展示地编、模块化资产、体积雾、灯光氛围与镜头构图。",
    meta: {
      软件: "UE5 / Blender / Substance 3D Painter",
      类型: "环境场景",
      内容: "场景搭建、灯光、材质、渲染",
    },
  },
  {
    title: "交互解谜原型",
    category: "Unity 游戏",
    filter: "unity",
    thumb: "./assets/work-unity-game.png",
    mediaType: "image",
    description:
      "Unity 制作的第三人称交互原型，包含基础角色控制、机关触发、UI 状态反馈和关卡流程。",
    meta: {
      软件: "Unity / C#",
      类型: "游戏原型",
      内容: "交互逻辑、关卡、UI",
    },
  },
  {
    title: "次世代道具资产",
    category: "建模",
    filter: "modeling",
    thumb: "./assets/work-prop-model.png",
    mediaType: "image",
    description:
      "完整高低模与 PBR 贴图流程练习，展示资产轮廓、材质磨损、法线细节和游戏引擎预览效果。",
    meta: {
      软件: "Blender / ZBrush / Substance 3D Painter",
      类型: "次世代资产",
      内容: "高模、低模、UV、烘焙、贴图",
    },
  },
  {
    title: "城市节奏海报",
    category: "平面设计",
    filter: "design",
    thumb: "./assets/work-poster.png",
    mediaType: "image",
    description:
      "围绕数字城市与青年文化主题制作的视觉海报，强调信息层级、构图张力和视觉记忆点。",
    meta: {
      软件: "Photoshop / Illustrator",
      类型: "平面视觉",
      内容: "版式、合成、色彩",
    },
  },
  {
    title: "UE5 场景漫游视频",
    category: "视频",
    filter: "video",
    thumb: "./assets/work-video.png",
    mediaType: "video",
    video: "",
    description:
      "用于展示场景完整空间关系、镜头运动、灯光变化和最终画面表现的视频入口。上传视频后把 video 字段改成文件路径即可。",
    meta: {
      软件: "UE5 / Premiere",
      类型: "作品演示",
      内容: "镜头、剪辑、包装",
    },
  },
  {
    title: "开放世界地编练习",
    category: "UE5 场景",
    filter: "ue5",
    thumb: "./assets/work-landscape.png",
    mediaType: "image",
    description:
      "围绕自然地貌、路径引导和远中近景关系进行的地编练习，包含植被散布、材质混合与氛围设计。",
    meta: {
      软件: "UE5",
      类型: "地编练习",
      内容: "地形、植被、材质、后期",
    },
  },
];

const grid = document.querySelector("#workGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const dialog = document.querySelector("#projectDialog");
const dialogMedia = document.querySelector("#dialogMedia");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogMeta = document.querySelector("#dialogMeta");
const dialogClose = document.querySelector(".dialog-close");

function renderProjects(filter = "all") {
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.filter === filter);

  grid.innerHTML = visibleProjects
    .map(
      (project, i) => {
        const sizes = ["feature", "wide", "tall", "wide", "tall", "wide"];
        const sizeClass = ` work-card--${sizes[i % sizes.length]}`;
        return `
        <article class="work-card${sizeClass}" tabindex="0" role="button" data-index="${projects.indexOf(project)}">
          <span class="work-thumb">
            <img src="${project.thumb}" alt="${project.title}" loading="lazy" />
            <span class="media-badge">${project.mediaType === "video" ? "VIDEO" : "IMAGE"}</span>
            <span class="card-index">${String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
          </span>
          <span class="work-info">
            <span class="eyebrow">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="work-arrow">View Project →</span>
          </span>
        </article>
      `;
      },
    )
    .join("");
}

function openProject(project) {
  dialogTitle.textContent = project.title;
  dialogCategory.textContent = project.category;
  dialogDescription.textContent = project.description;

  if (project.mediaType === "video" && project.video) {
    dialogMedia.innerHTML = `<video src="${project.video}" controls poster="${project.thumb}"></video>`;
  } else {
    dialogMedia.innerHTML = `<img src="${project.thumb}" alt="${project.title}" />`;
  }

  dialogMeta.innerHTML = Object.entries(project.meta)
    .map(
      ([term, description]) => `
        <div>
          <dt>${term}</dt>
          <dd>${description}</dd>
        </div>
      `,
    )
    .join("");

  dialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".work-card");
  if (!card) return;
  openProject(projects[Number(card.dataset.index)]);
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".work-card");
  if (!card) return;
  event.preventDefault();
  openProject(projects[Number(card.dataset.index)]);
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (isOutside) {
    dialog.close();
  }
});

renderProjects();

const scrollProgress = document.querySelector("#scrollProgress");

window.addEventListener("scroll", () => {
  const scrolled = document.documentElement.scrollTop;
  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.style.width = `${(scrolled / total) * 100}%`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
