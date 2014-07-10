Wombat = (opts) ->
  console.log "Log option works"
  opts = opts or {}
  @name = opts.name or "Wally"
  @eat = (food) ->
    throw Error("D:")  unless food
    "nom nom"

  this
