# Services

The Sharp Scheduler triggers work through services and this services are used for firing the triggers. Services run in background and they could not be stopped. Sharp Scheduler has integrated 2 services but it's an open framework and more services can be added. We intend to include more types of services in future releases.

**Quartz Service**

Quartz is a richly featured, open source job scheduling library that can be integrated within virtually any Java application - from the smallest stand-alone application to the largest e-commerce system. Quartz can be used to create simple or complex schedules for executing tens, hundreds, or even tens-of-thousands of jobs; jobs whose tasks are defined as standard Java components that may execute virtually anything you may program them to do. The Quartz Scheduler includes many enterprise-class features, such as support for JTA transactions and clustering.

If your application has tasks that need to occur at given moments in time, or if your system has recurring maintenance jobs then Quartz may be your ideal solution.

Sample uses of job scheduling with Quartz:

+ Driving Process Workflow: As a new order is initially placed, schedule a Job to fire in exactly 2 hours, that will check the status of that order, and trigger a warning notification if an order confirmation message has not yet been received for the order, as well as changing the order's status to 'awaiting intervention'.
+ System Maintenance: Schedule a job to dump the contents of a database into an XML file every business day (all weekdays except holidays) at 11:30 PM.
+ Providing reminder services within an application.

**AppEvents Service**

AppEvents is a critical service because Sharp Scheduler is initialized through this. It automatically install/uninstall...