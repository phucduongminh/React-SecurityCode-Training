import App from "../App";
import React from "react";
import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";

const Wrapper = () => {
    const cache = createCache({
        nonce: "__GENERATED_NONCE__",
        key: "boatinsurances"
    })
    return (
        <CacheProvider value={cache}>
            <App />
        </CacheProvider>
    );
}

export default Wrapper;