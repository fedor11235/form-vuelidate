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

    <div class="check">
      <label>Дата Рождения:</label>
      <input
        type="date"
        name="date"
        class="select__input"
        v-model.trim="$v.form.date.$model"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in dateError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div class="check">
      <label>Номер телефона с 7:</label>
      <input
        type="tale"
        name="tale"
        class="select__input"
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

    <br>

    <div>
      <input
        type="text"
        name="index"
        v-model.trim="$v.form.index.$model"
        placeholder="Индекс"
      />
    </div>

    <div>
      <input
        type="text"
        name="country"
        v-model.trim="$v.form.country.$model"
        placeholder="Страна"
      />
    </div>

    <div>
      <input
        type="text"
        name="region"
        v-model.trim="$v.form.region.$model"
        placeholder="Регион"
      />
    </div>

    <div>
      <input
        type="text"
        name="city"
        v-model.trim="$v.form.city.$model"
        place
        placeholder="Город"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in cityError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div>
      <input
        type="text"
        name="street"
        v-model.trim="$v.form.street.$model"
        placeholder="Улица"
      />
    </div>

    <div>
      <input
        type="text"
        name="home"
        v-model.trim="$v.form.home.$model"
        placeholder="Дом"
      />
    </div>

    <br>

    <div class="check">
      <label>Тип документа:</label>
      <select
        class="select__input"
        name="typeDocument"
        v-model.trim="$v.form.typeDocument.$model"
      >
        <option>Паспорт</option>
        <option>Свидетельство о рождении</option>
        <option>Вод. удостоверение</option>
      </select>
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in typeDocumentError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <div>
      <input
        type="text"
        name="documentSeries"
        v-model.trim="$v.form.documentSeries.$model"
        placeholder="Серия"
      />
    </div>

    <div>
      <input
        type="text"
        name="documentNumber"
        v-model.trim="$v.form.documentNumber.$model"
        placeholder="Номер"
      />
    </div>

    <div>
      <input
        type="text"
        name="IssuedBy"
        v-model.trim="$v.form.IssuedBy.$model"
        placeholder="Кем выдан"
      />
    </div>

    <div class="check">
      <label>Дата выдачи:</label>
      <input
        type="date"
        name="dateIssue"
        class="select__input"
        v-model.trim="$v.form.dateIssue.$model"
      />
      <div class="error" v-if="$v.$error && $v.$invalid">
        <div v-for="(elem, index) in dateIssueError" :key="index">
          <span>{{ elem }}</span>
        </div>
      </div>
    </div>

    <input  :disabled="$v.$error && $v.$invalid" type="submit" value="Отправить" @click="onSubmit"/>
  </form>
</template>

<script>
import { required, minLength} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import {taleValidator, dateValidator} from '@/functions/validators'


export default {
  name: 'CreateClient',
  mixins: [validationMixin],

  data() {
    return {
      form: {
        lastName: '',
        firstName: '',
        patronymic: '',
        date: '',
        tale: '',
        gender: '',
        clientGroup: [],
        doctor: '',
        sms: false,

        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        home: '',

        typeDocument: '',
        documentSeries: '',
        documentNumber: '',
        IssuedBy: '',
        dateIssue: ''
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

      index:{},
      country:{},
      region:{},
      city:{ required },
      street:{},
      home:{},

      typeDocument:{ required },
      documentSeries:{},
      documentNumber:{},
      IssuedBy:{},
      dateIssue:{ 
        required,
        dateValidator 
      }
    },
  },
  computed: {
    lastNameError(){
      let errors = [];
      if(!this.$v.form.lastName.required) errors.push('Обязательно для заполнения!')
      if(!this.$v.form.lastName.minLength) errors.push('Не менее двух знаков!')
      return errors
      
    },
    firstNameError(){
      let errors = [];
      if(!this.$v.form.firstName.required) errors.push('Обязательно для заполнения!')
      if(!this.$v.form.firstName.minLength) errors.push('Не менее двух знаков!')
      return errors
    },

    patronymicError(){
      let errors = [];
      if(!this.$v.form.patronymic.minLength) errors.push('Не менее двух знаков!')
      return errors
    },

    dateError(){
      let errors = [];
      if(!this.$v.form.date.required) errors.push('Обязательно для заполнения!')
      if(!this.$v.form.date.dateValidator)  errors.push('Вы указали неверную дату!')

      return errors
    },
    taleError(){
      let errors = [];
      if(!this.$v.form.tale.required) errors.push('Обязательно для заполнения!')
      if(!this.$v.form.tale.taleValidator) errors.push('Номер указан не верно!')
      return errors
    },

    clientGroupError(){
      let errors = [];
      if(!this.$v.form.clientGroup.required) errors.push('Обязательно для заполнения!')
      return errors
    },

    cityError(){
      let errors = [];
      if(!this.$v.form.city.required) errors.push('Обязательно для заполнения!')
      return errors
    },

    typeDocumentError(){
      let errors = [];
      if(!this.$v.form.typeDocument.required) errors.push('Обязательно для заполнения!')
      return errors
    },

    dateIssueError(){
      let errors = [];
      if(!this.$v.form.dateIssue.dateValidator) errors.push('Вы указали неверную дату!')
      return errors
    },

  },
  methods: {
    onSubmit() {

      this.$v.$touch()
      if (!this.$v.$invalid){
        alert('Форма успешно отправлена!')
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
      padding: 20px 20px 20px 5%
      opacity: 0.8
      font-size: 1rem
      width: 50%
      font-weight: bold
      top: 22px
      left: 20px

    > input,
    textarea
      font-size: 1rem

    > input
      width: 100%
      border: 0
      padding: 5%

      &:focus
        outline: 0

    .error
      padding-left: 5%
      color: #999
      color: red
      font-style: italic

  input[type="submit"]
    width: 100%
    margin: 20px 0
    background: #41D873
    color: white
    border: 0
    padding: 20px
    font-size: 1rem

  .check
    >.select__input
      display: inline-block
      position: relative
      width: 45%
      height: 60px
      border: none
      padding: 0
      font-size: 1rem

      &:focus
        outline: none

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
