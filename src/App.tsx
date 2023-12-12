import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";

function App() {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App">
            {init && (
                <Particles
                    options={particlesOptions as ISourceOptions}
                />
            )}
            
        </div>
    );
}

export default App;
