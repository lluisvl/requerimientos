//req1
feature: Alertar cuando se esté cerca de romper una meta financiera o de ahorro
scenario: En el que el usuario ha configurado una meta de ahorro o gasto 
    given: la autorizacion del usuario para alertar
    when: el usuario ha excedido o esta por exceder la meta 
    then: el usuario podra ser consciente de sus gastos
    and: podra bajar sus gastos

scenario: La alerta se muestra de manera visible y oportuna 
    when: aparezca la alerta en el celular 
    then: el usuario entendera facilemtne la alerta 
    and: podra tenr medidas para actuar 

scenario: El usuario puede acceder a detalles desde la alerta
    when: aparezca la alerta en el celular 
    then: el usuario podra ver los detalles 
    and: podra ignorar el detalle o leerlo cuidadosamente 

scenario: La alerta se actualiza en tiempo real
    when: se rompe la meta financiera
    then: el usuario podra relacionar el gasto rapidamente 
    and: no preocuparse por saber en que gasto

scenario: Se respeta la configuración de alertas del usuario
    when: el usuario decide si recibir las alertas o no
    then: la app entendera las preferecnias del usuario 
    and: saber si aertarlo o no 

//req2
feature: Ligar tus tarjetas o cuentas bancarias a tu perfil.
scenario: El usuario puede seleccionar un banco desde la lista disponible
    given: llos bancos disponibles de la localidad 
    when: el usuario desee agregar o modificar sus cuentas 
    then: la app validadra si estan disponibles
    and: el usuario podra tener los beneficios de la app con sus cuentas

scenario: La autenticación se realiza en entorno seguro y cifrado
    when: el usuario agregra sus cuentas 
    then: podra tener la confianza de que sus cuentas estan seguras 
    and: no tener que preocuparse por nada mas

scenario: Se confirma si la vinculación fue exitosa o fallida
    when: el usuario quiera argegar una cuenta de banco
    then: si es exitoso se agregara de lo contrario se le notificara al usuario 
    and: podra usarala una vez verificadas 

scenario: El usuario puede consultar transacciones y saldo automáticamente
    when: el usuario lo desee
    then: en vez de meterse a su banca lo podra hacer desde la app
    and: evitarse demoras por caidas de los bancos

scenario: El usuario puede desvincular una cuenta en cualquier momento
    when: tengas sospecha de siniestro o asi lo desee
    then: se eliminara permanentemente de la app
    and: nadie podra acceder a sus fondos o hacer uso de ella

    //req3
feature: Reporte específico de categorías con incrementos significativos en gastos
scenario: El sistema detecta aumentos de gasto en categorías 
    when: se eleva el gasto en ciertas categorias  
    then: se le enviara el reporte al usario 
    and: podra verde talladamente el reporte 

scenario: Se genera un reporte visual y fácil de interpretar
    when: se abre el reporte no sera dificil de entender
    then: cualquier persona podra ver sus reportes de gastos

scenario: Se destaca cualquier incremento mayor al umbral definido
    when: se excede porcentaje del gasto 
    then: podra darse cuenta el % de su gasto
    and: ver en que % de gasto va

scenario: El reporte permite ver detalles adicionales
    when: se elije ver los detalles adicionales 
    then: se hara el desgolse de gastos
    and: ver en que se gasto 

scenario: El sistema notifica si no hay suficientes datos para hacer el análisis
    when: tiene suficientes datos lo manda si no sigue recopilando informacion
    then: se enviara o se continuara 
    and: si no hay informacion y el usuario lo necesita lo vera hasta la fecha que quiso verlo