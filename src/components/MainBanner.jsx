import { Parallax } from "./NavStyles";

const MainBanner = () => {
  return (
    <>
      <Parallax className="parallax-container">
        <img src="src/assets/fondo-entero3.png" alt="Fondo entero" className="image1" />

        <div className="div-title"><h2 >Masterpiece Music <br/> in a Click</h2></div>
        <a className="button-log-in">Get Started. It's FREE</a>
        
        <img src="src/assets/edifiicios.png" alt="Capa 2" className="image2" />

        <img src="src/assets/2.png" alt="Capa 2" className="image3" />

        <img src="src/assets/3.png" alt="Capa 2" className="image4" />

        <img src="src/assets/4.png" alt="Capa 2" className="image5" />
      </Parallax>
      <div className="empty"></div>
    </>
  );
};

export default MainBanner;
