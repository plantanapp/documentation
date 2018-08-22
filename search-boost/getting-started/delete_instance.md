### Delete Instance


##### Delete instance (make it inactive)

You delete a SearchBoost instance either by deleting the DNN "Input" module or if you unpatch SearchBoost. You can check if the instance is deleted or not by checking if you can select it from the Switch Instance popup.

You actually still can access the settings page for the deleted instance, change settings and manually index with it. But the instance will be ignored from automatic indexing and from searching of course.

Note: for a patch instance you will still see it in Switch Instance popup. In order to not be indexing you will have to manually remove it from the database (see below):


##### Remove any trace of it

So, you may notice that the deleted SearchBoost instance will keep it's folders and database entries. Although these will be ignored you may want to permanently remove them.

If you want to delete any trace of it (database entries and settings, index files and logs) you will have to do it manually.  
a) To delete disk files just delete the SearchBoost folder from installing portal.  
b) To delete all settings from the database run the following sql: 
```sql 
-- instanceID is "moduleId" or "x_dnn_dnnSEARCH" for patch instances
DELETE [avtSearchBoost_InstanceSettings]
WHERE InstanceId = 'instanceID'

DELETE [avtSearchBoost_InstanceModules]
WHERE InstanceId = 'instanceID'

DELETE [avtSearchBoost_IndexingQueue]
WHERE InstanceId = 'instanceID'

DELETE [avtSearchBoost_InstanceFilters]
WHERE InstanceId = 'instanceID'

DELETE [avtSearchBoost_InstanceRules]
WHERE InstanceId = 'instanceID'

DELETE [avtSearchBoost_Instances]
WHERE InstanceID = 'instanceID'
GO
```
Note: don't delete active instances (basically the ones seen in Switch Instance popup). On accessing the page containing the Input module it would be recreated anyway.