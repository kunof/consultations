import VueRouter from "vue-router";
import PatientsList from "../components/Patient/PatientsList"
import PatientInfo from "../components/Patient/PatientInfo"
import AddPatient from "../components/Patient/AddPatient"
import EditPatient from "../components/Patient/EditPatient"

export default new VueRouter({
    mode: "history",
    routes: [
        {path: '/', component: PatientsList, name: 'patients-list'},
        {path: '/add-patient', component: AddPatient, name: 'patient-create'},
        {path: '/patient/:id', component: PatientInfo, name: 'patient-info'},
        {path: '/patient/:id/edit', component: EditPatient, name: 'patient-edit'}
    ]
});
