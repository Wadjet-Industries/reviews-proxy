# Project Name

> Project description

## Related Projects

  - https://github.com/Wadjet-Industries/reviews-proxy
  - https://github.com/Wadjet-Industries/reservations-proxy
  - https://github.com/Wadjet-Industries/photos-proxy
  - https://github.com/Wadjet-Industries/menus-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

URL format is: `http://domainname:3000/listing/303/`

Each module receives the listing number under a different prop. Without the prop info, passed in as an object in the `ReactDOM.render()` code, it will not accurately return the listing info.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

