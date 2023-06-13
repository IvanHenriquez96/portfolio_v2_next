import Image from "next/image";
import React from "react";

const proyectos = [
  {
    nombre: "TO DO APP",
    descripcion: "El legendario TO DO APP para probar las acciones CRUD!",
    tecnologias: "",
    // url_img: "https://cdn-icons-png.flaticon.com/512/4472/4472515.png",
    url_img: "/proyecto1_logo.png",
    url_sitio: "https://naughty-volhard-5322c3.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/AplicacionCrudTareasReactJS",
  },
  {
    nombre: "APP PARADEROS - API REDBUS",
    descripcion: "¿Quieres saber en cuantos minutos llega la micro?",
    // url_img: "https://cdn-icons-png.flaticon.com/512/1023/1023462.png",
    url_img: "/proyecto2_logo.png",
    url_sitio: "https://6268954ed7009d26ee037fdf--gorgeous-blancmange-9e86f6.netlify.app",
    url_repo: "https://github.com/IvanHenriquez96/2022_transporte_app",
  },

  {
    nombre: "JUEGO - PIEDRA PAPEL O TIJERAS!",
    descripcion: "Desafía a la CPU y obtén los logros secretos!",
    // url_img: "https://ihenriquez.dev/mage.png",
    url_img: "/proyecto3_logo.png",
    url_sitio: "https://ihenriquez-piedrapapeltijeras.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/piedraPapelTijerasJSVanilla",
  },

  {
    nombre: "APP - PORTAL DE ADOPCIÓN!",
    descripcion:
      "En esta web podrás encontrar a diversas mascotas para adoptar de distintas fundaciones!",
    // url_img: "https://cdn-icons-png.flaticon.com/512/5267/5267453.png",
    url_img: "/proyecto4_logo.png",
    url_sitio: "https://ihenriquez-adoptappcl.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/AdoptappCL",
  },
  {
    nombre: "APP - PUNTO DE VENTA CINE | REACT + REDUX!",
    descripcion:
      "E-commerce, agrega tus tickets al carrito a través de un selector de asientos dinámico!",
    // url_img: "https://cdn-icons-png.flaticon.com/512/1038/1038100.png",
    url_img: "/proyecto5_logo.png",
    url_sitio: "https://ihenriquez-app-cine.netlify.app",
    url_repo: "https://github.com/IvanHenriquez96/punto-venta-cine",
  },
  {
    nombre: "APP - RETRO POKEDEX | REACT",
    descripcion: "Pokedex aplicando un estilo retro, para los mas nostálgicos",
    // url_img: "https://i.pinimg.com/236x/64/76/e2/6476e2675a5f24d72531c8f748cc8eaa.jpg",
    url_img: "/proyecto6_logo.jpg",
    url_sitio: "https://ihenriquez-pokedex.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/pokedex",
  },
  {
    nombre: "APP - Caculadora de macros | NEXTJS - HYBRID - SSG/CSR",
    descripcion:
      "Calcula tu Tasa Metabolica Basal y según tu cantidad de actividad física y objetivos descubre cuantas calorías al día deberías consumir diviendola en Carbohidratos, Proteinas y Grasas.",
    // url_img: "https://cdn-icons-png.flaticon.com/512/1048/1048913.png",
    url_img: "/proyecto7_logo.png",
    url_sitio: "https://ihenriquez-calculadora-macros.netlify.app/",
    url_repo: "https://github.com/IvanHenriquez96/calculadora_macros",
  },
];

export const SeccionProyectos = () => {
  return (
    <>
      <section>
        <h2 className="text-5xl font-bold m-5 text-center ">Proyectos realizados</h2>
        <div className="h-1 w-2/4 mx-auto bg-indigo-500 rounded"></div>

        <p className="p-5 md:px-20 md:mx-20 my-5 text-justify font-light">
          Estoy constantemente estudiando nuevas tecnologías y desarrollando nuevos
          proyectos para poner los conocimientos adquiridos en practica, te invito a que
          los visites e interactues con ellos! 🚀
        </p>

        <div className="flex flex-wrap -m-4 md:mx-40 mx-2">
          {proyectos.map((proyecto, index) => {
            return (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {/* <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  /> */}

                  {/* <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={proyecto.url_img}
                    alt="content"
                  /> */}

                  <Image
                    src={proyecto.url_img}
                    width={1000}
                    height={1000}
                    alt="imagen proyecto"
                    className="w-full object-cover object-center"
                  ></Image>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {proyecto.nombre}
                  </h2>
                  <p className="leading-relaxed text-base text-indigo-700">
                    {proyecto.descripcion}
                  </p>
                  <br />
                  <div className="border-2 p-1 rounded-2xl border-indigo-700 text-center my-3">
                    <a
                      className="text-indigo-700 inline-flex items-center"
                      href={proyecto.url_sitio}
                      target="_blank"
                    >
                      Visitar Sitio
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="border-2 p-1 rounded-2xl border-indigo-700 text-center my-2">
                    <a
                      className="text-indigo-700 inline-flex items-center"
                      href={proyecto.url_repo}
                      target="_blank"
                    >
                      Visitar Repositorio
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
      </section>
    </>
  );
};
