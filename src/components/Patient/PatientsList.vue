<template>
    <div>
       <h2>Список пациентов</h2>
        <div>
            Поиск по ФИО и СНИЛС:
            <input type="text" v-model="quickSearch">
        </div>
        <br>
        <button @click="createPatient">Добавить нового пациента</button>
        <br>
        <table v-if="filteredList.length">
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Отчество</th>
                <th>Дата рождения</th>
                <th>Пол</th>
                <th>СНИЛС</th>
                <th>Действия</th>
            </tr>
            <tr :key="item.id" v-for="item in filteredList">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.middleName}}</td>
                <td>{{item.birthday}}</td>
                <td>{{item.gender}}</td>
                <td>{{item.insuranceNumber}}</td>
                <td>
                    <button @click="removePatient(item)">Удалить</button>
                    <button @click="editPatient(item.id)">Редактировать</button>
                    <button @click="showPatientInfo(item.id)">Детали</button>
                </td>
            </tr>
        </table>
        <div v-if="!filteredList.length && !!patients.length">
            <h3>По запросу "{{quickSearch}}" ничего не найдено</h3>
        </div>
        <div v-if="!patients.length">
            <h3>Список пациентов пуст</h3>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                quickSearch: ''
            }
        },
        computed: {
            ...mapGetters(["patients"]),
            filteredList() {
                const searchValues = this.quickSearch.toLowerCase().split(' ').filter(el => el.length);

                return this.patients.filter(el => {
                    let count = searchValues.reduce((acc, searchTag) => {
                        if (el.lastName.toLowerCase().indexOf(searchTag) >= 0
                        || el.firstName.toLowerCase().indexOf(searchTag) >= 0
                        || el.middleName.toLowerCase().indexOf(searchTag) >= 0
                        || el.insuranceNumber.toLowerCase().indexOf(searchTag) >= 0) {
                            return acc + 1;
                        }
                    }, 0);

                    return this.quickSearch.length < 2
                        || count === searchValues.length;
                });
            }
        },
        methods: {
            createPatient() {
                this.$router.push({ name: 'patient-create'});
            },
            removePatient(item) {
                if (confirm(`Удаляем пациента ${item.lastName} ${item.firstName} ${item.middleName}?`)) {
                    this.$store.dispatch('deletePatient', item.id);
                }
            },
            editPatient(id) {
                this.$router.push({ name: 'patient-edit', props: {id}});
            },
            showPatientInfo(id) {
                this.$router.push({ name: 'patient-info', props: {id}});
            }
        },
        mounted() {

        }
    };
</script>

<style>
    table {
        width: 100%;

    }

    table td {
        border: 1px solid;
    }
</style>
