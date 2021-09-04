Anteriormente las compañías se comunicaban mediante un intranet que actualmente ha sido reemplazado con un stack de seguridad moderno usando:

- **JSON Web Tokens:** Nos permite comunicarnos entre dos clientes de una manera más segura.
- **OAuth 2.0:** Un estándar de la industria que nos permite implementar autorización.
- **OpenID Connect:** Es una capa de autenticación que funciona por encima de _Oauth 2.0_.

---

La **autenticación** sirve para verificar la identidad de un usuario, verificar si el usuario existe y si los datos que está colocando son correctos.

Un usuario está autenticado (de manera única) mediante una autenticación (contraseña, biométrico, etc).

La **autorización** es la acción de permitir a un usuario acceso limitado a nuestro recursos.

El usuario autenticado tiene autorizado ciertos permisos.

---

Cuando visitamos un sitio por primera vez se crea una sesión con los ajustes que se configuran. Por ejemplo, en un sitio web de reserva de hoteles, a medida que buscamos y ponemos preferencias de precios y demás, éstas se irán guardando en dicha sesión. Y luego estos datos se convertirán en un ID que será almacenado en una cookie en tu navegador.

---

Cuando usamos una autenticación tradicional se crea una sesión y el ID de esa sesión se almacena en una cookie del navegador, pero cuando utilizamos JWT firmamos un token y este se guarda en el navegador el cual permite a una SPA actualizarse sin refrescar la ventana.
