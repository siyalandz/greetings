function greetFactory() {

    let names =[];

    function AddName(name) {
        names.push(name);
    }

    function setName() {
    
    }

    function getName() {
        return names[0];
    }

    

    function language(name,lang) {
        console.log(name);
        console.log(lang);
        if (lang == "English") {
           return "Hello " + name;
        }  if (lang == "IsiXhosa") {
            
            return "molo " + name;
        } else if (lang == "Afrikaans") {
            
            return 'Hallo ' + name;
        }

    }


    return {
        AddName,
        setName,
        getName,
        language
    };
}