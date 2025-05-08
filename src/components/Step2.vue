<template>
     <div class="step-content hidden" id="step-2">
          <div class="step-header">
            <h2 class="step-title">Address Information</h2>
            <p class="step-description">Please provide your address details</p>
          </div>
          
          <div class="form-grid">
            <div class="form-group full-width">
              <label for="address">Street Address</label>
              <input type="text" id="address" placeholder="Enter your street address">
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" placeholder="Enter your city">
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <select id="state">
                <option value="" disabled selected>Select state</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
              </select>
            </div>
            <div class="form-group">
              <label for="zipCode">ZIP Code</label>
              <input type="text" id="zipCode" placeholder="Enter your ZIP code">
            </div>
          </div>
        </div>
</template>