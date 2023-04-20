import { log } from "console";
import PackageManager from "../src/PackageManager";

const config = PackageManager.new("test");
const path = "./package.test.json";

it("Loaded file should be equal to saved (sync)", () => {
    PackageManager.saveSync(config, path);
    const loaded = PackageManager.loadSync(path);
    expect(config).toEqual(loaded);
});

it("Loaded file should be equal to saved (async)", async () => {
    log("saving");
    PackageManager.save(
        config,
        (cb) => {
            PackageManager.load((err, data) => {
                expect(config).toEqual(data);
            }, path);
        },
        path
    );
});
