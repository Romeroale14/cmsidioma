import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "n7mo14ez6e09",
    accessToken: "nOz-XxoPuKoTIxnSz6kAphXHh2FN-L2vXgdEMlOCzpQ",
    host: "preview.contentful.com"
  });
  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "nueva",
        select: "fields"
      });
  
      const sanitizedEntries = entries.items.map((item) => {
        // Extrae la URL de la imagen
        const avatarUrl = item.fields.avatar?.fields?.file?.url
          ? `https:${item.fields.avatar.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo}
          //----------------------------------------------
          const bodyyUrl = item.fields.bodyy?.fields?.file?.url
          ? `https:${item.fields.bodyy.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
          const carrusel1Url = item.fields.carrusel1?.fields?.file?.url
          ? `https:${item.fields.carrusel1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo

          //----------------------------------------------
          const carrusel2Url = item.fields.carrusel2?.fields?.file?.url
          ? `https:${item.fields.carrusel2.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const inglesUrl = item.fields.ingles?.fields?.file?.url
           ? `https:${item.fields.ingles.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const españolUrl = item.fields.español?.fields?.file?.url
           ? `https:${item.fields.español.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const chinalUrl = item.fields.china?.fields?.file?.url
           ? `https:${item.fields.china.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const alemanUrl = item.fields.aleman?.fields?.file?.url
           ? `https:${item.fields.aleman.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const francesUrl = item.fields.frances?.fields?.file?.url
           ? `https:${item.fields.frances.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const italianoUrl = item.fields.italiano?.fields?.file?.url
           ? `https:${item.fields.italiano.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const logoPaUrl = item.fields.logoPa?.fields?.file?.url
           ? `https:${item.fields.logoPa.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           //----------------------------------------------
           const videoRepUrl = item.fields.videoRep?.fields?.file?.url
           ? `https:${item.fields.videoRep.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
   
  
        return {
          nombre: item.fields.nombre || "", // Maneja campo nombre
          descripcion: item.fields.descripccion || "", // Maneja campo descripcción
          avatar: avatarUrl, // URL completa de la 
          bodyy: bodyyUrl,
          carrusel1: carrusel1Url,
          carrusel2: carrusel2Url,
          ingles:inglesUrl,
          español:españolUrl,
          china: chinalUrl,
          aleman: alemanUrl,
          frances: francesUrl,
          italiano: italianoUrl,
          logoPa: logoPaUrl,
          videoRep: videoRepUrl,
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