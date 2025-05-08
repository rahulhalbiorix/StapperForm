<template>
     <div class="container">
      <div class="form-container">
      <h1 class="title">Multi-step Form</h1>
      <p class="subtitle">Complete all steps to proceed</p>
      
      
      <div class="step-indicator">  
        <div class="step-item">
          <div class="step-circle" :class="{'active': curruentStep == 1  || curruentStep <=3  }" >1</div>
          <span class="step-label" :class="{'activeText': curruentStep == 1}">Personal Info</span>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-circle" :class="{'active': (curruentStep  ==2 && curruentStep <=3 ) || curruentStep > 1   }" >2</div>
          <span class="step-label" :class="{'activeText': curruentStep == 2}">Address</span>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-circle" :class="{'active': curruentStep == 3  }" >3</div>
          <span class="step-label" :class="{'activeText': curruentStep == 3}">Review & Submit</span>
        </div>
      </div>
      
      </div>
      <div>
          <component :is="view"></component>
      </div>

      <div class="bothButton" >
      <button class="button" style="background-color: #cbc5c6;color: #000;font-weight: 700;"  @click="BackBtn"  >Previous</button>
      <button class="button" style="background-color: #6061ef;color: white;font-weight: 700;" @click="NextBtn" >Next</button>
      </div>
      </div>
   

</template>

<script>
export default{
    data(){
        return{
            curruentStep:1,
            view:"step1"
        }
    },
    watch:{
        curruentStep(){
            console.log(this.curruentStep);
        }
    },
     
    methods:{
        NextBtn(){
            console.log("Next button is worked");
            this.curruentStep++;
            if(this.curruentStep==1){
                 this.view = "step1";
            }
            else if(this.curruentStep==2){
                  this.view = "step2"
            }
            else if(this.curruentStep == 3){
                     this.view = "step3"
            }
            else{
                this.curruentStep = 1;
                this.view = "step1";
            }
        },
        BackBtn(){
            console.log("back button is workde")
            --this.curruentStep;
            if(this.curruentStep==1){
                 this.view = "step1";
            }
            else if(this.curruentStep==2){
                  this.view = "step2"
            }
            else if(this.curruentStep == 3){
                     this.view = "step3"
            }
            else{
                this.curruentStep = 0;
            }
        }

    }
}
</script>

<style scopped>

.active{
    background-color: #4f46e5;
    border-color: #4f46e5;
    color: white; 
}

.activeText{
    color:#4f46e5
}

</style>

