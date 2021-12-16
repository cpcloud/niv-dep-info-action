import * as core from "@actions/core";
import * as fs from "fs";

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
  url_template: string;
}

(async function (): Promise<void> {
  try {
    const dependency = core.getInput("dependency", { required: true });
    const sources = core.getInput("sources", { required: false });
    const fileContents = fs.readFileSync(sources, { encoding: "utf8" });
    const dep: Dependency = JSON.parse(fileContents)[dependency];

    for (const [key, value] of Object.entries(dep)) {
      // see https://github.com/actions/toolkit/issues/777
      // for why each call prints a newline
      core.setOutput(key, value);
    }
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`); // eslint-disable-line i18n-text/no-en
  }
})();
