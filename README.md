# react-dock-modal

> A Dockable React Modal Like GMail Compose Window

[![NPM](https://img.shields.io/npm/v/react-dock-modal.svg)](https://www.npmjs.com/package/react-dock-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://crackayus09.github.io/react-dock-modal/

## Install

```bash
npm install --save react-dock-modal
```

OR

```bash
yarn add react-dock-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import DockModal from 'react-dock-modal'
import 'react-dock-modal/dist/index.css'

class Example extends Component {
  render() {
    if (children) {
      //With Children
      return (
        <DockModal>
          <Children />
        </DockModal>
      )
    } else {
      //Without Children
      return <DockModal />
    }
  }
}
```

## Properties

| Prop Name  | Description                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initalType | Initial Type (`dock`, `minim` or `modal`). Default is `dock`.                                                                                                                                                                                                                               |
| headerName | Header Name. Default is `New DockModal`.                                                                                                                                                                                                                                                    |
| bgcolor    | Header Background Colour. Default is `black`.                                                                                                                                                                                                                                               |
| fgcolor    | Header Font Colour. Default is `white`.                                                                                                                                                                                                                                                     |
| fweight    | Header Font Weight. Default is `bold`.                                                                                                                                                                                                                                                      |
| params     | Javascript Object containing following properties. `dockWidth` (Default `40%`), `dockHeight` (Default `70%`), `minimWidth` (Default `25%`), `minimHeight` (Default `10%`), `modalWidth` (Default `70%`) and `modalHeight` (Default `650px`). The values can be in CSS width height formats. |

## License

MIT © [crackayus09](https://github.com/crackayus09)
