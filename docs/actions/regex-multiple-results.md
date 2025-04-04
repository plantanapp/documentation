---
id: regex-multiple-results
title: Regex  Multiple Results
sidebar_label: Regex  Multiple Results
---


Parse multiple values at once from same Input

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Input | Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Regex Pattern | Provide a rule to parse the Input expression (which can be a token that contains the value from another field or action) into new tokens. | No | None |
| Store CSV in token | Format matched results as csv. Can contain form tokens (for example [Email]) and Tokens. | No | None |
| CSV Field Separator | Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected, defaults to comma. | No | None |
| Store JSON in token | Format matched results as json. Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Store xml in token | Format matched results as xml. Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Compile Regex | Compiled Regex runs 30% faster when the pattern isn't changed but takes up more memory. Use it when the action is executed frequently without changes to the pattern.(Note: The first run which will also execute the compilation will be 3 times slower.) | No | False |
