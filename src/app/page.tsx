import { Hero } from "./components/Hero";
import { SeccionMotivaciones } from "./components/SeccionMotivaciones";
import { SeccionPresentacion } from "./components/SeccionPresentacion";
import { SeccionTecnologias } from "./components/SeccionTecnologias";

export default function Home() {
  return (
    <main>
      <Hero />
      <SeccionTecnologias />
      <br />
      <br />
      <SeccionPresentacion />
      <br />
      <br />
      <br />
      <SeccionMotivaciones />
    </main>
  );
}
