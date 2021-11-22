const app = new Vue({
  el: '#app',
  data: {
    isLoading:true,
    emailList: [],
    httpError: false,
    emailNum: 10,
  },
  methods: {
    getEmail(){
      for (let i = 0; i < this.emailNum; i++) {
        this.isLoading = true;

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
          //console.log(response);
          const data = response.data

          this.emailList.push(data.response)
          //console.log(this.emailList);

          if(this.emailList.lenght === this.emailNum){
            this.isLoading = false;
          }

        })
        .catch((error)=>{
          console.log(error);
          this.httpError = true;
        })
      }      
      }
  },
  mounted(){
    this.getEmail();
  }
})