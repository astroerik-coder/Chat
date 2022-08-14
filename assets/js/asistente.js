if (annyang) {
  //Variable para almacenar las voces de nuestro sistema.
  var voices;
  //Inicializamos utter.
  var utter = new SpeechSynthesisUtterance();
  utter.rate = 1;
  utter.pitch = 0.5;
  utter.lang = "es-EC";

  //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
  };

  //Definimos los comandos a utilizar.
  var commands = {
    //Saludos
    'Hola.': function () {
      saludos = ['Hola soy Rob, Bienvenido al Parque Nacional El Boliche',
        'Hola soy Rob ,¿en que puedo ayudarte ?',
        'Buenas soy Rob, ¿en que puedo ayudarle?',
      ];
      utter.text = saludos[Math.floor(Math.random() * saludos.length)];
      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[2];
      window.speechSynthesis.speak(utter);
    },
    //Atención
    'Atención.': function () {
      utter.text ="Estaremos encantados de atenderlos de martes a domingo, de 08:00 a 14:00.";
      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[2];
      window.speechSynthesis.speak(utter);
    },
    //Actividades
    'Actividades.': function () {
      utter.text ='Cuenta con varias facilidades turísticas como áreas de camping y pícnic, con espacios específicos para realizar fogatas; zona de juegos infantiles; 11 cabañas de hospedaje; un restaurante privado; dos senderos autoguiados y un Centro Histórico.';
      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[2];
      window.speechSynthesis.speak(utter);
    },
    //Clima
    'Clima.': function () {
        clima=['El clima es frío alto andino pero varía de acuerdo a la época del año, puede oscilar entre los 0 y 16 grados centígrados, por ello es importante llevar ropa abrigada',
        'El clima en el Boliche es frío de altura, con temperaturas de hasta 5 grados centígrados, sin embargo en las mañanas soleadas el clima es agradable llegando a los  18 grados centígrados. Por estar enclavada en el nudo de Tiopullo soporta abundantes vientos y constantes lloviznas.'];
        utter.text = clima[Math.floor(Math.random() * clima.length)];
         //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);
    },    
    //Ubicación
    'Ubicación.': function () {
        utter.text = 'El ingreso es por la panamericana sur a 60 km desde Quito y a 30 km desde Latacunga. Existe un letrero de identificación que te guiará hacia el área.';
         //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);       
    },   
    //Sendero 
    'Sendero.': function () {
        sendero=['El Sendero Romerillo es uno de los trayectos que se pueden caminar en el Area Nacional de Recreación Boliche. Otro importante atractivo es la zona de campamento y las cabañas. El Boliche se ubica a solo 1 hora de Quito, siguiendo la Panamericana en dirección a Latacunga, tambien se puede llegar por tren. Se puede hacer un "pic-nic" o al regresar se puede comer el La Posada del Chagra" en Machachi. Ahora cuenta con un nuevo local en la Panamericana, lo que evita entrar en el pueblo, ahorrando tiempo.',
        'El Sendero Quishuar se puede realizar desde la Estación de Tren El Boliche en el Parque Nacional Cotopaxi y de recorrido obligado si vas en el tren hasta el lugar, incluso se puede llegar en auto. Es un sendero de baja dificultad apto para niños y personas mayores. Se puede observar sobre todo vegetación e incluso hay una parte donde se encuentra un sitio parecido al bosque nublado a pesar de ser páramo.'];
        utter.text = sendero[Math.floor(Math.random() * sendero.length)];
         //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);       
    },
    //Fauna 
    'Fauna.': function () {
        utter.text = 'La diversidad de animales y la vegetación nativa son dos de los principales atractivos turísticos.la fauna del lugar se pueden distinguir al venado de cola blanca, cervicabra, conejo silvestre,  lobo de páramo, zorrillos, lobos, pumas, perdices y curiquingues; existen también 67 llamas y seis alpacas.';
        //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);       
    },
    //Flora  
    'Flora.': function () {
        utter.text='En cuanto a la flora existe una variedad de especies como yagual, polilepis, árboles pumaqui, quishuar y sacha capulí; y en el páramo en cambio se puede observar el mortiño, la paja y varios tipos de musgos, helechos, líquenes y hongos.';
        //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);       
    },
    //Salida
    'Chao.': function () {
        despedida = ['Fue un placer atenderle','Excelente día','Un gusto atenderle'];
        utter.text = despedida[Math.floor(Math.random() * despedida.length)];
        //Setea la voz que queremos usar en base a nuestra lista.
        utter.voice = voices[2];
        window.speechSynthesis.speak(utter);
      },  
  };

  //Esto nos sirve para ver que escucha el programa en tiempo real.
  annyang.addCallback("result", function (phrases) {
    console.log("Creo que el usuario dijo: ", phrases[0]);
    console.log(
      "Pero, de nuevo, podría ser cualquiera de los siguientes: ",
      phrases
    );
  });

  //Sumamos todos los comandos a annyang.
  annyang.addCommands(commands);

  //Annyang comienza a escuchar.
  annyang.start({ autoRestart: false, continuous: true });
}
