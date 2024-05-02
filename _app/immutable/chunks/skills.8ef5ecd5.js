import{A as e}from"./UIcon.1e419092.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function p(t,...a){const r=Object.assign({},t);return Object.keys(r).forEach(s=>{a.includes(s)&&delete r[s]}),r}const n=t=>t,m=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Langauges",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],o=t=>{const a=p(t,"category");return t.category&&(a.category=m.find(r=>r.slug===t.category)),a},c=[o({slug:"js",color:"yellow",description:"",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"css",color:"blue",description:"",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"sass",color:"pink",description:"",logo:e.Sass,name:"Sass",category:"markup-style"}),o({slug:"reactjs",color:"cyan",description:"",logo:e.ReactJs,name:"React Js",category:"library"}),o({slug:"svelte",color:"orange",description:u,logo:e.Svelte,name:"Svelte",category:"library"}),o({slug:"python",color:"blue",description:"",logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"django",color:"green",description:"",logo:e.Django,name:"Django",category:"framework"}),o({slug:"c",color:"blue",description:"",logo:e.C,name:"C",category:"pro-lang"}),o({slug:"cpp",color:"blue",description:"",logo:e.Cpp,name:"C++",category:"pro-lang"}),o({slug:"postgres",color:"blue",description:"",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),o({slug:"flask",color:"white",description:"",logo:e.Flask,name:"Flask",category:"framework"})],y="Skills",h=(...t)=>c.filter(a=>t.includes(a.slug)),b=t=>{const a=[],r=[];return c.forEach(s=>{if(t.trim()&&!s.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!s.category){console.log(s.category),r.push(s);return}let i=a.find(g=>{var l;return g.category.slug===((l=s.category)==null?void 0:l.slug)});i||(i={items:[],category:s.category},a.push(i)),i.items.push(s)}),r.length!==0&&a.push({category:{name:"Others",slug:"others"},items:r}),a};export{b as a,h as g,c as i,y as t};
