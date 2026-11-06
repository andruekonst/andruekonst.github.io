import {heatPlate,heatResidual,heatColor,sensors} from './physics.js';
import {renderMath} from './math.js';
const text=(x,y,s,size=15,c='#b8cbd6')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${size}">${s}</text>`;
const math=(x,y,w,tex)=>`<foreignObject x="${x}" y="${y}" width="${w}" height="65"><div xmlns="http://www.w3.org/1999/xhtml" style="color:#79dfd0;font-size:16px;text-align:center">${renderMath(tex)}</div></foreignObject>`;
const proj=(x,y,u)=>[240+(x-y)*195,260+(x+y)*85-u*150];
export function pinnDiagram(step,t,beta){
 let s=text(35,35,'ЛАБОРАТОРИЯ ТЕПЛА · квадратная пластина',18,'#e9b67d');
 for(let y=0;y<18;y++)for(let x=0;x<18;x++){const corners=[[x,y],[x+1,y],[x+1,y+1],[x,y+1]].map(([a,b])=>proj(a/18,b/18,heatPlate(a/18,b/18,t,beta)));const col=heatColor(heatPlate((x+.5)/18,(y+.5)/18,t,beta));s+=`<polygon points="${corners.map(p=>p.join(',')).join(' ')}" fill="rgb(${col.join(',')})" stroke="#182f43" stroke-width=".4"/>`}
 s+=text(40,475,'Высота и цвет — температура, не деформация.',12)+text(40,496,'Холодные края: температура всегда равна нулю.',12);
 s+=math(35,70,410,String.raw`u_t=0.3\,(u_{xx}+u_{yy})`);
 s+=text(240,455,'x',16)+text(25,350,'y',16)+text(85,140,'температура',12);
 if(step>=2)for(const [x,y] of sensors){const [X,Y]=proj(x,y,heatPlate(x,y,t));s+=`<circle cx="${X}" cy="${Y}" r="5" fill="#e9b67d" stroke="#fff" stroke-width="1.5"/>`}
 if(step>=1)for(let i=1;i<6;i++)for(let j=1;j<6;j++){const [X,Y]=proj(i/6,j/6,heatPlate(i/6,j/6,t,beta));s+=`<circle cx="${X}" cy="${Y}" r="1.8" fill="#fff"/>`}
 s+=`<rect x="500" y="60" width="425" height="445" rx="14" fill="#0d1722" stroke="#344756"/>`;
 const headers=['1 · Задать физическую задачу','2 · Проверить закон внутри области','3 · Разделить источники знания','4 · Обучать по нескольким условиям','5 · Красивое поле может быть неверным','6 · От примера к настоящей PINN'];s+=text(525,92,headers[step],17,'#e9b67d');
 if(step===0){s+=math(520,125,380,String.raw`(x,y,t)\longmapsto u_\theta(x,y,t)`)+math(520,195,380,String.raw`u(x,y,0)=\sin(\pi x)\sin(\pi y)`)+math(520,265,380,String.raw`u\big|_{\partial\Omega}=0,\quad\Omega=[0,1]^2`)+text(525,365,'Начальное состояние: горячий центр.',14)+text(525,395,'Края удерживаются холодными.',14)+text(525,425,'Температура постепенно снижается.',14)}
 else if(step===1){s+=text(525,140,'Сеть → autodiff → производные → невязка',14)+math(520,180,380,String.raw`r_\theta=u_{\theta,t}-0.3(u_{\theta,xx}+u_{\theta,yy})`)+text(525,285,'Белые точки: проверка уравнения.',14)+text(525,315,'Температурные ответы здесь не нужны:',14)+text(525,345,'нужен закон, связывающий производные.',14)+text(525,405,'В реальной PINN производные берутся',13)+text(525,430,'по графу нейросети через autodiff.',13)}
 else if(step===2){s+=text(525,145,'● Золотые точки: измеренные температуры',14,'#e9b67d')+text(525,190,'• Белые точки: проверка PDE',14,'#ffffff')+text(525,235,'Периметр: граничные условия',14,'#79dfd0')+text(525,280,'Первый момент: начальное распределение',14)+math(520,325,380,String.raw`L_d=\frac1{N_d}\sum_i|u_\theta(z_i)-u_i|^2`)+text(525,425,'Измерения в примере синтетические:',13)+text(525,450,'они рассчитаны из точного решения.',13)}
 else if(step===3){s+=math(520,135,380,String.raw`L_r=\frac1{N_r}\sum_j|r_\theta(z_j)|^2`)+math(520,215,380,String.raw`L=\lambda_dL_d+\lambda_rL_r+\lambda_iL_i+\lambda_bL_b`)+text(525,325,'Один набор параметров согласует все цели.',14)+text(525,360,'Веса определяют баланс ограничений.',14)+text(525,395,'Малая ошибка в точках проверки сама',13)+text(525,420,'по себе не гарантирует точность всюду.',13)}
 else {s+=text(525,130,'Модуль невязки по площади пластины',14);for(let j=0;j<14;j++)for(let i=0;i<14;i++){let r=Math.abs(heatResidual((i+.5)/14,(j+.5)/14,t,beta));s+=`<rect x="${525+i*13}" y="${150+j*13}" width="12" height="12" fill="#f2998b" opacity="${.07+Math.min(1,r/6)*.93}"/>`}
 s+=text(730,185,'В центре:',12)+text(730,215,'|r| = '+Math.abs(heatResidual(.5,.5,t,beta)).toFixed(3),17,'#f2998b')+text(730,260,'β = '+beta.toFixed(2),17,'#79dfd0')+text(730,290,'физическое α = 0.30',12)+text(525,375,'Меняйте β: начальные и граничные условия',13)+text(525,400,'сохраняются, но уравнение нарушается.',13)+text(525,440,step===5?'В PINN оптимизируются веса сети, не этот ползунок.':'При β = 0.30 невязка равна нулю.',12,'#e9b67d')}
 return s+text(35,530,'Аналитическое учебное семейство функций; обучение нейросети здесь не запускается.',12,'#e9b67d');
}
