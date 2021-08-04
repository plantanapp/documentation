---
id: faq
title: Actions FAQ
sidebar_label: Actions FAQ
---

**How long can I use an output token?**

It can be used after the action is executed in the action set and/or Workflow and it be available until the end of the process or it is stopped. 

**Can I use the same action multiple times in a row?**

Yes. There is no limit or restriction regarding the usage of this action. Be aware that a bigger than need it Number of recursion may affect the performance.

**Where can I use an output token?**

The output token can be used starting with the next action. It's used just like any other token - in conditions, as parameters to other actions and so on. The output tokens will not be available in the same action where they are defined.


**What type of tokens can I use?**

Module related tokens (form fields, API input parameters etc.), Workflow input parameters, tokens and other output tokens from the same execution/workflow.