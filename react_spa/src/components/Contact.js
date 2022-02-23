import DontGetHit from './vids/DontGetHit.mp4';

export function Contact() {
    return (
        <div>
            <h2>Where can I find CikadaKing?</h2>
            <p><a href="http://www.twitch.tv/CikadaKing">Twitch</a></p>
            <p><a href="https://vm.tiktok.com/TTPdS2AKoA/">TikTok</a></p>
            <p><a href="https://twitter.com/CikadaKing">Twitter</a></p>
            <p><a href="https://www.youtube.com/channel/UCxjct9f9nShLxbXbdFakkAg">YouTube</a></p>
            <video src={DontGetHit} autoPlay />
        </div>
    );
}