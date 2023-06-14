import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SeccionInvLikedin } from "./components/SeccionInvLikedin";
import { SeccionMotivaciones } from "./components/SeccionMotivaciones";
import { SeccionPresentacion } from "./components/SeccionPresentacion";
import { SeccionProyectos } from "./components/SeccionProyectos";
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
      <br />
      <br />
      <br />
      <SeccionProyectos />
      <SeccionInvLikedin />
      <br />
      <br />
      <Footer />
    </main>
  );
}
