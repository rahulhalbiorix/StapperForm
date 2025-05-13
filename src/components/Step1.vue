<template>
    <div class="step-content" id="step-1">
        <div class="step-header">
            <h2 class="step-title">Personal Information</h2>
            <p class="step-description">Please provide your personal details</p>
        </div>
        <div class="form-grid">
            <div class="form-group">
                <label for="firstName">First Name: {{ modelValue.firstname }} </label>
                <input type="text" id="firstName" placeholder="Enter your first name" :value="modelValue.firstname"
                    @input="$emit('update:modelValue', { ...modelValue, firstname: $event.target.value })">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name: {{ modelValue.lastname }} </label>
                <input type="text" id="lastName" placeholder="Enter your last name" :value="modelValue.lastname" @input="$emit('update:modelValue', {
                    ...modelValue,
                    lastname: $event.target.value
                }
                )">
            </div>
            <div class="form-group">
                <label for="email">Email: {{ modelValue.email }}</label>
                <input type="email" id="email" placeholder="Enter your email" :value="modelValue.email" @input="$emit('update:modelValue', {
                    ...modelValue,
                    email: $event.target.value
                })">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:{{ modelValue.phone }} </label>
                <input type="tel" id="phone" placeholder="Enter your phone number" :value="modelValue.phone" @input="$emit('update:modelValue', {
                    ...modelValue,
                    phone: $event.target.value
                }
                )">
            </div>
            <div class="form-group" style="margin: 10px 0px;">
                <label for="phone">Gender : <b style="color: coral;">{{ modelValue.gender }} </b> </label>
                <div style="display: flex; align-items: self-start;flex-direction: row-reverse;">
                    <input type="radio" id="female"
                     name="gender"
                    value="FEMALE"
                
                    @change="$emit('update:modelValue', {
                        ...modelValue , 
                        gender:$event.target.value
                    })">
                    <label for="female">FeMale</label>
                    <input type="radio" id="male"
                    name="gender"
                    value="MALE"
                     @change="$emit('update:modelValue' , {
                        ...modelValue ,
                        gender: $event.target.value
                     })"
                    >
                    <label for="male">Male</label>
                </div>
            </div>
            <div class="form-group">
                <label for="dob">DOB: {{ modelValue.dob }}</label>
                <input type="date" id="dob"

                 :value="modelValue.dob"
                  @input="$emit('update:modelValue' , { ... modelValue , 
                    dob:$event.target.value
                  } )"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
}


</script>
