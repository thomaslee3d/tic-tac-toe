curl "https://sei-library-api.herokuapp.com/sign-out" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'"
    }
  }'

  echo
