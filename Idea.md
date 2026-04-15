# Ideas to add

- Error al desplegar en cloudflare
- Ya que tenemos los datos, presentar otra vista por tipo de bachillerato qué carreras opta (mostrando las tarjeta con los ejemplos del tipo de tareas que hacen)
- Se cachean las imagenes? Si no va a acabar con el plan free. Revisar la opción de usar directamente unsplash

# Ideas added

- Multi-idioma: ES (original), CA (català), GL (galego) y EU (euskara) — selector de idioma en el header, árbol de decisiones y UI completamente traducidos
- Selector de idioma y ayuda movidos al header (ya no flotan sobre el contenido); breadcrumb integrado en la misma barra
- Favicon 🔭 como icon.svg en src/app/ (Next.js App Router lo recoge automáticamente)
- Añadir más cobertura de carreras (67 → 78 carreras universitarias)
- Imágenes auto-alojadas en /public/images/ (eliminada dependencia de Unsplash)
- Helper en la aplicación explicando cobertura y funcionamiento del árbol
- README orientado a producto/usuario con información de cobertura y diseño del árbol


# Initial prompt
hola, mi hija está estudiando en España cuarto de la ESO y tiene que elegir la rama para bachillerato. Se le dan bien y le gustan todas las asignaturas, por lo que tiene un dilema sobre qué elegir, entre ciencias, tecnológico y sociales.

Quiero crear una aplicación que le ayude a elegir qué le gustaría ser de mayor, qué carrera profesional ejercer teniendo en cuenta el dominio, tipo de trabajo y la carrera profesional, abarcando un amplio espectro de carreras y opciones, de manera que acabe eligiendo una opción, la más buena.

La idea que se me había ocurrido es que vaya eligiendo opciones de un árbol hasta llegar hasta las hojas (correspondiendo a una o varias opciones).

Necesito que me ayudes, teniendo en cuenta los diferentes ámbitos profesionales, a diseñar e implementar un programa que le ayude a decidir qué es lo que realmente debe hacer si sólo puede elegir una opción.

Al final debe servir para ayudarle a identificar una o varias profesiones y ver cómo mapea en las opciones que hay de bachillerato.
