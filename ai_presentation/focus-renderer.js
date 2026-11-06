import * as T from './three.module.js';
// Only layer 0 is softened. Layer 1 (the selected exhibit) is drawn afterwards.
export function createFocusRenderer(renderer){
 const a=new T.WebGLRenderTarget(1,1,{depthBuffer:true}),b=new T.WebGLRenderTarget(1,1,{depthBuffer:false});
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-1,1,1,-1,0,1);
 const vertexShader='varying vec2 uvOut;void main(){uvOut=uv;gl_Position=vec4(position.xy,0.,1.);}';
 const fragment=`uniform sampler2D source;uniform vec2 direction;varying vec2 uvOut;
 void main(){vec4 c=texture2D(source,uvOut)*.227027;
 c+=texture2D(source,uvOut+direction*1.384615)*.316216;
 c+=texture2D(source,uvOut-direction*1.384615)*.316216;
 c+=texture2D(source,uvOut+direction*3.230769)*.070270;
 c+=texture2D(source,uvOut-direction*3.230769)*.070270;gl_FragColor=c;
 FINAL_OUTPUT
 }`;
 const horizontal=new T.ShaderMaterial({vertexShader,fragmentShader:fragment.replace('FINAL_OUTPUT',''),depthTest:false,depthWrite:false,toneMapped:false,uniforms:{source:{value:a.texture},direction:{value:new T.Vector2()}}});
 const vertical=new T.ShaderMaterial({vertexShader,fragmentShader:fragment.replace('FINAL_OUTPUT','#include <tonemapping_fragment>\n#include <colorspace_fragment>'),depthTest:false,depthWrite:false,uniforms:{source:{value:b.texture},direction:{value:new T.Vector2()}}});
 const quad=new T.Mesh(new T.PlaneGeometry(2,2),horizontal);scene.add(quad);
 let width=1,height=1;
 return {
 resize(w,h){width=Math.max(1,Math.round(w));height=Math.max(1,Math.round(h));a.setSize(width,height);b.setSize(width,height)},
 render(world,view,radius){
  if(radius<=0){const old=renderer.autoClear;view.layers.set(0);renderer.render(world,view);renderer.autoClear=false;renderer.clearDepth();view.layers.set(1);renderer.render(world,view);view.layers.enableAll();renderer.autoClear=old;return}
  const oldAuto=renderer.autoClear;
  view.layers.set(0);renderer.setRenderTarget(a);renderer.clear();renderer.render(world,view);
  // Radius is in CSS pixels, independent of device pixel ratio.
  horizontal.uniforms.direction.value.set(radius/innerWidth,0);vertical.uniforms.direction.value.set(0,radius/innerHeight);
  quad.material=horizontal;renderer.setRenderTarget(b);renderer.render(scene,camera);
  quad.material=vertical;renderer.setRenderTarget(null);renderer.render(scene,camera);
  renderer.autoClear=false;renderer.clearDepth();view.layers.set(1);renderer.render(world,view);
  view.layers.enableAll();renderer.autoClear=oldAuto;
 }
 };
}
