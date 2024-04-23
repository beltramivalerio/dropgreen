module.exports = {
  apps: [
    {
      name: "dropgreen",
      script: "index.js",
      cwd: "./",
      watch: false,
      ignore_watch: ["**/node_modules", "\\.git", "*.log"]
    }
  ]
};
