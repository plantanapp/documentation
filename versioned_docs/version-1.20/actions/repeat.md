---
id: repeat
title: Repeat
sidebar_label: Repeat
---


Repeats a list of actions until a condition evaluates to false or a number of repetitions is achieved. If you combine the repetitions and condition settings, you can obtain a block of code inside a for that will stop repeating when the condition evaluates to false. The current repetition number can be accessed in the following token: [&lt;BaseNameToken&gt;:CurrentLoopNumber].

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Base Name Token | Provide a name to identify the loop. If you want to use nested loops, provide different Base Name Tokens. Can contain My Tokens. | Yes | None |
| Repetitions | Define a number of repetitions, this number has to be a positive integer. This will make the loop act as a block of code inside a for. Can contain My Tokens. | Yes | None |
| While Condition | Define the condition to decide if the repeat process continues or not. When this condition evaluates to false, the repeat process will stop. This will make the loop act as a block of code inside a while . Can contain My Tokens. | Yes | None |
| Actions | Define the list of actions to execute. | No | None |
| Context Behavior | Depending on how you use this action, you might want to change the scope of the generated tokensUpdate all tokens in the original context option will copy all the tokens generated in each iteration to the original context that was before this actionDon't save the iteration tokens option will NOT keep any tokens generated in this action, not even from one iteration to the other.Update the tokens in the initial context option will allow you to save the tokens in the original context (before this action) and from one iteration to another IF the tokens exists in original context, meaning that you have to initialize them before this action. | No | None |
| Continue on error | Continues to the next iteration even if the current one failed to execute. | No | None |
| On Error | Actions that will be executed if an error is caught in one iteration. If Continue On Error is checked final actions like Display Message / Error won't be executed. | No | None |
