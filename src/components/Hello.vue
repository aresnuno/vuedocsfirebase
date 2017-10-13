<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <nav class="panel">
        <p class="panel-heading">
          repositories &nbsp <a v-on:click="modal1" class="button is-primary is-small">add</a>
        </p>
        <a  v-for="(book, index) in books" v-on:click="setcontent(index)"class="panel-block is-active" >
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          {{book.Title}}
        </a>
      </nav>
    </div>
    <div class="column is-three-quarters">
      <nav class="panel">
        <p class="panel-heading">
          {{ this.key }} &nbsp
          <a v-show="!edit"v-on:click="setEdit()" class="button is-primary is-small">
            Edit
          </a>
          <span v-show="edit" >
            <a v-on:click="updatecontent()" class="button is-primary is-small">
              Save
            </a>
            <a v-on:click="removerepo" class="button is-danger is-small"> Delete </a>
          </span>
        </p><br />
        <div v-show="edit" class="content">
          <input class="input" type="text" placeholder="Text input" v-model="objects.Title"><br /><br />
          <VueEditor class="editor" v-model="objects.Body"></VueEditor>
        </div>
        <div v-show="!edit" class="content">
          <p v-html="objects.Body"></p>
        </div>
      </nav>
    </div>
    <div v-bind:class="{'is-active' : isActive}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Add New Repo
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label">Repo Name</label>
                <div class="control">
                  <input class="input" v-model="reponame" type="text" placeholder="Jangan Sok Mikir!">
                </div>
              </div>
              <div class="field">
                <label class="align-left label">Repo Title</label>
                <div class="control">
                  <input class="input" v-model="newrepo.Title" type="text" placeholder="Jangan Sok Mikir!">
                </div>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" v-on:click="addrepo" class="card-footer-item">Add</a>
            <a href="#" v-on:click="modal1" class="card-footer-item">Cancel</a>
          </footer>
        </div>
      </div>
      <button class="modal-close is-large" v-on:click="modal1" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
import fire from './fire'
let BooksRef = fire.db.ref('server')
import toastr from 'toastr'

export default {
  name: 'hello',
  components: {
    VueEditor,
    fire,
    toastr
  },
  firebase: {
    books: BooksRef
  },
  data () {
    return {
      content: '',
      title: '',
      key: '',
      edit: false,
      isActive: false,
      field: 'server/' + this.key,
      objects: {
        Title: this.title,
        Body: this.content
      },
      reponame: '',
      newrepo: {
        Title: 'add a title',
        Body: 'add a content'
      }
    }
  },
  created () {
    console.log(this.books)
  },
  methods: {
    setcontent (index) {
      if (!this.edit) {
        this.objects.Body = this.books[index].Body
        this.objects.Title = this.books[index].Title
        this.key = this.books[index]['.key']
        console.log(this.books[index]['.key'])
      }
    },
    updatecontent (book) {
      this.edit = !this.edit
      console.log(this.objects)
      // fire.db.ref('server/' + this.key).update(this.objects)
      fire.db.ref('server/' + this.key).update(this.objects)
      toastr.success('repo Edited successfully')
    },
    setEdit () {
      this.edit = !this.edit
    },
    modal1 () {
      this.isActive = !this.isActive
    },
    addrepo () {
      fire.db.ref('server/' + this.reponame).update(this.newrepo)
      this.isActive = !this.isActive
      toastr.success('repo added successfully')
    },
    removerepo () {
      fire.db.ref('server/' + this.key).remove()
      this.edit = !this.edit
      this.objects.Body = ''
      this.objects.Title = ''
      this.key = ''
      toastr.success('repo removed successfully')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.ql-editor {
  height: 100vh;
}
#quill-container {
  height: 100vh;
}
.column {
  height:100vh;
  text-align: left;
}
.content {
  max-width: 100vw;
}
label {
  text-align: left;
}
</style>
