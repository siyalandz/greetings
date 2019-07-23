describe('function greetFactory', function () {
    let object = greetFactory();
    it('should be able to greet name in English', function () {
        
     var result=   object.language('Siya','English');

        assert.equal('Hello Siya', result)
    })
    it('should be able to greet name in Xhosa', function () {
        
        var result=   object.language('Siya','IsiXhosa');
   
           assert.equal('Molo Siya', result)
       })
       it('should be able to greet name in Afrikaans', function () {
        
        var result=   object.language('Siya','Afrikaans');
   
           assert.equal('Hallo Siya', result)
       })
    it('should be able to count the 1st person greeted',function(){
        assert.equal(1,object.getGreetedNames());
    })
      it('should be able to count the 5 people greeted',function(){
        let object1 = greetFactory();

        object1.language('Siya','IsiXhosa');
        object1.language('AYA','english');
        object1.language('MAKO','IsiXhosa');
        object1.language('VOVO','Afrikaans');
        object1.language('MGOLI','IsiXhosa');
    })
    
})



    