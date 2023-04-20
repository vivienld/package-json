import { Pakaje } from "../src/Pakaje";

const config = Pakaje.new("test");
const path = "./test/package.test.json";

test("Loaded file should be equal to saved (sync)", () => {
    Pakaje.saveSync(config, path);
    const loaded = Pakaje.loadSync(path);
    expect(config).toEqual(loaded);
});

test("Loaded file should be equal to saved (async)", async () => {
    await Pakaje.save(config, path);
    const loaded = await Pakaje.load(path);
    expect(config).toEqual(loaded);
});
