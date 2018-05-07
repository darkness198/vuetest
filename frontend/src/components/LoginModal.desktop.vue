<template>
  <v-app dark>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn
        slot="activator"
        text="Log In"
        color="blue"
        style="overflow:hidden; "
        dark>Login
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="email" label="email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="password" label="password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="blue darken-1"
            app
            flat @click.native="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" flat @click.native="login">Log In</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
//const axios = require('axios');

export default {
  data: () => ({
    dialog: false,
    email: '',
    password: '',
    authorized: false
  }),
  methods: {
    login: function() {
      const { email, password } = this;
      const user = { email, password };
      // axios
      //   .post('localhost:1337/login', user)
      //   .then(resp => {
      //     this.authorized = true;
      //     console.log(resp);
      //     this.dialog = false;
      //   })
      //   .catch(err => console.log(err));
    }
  }
};
</script>
