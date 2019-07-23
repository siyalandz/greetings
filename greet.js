function greetFactory(usersGreeted) {



    let names = usersGreeted || {};

    function getNames() {
        return names;
    }

    function getGreetedNames() {
        return Object.keys(names).length;
    }

    function language(name, lang) {
        var MyName = name.toUpperCase().charAt(0) + name.slice(1)
        if (name !== '') {
            if (names[name] === undefined) {
                names[name] = 1;
            } else {
                names[name]++;
            }

            if (lang == "English") {
                return "Hello " + MyName;
            }
            if (lang == "IsiXhosa") {

                return "Molo " + MyName;
            } else if (lang == "Afrikaans") {

                return 'Hallo ' + MyName;
            }
        }

    }


    function myButton() {
        names = {};
        localStorage.clear('greetNames');
        // location.reset();

    }



    return {


        getNames,
        language,
        
        myButton,
        getGreetedNames
    };
}