import Footer from "../components/footer";
import MemGame from "../components/memgame";
import Menu from "../components/menu";

function Game() {
    return (
        <>
            <Menu />
            <main style={{ paddingTop: '85px' }}>
                <h1 style={{ textAlign: 'center' }}>memGame with React.js</h1>
                <MemGame />
            </main>
            <Footer />
        </>

        );
}
export default Game;