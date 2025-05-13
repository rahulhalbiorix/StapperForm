<template>
  <List @show-form="Showstepper = !Showstepper" v-if="Showstepper == false"  :users="UserList"  ></List>
  <Stepper v-if="Showstepper" @send-data-renderList="handelAddUser"  ></Stepper>
</template>
<script>
export default {
  data() {
    return {
       Showstepper:false, 

       UserList:[{
        firstname:"Aman",
        lastname:"Kumar",
        email:"aman@gmail.com",
        phone:"7778889990",
        gender:'Male',
        dob:'09/10/2002',
        presentAdd:'Ahmdebada-382935',
        localAdd:'Surendranagar-363030',
        state:'Gujarat'
       }]
    }
  },

  methods:{
    handelAddUser(UserData){
      // console.log("handle add user is worked", UserData );
      this.UserList.push(UserData);
      this.Showstepper = false
    }
  }
}</script>

