<template>
  <div id="login" v-cloak>
    <div class="loginhear">
      <img class="logo" src="../assets/img/LOGO_03.png" >
      <ul class="login_nav">
        <li class="login_nav_li">Links</li>
        <li class="login_nav_li">Message</li>
        <li class="login_nav_li">Home</li>
      </ul>
    </div>
    <div class="logoncontent">
      <div class="logoncontent_1">
        <div class="logoncontent_1_1">
          <span class="cont_sp cont_sp1">Never say die</span>
          <span class="cont_sp cont_sp1">Take control of <br >your own desting.</span>
        </div>
      </div>
      <div class="logoncontent_2">
        <div class="logoncontent_2_2">
          <span class="cont_sp cont_heard">Sign up</span>
          <!-- username -->
          <span class="cont_sp">Username or Email</span>
          <input type="input" class="cont_name" v-model="item.username">
          <span class="input_danger" v-show="err.username">{{err.username}}</span>
          <!-- Password -->
          <span class="cont_sp">Password</span>
          <input type="password" class="cont_name" v-model="item.password">
          <span class="input_danger_2" v-show="err.password">{{err.password}}</span>
          <!-- Repeat Password -->
          <span class="cont_sp">Repeat Password</span>
          <input type="password" class="cont_name" v-model="item.confrmPassword">
          <span class="input_danger_3" v-show="err.confrmPassword">{{err.confrmPassword}}</span>

          <span class="cont_sp cont_btn">
            <el-button type="danger" @click="logingo()">LOGIN</el-button>
          </span>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        username: '',
        password: '',
        confrmPassword: ''
      },

      err: {
        username: '',
        password: '',
        confrmPassword: ''
      }
    }
  },

  created() {
    this.init();
  },

  mounted() {
    this.li_jq()
  },

  methods: {
    init() {
  
    },

    li_jq() {
      // $('.login_nav_li').fadeToggle()
    },

    logingo() {
        this.err.username = this.item.username? '' : '请输入您的用户名';
        this.err.password = this.item.password? '' : '请输入您的密码';
        this.err.confrmPassword = this.item.confrmPassword? '' : '请输入您的密码确认';


      return
      this.$router.push('menu')
    }

  }
}
</script>

<style>
  @import '../assets/login.css';
</style>
