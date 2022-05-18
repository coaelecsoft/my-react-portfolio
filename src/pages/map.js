import Maps from "../components/maps";
import Footer from "../components/footer";

import Menu from "../components/menu";
import * as React from "react";
import Mycomponent from "../components/mycomponent";

function Map() {
    return (
        <>
            <Menu />
            <main>
                <h1>Map page</h1>
                <React.StrictMode >
                    <Mycomponent />
                </React.StrictMode>
            </main>
            <Footer />
        </>
        )
}
export default Map;
