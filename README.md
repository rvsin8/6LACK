# README

6lack is a lightweight clone of [Slack](https://www.slack.com), a popular chat application. Users can post messages to public channels or private Direct Messages.

## Technologies
- React/Redux
- Ruby on Rails
- PostgresQL
- WebSockets

## Features

### Realtime CRUD With Action Cable

The meat and potatoes of any chat app is...well, chat. Users need to be able to create and update messages, and other users should be able to see those changes in realtime. To achieve that, I used Action Cable, Rails's built-in WebSockets library.

When a user creates a new message, a POST request is sent to the backend, a PostgreSQL database. The message is then sent out over a WebSocket channel to which all logged-in users are subscribed.

When a user logs in, something similar happens. After the user is logged in on the frontend, the React Router will route them to the "#General" chat channel. Then, a PATCH request updates the user's online_status on the backend. Finally, the user's new status is broadcast over a WebSockets channel to which all logged-in users are subscribed.

## Future Improvements

### Signup/Login
- Users should be able to choose an avatar or be assigned one randomly
### Messages
- Messages should be able to contain text, images, emoji and files

For additional information, see the [design docs](https://github.com/rvsin8/6LACK)