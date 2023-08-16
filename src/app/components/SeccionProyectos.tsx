import Image from "next/image";
import React from "react";

const proyectos = [
  {
    nombre: "TO DO APP",
    descripcion: "El legendario TO DO APP para probar las acciones CRUD!",
    tecnologias: ["React"],
    url_img: "/proyecto1_logo.png",
    url_sitio: "https://naughty-volhard-5322c3.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/AplicacionCrudTareasReactJS",
  },
  {
    nombre: "APP PARADEROS - API REDBUS",
    descripcion: "¿Quieres saber en cuantos minutos llega la micro?",
    tecnologias: ["React"],
    url_img: "/proyecto2_logo.png",
    url_sitio: "https://6268954ed7009d26ee037fdf--gorgeous-blancmange-9e86f6.netlify.app",
    url_repo: "https://github.com/IvanHenriquez96/2022_transporte_app",
  },

  {
    nombre: "JUEGO - PIEDRA PAPEL O TIJERAS!",
    descripcion: "Desafía a la CPU y obtén los logros secretos!",
    tecnologias: ["Vanilla JS"],
    url_img: "/proyecto3_logo.png",
    url_sitio: "https://ihenriquez-piedrapapeltijeras.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/piedraPapelTijerasJSVanilla",
  },

  {
    nombre: "APP - PORTAL DE ADOPCIÓN!",
    descripcion:
      "En esta web podrás encontrar a diversas mascotas para adoptar de distintas fundaciones!",
    tecnologias: ["React", "Firebase"],
    url_img: "/proyecto4_logo.png",
    url_sitio: "https://ihenriquez-adoptappcl.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/AdoptappCL",
  },
  {
    nombre: "APP - PUNTO DE VENTA CINE",
    descripcion:
      "E-commerce, agrega tus tickets al carrito a través de un selector de asientos dinámico!",
    tecnologias: ["React", "Redux"],
    url_img: "/proyecto5_logo.png",
    url_sitio: "https://ihenriquez-app-cine.netlify.app",
    url_repo: "https://github.com/IvanHenriquez96/punto-venta-cine",
  },
  {
    nombre: "APP - RETRO POKEDEX | REACT",
    descripcion: "Pokedex aplicando un estilo retro, para los mas nostálgicos",
    tecnologias: ["React"],
    url_img: "/proyecto6_logo.jpg",
    url_sitio: "https://ihenriquez-pokedex.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/pokedex",
  },
  {
    nombre: "APP - Caculadora de macros",
    descripcion:
      "Calcula tu Tasa Metabolica Basal y según tu cantidad de actividad física y objetivos descubre cuantas calorías al día deberías consumir diviendola en Carbohidratos, Proteinas y Grasas.",
    tecnologias: ["Nextjs", "Hybrid SSG/CSR"],
    url_img: "/proyecto7_logo.png",
    url_sitio: "https://ihenriquez-calculadora-macros.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/calculadora_macros",
  },

  {
    nombre: "WEB SCRAPING - Seguimiento productos Weplay.cl",
    descripcion:
      "Agrega tu productos de la tienda Weplay.cl  y hazle seguimiento de su precio a lo largo del tiempo, gracias a la API que desarrollé la cual hace 'Web Scraping' los datos se actualizan a diario en la base de datos gracias a un crontab.",
    tecnologias: ["Nextjs", "Hybrid SSG/CSR", "Puppetter", "React ChartsJS", "MongoDB"],
    url_img: "/proyecto8_logo.png",
    url_sitio: "https://web-scraping-sigma.vercel.app/",
    url_repo: "https://github.com/IvanHenriquez96/web_scraping",
  },
  {
    nombre: "API DIGIMON - INFINITE SCROLL!",
    descripcion:
      "Aplicación hecha para poner a prueba la tecnica del scroll infinito, el cual trae nuevos datos siempre que el usuario llega al final de la página",
    tecnologias: ["Nextjs", "Hybrid SSG/CSR", "API pública", "Tailwind"],
    url_img: "/proyecto9_logo.png",
    url_sitio: "https://next-infinite-scroll-zeta.vercel.app/",
    url_repo: "https://github.com/IvanHenriquez96/next-infinite-scroll",
  },
  {
    nombre: "APP - GENERADOR DE CURIOSIDADES!",
    descripcion:
      "Prepárate para explorar preguntas que ni siquiera sabías que tenías y sumergirte en datos sorprendentes que ampliarán tus horizontes.",
    tecnologias: ["Nextjs", "Hybrid SSG/CSR", "API pública", "Tailwind"],
    url_img: "/proyecto10_logo.png",
    url_sitio: "https://curiosidades-al-azar.vercel.app/",
    url_repo: "https://github.com/IvanHenriquez96/curiosidades_al_azar",
  },
];

export const SeccionProyectos = () => {
  return (
    <>
      <section className="animate-fade">
        <h2 className="text-5xl font-bold m-5 text-center ">Proyectos realizados</h2>
        {/* <div className="h-1 w-2/3 md:w-1/4 mx-auto bg-indigo-500 rounded"></div> */}

        <p className="p-5 md:px-20 md:mx-20 my-5 text-justify font-light">
          Estoy constantemente estudiando nuevas tecnologías y desarrollando nuevos
          proyectos para poner los conocimientos adquiridos en practica, te invito a que
          los visites e interactues con ellos! 🚀
        </p>

        <div className="flex flex-wrap -m-4 md:mx-40 mx-2">
          {proyectos.map((proyecto, index) => {
            return (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg ">
                  <div className="md:w-5/12 mx-auto">
                    <Image
                      src={proyecto.url_img}
                      width={1000}
                      height={1000}
                      alt="imagen proyecto"
                      className="w-1/2 mx-auto md:w-full object-cover object-center border-4 p-2 border-indigo-900 rounded-full"
                    ></Image>
                  </div>
                  {/* <h3 className="tracking-widest text-indigo-700  font-medium title-font my-3">
                    {proyecto.tecnologias.toUpperCase()}
                  </h3> */}

                  <h2 className="text-lg text-indigo-900 font-medium title-font mb-4 my-5 text-center">
                    {proyecto.nombre}
                  </h2>

                  <p className="leading-relaxed text-base text-indigo-700">
                    {proyecto.descripcion}
                  </p>

                  <div className="flex flex-wrap justify-center text-gray-50 my-5">
                    {proyecto.tecnologias.map((tecnologia, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-indigo-500 m-1 rounded-lg px-2 justify-center items-center"
                        >
                          <small>{tecnologia}</small>
                        </div>
                      );
                    })}
                  </div>

                  <div className="group border-2 p-1 rounded-2xl border-indigo-700 text-center my-3 hover:bg-indigo-700 transition duration-300 ">
                    <a
                      className="text-indigo-700 inline-flex items-center group-hover:text-gray-50 transition duration-300 "
                      href={proyecto.url_sitio}
                      target="_blank"
                    >
                      Visitar Sitio
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="group border-2 p-1 rounded-2xl border-indigo-700 text-center my-3 hover:bg-indigo-700 transition duration-300 ">
                    <a
                      className="text-indigo-700 inline-flex items-center group-hover:text-gray-50"
                      href={proyecto.url_repo}
                      target="_blank"
                    >
                      Visitar Repositorio
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <p className="text-4xl my-14 font-bold text-center ">¡Seguimos Trabajando! 🚀</p>
      </section>
    </>
  );
};
