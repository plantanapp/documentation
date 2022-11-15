---
id: regex
title: Regex
sidebar_label: Regex
---


Parse multiple values at once from same Input

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Input | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Parse Data | Provide a list of rules to parse the Input expression (which can be a token that contains the value from another field or action) into new tokens. Use these new tokens in subsequent actions. If the match contains subgroups, then the first subgroup will be extracted instead of the whole match. | No | None |
| Compile Regex | Compiled Regex runs 30% faster when the pattern isn't changed but takes up more memory. Use it when the action is executed frequently without changes to the pattern.(Note: The first run which will also execute the compilation will be 3 times slower.) | No | False |
