import type { UserConfig } from "@commitlint/types";

const configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
  rules: {
    "type-enum": [
      2, // severity
      "always", // always or never
      // array of allowed types:
      [
        "build", // Changes that affect the build system or external dependencies.
        "ci", // Changes to CI configuration files and scripts.
        "chore", // Regular maintenance tasks.
        "docs", // Documentation only changes.
        "feat", // A new feature.
        "fix", // A bug fix.
        "perf", // A change that improves performance.
        "refactor", // A code change that neither fixes a bug nor adds a feature.
        "revert", // Reverting previous commits.
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
        "test", // Adding missing tests or correcting existing tests.
      ],
    ],
  },
};

module.exports = configuration;
