let mutations = {
    CREATE_PATIENT(state, patient) {
        state.patients.unshift(patient);
    },
    DELETE_PATIENT(state, patientID) {
        let index = state.patients.findIndex(item => item.id === patientID);
        state.patients.splice(index, 1);
    },
};
export default mutations;
