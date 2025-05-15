<template>
  <div class="step-content hidden" id="step-4">
    <div class="step-header">
      <h2 class="step-title">Review & Submit</h2>
      <p class="step-description">Please review your information before submitting</p>
    </div>

    <div class="review-grid">
      <div class="review-group">
        <h3>Personal Information</h3>
        <p><strong>First Name: </strong> {{ step1FormDataProps.firstname }}</p>
        <p><strong>Last Name:</strong>{{ step1FormDataProps.lastname }} </p>
        <p><strong>Email:</strong>{{ step1FormDataProps.email }}</p>
        <p><strong>Phone Number:</strong>{{ step1FormDataProps.phone }}</p>
        <p><strong>Gender:</strong>{{ step1FormDataProps.gender }}</p>
        <p><strong>Date of Birth:</strong>{{ step1FormDataProps.dob }}</p>
      </div>

      <div class="review-group">
        <h3>Address Information</h3>
        <address><strong>Present Address:</strong>{{ step2FormDataProps.presentAdd }}</address>
        <address><strong>Local Address:</strong> {{ step2FormDataProps.localAdd }} </address>
        <address><strong>State:</strong> {{ step2FormDataProps.state }} </address>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    step1FormDataProps: Object,
    step2FormDataProps: Object
  },
} 
</script>

<style scoped>
strong {
  margin-right: 10px;
}


.review-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  /* Lighter border for a softer look */
  padding: 1.5rem;
  /* Increased padding for more space */
  border-radius: 8px;
  /* Rounded corners */
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* Soft shadow for depth */
}

.review-group {
  flex: 1 1 45%;
  background-color: #f9fafb;
  /* Slightly lighter background */
  padding: 1.5rem;
  /* Increased padding */
  border-radius: 8px;
  /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Soft shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* Smooth transition */
}

.review-group:hover {
  transform: translateY(-2px);
  /* Lift effect on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  /* Deeper shadow on hover */
}

.review-group h3 {
  font-size: 1.25rem;
  /* Slightly larger font size */
  font-weight: 700;
  /* Bolder font weight */
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