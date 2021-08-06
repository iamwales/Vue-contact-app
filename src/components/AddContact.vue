<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="contact.name"
          name="name"
        />
      </div>

      <div class="form-group mt-3">
        <label for="phone">Phone Number</label>
        <input
          class="form-control"
          id="phone"
          type="number"
          required
          v-model="contact.phone"
          name="phone"
        />
      </div>

      <p class="text-red mt-3" v-if="error">{{ error }}</p>

      <button @click="saveContact" class="btn btn-success mt-2">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newContact">Add</button>
    </div>
  </div>
</template>

<script>
import ContactDataService from "../services/ContactDataService";

export default {
  name: "add-contact",
  data() {
    return {
      contact: {
        name: "",
        phone: "",
      },
      submitted: false,
      error: "",
    };
  },
  methods: {
    saveContact() {
      if (!this.contact.name) {
        this.error = "Please add contact name";
      } else if (!this.contact.phone) {
        this.error = "Please add contact phone number";
      } else {
        this.error == "";
        var data = {
          name: this.contact.name,
          phone: this.contact.phone,
        };

        ContactDataService.create(data)
          .then(() => {
            console.log("Created new item successfully!");
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    newContact() {
      this.submitted = false;
      this.contact = {
        name: "",
        phone: "",
      };
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.text-red {
  color: red;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield !important;
}
</style>
