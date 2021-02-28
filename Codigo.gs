/global variable
var url = 'https://docs.google.com/spreadsheets/d/10jekoaCOmF4PSbDgHuRCrcB38djx_8nzTSTjR05fSsg/edit#gid=0';

//create HTMLOutputfromfile ony works when its only 1 html with all inside, when it's separated (css,js,html) you need to use createTemplateFromFile and evaluate
function doGet(request) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('BBDD');
  //lista de RBD
  var list = ws.getRange(2, 1, ws.getRange("A2").getDataRegion().getLastRow() - 1, 1).getValues();
    //var list = ws.getRange(2,1,5,1).getValues();
  //convierte el array of array en un array simple y luego en texto con el join
  var htmlListArray = list.map(function (r) { return '<option>' + r[0] + '</option>'; }).join('');
  var tmp = HtmlService.createTemplateFromFile('Index');
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

//funcion incluir para poder separar css y js de html
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function userClicked(userInfo) {

    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName('Data');

    var email = Session.getEffectiveUser().getEmail();
   /* ws.appendRow([userInfo.rbd, userInfo.colegio, userInfo.beneficiarios, userInfo.canastaDesayunoTransicion, userInfo.canastaDesayunoBasica, userInfo.canastaDesayunoMedia, userInfo.canastaDesayunoAdulto, userInfo.canastaAlmuerzoTransicion, userInfo.canastaAlmuerzoBasica, userInfo.canastaAlmuerzoMedia, userInfo.canastaAlmuerzoAdulto, userInfo.canastaOnceTransicion, userInfo.canastaOnceBasica, userInfo.canastaOnceMedia, userInfo.canastaOnceAdulto, userInfo.canastaCompletaTransicion, userInfo.canastaCompletaBasica, userInfo.canastaCompletaMedia, userInfo.canastaCompletaAdulto, userInfo.desayunoConvencionalTransicion, userInfo.desayunoConvencionalBasica, userInfo.desayunoConvencionalMedia, userInfo.desayunoConvencionalAdulto, userInfo.almuerzoConvencionalTransicion, userInfo.almuerzoConvencionalBasica, userInfo.almuerzoConvencionalMedia, userInfo.almuerzoConvencionalAdulto, userInfo.onceConvencionalTransicion, userInfo.onceConvencionalBasica, userInfo.onceConvencionalMedia, userInfo.onceConvencionalAdulto, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, userInfo.region, userInfo.ut]);*/

  if (userInfo.canastaCompletaTransicion > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'T', 950, 'CC1', userInfo.canastaCompletaTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaCompletaBasica > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'B', 950, 'CC1', userInfo.canastaCompletaBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaCompletaMedia > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'M', 950, 'CC1', userInfo.canastaCompletaMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaCompletaAdulto > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'A', 950, 'CC1', userInfo.canastaCompletaAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaDesayunoTransicion > 0) {
ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'T', 400, 'CD1', userInfo.canastaDesayunoTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);;
  }
  if (userInfo.canastaDesayunoBasica > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'B', 400, 'CD1', userInfo.canastaDesayunoBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaDesayunoMedia > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'M', 400, 'CD1', userInfo.canastaDesayunoMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaDesayunoAdulto > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'A', 400, 'CD1', userInfo.canastaDesayunoAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaAlmuerzoTransicion > 0) {  
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'T', 550, 'CA1', userInfo.canastaAlmuerzoTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaAlmuerzoBasica > 0) { 
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'B', 550, 'CA1', userInfo.canastaAlmuerzoBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaAlmuerzoMedia > 0) { 
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'M', 550, 'CA1', userInfo.canastaAlmuerzoMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.canastaAlmuerzoAdulto > 0) { 
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 205,'A', 550, 'CA1', userInfo.canastaAlmuerzoAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.desayunoConvencionalTransicion > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 25,'T', 200, 'D', userInfo.desayunoConvencionalTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.desayunoConvencionalBasica > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 10,'B', 250, 'D', userInfo.desayunoConvencionalBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.desayunoConvencionalMedia > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 16,'M', 300, 'D', userInfo.desayunoConvencionalMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.desayunoConvencionalAdulto > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 220,'M', 300, 'D', userInfo.desayunoConvencionalAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.almuerzoConvencionalTransicion > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 25,'T', 400, 'A', userInfo.almuerzoConvencionalTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.almuerzoConvencionalBasica > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 10,'B', 450, 'A', userInfo.almuerzoConvencionalBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.almuerzoConvencionalMedia > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 16,'M', 600, 'A', userInfo.almuerzoConvencionalMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.almuerzoConvencionalAdulto > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 220,'A', 600, 'A', userInfo.almuerzoConvencionalAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.onceConvencionalTransicion > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 25,'T', 203, 'O', userInfo.onceConvencionalTransicion, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.onceConvencionalBasica > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 10,'B', 253, 'O', userInfo.onceConvencionalBasica, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.onceConvencionalMedia > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 16,'M', 303, 'O', userInfo.onceConvencionalMedia, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  if (userInfo.onceConvencionalAdulto > 0) {
    ws.appendRow([userInfo.region, userInfo.ut, userInfo.rbd, 220,'A', 352, 'O', userInfo.onceConvencionalAdulto, 15, userInfo.dateStamp, userInfo.ciclo, userInfo.usuario, email ]);
  }
  }


function getColeAndBenef(rbd) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('BBDD');
  var data = ws.getRange(1, 1, ws.getLastRow(), 8).getValues();

  var listaRbd = data.map(function (r) { return r[0]; });
  var listaColegios = data.map(function (r) { return r[1]; });
  var listaBeneficiarios = data.map(function (r) { return r[4]; });
  var listaRegion = data.map(function (r) { return r[2]; });
  var listaUt = data.map(function (r) { return r[7]; });

  var position = listaRbd.indexOf(parseInt(rbd));
  var datos = {};
  datos.colegio = listaColegios[position];
  datos.beneficiarios = listaBeneficiarios[position];
  datos.region = listaRegion[position];
  datos.ut = listaUt[position];
  //if(position > -1) {
  return datos;
  //} else {
  //     return 'No Disponible'
  // }
}

function getUser(usuario) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('BBDD');
  var data = ws.getRange(1, 10, ws.getLastRow(), 2).getValues();
  
  var listaUsuarios = data.map(function (r) { return r[0]; });
  //var listaRbd = data.map(function (r) { return r[1]; });

  var position = listaUsuarios.indexOf(parseInt(usuario));

  if(position > -1) {
  return 'existe';
  } else {
    return 'no existe';
   }
}

function getArrayRbd(usuario) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('BBDD');
  var data = ws.getRange(1, 10, ws.getLastRow(), 2).getValues();
  
  var listaUsuarios = data.map(function (r) { return r[0]; });
  var lista = data.filter(function (r) { return r[0] === parseInt(usuario); });
  
  var listaRbd = lista.map(function(r) {return r[1]; });
  Logger.log(listaRbd[0]);
   var position = listaUsuarios.indexOf(parseInt(usuario));
   var datos = {}; 
   datos.listaRbd = listaRbd;
   datos.caracteres = usuario.length;

  if(position > -1) {
  return datos;
   } else {
     datos.listaRbd = 'el rut ingresado no se encuentra en la base de datos de usuarios PAE';
     return datos;
    //return 'el rut ingresado no se encuentra en la base de datos de usuarios PAE';
   }
 
}

