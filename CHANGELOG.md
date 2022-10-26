# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0-beta.5] - 2022-10-26

### Changed
- Bump package lock version

## [1.0.0-beta.4] - 2022-10-26

This release introduces a breaking change that will fix an issue with schema settings being mixed with a components props and cause various bugs with input element attributes. Any props that are required by the component must now be passed via a props object for example:

```javascript
position_id: {
    type: Select,
    value: 2,
    props: {
        options: [
            { id: 1, name: "Developer" },
            { id: 2, name: "Designer" },
            { id: 3, name: "Manager" },
        ],
        disabled: false,
    }
}
```

### Added
- Added an `actions` slot to the `FormBuilder` component with a prop to access the underlying form so that form actions can be customised
- A `props` object has been added to the schema to explicitly set the props that are passed to a component

### Fixed
- Fixed schema settings causing conflicts with the type components props/attributes