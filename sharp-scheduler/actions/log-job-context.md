# Log Job Context

Log Job Context is a function that logs the Job Context and can also be used as a debugging function. This function logs variables like tokens or metadata and provides info about when the job will run again.

![](../assets/Log Job Context.png)

One important concept in Sharp Scheduler is context. At a minimum, a context is data shared between actions. One action can save data in context for other actions down the stack to use.

More context can be given to a job from the Job Edit screen.

![](../assets/Job context.png)

Sharp Scheduler is a Host module - that is, the same set of jobs exists for all portals and Super Users manage them. But it's still possible to have a job execute under a portal using the Context Portal setting. That gives a meaning to the ``[Portal:xxx]`` tokens as well as file paths, page listings, user listings and so on, i.e. everything that comes under a portal.

Additionally, it's possible to also specify a user. If the Context Portal is also set, then the user must exist on the selected portal. Having specified a user, Sharp Scheduler will give meaning to User tokens as well as restrict access to resources based on that user's permissions.
