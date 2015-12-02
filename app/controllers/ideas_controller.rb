class IdeasController < ApplicationController
  respond_to :html, :json, :xml

  def index
    @ideas = Idea.all

    respond_with @ideas
  end
end
