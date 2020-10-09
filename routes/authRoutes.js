const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', function (request, response, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(
      request,
      response,
      next
    )
  })

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/recipes')
    }
  )

  app.get(
    '/api/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/recipes')
    }
  )

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/current_user', (req, res) => {
    res.send(req.user)
  })
}
