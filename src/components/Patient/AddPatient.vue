<template>
    <div>
        <div class="field">
            <div class="caption">Имя</div>
            <input v-model="patient.firstName" type="text">
        </div>
        <div class="field">
            <div class="caption">Фимилия</div>
            <input v-model="patient.lastName" type="text">
        </div>
        <div class="field">
            <div class="caption">Отчество</div>
            <input v-model="patient.middleName" type="text">
        </div>
        <div class="field">
            <div class="caption">Дата рождения</div>
            <input v-model="patient.birthday" type="date">
        </div>
        <div class="field">
            <div class="caption">Пол</div>
            <input v-model="patient.gender" type="text">
        </div>
        <div class="field">
            <div class="caption">СНИЛС</div>
            <input v-model="patient.insuranceNumber" type="text">
        </div>
        <div class="field">
            <button @click="create()">Добавить пациента</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                patient: {
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    birthday: '',
                    gender: '',
                    insuranceNumber: ''
                }
            }
        },
        methods: {
            create() {
                this.$store.dispatch('createPatient', {
                    id: Math.random().toString().split('.')[1],
                    firstName: this.patient.firstName,
                    middleName: this.patient.middleName,
                    lastName: this.patient.lastName,
                    birthday: this.patient.birthday,
                    gender: this.patient.gender,
                    insuranceNumber: this.patient.insuranceNumber
                }).then(()=> {
                    this.$router.push({ name: 'patients-list'});
                })
            }
        }
    };
</script>
