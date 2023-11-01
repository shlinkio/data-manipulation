# Shlink data manipulation

[![Build Status](https://img.shields.io/github/actions/workflow/status/shlinkio/data-manipulation/ci.yml?branch=main&logo=github&style=flat-square)](https://github.com/shlinkio/data-manipulation/actions/workflows/ci.yml?query=workflow%3A%22Continuous+integration%22)
[![Code Coverage](https://img.shields.io/codecov/c/gh/shlinkio/data-manipulation/main?style=flat-square)](https://app.codecov.io/gh/shlinkio/data-manipulation)
[![GitHub release](https://img.shields.io/github/release/shlinkio/data-manipulation.svg?style=flat-square)](https://github.com/shlinkio/data-manipulation/releases/latest)
[![GitHub license](https://img.shields.io/github/license/shlinkio/data-manipulation.svg?style=flat-square)](https://github.com/shlinkio/data-manipulation/blob/main/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://slnk.to/donate)

Userland implementations of some data manipulation helpers extracted from ramda, while decoupling Shlink projects from that library.

The helpers are not design as in ramda, with a second optional argument and returning a curried function in that case.

Instead, they all expect all the arguments from the beginning and return a computed result.
