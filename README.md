# Practica JS + Localstorange

## Objetivo
Los siguientes ejercicios tienen como objetivo practicar el pensamiento lógico en
javascript para resolver problemas, valiéndonos del uso de HTML, CSS, la
manipulación del DOM mediante javaScript y la persistencia de datos en el
localStorage. Para la resolución de estos ejercicios dejamos unos diseños que
pueden servir de guía pero no son requerimiento, pudiendo implementar los
estilos que consideren. Recomendamos utilizar bootstrap o alguna librería de
estilos de su preferencia para facilitarles el maquetado ya que no es el objetivo
de estas prácticas. Luego, los ejercicios resueltos los pueden subir a un
repositorio y enviar a molea@mobydigital.com y fmorel@mobydigital.com
## Enunciado
Se debe crear un formulario de login, el cual debe validar tanto el mail como la contraseña. 
Al no contar con un backend y base de datos vamos a simularlo reemplazandolos por el localStorage, debemos también poder generar un
usuario y poder loguearnos con el mismo. Se debe tener en cuenta:
- Validadores de inputs en el formulario.
- Mensajes de error intuitivos.
- Cuando el usuario se loguee correctamente redireccionar a una
vista de bienvenida en la cual se muestre el nombre de usuario.
- El usuario tiene que poder crearse una cuenta.

## Referencias
![image](https://user-images.githubusercontent.com/17836921/205442433-69404253-4e1d-40cc-b671-f852eb431b1c.png)
![image](https://user-images.githubusercontent.com/17836921/205442480-50ec8abd-786a-499f-9eaf-7b5b31fb7985.png)

## Adicional
Para este ejercicio vamos a mockear los datos de login en el localStorage, es
decir, crear un array de usuarios que contenga al menos 3 objetos “user” con una
estructura similar a la siguiente:

  ![image](https://user-images.githubusercontent.com/17836921/205442534-d40fa29c-24ef-4fac-af21-6a63d1e6e26e.png)

Los cuales debemos en primera instancia guardar en localStorage del navegador
y después leer al momento de intentar loguearse para validar si los datos son
correctos.
Si la validación es correcta, debemos guardar en otra variable del localStorage el
nombre y username del usuario logueado que luego debemos leer desde la vista
de bienvenida donde lo saludamos con su nombre. Desde esta vista debe haber
un botón para cerrar sesión qué debe borrar los datos del del usuario logueado
del localStorage .
Al momento de registrar un nuevo usuario se debe agregar el nuevo usuario al
array de usuarios mockeados y debe persistir para poder loguearse con ese
usuario después de recargar la página
Notas: Los diseños son orientativos. IMPORTANTE! Guardar información sensible en
el localStorage es una mala práctica y algo que debe evitarse siempre.

### Template used by jonalvarezz  https://github.com/jonalvarezz/snowpack-template-tailwind
