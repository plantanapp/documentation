# Social

#### [Social:AddThis] 

Shares page link in one of 100s of networks exposed by AddThis.com.
Read more about this gadget at http://www.addthis.com/help

* Syntax:

[Social:AddThis]

To test the token, click Test Token button below and replace parameters (if any) with actual values.

* Examples:

[Social:AddThis]

Show bookmarking links.

#### [Social:Disqus]

Embed Disqus comments on the page.

Read more about this gadget at http://docs.disqus.com/developers/

* Parameters:
  + [required] String ShortName ShortName uniquely identifies your account on Disqus.

* Syntax:
  + [Social:Disqus(ShortName="(Literal String)")]
  
  To test the token, click Test Token button below and replace parameters (if any) with actual                 values.
* Examples:
  + [Social:Disqus(ShortName="This Wont Work")]
  
  Embeds Disqus comments on this page. Note that this won't work because the ShortName must be created by you on Disqus and associated with current domain.

#### [Social:FbLike]

This Gadget embeds FaceBook Like button on current page.

Read more about this gadget at http://developers.facebook.com/docs/reference/plugins/like

* Parameters:
  + [optional] String Url URL to Like. If not specified it uses the URL of the webpage.
* Default Value: [URL:FullUrl]
  + [optional]	Enum	Layout	
standard - displays social text to the right of the button and friends' profile photos below. Minimum width: 225 pixels. Default width: 450 pixels. Height: 35 pixels (without photos) or 80 pixels (with photos).
button_count - displays the total number of likes to the right of the button. Minimum width: 90 pixels. Default width: 90 pixels. Height: 20 pixels.
box_count - displays the total number of likes above the button. Minimum width: 55 pixels. Default width: 55 pixels. Height: 65 pixels.
Default Value: standard
Possible Values: standard,button_count,box_count

  [optional]	Enum	ShowFaces	Specifies whether to display profile photos below the button (standard layout only).
Default Value: true
Possible Values: true,false

  [optional]	Int32	Width	The width of the Like button.
Default Value: 450

  [optional]	Int32	Height	The height of the Like button.
Default Value: 80

[required][optional]	Enum	Verb	The verb to display on the button.
Default Value: like
Possible Values: like,recommend

  [optional]	Enum	ColorScheme	The color scheme for the like button.
Default Value: light
Possible Values: light,dark

        Syntax:
        [Social:FbLike(Url="(Literal String)",Layout=[standard,button_count,box_count],ShowFaces=                        [true,false],Width=(Integer Number),Height=(Integer Number),Verb=[like,recommend],ColorScheme=[light,dark])]
        To test the token, click Test Token button below and replace parameters (if any) with actual             values.
        Examples:
        [Social:FbLike]
        Shows Facebook Like button with default settings. 
        [Social:FbLike(Layout=button_count,Verb=recommend,ColorScheme=dark)]
        Shows Facebook Like button in dark theme with count on the right of the button, no tweets             from other users, display Recommend instead of Like. 


[Social:LinkedInProfileButton]


Show a button that links to a LinkedIn profile.
Read more about this gadget at http://www.linkedin.com/profile?promoteProfile=
Parameters:
[required]	String	PublicUrl	Link to user public profile. This link ussually appears on user profile.

[required]	String	Name	Name of person that the url links to.

  [optional]	Enum	Icon	Determines appearance of the button.
Default Value: btn_viewmy_160x33.png
Possible Values: 
btn_viewmy_160x33.png,btn_myprofile_160x33.png,
btn_viewmy_160x25.png,
btn_viewmy_120x33.png,
btn_profile_greytxt_80x15.png,btn_liprofile_blue_80x15.png

Syntax:
[Social:LinkedInProfileButton(PublicUrl="(Literal String)",Name="(Literal String)",
Icon= [btn_viewmy_160x33.png,btn_myprofile_160x33.png,btn_viewmy_160x25.png,
btn_viewmy_120x33.png,btn_profile_greytxt_80x15.png,btn_liprofile_blue_80x15.png])]

To test the token, click Test Token button below and replace parameters (if any) with actual values.
Examples: 
[Social:LinkedInProfileButton(PublicUrl="http://ro.linkedin.com/pub/bogdan-litescu/3/22a/2a2",Name="View Bogdan Litescu Profile")]
Link to my profile on LinkedIn. 



[Social:TweetButton]

        The Tweet Button is a small widget which allows users to easily share your website with their followers.
        Read more about this gadget at http://dev.twitter.com/pages/tweet_button

Parameters:
[optional]	String	Url	URL to Tweet. If not specified it uses the URL of the webpage.
 [optional]	String	Via	Via user.

 [optional]	String	Text	The text that appears inside the tweet. If not specifed it uses page title.

 [optional]	String	Related	Recommended accounts - you can suggest accounts for a user to follow once they have sent a Tweet using your Tweet Button. These suggested accounts and their basic information are shown on the last page of the Share Box flow.

 [optional]	Enum	Count	Count box position. Default is horizontal.
Default Value: horizontal
Possible Values: horizontal,vertical

 [optional]	String	Lang	The language for the Tweet Button. Default is en.

 [optional]	String	CountUrl	URL to which your shared URL resolves to? default is the url being shared.


Syntax:
[Social:TweetButton(Url="(Literal String)",Via="(Literal String)",Text="(Literal String)",Related="(Literal String)",Count=[horizontal,vertical],Lang="(Literal String)",CountUrl="(Literal String)")]
To test the token, click Test Token button below and replace parameters (if any) with actual values.

Examples:
[Social:TweetButton]
Show Tweet button that will share current URL with default settings.
[Social:TweetButton(Count=vertical,Text="Check This!",Url="http://mysite.com")]
Show Tweet button that will share current URL, displaying the count above the button and the specifieddefault text.