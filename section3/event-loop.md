## ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
Se consideran macrotareas las tareas que tienen un timer como setTimeout y setInterval así tenga como temporizador 0 segundos y las microtareas son todas las que estan envueltas dentro de una promesa.
## ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
Las micro y macrotareas son dos tipos de tareas que el event loop gestiona, todo estas tareas entran al call stack y primero salen las microtareas y por último las macrotareas.
## ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
la microtarea ingresa a la cola de microtareas ejecuta la macrotarea que hay dentro de la microtarea y la envía a la cola de las macrotareas para que se ejecute cuando no haya mas microtareas pendientes.
## ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
Las promesas se manejan como microtareas y tienen prioridad sobre las macrotareas como el setTimeout. Entonces el event loop se asegura que todas las microtareas se completen antes de iniciar la siguiente macrotarea, lo que explica por qué los callbacks de las promesas se ejecutan antes que los setTimeout incluso si ambos están programados con el mismo retardo de tiempo.

![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152304.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152429.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152524.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152620.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152647.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152729.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152811.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152840.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152926.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20152951.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153134.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153220.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153248.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153333.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153529.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153624.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153804.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153838.png)
![](https://github.com/luisruro/javascript-6th-workshop/blob/main/public/images/Captura%20de%20pantalla%202024-07-25%20153904.png)