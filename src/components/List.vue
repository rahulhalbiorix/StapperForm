<template>

  <div className="user-list-container">
    <div className="header">
      <h2>User List</h2>  
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
        <tbody>
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
            <!-- <td>{{ user.id }}</td> -->
            <td class="actionBtn">
              <div class="ali-act-btn" >
                <button class="edit-btn"   @click="$emit('editData' , user)"   ><i class="fa-regular fa-pen-to-square" style="color: #fff;"></i></button>
                <button class="delete-btn"  @click="$emit('deleteData', user.id)" > <i class="fa-solid fa-trash"></i>  </button>
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
  
  props:{
    'users':Array
  },

  data() {
    return {

    }
  },
  
}


</script>



<style scopped>
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
  border-collapse: collapse; /* Changed to collapse for better alignment */
  overflow: hidden;
}

th,
td {
  padding: 1rem;
  text-align: center; /* Center align for both headers and data */
  border: 1px solid #e0e0e0; /* Add border for better separation */
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

.ali-act-btn{
  display: flex;
}


</style>
