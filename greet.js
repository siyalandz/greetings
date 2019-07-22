function greetFactory(usersGreeted) {



    let names = usersGreeted || {};
    counter = 0;

    function AddName(name) {
        names.push(name);
     }

     function setName() {

     }

    function getNames() {
        return names;
    }



    function language(name, lang) {
        //  var MyName= name.chart(0).MyName()+ name.slice(1)
        if (name !== '') {
            if (names[name] === undefined) {
                names[name] = 0;
            }else{
                names[name]++;
            }

            if (lang == "English") {
                return "Hello " + name;
            }
            if (lang == "IsiXhosa") {

                return "Molo " + name;
            } else if (lang == "Afrikaans") {

                return 'Hallo ' + name;
            }
           
        

        }
        
    }

   
    function myButton() {
        names = {};
        localStorage.clear('greetNames');
        // location.reset();

    }



    return {
        AddName,
         setName,
        getNames,
        language,
         counter,
         myButton
    };
}