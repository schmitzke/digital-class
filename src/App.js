import React from 'react';

const longText = 'As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit.Soon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight.Lara had been back and forth along the river path many times in her short life. Her people had not created the path—it had always been there, like the river—but their deerskin-shod feet and the wooden wheels of their handcarts kept the path well worn. Lara’s people were salt traders, and their livelihood took them on a continual journey.At the mouth of the river, the little group of half a dozen intermingled families gathered salt from the great salt beds beside the sea. They groomed and sifted the salt and loaded it into handcarts. When the carts were full, most of the group would stay behind, taking shelter amid rocks and simple lean-tos, while a band of fifteen or so of the heartier members set out on the path that ran alongside the river.With their precious cargo of salt, the travelers crossed the coastal lowlands and traveled toward the mountains. But Lara’s people never reached the mountaintops; they traveled only as far as the foothills. Many people lived in the forests and grassy meadows of the foothills, gathered in small villages. In return for salt, these people would give Lara’s people dried meat, animal skins, cloth spun from wool, clay pots, needles and scraping tools carved from bone, and little toys made of wood.'
const shortText = 'summary text goes here';

const Footer = ({ color }) => {

    return(
        <div style={{color: color}}>{color}</div>
    );
}

const handleButtonClick = (e) => {
    console.log('test')
}

export const App = () => {
    return(
        <div className="App">
            <h3>welcome</h3>
            <p>hello user!</p>
            <p>{longText}</p>
            <hr />
            <p>{shortText}</p>
            <button onClick={handleButtonClick}>click me</button>
            <Footer color={'green'} />
        </div>
    );
}

export default App;

// STEP 1:
// React und JSX basics zeigen und erklären
// lokal grundgerüst einer webseite aufbauen
// const arrow functions verwenden
// komplett auslagern

// STEP 2:
// CSS FLEXMAGIC ANWENDEN

// STEP 3
// ADVANCED REACT MIT STATE UND CONTEXT

// Zeitplan
// 11:00-11:15 Willkommen und Einführung
// 11:15-11:45 Setup und App zum Laufen bekommen
// 11:45-12:30 React Basics
// 13:30-16:00 CSS und Advanced
