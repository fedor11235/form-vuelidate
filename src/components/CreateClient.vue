<template>
<form action="#0">

  <div>
    <input type="text" id="first_name" name="first_name" required placeholder=" " />
    <label for="first_name">First Name</label>
  </div>
  
  <div>
    <input type="text" id="last_name" name="last_name" required placeholder=" " />
    <label for="last_name">Last Name</label>
  </div>
  
  <div>
    <input type="email" id="email" name="email" required placeholder=" " />
    <label for="email">Email Address</label>
    <div class="requirements">
      Must be a valid email address.
    </div>
  </div>
  
  <div>
    <input type="password" id="password" name="password" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" />
    <label for="password">Password</label>
    <div class="requirements">
      Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.
    </div>
  </div>
  
  <input type="submit" value="Sign Up" />

</form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  name: "CreateClient",
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
form 
  max-width: 450px
  margin: 0 auto

  > div 
    position: relative
    background: white
    border-bottom: 1px solid #ccc

    > label 
      opacity: 0.3
      font-weight: bold
      position: absolute
      top: 22px
      left: 20px
    
    > input[type="text"],
    > input[type="email"],
    > input[type="password"]
      width: 100%
      border: 0
      padding: 20px 20px 20px 50px
      background: #eee
      
      &:focus 
        outline: 0
        background: white
        
        & + label 
          opacity: 0
        
      &:valid 
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg)
        background-size: 20px
        background-repeat: no-repeat
        background-position: 20px 20px
        & + label 
          opacity: 0
        
      &:invalid:not(:focus):not(:placeholder-shown) 
        background: pink
        & + label 
          opacity: 0
        
      &:invalid:focus:not(:placeholder-shown) 
        & ~ .requirements 
          max-height: 200px
          padding: 0 30px 20px 50px
        
    .requirements 
      padding: 0 30px 0 50px
      color: #999
      max-height: 0
      transition: 0.28s
      overflow: hidden
      color: red
      font-style: italic
    
  input[type="submit"] 
    display: block
    width: 100%
    margin: 20px 0
    background: #41D873
    color: white
    border: 0
    padding: 20px
    font-size: 1.2rem
    
* 
  box-sizing: border-box
</style>
