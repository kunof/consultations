import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
        return {
            patients: [
                {
                    id: '1',
                    firstName: 'Павел',
                    middleName: 'Александрович',
                    lastName: 'Куноф',
                    gender: 'М',
                    birthday: '11.05.1996',
                    insuranceNumber: '612064'
                },
                {
                    id: '2',
                    firstName: 'Мария',
                    middleName: 'Андреевна',
                    lastName: 'Ершова',
                    gender: 'Ж',
                    birthday: '09.03.1999',
                    insuranceNumber: '615064'
                },
                {
                    id: '3',
                    firstName: 'Максим',
                    middleName: 'Алексеевич',
                    lastName: 'Галкин',
                    gender: 'М',
                    birthday: '09.05.1965',
                    insuranceNumber: '615014'
                }
            ]
        }
    },
    mutations,
    getters,
    actions
});
