# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0-beta.4] - 2022-10-26

This release introduces a breaking change that will fix an issue with schema settings being mixed with a components props and cause various bugs with input elements attributes.

### Added
- Added a slot for actions with a prop to access the underlying form so that form actions can be customised

### Changed
- A `props` object has been added to the schema to explicitly set the props that are passed to a component

### Fixed
- Fixed schema settings causing conflicts with the type components props/attributes