<template>
  <form>
    <div>
      <input
        type="text"
        name="last_name"
        v-model.trim="$v.form.lastName.$model"
        placeholder="Фамилия"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in lastNameError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div>
      <input
        type="text"
        name="first_name"
        v-model.trim="$v.form.firstName.$model"
        placeholder="Имя"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in firstNameError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div>
      <input
        type="text"
        name="patronymic"
        v-model.trim="$v.form.patronymic.$model"
        placeholder="Отчество"
      />
    </div>

    <div>
      <input
        type="date"
        name="date"
        v-model.trim="$v.form.date.$model"
        placeholder="Дата Рождения"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in dateError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div>
      <input
        type="tale"
        name="tale"
        v-model.trim="$v.form.tale.$model"
        placeholder="Номер телефона"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in taleError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div class="check">
      <label>Ваш пол:</label>
      <select
        class="select__input"
        name="gender"
        v-model.trim="$v.form.gender.$model"
      >
        <option disabled selected></option>
        <option>Мужской</option>
        <option>Женский</option>
      </select>
    </div>

    <div class="check">
      <label>Группа клиентов:</label>
      <select
        class="select__input"
        name="client-group"
        multiple
        v-model.trim="$v.form.clientGroup.$model"
      >
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
      </select>
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in clientGroupError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div class="check">
      <label>Лечащий врач:</label>
      <select
        class="select__input"
        name="doctor"
        v-model.trim="$v.form.doctor.$model"
      >
        <option>Иванов</option>
        <option>Захаров</option>
        <option>Чернышева</option>
      </select>
    </div>

    <div class="check">
      <label>Не отправлять СМС:</label>
      <div class="select__input">
        <input
          
          type="checkbox"
          name="sms"
          v-model.trim="$v.form.sms.$model"
        />
      </div>
    </div>

    <input  :disabled="$v.$error && $v.$invalid" type="submit" value="Отправить" @click="onSubmit"/>
  </form>
</template>

<script>
import { required, minLength} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import {taleValidator, dateValidator} from "@/functions/validators"

export default {
  name: "CreateClient",
  mixins: [validationMixin],


  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        patronymic: "",
        date: "",
        tale: "",
        gender: "",
        clientGroup: [],
        doctor: "",
        sms: false,
      }
    }
  },
  validations: {
    form: {
      lastName: { 
        required, 
        minLength:minLength(2) 
        },
      firstName: { 
        required,
        minLength:minLength(2) 
         },
      patronymic: { 
        minLength:minLength(2) 
         },
      date: { 
        required,
        dateValidator
        },
      tale: { 
        required,
        taleValidator
        },
      gender: { },
      clientGroup: { required },
      doctor: {  },
      sms: {  },
    },
  },

  computed: {
    lastNameError(){
      let errors = [];
      if(!this.$v.form.lastName.required) errors.push("Обязательно для заполнения!")
      if(!this.$v.form.lastName.minLength) errors.push("Не менее двух знаков!")
      return errors
      
    },
    firstNameError(){
      let errors = [];
      if(!this.$v.form.firstName.required) errors.push("Обязательно для заполнения!")
      if(!this.$v.form.firstName.minLength) errors.push("Не менее двух знаков!")
      return errors
    },

    patronymicError(){
      let errors = [];
      if(!this.$v.form.patronymic.minLength) errors.push("Не менее двух знаков!")
      return errors
    },

    dateError(){
      let errors = [];
      if(!this.$v.form.date.required) errors.push("Обязательно для заполнения!")
      if(!this.$v.form.date.dateValidator)  errors.push("Вы указали неверную дату!")

      return errors
    },
    taleError(){
      let errors = [];
      if(!this.$v.form.tale.required) errors.push("Обязательно для заполнения!")
      if(!this.$v.form.tale.taleValidator) errors.push("Номер указан не верно!")
      return errors
    },

    clientGroupError(){
      let errors = [];
      if(!this.$v.form.clientGroup.required) errors.push("Обязательно для заполнения!")
      return errors
    },
  },

  methods: {
    onSubmit() {

      this.$v.$touch()
      if (!this.$v.$invalid){
        alert("Форма успешно отправлена!")
      }
    }
  }
}

</script>

<style lang="sass" scoped>
form
  max-width: 450px
  margin: 0 auto

  > div
    background: white
    border-bottom: 1px solid #ccc

    > label
      float: left
      padding: 20px 20px 20px 50px
      opacity: 0.8
      width: 60%
      font-weight: bold
      top: 22px
      left: 20px

    > input,
    textarea
      font-size: 1.2rem
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
        & ~ .error
          max-height: 200px
          padding: 0 30px 20px 50px

    .error
      padding: 0 30px 0 50px
      color: #999
      transition: 0.28s
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
    background: white

    > .error

      bottom: 0
      left: 0

    >.select__input
      display: inline-block
      position: relative
      width: 35%
      height: 60px
      border: none

      &:focus
        outline: none

    >.select__input,
    textarea
      opacity: 0.8
      font-size: 1.2rem

    .select__input
      >input
        position: absolute
        right: 0
        top: 15px
        width: 30px
        height: 30px

    >.check__input
      position: absolute
      margin: 0
      right: 20px
      top: 15px
      width: 30px
      height: 30px

*
  box-sizing: border-box
</style>
