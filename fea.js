feature: app security when login 
Scenario: check the app has all security measures
    When we open the app
    Then the app request password or facial recognition
    And the app can verify if you are the owner of the account 

feature: notifications when you do a movement
scenario: every single movement should send a notification
    when a movement is realized 
    then the app sned to the owner 
    and the user can check the details with the notification

feature: app homepage 
scenario: check the main elements on homepage are displayed 
    given: i oen the app
    when: i open the menu
    then: i verify that al text and designs are well accommodated
    and: the homepage displays all the menus
