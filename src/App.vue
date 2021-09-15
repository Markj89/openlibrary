<template>
  <div id="app">
    <wrapper>
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <Form method="get" @submit.prevent="getBooks">
                  <fieldset>
                    <Fields placeholder="Book Search" type="text" v-model="field" />
                  </fieldset>
                  <Button>Search</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </wrapper>
  </div>
</template>

<script>
import axios from 'axios'
import Form from './components/Form.vue'
import Fields from './components/Fields.vue'
import Button from './components/Button.vue'
import Wrapper from './components/Wrapper.vue'
export default {
  name: 'App',
  components: {
    'form': Form,
    'button': Button,
    'Fields': Fields,
    'wrapper': Wrapper,
  },
  data() {
    return {
      books: [],
      field: '',
      errors: ''
    };
  },
  methods: {
    async getBooks() {
      try {
        await axios.get(`${process.env.VUE_APP_SEARCH_URL}`, {params: { q: this.field } }).then((response) => {
          if (response.status === 200) {
            this.books = response.data.docs;
            this.findPhrase(this.books, this.field);
          }
        }).catch((error) => {
          console.log(`Error: ${error}`);
          this.errors = error;
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    },
    findPhrase(phrases, name) {
      let phrase = [],
        //results,
        current = null,
        cnt = 0;

      for (let i = 0; i < this.books.length; i++) {
        let text = this.books[i].text;
        for (let j = 0; j < text.length; j++) {
          phrase.push(text[j]);
        }
      }
      const output = this.find(phrase, name);

      for (let k = 0; k < output.length; k++) {
        if (output[k] != current) {
          if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
          }
          current = output[k];
          cnt = 1;
        } else {
            cnt++;
        }
      }
      if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
      }
    },
    find(words, str) {
      str = str.split('');
      return words.filter(function(word) {
        return str.every(function(char) {
          return word.includes(char);
        });
      });
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
fieldset {
  border: 0px;
  padding:0;
}
</style>

