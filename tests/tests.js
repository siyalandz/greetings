describe('function greetFactory',function() {
            it('should be able to get the greeted name',function() {
                let object = greetFactory();
                object.AddName('Siya');

                assert.equal('Siya',object.getName())
            })
            it('should be able to set the name',function(){
                let object1 = greetFactory();
                object1.AddName('siya');

                assert.equal('siya',object1.getName())
            })
            
            
        
        it('should be able to get the name', function(){
            let object2 = greetFactory();
            object2.AddName('Siya')
            assert.equal('Siya',object2.getName())
        })
        it('should return the Hello word when greeted in English', function(){
            let object3 = greetFactory();
            object3.AddName('Hello')
            assert.equal('Hello',object3.getName())
        })
        it('should return the Molo word when greeted in Xhosa', function(){
            let object4 = greetFactory();
            object4.AddName('Molo')
            assert.equal('Molo',object4.getName())
        })
        it('should return the Hallo word when greeted in Afrikaans', function(){
            let object4 = greetFactory();
            object4.AddName('Hallo')
            assert.equal('Hallo',object4.getName())
        })

        it('should count how many people greeted'), function(){
            let object5 = greetFactory();
            object5.counter('siya, sino. vovo,Loyd')
            assert.equal('4',object5.getName())
        }
})

    