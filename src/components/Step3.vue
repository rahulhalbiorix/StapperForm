<template>
    <div class="step-content hidden" id="step-4">
      <div class="step-header">
        <h2 class="step-title">Review & Submit</h2>
        <p class="step-description">Please review your information before submitting</p>
      </div>
  
      <div class="review-grid">
        <div class="review-group">
          <h3>Personal Information</h3>
          <p><strong>First Name:</strong> {{ step1DataProps.firstname }}</p>
          <p><strong>Last Name:</strong>{{ step1DataProps.lastname }} </p>
          <p><strong>Email:</strong>{{ step1DataProps.email  }}</p>
          <p><strong>Phone Number:</strong>{{ step1DataProps.phone  }}</p>
          <p><strong>Gender:</strong>{{  step1DataProps.gender }}</p>
          <p><strong>Date of Birth:</strong>{{  step1DataProps.dob }}</p>
        </div>
  
        <div class="review-group">
          <h3>Address Information</h3>
          <p><strong>Present Address:</strong>{{ step2DataProps.presetAddress }}</p>
          <p><strong>Local Address:</strong> {{ step2DataProps.localAddress }} </p>
          <p><strong>State:</strong> {{ step2DataProps.State  }} </p>
        </div>
      </div>
  
    </div>
  </template>

<script>
export default{
   props:{
    step1DataProps : Object,
    step2DataProps : Object
   },
  data(){
    return{
      
    }
  },
} 
</script>

  <style scoped >

.review-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid #cbc5c6;
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.review-group {
  flex: 1 1 45%;
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.review-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
}

.review-group p {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.95rem;
}

.review-group strong {
  color: #1a202c;
  font-weight: 600;
}


.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.form-actions button {
  padding: 0.625rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-actions button[type="button"] {
  background-color: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
}

.form-actions button[type="button"]:hover {
  background-color: #edf2f7;
}

.form-actions button[type="submit"] {
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
}

.form-actions button[type="submit"]:hover {
  background: linear-gradient(to right, #4338ca, #4f46e5);
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
}


@media (max-width: 640px) {
  .review-grid {
    flex-direction: column;
    gap: 1rem;
  }

  .form-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .form-actions button {
    width: 100%;
    justify-content: center;
  }
}

</style>