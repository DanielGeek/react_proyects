import React, { useState } from 'react';
// seleccionar atributos del store
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew } from '../../actions/events';

// posiciona el modal en el medio
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

// momento actual + 1 hora
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    const dispatch = useDispatch();
    // selecciono del store el atributo ui.modalOpen para asignarlo al componente modal y inciar con ese valor
    const { modalOpen } = useSelector(state => state.ui)

    // asigna la fecha/hora en fecha inicio
    const [dateStart, setDateStart] = useState(now.toDate());
    // asigna la fecha/hora en fecha fin
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
    // cambia el state para validar que el titulo es valido
    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate()
    });
    // extraigo los atributos para asignarlos a los inputs del form o validarlos
    const { notes, title, start, end } = formValues;

    // asigna el nuevo valor al input que coincida con el target.name
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    // asigna false al state en uiReducer para cerrar el modal
    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch(uiCloseModal());
    }
    // asigna la nueva fecha seleccionada    
    const handleStartDateChange = (e) => {
        setDateStart(e);
        // para asignar al state del form el nuevo valor al atributo start
        setFormValues({
            ...formValues,
            start: e
        })
    }
    // asigna la nueva fecha seleccionada
    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error', 'La fecha fin debe de ser mayor a la fecha de inicio', 'error');
        }

        if (title.trim().length < 2) {
            return setTitleValid(false);
        }

        //TODO: realiza grabación
        // envio los datos en el form y un id de ejemplo para guardarlos en el state
        dispatch(eventAddNew({
            ...formValues,
            id: new Date().getTime(),
            user: {
                _id: '123',
                name: 'Daniel'
            }
        }));

        setTitleValid(true);
        closeModal();

    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={dateStart}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        // si el titulo no es valido(false) marca error
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
