# Geography

## [Geo:GoogleMap]

Embed a Google Map by specifying coordinates.
Read more about this gadget at //www.google.com/support/youtube/bin/topic.py?topic=16569

Parameters:
  - [1 of 2 required] String Address Google Maps will try to match this address to coordinates.
  - [1 of 2 required] String Coords Longitude and Latidue separated by comma, for example "43.078527,-79.075813".

Syntax:
  - [Geo:GoogleMap(Address="(Literal String)",Coords="(Literal String)")]
  
To test the token, click Test Token button below and replace parameters (if any) with actual values.

Examples:

- [Geo:GoogleMap]

Embed map with no parameters which usually displays the city the visitor comes from. 
- [Geo:GoogleMap(Address="DotNetNuke Corp., 155 Bovet Road, Suite 201, San Mateo, California, 94402, USA")]

Embeds map of given address, in this case the address of DotNetNuke Corporation. 
- [Geo:GoogleMap(Coords="43.078527,-79.075813")]

Opens google map to Niagara Falls using coordinates.