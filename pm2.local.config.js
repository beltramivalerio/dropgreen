module.exports = {
  apps: [
    {
      name: "dropgreen",
      script: "index.js",
      cwd: "./server",
      watch: false,
      ignore_watch: ["**/node_modules", "\\.git", "*.log"]
    }
  ]
};
