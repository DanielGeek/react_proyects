describe('Tests in <DemoComponent />', () => {

    test('This test should not fail', () => {
    
        // 1. initialization
        const message1 = 'Hello World';
    
        // 2. stimulus
        const message2 = message1.trim();
    
        // 3. observe expected behavior
        expect( message1 ).toBe( message2 );
    
    });

})