# `niv-dep-info-action`

Access the fields of `nix/sources.json` as `outputs` in a GitHub action step.

## Inputs

```yaml
inputs:
  dependency:
    required: true
    description: "The dependency whose data you want to access"
  sources:
    required: false
    description: "The path to the sources.json file containing niv dependencies"
    default: "nix/sources.json"
```

## Outputs

```yaml
outputs:
  branch:
    description: "nixos-unstable-small"
  description:
    description: "Nix Packages collection"
  homepage:
    description: "The homepage of the project"
  owner:
    description: "The owner of the repository"
  repo:
    description: "The repository"
  rev:
    description: "Git revision of the dependency"
  sha256:
    description: "sha256 of the dependency"
  type:
    description: "The type of dependency this is"
  url:
    description: "The URL of the dependency for the given sha256"
  url_template:
    description: "The template used to construct the `url` field"
```
