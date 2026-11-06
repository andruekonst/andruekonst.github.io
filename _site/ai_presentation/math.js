import katex from './vendor/katex/katex.mjs';
import {MATH_LABELS} from './math-labels.js';
const cache=new Map();
const escape=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
export function renderMath(tex,displayMode=false){
 if(!tex)return '';
 const key=(displayMode?'D:':'I:')+tex;
 if(!cache.has(key))cache.set(key,katex.renderToString(tex,{displayMode,throwOnError:true,trust:false,strict:'error',output:'htmlAndMathml'}));
 return cache.get(key);
}
// Plain prose and math have separate renderers: Cyrillic text is never passed
// through the mathematical font or guessed from individual Latin characters.
const MIXED={
 'Контекст cₜ = Σ αₜᵢhᵢ':['Контекст ',String.raw`c_t=\sum_i\alpha_{ti}h_i`],
 'Состояние sₜ₋₁':['Состояние ',String.raw`s_{t-1}`],
 'Сравнение ŷ с y':['Сравнение ',String.raw`\hat y\text{ vs. }y`],
 'Сравнить с ε':['Сравнить с ',String.raw`\varepsilon`],
 'Шумный xₜ + шаг t':['Вход: ',String.raw`x_t,\;t`],
 'параметры θ':['параметры ',String.raw`\theta`],
 'Пунктир — t = 0':['Пунктир — ',String.raw`t=0`],
 'W₁ + activation':['',String.raw`W_1\; +\;\operatorname{activation}`]
};
export function mathLabelMarkup(label){
 label=String(label);
 if(MATH_LABELS[label])return renderMath(MATH_LABELS[label]);
 if(MIXED[label])return escape(MIXED[label][0])+renderMath(MIXED[label][1]);
 let match=label.match(/^t = ([\d.]+); α = ([\d.]+)$/);
 if(match)return renderMath(String.raw`t=${match[1]},\quad\alpha=${match[2]}`);
 match=label.match(/^([xwh])(\d+)$/);
 if(match)return renderMath(`${match[1]}_{${match[2]}}`);
 return null;
}
export function mathLabelSVG(x,y,label,size,color,anchor='middle',availableWidth){
 const markup=mathLabelMarkup(label);if(!markup)return null;
 const width=availableWidth??Math.min(880,Math.max(95,String(label).length*size*.7));
 const height=size*3.4,left=anchor==='middle'?x-width/2:anchor==='end'?x-width:x;
 return `<foreignObject x="${left}" y="${y-size*1.95}" width="${width}" height="${height}" class="diagram-math"><div xmlns="http://www.w3.org/1999/xhtml" class="math-label" style="font-size:${size}px;color:${color};justify-content:${anchor==='start'?'flex-start':anchor==='end'?'flex-end':'center'}"><span class="math-label-inner">${markup}</span></div></foreignObject>`;
}
export function fitMathLabels(root){
 if(!root)return;
 root.querySelectorAll('.diagram-math').forEach(el=>{
  const inner=el.querySelector('.math-label-inner');if(!inner)return;
  inner.style.transform='none';
  const width=el.getBoundingClientRect().width,actual=inner.getBoundingClientRect().width;
  if(actual>width&&width>0)inner.style.transform=`scale(${width/actual})`;
 });
}
