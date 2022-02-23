import CikadaKing from './pics/CikadaKing.png';
import Ninjask from './pics/Ninjask.png';
import Shedinja from './pics/Shedinja.png';

export function Stuff() {
    return (
        <div>
            <h2>CikadaKing's Design:</h2>
            <img align="right" src={CikadaKing} alt="CikadaKing's Banner" />
            
            <p>In this section, I'll explain why CikadaKing looks the way that he does.</p>
            <ol>
                <li>The main inspiration's behind CikadaKing's design are the pokémon Ninjask, with a few other inspirations as well.</li>
                <li>CikadaKing wears a ninjalike outfit with a crown over his head which floats in reference to the halo above Shedinja.</li>
                <li>The wings on his back were heavily inspired by Perfect Cell's wings. They are long and beetlelike in nature,
                    but they flow smoothly.
                </li>
                <li>The scarf on his neck seems to phase in and out of his body occassionally. This is due to the idea that it is meant
                    to resemble a shadow, a common area for stealthy characters to hide.
                </li>
                <li>CikadaKing stands out from other VTubers because he not only has dynamic expressions, but he can also wave at the 
                    viewers!</li>
            </ol>
            <img src={Ninjask} alt="Ninjask" />
            <img src={Shedinja} alt="Shedinja" />
            
        </div>
    );
}