let vm = new Vue({
    el: 'main',
    data: {
      mensaje: 'Lorem ipsum dolor sit amet',
      pregunta: '',
      respuesta: '',
      mensajeAsincrono: {}
    },
    computed: {
      mensajeReverseComputed() {
        return this.mensaje.split('').reverse().join('');
      }
    },
    //whenever a data changes, these function will run
    watch: {
      pregunta(nuevaPregunta) {
          if (this.pregunta !== '') {
            this.respuesta = 'Esperando a que termines de escribir';
            this.getAnswer();
          } else {
            this.respuesta = '';
          }
  
        },
        getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.respuesta = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.respuesta = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.respuesta = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.respuesta = 'Error! Could not reach the API. ' + error
            })
        },
        // This is the number of milliseconds we wait for the
        // user to stop typing.
        500
      )
    },
    methods: {
        mensajeReverse() {
            return this.mensaje.split('').reverse().join('');
          },
    
      }
    });