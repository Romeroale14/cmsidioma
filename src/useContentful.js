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
           const ItaliaCarr1 = item.fields.italiaCarr1?.fields?.file?.url
            ? `https:${item.fields.italiaCarr1.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
           const chinaCarr1 = item.fields.chinaCarr1?.fields?.file?.url
           ? `https:${item.fields.chinaCarr1.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
          const espanolCarr1 = item.fields.espanolCarr1?.fields?.file?.url
          ? `https:${item.fields.espanolCarr1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
         //----------------------------------------------
         const francesCarr1 = item.fields.francesCarr1?.fields?.file?.url
          ? `https:${item.fields.francesCarr1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
         const alemanCarr1 = item.fields.alemanCarr1?.fields?.file?.url
         ? `https:${item.fields.alemanCarr1.fields.file.url}`
         : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
          const inglesCarr1 = item.fields.inglesCarr1?.fields?.file?.url
          ? `https:${item.fields.inglesCarr1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
          //----------------------------------------------
          const cert1 = item.fields.cert1?.fields?.file?.url
          ? `https:${item.fields.cert1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
        
   
  
        return {
         
          ItaliaCarr1: ItaliaCarr1,
          chinaCarr1: chinaCarr1,
          espanolCarr1: espanolCarr1,
          francesCarr1: francesCarr1,
          alemanCarr1: alemanCarr1,
          inglesCarr1: inglesCarr1,
          cert1:cert1,
          
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