
<h1 align="center">Pakaje</h1>

<h2 align="center">Load, edit and save a package.json configuration file.</h2>

<h3 align="center"><a href="https://vivienld.github.io/pakaje">TypeDoc</a></h3>

#### Create a default config object

The `Pakaje` static class is the entry point of every instruction. 

```typescript
import {Pakaje} from "pakaje";

const config = Pakaje.new("my-app");
```

This will generate a default `PackageJson` object.

#### Update properties

You can find every property of a package.json file in a `PackageJson` object.

```typescript
config.version = "1.0.1";
config.dependencies = {
    "some-dependency":"^2.3.4"
}
```

And so on...

#### Save configuration

`save` and `saveSync` will save the configuration in the `package.json` in the current directory.

```typescript
// sync 

Pakaje.saveSync(config);

//async

await Pakaje.save(config);

// or...

Pakaje.save(config)
    .then(()=>/**...*/)
    .catch(err=>/**...*/)
```

Adding a path as second parameter will save the configuration in the given file name and path.

```typescript
// sync 

Pakaje.saveSync(config,"./new-path/package.json");

//async

await Pakaje.save(config,"./new-path/package.json");

// or...

Pakaje.save(config,"./new-path/package.json")
    .then(()=>/**...*/)
    .catch(err=>/**...*/)
```

#### Load configuration

`load` and `loadSync` will load the configuration from the `package.json` in the current directory.

```typescript
//sync

Pakaje.saveSync(config);

// async

const loaded = await Pakaje.load(config);

// or...

Pakaje.load(config)
    .then(data=>/**...*/)
    .catch(err=>/**...*/)
```

Adding a path as second parameter will load the configuration from another location.

```typescript
//sync

Pakaje.saveSync(config,"./new-path/package.json");

// async

const loaded = await Pakaje.load(config,"./new-path/package.json");

// or...

Pakaje.load(config,"./new-path/package.json")
    .then(data=>/**...*/)
    .catch(err=>/**...*/)
```
