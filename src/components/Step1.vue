<template>
    <div class="step-content" id="step-1">
        <div class="step-header">
            <h2 class="step-title">Personal Information</h2>
            <p class="step-description">Please provide your personal details</p>
        </div>

        <div class="form-grid">
            <div class="form-group">
                <label for="firstName">First Name: {{ firstname }} </label>
                <input type="text" id="firstName" placeholder="Enter your first name" v-model="firstname">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name: {{ lastname }} </label>
                <input type="text" id="lastName" placeholder="Enter your last name" v-model="lastname">
            </div>
            <div class="form-group">
                <label for="email">Email: {{ email }}</label>
                <input type="email" id="email" placeholder="Enter your email" v-model="email">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:{{ phone }} </label>
                <input type="tel" id="phone" placeholder="Enter your phone number" v-model="phone">
            </div>
            <div class="form-group" style="margin: 10px 0px;">
                <label for="phone">Gender : <b style="color: coral;">{{ gender }} </b> </label>
                <div style="display: flex; align-items: self-start;flex-direction: row-reverse;">
                    <input type="radio" id="female" value="FEMALE" v-model="gender">
                    <label for="female">FeMale</label>
                    <input type="radio" id="male" value="MALE" v-model="gender">
                    <label for="male">Male</label>
                </div>
            </div>
            <div class="form-group">
                <label for="dob">DOB: {{ dob }}</label>
                <input type="date" id="dob" v-model="dob">
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        step1DataProps: Object
    },

    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            gender: "",
            dob: "",

        }
    },
    mounted() {
        this.ReRenderFormData();
        console.log(this.step1DataProps);
    },

    watch: {
        step1FormData() {
            console.log("watch step1 Form data", this.step1FormData);
        }
    },

    methods: {

        Step1DataCollector() {


            //store all data into Step1DataObject (key , value) pair   
            const Step1DataObject = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone,
                gender: this.gender,
                dob: this.dob
            }

            return Step1DataObject;
        },
        ReRenderFormData() {
            console.log("ReRenderForm data is worked");
            if (this.step1DataProps) {
                this.firstname = this.step1DataProps.firstname || "";
                this.lastname = this.step1DataProps.lastname || "";
                this.email = this.step1DataProps.email || "";
                this.phone = this.step1DataProps.phone || "";
                this.gender = this.step1DataProps.gender || "";
                this.dob = this.step1DataProps.dob || "";
            }
        }

    },


}


</script>
