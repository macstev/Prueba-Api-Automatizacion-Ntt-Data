							/****************************************************************************
							 *	Archivo Físico:		INSTRUCTIVO PASO A PASO EJECUCIÓN    	    *
							 *	Archivo:	            Readme.txt		                            *
							 *	Producto:			AUTOMATIZACIÓN DE API PRUEBA                  *
 							 *	Elaborado por:		MICHAEL PÉREZ PISCO				    *
							 *--------------------------------------------------------------------------*
							 *			   DESCRIPCION DEL README			                *
							 *	En este archivo de detallará el paso a paso de la ejecución de la     *
							 *    prueba automatizada así como las herramientas utilizadas para su 	    *
							 * 	respectivo desarrollo.					                      *
							 *--------------------------------------------------------------------------*

Pasos para levantar el ambiente:

      - Instalar nodejs con la version más actual (18.14.0 LTS)
      - Una vez instalado el nodejs se puede realizar el levantamiento de un proyecto de node este se lo puede hacer de dos maneras, 
        creamos una carpeta en un directorio identificado por nosotros donde deberemos abrir el terminal (cmd) en la ruta donde crearemos nuestro proyecto y 
        ejecutar el comando "npm init", nos pedirá una serie de datos los cuales le iremos asignando a medida que vamos cargando los datos en cada parametro.
        La segunda forma de crear el proyecto de node es iniciar el visual code (ide) y en la terminal de nuestro ide ejecutar el comando "npm init".
      - Una vez creado nuestro proyecto de nodejs procedemos a instalar el cypress en el proyecto creado para esto ejecutamos desde el terminal de visual code el
        comando "npm install cypress --save-dev"
      - Despues de instalar el cypress en el proyecto se procede a ejecutar el comando "npm rum test" para que permita abrir la herramienta de cypress y permita
        tener un control de los casos a ejecutar y poder comprobar el log que genera al momento de realizar la automatización.
        Para utilizar esta herramienta por ser primera vez al abrirla en el proyecto se debe configurar una serie de archivos que son necesarios para la ejecución
        de la herramienta de cypress esta configuración permite crear los archivos cypress.config.js, e2e.js, commands.js, example.jso.
      - Para iniciar la automatización ejecutamos en el terminal de visual code el comando "npm rum test" elegimos la opción "E2E Testing", luego seleccionamos el
        navegador de nuestra preferencia, al abrirse el navegador nos muestra el proyecto de automatización que hemos creado en este caso tiene como nombre 
        "compra_carrito.cy.js" le damos click y empezará a presentar la automatización realizada, esperamos a que carguen todos los componentes.
      - En caso que no deseemos ver la parte grafica y solo deseemos ver la parte estadistica de la automatización, debemos ejecutar desde el terminal de visual code
        el comando "npx cypress run".