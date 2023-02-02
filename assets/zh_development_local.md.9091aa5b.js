import{_ as s,c as n,a as e,b as l,t as p,d as o,o as r}from"./app.0cff3891.js";const v=JSON.parse('{"title":"Setting up your local development environment","description":"","frontmatter":{"title":"Setting up your local development environment","editLink":true},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"开发要求","slug":"开发要求","link":"#开发要求","children":[]},{"level":2,"title":"运行 Web 和 API 服务","slug":"运行-web-和-api-服务","link":"#运行-web-和-api-服务","children":[{"level":3,"title":"1. 启动 docker-compose","slug":"_1-启动-docker-compose","link":"#_1-启动-docker-compose","children":[]},{"level":3,"title":"2. 打开浏览器","slug":"_2-打开浏览器","link":"#_2-打开浏览器","children":[]},{"level":3,"title":"3. 创建测试帐户","slug":"_3-创建测试帐户","link":"#_3-创建测试帐户","children":[]}]},{"level":2,"title":"前端开发","slug":"前端开发","link":"#前端开发","children":[]},{"level":2,"title":"在 Docker 外部运行 puppeteer-parse 服务","slug":"在-docker-外部运行-puppeteer-parse-服务","link":"#在-docker-外部运行-puppeteer-parse-服务","children":[{"level":3,"title":"1. 安装和配置 Chromium","slug":"_1-安装和配置-chromium","link":"#_1-安装和配置-chromium","children":[]},{"level":3,"title":"2. 导航到服务目录，设置你的 env 文件并安装依赖项","slug":"_2-导航到服务目录-设置你的-env-文件并安装依赖项","link":"#_2-导航到服务目录-设置你的-env-文件并安装依赖项","children":[]},{"level":3,"title":"3. 启动服务","slug":"_3-启动服务","link":"#_3-启动服务","children":[]}]}],"relativePath":"zh/development/local.md"}'),t={name:"zh/development/local.md"},c={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<nav class="table-of-contents"><ul><li><a href="#简介">简介</a></li><li><a href="#开发要求">开发要求</a></li><li><a href="#运行-web-和-api-服务">运行 Web 和 API 服务</a><ul><li><a href="#_1-启动-docker-compose">1. 启动 docker-compose</a></li><li><a href="#_2-打开浏览器">2. 打开浏览器</a></li><li><a href="#_3-创建测试帐户">3. 创建测试帐户</a></li></ul></li><li><a href="#前端开发">前端开发</a></li><li><a href="#在-docker-外部运行-puppeteer-parse-服务">在 Docker 外部运行 puppeteer-parse 服务</a><ul><li><a href="#_1-安装和配置-chromium">1. 安装和配置 Chromium</a></li><li><a href="#_2-导航到服务目录-设置你的-env-文件并安装依赖项">2. 导航到服务目录，设置你的 env 文件并安装依赖项</a></li><li><a href="#_3-启动服务">3. 启动服务</a></li></ul></li></ul></nav><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><p>开始本地开发的最简单方法是使用 <code>docker-compose up</code>。这将启动一个 postgres 容器，我们的Web前端，一个API服务器，以及我们的内容获取微服务。</p><h2 id="开发要求" tabindex="-1">开发要求 <a class="header-anchor" href="#开发要求" aria-hidden="true">#</a></h2><p>Omnivore 是用 TypeScript 和 JavaScript 编写的。</p><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node</a> -- 目前我们正在使用 Node.js v14.18</li><li><a href="https://www.chromium.org/chromium-projects/" target="_blank" rel="noreferrer">Chromium</a> -- 有关安装信息，请参见下文</li></ul><h2 id="运行-web-和-api-服务" tabindex="-1">运行 Web 和 API 服务 <a class="header-anchor" href="#运行-web-和-api-服务" aria-hidden="true">#</a></h2><h3 id="_1-启动-docker-compose" tabindex="-1">1. 启动 docker-compose <a class="header-anchor" href="#_1-启动-docker-compose" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/omnivore-app/omnivore</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">omnivore</span></span>
<span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span></span>
<span class="line"></span></code></pre></div><p>这将启动 postgres，初始化数据库，并启动 Web 和 api 服务。</p><h3 id="_2-打开浏览器" tabindex="-1">2. 打开浏览器 <a class="header-anchor" href="#_2-打开浏览器" aria-hidden="true">#</a></h3><p>转到 <code>http://localhost:3000</code> 并确认 Omnivore 正在运行</p><h3 id="_3-创建测试帐户" tabindex="-1">3. 创建测试帐户 <a class="header-anchor" href="#_3-创建测试帐户" aria-hidden="true">#</a></h3><p>Omnivore 使用社交登录，但为了测试，有一个电子邮件 + 密码 选择。</p><p>转到 <code>http://localhost:3000/auth/email-signup</code> 在您的浏览器中。</p><h2 id="前端开发" tabindex="-1">前端开发 <a class="header-anchor" href="#前端开发" aria-hidden="true">#</a></h2><p>如果你只想在 Omnivore 的前端工作，你可以运行后端 使用 docker compose 和本地前端:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">api</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">content-fetch</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages/web</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.env.template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.env</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><h2 id="在-docker-外部运行-puppeteer-parse-服务" tabindex="-1">在 Docker 外部运行 puppeteer-parse 服务 <a class="header-anchor" href="#在-docker-外部运行-puppeteer-parse-服务" aria-hidden="true">#</a></h2><p>要保存页面，您需要运行 <code>puppeteer-parse</code> 服务。</p><h3 id="_1-安装和配置-chromium" tabindex="-1">1. 安装和配置 Chromium <a class="header-anchor" href="#_1-安装和配置-chromium" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew install chromium --no-quarantine</span></span>
<span class="line"><span style="color:#A6ACCD;">export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true</span></span>
<span class="line"><span style="color:#A6ACCD;">export CHROMIUM_PATH=\`which chromium\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-导航到服务目录-设置你的-env-文件并安装依赖项" tabindex="-1">2. 导航到服务目录，设置你的 env 文件并安装依赖项 <a class="header-anchor" href="#_2-导航到服务目录-设置你的-env-文件并安装依赖项" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd packages/puppeteer-parse</span></span>
<span class="line"><span style="color:#A6ACCD;">cp .env.example .env</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-启动服务" tabindex="-1">3. 启动服务 <a class="header-anchor" href="#_3-启动服务" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这将在端口 9090 上启动 puppeteer-parse 服务.</p><p>在浏览器中转到 <code>http://localhost:3000/home</code>，单击 <code>Add Link</code> 按钮， 然后输入网址，例如 <code>https://blog.omnivore.app/p/getting-started-with-omnivore</code>.</p><p>您应该会看到一个 Chromium 窗口打开并导航到您的链接。当服务完成获取内容后，您将在资料库中看到它。</p>`,29);function h(a,u,m,C,_,y){return r(),n("div",null,[e("h1",c,[l(p(a.$frontmatter.title)+" ",1),i]),d])}const g=s(t,[["render",h]]);export{v as __pageData,g as default};
