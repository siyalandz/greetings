function greetFactory() {

    let names =[];
     let counter = 0;
     
    function AddName(name) {
        names.push(name);
    }

    function setName() {
    
    }

    function getName() {
        return names[0];
    }

    

    function language(name,lang) {
        // console.log(name);
        // console.log(lang);
        if (lang == "English") {
           return "Hello " + name;
        }  if (lang == "IsiXhosa") {
            
            return "molo " + name;
        } else if (lang == "Afrikaans") {
            
            return 'Hallo ' + name;
        }

     function counter(){
            count = Object.keys()
                return count.length
            
        }

    }


    return {
        AddName,
        setName,
        getName,
        language,
        counter
    };
}