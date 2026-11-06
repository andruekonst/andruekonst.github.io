export const DEFAULT_SETTINGS=Object.freeze({dimming:76,blur:0,captionPlacement:'overlay'});
export function normalizeSettings(value={}){
 const clamp=(v,max,fallback)=>typeof v==='number'&&Number.isFinite(v)?Math.min(max,Math.max(0,v)):fallback;
 return {dimming:clamp(value?.dimming,100,76),blur:clamp(value?.blur,12,0),captionPlacement:value?.captionPlacement==='inline'?'inline':'overlay'};
}
export function loadSettings(){try{return normalizeSettings(JSON.parse(localStorage.getItem('ml-history-view')||'{}'))}catch{return {...DEFAULT_SETTINGS}}}
export function saveSettings(value){try{localStorage.setItem('ml-history-view',JSON.stringify(normalizeSettings(value)))}catch{/* Private browsing or full storage must not interrupt the presentation. */}}
