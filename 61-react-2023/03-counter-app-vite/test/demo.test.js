test('This test should not fail', () => {

    if ( 0 === 1 ) {
        throw new Error('Can not divide between zero');
    }
});