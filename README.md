# emigatron
Create free encrypted room for chating. Do not delete messages, just update a token.

<p align="center">
  <img alt="emigatron" src="docs/welcome.png">
</p>

## Installing
### Installing Project
```bash
git clone https://github.com/eminmuhammadi/emigatron.git
```
### Installing dependencies
```bash
npm install && cd server/client install
```

### Editing configuration files
Rename all ```*.extension.sample``` files to ```*.extension``` and fill config data

#### For doing this you need to api keys:
- Firebase 
- Ngrok
- Telegram

# Start project
## Development
```bash
npm run dev
```

## Production
```bash
npm run prod
```

## Commands
- `/help`  - list of commands
- `/start` - start to use bot
- `/token` - update user's token
- `/me`    - show all data for user
- `/join room-name "token"` - join to the room
- `/say room-name "message"` - push message to the room
- `/create room-name` - create room
- `/update room-name` - update token of room
- `/ban room-name "id"` - ban user on room
- `/room room-name` - show all data for room
