import{_ as l,c as a,a as e,b as d,t,d as r,o}from"./app.9dea0289.js";const m=JSON.parse('{"title":"搜索","description":"","frontmatter":{"title":"搜索","editLink":true},"headers":[{"level":2,"title":"搜索文本","slug":"搜索文本","link":"#搜索文本","children":[]},{"level":2,"title":"根据标签筛选","slug":"根据标签筛选","link":"#根据标签筛选","children":[]},{"level":2,"title":"根据存档状态筛选","slug":"根据存档状态筛选","link":"#根据存档状态筛选","children":[]},{"level":2,"title":"按阅读状态筛选","slug":"按阅读状态筛选","link":"#按阅读状态筛选","children":[]},{"level":2,"title":"根据类型筛选","slug":"根据类型筛选","link":"#根据类型筛选","children":[]},{"level":2,"title":"查找带有荧光笔高亮的文章","slug":"查找带有荧光笔高亮的文章","link":"#查找带有荧光笔高亮的文章","children":[]},{"level":2,"title":"根据 保存/发布日期 筛选","slug":"根据-保存-发布日期-筛选","link":"#根据-保存-发布日期-筛选","children":[]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]}],"relativePath":"zh/using/search.md","lastUpdated":1676558672000}'),c={name:"zh/using/search.md"},h={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),n=r('<p>Omnivore 使用搜索来筛选文库中的文章。您可以使用简单的关键字搜索或我们的高级搜索语法来查找文章。</p><nav class="table-of-contents"><ul><li><a href="#搜索文本">搜索文本</a></li><li><a href="#根据标签筛选">根据标签筛选</a></li><li><a href="#根据存档状态筛选">根据存档状态筛选</a></li><li><a href="#按阅读状态筛选">按阅读状态筛选</a></li><li><a href="#根据类型筛选">根据类型筛选</a></li><li><a href="#查找带有荧光笔高亮的文章">查找带有荧光笔高亮的文章</a></li><li><a href="#根据-保存-发布日期-筛选">根据 保存/发布日期 筛选</a></li><li><a href="#排序">排序</a></li></ul></nav><h2 id="搜索文本" tabindex="-1">搜索文本 <a class="header-anchor" href="#搜索文本" aria-hidden="true">#</a></h2><p>默认情况下，Omnivore 将跨文库文章中的内容、标题、描述和站点执行全文搜索。您可以通过引用您的术语来搜索特定术语。默认情况下，与您的搜索匹配的所有结果将按保存顺序返回。若要将搜索更改为相关性，请使用 sort:score 参数。</p><h2 id="根据标签筛选" tabindex="-1">根据标签筛选 <a class="header-anchor" href="#根据标签筛选" aria-hidden="true">#</a></h2><p>您可以使用 AND 和 OR 规则根据标签筛选搜索结果。您还可以否定标签搜索以查找没有特定标签的页面。</p><p>一些例子：</p><ul><li><code>label:Newsletter</code> 查找具有 “Newsletter” 标签的所有页面。</li><li><code>label:Cooking,Fitness</code> 查找带有 “Cooking” 或 “Fitness” 标签的所有页面。</li><li><code>label:Newsletter label:Surfing</code> 查找同时具有 “Newsletter” 和 “Surfing” 标签的所有页面。</li><li><code>label:Coding -label:News</code> 查找具有 “Coding” 标签但没有 “News” 标签的所有页面。</li></ul><h2 id="根据存档状态筛选" tabindex="-1">根据存档状态筛选 <a class="header-anchor" href="#根据存档状态筛选" aria-hidden="true">#</a></h2><p><code>in:</code> 筛选器用于根据存档状态筛选搜索结果。选项包括：</p><ul><li><code>in:inbox</code> (the default): 显示未存档的文章。</li><li><code>in:archive:</code> 显示已存档的文章。</li><li><code>in:all:</code> 显示所有文章，而不考虑存档状态。</li></ul><h2 id="按阅读状态筛选" tabindex="-1">按阅读状态筛选 <a class="header-anchor" href="#按阅读状态筛选" aria-hidden="true">#</a></h2><p><code>is:</code> 筛选器用于根据阅读状态筛选搜索结果。请注意，在 Omnivore 中，&#39;read&#39; 意味着完全阅读完，而不仅仅是打开过。</p><p><code>is:</code> 筛选器选项包括：</p><ul><li><code>is:read</code>: 仅显示完全阅读过的文章。</li><li><code>is:unread</code>: (the default): 显示未读文章。</li></ul><h2 id="根据类型筛选" tabindex="-1">根据类型筛选 <a class="header-anchor" href="#根据类型筛选" aria-hidden="true">#</a></h2><p>The <code>type:</code> 筛选器用于根据类型筛选搜索结果。</p><ul><li><code>type:article</code>: 仅显示文章。</li><li><code>type:file</code>: 仅显示文件。</li><li><code>type:pdf</code>: 仅显示 PDF。</li><li><code>type:highlights</code>: 显示您的荧光笔亮点。</li></ul><h2 id="查找带有荧光笔高亮的文章" tabindex="-1">查找带有荧光笔高亮的文章 <a class="header-anchor" href="#查找带有荧光笔高亮的文章" aria-hidden="true">#</a></h2><p>您可以使用 <code>type:highlights</code> 筛选荧光笔高亮显示，也可以使用 has:highlights 查找包含荧光笔高亮显示的已保存文章。</p><h2 id="根据-保存-发布日期-筛选" tabindex="-1">根据 保存/发布日期 筛选 <a class="header-anchor" href="#根据-保存-发布日期-筛选" aria-hidden="true">#</a></h2><p>您可以使用 <code>saved:</code> 和 <code>published:</code> 筛选器根据保存或发布的时间筛选搜索结果。 这些筛选器需要两个日期来创建日期范围。 “<code>*</code>” 通配符将接受任何日期。</p><p>例如:</p><ul><li><code>saved:2022-04-21.._</code> 自 2022-04-21 以来保存的所有文章。</li><li><code>published:2020-01-01..2022-02-02</code> 在 2020-01-01 至 2022-02-02 之间发布的所有文章。</li><li><code>published:_..2020-01-01</code> 在 2020-01-01 之前发布的所有文章。</li></ul><h2 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-hidden="true">#</a></h2><p>默认情况下，Omnivore 所有搜索结果都按保存日期排序。这会将最近保存的文章放在文库的顶部。您可以使用排序选项更改资料库顺序：</p><ul><li><code>sort:saved</code>: 根据保存日期排序</li><li><code>sort:updated</code>: 根据文章更新时间排序，例如添加标签或荧光笔高亮显示。</li><li><code>sort:score</code>: 根据查询词相关性排序。</li></ul>',27);function p(i,u,f,_,g,b){return o(),a("div",null,[e("h1",h,[d(t(i.$frontmatter.title)+" ",1),s]),n])}const k=l(c,[["render",p]]);export{m as __pageData,k as default};