function greetFactory(usersGreeted) {



    let names = usersGreeted || {};

    function getNames() {
        return names;
    }

    function getGreetedNames() {
        return Object.keys(names).length;
    }

    function language(name, lang) {   
        var MyName = name.toLowerCase();
        var MyNaam = MyName.toUpperCase().charAt(0) + MyName.slice(1)
        if (name !== '') {
            if (names[name] === undefined) {
                names[name] = 1;
            } else {
                names[name]++;
            }

            if (lang == "English") {
                return "Hello " + MyNaam;
            }
            if (lang == "IsiXhosa") {

                return "Molo " + MyNaam;
            } else if (lang == "Afrikaans") {

                return 'Hallo ' + MyNaam;
            }
        }else {MyNaam === '' ;
            return "please enter name or language";
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