<template>

  <div className="user-list-container">
    <div className="header">
      <h2>User List</h2>
      <div class="filter-bar">
        <input type="text" v-model="searchFirstName" placeholder="Search by name..." class="filter-input" />

        <input type="text" v-model="searchEmail" placeholder="Search by Mail..." class="filter-input" />

        <select class="filter-select" v-model="selectedGender">
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select class="filter-select" v-model="selectedState">
          <option value="">All States</option>
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
      <button class="btn btn-primary" @click="setOnQuery">Search Uesr</button>
      <button className="add-user-btn" @click="$emit('show-form')">Add User</button>
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Present Address</th>
            <th>Local Address</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody class="filtered-item" v-if="filteredUserList.length > 0">
          <tr v-for="(user, index) in filteredUserList">
            <td> {{ index + 1 }} </td>
            <td>{{ user.firstname }} </td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.dob }}</td>
            <td>{{ user.presentAdd }}</td>
            <td>{{ user.localAdd }}</td>
            <td>{{ user.state }}</td>
            <td class="actionBtn">
              <div class="ali-act-btn">
                <button class="edit-btn" @click="$emit('editData', user)"><i class="fa-regular fa-pen-to-square"
                    style="color: #fff;"></i></button>
                <button class="delete-btn" @click="$emit('deleteData', user.id)"> <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>

        </tbody>
        <tbody class="un-filtered-item" v-else>
          <tr v-for="(user, index) in users">
            <td> {{ index + 1 }} </td>
            <td>{{ user.firstname }} </td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.dob }}</td>
            <td>{{ user.presentAdd }}</td>
            <td>{{ user.localAdd }}</td>
            <td>{{ user.state }}</td>
          
            <td class="actionBtn">
              <div class="ali-act-btn">
                <button class="edit-btn" @click="$emit('editData', user)"><i class="fa-regular fa-pen-to-square"
                    style="color: #fff;"></i></button>
                <button class="delete-btn" @click="$emit('deleteData', user.id)"> <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>


</template>

<script>

export default {
  emits: ['show-form'],


  props: {
    'users': Array,

  },

  data() {
    return {
      searchFirstName: "",
      searchEmail: "",
      selectedGender: "",
      selectedState: "",
      filteredUserList: []
    }
  },

  watch: {
    '$route.query': {
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.$router.replace(
            {
              query: {
                name: this.searchFirstName,
                email: this.searchEmail,
                gender: this.selectedGender,
                state: this.selectedState
              }
            }
          );
           this.searchList(this.$route.query.name,this.$route.query.email,this.$route.query.gender,this.$route.query.state);
        }
      }
    }
  },

  mounted() {
    console.log("🔴🔴🔴🔴🔴 Mounted");
    this.searchList(this.$route.query.name,this.$route.query.email,this.$route.query.gender,this.$route.query.state);
  },    
   
 
  methods: {
    setOnQuery() {
      console.log("🟢🔴🔵 Data set on query params")
      this.$router.replace(
        {
          query: {
            name: this.searchFirstName,
            email: this.searchEmail,
            gender: this.selectedGender,
            state: this.selectedState
          }
        }
      )

    },

   searchList(queryName, queryEmail , queryGender , queryState) {
          
    console.log(queryName, queryEmail , queryGender , queryState);
      let filteredList = this.users
    
      if (queryName) {
        filteredList = filteredList.filter(item => {
          return (item.firstname.toLowerCase().includes(queryName.toLowerCase()) ||
            item.lastname.toLowerCase().includes(queryName.toLowerCase()))
        })
      }

      if (queryEmail) {
        filteredList = filteredList.filter(item => {
          return item.email.toLowerCase().includes(queryEmail.toLowerCase());
        })
      }
      if (queryGender) {
        filteredList = filteredList.filter(item => {
          return (item.gender.toLowerCase() === queryGender.toLowerCase())
        })
      }
      if (queryState) {
        filteredList = filteredList.filter(item => {
          return (item.state.toLowerCase() === queryState.toLowerCase())
        })
      }

      this.filteredUserList = filteredList

    }
  }
}


</script>



<style scopped>
.filtered-item {
  border: 5px solid red;
}

.user-list-container {
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  max-width: 1200px;
  margin: 2rem auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #F0F0F0;
  padding-bottom: 1rem;
}

.header h2 {
  margin: 0;
  font-size: 1.75rem;
  color: #333;
  font-weight: 600;
  position: relative;
}

.header h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  border-radius: 3px;
}

.add-user-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);
}

.add-user-btn:hover {
  background: linear-gradient(135deg, #4F46E5, #7C3AED);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(99, 102, 241, 0.35);
}

.add-user-btn:active {
  transform: translateY(0);
}

.table-container {
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  /* Changed to collapse for better alignment */
  overflow: hidden;
}

th,
td {
  padding: 1rem;
  text-align: center;
  /* Center align for both headers and data */
  border: 1px solid #e0e0e0;
  /* Add border for better separation */
}

th {
  background-color: #222831;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  position: sticky;
  top: 0;
}

tbody tr {
  transition: background-color 0.3s;
}

tbody tr:hover {
  background-color: #A6D6D6;
}

tbody tr:nth-child(even) {
  background-color: #FAFAFA;
}

tbody tr:nth-child(even):hover {
  background-color: #b299de;
}

tbody td {
  color: #4A5568;
  font-size: 0.925rem;
}


@media (max-width: 768px) {
  .user-list-container {
    padding: 1rem;
    margin: 1rem;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .add-user-btn {
    width: 100%;
  }
}

/* Style for Edit button */
.edit-btn {
  background-color: #008000;
  /* Green */
  color: white;
  border: none;
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #45a049;
}

/* Style for Delete button */
.delete-btn {
  background-color: #f44336;
  /* Red */
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.ali-act-btn {
  display: flex;
}

.filter-bar {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-input {
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  min-width: 200px;
  flex: 1 1 200px;
}

.filter-select {
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
  min-width: 180px;
  flex: 1 1 180px;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #6366F1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
}
</style>
