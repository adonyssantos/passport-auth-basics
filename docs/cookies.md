# ¿Qué son las cookies y cómo implementar el manejo de sesión?

Una _cookie_ es un archivo creado por un sitio web que tiene pequeños pedazos de datos almacenados en él. Su propósito es identificar al usuario mediante el almacenamiento de su historial.

Las cookie session son cookies que tienen un corto periodo de vida ya que son removidas cuando el navegador o la pestaña se cierran.

Las persistent cookies se usan generalmente para guardar información de interés para el usuario.

Las secure cookies almacenan datos de forma cifradas para que terceros no puedan tener acceso a ellas, se suelen usar en conexiones HTTPS (Conexiones seguras).

Hay leyes sobre cookies que debes seguir al pie de la letra:

1. Avisarle al usuario que estás haciendo uso de cookies en tu sitio para guardar información
2. Es necesario que el usuario de su consentimiento para manejar cookies en tu sitio

# Cookies vs Session Storage vs Local Storage

El **Local Storage** tiene un almacenamiento máximo de 5MB y la información no se va con cada request al servidor, la información va a persistir aunque cerremos el navegador.

El **Session Storage** es similar al Local Storage solo que la información está disponible por pestaña o por la ventana del navegador. La información estará disponible solo en esa pestaña.

Las **Cookies** tienen solo un almacenamiento de 4KB, se les puede establecer un tiempo de expiración, la desventaja de usarlo es que al hacer request de imágenes o datos las cookies van junto con la petición.

**_Si la información no es sensible podemos almacenarla en Local Storage o en Session Storage._**
