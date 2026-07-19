import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './astro-medallion/App';
import { Home } from './Home';

let container = document.getElementById("app")!;
let root = createRoot(container)
root.render(
  <StrictMode>
    <meta property="og:image" content="./astro-medallion/PXL_20251121_165222077.PORTRAIT.jpg"/>
    <Home />
  </StrictMode>
);
