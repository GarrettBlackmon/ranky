# Ranky
### Simple, Open-source, Discord Activity Ranking Bot

This is a tiered activity ranking Discord bot. This means as your users send messages in your server Ranky quietly keeps track of how many total messages have been sent by each of your users individually. Once a milestone has been reached the user will we awarded a new role.

Users can use`!rank` To see how many total messages they have sent.

![](https://i.imgur.com/ni22rvF.png)

As your users become more active they will earn role promotions.

![](https://i.imgur.com/9ZzXA41.png)


There are four ranks that the administrator will need to create and order. Ex:

![](https://i.imgur.com/oXDpu5c.png)

By default the message milestones are set to
* 50
* 250
* 500
* 2000

But can be easily changed by modifying `config.json`

![](https://i.imgur.com/BNTVR78.png)

### Installation
Create 4 new roles to reflect different activity levels.

Create a role for Ranky and give it the perms it needs. (I just selected the admin option).

[Follow this guide all the way up to step 5](https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/)

Once Ranky has entered your server, assign it the role with perms from earlier.

To install Ranky you will need to host the code yourself.

Once you have access to your host machine install node.js and npm

once installed run `$ npm install` from within the ranky directory.

To run the bot simply do `$ node index.js`.

###### Note: You may wish to use a production process manager to keep the node app alive. I recommend [pm2](http://pm2.keymetrics.io/)
