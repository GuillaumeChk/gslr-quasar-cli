# GSLR (gslr-quasar-cli)

Website GSLR Agencements

### Github Pages deploy

```bash
quasar build
```

`(quasar serve)`

commit

`git push origin --delete gh-pages`

`git fetch --prune`

`git subtree push --prefix dist origin gh-pages`

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
