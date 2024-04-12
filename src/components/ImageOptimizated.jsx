import family from "../../public/images/family-optimized.jpg";
const ImageOptimized = (classImage) => {
  /* tercera task: Para esta parte de la prueba decidi separar en un componente la imagen para mejor rendimiendo y orden del proyecto, use la herramienta Tinypng.com comprimiento el archivo desde su tamaño original 3,10 MB a un tamaño de 330 KB */
  return <img src={family} loading="lazy" alt="#" className={classImage} />;
};

export default ImageOptimized;
