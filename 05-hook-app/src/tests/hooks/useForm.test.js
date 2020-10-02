const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'daniel',
        email: 'daniel@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Daniel'
                }
            });
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({ ...initialForm, name: 'Daniel'})
        
    })

    test('debe de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Daniel'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual(initialForm);
    })
    
    
    
})
