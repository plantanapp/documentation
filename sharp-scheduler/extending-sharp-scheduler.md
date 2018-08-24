# Extending Sharp Scheduler

Sharp Scheduler features an open configuration architecture where new functionality can be added just from the configuration files. This makes it a very powerful framework as well.

As part of the architecture we’ve addressed a few hot topics that frameworks usually have:

* **Extensibility.** Sharp Scheduler implements a decoupled interface where components (such as triggers, actions and trigger services) are created at runtime via reflection based on the XML configuration.

* **Continuous Updates.** Custom components are not added directly to the main configuration file that comes with Sharp Scheduler.