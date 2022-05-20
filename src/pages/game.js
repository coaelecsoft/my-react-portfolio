import Footer from "../components/footer";
import MemGame from "../components/memgame";
import Menu from "../components/menu";

function Game() {
    return (
        <>
            <Menu />
            <main style={{ paddingTop: '85px', paddingBottom:'15px' }}>
                <div className="game-frame" >
                    <h1 style={{ textAlign: 'center', color: '#0063B1', textShadow: 'white 1px 1px 1px' }}>memGame with React.js</h1>
                    <MemGame />
                    </div>
            </main>
            <Footer />
        </>

        );
}
export default Game;