import{S as s,i as t,s as o,e,t as r,c as n,b as a,d as h,f as l,g as c,h as p,o as f,a as u,n as i,y as g}from"./chunk.78d3fd54.js";function v(s,t,o){const e=Object.create(s);return e.post=t[o],e}function d(s){var t,o,u,i,g=s.post.title;return{c(){t=e("li"),o=e("a"),u=r(g),this.h()},l(s){t=n(s,"LI",{},!1);var e=a(t);o=n(e,"A",{rel:!0,href:!0},!1);var r=a(o);u=h(r,g),r.forEach(l),e.forEach(l),this.h()},h(){o.rel="prefetch",o.href=i="blog/"+s.post.slug},m(s,e){c(s,t,e),p(t,o),p(o,u)},p(s,t){s.posts&&g!==(g=t.post.title)&&f(u,g),s.posts&&i!==(i="blog/"+t.post.slug)&&(o.href=i)},d(s){s&&l(t)}}}function m(s){for(var t,o,f,m,b,j=s.posts,E=[],x=0;x<j.length;x+=1)E[x]=d(v(s,j,x));return{c(){t=u(),o=e("h1"),f=r("Recent posts"),m=u(),b=e("ul");for(var s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){t=h(s,"\n\n"),o=n(s,"H1",{},!1);var e=a(o);f=h(e,"Recent posts"),e.forEach(l),m=h(s,"\n\n"),b=n(s,"UL",{class:!0},!1);for(var r=a(b),c=0;c<E.length;c+=1)E[c].l(r);r.forEach(l),this.h()},h(){document.title="Blog",b.className="svelte-1frg2tf"},m(s,e){c(s,t,e),c(s,o,e),p(o,f),c(s,m,e),c(s,b,e);for(var r=0;r<E.length;r+=1)E[r].m(b,null)},p(s,t){if(s.posts){j=t.posts;for(var o=0;o<j.length;o+=1){const e=v(t,j,o);E[o]?E[o].p(s,e):(E[o]=d(e),E[o].c(),E[o].m(b,null))}for(;o<E.length;o+=1)E[o].d(1);E.length=j.length}},i:i,o:i,d(s){s&&(l(t),l(o),l(m),l(b)),g(E,s)}}}function b({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function j(s,t,o){let{posts:e}=t;return s.$set=(s=>{"posts"in s&&o("posts",e=s.posts)}),{posts:e}}export default class extends s{constructor(s){super(),t(this,s,j,m,o,["posts"])}}export{b as preload};
//# sourceMappingURL=index.8c9d2639.js.map