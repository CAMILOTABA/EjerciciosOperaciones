
  function pyramid(numPisos) {

     
    for (let i = 1; i < numPisos; i++) {
      let piso = ''.padStart(i, "*").concat("".padStart(numPisos - i, " "))
      console.log(piso)
    }
  }

  pyramid(5);