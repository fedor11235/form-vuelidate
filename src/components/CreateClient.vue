<template>
<form>

  <div>
    <input type="text" id="last_name" name="last_name" required placeholder=" " />
    <label for="last_name">Фамилия</label>
  </div>

  <div>
    <input type="text" id="first_name" name="first_name" required placeholder=" " />
    <label for="first_name">Имя</label>
  </div>

  <div>
    <input type="text" id="patronymic" name="patronymic" required placeholder=" " />
    <label for="patronymic">Отчество</label>
  </div>

  <div>
    <input type="text" id="date" name="date" required placeholder=" " />
    <label for="date">Дата Рождения</label>
  </div>

  <div>
    <input type="tale" id="tale" name="tale" required placeholder=" " />
    <label for="tale">Номер телефона</label>
  </div>

  <div class="check">
    <label for="gender">Ваш пол:</label>
    <select class="select__input" name="gender">
      <option disabled selected></option>
      <option>Мужской</option>
      <option>Женский</option>
    </select>
  </div>


  <div class="check">
    <label for="client-group">Группа клиентов:</label>
    <select class="select__input" name="client-group" multiple >
      <option>VIP</option>
      <option>Проблемные</option>
      <option>ОМС</option>
    </select>
  </div>

  <div class="check">
    <label for="doctor">Лечащий врач:</label>
    <select class="select__input" name="doctor">
      <option disabled selected></option>
      <option>Иванов</option>
      <option>Захаров</option>
      <option>Чернышева</option>
    </select>
  </div>
  
  <div class="check">
    <label for="sms">Не отправлять СМС:</label>
    <input class="check__input" type="checkbox" name="sms" required placeholder=" " />
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
      opacity: 0.4
      font-weight: bold
      position: absolute
      top: 22px
      left: 20px

    > input,
      textarea
        font-size: 1.2rem
        padding: 20px 20px 20px 50px
        opacity: 0.8

    > input
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

  .check
    padding: 30px
    background: white
    >label
      width: 100%
      padding: 20px
      opacity: 0.8
      top:0
      left:0

    >.select__input
      position: absolute
      right: 20px
      top: 0
      width: 40%
      height: 60px
      border: none

      &:focus
        outline: none

    >.select__input,
      textarea
        opacity: 0.8
        font-size: 1.2rem


    >.check__input
      position: absolute
      margin:0
      right:20px
      top: 15px
      width: 30px
      height: 30px
        
    
* 
  box-sizing: border-box
</style>
