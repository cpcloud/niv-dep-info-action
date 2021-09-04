import * as core from "@actions/core";
import * as fs from "fs/promises";

interface Dependency {
  branch: string;
  description: string;
  homepage: string;
  owner: string;
  repo: string;
  rev: string;
  sha256: string;
  type: string;
  url: string;
  url_template: string; // eslint-disable-line camelcase
}

(async function run(): Promise<void> {
  try {
    const dependency = core.getInput("dependency", { required: true });
    const sources = core.getInput("sources", { required: false });
    const dep: Dependency = JSON.parse(await fs.readFile(sources))[dependency];

    for (const [key, value] of Object.entries(dep)) {
      core.setOutput(key, value);
    }
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`); // eslint-disable-line i18n-text/no-en
  }
})();
