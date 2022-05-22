
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent({
    name = requiredParam("name"),
    /* requiredParam nos permite obligar a el usuario a que por lo menos rellene lo que es nombre e email */
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
        /* le ponemos = {} por que por defecto tiene que ser un objeto y de esta manera si  la persona no envia un objeto no abra errores incluso si no envia nada, */
  } = {}) {
    const private = {
      "_name": name,
    };
  
    const public = {
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    get name() {
        return private["_name"];
      },
    set name(newName) {
        if (newName.length  != 0) {
            private["_name"] = newName;
        }else{
            console.warn("Tu nombre debe tener al menos un caracter")
        }
      },
    };
  
/*     Object.defineProperty(public, "readName", {
      writable: false,
      configurable: false,
    });
    Object.defineProperty(public, "changeName", {
      writable: false,
      configurable: false,
    }); */
  
    return public;
  }
  
  const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
  