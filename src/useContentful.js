import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "u5qejljciak9",
    accessToken: "R3JSpwXa7Odk-y6pap7qecGT4K5zIbnmdsuLkU1ETUM",
    host: "preview.contentful.com"
  });
  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cms",
        select: "fields"
      });
  
      const sanitizedEntries = entries.items.map((item) => {
        // Extrae la URL de la imagen
        // const avatarUrl = item.fields.avatar?.fields?.file?.url
        //   ? `https:${item.fields.avatar.fields.file.url}`
        //   : ""; // Asegura que la URL tenga protocolo}
        //   //----------------------------------------------
        //   const bodyyUrl = item.fields.bodyy?.fields?.file?.url
        //   ? `https:${item.fields.bodyy.fields.file.url}`
        //   : ""; // Asegura que la URL tenga protocolo
        //   //----------------------------------------------
        //   const carrusel1Url = item.fields.carrusel1?.fields?.file?.url
        //   ? `https:${item.fields.carrusel1.fields.file.url}`
        //   : ""; // Asegura que la URL tenga protocolo

        //   //----------------------------------------------
          const fondo1 = item.fields.fondo1?.fields?.file?.url
           ? `https:${item.fields.fondo1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
           
           //----------------------------------------------
           const logoPaUrl = item.fields.logoPa?.fields?.file?.url
           ? `https:${item.fields.logoPa.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
           const FondoNavegador = item.fields.FondoNavegador?.fields?.file?.url
            ? `https:${item.fields.FondoNavegador.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
   
  
        return {
          // nombre: item.fields.nombre || "", // Maneja campo nombre
          // descripcion: item.fields.descripccion || "", // Maneja campo descripcción
          // avatar: avatarUrl, // URL completa de la 
          // bodyy: bodyyUrl,
          // carrusel1: carrusel1Url,
          // carrusel2: carrusel2Url,
          // ingles:inglesUrl,
          // español:españolUrl,
          // china: chinalUrl,
          // aleman: alemanUrl,
          // frances: francesUrl,
          // italiano: italianoUrl,
          fondo1:fondo1,
          logoPa: logoPaUrl,
          FondoNavegador: FondoNavegador,
          // videoRep: videoRepUrl,
        };
      });
  
      console.log("Sanitized entries:", sanitizedEntries); // Depuración final
      return sanitizedEntries;
    } catch (error) {
      console.error(`Error fetching authors: ${error}`);
    }
  };
  
  
  

  return { getAuthors };
};

export default useContentful;