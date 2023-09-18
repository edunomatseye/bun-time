console.log("Hello via Bun!");

const content = await Bun.file("package.json").text();
console.log(content);
await Bun.write("content.json", content);
