import Image from "next/image";

export const SeccionPresentacion = () => {
  return (
    <div className="animate-fade">
      <div className="grid grid-cols-1 md:grid-cols-3  text-center md:px-20">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold m-5">¡Hola a todos!</h2>
          {/* <div className="h-1 w-2/3 md:w-2/4 mx-auto bg-indigo-500 rounded"></div> */}

          <p className="p-5 md:px-20 my-5 text-justify font-light">
            Mi nombre es Iván Henríquez, tengo 26 años, nacionalidad chilena. Soy
            Desarrollador Web FullStack, Trabajo profesionalmente desde Noviembre del año
            2018 y actualmente estoy enfocado en dominar ambientes de Javascript (Stack
            MERN para ser mas preciso) no olviden pasarse por la sección de proyectos y
            echar un vistazo, un saludos!
          </p>
        </div>
        <div className="m-auto p-5 ">
          <Image src={"/saludo.png"} width={200} height={200} alt="icono saludo" />
        </div>
      </div>
    </div>
  );
};
