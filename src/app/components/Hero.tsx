// import Image from "next/image";

import Image from "next/image";

// import fotoPerfil from "public/perfil.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 p-7 md:grid-cols-5 gap-4  h-screen items-center">
      <div className="col-span-3">
        <div className="text-center">
          <h1 className="text-6xl font-bold animate-fade-down animate-once animate-ease-linear">
            IVÁN HENRÍQUEZ
          </h1>
          <h2 className="text-4xl mt-3 font-bold animate-fade-up animate-once animate-ease-linear">
            Web Developer
          </h2>
        </div>
        <div className="flex justify-center space-x-6 m-10">
          <a
            href="http://github.com/IvanHenriquez96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/github_logo.png"}
              width={60}
              height={60}
              alt="logo github"
              className="animate-fade-up animate-once animate-delay-500"
            ></Image>
          </a>
          <a
            href="https://www.linkedin.com/in/ihenriquez96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/linkedin.png"}
              width={60}
              height={60}
              alt="logo linkedin"
              className="animate-fade-up animate-once animate-delay-700"
            ></Image>
          </a>
          <a
            href="https://www.instagram.com/nachostrife/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/ig.png"}
              width={60}
              height={60}
              alt="logo instagram"
              className="animate-fade-up animate-once animate-delay-1000"
            ></Image>
          </a>
        </div>

        <p className="text-center md:text-2xl text-gray-200 animate-fade-up">
          Desarrollador Full Stack - NestJS - Node - React - PostgreSQL -
          MongoDB
        </p>
      </div>
      <div className="mx-auto col-span-2">
        <div className="w-3/4 mx-auto">
          <Image
            src={"/perfil.png"}
            width={1000}
            height={1000}
            alt="foto de perfil"
            className=" animate-fade animate-once animate-delay-500"
          ></Image>
        </div>
        {/* <img
          src={"/perfil.png"}
          alt="foto de perfil"
          className="w-3/4 mx-auto animate-fade animate-once animate-delay-500 "
        /> */}
      </div>
    </div>
  );
};
