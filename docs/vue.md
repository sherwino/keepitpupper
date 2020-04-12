## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Runtime + Compiler vs. Runtime-only

https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

If you need to compile templates on the client (e.g. passing a string to the template option, or mounting to an element using its in-DOM HTML as the template), you will need the compiler and thus the full build:

// this requires the compiler
new Vue({
template: '<div>{{ hi }}</div>'
})

// this does not
new Vue({
render (h) {
return h('div', this.hi)
}
})
