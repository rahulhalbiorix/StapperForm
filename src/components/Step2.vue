<template>
  <div class="step-content hidden" id="step-2">
    <div class="step-header">
      <h2 class="step-title">Address Information</h2>
      <p class="step-description">Please provide your address details</p>
    </div>
  
    <div class="form-grid">
      <div class="form-group full-width">
        <label for="address">Present Address: {{ form2.presentAdd }} </label>
        <input type="text" id="address" placeholder="Enter your Present address" v-model="form2.presentAdd">
      </div>
      <div class="form-group">
        <label for="city">Local Address: {{ form2.localAdd }}</label>
        <input type="text" id="city" placeholder="Enter your Local Address" v-model="form2.localAdd">
      </div>
      <div class="form-group">
        <div class="addressCheckbox">
          <input type="checkbox" v-model="form2.checked">
          <label> <b>Same as Present Address</b> </label>
        </div>
      </div>
      <div class="form-group">
        <label for="state">State : {{ form2.state }}</label>
        <select id="state" v-model="form2.state">
          <option value="" disabled selected>Select state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>

        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    step2FormDataProps: Object
  },

  data() {
    return {
      form2: {},
    }
  },
  mounted() {
    this.form2 = { ...this.step2FormDataProps }
  },
  watch: {
    'form2.checked'(newValue) {
      if (newValue) {
        this.form2.localAdd = this.form2.presentAdd;
      } else {
        this.form2.localAdd = '';
      }
    },
    'form2.presentAdd'(newValue) {
      if (this.form2.checked) {
        this.form2.localAdd = newValue;
      }
    }
  },

  methods: {
    step2DataCollect() {
      return this.form2; 
    }
  },

}

</script>

<style scoped>
.addressCheckbox {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 0.5rem;
}

.addressCheckbox label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4A5568;
}

.addressCheckbox input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.375rem;
  appearance: none;
  cursor: pointer;
  background-color: white;
  position: relative;
}

.addressCheckbox input[type="checkbox"]:checked {
  background-color: #4F46E5;
  border-color: #4F46E5;
}

.addressCheckbox input[type="checkbox"]:checked::after {
  content: "✓";
  color: white;
  position: absolute;
  top: -0.1rem;
  left: 0.25rem;
  font-size: 0.9rem;
}

.addressCheckbox input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}
</style>