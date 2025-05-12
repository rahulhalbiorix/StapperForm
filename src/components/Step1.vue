<template>
    <div class="step-content" id="step-1">
        <div class="step-header">
            <h2 class="step-title">Personal Information</h2>
            <p class="step-description">Please provide your personal details</p>
        </div>
        <div class="form-grid">
            <div class="form-group">
                <label for="firstName">First Name: {{ form1.firstname }} </label>
                <input type="text" id="firstName" placeholder="Enter your first name" v-model="form1.firstname">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name: {{ form1.lastname }} </label>
                <input type="text" id="lastName" placeholder="Enter your last name" v-model="form1.lastname">
            </div>
            <div class="form-group">
                <label for="email">Email: {{ form1.email }}</label>
                <input type="email" id="email" placeholder="Enter your email" v-model="form1.email">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:{{ form1.phone }} </label>
                <input type="tel" id="phone" placeholder="Enter your phone number" v-model="form1.phone">
            </div>
            <div class="form-group" style="margin: 10px 0px;">
                <label for="phone">Gender : <b style="color: coral;">{{ form1.gender }} </b> </label>
                <div style="display: flex; align-items: self-start;flex-direction: row-reverse;">
                    <input type="radio" id="female" value="FEMALE" v-model="form1.gender">
                    <label for="female">FeMale</label>
                    <input type="radio" id="male" value="MALE" v-model="form1.gender">
                    <label for="male">Male</label>
                </div>
            </div>
            <div class="form-group">
                <label for="dob">DOB: {{ form1.dob }}</label>
                <input type="date" id="dob" v-model="form1.dob">
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        step1FormDataProps: Object,
    },

    data() {
        return {
            form1: { ...this.step1FormDataProps }
        }
    },


    watch: {
    },

    methods: {
           step1DataCollect(){
                return this.form1;
           } 
    },


}


</script>
