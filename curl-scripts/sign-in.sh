curl "https://sei-library-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password"
  }
}'
