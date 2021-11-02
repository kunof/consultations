let actions = {
    createPatient({ commit }, patientData) {
        commit("CREATE_PATIENT", patientData);
    },
    deletePatient({ commit }, id) {
        commit("DELETE_PATIENT", id);
    }
};

export default actions;
