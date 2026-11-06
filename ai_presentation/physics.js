export const THERMAL_ALPHA=.3;
export const sensors=[[.25,.3],[.5,.5],[.75,.65],[.35,.8]];
// Dimensionless square plate; cold edges and a smooth initial hot spot.
export function heatPlate(x,y,t,beta=THERMAL_ALPHA){return Math.sin(Math.PI*x)*Math.sin(Math.PI*y)*Math.exp(-2*beta*Math.PI**2*t)}
export function heatResidual(x,y,t,beta=THERMAL_ALPHA){return 2*Math.PI**2*(THERMAL_ALPHA-beta)*heatPlate(x,y,t,beta)}
export function heatColor(u){const q=Math.min(1,Math.max(0,u));return [Math.round(50+195*q),Math.round(155+35*q),Math.round(210-115*q)]}
