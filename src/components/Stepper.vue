<template>
    <div class="container">
        <div class="form-container">
            <h1 class="title">Multi-step Form</h1>
            <p class="subtitle">Complete all steps to proceed</p>

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
            <component :is="view" :ref="currentStepRef" :step1DataProps="step1FormData" :step2DataProps="step2FormData"  >
            </component>
        </div>

        <div class="bothButton">
            <button v-if="curruentStep > 1" class="button"
                style="background-color: #cbc5c6;color: #000;font-weight: 700;" @click="BackBtn">Back</button>
            <button v-if="curruentStep < 3" class="button"
                style="background-color: #6061ef;color: white;font-weight: 700;"
                @click="handleNextSubmitBtn">Next</button>
            <button v-else class="button" style="background-color: green;color: white;font-weight: 700;"
                @click="handleFinalSubmit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            curruentStep: 1,
            view: "step1",
            step1FormData: {},
            step2FormData: {}
        }
    },
    computed: {
        currentStepRef() {
            // console.log("currentStepRef is computed")
            return this.view + 'Ref';
        }
    },
    watch: {
        // curruentStep() {
        //     console.log("Curruent Step is", this.curruentStep);
        // },
        // step1FormData() {
        //     console.log("step 1 Form data : ", this.step1FormData);
        // },
        // step2FormData() {
        //     console.log("Step 2 Form data: ", this.step2FormData);
        // }
    },

    methods: {
        handleNextSubmitBtn() {
            // console.log(this.$refs.step1Ref);
            // console.log("Both click + submit handled");
            if (this.curruentStep == 1) {
                const step1Data = this.$refs.step1Ref.Step1DataCollector();
                this.step1FormData = step1Data;
                // console.log("step 1 form data******* ", this.step1FormData);
                // console.log("If is worked!");
                this.NextBtn();
            } else if (this.curruentStep == 2) {
                const step2Data = this.$refs.step2Ref.Step2DataCollectior();
                this.step2FormData = step2Data;
                // console.log("step 2 form data******* ", this.step2FormData);
                // console.log("else if worked");
                this.NextBtn();
            } else {
                this.NextBtn();
            }
        },

        NextBtn() {
            // console.log("NextButton Method is Work");
            this.curruentStep++;
            if (this.curruentStep == 1) {
                this.view = "step1";
            } else if (this.curruentStep == 2) {
                this.view = "step2"
            } else if (this.curruentStep == 3) {
                this.view = "step3"
            } else {
                this.curruentStep = 1;
                this.view = "step1";
            }
        },
        BackBtn() {
            // console.log("backButton Method is worked")
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
