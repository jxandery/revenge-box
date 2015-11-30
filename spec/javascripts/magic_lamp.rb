MagicLamp.fixture do
  Idea.create(title: 'first note', body: 'wowowowowow')
  Idea.create(title: 'second note', body: 'wowowowowow')
  render template: 'ideas/index'
end
