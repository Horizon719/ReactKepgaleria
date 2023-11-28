import "./App.css";
import { ADATLISTA } from "./adatok.js";
import Kep from "./komponens/Kep";

import React, {useState} from "react";

function App() {
	
    const [kepIndex, setNagykep] = useState(0);

	function nagykepCsere(id) {
		setNagykep(id);
	}
    return (
        <div className="App">
            <header className="App-header">
              	<h1>Képgaléria</h1>
            </header>
            <article>
				<div className="fokep">
					<h3>Kép címe</h3>
					<Kep adat={ADATLISTA[kepIndex]} />
					<p>leiras, leiras</p>
				</div>
				<div className="galeria">
					{ADATLISTA.map((elem, index) => {
						return <Kep adat={elem} key={index} nagykepCsere={nagykepCsere} />;
					})}
				</div>
            </article>
            <footer>
                <p>Milichovszky Sándor</p>
            </footer>
        </div>
    );
}

export default App;
