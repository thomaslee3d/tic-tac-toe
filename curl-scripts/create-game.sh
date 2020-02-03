curl "https://sei-library-api.herokuapp.com/game" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}'
