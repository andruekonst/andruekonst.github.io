// Horizontal proximity means conceptual affinity, height means a new return.
// These are editorial coordinates, not a quantitative embedding or a date scale.
export const spatialLayout={
 markov:[-36,0,-32],neuron:[0,0,0],theseus:[-36,0,8],dartmouth:[-14,0,30],
 perceptron:[0,16,0],learning:[-14,16,30],winter:[18,16,30],energy:[-36,16,-32],
 backprop:[0,32,0],cnn:[34,16,0],generalize:[18,32,30],alexnet:[34,32,0],
 embedding:[34,32,-34],vae:[-10,32,-34],gan:[-10,32,-54],attention:[34,48,-34],
 resnet:[0,48,0],rl:[-36,48,8],transformer:[34,64,-34],bert:[54,64,-34],
 diffusion:[-36,48,-32],latent:[-10,48,-34],multimodal:[54,80,-34],pinn:[-36,64,-32],llm:[34,96,-34],agents:[-36,80,8]
};
export const affinities={
 llm:"Над Transformer: возвращение к языковой архитектуре на уровне предобучения и использования.",
 agents:"Над Theseus и RL: снова цикл действий и наблюдений, теперь с LLM в роли компонента управления.",
 perceptron:'Над ранним нейроном: вычислительный элемент становится обучаемым.',
 backprop:'Снова над нейроном и перцептроном: теперь обучается вся многослойная сеть.',
 alexnet:'Над CNN: прежний принцип свёрток получает новые данные и вычислительные ресурсы.',
 rl:'Над Theseus: возвращение к обучению через действия и опыт.',
 transformer:'Над attention: механизм внимания становится основой архитектуры.',
 bert:'Рядом с Transformer: двунаправленное обучение контекстных представлений.',
 diffusion:'В области вероятностных и энергетических моделей: генерация через постепенное восстановление структуры.',
 latent:'Над VAE: генерация переносится в сжатое пространство представлений.',
 pinn:'Возврат в область математических моделей: уравнения входят в обучающий сигнал. Это тематическая ветвь, а не самая поздняя дата.'
};
export const worldEvents=[
 {at:'markov',kind:'plane',date:'1903',title:'Первые полёты братьев Райт',url:'https://www.si.edu/object/3d/d8c62e5e-4ebc-11ea-b77f-2e728ce88125'},
 {at:'neuron',kind:'book',date:'1945',title:'Создание ЮНЕСКО',url:'https://www.unesco.org/en/articles/75-years-ago-unescos-constitution-adopted'},
 {at:'perceptron',kind:'satellite',date:'1957',title:'Первый искусственный спутник',url:'https://www.nasa.gov/history/65-years-ago-sputnik-ushers-in-the-space-age/'},
 {at:'learning',kind:'moon',date:'1969',title:'Первые шаги человека на Луне',url:'https://www.nasa.gov/mission/apollo-11/'},
 {at:'cnn',kind:'web',date:'1989',title:'Рождение Всемирной паутины',url:'https://home.cern/science/computing/the-birth-of-the-web'},
 {at:'generalize',kind:'telescope',date:'1990',title:'Hubble на орбите',url:'https://science.nasa.gov/mission/hubble/overview/hubble-timeline/'},
 {at:'alexnet',kind:'rover',date:'2012',title:'Curiosity исследует Марс',url:'https://science.nasa.gov/resource/curiosity-has-landed/'},
 {at:'latent',kind:'webb',date:'2022',title:'Первые научные изображения Webb',url:'https://science.nasa.gov/mission/webb/webb-mission-timeline/'}
];
export const mapRegions=[
 {name:'Вероятности и уравнения',at:'energy'},
 {name:'Обучение нейросетей',at:'backprop'},
 {name:'Действия и опыт',at:'theseus'},
 {name:'Зрение и признаки',at:'cnn'},
 {name:'Генерация и скрытые коды',at:'vae'},
 {name:'Язык и контекст',at:'transformer'}
];
export function routeBend(i){return i===19?[-3,5,-24]:[-3,5,0]}
