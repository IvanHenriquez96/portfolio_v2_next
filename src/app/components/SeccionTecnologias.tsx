import Image from "next/image";

export const SeccionTecnologias = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="brand-wheel">
          <div className="brand-slide">
            <div className="logo-div">
              <Image src={"/php_logo.png"} width={50} height={50} alt="logo php"></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/laravel_logo.png"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
            <div className="logo-div">
              <Image src={"/node_logo.png"} width={50} height={50} alt="logo php"></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/react_logo.svg"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/mysql_logo.png"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
          </div>
          <div className="brand-slide delay">
            <div className="logo-div">
              <Image src={"/php_logo.png"} width={50} height={50} alt="logo php"></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/laravel_logo.png"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
            <div className="logo-div">
              <Image src={"/node_logo.png"} width={50} height={50} alt="logo php"></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/react_logo.svg"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
            <div className="logo-div">
              <Image
                src={"/mysql_logo.png"}
                width={50}
                height={50}
                alt="logo php"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
