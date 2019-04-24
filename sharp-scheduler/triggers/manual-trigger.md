# Manually trigger a Scheduler job

There might be cases when you want to manually trigger a Scheduler job from a distance and even though we would define this as an [API Endpoint](/dnnapiendpoint/index.html) type of job here is how it can be done.

All Jobs can be manually triggered via Web Service by using an URL similar to the one below:  
http://URL/en-us/DesktopModules/DnnSharp/SharpScheduler/RunJob.ashx?id=XXXXXXXXXXXXXXXXX  
which can be seen for each job if you expand the Job on the Jobs section.

![Manually trigger Scheduler Job](https://static.dnnsharp.com/documentation/manually_trigger_scheduler_job.png)
