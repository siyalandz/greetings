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

    

    function language() {
        if (lang.value === "English") {
            
            return "Hello " + name;
        } else if (lang.value === "IsiXhosa") {
            
            return "molo " + name;
        } else if (lang.value === 'Afrikaans') {
            
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