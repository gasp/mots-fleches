import{_ as l,M as s,p as i,q as c,R as e,N as d,V as n,t,a1 as o}from"./framework-5866ffd3.js";const h={},f=o('<h1 id="module-search-types" tabindex="-1"><a class="header-anchor" href="#module-search-types" aria-hidden="true">#</a> Module: search/types</h1><h2 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h2><h3 id="boolgrid" tabindex="-1"><a class="header-anchor" href="#boolgrid" aria-hidden="true">#</a> BoolGrid</h3><p>Ƭ <strong>BoolGrid</strong>: <code>Boolean</code>[][]</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),u={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L17",target:"_blank",rel:"noopener noreferrer"},_=o('<hr><h3 id="char" tabindex="-1"><a class="header-anchor" href="#char" aria-hidden="true">#</a> Char</h3><p>Ƭ <strong>Char</strong>: <code>string</code> &amp; { <code>length</code>: <code>1</code> }</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',4),p={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L16",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),x=e("h3",{id:"dicoindex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dicoindex","aria-hidden":"true"},"#"),t(" DicoIndex")],-1),b=e("p",null,[t("Ƭ "),e("strong",null,"DicoIndex"),t(": "),e("code",null,"number")],-1),g=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),t(" Defined in")],-1),m={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L18",target:"_blank",rel:"noopener noreferrer"},L=o('<hr><h3 id="lemme" tabindex="-1"><a class="header-anchor" href="#lemme" aria-hidden="true">#</a> Lemme</h3><p>Ƭ <strong>Lemme</strong>: <code>Object</code></p><p>Part of a word withing a grid</p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>indexLemme</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">index of the letter in the perpandicular word</td></tr><tr><td style="text-align:left;"><code>indexWord</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">index of the letter in the word</td></tr><tr><td style="text-align:left;"><code>lemme</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the lemme (. or a letter)</td></tr><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">length of the lemme (2 or 3)</td></tr><tr><td style="text-align:left;"><code>totalLength</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">length of the perpandicular word</td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',7),v={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L57",target:"_blank",rel:"noopener noreferrer"},w=e("hr",null,null,-1),k=e("h3",{id:"occurencebyindex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#occurencebyindex","aria-hidden":"true"},"#"),t(" OccurenceByIndex")],-1),D=e("strong",null,"OccurenceByIndex",-1),N=e("code",null,"Record",-1),B=e("code",null,"number",-1),I=e("code",null,"Set",-1),O=e("code",null,"DicoIndex",-1),R=e("p",null,"Data structure for fast access. Key is the index of the letter within the word Value is a set of indexes within the words array",-1),T=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),C={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L24",target:"_blank",rel:"noopener noreferrer"},V=e("hr",null,null,-1),M=e("h3",{id:"occurencemap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#occurencemap","aria-hidden":"true"},"#"),t(" OccurenceMap")],-1),q=e("strong",null,"OccurenceMap",-1),S=e("code",null,"Record",-1),E=e("code",null,"string",-1),j=e("code",null,"OccurenceByIndex",-1),G=e("p",null,"Data structure for fast access. key is a sequence of 2 or 3 letters value is an OccurenceByIndex.",-1),A=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),t(" Defined in")],-1),K={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L30",target:"_blank",rel:"noopener noreferrer"},P=o('<hr><h3 id="searchresult" tabindex="-1"><a class="header-anchor" href="#searchresult" aria-hidden="true">#</a> SearchResult</h3><p>Ƭ <strong>SearchResult</strong>: <code>Object</code></p><p>Result of a search</p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cells</code></td><td style="text-align:left;"><code>Cell</code>[]</td><td style="text-align:left;">Cells to fit the word into</td></tr><tr><td style="text-align:left;"><code>impossible?</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">Letters that make it impossible to find words</td></tr><tr><td style="text-align:left;"><code>query</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The query that was used to find the words</td></tr><tr><td style="text-align:left;"><code>words</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">The list of words found</td></tr></tbody></table><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',7),W={href:"https://github.com/Leo-Nicolle/mots-fleches/blob/9fcaad3/server/lib/search/types.d.ts#L35",target:"_blank",rel:"noopener noreferrer"};function z(F,H){const a=s("RouterLink"),r=s("ExternalLinkIcon");return i(),c("div",null,[e("p",null,[d(a,{to:"/server/"},{default:n(()=>[t("server")]),_:1}),t(" / "),d(a,{to:"/server/modules.html"},{default:n(()=>[t("Modules")]),_:1}),t(" / search/types")]),f,e("p",null,[e("a",u,[t("search/types.d.ts:17"),d(r)])]),_,e("p",null,[e("a",p,[t("search/types.d.ts:16"),d(r)])]),y,x,b,g,e("p",null,[e("a",m,[t("search/types.d.ts:18"),d(r)])]),L,e("p",null,[e("a",v,[t("search/types.d.ts:57"),d(r)])]),w,k,e("p",null,[t("Ƭ "),D,t(": "),N,t("<"),B,t(", "),I,t("<"),d(a,{to:"/server/modules/search_types.html#dicoindex"},{default:n(()=>[O]),_:1}),t(">>")]),R,T,e("p",null,[e("a",C,[t("search/types.d.ts:24"),d(r)])]),V,M,e("p",null,[t("Ƭ "),q,t(": "),S,t("<"),E,t(", "),d(a,{to:"/server/modules/search_types.html#occurencebyindex"},{default:n(()=>[j]),_:1}),t(">")]),G,A,e("p",null,[e("a",K,[t("search/types.d.ts:30"),d(r)])]),P,e("p",null,[e("a",W,[t("search/types.d.ts:35"),d(r)])])])}const Q=l(h,[["render",z],["__file","search_types.html.vue"]]);export{Q as default};
