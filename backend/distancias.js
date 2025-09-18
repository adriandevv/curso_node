



    const R = 6371000; // Radio de la Tierra en metros
          const dLat = ((18.02488265302036 - 18.0249089) * Math.PI) / 180;
          const dLon = (( -102.21938967726604 -  -102.2196887) * Math.PI) / 180;

          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((18.02488265302036* Math.PI) / 180) *
              Math.cos((18.0249089 * Math.PI) / 180) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);

          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          let distancia = Math.round(R * c);
        console.log("Distancia en metros: " + distancia);