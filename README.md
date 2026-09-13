# Orient FiveM SQL Bot

> **Legacy project** — originally created in 2019 for ESX-based FiveM servers.

Orient FiveM SQL Bot is a Node.js Discord administration bot that allows authorized staff to perform SQL-backed player-management tasks without connecting to the game server directly.

## Overview

The project was built around the ESX / esx-disc ecosystem used by many FiveM servers in 2019–2020. It combines Discord commands with SQL operations to provide remote administrative workflows for staff members.

## Features

- Discord-based SQL administration
- Player identity lookups
- Detailed player information queries
- Character deletion / CK operations
- Ped assignment and removal
- Ban lookup and unban operations
- Phone-number updates
- Billing information lookup
- Inventory and weapon lookup
- Motel/storage inventory lookup
- Configurable job/storage mappings
- Role-based Discord access

## Requirements

- Node.js
- npm
- MySQL-compatible database
- Discord bot application and token
- ESX-style database schema or a compatible custom schema

## Installation

1. Install Node.js.
2. Clone or download the repository.
3. Open a terminal in the project directory.
4. Install dependencies:

```bash
npm install
```

5. Configure the environment variables and database settings.
6. Start the bot using one of the included batch files or directly with Node.js.

## Configuration

### `.env`

Configure the Discord bot token and command prefix:

```env
TOKEN=your_discord_bot_token
PREFIX=!
```

### `config.json`

Update the database connection details and Discord role IDs to match your own server.

### `ortmeslekler.json`

Update the job names so they match the values used in your database.

## Example Commands

```text
!ml.ck <hexid>
!ml.kimlik <hexid>
!ml.adetaykimlik <hexid>
!ml.pedver <hexid> <pedmodel>
!ml.pedal <hexid>
!ml.bankaldır <hexid>
!ml.banbak <hexid>
!ml.telnodeğiş <hexid> <new_number>
!ml.faturabilgi <hexid>
!ml.envbak <hexid>
!ml.motelbak <hexid>
!ml.depobak <storage_code>
```

The exact command behavior depends on the database schema and SQL queries included in the project.

## Modernization Notes

This repository targets an older ESX database structure. To adapt it to a modern ESX, QBCore, or custom FiveM environment, update:

- SQL queries
- table names
- column names
- player identifiers
- inventory structure
- authorization logic
- Discord library/API usage

## Security

Do not commit real credentials to the repository. Keep Discord tokens and production database credentials outside source control and rotate any credential that has ever been exposed publicly.

The current `.env` file contains placeholder values only, but for active development it is still better practice to use an ignored local `.env` file together with an `.env.example` template.

## Legacy Notice

This project is kept public as part of my development history. It reflects the FiveM/ESX ecosystem and coding patterns available when it was originally created and is not presented as a production-ready modern administration platform.
