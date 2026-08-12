# Cómo agregar fotos a la página de Actividades

La página `Actividades/index.html` muestra "álbumes" de fotos. No hay que tocar el HTML para
agregar fotos nuevas — solo sigue estos pasos:

1. **Crea una carpeta nueva** dentro de `Actividades/fotos/` con el nombre de la actividad.
   Usa minúsculas y guiones en vez de espacios, por ejemplo:
   `Actividades/fotos/dia-de-lectura/`

2. **Copia las fotos** de esa actividad dentro de la carpeta que creaste.

3. **Registra el álbum** abriendo `Actividades/js/gallery-data.js` y agregando un objeto a la
   lista `ALBUMS`:

   ```js
   window.ALBUMS = [
     {
       id: 'dia-de-lectura',        // debe ser igual al nombre de la carpeta
       title: 'Día de Lectura',     // título que se muestra en la página
       date: 'Julio 2026',          // opcional
       images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'], // nombres de archivo, en orden
     },
   ];
   ```

4. **Guarda y sube los cambios** (`git add`, `git commit`, `git push`). La galería se actualiza
   sola — no hace falta cambiar nada más.

Puedes tener tantos álbumes como quieras; cada uno aparece como su propia sección con su
título en la página de Actividades.
