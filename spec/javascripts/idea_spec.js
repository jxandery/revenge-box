describe('idea spec', function(){

  it('should find all .idea elements', function(){
    MagicLamp.load('ideas/index');
    expect($('.ideas').length).to eq(1);
  });

  it('should work', function(done){
    MagicLamp.load('ideas/index');
   $.getJSON('/ideas').then(function(ideas){
      expect(ideas.idea.length).to eq(2);
      done();
   });
  });
});
