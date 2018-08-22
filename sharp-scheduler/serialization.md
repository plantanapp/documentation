# Serialization

Serialize to CSV

1. create a cron
2. optionally add a trigger
3. add Load Entities (SQL) action with:
    - ``select * from Users`` on SQL Query box
    - an entity name 
    - extract the columns you need in Properties, e.g. Username
4. add the Serialize to CSV action and in Entity Name add the value stored above on Load Entities
    - check Include all fields option
    - select a Field separator
    - select a Folder
    - Store in Relative URL, let's say csvtest
5. add a Send Email action
    - on Attach from Token add the token stored in relative url