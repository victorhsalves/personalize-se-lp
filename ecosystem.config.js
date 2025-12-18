module.exports = {
    apps: [
      {
        name: "personalize-se-lp",
        script: "node_modules/.bin/next",
        args: "start -H 0.0.0.0 -p 3000",
        env: {
          NODE_ENV: "production",
          NODE_OPTIONS: "--max-old-space-size=512",
        },
      },
    ],
  };
  