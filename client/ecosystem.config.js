module.exports = {
  apps: [
    {
      name: 'blog',
      script: './start.js',
      env: {
        HOST: 'localhost',
        PORT: 3000
      }
    }
  ]
}
