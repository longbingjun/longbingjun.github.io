# Bingjun Long · Personal Website

双语数据科学个人网站：项目、实践与思考、教育经历与篮球彩蛋。

Website: https://longbingjun.github.io/

## 更新内容

- `content.js`：项目中英文文案、GitHub 地址与演示视频路径。
- 项目分类统一由 `categories` 定义，项目通过 `categoryId` 引用；`context` 表示实习、竞赛或课程背景，`tags` 表示技术与方法。
- 项目数组顺序即展示顺序；`featured` 指定横向精选卡，`highlightMetricIndex` 指定卡片突出展示的指标。有 `githubUrl` 的项目会同时显示卡片和详情中的仓库入口。
- `app.js`：其他中英文界面文案与交互。
- `style.css`：布局、配色与动画。
- `assets/`：网站使用的卡通图片与演示视频。
- `writing/index.html`：实践与思考文章列表。
- `writing/ai-data-debt/index.html`：数据债务文章的完整静态正文。
- `writing.css`：文章阅读样式、首页文章预览和移动端导航。
- `writing.js`：文章页主题切换、目录定位与阅读进度。

直接打开 `index.html` 即可本地预览。无需安装依赖或运行构建。

完整预览目录链接时，在仓库目录运行 `python -m http.server 8765 --bind 127.0.0.1`，
访问 `http://127.0.0.1:8765/`。

## 实践与思考

首页展示文章摘要，导航中的“实践与思考”进入 `writing/`；每篇文章拥有独立目录及
`index.html`，可直接分享 URL。项目、关于我和联系继续使用首页锚点。

首篇文章正文来自作者于 2026-09-28 手动修订后的飞书文档（revision 41）。
仅调整标题层级、空白、代码块呈现与章节链接；标题中的箭头作排版处理。
文章内容由 HTML 直接提供，关闭 JavaScript 后仍可阅读和使用目录。
文章为中文原文：首页切换英文时，文章入口会注明“Written in Chinese”。

后续更新正文时直接编辑文章 HTML；新增文章时新建 `writing/<slug>/index.html`，
并更新文章列表及首页精选入口。飞书源文档不会自动同步。

## 发布

GitHub 仓库 Settings → Pages → Deploy from a branch → `main` → `/(root)`。
提交并推送到 `main` 后会自动发布。`.nojekyll` 保证以普通静态文件发布。

竞品系统演示视频使用公开拆解数据在本机重建，网站不连接公司内网。
