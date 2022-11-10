# Connect The Stars (Clone)
Webesite based game, you start with two actors, your goal is to connect them by laying their movies and its actors, in a six degrees principal fassion.

## Backend

### ROTAS

/api/&lt;route&gt;

All routes will output a json as a result

- actors
    
    - gets actors
- movies
    - gets movies
- match/&lt;actor_id&gt;/&lt;movie_id&gt;
    - says whether or not the actor was in the movies cast
- create_score
    - secured route to save game scores
- authenticate/&lt;username&gt;/&lt;password&gt;
    - gets authentication token or failed login message
- incorporate
    - register user