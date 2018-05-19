<template>
  <n3-container fluid class="vueApp">
    <n3-row class="topbar outline">
      <n3-column :col='10'>
        <n3-button class='fab'><n3-icon type="plus"></n3-icon></n3-button>
        <n3-button class='noBorder'><n3-icon type="undo"></n3-icon></n3-button>
        <n3-button class='noBorder'><n3-icon type="repeat"></n3-icon></n3-button>
        <n3-button class='fab'><n3-icon type="info"></n3-icon></n3-button>
      </n3-column>
      <n3-column :col='2'>
          <n3-button class="noBorder"><n3-icon type="eye"></n3-icon></n3-button>
          <n3-button type="primary"><strong>Publish...</strong></n3-button>
          <n3-button type="warning"><n3-icon type='cog'></n3-icon></n3-button>
          <n3-button class="noBorder"><n3-icon type='ellipsis-v'></n3-icon></n3-button>
      </n3-column>
    </n3-row>

    <n3-row>
      <n3-column :col="9">
          
      </n3-column>
      <n3-column :col="3">
          <n3-tabs :value="1">
            <n3-tab header="Document" badge="1">
              <n3-accordion >
                <n3-panel :is-open="true" index="1" >
                  <div slot="header">Status & Visibility <n3-icon type="chevron-down"></n3-icon></div>
                  <p>Visibility <a href="#" class="simple">Public</a></p> 
                  
                  <div class="clearfix">
                    <n3-form-item label="Block Name" :label-col="12">
                      <n3-input show-clean name="name" :rules="[{type:'required'}]"> </n3-input>
                  </n3-form-item>
                  </div>
                </n3-panel>
                <n3-panel index="2" >
                  <div slot="header">Panel #2 <n3-icon type="chevron-down"></n3-icon></div>
                  <p>...</p>
                  <p>...</p>
                  <p>...</p>
                  </n3-panel>
              </n3-accordion>
            </n3-tab>
            <n3-tab header="Block">
             <n3-accordion>
                <n3-panel :is-open="true" index="1">
                  <div slot="header">Panel #1</div>
                  <n-form>
                    <n3-select v-model="arr" :options="fruitOptions" :search="true" multiple extra width='300px'></n3-select>  
                  <n3-select v-model="single">
                    <n3-option value="Apple">Apple</n3-option>
                    <n3-option value="Banana">Banana</n3-option>
                    <n3-option value="Cherry">Cherry</n3-option>
                    <n3-option value="Orange">Orange</n3-option>
                    <n3-option value="Grape">Grape</n3-option>
                  </n3-select>
                  </n-form>

                  <p>...</p>
                </n3-panel>
                <n3-panel header="Panel #2" index="2">
                      <n3-form ref='form' >
                        <n3-form-item
                            need
                            label="name"
                            :label-col="3">
                        <n3-input
                            show-clean
                            name="name"
                            v-model="model.name"
                            :rules="[{type:'required'}]"
                            :custom-validate="nameValidate">
                        </n3-input>
                        </n3-form-item>

                        <n3-form-item
                            need
                            label="age"
                            :label-col="3">
                        <n3-input-number
                            name="age"
                            v-model="model.age"
                            :rules="[{type:'number'},{type:'required'}]">
                        </n3-input-number>
                        </n3-input>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="address"
                            :label-col="3">
                        <n3-cascader
                            name="address"
                            :options="options"
                            v-model="model.address"
                            :rules="[{type:'required'}]">
                        </n3-cascader>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="birthday"
                            :label-col="3">
                        <n3-datepicker
                            name="birthday"
                            v-model="model.birthday"
                            :rules="[{type:'required'}]">
                        </n3-datepicker>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="school"
                            :label-col="3">
                        <n3-typeahead
                            show-clean
                            name="school"
                            v-model = "model.school"
                            :data="schoolData"
                            :rules="[{type:'required'}]">
                        </n3-typeahead>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="hobby"
                            :label-col="3">
                        <n3-checkbox-group
                            name="hobby"
                            v-model = "model.hobby"
                            :rules="[{type:'required'}]">
                            <n3-checkbox label="0">read</n3-checkbox>
                            <n3-checkbox label="1">sport</n3-checkbox>
                            <n3-checkbox value="2">travel</n3-checkbox>
                        </n3-checkbox-group>
                        </n3-form-item>

                        <n3-form-item
                            need
                            label="sex"
                            :label-col="3">
                        <n3-radio-group
                            name="sex"
                            v-model = "model.sex"
                            :rules="[{type:'required'}]">
                            <n3-radio label="0">male</n3-radio>
                            <n3-radio label="1">female</n3-radio>
                        </n3-radio-group>
                        </n3-form-item>

                        <n3-form-item
                            need
                            label="profession"
                            :label-col="3">
                        <n3-select
                            name="profession"
                            :options='fruitOptions'
                            v-model = "model.profession"
                            :rules="[{type:'required'}]">
                        </n3-select>
                        </n3-form-item>

                        <n3-form-item
                            need
                            label="level"
                            :label-col="3">
                          <n3-slider
                              name="level"
                              v-model="model.level"
                              :rules="[{type:'required'}]">
                          </n3-slider>
                        </n3-form-item>

                        <n3-form-item
                            need
                            label="state"
                            :label-col="3">
                          <n3-switch
                              name="state"
                              v-model = "model.state"
                              :rules="[{type:'required'}]">
                          </n3-switch>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="Favorite singer"
                            :label-col="3">
                          <n3-multiple-input
                              name="star"
                              v-model = "model.star"
                              :rules="[{type:'required'}]">
                          </n3-multiple-input>
                        </n3-form-item>
                        <n3-form-item
                            need
                            label="suggestion"
                            :label-col="3">
                          <n3-textarea
                              name="suggestion"
                              v-model = "model.suggestion"
                              :rules="[{type:'required'}]">
                          </n3-textarea>
                        </n3-form-item>

                        <n3-form-item>
                            <n3-button type="primary" @click.native="submit" >submit</n3-button>
                        </n3-form-item>
                        </n3-form>
                </n3-panel>
                
              </n3-accordion>
            </n3-tab>
          </n3-tabs>
      </n3-column>
    </n3-row>
  </n3-container>
</template>

<script>
export default {
  name: "app",
  methods:{
    nameValidate (val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: 'success'
        }
      } else {
        return {
          validStatus: 'error',
          tips: '请输入中文名'
        }
      }
    },
    submit () {
      this.$refs.form.validateFields(result => {
        console.log(result)
     })
    }
  
  },
  
  data(){
    return {
      model:{
        name:''
      },
      fruitOptions: [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'orange', label: 'Orange'},
        {value: 'grape', label: 'Grape'}
      ],
      arr: ['apple', 'banana'],
      single: 'Apple',
      multiple: [],
      multipleLimit: [],
      custom: []
    }
  },
};
</script>

<style lang="less" scoped>
</style>
