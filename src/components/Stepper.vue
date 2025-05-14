<template>
    <div class="container">
        <div class="form-container">
            <h1 class="title">Multi-step Form</h1>
            <p class="subtitle">Complete all steps to proceed</p>
     {{ userEditprops }}
            <div class="step-indicator">
                <div class="step-item">
                    <div class="step-circle" :class="{ 'active': curruentStep >= 1 }">1</div>
                    <span class="step-label" :class="{ 'activeText': curruentStep == 1 }">Personal Info</span>
                </div>
                <div class="step-connector"></div>
                <div class="step-item">
                    <div class="step-circle" :class="{ 'active': curruentStep >= 2 }">2</div>
                    <span class="step-label" :class="{ 'activeText': curruentStep == 2 }">Address</span>
                </div>
                <div class="step-connector"></div>
                <div class="step-item">
                    <div class="step-circle" :class="{ 'active': curruentStep == 3 }">3</div>
                    <span class="step-label" :class="{ 'activeText': curruentStep == 3 }">Review & Submit</span>
                </div>
            </div>
        </div>
        <div>
            <component :is="view" v-model="currentFormData" v-bind="CurruentProps"  >
            </component>
        </div>

        <div class="bothButton">
            <button v-if="curruentStep > 1" class="button"
                style="background-color: #cbc5c6;color: #000;font-weight: 700;" @click="BackBtn">Back</button>
            <button v-if="curruentStep < 3" class="button"
                style="background-color: #6061ef;color: white;font-weight: 700;"
                @click="handleNextSubmitBtn">Next</button>
            <button v-else class="button" style="background-color: green;color: white;font-weight: 700;"
                @click="handleFinalSubmit" >Submit</button>
        </div>
    </div>
</template>

<script>
export default {
     props:{
        userEditprops:Object
     },


    data() {
        return {
            curruentStep: 1,
            view: "step1",
            step1FormData: {
                firstname: this.userEditprops.firstname ||  ""  ,
                lastname: this.userEditprops.lastname ||  "",
                email:  this.userEditprops.email ||  "",
                phone: this.userEditprops.phone ||  "",
                gender: this.userEditprops.gender || "",
                dob: this.userEditprops.dob ||  "",
            },
            step2FormData: {
                presentAdd: this.userEditprops.presentAdd ||  "",
                localAdd: this.userEditprops.localAdd || "",
                checked: this.userEditprops.checked ||  false,
                state: this.userEditprops.state ||  "",
            },
    
        }
    },
    watch:{
          'step2FormData.checked'(newValue) {

      if (newValue) {
        this.step2FormData.localAdd = this.step2FormData.presentAdd;
      }
    },
    },

    computed: {

        currentFormData: {
            get() {
                return this.curruentStep === 1 ? this.step1FormData : this.step2FormData;
            },
            set(value) {
              
                if (this.curruentStep === 1) {
                    this.step1FormData = value;
                } else {
                    this.step2FormData = value;
                }
            }
        },

        CurruentProps() {
            if (this.view == "step1") {
                return { step1FormDataProps: this.step1FormData }
            }
            else if (this.view == "step2") {
                return { step2FormDataProps: this.step2FormData }
            }
            else if (this.view == "step3") {
                return {
                    step1FormDataProps: this.step1FormData,
                    step2FormDataProps: this.step2FormData
                }
            }
        }
    },

    methods: {

        handleNextSubmitBtn() {
            if (this.curruentStep == 1) {
                this.curruentStep++;
                this.view = "step2";
            } else if (this.curruentStep == 2) {
                this.curruentStep++;
                this.view = "step3";

            } else {
                this.curruentStep = 1;
                this.view = "step1";
            }

        },
        BackBtn() {
            --this.curruentStep;
            if (this.curruentStep == 1) {
                this.view = "step1";
            } else if (this.curruentStep == 2) {
                this.view = "step2"
            } else if (this.curruentStep == 3) {
                this.view = "step3"
            } else {
                this.curruentStep = 0;
            }
        },
        handleFinalSubmit() {
            alert("Data Submitteed Successfully");
         
             if(this.userEditprops['action']){
                console.log("if is worked")
                 this.$emit('send-data-renderList' , {...this.step1FormData,...this.step2FormData});
                }
                else{
                    console.log("else is worked");
                 this.$emit('send-data-renderList' , {...this.step1FormData,...this.step2FormData , id: Date.now()});
             }

               

        }
    }
}
</script>

<style>
.active {
    background-color: #4f46e5;
    border-color: #4f46e5;
    color: white;
}

.activeText {
    color: #4f46e5
}
</style>
