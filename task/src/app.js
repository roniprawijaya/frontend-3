/**
 * TODO 7.
 * Import fungsi formatUser, findByName, fildetByMajor
 * dari file controllers/UserController.js
 */
// import fungsion dari file user controller
import { formatUser, findByName, filterByMajor } from "./controllers/UserController.js";
/**
 * Fungsi Main.
 * Jangan edit atau hapus fungsi main.
 * Fungsi main untuk testing aplikasi.
 */
(async() => {
    console.log("# Format User: Mr/Mrs");
    const resultFormatUsers = await formatUser("Mr/Mrs");
    console.log(resultFormatUsers);

    console.log("\n# Find User by Name: ali");
    const resultFindByName = await findByName("ali");
    console.log(resultFindByName);

    console.log("\n# Filter User by Major: sirah nabawi");
    const resultFilterByMajor = await filterByMajor("sirah nabawi");
    console.log(resultFilterByMajor);
})();