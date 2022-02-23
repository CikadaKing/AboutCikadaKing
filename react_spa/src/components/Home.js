import header from './pics/header.png';

export function Home() {
    return (
        <div>
            <img src={header} alt="CikadaKing's Banner" />
            <h2>Who is CikadaKing?</h2>
            <p>My name is CikadaKing! I'm a VTuber and I'm looking to grow a gaming community.

The games I'll be streaming most often are Smash Ultimate and Pokémon Unite. I main Fox and Mr. Game & Watch in Smash, and in Unite you can expect to see some exciting jungle play as Absol or Talonflame!

I stream every Sunday evening and some extra days every now and then. Pop in the discord if you never want to miss a stream!</p>

            <p>I've been streaming for less than a year and my community is very small. If you want a cozy place to meet new people who are
                into playing games then you've come to the right place! I love to hang out with those who are in chat and interact with viewers
                in any way that I can!
            </p>
        </div>
    );
}