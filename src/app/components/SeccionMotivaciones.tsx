import Image from "next/image";

export const SeccionMotivaciones = () => {
  return (
    <div className="animate-fade">
      <div className="grid grid-cols-1 md:grid-cols-3  text-center md:px-20">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold m-5">Motivaciónes</h2>
          {/* <div className="h-1 w-2/3 md:w-2/4 mx-auto bg-indigo-500 rounded"></div> */}

          <p className="p-5 md:px-20 my-5 text-justify font-light">
            Me encanta la tecnología💙 pero me siento muy lejos de ser un robot! 🤖. Mi
            principal motivación a la hora de desarrollar es la comodidad y felicidad del
            usuario final al que va destinado el software, nunca se me olvida que detrás
            de todo lo que hago hay personas que lo utiliza en su día a día y me importa
            que ellos se sientan a gusto con las herramientas, por eso pongo especial
            cariño y atención a mi trabajo y trato de ser lo mas comprensible y amigable.
          </p>

          <p className="p-5 md:px-20 my-5 text-justify font-light">
            Me pondría muy feliz poder ser parte de equipos de desarrollo enfocados a
            mejorar la calidad de vida de áreas que se podrían decir que están un poco
            olvidadas, siempre se puede mejorar💙.
          </p>
        </div>
        <div className="m-auto p-5 ">
          <Image src={"/pantalla.png"} width={300} height={300} alt="icono pantalla" />
        </div>
      </div>
    </div>
  );
};
