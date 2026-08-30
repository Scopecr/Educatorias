// ─── FACILIDADES: DATOS DE GALERÍA ───
// Cada "álbum" es una carpeta de fotos dentro de Facilidades/fotos/.
//
// Para agregar un álbum nuevo:
//   1. Crea una carpeta en Facilidades/fotos/ (ej. Facilidades/fotos/salon-principal/)
//   2. Copia ahí las fotos de ese espacio.
//   3. Agrega un objeto a la lista ALBUMS de abajo con el mismo "id" que el
//      nombre de la carpeta, un "title", una "date" opcional, y la lista de
//      nombres de archivo en "images".
//   4. Guarda y sube los cambios. La galería se actualiza sola.
//
// Ejemplo (déjalo comentado como referencia o cópialo y edítalo):
//
// window.ALBUMS = [
//   {
//     id: 'salon-principal',
//     title: 'Salón Principal',
//     date: 'Julio 2026',
//     images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg']
//   },
// ];

window.ALBUMS = [
  {
    id: 'Barceloneta',
    title: 'Barceloneta',
    images: [
      'barcelonetaentrada.jpeg',
      'WhatsApp Image 2026-08-14 at 9.59.09 AM.jpeg',
      'salon_educatoria.jpeg',
      'WhatsApp Image 2026-08-14 at 9.59.08 AM.jpeg',
      'edicatoruas mesas.jpeg'
    ]
  },

  {
    id: 'Vega_Baja',
    title: 'Vega Baja',
    images: [
      'vegabaja_2.jpeg',
      'vegabaja_1.jpeg',
      'vegabaja_3.jpeg',
      'vegabaja_4.jpeg'
    ]
  }
];
