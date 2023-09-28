console.log("Hello via Bun!");

const content = await Bun.file("./package.json").json();
console.log(content);
await Bun.write("./content.json", content);
