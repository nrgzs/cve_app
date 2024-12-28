// import fs from "fs";
// import path from "path";
// import { sendAlert } from "./alertBot.js";

// /**
//  * Saves data to a JSON file.
//  * @param {string} filename - The name of the file.
//  * @param {Array|Object} data - The data to save (Array or Object).
//  */
// export async function saveToFile(filename, data) {
//   const filePath = path.resolve(process.cwd(), filename);

//   try {
//     const jsonData = JSON.stringify(data, null, 2); // Pretty-print JSON
//     await fs.promises.writeFile(filePath, jsonData, "utf-8");
//     console.log(`Data successfully written to ${filename}`);
//   } catch (error) {
//     console.error(`Error writing to file ${filename}:`, error.message);
//   }
// }


// async function saveToFileHandler(app, url, cves, filename = "cve_data.json") {
//   const existingData = await readFileOrCreate(filename);
//   const updatedData = [...existingData];

//   for (let cve of cves) {
//     const cveData = {
//       cve,
//       appProduct: app.product,
//       cpe_name: app.cpe_name,
//       vendor: app.vendor,
//       version: app.version,
//       url,
//     };

//     if (!updatedData.some((entry) => entry.cve === cveData.cve)) {
//       updatedData.push(cveData);
//       sendAlert(cveData.cve, app.product);
//       console.log(`Saved CVE ${cve} for ${app.product} to JSON file.`);
//     } else {
//       console.warn(`CVE ${cve} for ${app.product} already exists in JSON file.`);
//     }
//   }

//   await saveToFile(filename, updatedData);
// }

// async function saveToInitialFile(app, url, cves, filename = 'cve_data.json') {
//   const existingData = await readFileOrCreate(filename);
//   const updatedData = [...existingData];

//   for (let cve of cves) {
//     const cveData = {
//       cve,
//       appProduct: app.product,
//       cpe_name: app.cpe_name,
//       vendor: app.vendor,
//       version: app.version,
//       url,
//     };

//     if (!updatedData.some((entry) => entry.cve === cveData.cve)) {
//       updatedData.push(cveData);
//       console.log(`Saved CVE ${cve} for ${app.product} to JSON file.`);
//     } else {
//       console.warn(
//         `CVE ${cve} for ${app.product} already exists in JSON file.`
//       );
//     }
//   }

//   await saveToFile(filename, updatedData);
// }

// /**
//  * Reads existing JSON file or creates it if it doesn't exist.
//  * @param {string} filename - The name of the file.
//  * @returns {Array} - Parsed JSON data or an empty array.
//  */
// async function readFileOrCreate(filename) {
//   const filePath = path.resolve(process.cwd(), filename);

//   try {
//     const fileData = await fs.promises.readFile(filePath, "utf-8");
//     return JSON.parse(fileData);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       console.warn(`File ${filename} not found. Creating a new file.`);
//       return [];
//     } else {
//       console.error(`Error reading file ${filename}:`, error.message);
//       throw error;
//     }
//   }
// }

// export async function saveToFileAction(app, url, cves) {
//   await saveToFileHandler(app, url, cves, "cve_data.json");
// }

// export async function initialSaveToFile(app, url, cves) {
//   await saveToInitialFile(app, url, cves, "initial_cve_data.json");
// }

